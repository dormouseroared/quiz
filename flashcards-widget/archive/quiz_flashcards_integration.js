/**
 * Integration Example: How to use the Flashcards Widget in your Quiz Application
 * 
 * This demonstrates the clean integration of the flashcards widget with your
 * existing quiz code, including proper state management and monitoring integration.
 */

// Your existing quiz application code (unchanged)
let currentQuestion = 0;
let quizQuestions = [];
let userAnswers = [];

// Widget state management
let currentFlashcardsWidget = null;

/**
 * Your existing showFlashcards function - enhanced to use the widget
 * This function creates the flashcards array and triggers the widget
 */
function showFlashcards(questionIndex) {
    const currentQuestionData = quizQuestions[questionIndex];
    
    // Your existing logic to filter flashcards by syllabus
    const relatedFlashcards = getFlashcardsBySyllabus(currentQuestionData.syllabus);
    
    if (relatedFlashcards.length === 0) {
        console.log('📚 No flashcards found for this topic');
        showNoFlashcardsMessage();
        return;
    }
    
    console.log(`📚 Found ${relatedFlashcards.length} related flashcards`);
    
    // Create and start the flashcards widget
    startFlashcardsWidget(relatedFlashcards);
}

/**
 * Start the flashcards widget with configuration options
 * This function demonstrates the clean API of the widget
 */
function startFlashcardsWidget(flashcardsArray) {
    // Ensure any existing widget is cleaned up first
    if (currentFlashcardsWidget) {
        currentFlashcardsWidget.destroy();
        currentFlashcardsWidget = null;
    }
    
    // Get container element (usually document.body for overlay widgets)
    const container = document.body;
    
    // Configure widget options
    const widgetOptions = {
        autoStart: true,
        showProgress: true,
        enableKeyboardNav: true,
        flipAnimation: true,
        closeOnComplete: false, // Keep open so user can review
        
        // Callback functions to integrate with your app
        onComplete: function(totalCards) {
            console.log(`🎉 User completed ${totalCards} flashcards`);
            
            // Optional: Track completion in your quiz analytics
            recordFlashcardsCompletion(currentQuestion, totalCards);
            
            // Optional: Show a completion message
            showFlashcardsCompletionMessage(totalCards);
        },
        
        onCardFlip: function(cardIndex, isShowingFront) {
            console.log(`🔄 Card ${cardIndex + 1} flipped to ${isShowingFront ? 'front' : 'back'}`);
            
            // Optional: Track user interaction with flashcards
            recordFlashcardInteraction(cardIndex, isShowingFront ? 'front' : 'back');
        },
        
        onNavigate: function(cardIndex, direction) {
            console.log(`➡️ Navigated ${direction} to card ${cardIndex + 1}`);
            
            // Optional: Track navigation patterns
            recordFlashcardNavigation(cardIndex, direction);
        }
    };
    
    // Create the widget instance
    currentFlashcardsWidget = flashcardsWidget(flashcardsArray, container, widgetOptions);
    
    // The widget auto-starts because we set autoStart: true
    console.log('📚 Flashcards widget created and started');
}

/**
 * Your flashcardsButton click handler
 * This is the function that gets called when user clicks the flashcards button
 */
function flashcardsButtonHandler() {
    console.log('🔘 Flashcards button clicked');
    
    // Optional: Add monitoring if you're using the monitoring system
    if (typeof captureState === 'function') {
        captureState('quiz-ui', 'flashcardsButton-clicked', currentQuestion);
    }
    
    // Disable the button while loading flashcards
    const flashcardsButton = document.getElementById('flashcardsButton');
    if (flashcardsButton) {
        flashcardsButton.disabled = true;
        flashcardsButton.textContent = 'Loading...';
    }
    
    // Show flashcards for current question
    showFlashcards(currentQuestion);
    
    // Re-enable button after a short delay
    setTimeout(() => {
        if (flashcardsButton) {
            flashcardsButton.disabled = false;
            flashcardsButton.textContent = 'Show Flashcards';
        }
    }, 1000);
}

