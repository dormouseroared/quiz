# Capacitive Reactance Estimation Techniques

## Formula
**Xc = 1/(2πfC)**

## Quick Estimation Method

### Step 1: Simplify the Constants
- **2π ≈ 6** (actual 6.28, but 6 is easier for mental math)
- So: **Xc ≈ 1/(6fC)**

### Step 2: Learn the Reference Points
Memorize these "friendly" combinations that give ~160Ω:
- **1μF at 1kHz ≈ 160Ω**
- **1nF at 1MHz ≈ 160Ω** 
- **1pF at 1GHz ≈ 160Ω**

### Step 3: Scale From Reference Points
- **10x more capacitance → 1/10th the reactance**
- **10x higher frequency → 1/10th the reactance**
- **10x less capacitance → 10x the reactance**
- **10x lower frequency → 10x the reactance**

## Worked Examples

### Example 1: 100pF at 14MHz
1. Start with reference: 1pF at 1GHz ≈ 160Ω
2. 100pF is 100x more capacitance → 160/100 = 1.6Ω (if frequency stayed the same)
3. But 14MHz is much less than 1GHz: 1000MHz/14MHz ≈ 70
4. So multiply by 70: 1.6 × 70 ≈ 112Ω
5. **Calculator check: 114Ω** ✓

### Example 2: 470pF at 7MHz
1. Start with reference: 1pF at 1GHz ≈ 160Ω
2. 470pF is ~500x more capacitance → 160/500 = 0.32Ω (if frequency stayed the same)
3. 7MHz vs 1GHz: 1000/7 ≈ 140
4. So: 0.32 × 140 ≈ 45Ω
5. **Calculator check: 48Ω** ✓

### Example 3: 10nF at 100kHz
1. Start with reference: 1nF at 1MHz ≈ 160Ω
2. 10nF is 10x more capacitance → 160/10 = 16Ω (if frequency stayed the same)
3. 100kHz is 1/10th of 1MHz → multiply by 10: 16 × 10 = 160Ω
4. **Calculator check: 159Ω** ✓

## Common Frequency/Capacitance Ranges in Amateur Radio

### HF Bands (3-30MHz)
- **Coupling capacitors**: 10nF-100nF → typically 1Ω to 100Ω reactance
- **Tuning capacitors**: 10pF-1000pF → typically 10Ω to 10kΩ reactance
- **Bypass capacitors**: 100nF-10μF → typically 0.1Ω to 10Ω reactance

### VHF/UHF (30MHz-3GHz)
- **Small coupling caps**: 1pF-100pF → typically 1Ω to 1kΩ reactance
- **Bypass caps**: 1nF-100nF → typically 0.1Ω to 10Ω reactance

## Estimation Tips

### Powers of 10 Management
- **Write out all zeros initially**: 14MHz = 14,000,000Hz
- **Convert to scientific notation**: 14 × 10⁶ Hz
- **For pF**: 100pF = 100 × 10⁻¹² F
- **For nF**: 10nF = 10 × 10⁻⁹ F  
- **For μF**: 47μF = 47 × 10⁻⁶ F

### Mental Math Shortcuts
- **6 × 14 = 84** (close enough to 2π × 14 = 88)
- **Round awkward numbers**: 470 becomes 500, 330 becomes 300
- **Factor large numbers**: 1000 = 10³, so easier to work with powers

### Sanity Checks
- **Higher frequency OR higher capacitance → Lower reactance**
- **HF bands (3-30MHz)**: Most capacitors 1pF-1μF give 1Ω-10kΩ
- **If you get MΩ values**: Check your powers of 10!
- **If you get mΩ values**: Check your powers of 10!

## Practice Steps
1. **Estimate first** using the reference method
2. **Calculate exactly** with your calculator
3. **Compare results** - aim for within 20% on estimates
4. **Identify mistakes** - usually powers of 10 errors
5. **Build intuition** - after practice, you'll "feel" reasonable values