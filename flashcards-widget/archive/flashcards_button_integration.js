/**
 * Button-Triggered Flashcards Integration
 * 
 * This code shows how to move the flashcards logic from showFlashcards()
 * to the button event handler, so flashcards only appear when requested.
 */

// Global variable to track current widget
let currentFlashcardsWidget = null;

/**
 * Modified showFlashcards function - now just prepares data
 * This function should be called to check if flashcards are available,
 * but doesn't display them automatically
 */
function showFlashcards(questionIndex) {
    const currentQuestionData = quizQuestions[questionIndex];
    
    // Your existing logic to filter flashcards by syllabus
    const relatedFlashcards = findCards(currentQuestionData); // Your existing findCards function
    
    console.log(`📚 Found ${relatedFlashcards.length} related flashcards for question ${questionIndex + 1}`);
    
    // Update button visibility based on available flashcards
    updateFlashcardsButtonVisibility(relatedFlashcards.length > 0);
    
    // Return the flashcards data for potential use
    return relatedFlashcards;
}

/**
 * Update flashcards button visibility and state
 */
function updateFlashcardsButtonVisibility(hasFlashcards) {
    const flashcardsButton = document.getElementById('flashcardsButton');
    
    if (!flashcardsButton) {
        console.warn('Flashcards button not found');
        return;
    }
    
    if (hasFlashcards) {
        flashcardsButton.style.display = 'inline-block';
        flashcardsButton.disabled = false;
        
        // Get count for button text
        const flashcards = showFlashcards(currentQuestion);
        flashcardsButton.textContent = `📚 Review ${flashcards.length} Flashcard${flashcards.length === 1 ? '' : 's'}`;
    } else {
        flashcardsButton.style.display = 'none';
    }
}

/**
 * Flashcards button event handler - this is where the magic happens now
 * This replaces the automatic display with user-triggered display
 */
function flashcardsButtonHandler(event) {
    console.log('🔘 Flashcards button clicked');
    
    // Optional: Add monitoring if you're using the monitoring system
    if (typeof captureState === 'function') {
        captureState('quiz-ui', 'flashcardsButton-clicked', currentQuestion);
    }
    
    // Get the button element for UI feedback
    const button = event.target;
    const originalText = button.textContent;
    
    // Show loading state
    button.disabled = true;
    button.classList.add('loading');
    button.textContent = 'Loading...';
    
    try {
        // Get flashcards for current question
        const flashcardsArray = showFlashcards(currentQuestion);
        
        if (flashcardsArray.length === 0) {
            showNoFlashcardsMessage();
            return;
        }
        
        // Clean up any existing widget
        if (currentFlashcardsWidget) {
            currentFlashcardsWidget.destroy();
            currentFlashcardsWidget = null;
        }
        
        // Get container element
        const container = document.body; // Or whatever container you prefer
        
        // Configure widget options
        const widgetOptions = {
            autoStart: true,
            showProgress: true,
            enableKeyboardNav: true,
            flipAnimation: true,
            closeOnComplete: false,
            
            // Callbacks for integration
            onComplete: function(totalCards) {
                console.log(`🎉 User completed ${totalCards} flashcards`);
                showFlashcardsCompletionMessage(totalCards);
                
                // Optional: Analytics tracking
                if (typeof recordFlashcardsCompletion === 'function') {
                    recordFlashcardsCompletion(currentQuestion, totalCards);
                }
            },
            
            onCardFlip: function(cardIndex, isShowingFront) {
                console.log(`🔄 Card ${cardIndex + 1} flipped to ${isShowingFront ? 'front' : 'back'}`);
                
                // Optional: Analytics tracking
                if (typeof recordFlashcardInteraction === 'function') {
                    recordFlashcardInteraction(cardIndex, isShowingFront ? 'front' : 'back');
                }
            },
            
            onNavigate: function(cardIndex, direction) {
                console.log(`➡️ Navigated ${direction} to card ${cardIndex + 1}`);
                
                // Optional: Analytics tracking
                if (typeof recordFlashcardNavigation === 'function') {
                    recordFlashcardNavigation(cardIndex, direction);
                }
            }
        };
        
        // Create and start the widget
        currentFlashcardsWidget = flashcardsWidget(flashcardsArray, container, widgetOptions);
        
        console.log('📚 Flashcards widget created and started');
        
    } catch (error) {
        console.error('Error creating flashcards widget:', error);
        showErrorMessage('Unable to load flashcards. Please try again.');
    } finally {
        // Reset button state after a short delay
        setTimeout(() => {
            button.disabled = false;
            button.classList.remove('loading');
            button.textContent = originalText;
        }, 1000);
    }
}

