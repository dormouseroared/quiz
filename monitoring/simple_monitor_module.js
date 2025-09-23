/**
 * Simple Application Monitor Module
 * 
 * This module provides basic but powerful monitoring capabilities for web applications.
 * It's designed to be completely non-invasive - you can add it to existing applications
 * with minimal changes to your existing code.
 * 
 * Key Design Principles:
 * - Zero impact on application performance when disabled
 * - Clear, readable console output that helps with debugging
 * - Simple API that's easy to integrate into existing functions
 * - Focused on the most useful information for debugging state issues
 */

class SimpleMonitor {
    constructor() {
        // Internal state management
        this.enabled = true;
        this.entries = [];
        this.startTime = Date.now();
        
        // Configuration for what elements to monitor
        this.configurations = new Map();
        
        console.log('📊 Simple Monitor initialized');
    }

    /**
     * Register a set of elements to monitor
     * This allows you to define monitoring configurations once and reuse them
     * 
     * @param {string} configName - Name to identify this configuration
     * @param {Object} elementConfig - Object mapping logical names to CSS selectors
     */
    registerConfiguration(configName, elementConfig) {
        this.configurations.set(configName, elementConfig);
        console.log(`📊 Registered monitoring configuration: "${configName}" with ${Object.keys(elementConfig).length} elements`);
    }

    /**
     * Capture the current state of monitored elements
     * This is the main function you'll call throughout your application
     * 
     * @param {string|Object} config - Either a registered config name or direct element config
     * @param {string} caller - Description of what triggered this monitoring call
     * @param {*} contextInfo - Additional context (question number, user action, etc.)
     */
    captureState(config, caller, contextInfo = null) {
        if (!this.enabled) {
            return; // Quick exit when monitoring is disabled
        }

        // Resolve configuration (handle both registered names and direct objects)
        const elementConfig = typeof config === 'string' 
            ? this.configurations.get(config)
            : config;

        if (!elementConfig) {
            console.warn(`⚠️ Monitor configuration not found: ${config}`);
            return;
        }

        // Create a snapshot of the current moment
        const snapshot = {
            timestamp: Date.now() - this.startTime,
            caller: caller,
            context: contextInfo,
            elementStates: {}
        };

        // Capture state for each monitored element
        for (const [elementName, cssSelector] of Object.entries(elementConfig)) {
            const element = document.querySelector(cssSelector);
            
            if (element) {
                snapshot.elementStates[elementName] = this._captureElementState(element);
            } else {
                snapshot.elementStates[elementName] = { 
                    error: 'Element not found',
                    selector: cssSelector 
                };
            }
        }

        // Store the snapshot
        this.entries.push(snapshot);

        // Display the capture in a clear, readable format
        this._displayCapture(snapshot);
    }

    /**
     * Capture comprehensive state information for a single element
     * This method extracts the most useful debugging information from DOM elements
     */
    _captureElementState(element) {
        const baseState = {
            tag: element.tagName.toLowerCase(),
            display: element.style.display || 'default',
            visible: element.offsetParent !== null, // True visibility check
            disabled: element.disabled || false,
            classes: element.className || 'none'
        };

        // Add element-specific information based on element type
        switch (element.tagName.toLowerCase()) {
            case 'button':
                return {
                    ...baseState,
                    clickable: !element.disabled && element.offsetParent !== null,
                    text: element.textContent.substring(0, 30) + (element.textContent.length > 30 ? '...' : '')
                };
                
            case 'div':
            case 'section':
                return {
                    ...baseState,
                    hasContent: element.textContent.trim().length > 0,
                    childCount: element.children.length
                };
                
            case 'input':
                return {
                    ...baseState,
                    value: element.value,
                    type: element.type
                };
                
            default:
                return baseState;
        }
    }

    /**
     * Display a monitoring capture in the console in a clear, readable format
     * This method formats the output to be easy to scan and understand
     */
    _displayCapture(snapshot) {
        // Create a clear header for this monitoring event
        const headerStyle = 'background: #e3f2fd; color: #1565c0; padding: 2px 6px; font-weight: bold;';
        console.groupCollapsed(`%c📊 [${snapshot.timestamp}ms] ${snapshot.caller}${snapshot.context ? ` (${snapshot.context})` : ''}`, headerStyle);
        
        // Show the element states in a table for easy comparison
        console.table(snapshot.elementStates);
        
        // Add any notable observations
        this._analyzeSnapshot(snapshot);
        
        console.groupEnd();
    }

