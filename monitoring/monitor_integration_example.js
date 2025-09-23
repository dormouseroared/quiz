/**
 * Integration Example: How to use the AppMonitor module in your main application
 * 
 * This file demonstrates the clean integration of the monitoring system
 * with your existing quiz application code.
 */

// Import only what you need from the monitoring module
import { 
    registerConfiguration, 
    monitor, 
    generateReport, 
    showRecentActivity,
    setMonitoringEnabled 
} from './appMonitor.js';

// ===== MONITORING CONFIGURATION SETUP =====
// Define what elements you want to monitor in different scenarios

// Main quiz interface elements
const quizUIConfig = {
    'next-button': '#nextButton',
    'prev-button': '#prevButton', 
    'submit-button': '#submitButton',
    'question-container': '.question-container',
    'answer-choices': '.answer-choices',
    'feedback-panel': '.feedback-panel',
    'progress-bar': '.progress-bar'
};

// Elements specific to question transitions
const questionTransitionConfig = {
    'current-question': '.current-question',
    'question-number': '.question-number',
    'navigation-buttons': '.nav-buttons',
    'question-content': '.question-content'
};

// Register these configurations with the monitor
registerConfiguration('quiz-ui', quizUIConfig);
registerConfiguration('question-transition', questionTransitionConfig);

// ===== YOUR EXISTING QUIZ APPLICATION CODE =====
// Enhanced with strategic monitoring calls

// Global quiz state
let currentQuestion = 0;
let quizQuestions = [];
let userAnswers = [];

/**
 * Initialize the quiz application
 * This function sets up your quiz and enables monitoring for the session
 */
function initializeQuiz() {
    // Your existing initialization code
    loadQuestions();
    setupEventListeners();
    
    // Enable monitoring for this session (you can disable this in production)
    setMonitoringEnabled(true);
    
    // Capture initial state
    monitor('quiz-ui', currentQuestion, 'initializeQuiz-complete');
    
    // Show the first question
    showQuestion(0);
}

/**
 * Display a specific question
 * This is a key function where monitoring helps you understand state transitions
 */
function showQuestion(questionIndex) {
    // Monitor state before making changes
    monitor('quiz-ui', questionIndex, 'showQuestion-start');
    
    // Your existing question display logic
    currentQuestion = questionIndex;
    
    // Hide all questions first
    document.querySelectorAll('.question-container').forEach(container => {
        container.style.display = 'none';
    });
    
    // Show the current question
    const questionContainer = document.querySelector(`#question-${questionIndex}`);
    if (questionContainer) {
        questionContainer.style.display = 'block';
    }
    
    // Update navigation buttons based on question position
    updateNavigationButtons();
    
    // Update progress indicator
    updateProgressBar(questionIndex);
    
    // Monitor state after all changes are complete
    monitor('quiz-ui', questionIndex, 'showQuestion-complete');
    
    // Optional: Use the specialized configuration for question transitions
    monitor('question-transition', questionIndex, 'showQuestion-transition-check');
}

/**
 * Handle navigation button state updates
 * Monitoring here helps you catch unnecessary button state changes
 */
function updateNavigationButtons() {
    monitor('quiz-ui', currentQuestion, 'updateNavigationButtons-start');
    
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');
    const submitButton = document.getElementById('submitButton');
    
    // Enable/disable previous button
    if (prevButton) {
        prevButton.disabled = currentQuestion === 0;
        prevButton.style.display = currentQuestion === 0 ? 'none' : 'inline-block';
    }
    
    // Handle next vs submit button logic
    const isLastQuestion = currentQuestion === quizQuestions.length - 1;
    
    if (nextButton && submitButton) {
        if (isLastQuestion) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
            submitButton.disabled = !isAnswerSelected();
        } else {
            nextButton.style.display = 'inline-block';
            nextButton.disabled = !isAnswerSelected();
            submitButton.style.display = 'none';
        }
    }
    
    monitor('quiz-ui', currentQuestion, 'updateNavigationButtons-complete');
}

/**
 * Handle answer selection
 * This function shows how monitoring helps track user interaction effects
 */
function selectAnswer(answerIndex) {
    monitor('quiz-ui', currentQuestion, 'selectAnswer-start');
    
    // Your existing answer selection logic
    userAnswers[currentQuestion] = answerIndex;
    
    // Update visual selection state
    document.querySelectorAll('.answer-choice').forEach((choice, index) => {
        if (index === answerIndex) {
            choice.classList.add('selected');
            choice.style.backgroundColor = '#e3f2fd';
        } else {
            choice.classList.remove('selected');
            choice.style.backgroundColor = '';
        }
    });
    
    // Re-evaluate navigation buttons since an answer is now selected
    updateNavigationButtons();
    
    monitor('quiz-ui', currentQuestion, 'selectAnswer-complete');
}

