# Transformer Practice Questions - UK Full Licence
## Multiple Choice Questions for Quiz App

---

## STRAIGHTFORWARD CALCULATION QUESTIONS

### Question 1
A transformer has a turns ratio of 5:1 (primary to secondary). If 50V AC is applied to the primary, what voltage appears across the secondary?

A) 10V  
B) 50V  
C) 250V  
D) 5V

**Answer: A) 10V**

**Explanation:** Voltage scales directly with turns ratio. V_secondary = V_primary / n = 50V / 5 = 10V. The secondary has fewer turns, so it's a step-down transformer and voltage decreases.

---

### Question 2
A transformer has 100 turns on the primary and 25 turns on the secondary. If the primary current is 2A, what is the secondary current?

A) 0.5A  
B) 2A  
C) 4A  
D) 8A

**Answer: D) 8A**

**Explanation:** Turns ratio n = 100:25 = 4:1. Current scales inversely with turns ratio. I_secondary = I_primary × n = 2A × 4 = 8A. Current increases because voltage decreases (power conservation).

---

## CONCEPTUAL "WHICH DIRECTION" QUESTIONS

### Question 3
You need to match a 50Ω transmitter output to a 12.5Ω antenna. Which statement is correct?

A) Use a 2:1 step-up transformer (primary to secondary)  
B) Use a 2:1 step-down transformer (primary to secondary)  
C) Use a 4:1 step-up transformer (primary to secondary)  
D) Use a 4:1 step-down transformer (primary to secondary)

**Answer: B) Use a 2:1 step-down transformer (primary to secondary)**

**Explanation:** Impedance ratio = 50Ω / 12.5Ω = 4:1. Since impedance scales as n², we need √4 = 2:1 turns ratio. We're going from higher to lower impedance, so we need step-down (more turns on primary than secondary). This will step down voltage and step up current to the lower impedance antenna.

---

### Question 4
A step-up transformer increases voltage by a factor of 3. Which statement about the current is correct?

A) Current increases by a factor of 3  
B) Current decreases by a factor of 3  
C) Current increases by a factor of 9  
D) Current remains unchanged

**Answer: B) Current decreases by a factor of 3**

**Explanation:** Power must be conserved (P = V × I). If voltage increases by ×3, current must decrease by ×3 to keep power constant. Voltage and current always scale in opposite directions.

---

## PRACTICAL AMATEUR RADIO SCENARIOS

### Question 5
You have a beam antenna with a feedpoint impedance of 200Ω and want to match it to your 50Ω coaxial feedline. What turns ratio transformer (balun) do you need?

A) 2:1 (feedline to antenna)  
B) 4:1 (feedline to antenna)  
C) 1:2 (feedline to antenna)  
D) 1:4 (feedline to antenna)

**Answer: C) 1:2 (feedline to antenna)**

**Explanation:** Impedance ratio needed = 200Ω / 50Ω = 4:1. Since impedance scales as n², turns ratio = √4 = 2:1. We're transforming from LOW to HIGH impedance, so we need 1:2 (step up). This steps up voltage by 2×, reduces current by 2×, and transforms the 50Ω feedline impedance to match the 200Ω antenna (50 × 2² = 200Ω).

---

### Question 6
A power supply transformer delivers 12V AC at 5A to a load. If the primary is connected to 240V AC mains, what is the approximate primary current? (Assume an ideal transformer)

A) 0.25A  
B) 0.5A  
C) 2.5A  
D) 5A

**Answer: A) 0.25A**

**Explanation:** Power must be conserved. Secondary power = 12V × 5A = 60W. Primary power must also be 60W. Primary current = 60W / 240V = 0.25A. This is a 20:1 step-down transformer, so current steps up by the same factor (0.25A × 20 = 5A). Always check: low voltage side has high current, high voltage side has low current.

---

## ADVANCED CONCEPTUAL QUESTIONS

### Question 7
A transformer with 2:1 turns ratio (primary to secondary) has a 100Ω resistive load connected to its secondary. What impedance does the primary "see" looking into the transformer?

A) 50Ω  
B) 100Ω  
C) 200Ω  
D) 400Ω

**Answer: D) 400Ω**

**Explanation:** Impedance reflects through the transformer scaled by n². From secondary to primary, we multiply by n² = 2² = 4. So 100Ω × 4 = 400Ω. The primary sees a higher impedance because it's the high-voltage, low-current side. Remember: impedance transformations go both ways - divide by n² going down in turns, multiply by n² going up in turns.

---

### Question 8
You measure 100V and 2A on the primary of a transformer, and 20V on the secondary. If this is an ideal transformer, what must the secondary current be?

A) 0.4A  
B) 2A  
C) 5A  
D) 10A

**Answer: D) 10A**

**Explanation:** Power on primary = 100V × 2A = 200W. For an ideal transformer, secondary power must also be 200W. Secondary current = 200W / 20V = 10A. This is a 5:1 step-down transformer (100V to 20V), so current steps up by the same factor (2A × 5 = 10A). If your answer doesn't conserve power, you've made an error!

---

## Usage Notes for Quiz App

- **Question Difficulty Levels:**
  - Q1, Q2: Foundation level - direct application of formulas
  - Q3, Q4: Intermediate - requires understanding direction of transformation
  - Q5, Q6: Practical application - real amateur radio scenarios
  - Q7, Q8: Advanced - requires deeper understanding and multiple steps

- **Common Student Errors to Watch For:**
  - Confusing which way to apply the turns ratio
  - Forgetting that impedance scales with n² not n
  - Not checking power conservation
  - Mixing up step-up vs step-down directions

- **Recommended Study Approach:**
  - Master Q1-Q2 before attempting others
  - Use the power conservation check on every question
  - Draw simple diagrams showing voltage and current flow
  - Practice converting between impedance ratios and turns ratios

---

## Additional Practice Hints

**Quick Checks While Solving:**
1. Does power balance on both sides?
2. If voltage increased, did current decrease?
3. Does the impedance ratio equal the square of the turns ratio?
4. Are you stepping up or down? Does your answer match?

**Common Exam Traps:**
- Questions that give you impedance ratio but ask for turns ratio (remember to take square root!)
- Questions asking for "reflected impedance" (going from load back to source)
- Scenarios where you need to work backwards from power and voltage to find current

Good luck with your Full Licence exam!