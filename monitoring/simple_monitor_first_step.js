/**
 * STEP 1: Simple Application Monitor
 * 
 * This is a minimal implementation to demonstrate the core concept
 * without overwhelming complexity. We'll monitor just a few key elements
 * and one important function to show immediate value.
 */

// ===== SIMPLE MONITORING SYSTEM =====

// This will store all our monitoring data
const monitoringData = {
    enabled: true,
    entries: [],
    startTime: Date.now()
};

/**
 * The core monitoring function - simplified but functional
 * This captures the current state of specified elements
 * 
 * @param {Object} elementsToWatch - Object mapping names to CSS selectors
 * @param {string} caller - Who called this function (for debugging)
 * @param {number} currentQuestion - Current question number
 */
function captureState(elementsToWatch, caller, currentQuestion = 'unknown') {
    // Quick exit if monitoring is disabled
    if (!monitoringData.enabled) return;
    
    console.log(`📊 [MONITOR] ${caller} - Capturing state...`);
    
    // Create a snapshot of this moment in time
    const snapshot = {
        timestamp: Date.now() - monitoringData.startTime, // Time since monitoring started
        caller: caller,
        currentQuestion: currentQuestion,
        states: {} // This will hold the actual element states
    };
    
    // Look at each element we're supposed to monitor
    for (const [elementName, cssSelector] of Object.entries(elementsToWatch)) {
        const element = document.querySelector(cssSelector);
        
        if (element) {
            // Capture the key properties we care about
            snapshot.states[elementName] = {
                display: element.style.display || 'default',
                disabled: element.disabled || false,
                isVisible: element.offsetParent !== null, // True if actually visible
                textContent: element.textContent.substring(0, 50) // First 50 chars for context
            };
        } else {
            // Track when elements aren't found - this often reveals timing issues
            snapshot.states[elementName] = { error: 'Element not found' };
        }
    }
    
    // Store this snapshot
    monitoringData.entries.push(snapshot);
    
    // Show what we captured (this is where you'll see the magic happen)
    console.table(snapshot.states);
}

/**
 * Simple helper to show recent monitoring activity
 * Call this from browser console: showRecentMonitoringActivity()
 */
function showRecentMonitoringActivity() {
    const recentEntries = monitoringData.entries.slice(-5); // Last 5 entries
    
    console.group('📊 Recent Monitoring Activity');
    recentEntries.forEach((entry, index) => {
        console.log(`\n[${entry.timestamp}ms] ${entry.caller} (Question: ${entry.currentQuestion})`);
        console.table(entry.states);
    });
    console.groupEnd();
}

// Make this available in browser console for interactive debugging
window.showRecentMonitoringActivity = showRecentMonitoringActivity;

// ===== INTEGRATION WITH YOUR EXISTING QUIZ CODE =====

// Define the elements you want to monitor in this first test
// Choose elements that you know change state during quiz operation
const keyElementsToMonitor = {
    'next-button': '#nextButton',
    'prev-button': '#prevButton', 
    'question-container': '.question-container' // or whatever selector you use
    // Start with just these three - you can add more later
};

/**
 * Enhanced version of your existing showQuestion function
 * This demonstrates how to add monitoring to an existing function
 * 
 * Replace your current showQuestion function with this version
 */
function showQuestion(questionIndex) {
    // STEP 1: Capture state BEFORE making any changes
    captureState(keyElementsToMonitor, 'showQuestion-BEFORE', questionIndex);
    
    // YOUR EXISTING LOGIC GOES HERE
    // (I'm showing example logic - replace with your actual code)
    
    // Hide all question containers
    document.querySelectorAll('.question-container').forEach(container => {
        container.style.display = 'none';
    });
    
    // Show the current question container
    const currentQuestionContainer = document.querySelector(`#question-${questionIndex}`);
    if (currentQuestionContainer) {
        currentQuestionContainer.style.display = 'block';
    }
    
    // Update navigation buttons
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');
    
    if (nextButton) {
        nextButton.disabled = false; // or whatever logic you use
    }
    
    if (prevButton) {
        prevButton.disabled = questionIndex === 0;
    }
    
    // STEP 2: Capture state AFTER making all changes
    captureState(keyElementsToMonitor, 'showQuestion-AFTER', questionIndex);
    
    // This console log will help you see the before/after comparison
    console.log(`✅ Question ${questionIndex} display completed - check monitoring data above`);
}

/**
 * Test function to deliberately cause state changes
 * Call this from browser console: testStateChanges()
 * This will let you see the monitoring system in action
 */
function testStateChanges() {
    console.log('🧪 Testing state changes to demonstrate monitoring...');
    
    // Capture initial state
    captureState(keyElementsToMonitor, 'TEST-initial-state', 'test');
    
    // Make some deliberate changes
    const nextButton = document.getElementById('nextButton');
    if (nextButton) {
        nextButton.disabled = true;
        nextButton.style.display = 'none';
    }
    
    // Capture after first change
    captureState(keyElementsToMonitor, 'TEST-after-hiding-next-button', 'test');
    
    // Make another change
    const prevButton = document.getElementById('prevButton');
    if (prevButton) {
        prevButton.disabled = false;
        prevButton.style.display = 'block';
    }
    
    // Capture after second change
    captureState(keyElementsToMonitor, 'TEST-after-showing-prev-button', 'test');
    
    // Restore original state
    if (nextButton) {
        nextButton.disabled = false;
        nextButton.style.display = 'block';
    }
    
    captureState(keyElementsToMonitor, 'TEST-restored-state', 'test');
    
    console.log('🧪 Test complete! Call showRecentMonitoringActivity() to see the results');
}

// Make test function available in browser console
window.testStateChanges = testStateChanges;

// ===== SIMPLE SETUP AND USAGE INSTRUCTIONS =====

/**
 * Call this once when your page loads to initialize monitoring
 */
function initializeSimpleMonitoring() {
    console.log('📊 Simple monitoring system initialized');
    console.log('📝 Available commands:');
    console.log('   testStateChanges() - Run a test to see monitoring in action');
    console.log('   showRecentMonitoringActivity() - View recent monitoring data');
    
    // Capture initial page state
    captureState(keyElementsToMonitor, 'INITIALIZATION', 0);
}

// Initialize monitoring when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSimpleMonitoring);
} else {
    // DOM is already loaded
    initializeSimpleMonitoring();
}