/**
 * Modified question navigation to update flashcards availability
 * This should be called from your existing showQuestion function
 */
function updateQuestionWithFlashcards(questionIndex) {
    // Your existing showQuestion logic goes here
    // ... display question, update UI, etc ...
    
    // Clean up any existing flashcards when changing questions
    if (currentFlashcardsWidget) {
        currentFlashcardsWidget.destroy();
        currentFlashcardsWidget = null;
    }
    
    // Check for flashcards availability and update button
    showFlashcards(questionIndex);
    
    console.log(`📝 Question ${questionIndex + 1} shown with flashcards availability updated`);
}

/**
 * Setup function to create and attach the flashcards button
 * Call this once during quiz initialization
 */
function setupFlashcardsButton() {
    // Check if button already exists
    let flashcardsButton = document.getElementById('flashcardsButton');
    
    if (!flashcardsButton) {
        // Create the button
        flashcardsButton = document.createElement('button');
        flashcardsButton.id = 'flashcardsButton';
        flashcardsButton.className = 'flashcards-trigger-button';
        flashcardsButton.textContent = '📚 Show Flashcards';
        flashcardsButton.style.display = 'none'; // Hidden initially
        
        // Add event listener
        flashcardsButton.addEventListener('click', flashcardsButtonHandler);
        
        // Add to your quiz UI (adjust selector as needed)
        const buttonContainer = document.querySelector('.navigation-buttons') || 
                               document.querySelector('.quiz-controls') ||
                               document.querySelector('.question-container');
        
        if (buttonContainer) {
            buttonContainer.appendChild(flashcardsButton);
            console.log('📚 Flashcards button created and added to UI');
        } else {
            console.error('Could not find container for flashcards button');
        }
    }
    
    return flashcardsButton;
}

/**
 * Cleanup function for navigation and page unload
 */
function cleanupFlashcards() {
    if (currentFlashcardsWidget) {
        currentFlashcardsWidget.destroy();
        currentFlashcardsWidget = null;
        console.log('🧹 Flashcards widget cleaned up');
    }
}

/**
 * Error message display
 */
function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'flashcards-notification error';
    errorDiv.innerHTML = `
        <div class="notification-content">
            <h3>⚠️ Error</h3>
            <p>${message}</p>
            <button onclick="this.parentElement.parentElement.remove()">OK</button>
        </div>
    `;
    
    document.body.appendChild(errorDiv);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (errorDiv.parentElement) {
            errorDiv.remove();
        }
    }, 5000);
}

/**
 * Integration with your quiz initialization
 * Add this to your existing quiz startup code
 */
function initializeFlashcardsIntegration() {
    console.log('🚀 Initializing flashcards integration...');
    
    // Setup the button
    setupFlashcardsButton();
    
    // Setup cleanup on page unload
    window.addEventListener('beforeunload', cleanupFlashcards);
    window.addEventListener('pagehide', cleanupFlashcards);
    
    // Setup cleanup on navigation (if using single-page app)
    // Add this to your existing navigation functions:
    // - nextQuestion()
    // - previousQuestion()
    // - submitQuiz()
    
    console.log('✅ Flashcards integration ready');
}

/**
 * Modified navigation functions (examples)
 * Add cleanupFlashcards() to your existing navigation functions
 */
function nextQuestionWithFlashcards() {
    cleanupFlashcards(); // Clean up before navigation
    
    // Your existing nextQuestion logic
    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        updateQuestionWithFlashcards(currentQuestion); // Use enhanced function
    }
}

function previousQuestionWithFlashcards() {
    cleanupFlashcards(); // Clean up before navigation
    
    // Your existing previousQuestion logic
    if (currentQuestion > 0) {
        currentQuestion--;
        updateQuestionWithFlashcards(currentQuestion); // Use enhanced function
    }
}

// Export for use in your application
if (typeof window !== 'undefined') {
    // Make functions globally available for debugging
    window.flashcardsButtonHandler = flashcardsButtonHandler;
    window.cleanupFlashcards = cleanupFlashcards;
    window.setupFlashcardsButton = setupFlashcardsButton;
    window.initializeFlashcardsIntegration = initializeFlashcardsIntegration;
}