/**
 * Helper function to get flashcards by syllabus topic
 * This is your existing logic, just wrapped in a clean function
 */
function getFlashcardsBySyllabus(syllabusCode) {
    // Your existing flashcard filtering logic
    // This would typically query your flashcards data structure
    const allFlashcards = [
        {
            subTitle: "Tuned circuit",
            sequence: "000",
            front: "Voltages and circulating currents in tuned circuits can be very high compared to the applied voltage...",
            back: "This occurs because the reactive components (L and C) can store and exchange energy efficiently, creating resonant conditions where small applied voltages result in much larger internal voltages.",
            status: "",
            reference: "week03 tutorial slides p15",
            id: "TuDkF5TC"
        },
        {
            subTitle: "Q Factor",
            sequence: "001", 
            front: "What does Q factor represent in a tuned circuit?",
            back: "Q factor (Quality factor) represents the ratio of energy stored to energy dissipated per cycle. Higher Q means sharper resonance and lower losses.",
            status: "",
            reference: "week03 tutorial slides p18",
            id: "QfAc7R9X"
        },
        {
            subTitle: "Resonant Frequency",
            sequence: "002",
            front: "How do you calculate the resonant frequency of an LC circuit?",
            back: "f₀ = 1/(2π√LC) where L is inductance in henries and C is capacitance in farads.",
            status: "",
            reference: "week03 tutorial slides p12",
            id: "RfHz4M2N"
        }
    ];
    
    // Filter flashcards based on syllabus code
    // In your real app, this might be a more complex query
    return allFlashcards.filter(card => 
        card.sequence.startsWith(syllabusCode) || 
        card.reference.includes(syllabusCode)
    );
}

/**
 * Show a message when no flashcards are available
 */
function showNoFlashcardsMessage() {
    // Create a simple notification
    const message = document.createElement('div');
    message.className = 'flashcards-notification';
    message.innerHTML = `
        <div class="notification-content">
            <h3>📚 No Flashcards Available</h3>
            <p>There are no flashcards available for this topic yet.</p>
            <button onclick="this.parentElement.parentElement.remove()">OK</button>
        </div>
    `;
    
    document.body.appendChild(message);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        if (message.parentElement) {
            message.remove();
        }
    }, 3000);
}

/**
 * Show completion message when user finishes all flashcards
 */
function showFlashcardsCompletionMessage(totalCards) {
    const message = document.createElement('div');
    message.className = 'flashcards-notification completion';
    message.innerHTML = `
        <div class="notification-content">
            <h3>🎉 Great Job!</h3>
            <p>You've reviewed all ${totalCards} flashcards for this topic.</p>
            <button onclick="this.parentElement.parentElement.remove()">Continue Quiz</button>
        </div>
    `;
    
    document.body.appendChild(message);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (message.parentElement) {
            message.remove();
        }
    }, 5000);
}

/**
 * Analytics and tracking functions (optional)
 * These help you understand how users interact with flashcards
 */
function recordFlashcardsCompletion(questionIndex, totalCards) {
    console.log(`📊 Analytics: User completed ${totalCards} flashcards for question ${questionIndex + 1}`);
    
    // In a real app, you might send this to your analytics service
    // analytics.track('flashcards_completed', {
    //     questionIndex: questionIndex,
    //     totalCards: totalCards,
    //     timestamp: Date.now()
    // });
}

function recordFlashcardInteraction(cardIndex, side) {
    console.log(`📊 Analytics: User viewed ${side} of card ${cardIndex + 1}`);
    
    // Track which sides of cards users view most
    // This can help you optimize your flashcard content
}

function recordFlashcardNavigation(cardIndex, direction) {
    console.log(`📊 Analytics: User navigated ${direction} to card ${cardIndex + 1}`);
    
    // Track navigation patterns to understand user behavior
}

