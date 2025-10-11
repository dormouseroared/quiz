// mini-console.js v31 - Drop-in development console with search and filtering
;(function () {
  ;("use strict")

  const VERSION = "v31"

  // Debug mode - set to true to use original console methods (for debugging mini-console itself)
  const DEBUG_MODE = false

  // Regex pattern for escaping special regex characters
  const SPECIAL_CHARS = /[.*+?^${}()|[\]\\]/g

  // Inject CSS
  const style = document.createElement("style")
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
      position: relative;
    }

    @keyframes header-flash {
      0%, 100% { background: #2d2d2d; }
      50% { background: #5d3d2d; }
    }

    #mini-console .console-header.has-new {
      animation: header-flash 0.5s ease-out 3;
    }

    #mini-console .console-badge {
      position: absolute;
      top: -8px;
      right: -8px;
      background: #f44;
      color: #fff;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: none;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: bold;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    #mini-console.minimized.has-unread .console-badge {
      display: flex;
      animation: badge-pop 0.3s ease-out;
    }

    @keyframes badge-pop {
      0% { transform: scale(0); }
      50% { transform: scale(1.2); }
      100% { transform: scale(1); }
    }

    @keyframes pulse-new {
      0%, 100% { background: transparent; }
      50% { background: rgba(255, 165, 0, 0.2); }
    }

    #mini-console .console-line.new-message {
      animation: pulse-new 1s ease-out;
    }

    #mini-console .console-title {
      color: #fff;
      font-weight: bold;
      font-size: 11px;
      text-transform: uppercase;
    }

    #mini-console .console-stats {
      color: #bbff00;
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
      color: #666;
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
      color: #fff;
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
        <span class="console-badge">0</span>
        <span class="console-title">Debug Console <span class="console-stats">(0)</span></span>
        <div class="console-controls">
          <select class="console-filter">
            <option value="all">All</option>
            <option value="log">Log</option>
            <option value="info">Info</option>
            <option value="warn">Warn</option>
            <option value="error">Error</option>
          </select>
          <button class="console-btn minimize-btn">-</button>
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
          <span class="console-message">Console ready ${VERSION}</span>
        </div>
      </div>
    </div>
  `

  // set up console interception immediately (before DOM is ready)
  setupGlobalLogger()

  // Wait for DOM to be ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init)
  } else {
    init()
  }

  function init() {
    document.body.insertAdjacentHTML("beforeend", consoleHTML)
    setupDragging()
    setupControls()
    setupKeyboardShortcuts()
    replayBufferedMessages()
    // setupGlobalLogger() - now called about 14 lines before
    updateStats()

    window.miniConsoleUnreadCount = 0
  }

  function setupDragging() {
    let isDragging = false
    let currentX, currentY, initialX, initialY

    const miniConsole = document.getElementById("mini-console")
    const header = miniConsole.querySelector(".console-header")

    header.addEventListener("mousedown", dragStart)
    document.addEventListener("mousemove", drag)
    document.addEventListener("mouseup", dragEnd)

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
        miniConsole.style.right = "auto"
        miniConsole.style.bottom = "auto"
        miniConsole.style.left = currentX + "px"
        miniConsole.style.top = currentY + "px"
      }
    }

    function dragEnd() {
      isDragging = false
    }
  }

  function setupControls() {
    const miniConsole = document.getElementById("mini-console")
    const minimizeBtn = miniConsole.querySelector(".minimize-btn")
    const clearBtn = miniConsole.querySelector(".clear-btn")
    const filterSelect = miniConsole.querySelector(".console-filter")
    const searchInput = miniConsole.querySelector(".console-search")
    const searchClear = miniConsole.querySelector(".console-search-clear")

    minimizeBtn.addEventListener("click", function () {
      miniConsole.classList.toggle("minimized")
      minimizeBtn.textContent = miniConsole.classList.contains("minimized")
        ? "+"
        : "-"

      if (!miniConsole.classList.contains("minimized")) {
        clearUnreadCount()
      }
    })

    clearBtn.addEventListener("click", function () {
      const output = document.getElementById("mini-console-output")
      output.innerHTML = ""
      logToMini(`Console cleared version ${VERSION}`, "info")
      clearUnreadCount()
    })

    filterSelect.addEventListener("change", function () {
      applyFilters(filterSelect.value, searchInput.value)
    })

    searchInput.addEventListener("input", function () {
      applyFilters(filterSelect.value, searchInput.value)
    })

    searchClear.addEventListener("click", function () {
      searchInput.value = ""
      applyFilters(filterSelect.value, "")
      searchInput.focus()
    })

    const output = document.getElementById("mini-console-output")
    output.addEventListener("click", function () {
      clearUnreadCount()
    })
  }

  function clearUnreadCount() {
    window.miniConsoleUnreadCount = 0
    const miniConsole = document.getElementById("mini-console")
    const badge = miniConsole.querySelector(".console-badge")
    miniConsole.classList.remove("has-unread")
    badge.textContent = "0"
  }

  function incrementUnreadCount() {
    const miniConsole = document.getElementById("mini-console")

    if (miniConsole.classList.contains("minimized")) {
      window.miniConsoleUnreadCount++
      const badge = miniConsole.querySelector(".console-badge")
      const count = window.miniConsoleUnreadCount
      badge.textContent = count > 99 ? "99+" : String(count)
      miniConsole.classList.add("has-unread")
    }
  }

  function flashHeader() {
    const header = document.querySelector("#mini-console .console-header")
    header.classList.add("has-new")
    setTimeout(function () {
      header.classList.remove("has-new")
    }, 1500)
  }

  function setupKeyboardShortcuts() {
    document.addEventListener("keydown", function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        const searchInput = document.querySelector(".console-search")
        if (searchInput) searchInput.focus()
      }

      if (e.key === "Escape") {
        const searchInput = document.querySelector(".console-search")
        if (searchInput && document.activeElement === searchInput) {
          searchInput.value = ""
          const filterSelect = document.querySelector(".console-filter")
          applyFilters(filterSelect.value, "")
          searchInput.blur()
        }
      }

      if ((e.ctrlKey || e.metaKey) && e.key === "l") {
        e.preventDefault()
        const output = document.getElementById("mini-console-output")
        output.innerHTML = ""
        logToMini("Console cleared", "info")
      }
    })
  }

  function escapeRegex(str) {
    return str.replace(SPECIAL_CHARS, "\\$&")
  }

  function highlightText(text, search) {
    const escaped = escapeRegex(search)
    const pattern = "(" + escaped + ")"
    const regex = new RegExp(pattern, "gi")
    return text.replace(regex, '<span class="highlight">$1</span>')
  }

  function applyFilters(filterType, searchText) {
    const output = document.getElementById("mini-console-output")
    const lines = output.querySelectorAll(".console-line")
    const searchLower = searchText.toLowerCase()

    lines.forEach(function (line) {
      const messageSpan = line.querySelector(".console-message")
      const originalText =
        messageSpan.getAttribute("data-original") || messageSpan.textContent

      if (!messageSpan.hasAttribute("data-original")) {
        messageSpan.setAttribute("data-original", originalText)
      }

      const typeMatch =
        filterType === "all" || line.classList.contains(filterType)
      const searchMatch =
        searchText === "" || originalText.toLowerCase().includes(searchLower)

      if (searchText && searchMatch) {
        messageSpan.innerHTML = highlightText(originalText, searchText)
      } else {
        messageSpan.textContent = originalText
      }

      line.style.display = typeMatch && searchMatch ? "flex" : "none"
    })

    updateStats()
  }

  function updateStats() {
    const output = document.getElementById("mini-console-output")
    // console.log("output:", output)
    if (!output) {
      alert("too early!")
      return
    }

    const total = output.children.length
    const visible = Array.from(output.children).filter(function (line) {
      return line.style.display !== "none"
    }).length

    const statsSpan = document.querySelector(".console-stats")
    if (statsSpan) {
      statsSpan.textContent =
        visible === total
          ? "(" + total + ")"
          : "(" + visible + "/" + total + ")"
    }
  }

  // Buffer for messages that arrive before the DOM is ready
  const messageBuffer = []

  function logToMini(message, type) {
    if (!type) type = "log"

    const output = document.getElementById("mini-console-output")
    if (!output) {
      // alert("Aha!! in logToMini we are buffering")
      // buffer message if DOM isn't ready yet
      messageBuffer.push({ message: message, type: type, time: new Date() })
      // alert(messageBuffer)
      return
    }

    const time = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })

    const line = document.createElement("div")
    line.className = "console-line " + type + " new-message"

    setTimeout(function () {
      line.classList.remove("new-message")
    }, 1000)

    const timeSpan = document.createElement("span")
    timeSpan.className = "console-time"
    timeSpan.textContent = time

    const messageSpan = document.createElement("span")
    messageSpan.className = "console-message"

    let formattedMessage
    if (typeof message === "object" && message !== null) {
      try {
        formattedMessage = JSON.stringify(message, null, 2)
      } catch (e) {
        formattedMessage = String(message)
      }
    } else {
      formattedMessage = String(message)
    }

    messageSpan.textContent = formattedMessage
    messageSpan.setAttribute("data-original", formattedMessage)

    line.appendChild(timeSpan)
    line.appendChild(messageSpan)
    output.appendChild(line)
    output.scrollTop = output.scrollHeight

    if (type === "error" || type === "warn") {
      incrementUnreadCount()
      flashHeader()
    } else {
      incrementUnreadCount()
    }

    const filterSelect = document.querySelector(".console-filter")
    const searchInput = document.querySelector(".console-search")
    if (filterSelect && searchInput) {
      const filterType = filterSelect.value
      const searchText = searchInput.value

      if (filterType !== "all" && !line.classList.contains(filterType)) {
        line.style.display = "none"
      } else if (searchText) {
        const searchLower = searchText.toLowerCase()
        if (!formattedMessage.toLowerCase().includes(searchLower)) {
          line.style.display = "none"
        } else {
          messageSpan.innerHTML = highlightText(formattedMessage, searchText)
        }
      }
    }

    updateStats()

    while (output.children.length > 100) {
      output.removeChild(output.firstChild)
    }
  }

  function replayBufferedMessages() {
    messageBuffer.forEach(function (buffered) {
      const output = document.getElementById("mini-console-output")
      if (!output) {
        return
      }

      const time = buffered.time.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })

      const line = document.createElement("div")
      line.className = "console-line " + buffered.type

      const timeSpan = document.createElement("span")
      timeSpan.className = "console-time"
      timeSpan.textContent = time

      const messageSpan = document.createElement("span")
      messageSpan.className = "console-message"

      let formattedMessage
      if (typeof buffered.message === "object" && buffered.message !== null) {
        try {
          formattedMessage = JSON.stringify(buffered.message, null, 2)
        } catch (e) {
          formattedMessage = String(buffered.message)
        }
      } else {
        formattedMessage = String(buffered.message)
      }

      messageSpan.textContent = formattedMessage
      messageSpan.setAttribute("data-original", formattedMessage)

      line.appendChild(timeSpan)
      line.appendChild(messageSpan)
      output.appendChild(line)
    })

    messageBuffer.length = 0 // Clear the buffer
    updateStats()
  }

  function setupGlobalLogger() {
    window.logToMini = logToMini

    const originalLog = console.log
    const originalError = console.error
    const originalWarn = console.warn
    const originalInfo = console.info

    if (DEBUG_MODE) {
      window._originalConsole = {
        log: originalLog,
        error: originalError,
        warn: originalWarn,
        info: originalInfo,
      }
    }

    function formatArgs(args) {
      return args
        .map(function (arg) {
          if (typeof arg === "object" && arg !== null) {
            if (arg instanceof Element) {
              const tag = arg.tagName.toLowerCase()
              const id = arg.id ? "#" + arg.id : ""
              const classes = arg.className
                ? "." + arg.className.split(" ").join(".")
                : ""
              const text = arg.textContent
                ? ' "' +
                  arg.textContent.substring(0, 20) +
                  (arg.textContent.length > 20 ? "..." : "") +
                  '"'
                : ""
              return "<" + tag + id + classes + text + ">"
            }
            try {
              return JSON.stringify(arg, null, 2)
            } catch (e) {
              return String(arg)
            }
          }
          return String(arg)
        })
        .join(" ")
    }

    if (!DEBUG_MODE) {
      console.log = function () {
        originalLog.apply(console, arguments)
        logToMini(formatArgs(Array.prototype.slice.call(arguments)), "log")
      }

      console.error = function () {
        originalError.apply(console, arguments)
        logToMini(formatArgs(Array.prototype.slice.call(arguments)), "error")
      }

      console.warn = function () {
        originalWarn.apply(console, arguments)
        logToMini(formatArgs(Array.prototype.slice.call(arguments)), "warn")
      }

      console.info = function () {
        originalInfo.apply(console, arguments)
        logToMini(formatArgs(Array.prototype.slice.call(arguments)), "info")
      }
    } else {
      // In debug mode, log a message using the original console
      originalLog.info(
        "[mini-console] DEBUG_MODE is ON - console interception disabled",
      )
    }
  }
})()
