// mini-console.js - Drop-in development console with search and filtering
(function () {
  'use strict'

  // Inject CSS
  const style = document.createElement('style')
  style.textContent = `
    #mini-console {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 350px;
      background: rgba(20, 20, 20, 0.95);
      border-radius: 6px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
      z-index: 99999;
      display: flex;
      flex-direction: column;
      font-family: 'Courier New', monospace;
      font-size: 12px;
    }

    #mini-console.minimized {
      width: auto;
    }

    #mini-console .console-header {
      background: #2d2d2d;
      padding: 8px 12px;
      border-radius: 6px 6px 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: move;
      user-select: none;
    }

    #mini-console .console-title {
      color: #fff;
      font-weight: bold;
      font-size: 11px;
      text-transform: uppercase;
    }

    #mini-console .console-stats {
      color: #999;
      font-weight: normal;
      font-size: 10px;
    }

    #mini-console .console-controls {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    #mini-console .console-filter {
      background: #444;
      border: none;
      color: #fff;
      padding: 2px 6px;
      border-radius: 3px;
      cursor: pointer;
      font-size: 10px;
      font-family: 'Courier New', monospace;
    }

    #mini-console .console-filter:hover {
      background: #555;
    }

    #mini-console .console-btn {
      background: #444;
      border: none;
      color: #fff;
      padding: 2px 8px;
      border-radius: 3px;
      cursor: pointer;
      font-size: 10px;
      transition: background 0.2s;
    }

    #mini-console .console-btn:hover {
      background: #555;
    }

    #mini-console .console-search-container {
      display: flex;
      gap: 4px;
      padding: 4px 8px;
      background: #1a1a1a;
      border-bottom: 1px solid #333;
    }

    #mini-console.minimized .console-search-container {
      display: none;
    }

    #mini-console .console-search {
      flex: 1;
      background: #2d2d2d;
      border: 1px solid #444;
      color: #fff;
      padding: 4px 8px;
      border-radius: 3px;
      font-size: 11px;
      font-family: 'Courier New', monospace;
    }

    #mini-console .console-search:focus {
      outline: none;
      border-color: #666;
    }

    #mini-console .console-search::placeholder {
      color: #FFF;
    }

    #mini-console .console-search-clear {
      background: #444;
      border: none;
      color: #fff;
      padding: 4px 8px;
      border-radius: 3px;
      cursor: pointer;
      font-size: 14px;
      line-height: 1;
      transition: background 0.2s;
    }

    #mini-console .console-search-clear:hover {
      background: #555;
    }

    #mini-console .console-output {
      max-height: 250px;
      overflow-y: auto;
      padding: 8px;
      color: #0f0;
      min-height: 100px;
    }

    #mini-console.minimized .console-output {
      display: none;
    }

    #mini-console .console-output::-webkit-scrollbar {
      width: 8px;
    }

    #mini-console .console-output::-webkit-scrollbar-track {
      background: #1a1a1a;
    }

    #mini-console .console-output::-webkit-scrollbar-thumb {
      background: #444;
      border-radius: 4px;
    }

    #mini-console .console-line {
      margin: 3px 0;
      word-break: break-word;
      display: flex;
      gap: 8px;
    }

    #mini-console .console-time {
      color: #FFF;
      flex-shrink: 0;
    }

    #mini-console .console-message {
      flex: 1;
    }

    #mini-console .console-message .highlight {
      background: #fa0;
      color: #000;
      padding: 0 2px;
      border-radius: 2px;
    }

    #mini-console .console-line.log { color: #0f0; }
    #mini-console .console-line.error { color: #f44; }
    #mini-console .console-line.warn { color: #fa0; }
    #mini-console .console-line.info { color: #4af; }
  `
  document.head.appendChild(style)

  // Inject HTML
  const consoleHTML = `
    <div id="mini-console">
      <div class="console-header">
        <span class="console-title">Debug Console <span class="console-stats">(0)</span></span>
        <div class="console-controls">
          <select class="console-filter">
            <option value="all">All</option>
            <option value="log">Log</option>
            <option value="info">Info</option>
            <option value="warn">Warn</option>
            <option value="error">Error</option>
          </select>
          <button class="console-btn minimize-btn">−</button>
          <button class="console-btn clear-btn">Clear</button>
        </div>
      </div>
      <div class="console-search-container">
        <input type="text" class="console-search" placeholder="Search messages... (Ctrl+K)">
        <button class="console-search-clear">×</button>
      </div>
      <div class="console-output" id="mini-console-output">
        <div class="console-line info">
          <span class="console-time">--:--:--</span>
          <span class="console-message">Console ready</span>
        </div>
      </div>
    </div>
  `

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }

  function init() {
    document.body.insertAdjacentHTML('beforeend', consoleHTML)
    setupDragging()
    setupControls()
    setupKeyboardShortcuts()
    setupGlobalLogger()
    updateStats()
  }

  // Dragging functionality
  function setupDragging() {
    let isDragging = false
    let currentX, currentY, initialX, initialY

    const miniConsole = document.getElementById('mini-console')
    const header = miniConsole.querySelector('.console-header')

    header.addEventListener('mousedown', dragStart)
    document.addEventListener('mousemove', drag)
    document.addEventListener('mouseup', dragEnd)

    function dragStart(e) {
      initialX = e.clientX - miniConsole.offsetLeft
      initialY = e.clientY - miniConsole.offsetTop
      isDragging = true
    }

    function drag(e) {
      if (isDragging) {
        e.preventDefault()
        currentX = e.clientX - initialX
        currentY = e.clientY - initialY
        miniConsole.style.right = 'auto'
        miniConsole.style.bottom = 'auto'
        miniConsole.style.left = currentX + 'px'
        miniConsole.style.top = currentY + 'px'
      }
    }

    function dragEnd() {
      isDragging = false
    }
  }

  // Button controls
  function setupControls() {
    const miniConsole = document.getElementById('mini-console')
    const minimizeBtn = miniConsole.querySelector('.minimize-btn')
    const clearBtn = miniConsole.querySelector('.clear-btn')
    const filterSelect = miniConsole.querySelector('.console-filter')
    const searchInput = miniConsole.querySelector('.console-search')
    const searchClear = miniConsole.querySelector('.console-search-clear')

    minimizeBtn.addEventListener('click', () => {
      miniConsole.classList.toggle('minimized')
      minimizeBtn.textContent = miniConsole.classList.contains('minimized') ? '+' : '−'
    })

    clearBtn.addEventListener('click', () => {
      const output = document.getElementById('mini-console-output')
      output.innerHTML = ''
      logToMini('Console cleared', 'info')
    })

    filterSelect.addEventListener('change', () => {
      applyFilters(filterSelect.value, searchInput.value)
    })

    searchInput.addEventListener('input', () => {
      applyFilters(filterSelect.value, searchInput.value)
    })

    searchClear.addEventListener('click', () => {
      searchInput.value = ''
      applyFilters(filterSelect.value, '')
      searchInput.focus()
    })
  }

  // Keyboard shortcuts
  function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Ctrl/Cmd + K to focus search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        const searchInput = document.querySelector('.console-search')
        if (searchInput) searchInput.focus()
      }

      // Escape to clear search when focused
      if (e.key === 'Escape') {
        const searchInput = document.querySelector('.console-search')
        if (searchInput && document.activeElement === searchInput) {
          searchInput.value = ''
          const filterSelect = document.querySelector('.console-filter')
          applyFilters(filterSelect.value, '')
          searchInput.blur()
        }
      }

      // Ctrl/Cmd + L to clear console
      if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault()
        const output = document.getElementById('mini-console-output')
        output.innerHTML = ''
        logToMini('Console cleared', 'info')
      }
    })
  }

  // Combined filter and search with highlighting
  function applyFilters(filterType, searchText) {
    const output = document.getElementById('mini-console-output')
    const lines = output.querySelectorAll('.console-line')
    const searchLower = searchText.toLowerCase()

    lines.forEach(line => {
      const messageSpan = line.querySelector('.console-message')
      const originalText = messageSpan.getAttribute('data-original') || messageSpan.textContent

      // Store original text
      if (!messageSpan.hasAttribute('data-original')) {
        messageSpan.setAttribute('data-original', originalText)
      }

      const typeMatch = filterType === 'all' || line.classList.contains(filterType)
      const searchMatch = searchText === '' || originalText.toLowerCase().includes(searchLower)

      // Highlight search terms
      if (searchText && searchMatch) {
        const escapedSearch = searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        const regex = new RegExp(`(${escapedSearch})`, 'gi')
        messageSpan.innerHTML = originalText.replace(regex, '<span class="highlight">$1</span>')
      } else {
        messageSpan.textContent = originalText
      }

      line.style.display = (typeMatch && searchMatch) ? 'flex' : 'none'
    })

    updateStats()
  }

  // Update message counter
  function updateStats() {
    const output = document.getElementById('mini-console-output')
    if (!output) return

    const total = output.children.length
    const visible = Array.from(output.children).filter(line =>
      line.style.display !== 'none'
    ).length

    const statsSpan = document.querySelector('.console-stats')
    if (statsSpan) {
      statsSpan.textContent = visible === total ? `(${total})` : `(${visible}/${total})`
    }
  }

  // Logging function
  function logToMini(message, type = 'log') {
    const output = document.getElementById('mini-console-output')
    if (!output) return

    const time = new Date().toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })

    const line = document.createElement('div')
    line.className = `console-line ${type}`

    const timeSpan = document.createElement('span')
    timeSpan.className = 'console-time'
    timeSpan.textContent = time

    const messageSpan = document.createElement('span')
    messageSpan.className = 'console-message'

    // Format message - handle objects/arrays
    let formattedMessage
    if (typeof message === 'object' && message !== null) {
      try {
        formattedMessage = JSON.stringify(message, null, 2)
      } catch (e) {
        formattedMessage = String(message)
      }
    } else {
      formattedMessage = String(message)
    }

    messageSpan.textContent = formattedMessage
    messageSpan.setAttribute('data-original', formattedMessage)

    line.appendChild(timeSpan)
    line.appendChild(messageSpan)
    output.appendChild(line)
    output.scrollTop = output.scrollHeight

    // Apply current filters to new message
    const filterSelect = document.querySelector('.console-filter')
    const searchInput = document.querySelector('.console-search')
    if (filterSelect && searchInput) {
      const filterType = filterSelect.value
      const searchText = searchInput.value

      if (filterType !== 'all' && !line.classList.contains(filterType)) {
        line.style.display = 'none'
      } else if (searchText) {
        const searchLower = searchText.toLowerCase()
        if (!formattedMessage.toLowerCase().includes(searchLower)) {
          line.style.display = 'none'
        } else {
          const escapedSearch = searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
          const regex = new RegExp(`(${escapedSearch})`, 'gi')
          messageSpan.innerHTML = formattedMessage.replace(regex, '<span class="highlight">$1</span>')
        }
      }
    }

    // Update stats
    updateStats()

    // Keep only last 100 messages
    while (output.children.length > 100) {
      output.removeChild(output.firstChild)
    }
  }

  // Setup global logger
  function setupGlobalLogger() {
    // Expose global function
    window.logToMini = logToMini

    // Optional: Override console methods to mirror to mini console
    const originalLog = console.log
    const originalError = console.error
    const originalWarn = console.warn
    const originalInfo = console.info

    // Helper to format multiple arguments
    function formatArgs(args) {
      return args.map(arg => {
        if (typeof arg === 'object' && arg !== null) {
          // Check if it's a DOM element
          if (arg instanceof Element) {
            const tag = arg.tagName.toLowerCase()
            const id = arg.id ? `#${arg.id}` : ''
            const classes = arg.className ? `.${arg.className.split(' ').join('.')}` : ''
            const text = arg.textContent ? ` "${arg.textContent.substring(0, 20)}${arg.textContent.length > 20 ? '...' : ''}"` : ''
            return `<${tag}${id}${classes}${text}>`
          }
          // Try to stringify regular objects
          try {
            return JSON.stringify(arg, null, 2)
          } catch (e) {
            return String(arg)
          }
        }
        return String(arg)
      }).join(' ')
    }

    console.log = function (...args) {
      originalLog.apply(console, args)
      logToMini(formatArgs(args), 'log')
    }

    console.error = function (...args) {
      originalError.apply(console, args)
      logToMini(formatArgs(args), 'error')
    }

    console.warn = function (...args) {
      originalWarn.apply(console, args)
      logToMini(formatArgs(args), 'warn')
    }

    console.info = function (...args) {
      originalInfo.apply(console, args)
      logToMini(formatArgs(args), 'info')
    }
  }

})()