/**
 * Integration with your quiz's showQuestion function
 * This shows how to add the flashcards button to your existing UI
 */
function enhancedShowQuestion(questionIndex) {
    // Your existing showQuestion logic
    currentQuestion = questionIndex;
    
    // ... your existing code to display question ...
    
    // Add or update flashcards button
    updateFlashcardsButton(questionIndex);
}

/**
 * Update the flashcards button based on available content
 */
function updateFlashcardsButton(questionIndex) {
    let flashcardsButton = document.getElementById('flashcardsButton');
    
    // Create button if it doesn't exist
    if (!flashcardsButton) {
        flashcardsButton = document.createElement('button');
        flashcardsButton.id = 'flashcardsButton';
        flashcardsButton.className = 'flashcards-trigger-button';
        flashcardsButton.onclick = flashcardsButtonHandler;
        
        // Add to your quiz's button container
        const buttonContainer = document.querySelector('.quiz-controls') || document.querySelector('.navigation-buttons');
        if (buttonContainer) {
            buttonContainer.appendChild(flashcardsButton);
        }
    }
    
    // Check if flashcards are available for current question
    const currentQuestionData = quizQuestions[questionIndex];
    const availableFlashcards = getFlashcardsBySyllabus(currentQuestionData.syllabus);
    
    if (availableFlashcards.length > 0) {
        flashcardsButton.style.display = 'inline-block';
        flashcardsButton.textContent = `📚 Review ${availableFlashcards.length} Flashcards`;
        flashcardsButton.disabled = false;
    } else {
        flashcardsButton.style.display = 'none';
    }
}

/**
 * Clean up flashcards when navigating away or closing quiz
 */
function cleanupFlashcards() {
    if (currentFlashcardsWidget) {
        currentFlashcardsWidget.destroy();
        currentFlashcardsWidget = null;
        console.log('🧹 Flashcards widget cleaned up');
    }
}

/**
 * Enhanced navigation functions that clean up flashcards
 */
function nextQuestion() {
    // Clean up any open flashcards before navigating
    cleanupFlashcards();
    
    // Your existing navigation logic
    if (currentQuestion < quizQuestions.length - 1) {
        enhancedShowQuestion(currentQuestion + 1);
    }
}

function previousQuestion() {
    // Clean up any open flashcards before navigating
    cleanupFlashcards();
    
    // Your existing navigation logic
    if (currentQuestion > 0) {
        enhancedShowQuestion(currentQuestion - 1);
    }
}

/**
 * Integration with browser events for cleanup
 */
window.addEventListener('beforeunload', cleanupFlashcards);
window.addEventListener('pagehide', cleanupFlashcards);

/**
 * Debugging helpers for development
 * These functions help you test the flashcards integration
 */
window.testFlashcardsWidget = function() {
    console.log('🧪 Testing flashcards widget with sample data...');
    
    const sampleFlashcards = [
        {
            subTitle: "Test Card 1",
            sequence: "test001",
            front: "This is the front of the first test card. It contains some sample content to demonstrate how the widget displays flashcard information.",
            back: "This is the back of the first test card. It shows the answer or additional information related to the front content.",
            status: "",
            reference: "test reference 1",
            id: "TEST1"
        },
        {
            subTitle: "Test Card 2", 
            sequence: "test002",
            front: "What is the purpose of this flashcards widget?",
            back: "The widget provides an interactive way to review study materials related to quiz questions, helping reinforce learning through spaced repetition.",
            status: "",
            reference: "test reference 2", 
            id: "TEST2"
        }
    ];
    
    startFlashcardsWidget(sampleFlashcards);
};

window.destroyCurrentFlashcards = function() {
    cleanupFlashcards();
};

// Make key functions available globally for debugging
window.showFlashcards = showFlashcards;
window.flashcardsButtonHandler = flashcardsButtonHandler;

console.log('📚 Flashcards integration loaded and ready');