/**
 * Flashcards Widget - Self-contained, reusable flashcard display component
 * 
 * This widget provides a complete flashcard experience with navigation,
 * flip animations, and progress tracking. It's designed to be dropped
 * into any application with minimal integration effort.
 * 
 * Features:
 * - Smooth flip animations between front and back
 * - Keyboard navigation (arrow keys, spacebar, escape)
 * - Progress tracking and navigation
 * - Responsive design that works on mobile and desktop
 * - Clean API for easy integration
 * - Self-contained state management
 * 
 * Usage:
 * const widget = flashcardsWidget(flashcardsArray, containerElement, options);
 * widget.start(); // Begin the flashcard session
 * widget.destroy(); // Clean up when done
 */

export default function flashcardsWidget(flashcards, container, options = {}) {
    // Default configuration - can be overridden by options parameter
    const config = {
        autoStart: false,
        showProgress: true,
        enableKeyboardNav: true,
        flipAnimation: true,
        closeOnComplete: true,
        onComplete: null,
        onCardFlip: null,
        onNavigate: null,
        ...options // Merge in any user-provided options
    }

    // Widget state - encapsulated within the widget
    let currentCardIndex = 0
    let isShowingFront = true
    let isFlipping = false
    let widgetElement = null
    let keyboardHandler = null

    /**
     * Initialize the widget DOM structure and event handlers
     * This creates all the HTML elements needed for the flashcard interface
     */
    function initialize() {
        // Validate inputs
        if (!flashcards || !Array.isArray(flashcards) || flashcards.length === 0) {
            throw new Error('Flashcards widget requires a non-empty array of flashcards')
        }

        if (!container) {
            throw new Error('Flashcards widget requires a valid container element')
        }

        // Create the widget's main container
        widgetElement = document.createElement('div')
        widgetElement.className = 'flashcards-widget'
        widgetElement.innerHTML = createWidgetHTML()

        // Insert the widget into the specified container
        container.appendChild(widgetElement)

        // Set up event handlers
        setupEventHandlers()

        // Initialize with the first card
        updateDisplay()

        console.log(`📚 Flashcards widget initialized with ${flashcards.length} cards`)
    }

    /**
     * Generate the HTML structure for the widget
     * This creates a self-contained interface with all necessary controls
     */
    function createWidgetHTML() {
        return `
            <div class="flashcards-overlay">
                <div class="flashcards-container">
                    <!-- Header with progress and close button -->
                    <div class="flashcards-header">
                        <div class="flashcards-progress">
                            <span class="current-card">${currentCardIndex + 1}</span> / 
                            <span class="total-cards">${flashcards.length}</span>
                        </div>
                        <button class="flashcards-close" aria-label="Close flashcards">×</button>
                    </div>

                    <!-- Main card display area -->
                    <div class="flashcards-card-container">
                        <div class="flashcards-card" tabindex="0">
                            <div class="card-inner">
                                <div class="card-front">
                                    <div class="card-content">
                                        <div class="card-subtitle"></div>
                                        <div class="card-text"></div>
                                        <div class="card-image"></div>
                                        <div class="card-reference"></div>
                                        </div>
                                        </div>
                                        <div class="card-back">
                                        <div class="card-content">
                                        <div class="card-subtitle"></div>
                                        <div class="card-text"></div>
                                        <div class="card-image"></div>
                                        <div class="card-reference"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Instructions and controls -->
                    <div class="flashcards-instructions">
                        <p>Click card to flip • Use arrow keys to navigate</p>
                    </div>

                    <!-- Navigation controls -->
                    <div class="flashcards-controls">
                        <button class="nav-button prev-button" disabled>
                            <span>← Previous</span>
                        </button>
                        
                        <button class="flip-button">
                            <span class="flip-text">Show Back</span>
                        </button>
                        
                        <button class="nav-button next-button">
                            <span>Next →</span>
                        </button>
                    </div>

                    <!-- Progress bar -->
                    <div class="flashcards-progress-bar">
                        <div class="progress-fill"></div>
                    </div>
                </div>
            </div>
        `
    }

    /**
     * Set up all event handlers for widget interaction
     * This includes click handlers, keyboard navigation, and accessibility features
     */
    function setupEventHandlers() {
        const card = widgetElement.querySelector('.flashcards-card')
        const flipButton = widgetElement.querySelector('.flip-button')
        const prevButton = widgetElement.querySelector('.prev-button')
        const nextButton = widgetElement.querySelector('.next-button')
        const closeButton = widgetElement.querySelector('.flashcards-close')

        // Card flip functionality
        card.addEventListener('click', flipCard)
        flipButton.addEventListener('click', flipCard)

        // Navigation
        prevButton.addEventListener('click', previousCard)
        nextButton.addEventListener('click', nextCard)

        // Close widget
        closeButton.addEventListener('click', destroy)

        // Keyboard navigation (if enabled)
        if (config.enableKeyboardNav) {
            keyboardHandler = function (event) {
                if (!widgetElement) return // Widget has been destroyed

                switch (event.key) {
                    case 'ArrowLeft':
                        event.preventDefault()
                        previousCard()
                        break
                    case 'ArrowRight':
                        event.preventDefault()
                        nextCard()
                        break
                    case ' ': // Spacebar
                        event.preventDefault()
                        flipCard()
                        break
                    case 'Escape':
                        event.preventDefault()
                        destroy()
                        break
                }
            }

            document.addEventListener('keydown', keyboardHandler)
        }

        // Focus management for accessibility
        card.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                flipCard()
            }
        })
    }

    /**
     * Flip the current card between front and back
     * Includes animation and state management
     */
    function flipCard() {
        if (isFlipping) return // Prevent rapid clicking during animation

        isFlipping = true
        isShowingFront = !isShowingFront

        const card = widgetElement.querySelector('.flashcards-card')
        const flipButton = widgetElement.querySelector('.flip-button')
        const flipText = flipButton.querySelector('.flip-text')

        if (config.flipAnimation) {
            // Add flip animation class
            card.classList.add('flipping')

            // Update content halfway through animation
            setTimeout(() => {
                updateCardContent()
                flipText.textContent = isShowingFront ? 'Show Back' : 'Show Front'
            }, 150) // Half of the CSS animation duration

            // Remove animation class and reset state
            setTimeout(() => {
                card.classList.remove('flipping')
                isFlipping = false
            }, 300)
        } else {
            // Immediate flip without animation
            updateCardContent()
            flipText.textContent = isShowingFront ? 'Show Back' : 'Show Front'
            isFlipping = false
        }

        // Trigger callback if provided
        if (config.onCardFlip && typeof config.onCardFlip === 'function') {
            config.onCardFlip(currentCardIndex, isShowingFront)
        }

        console.log(`🔄 Card ${currentCardIndex + 1} flipped to ${isShowingFront ? 'front' : 'back'}`)
    }

    /**
     * Navigate to the previous card
     */
    function previousCard() {
        if (currentCardIndex > 0) {
            currentCardIndex--
            isShowingFront = true // Always start new cards on the front
            updateDisplay()

            if (config.onNavigate && typeof config.onNavigate === 'function') {
                config.onNavigate(currentCardIndex, 'previous')
            }

            console.log(`⬅️ Moved to card ${currentCardIndex + 1}`)
        }
    }

    /**
     * Navigate to the next card
     */
    function nextCard() {
        if (currentCardIndex < flashcards.length - 1) {
            currentCardIndex++
            isShowingFront = true // Always start new cards on the front
            updateDisplay()

            if (config.onNavigate && typeof config.onNavigate === 'function') {
                config.onNavigate(currentCardIndex, 'next')
            }

            console.log(`➡️ Moved to card ${currentCardIndex + 1}`)
        } else {
            // Reached the end of the deck
            handleComplete()
        }
    }

    /**
     * Handle completion of the flashcard deck
     */
    function handleComplete() {
        console.log('🎉 Completed all flashcards')

        if (config.onComplete && typeof config.onComplete === 'function') {
            config.onComplete(flashcards.length)
        }

        if (config.closeOnComplete) {
            setTimeout(() => {
                destroy()
            }, 1000) // Give user a moment to see completion
        }
    }

    /**
     * Update the entire display (card content, navigation, progress)
     */
    function updateDisplay() {
        updateCardContent()
        updateNavigation()
        updateProgress()
    }

    /**
     * Update the content displayed on the current card
     * Enhanced to support both text and images on front and back
     */
    function updateCardContent() {
        const currentCard = flashcards[currentCardIndex]
        const cardElement = widgetElement.querySelector('.flashcards-card')

        // Determine which side to show content for
        const sideClass = isShowingFront ? '.card-front' : '.card-back'
        const contentContainer = cardElement.querySelector(sideClass)

        // Get elements with null checking
        const subtitle = contentContainer.querySelector('.card-subtitle')
        const text = contentContainer.querySelector('.card-text')
        const imageContainer = contentContainer.querySelector('.card-image')
        const reference = contentContainer.querySelector('.card-reference')

        // Debug logging to help identify the issue
        console.log('Card element:', cardElement)
        console.log('Content container:', contentContainer)
        console.log('Image container:', imageContainer)
        console.log('Side class:', sideClass)

        // Check if all required elements exist
        if (!subtitle || !text || !imageContainer || !reference) {
            console.error('Missing required card elements:', {
                subtitle: !!subtitle,
                text: !!text,
                imageContainer: !!imageContainer,
                reference: !!reference
            })
            return // Exit early if elements are missing
        }

        // Update subtitle
        subtitle.textContent = currentCard.subTitle || ''

        // Update text content based on which side we're showing
        const textContent = isShowingFront ? currentCard.front : currentCard.back
        const imageContent = isShowingFront ? currentCard.frontImage : currentCard.backImage

        // Set text content
        if (textContent) {
            text.innerHTML = textContent // Use innerHTML to support HTML formatting
            text.style.display = 'block'
        } else {
            text.style.display = 'none'
        }

        // Handle image content with null checking
        if (imageContent && imageContainer) {
            imageContainer.innerHTML = `<img src="/flashcardImages/${imageContent}" alt="Flashcard image" class="card-img">`
            imageContainer.style.display = 'block'
        } else if (imageContainer) {
            imageContainer.innerHTML = ''
            imageContainer.style.display = 'none'
        }

        // Update reference
        if (reference) {
            reference.textContent = currentCard.reference || ''
        }

        // Update CSS classes for styling
        cardElement.classList.toggle('showing-front', isShowingFront)
        cardElement.classList.toggle('showing-back', !isShowingFront)

        // Trigger MathJax re-typesetting if available
        if (window.MathJax && window.MathJax.typesetPromise && text) {
            // Re-typeset the content that was just updated
            const elementsToTypeset = [text]
            if (imageContainer && imageContainer.querySelector('.card-img-caption')) {
                elementsToTypeset.push(imageContainer)
            }

            MathJax.typesetPromise(elementsToTypeset).catch((err) => {
                console.warn('MathJax typesetting failed for flashcard:', err)
            })
        }

        console.log(`📄 Updated card ${currentCardIndex + 1} content (${isShowingFront ? 'front' : 'back'})`)
    }

    /**
     * Update navigation button states
     */
    function updateNavigation() {
        const prevButton = widgetElement.querySelector('.prev-button')
        const nextButton = widgetElement.querySelector('.next-button')
        const flipText = widgetElement.querySelector('.flip-text')

        // Update button states
        prevButton.disabled = currentCardIndex === 0
        nextButton.disabled = false // Next button is always enabled (becomes "complete" on last card)

        // Update button text for last card
        const nextButtonText = nextButton.querySelector('span')
        nextButtonText.textContent = currentCardIndex === flashcards.length - 1 ? 'Complete' : 'Next →'

        // Update flip button text
        flipText.textContent = isShowingFront ? 'Show Back' : 'Show Front'
    }

    /**
     * Update progress indicators
     */
    function updateProgress() {
        if (!config.showProgress) return

        const currentSpan = widgetElement.querySelector('.current-card')
        const progressFill = widgetElement.querySelector('.progress-fill')

        currentSpan.textContent = currentCardIndex + 1

        const progressPercentage = ((currentCardIndex + 1) / flashcards.length) * 100
        progressFill.style.width = progressPercentage + '%'
    }

    /**
     * Start the flashcard session
     * This makes the widget visible and focuses it for keyboard interaction
     */
    function start() {
        if (!widgetElement) {
            initialize()
        }

        widgetElement.style.display = 'flex'

        // Focus the card for keyboard accessibility
        const card = widgetElement.querySelector('.flashcards-card')
        if (card) {
            card.focus()
        }

        console.log('🚀 Flashcards widget started')
    }

    /**
     * Destroy the widget and clean up all resources
     * This removes the DOM elements and event handlers
     */
    function destroy() {
        if (widgetElement) {
            // Remove keyboard event listener
            if (keyboardHandler && config.enableKeyboardNav) {
                document.removeEventListener('keydown', keyboardHandler)
                keyboardHandler = null
            }

            // Remove the widget from the DOM
            widgetElement.remove()
            widgetElement = null

            console.log('🗑️ Flashcards widget destroyed')
        }
    }

    /**
     * Get current widget state (useful for debugging or persistence)
     */
    function getState() {
        return {
            currentCardIndex,
            isShowingFront,
            totalCards: flashcards.length,
            isActive: widgetElement !== null
        }
    }

    /**
     * Jump to a specific card by index
     */
    function goToCard(index) {
        if (index >= 0 && index < flashcards.length) {
            currentCardIndex = index
            isShowingFront = true
            updateDisplay()

            console.log(`🎯 Jumped to card ${index + 1}`)
        }
    }

    // Auto-start if configured
    if (config.autoStart) {
        initialize()
        start()
    }

    // Return the widget's public API
    return {
        start,
        destroy,
        getState,
        goToCard,
        flipCard,
        nextCard,
        previousCard
    }
}

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { flashcardsWidget }
}