/**
 * Navigate to the next question
 * Monitoring helps ensure smooth transitions
 */
function nextQuestion() {
    if (currentQuestion < quizQuestions.length - 1) {
        monitor('quiz-ui', currentQuestion, 'nextQuestion-leaving-' + currentQuestion);
        showQuestion(currentQuestion + 1);
        monitor('quiz-ui', currentQuestion, 'nextQuestion-arrived-' + currentQuestion);
    }
}

/**
 * Navigate to the previous question
 */
function previousQuestion() {
    if (currentQuestion > 0) {
        monitor('quiz-ui', currentQuestion, 'previousQuestion-leaving-' + currentQuestion);
        showQuestion(currentQuestion - 1);
        monitor('quiz-ui', currentQuestion, 'previousQuestion-arrived-' + currentQuestion);
    }
}

/**
 * Submit the quiz
 * This is a critical function where monitoring helps ensure proper state management
 */
function submitQuiz() {
    monitor('quiz-ui', currentQuestion, 'submitQuiz-start');
    
    // Disable all interactive elements during submission
    document.querySelectorAll('button').forEach(button => {
        button.disabled = true;
    });
    
    // Show loading state
    const submitButton = document.getElementById('submitButton');
    if (submitButton) {
        submitButton.textContent = 'Submitting...';
    }
    
    monitor('quiz-ui', currentQuestion, 'submitQuiz-ui-disabled');
    
    // Your existing submission logic
    calculateScore();
    showResults();
    
    monitor('quiz-ui', currentQuestion, 'submitQuiz-complete');
}

// ===== DEBUGGING AND ANALYSIS HELPERS =====
// These functions make it easy to understand your application's behavior

/**
 * Debug helper: Check current application state
 * Call this from the browser console when things seem wrong
 */
window.debugQuizState = function() {
    console.log('=== MANUAL DEBUG CHECK ===');
    monitor('quiz-ui', currentQuestion, 'FORCE-manual-debug-check');
    showRecentActivity(3);
};

/**
 * Debug helper: Generate full monitoring report
 * Call this to see patterns in your application behavior
 */
window.generateQuizReport = function() {
    generateReport();
};

/**
 * Debug helper: Check for potential issues
 * This function looks for common problems in the monitoring data
 */
window.checkForIssues = function() {
    const data = exportMonitoringData();
    
    console.group('🔍 Issue Detection:');
    
    // Look for elements that change very frequently (possible inefficiency)
    const changeFreq = {};
    data.entries.forEach(entry => {
        Object.keys(entry.changes).forEach(element => {
            changeFreq[element] = (changeFreq[element] || 0) + 1;
        });
    });
    
    const highFrequencyElements = Object.entries(changeFreq)
        .filter(([element, count]) => count > 10)
        .sort(([,a], [,b]) => b - a);
    
    if (highFrequencyElements.length > 0) {
        console.warn('⚠️ Elements changing very frequently (possible optimization opportunity):');
        highFrequencyElements.forEach(([element, count]) => {
            console.log(`  ${element}: ${count} changes`);
        });
    } else {
        console.log('✅ No high-frequency state changes detected');
    }
    
    console.groupEnd();
};

// ===== EVENT LISTENERS =====
// Your existing event listeners, enhanced with monitoring

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the quiz application
    initializeQuiz();
    
    // Set up event listeners with monitoring
    document.getElementById('nextButton')?.addEventListener('click', nextQuestion);
    document.getElementById('prevButton')?.addEventListener('click', previousQuestion);
    document.getElementById('submitButton')?.addEventListener('click', submitQuiz);
    
    // Monitor the completion of DOM setup
    monitor('quiz-ui', 0, 'DOM-content-loaded-complete');
});

// ===== UTILITY FUNCTIONS =====
// Supporting functions that help with quiz logic

function isAnswerSelected() {
    return userAnswers[currentQuestion] !== undefined;
}

function updateProgressBar(questionIndex) {
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        const progress = ((questionIndex + 1) / quizQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;
    }
}

// Your other existing utility functions...
function loadQuestions() {
    // Your question loading logic
}

function setupEventListeners() {
    // Your event listener setup
}

function calculateScore() {
    // Your scoring logic
}

function showResults() {
    // Your results display logic
}