    /**
     * Analyze a snapshot and highlight interesting observations
     * This helps draw attention to potential issues or important state changes
     */
    _analyzeSnapshot(snapshot) {
        const observations = [];

        // Look for elements that weren't found
        const missingElements = Object.entries(snapshot.elementStates)
            .filter(([name, state]) => state.error)
            .map(([name]) => name);

        if (missingElements.length > 0) {
            observations.push(`⚠️ Elements not found: ${missingElements.join(', ')}`);
        }

        // Look for disabled buttons that are visible (might be confusing to users)
        const problematicButtons = Object.entries(snapshot.elementStates)
            .filter(([name, state]) => 
                state.tag === 'button' && 
                state.disabled && 
                state.visible
            )
            .map(([name]) => name);

        if (problematicButtons.length > 0) {
            observations.push(`🔍 Visible but disabled buttons: ${problematicButtons.join(', ')}`);
        }

        // Display observations if any were found
        if (observations.length > 0) {
            console.group('🔍 Observations:');
            observations.forEach(obs => console.log(obs));
            console.groupEnd();
        }
    }

    /**
     * Compare two snapshots and show what changed between them
     * This is useful for understanding the effect of specific operations
     */
    compareWithPrevious(elementName = null) {
        if (this.entries.length < 2) {
            console.log('📊 Need at least 2 snapshots to compare');
            return;
        }

        const current = this.entries[this.entries.length - 1];
        const previous = this.entries[this.entries.length - 2];

        console.group(`📊 Comparison: ${previous.caller} → ${current.caller}`);

        const elementsToCompare = elementName 
            ? [elementName] 
            : Object.keys(current.elementStates);

        let changesFound = false;

        for (const element of elementsToCompare) {
            const currentState = current.elementStates[element];
            const previousState = previous.elementStates[element];

            if (!currentState || !previousState) continue;

            const changes = this._findStateChanges(previousState, currentState);
            
            if (Object.keys(changes).length > 0) {
                console.group(`🔄 ${element}:`);
                for (const [property, change] of Object.entries(changes)) {
                    console.log(`  ${property}: ${change.from} → ${change.to}`);
                }
                console.groupEnd();
                changesFound = true;
            }
        }

        if (!changesFound) {
            console.log('ℹ️ No changes detected between snapshots');
        }

        console.groupEnd();
    }

    /**
     * Find differences between two element states
     * Returns an object describing what changed
     */
    _findStateChanges(previousState, currentState) {
        const changes = {};

        for (const [property, currentValue] of Object.entries(currentState)) {
            const previousValue = previousState[property];
            
            if (previousValue !== currentValue && property !== 'error') {
                changes[property] = {
                    from: previousValue,
                    to: currentValue
                };
            }
        }

        return changes;
    }

    // Public utility methods for controlling and analyzing monitoring data

    /**
     * Enable or disable monitoring
     */
    setEnabled(enabled) {
        this.enabled = enabled;
        console.log(`📊 Monitoring ${enabled ? 'enabled' : 'disabled'}`);
    }

    /**
     * Show recent monitoring activity
     */
    showRecentActivity(count = 5) {
        const recent = this.entries.slice(-count);
        
        if (recent.length === 0) {
            console.log('📊 No monitoring data available');
            return;
        }

        console.group(`📊 Last ${recent.length} Monitoring Events:`);
        recent.forEach((entry, index) => {
            console.log(`[${entry.timestamp}ms] ${entry.caller}${entry.context ? ` (${entry.context})` : ''}`);
        });
        console.groupEnd();
    }

    /**
     * Clear all monitoring data
     */
    reset() {
        this.entries = [];
        this.startTime = Date.now();
        console.log('📊 Monitoring data cleared');
    }

    /**
     * Get summary statistics about monitoring activity
     */
    getSummary() {
        const summary = {
            totalSnapshots: this.entries.length,
            timespan: this.entries.length > 0 ? this.entries[this.entries.length - 1].timestamp : 0,
            mostActiveCaller: null,
            averageTimeBetweenCalls: 0
        };

        if (this.entries.length > 0) {
            // Find most active caller
            const callerCounts = {};
            this.entries.forEach(entry => {
                callerCounts[entry.caller] = (callerCounts[entry.caller] || 0) + 1;
            });

            summary.mostActiveCaller = Object.entries(callerCounts)
                .sort(([,a], [,b]) => b - a)[0][0];

            // Calculate average time between calls
            if (this.entries.length > 1) {
                summary.averageTimeBetweenCalls = summary.timespan / (this.entries.length - 1);
            }
        }

        return summary;
    }
}

// Create and export singleton instance
const monitor = new SimpleMonitor();

// Export the public interface - this is what you'll import in your quiz app
export {
    monitor,
    // Convenience functions that delegate to the singleton instance
    registerConfiguration: (name, config) => monitor.registerConfiguration(name, config),
    captureState: (config, caller, context) => monitor.captureState(config, caller, context),
    setMonitoringEnabled: (enabled) => monitor.setEnabled(enabled),
    showRecentActivity: (count) => monitor.showRecentActivity(count),
    compareWithPrevious: (elementName) => monitor.compareWithPrevious(elementName),
    resetMonitoring: () => monitor.reset(),
    getMonitoringSummary: () => monitor.getSummary()
};