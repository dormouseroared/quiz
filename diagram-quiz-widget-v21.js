// ===== DIAGRAM QUIZ PLAYER =====
// For use in your quiz app - follows your flashcardsWidget pattern

export const version = "v21"

export default function diagramQuizWidget(quizCards, targetDiv) {
  let currentCardIndex = 0
  let userAnswers = {}
  let availableLabels = []
  let showFeedback = false
  let draggedLabelId = null
  let resizeTimeout = null

  const cssStyleSheetId = "diagram-quiz-widget-css-link"

  const widget = {
    start() {
      console.log("diagramQuizWidget: START")
      console.log("diagramQuizWidget: INJECT CSS STYLE SHEET")

      injectWidgetStylesheet("diagram-quiz-widget.css", cssStyleSheetId)

      if (!quizCards || quizCards.length === 0) {
        targetDiv.innerHTML =  /* html */ `<p>No diagram quiz cards available.</p>`
        return
      }

      targetDiv.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: auto;
      `

      // Add window resize listener
      window.addEventListener('resize', handleResize)

      loadCard(currentCardIndex)
    },

    stop() {
      console.log("diagramQuizWidget: STOP")

      removeWidgetStylesheet(cssStyleSheetId)

      window.removeEventListener('resize', handleResize)
      targetDiv.innerHTML = ''
      targetDiv.style.cssText = ''
    }
  }

  function handleResize() {
    // Debounce resize events
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      const card = quizCards[currentCardIndex]
      if (card) {
        renderBoxes(card, card.obfuscationLevel || 0.7)
      }
    }, 100)
  }

  // this function is to support the tagged template literal
  const html = (strings, ...values) => {
    return strings.reduce((result, str, i) => {
      return result + str + (values[i] || '')
    }, '')
  }

  function injectWidgetStylesheet(href, id) {
    if (document.getElementById(id)) {
      return
    }

    const link = document.createElement('link')

    link.id = id
    link.rel = 'stylesheet'
    link.href = href
    link.type = 'text/css'

    document.head.appendChild(link)
  }

  function removeWidgetStylesheet(id) {

    const link = document.getElementById(id)

    if (link) {
      link.remove()
    }

  }


  function loadCard(index) {
    const card = quizCards[index]
    userAnswers = {}
    showFeedback = false

    // Shuffle labels using Fisher-Yates algorithm for true randomization
    const shuffled = [...card.boxes]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    availableLabels = shuffled.map(b => ({ id: b.id, label: b.label, placed: false }))

    render(card)
  }

  function render(card) {

    const obfuscation = card.obfuscationLevel || 0.7

    targetDiv.innerHTML = /* html */ `
      <div class="diagram-outer">
        <div class="diagram-container">
          <div class="diagram-title-row">
            <h3 class="diagram-title-style">
              ${card.title}
            </h3>
            <div class="diagram-card-x-of-y">
              Card ${currentCardIndex + 1} of ${quizCards.length}
            </div>
          </div>
          
          <div class="diagram-button-container">

            <button 
              id="check-btn" 
              class="diagram-button" 
              onclick="window.diagramQuizCheck()" 
              style="background: #2563eb;"
              >
              ✓ Check Answers
            </button>

            <button 
              id="reset-btn" 
              class="diagram-button"
              onclick="window.diagramQuizReset()" 
              style="background: #f97316;"
              >
              ↻ Reset
            </button>

            <button 
              id="next-btn" 
              class="diagram-button"
              onclick="window.diagramQuizNext()" 
              style="background: #16a34a;"
              >
              Next Card →
            </button>

            <button 
              id="close-btn" 
              class="diagram-button"
              onclick="window.diagramQuizClose()" 
              style="background: #6b7280; margin-left: auto;"
              >
              ✕ Close
            </button>

          </div>
          
          <div id="feedback-area"></div>
          
          <div style="display: flex; gap: 24px;">
            <div style="flex: 1; position: relative; background: #f9fafb; padding: 16px; border-radius: 8px;">
              <img id="quiz-diagram" src="${card.imagePath}" style="max-width: 100%; height: auto; display: block;">
              <div id="answer-boxes" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;"></div>
            </div>
            
            <div style="width: 280px;">
              <div style="background: #f9fafb; padding: 16px; border-radius: 8px;">
                <h4 style="font-weight: bold; color: #374151; margin-bottom: 12px;">Labels:</h4>
                <div id="labels-list" style="display: flex; flex-direction: column; gap: 8px;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `

    // Set up global handlers for onclick
    window.diagramQuizCheck = () => checkAnswers(card)
    window.diagramQuizReset = () => loadCard(currentCardIndex)
    window.diagramQuizNext = () => {
      if (currentCardIndex < quizCards.length - 1) {
        currentCardIndex++
        loadCard(currentCardIndex)
      }
    }
    window.diagramQuizClose = () => widget.stop()

    const nextBtn = document.getElementById('next-btn')
    if (nextBtn && currentCardIndex >= quizCards.length - 1) {
      nextBtn.style.display = 'none'
    }

    // Wait for image to load
    const img = document.getElementById('quiz-diagram')
    img.onload = () => {
      renderBoxes(card, obfuscation)
      renderLabels()
    }
  }

  function renderBoxes(card, obfuscation) {
    const container = document.getElementById('answer-boxes')
    const img = document.getElementById('quiz-diagram')

    // Wait for image to fully load to get natural dimensions
    if (!img.complete || !img.naturalWidth) {
      img.onload = () => renderBoxes(card, obfuscation)
      return
    }

    container.style.top = img.offsetTop + 'px'
    container.style.left = img.offsetLeft + 'px'
    container.style.width = img.offsetWidth + 'px'
    container.style.height = img.offsetHeight + 'px'

    // Calculate scale factors
    const scaleX = img.offsetWidth / img.naturalWidth
    const scaleY = img.offsetHeight / img.naturalHeight

    container.innerHTML = ''

    card.boxes.forEach(box => {
      const div = document.createElement('div')
      const userLabelId = userAnswers[box.id]
      const userLabel = card.boxes.find(b => b.id === userLabelId)
      const isCorrect = showFeedback && userLabelId === box.id
      const isIncorrect = showFeedback && userLabelId && userLabelId !== box.id

      let borderColor = '#3b82f6'
      let bgColor = `rgba(59, 130, 246, ${obfuscation})`

      if (showFeedback) {
        if (isCorrect) {
          borderColor = '#16a34a'
          bgColor = 'rgba(22, 163, 74, 0.2)'
        } else if (isIncorrect) {
          borderColor = '#dc2626'
          bgColor = 'rgba(220, 38, 38, 0.2)'
        }
      }

      div.style.cssText = `
        position: absolute;
        left: ${box.x * scaleX}px;
        top: ${box.y * scaleY}px;
        width: ${box.width * scaleX}px;
        height: ${box.height * scaleY}px;
        border: 4px solid ${borderColor};
        background: ${bgColor};
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 600;
        color: yellow;
        text-align: center;
        padding: 4px;
        transition: all 0.2s;
        pointer-events: auto;
      `

      div.addEventListener('dragover', (e) => {
        e.preventDefault()
        div.style.borderColor = '#7c3aed'
      })

      div.addEventListener('dragleave', () => {
        div.style.borderColor = borderColor
      })

      div.addEventListener('drop', (e) => {
        e.preventDefault()
        handleDrop(box.id, card)
        div.style.borderColor = borderColor
      })

      if (userLabel) {
        div.textContent = userLabel.label
      }

      container.appendChild(div)
    })
  }

  function renderLabels() {
    const list = document.getElementById('labels-list')
    const unplacedLabels = availableLabels.filter(l => !l.placed)

    if (unplacedLabels.length === 0) {
      list.innerHTML = '<p style="font-size: 14px; color: #6b7280; font-style: italic;">All labels placed!</p>'
    } else {
      list.innerHTML = unplacedLabels.map(label => `
        <div draggable="true" data-label-id="${label.id}" class="label-item"
          style="padding: 12px; background: #fef3c7; border: 2px solid #fbbf24; border-radius: 4px; cursor: move; font-size: 14px; font-weight: 500; color: #78716c;">
          ${label.label}
        </div>
      `).join('')

      // Attach drag handlers
      document.querySelectorAll('.label-item').forEach(el => {
        el.addEventListener('dragstart', (e) => {
          draggedLabelId = parseInt(e.target.dataset.labelId)
          e.dataTransfer.effectAllowed = 'move'
        })
      })
    }
  }

  function handleDrop(boxId, card) {
    if (draggedLabelId === null) return

    // Remove from previous position
    const prevBox = Object.entries(userAnswers).find(([_, labelId]) => labelId === draggedLabelId)
    if (prevBox) {
      delete userAnswers[prevBox[0]]
    }

    // Place in new position
    userAnswers[boxId] = draggedLabelId

    // Update label as placed
    availableLabels = availableLabels.map(l =>
      l.id === draggedLabelId ? { ...l, placed: true } : l
    )

    showFeedback = false
    draggedLabelId = null

    renderBoxes(card, card.obfuscationLevel || 0.7)
    renderLabels()
  }

  function checkAnswers(card) {
    showFeedback = true
    const correctCount = Object.entries(userAnswers).filter(([boxId, labelId]) =>
      parseInt(boxId) === labelId
    ).length

    const feedbackArea = document.getElementById('feedback-area')
    const allCorrect = correctCount === card.boxes.length

    feedbackArea.innerHTML = `
        < div style = "padding: 16px; border-radius: 8px; border: 2px solid ${allCorrect ? '#16a34a' : '#f59e0b'}; 
      background: ${ allCorrect ? '#dcfce7' : '#fef3c7' }; margin - bottom: 16px; ">
        < p p style = "font-weight: bold; font-size: 18px; color: blue;" >
          ${ allCorrect ? '🎉 Perfect! All correct!' : `Score: ${correctCount} / ${card.boxes.length} correct` }
        </p >
        ${ !allCorrect ? '<p style="font-size: 14px; margin-top: 4px;">Keep trying! Red borders show incorrect answers.</p>' : '' }
      </div >
        `

    renderBoxes(card, card.obfuscationLevel || 0.7)
  }

  return widget
}

// ===== USAGE EXAMPLES =====

/*
// EDITOR USAGE:
// Create a standalone HTML page for the editor:
const editor = new DiagramQuizEditor('editor-container');

// PLAYER USAGE IN YOUR APP:
// In your existing quiz app, when user clicks diagram quiz button:

const diagramQuizCards = [
  {
    title: "Sinewave Generator",
    imagePath: "diagramQuizImages/sinewave.png",
    obfuscationLevel: 0.7,
    boxes: [
      { id: 1, x: 50, y: 30, width: 100, height: 50, label: "Sinewave lookup table" },
      { id: 2, x: 200, y: 30, width: 120, height: 50, label: "Digital to Analogue Converter" },
      { id: 3, x: 350, y: 30, width: 100, height: 50, label: "Low pass filter" },
      { id: 4, x: 50, y: 150, width: 100, height: 50, label: "Clock" },
      { id: 5, x: 200, y: 150, width: 90, height: 50, label: "Frequency control" }
    ]
  },
  // ... more cards
];

// Get or create the overlay div
const diagramQuizDiv = document.getElementById('diagram-quiz-overlay') || 
  (() => {
    const div = document.createElement('div');
    div.id = 'diagram-quiz-overlay';
    document.body.appendChild(div);
    return div;
  })();

// Start the widget
const widget = diagramQuizWidget(diagramQuizCards, diagramQuizDiv);
widget.start();

// The widget will handle everything until user closes it
// Then you can call widget.stop() if needed

*/

// ===== ALTERNATIVE: Load quiz data from JSON files =====

async function loadDiagramQuizData(jsonFilePaths) {
  const quizCards = []

  for (const path of jsonFilePaths) {
    try {
      const response = await fetch(path)
      const data = await response.json()
      quizCards.push(data)
    } catch (error) {
      console.error(`Failed to load quiz: ${ path } `, error)
    }
  }

  return quizCards
}

/*
// USAGE WITH JSON FILES:
const jsonFiles = [
  'quizzes/sinewave_quiz.json',
  'quizzes/amplifier_quiz.json'
];

loadDiagramQuizData(jsonFiles).then(cards => {
  const widget = diagramQuizWidget(cards, diagramQuizDiv);
  widget.start();
});
*/