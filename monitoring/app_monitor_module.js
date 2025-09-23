/**
 * Application State Monitor Module
 * 
 * This module provides non-invasive state monitoring capabilities for web applications.
 * It tracks DOM element state changes over time and provides analysis tools to understand
 * application behavior patterns.
 * 
 * Key Features:
 * - Non-invasive monitoring that doesn't affect application performance
 * - State change detection and timeline tracking
 * - Configurable element monitoring with CSS selectors
 * - Rich analysis and reporting capabilities
 * - Easy integration with existing applications
 */

class AppMonitor {
    constructor() {
        // Internal state - encapsulated within the class
        this.enabled = true;
        this.entries = [];
        this.startTime = Date.now();
        this.configurations = new Map(); // Support multiple monitoring configurations
    }

    /**
     * Register a monitoring configuration for easy reuse
     * This allows you to define different sets of elements to monitor for different scenarios
     * 
     * @param {string} configName - Name identifier for this configuration
     * @param {Object} elementMap - Object mapping logical names to CSS selectors
     */
    registerConfiguration(configName, elementMap) {
        this.configurations.set(configName, elementMap);
        console.log(`📊 Registered monitoring configuration: ${configName}`);
    }

    /**
     * Capture current state of monitored elements
     * This is the core monitoring function that you'll call throughout your application
     * 
     * @param {Object|string} monitorConfig - Either a config object or registered config name
     * @param {number|string} currentQuestion - Current question identifier
     * @param {string} caller - Identifier for what triggered this monitoring call
     */
    captureState(monitorConfig, currentQuestion, caller) {
        if (!this.enabled) return;

        // Handle both direct config objects and registered config names
        const configToUse = typeof monitorConfig === 'string' 
            ? this.configurations.get(monitorConfig)
            : monitorConfig;

        if (!configToUse) {
            console.warn(`⚠️ Monitor configuration not found: ${monitorConfig}`);
            return;
        }

        const snapshot = this._createSnapshot(configToUse, currentQuestion, caller);
        this.entries.push(snapshot);

        // Log immediately if there are changes or if this is a forced debug call
        if (Object.keys(snapshot.changes).length > 0 || caller.includes('FORCE')) {
            this._logSnapshot(snapshot);
        }
    }

    /**
     * Create a detailed snapshot of current application state
     * Private method that handles the complex logic of state capture and change detection
     */
    _createSnapshot(monitorConfig, currentQuestion, caller) {
        const snapshot = {
            timestamp: Date.now() - this.startTime,
            caller: caller,
            currentQuestion: currentQuestion,
            states: {},
            changes: {}
        };

        // Get the most recent previous snapshot for change detection
        const previousSnapshot = this.entries[this.entries.length - 1];

        // Iterate through each element we want to monitor
        for (const [elementName, elementSelector] of Object.entries(monitorConfig)) {
            const element = document.querySelector(elementSelector);
            
            if (element) {
                // Capture comprehensive state information
                const currentState = this._captureElementState(element);
                snapshot.states[elementName] = currentState;

                // Detect changes since the last snapshot
                if (previousSnapshot?.states[elementName]) {
                    const changes = this._detectStateChanges(
                        previousSnapshot.states[elementName], 
                        currentState
                    );
                    
                    if (Object.keys(changes).length > 0) {
                        snapshot.changes[elementName] = changes;
                    }
                }
            } else {
                // Track when elements can't be found - this might indicate timing issues
                snapshot.states[elementName] = { error: 'Element not found' };
            }
        }

        return snapshot;
    }

    /**
     * Capture detailed state information for a single DOM element
     * This method knows how to extract relevant state from different types of elements
     */
    _captureElementState(element) {
        const baseState = {
            display: element.style.display || 'default',
            visibility: element.style.visibility || 'visible',
            className: element.className,
            isVisible: element.offsetParent !== null,
            tagName: element.tagName.toLowerCase()
        };

        // Add element-specific state information
        switch (element.tagName.toLowerCase()) {
            case 'button':
            case 'input':
                return {
                    ...baseState,
                    disabled: element.disabled,
                    clickable: !element.disabled && element.offsetParent !== null
                };
                
            case 'div':
            case 'section':
                return {
                    ...baseState,
                    childElementCount: element.childElementCount,
                    hasContent: element.textContent.trim().length > 0
                };
                
            default:
                return baseState;
        }
    }

