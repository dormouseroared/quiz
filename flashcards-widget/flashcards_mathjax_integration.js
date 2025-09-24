/**
 * Enhanced MathJax Integration for Flashcards Widget
 * 
 * This code shows how to integrate your existing mathjaxUpdate function
 * with the flashcards widget for proper mathematical typesetting.
 */

/**
 * Enhanced version of updateCardContent with your mathjaxUpdate integration
 * Replace the updateCardContent function in the widget with this version
 */
function updateCardContent() {
    const currentCard = flashcards[currentCardIndex];
    const cardElement = widgetElement.querySelector('.flashcards-card');
    
    // Determine which side to show content for
    const sideClass = isShowingFront ? '.card-front' : '.card-back';
    const contentContainer = cardElement.querySelector(sideClass);
    
    const subtitle = contentContainer.querySelector('.card-subtitle');
    const text = contentContainer.querySelector('.card-text');
    const imageContainer = contentContainer.querySelector('.card-image');
    const reference = contentContainer.querySelector('.card-reference');

    // Update subtitle
    subtitle.textContent = currentCard.subTitle || '';

    // Update text content based on which side we're showing
    const textContent = isShowingFront ? currentCard.front : currentCard.back;
    const imageContent = isShowingFront ? currentCard.frontImage : currentCard.backImage;

    // Set text content
    if (textContent) {
        text.innerHTML = textContent; // Use innerHTML to support HTML formatting and MathJax
        text.style.display = 'block';
    } else {
        text.style.display = 'none';
    }

    // Handle image content
    if (imageContent) {
        imageContainer.innerHTML = `<img src="${imageContent}" alt="Flashcard image" class="card-img">`;
        imageContainer.style.display = 'block';
    } else {
        imageContainer.innerHTML = '';
        imageContainer.style.display = 'none';
    }

    // Update reference
    reference.textContent = currentCard.reference || '';

    // Update CSS classes for styling
    cardElement.classList.toggle('showing-front', isShowingFront);
    cardElement.classList.toggle('showing-back', !isShowingFront);

    // ENHANCED MATHJAX INTEGRATION
    // Use your existing mathjaxUpdate function if available
    if (typeof mathjaxUpdate === 'function') {
        // Create array of elements that might contain math
        const elementsToCheck = [text];
        
        // Add subtitle if it might contain math
        if (subtitle.textContent && subtitle.textContent.includes('$')) {
            elementsToCheck.push(subtitle);
        }
        
        // Add reference if it might contain math  
        if (reference.textContent && reference.textContent.includes('$')) {
            elementsToCheck.push(reference);
        }
        
        // Call your existing mathjaxUpdate function
        mathjaxUpdate(elementsToCheck);
        
        console.log(`🧮 MathJax update called for card ${currentCardIndex + 1} (${isShowingFront ? 'front' : 'back'})`);
    } else if (window.MathJax && window.MathJax.typesetPromise) {
        // Fallback to direct MathJax call if mathjaxUpdate not available
        const elementsToTypeset = [contentContainer];
        
        MathJax.typesetPromise(elementsToTypeset).catch((err) => {
            console.warn('MathJax typesetting failed for flashcard:', err);
        });
        
        console.log(`🧮 Direct MathJax typeset called for card ${currentCardIndex + 1}`);
    }

    console.log(`📄 Updated card ${currentCardIndex + 1} content (${isShowingFront ? 'front' : 'back'})`);
}

/**
 * Enhanced flip card function with MathJax re-typesetting
 * This ensures math is properly rendered after card flips
 */
function flipCard() {
    if (isFlipping) return; // Prevent rapid clicking during animation

    isFlipping = true;
    isShowingFront = !isShowingFront;

    const card = widgetElement.querySelector('.flashcards-card');
    const flipButton = widgetElement.querySelector('.flip-button');
    const flipText = flipButton.querySelector('.flip-text');

    if (config.flipAnimation) {
        // Add flip animation class
        card.classList.add('flipping');

        // Update content halfway through animation
        setTimeout(() => {
            updateCardContent(); // This will call MathJax
            flipText.textContent = isShowingFront ? 'Show Back' : 'Show Front';
        }, 150); // Half of the CSS animation duration

        // Remove animation class and reset state
        setTimeout(() => {
            card.classList.remove('flipping');
            isFlipping = false;
        }, 300);
    } else {
        // Immediate flip without animation
        updateCardContent(); // This will call MathJax
        flipText.textContent = isShowingFront ? 'Show Back' : 'Show Front';
        isFlipping = false;
    }

    // Trigger callback if provided
    if (config.onCardFlip && typeof config.onCardFlip === 'function') {
        config.onCardFlip(currentCardIndex, isShowingFront);
    }

    console.log(`🔄 Card ${currentCardIndex + 1} flipped to ${isShowingFront ? 'front' : 'back'}`);
}

/**
 * Integration helper: Wait for MathJax before showing widget
 * Call this function to ensure MathJax is ready before displaying flashcards
 */
function ensureMathJaxReady(callback) {
    if (window.MathJax && window.MathJax.startup) {
        // MathJax v3 approach
        window.MathJax.startup.promise.then(callback);
    } else if (window.MathJax && window.MathJax.Hub) {
        // MathJax v2 approach
        window.MathJax.Hub.Queue(callback);
    } else {
        // No MathJax or not ready, proceed anyway
        console.warn('MathJax not detected, proceeding without math typesetting');
        callback();
    }
}

/**
 * Modified widget start function with MathJax readiness check
 * This ensures proper math rendering from the beginning
 */
function startWithMathJax() {
    ensureMathJaxReady(() => {
        if (!widgetElement) {
            initialize();
        }

        widgetElement.style.display = 'flex';
        
        // Focus the card for keyboard accessibility
        const card = widgetElement.querySelector('.flashcards-card');
        if (card) {
            card.focus();
        }

        // Ensure initial card content is properly typeset
        updateCardContent();

        console.log('🚀 Flashcards widget started with MathJax support');
    });
}

/**
 * Usage example showing how to integrate with your quiz
 */
function showFlashcardsWithMathJax(flashcardsArray, container) {
    const widgetOptions = {
        autoStart: false, // We'll start manually after MathJax check
        showProgress: true,
        enableKeyboardNav: true,
        flipAnimation: true,
        
        onCardFlip: function(cardIndex, isShowingFront) {
            console.log(`🔄 Card ${cardIndex + 1} flipped to ${isShowingFront ? 'front' : 'back'}`);
        },
        
        onNavigate: function(cardIndex, direction) {
            console.log(`➡️ Navigated ${direction} to card ${cardIndex + 1}`);
        }
    };
    
    // Create widget but don't start yet
    const widget = flashcardsWidget(flashcardsArray, container, widgetOptions);
    
    // Start with MathJax readiness check
    widget.startWithMathJax = startWithMathJax.bind(widget);
    widget.startWithMathJax();
    
    return widget;
}

// Export for use in your quiz application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        updateCardContent, 
        flipCard, 
        ensureMathJaxReady, 
        showFlashcardsWithMathJax 
    };
}