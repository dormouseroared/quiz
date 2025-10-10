// mini-console.js - Drop-in development console
(function() {
  'use strict';

  // Inject CSS
  const style = document.createElement('style');
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
      color: #666;
      flex-shrink: 0;
    }

    #mini-console .console-message {
      flex: 1;
    }

    #mini-console .console-line.log { color: #0f0; }
    #mini-console .console-line.error { color: #f44; }
    #mini-console .console-line.warn { color: #fa0; }
    #mini-console .console-line.info { color: #4af; }
  `;
  document.head.appendChild(style);

  // Inject HTML
  const consoleHTML = `
    <div id="mini-console">
      <div class="console-header">
        <span class="console-title">Debug Console</span>
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
      <div class="console-output" id="mini-console-output">
        <div class="console-line info">
          <span class="console-time">--:--:--</span>
          <span class="console-message">Console ready</span>
        </div>
      </div>
    </div>
  `;

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    document.body.insertAdjacentHTML('beforeend', consoleHTML);
    setupDragging();
    setupControls();
    setupGlobalLogger();
  }

  // Dragging functionality
  function setupDragging() {
    let isDragging = false;
    let currentX, currentY, initialX, initialY;

    const miniConsole = document.getElementById('mini-console');
    const header = miniConsole.querySelector('.console-header');

    header.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);

    function dragStart(e) {
      initialX = e.clientX - miniConsole.offsetLeft;
      initialY = e.clientY - miniConsole.offsetTop;
      isDragging = true;
    }

    function drag(e) {
      if (isDragging) {
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        miniConsole.style.right = 'auto';
        miniConsole.style.bottom = 'auto';
        miniConsole.style.left = currentX + 'px';
        miniConsole.style.top = currentY + 'px';
      }
    }

    function dragEnd() {
      isDragging = false;
    }
  }

  // Button controls
  function setupControls() {
    const miniConsole = document.getElementById('mini-console');
    const minimizeBtn = miniConsole.querySelector('.minimize-btn');
    const clearBtn = miniConsole.querySelector('.clear-btn');
    const filterSelect = miniConsole.querySelector('.console-filter');

    minimizeBtn.addEventListener('click', () => {
      miniConsole.classList.toggle('minimized');
      minimizeBtn.textContent = miniConsole.classList.contains('minimized') ? '+' : '−';
    });

    clearBtn.addEventListener('click', () => {
      const output = document.getElementById('mini-console-output');
      output.innerHTML = '';
      logToMini('Console cleared', 'info');
    });

    filterSelect.addEventListener('change', () => {
      applyFilter(filterSelect.value);
    });
  }

  // Filter messages by type
  function applyFilter(filterType) {
    const output = document.getElementById('mini-console-output');
    const lines = output.querySelectorAll('.console-line');
    
    lines.forEach(line => {
      if (filterType === 'all') {
        line.style.display = 'flex';
      } else {
        if (line.classList.contains(filterType)) {
          line.style.display = 'flex';
        } else {
          line.style.display = 'none';
        }
      }
    });
  }

  // Logging function
  function logToMini(message, type = 'log') {
    const output = document.getElementById('mini-console-output');
    if (!output) return;

    const time = new Date().toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
    
    const line = document.createElement('div');
    line.className = `console-line ${type}`;
    
    const timeSpan = document.createElement('span');
    timeSpan.className = 'console-time';
    timeSpan.textContent = time;
    
    const messageSpan = document.createElement('span');
    messageSpan.className = 'console-message';
    
    // Format message - handle objects/arrays
    let formattedMessage;
    if (typeof message === 'object' && message !== null) {
      try {
        formattedMessage = JSON.stringify(message, null, 2);
      } catch (e) {
        formattedMessage = String(message);
      }
    } else {
      formattedMessage = String(message);
    }
    
    messageSpan.textContent = formattedMessage;
    
    line.appendChild(timeSpan);
    line.appendChild(messageSpan);
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
    
    // Keep only last 100 messages
    while (output.children.length > 100) {
      output.removeChild(output.firstChild);
    }
  }

  // Setup global logger
  function setupGlobalLogger() {
    // Expose global function
    window.logToMini = logToMini;

    // Optional: Override console methods to mirror to mini console
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;
    const originalInfo = console.info;

    // Helper to format multiple arguments
    function formatArgs(args) {
      return args.map(arg => {
        if (typeof arg === 'object' && arg !== null) {
          // Check if it's a DOM element
          if (arg instanceof Element) {
            const tag = arg.tagName.toLowerCase();
            const id = arg.id ? `#${arg.id}` : '';
            const classes = arg.className ? `.${arg.className.split(' ').join('.')}` : '';
            const text = arg.textContent ? ` "${arg.textContent.substring(0, 20)}${arg.textContent.length > 20 ? '...' : ''}"` : '';
            return `<${tag}${id}${classes}${text}>`;
          }
          // Try to stringify regular objects
          try {
            return JSON.stringify(arg, null, 2);
          } catch (e) {
            return String(arg);
          }
        }
        return String(arg);
      }).join(' ');
    }

    console.log = function(...args) {
      originalLog.apply(console, args);
      logToMini(formatArgs(args), 'log');
    };

    console.error = function(...args) {
      originalError.apply(console, args);
      logToMini(formatArgs(args), 'error');
    };

    console.warn = function(...args) {
      originalWarn.apply(console, args);
      logToMini(formatArgs(args), 'warn');
    };

    console.info = function(...args) {
      originalInfo.apply(console, args);
      logToMini(formatArgs(args), 'info');
    };
  }

})();