    /**
     * Compare two element states and identify what changed
     * Returns an object describing the differences between states
     */
    _detectStateChanges(previousState, currentState) {
        const changes = {};
        
        // Compare each property and track changes
        for (const [property, currentValue] of Object.entries(currentState)) {
            const previousValue = previousState[property];
            
            if (previousValue !== currentValue) {
                changes[property] = {
                    from: previousValue,
                    to: currentValue
                };
            }
        }
        
        return changes;
    }

    /**
     * Log a snapshot in a readable format
     * Private method that handles the formatting of monitoring output
     */
    _logSnapshot(snapshot) {
        console.group(`📊 [${snapshot.timestamp}ms] ${snapshot.caller} (Q: ${snapshot.currentQuestion})`);
        
        if (Object.keys(snapshot.changes).length > 0) {
            console.log('🔄 State Changes:');
            for (const [elementName, changes] of Object.entries(snapshot.changes)) {
                console.group(`  ${elementName}:`);
                for (const [property, change] of Object.entries(changes)) {
                    console.log(`    ${property}: ${change.from} → ${change.to}`);
                }
                console.groupEnd();
            }
        } else {
            console.log('ℹ️ No state changes detected');
        }
        
        console.groupEnd();
    }

    // Public API methods for analysis and control

    /**
     * Enable or disable monitoring
     */
    setEnabled(enabled) {
        this.enabled = enabled;
        console.log(`📊 Monitoring ${enabled ? 'enabled' : 'disabled'}`);
    }

    /**
     * Generate a comprehensive report of all monitoring data
     */
    generateReport() {
        if (this.entries.length === 0) {
            console.log('📊 No monitoring data available yet.');
            return;
        }

        console.group('📊 === APPLICATION MONITORING REPORT ===');
        console.log(`Total snapshots: ${this.entries.length}`);
        console.log(`Monitoring duration: ${this.entries[this.entries.length - 1].timestamp}ms`);
        
        // Timeline summary
        console.group('📅 Timeline Summary:');
        this.entries.forEach((entry, index) => {
            const changeCount = Object.keys(entry.changes).length;
            console.log(`[${entry.timestamp}ms] ${entry.caller} - ${changeCount} changes`);
        });
        console.groupEnd();

        // Change frequency analysis
        this._analyzeChangeFrequency();
        
        console.groupEnd();
    }

    /**
     * Analyze how frequently different elements are changing
     * This helps identify elements that might be updated unnecessarily
     */
    _analyzeChangeFrequency() {
        const changeFrequency = {};
        
        this.entries.forEach(entry => {
            Object.keys(entry.changes).forEach(elementName => {
                changeFrequency[elementName] = (changeFrequency[elementName] || 0) + 1;
            });
        });

        if (Object.keys(changeFrequency).length > 0) {
            console.group('🔄 Element Change Frequency:');
            const sortedElements = Object.entries(changeFrequency)
                .sort(([,a], [,b]) => b - a);
            
            sortedElements.forEach(([element, count]) => {
                console.log(`  ${element}: ${count} changes`);
            });
            console.groupEnd();
        }
    }

    /**
     * Show recent state changes for debugging
     */
    showRecentActivity(lastNSnapshots = 5) {
        const recentEntries = this.entries.slice(-lastNSnapshots);
        
        console.group(`📊 Last ${lastNSnapshots} Monitoring Snapshots:`);
        recentEntries.forEach(entry => {
            if (Object.keys(entry.changes).length > 0) {
                this._logSnapshot(entry);
            }
        });
        console.groupEnd();
    }

    /**
     * Reset all monitoring data
     */
    reset() {
        this.entries = [];
        this.startTime = Date.now();
        console.log('📊 Monitoring data reset');
    }

    /**
     * Export monitoring data for external analysis
     */
    exportData() {
        return {
            entries: this.entries,
            startTime: this.startTime,
            totalDuration: Date.now() - this.startTime,
            summary: {
                totalSnapshots: this.entries.length,
                totalChanges: this.entries.reduce((sum, entry) => 
                    sum + Object.keys(entry.changes).length, 0)
            }
        };
    }
}

// Create and export a singleton instance
const appMonitor = new AppMonitor();

// Export the public interface
export {
    appMonitor,
    // Convenience functions that delegate to the singleton
    registerConfiguration: (name, config) => appMonitor.registerConfiguration(name, config),
    monitor: (config, question, caller) => appMonitor.captureState(config, question, caller),
    setMonitoringEnabled: (enabled) => appMonitor.setEnabled(enabled),
    generateReport: () => appMonitor.generateReport(),
    showRecentActivity: (count) => appMonitor.showRecentActivity(count),
    resetMonitoring: () => appMonitor.reset(),
    exportMonitoringData: () => appMonitor.exportData()
};