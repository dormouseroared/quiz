const CLAUDE_QUIZ = [
    {
        source: "CLAUDE QUIZ CAPACITORS Q01",
        question: "What is the reactance of a 100pF capacitor at 14MHz?",
        image: "",
        options: [
            "114 ohms",
            "228 ohms",
            "456 ohms",
            "912 ohms"
        ],
        correct: 0,
        explanation: "Xc = 1/(2πfC) = 1/(2π × 14×10⁶ × 100×10⁻¹²) = 114Ω",
        lookup: "See capacitive reactance formula",
        syllabus: "3a"
    },
    {
        source: "CLAUDE QUIZ CAPACITORS Q02",
        question: "Two 470μF capacitors are connected in series. What is the total capacitance?",
        image: "",
        options: [
            "940μF",
            "470μF",
            "235μF",
            "117.5μF"
        ],
        correct: 2,
        explanation: "Series capacitors: 1/Ctotal = 1/C1 + 1/C2, so Ctotal = 470/2 = 235μF",
        lookup: "See capacitors in series formula",
        syllabus: "3a"
    },
    {
        source: "CLAUDE QUIZ CAPACITORS Q03",
        question: "What happens to the energy stored in a capacitor if the voltage across it is doubled?",
        image: "",
        options: [
            "Energy stays the same",
            "Energy doubles",
            "Energy increases by a factor of 4",
            "Energy halves"
        ],
        correct: 2,
        explanation: "Energy = ½CV². If V doubles, energy increases by 2² = 4 times",
        lookup: "See capacitor energy storage formula",
        syllabus: "3a"
    },
    {
        source: "CLAUDE QUIZ CAPACITORS Q04",
        question: "A 1000μF capacitor is charged to 12V through a 10kΩ resistor. What is the time constant?",
        image: "",
        options: [
            "1 second",
            "10 seconds",
            "100 seconds",
            "0.1 seconds"
        ],
        correct: 1,
        explanation: "Time constant τ = RC = 10×10³ × 1000×10⁻⁶ = 10 seconds",
        lookup: "See RC time constant formula",
        syllabus: "3a"
    },
    {
        source: "CLAUDE QUIZ CAPACITORS Q05",
        question: "Which type of capacitor is most suitable for high-frequency RF applications?",
        image: "",
        options: [
            "Electrolytic",
            "Tantalum",
            "Ceramic",
            "Paper"
        ],
        correct: 2,
        explanation: "Ceramic capacitors have low ESR and good high-frequency characteristics",
        lookup: "See capacitor types and applications",
        syllabus: "3a"
    },
    {
        source: "CLAUDE QUIZ CAPACITORS Q06",
        question: "What is the voltage rating requirement for two 25V capacitors connected in series across a 40V supply?",
        image: "",
        options: [
            "Each capacitor must be rated at least 20V",
            "Each capacitor must be rated at least 25V",
            "Each capacitor must be rated at least 40V",
            "The voltage divides equally, so 25V rating is adequate"
        ],
        correct: 2,
        explanation: "In practice, voltage may not divide equally due to leakage differences, so each should handle the full supply voltage",
        lookup: "See capacitor voltage ratings and safety",
        syllabus: "3a"
    },
    {
        source: "CLAUDE QUIZ CAPACITORS Q07",
        question: "What is the phase relationship between voltage and current in a pure capacitive circuit?",
        image: "",
        options: [
            "Voltage leads current by 90°",
            "Current leads voltage by 90°",
            "Voltage and current are in phase",
            "Voltage lags current by 45°"
        ],
        correct: 1,
        explanation: "In capacitive circuits, current leads voltage by 90° (or voltage lags current by 90°)",
        lookup: "See AC theory and phase relationships",
        syllabus: "3b"
    },
    {
        source: "CLAUDE QUIZ CAPACITORS Q08",
        question: "A variable capacitor has a range of 50pF to 500pF. What is the frequency tuning range when used with a 10μH inductor?",
        image: "",
        options: [
            "2.25MHz to 7.1MHz",
            "7.1MHz to 22.5MHz",
            "22.5MHz to 71MHz",
            "0.71MHz to 2.25MHz"
        ],
        correct: 0,
        explanation: "f = 1/(2π√LC). With max C (500pF): f = 2.25MHz, with min C (50pF): f = 7.1MHz",
        lookup: "See resonant frequency formula",
        syllabus: "3c"
    },
    {
        source: "CLAUDE QUIZ INDUCTORS Q01",
        question: "What is the reactance of a 22μH inductor at 7MHz?",
        image: "",
        options: [
            "485 ohms",
            "970 ohms",
            "242 ohms",
            "1940 ohms"
        ],
        correct: 1,
        explanation: "XL = 2πfL = 2π × 7×10⁶ × 22×10⁻⁶ = 970Ω",
        lookup: "See inductive reactance formula",
        syllabus: "3a"
    },
    {
        source: "CLAUDE QUIZ INDUCTORS Q02",
        question: "Two 10mH inductors are connected in parallel. What is the total inductance?",
        image: "",
        options: [
            "20mH",
            "10mH",
            "5mH",
            "2.5mH"
        ],
        correct: 2,
        explanation: "Parallel inductors: 1/Ltotal = 1/L1 + 1/L2, so Ltotal = 10/2 = 5mH",
        lookup: "See inductors in parallel formula",
        syllabus: "3a"
    },
    {
        source: "CLAUDE QUIZ INDUCTORS Q03",
        question: "What is the phase relationship between voltage and current in a pure inductive circuit?",
        image: "",
        options: [
            "Voltage leads current by 90°",
            "Current leads voltage by 90°",
            "Voltage and current are in phase",
            "Current leads voltage by 45°"
        ],
        correct: 0,
        explanation: "In inductive circuits, voltage leads current by 90° (or current lags voltage by 90°)",
        lookup: "See AC theory and phase relationships",
        syllabus: "3b"
    },
    {
        source: "CLAUDE QUIZ INDUCTORS Q04",
        question: "The energy stored in an inductor is proportional to:",
        image: "",
        options: [
            "The square of the voltage across it",
            "The square of the current through it",
            "The voltage times the current",
            "The inductance divided by the current"
        ],
        correct: 1,
        explanation: "Energy stored in an inductor = ½LI². Energy is proportional to the square of the current",
        lookup: "See inductor energy storage formula",
        syllabus: "3a"
    },
    {
        source: "CLAUDE QUIZ INDUCTORS Q05",
        question: "A 100mH inductor carries 2A of current. The current is switched off in 1ms. What is the back EMF generated?",
        image: "",
        options: [
            "100V",
            "200V",
            "50V",
            "400V"
        ],
        correct: 1,
        explanation: "Back EMF = L × (di/dt) = 0.1 × (2/0.001) = 200V",
        lookup: "See Lenz's law and back EMF",
        syllabus: "3a"
    },
    {
        source: "CLAUDE QUIZ INDUCTORS Q06",
        question: "What happens to the inductance of a coil if the number of turns is doubled?",
        image: "",
        options: [
            "Inductance doubles",
            "Inductance stays the same",
            "Inductance increases by a factor of 4",
            "Inductance halves"
        ],
        correct: 2,
        explanation: "Inductance is proportional to N². If turns double, inductance increases by 2² = 4 times",
        lookup: "See inductance formula L ∝ N²",
        syllabus: "3a"
    },
    {
        source: "CLAUDE QUIZ INDUCTORS Q07",
        question: "Which core material would give the highest inductance for an RF choke at 14MHz?",
        image: "",
        options: [
            "Air core",
            "Iron powder (Type 2)",
            "Ferrite (Type 43)",
            "Laminated steel"
        ],
        correct: 2,
        explanation: "Type 43 ferrite has high permeability and is designed for HF applications like 14MHz",
        lookup: "See core materials and frequency response",
        syllabus: "3a"
    },
    {
        source: "CLAUDE QUIZ INDUCTORS Q08",
        question: "The time constant of an RL circuit is:",
        image: "",
        options: [
            "L/R",
            "R/L",
            "RL",
            "R + L"
        ],
        correct: 0,
        explanation: "Time constant τ = L/R in an RL circuit",
        lookup: "See RL time constant formula",
        syllabus: "3a"
    },
    {
        source: "CLAUDE QUIZ INDUCTORS Q09",
        question: "What is the Q factor of an inductor with reactance 628Ω and resistance 10Ω at its operating frequency?",
        image: "",
        options: [
            "6.28",
            "62.8",
            "628",
            "0.0159"
        ],
        correct: 1,
        explanation: "Q = XL/R = 628/10 = 62.8",
        lookup: "See Q factor formula for inductors",
        syllabus: "3c"
    },
    {
        source: "CLAUDE QUIZ INDUCTORS Q10",
        question: "An inductor acts as what type of impedance to DC?",
        image: "",
        options: [
            "High impedance",
            "Low impedance",
            "Infinite impedance",
            "Negative impedance"
        ],
        correct: 1,
        explanation: "To DC (f=0), XL = 2πfL = 0, so an inductor acts as a short circuit (very low impedance)",
        lookup: "See inductor DC behavior",
        syllabus: "3a"
    },
    {
        source: "CLAUDE QUIZ AC THEORY Q01",
        question: "An AC voltage has a peak value of 170V. What is its RMS value?",
        image: "",
        options: [
            "85V",
            "120V",
            "170V",
            "240V"
        ],
        correct: 1,
        explanation: "RMS = Peak/√2 = 170/1.414 = 120V",
        lookup: "See RMS to peak conversion",
        syllabus: "3b"
    },
    {
        source: "CLAUDE QUIZ AC THEORY Q02",
        question: "What is the frequency of an AC waveform with a period of 50μs?",
        image: "",
        options: [
            "20Hz",
            "200Hz",
            "2kHz",
            "20kHz"
        ],
        correct: 3,
        explanation: "f = 1/T = 1/(50×10⁻⁶) = 20,000Hz = 20kHz",
        lookup: "See frequency and period relationship",
        syllabus: "3b"
    },
    {
        source: "CLAUDE QUIZ AC THEORY Q03",
        question: "In a purely resistive AC circuit, voltage and current are:",
        image: "",
        options: [
            "90° out of phase",
            "180° out of phase",
            "In phase",
            "45° out of phase"
        ],
        correct: 2,
        explanation: "In resistive circuits, voltage and current are always in phase (0° phase difference)",
        lookup: "See resistive AC circuits",
        syllabus: "3b"
    },
    {
        source: "CLAUDE QUIZ AC THEORY Q04",
        question: "A series RLC circuit has R=50Ω, XL=80Ω, XC=30Ω. What is the total impedance?",
        image: "",
        options: [
            "160Ω",
            "70.7Ω",
            "100Ω",
            "50Ω"
        ],
        correct: 1,
        explanation: "Z = √[R² + (XL-XC)²] = √[50² + (80-30)²] = √[2500 + 2500] = 70.7Ω",
        lookup: "See impedance calculation in RLC circuits",
        syllabus: "3b"
    },
    {
        source: "CLAUDE QUIZ AC THEORY Q05",
        question: "What is the phase angle in the series RLC circuit with R=50Ω, XL=80Ω, XC=30Ω.?",
        image: "",
        options: [
            "0°",
            "30°",
            "45°",
            "60°"
        ],
        correct: 2,
        explanation: "Phase angle = arctan[(XL-XC)/R] = arctan[(80-30)/50] = arctan(1) = 45°",
        lookup: "See phase angle calculation",
        syllabus: "3b"
    },
    {
        source: "CLAUDE QUIZ AC THEORY Q06",
        question: "In an AC circuit, what is the power factor when the phase angle is 60°?",
        image: "",
        options: [
            "0.5",
            "0.707",
            "0.866",
            "1.0"
        ],
        correct: 0,
        explanation: "Power factor = cos(phase angle) = cos(60°) = 0.5",
        lookup: "See power factor calculation",
        syllabus: "3b"
    },
    {
        source: "CLAUDE QUIZ AC THEORY Q07",
        question: "Which type of power is consumed by a pure reactance?",
        image: "",
        options: [
            "True power (watts)",
            "Reactive power (VAR)",
            "Apparent power (VA)",
            "No power is consumed"
        ],
        correct: 3,
        explanation: "Pure reactances (L or C) consume no real power - they store and return energy each cycle",
        lookup: "See reactive vs real power",
        syllabus: "3b"
    },
    {
        source: "CLAUDE QUIZ AC THEORY Q08",
        question: "A circuit has 100W true power and 200W reactive power. What is the apparent power?",
        image: "",
        options: [
            "141VA",
            "224VA",
            "300VA",
            "100VA"
        ],
        correct: 1,
        explanation: "Apparent power = √(P² + Q²) = √(100² + 200²) = √50000 = 224VA",
        lookup: "See power triangle calculations",
        syllabus: "3b"
    },
    {
        source: "CLAUDE QUIZ AC THEORY Q09",
        question: "At what frequency does a 10μH inductor have the same reactance as a 100pF capacitor?",
        image: "",
        options: [
            "1.59MHz",
            "5.03MHz",
            "15.9MHz",
            "50.3MHz"
        ],
        correct: 1,
        explanation: "XL = XC when 2πfL = 1/(2πfC). Solving: f = 1/(2π√LC) = 1/(2π√(10×10⁻⁶ × 100×10⁻¹²)) = 5.03MHz",
        lookup: "See resonant frequency calculation",
        syllabus: "3c"
    },
    {
        source: "CLAUDE QUIZ AC THEORY Q10",
        question: "In a phasor diagram, how is a lagging current represented?",
        image: "",
        options: [
            "Current phasor points in same direction as voltage",
            "Current phasor is rotated clockwise from voltage",
            "Current phasor is rotated counter-clockwise from voltage",
            "Current phasor points opposite to voltage"
        ],
        correct: 1,
        explanation: "A lagging current is shown with the current phasor rotated clockwise (behind) the voltage phasor",
        lookup: "See phasor diagram conventions",
        syllabus: "3b"
    },
    {
        source: "CAPACITIVE REACTANCE ESTIMATION Q01",
        question: "ESTIMATE (don't calculate): 220pF at 7MHz. Which range is the reactance in?",
        image: "",
        options: [
            "1-10 ohms",
            "10-100 ohms",
            "100-1000 ohms",
            "1000-10000 ohms"
        ],
        correct: 2,
        explanation: "Using 1pF at 1GHz ≈ 160Ω. 220pF ≈ 200x more cap → 160/200 = 0.8Ω. 7MHz vs 1GHz = 1000/7 ≈ 140x. So 0.8 × 140 ≈ 112Ω. Exact: 103.35Ω",
        lookup: "Practice the reference point method",
        syllabus: "0"
    },
    {
        source: "CAPACITIVE REACTANCE ESTIMATION Q02",
        question: "ESTIMATE: 10nF at 10kHz. Which is closest to the reactance?",
        image: "",
        options: [
            "160 ohms",
            "1600 ohms",
            "16 ohms",
            "16000 ohms"
        ],
        correct: 1,
        explanation: "Using 1nF at 1MHz ≈ 160Ω. 10nF = 10x more cap → 160/10 = 16Ω. But 10kHz = 1/100 of 1MHz → 16 × 100 = 1600Ω. Exact: 1592Ω",
        lookup: "Watch the frequency scaling carefully",
        syllabus: "0"
    },
    {
        source: "CAPACITIVE REACTANCE ESTIMATION Q03",
        question: "ESTIMATE: 47pF at 21MHz. Which is the best estimate?",
        image: "",
        options: [
            "50 ohms",
            "160 ohms",
            "500 ohms",
            "1600 ohms"
        ],
        correct: 1,
        explanation: "Using 1pF at 1GHz ≈ 160Ω. 47pF ≈ 50x more cap → 160/50 = 3.2Ω. 21MHz vs 1GHz = 1000/21 ≈ 50x. So 3.2 × 50 ≈ 160Ω. Exact: 161.25Ω",
        lookup: "Notice how close the estimate can be!",
        syllabus: "0"
    },
    {
        source: "CAPACITIVE REACTANCE ESTIMATION Q04",
        question: "ESTIMATE: 1μF at 50Hz (mains frequency). Which range?",
        image: "",
        options: [
            "1-10 ohms",
            "10-100 ohms",
            "100-1000 ohms",
            "1000-10000 ohms"
        ],
        correct: 3,
        explanation: "Using 1μF at 1kHz ≈ 160Ω. Same capacitance, but 50Hz = 1/20 of 1kHz → 160 × 20 = 3200Ω. Wait, that's too high! Let me recalculate: 160Ω × (1000/50) = 160 × 20 = 3200Ω.  Exact: 3183Ω",
        lookup: "Low frequencies give high reactances!",
        syllabus: "0"
    },
    {
        source: "CAPACITIVE REACTANCE ESTIMATION Q05",
        question: "ESTIMATE: 330pF at 14MHz. Best estimate?",
        image: "",
        options: [
            "35 ohms",
            "70 ohms",
            "140 ohms",
            "280 ohms"
        ],
        correct: 0,
        explanation: "Using 1pF at 1GHz ≈ 160Ω. 330pF ≈ 300x more → 160/300 ≈ 0.5Ω. 14MHz vs 1GHz = 1000/14 ≈ 70x. So 0.5 × 70 ≈ 35Ω. Exact: 34.45Ω",
        lookup: "",
        syllabus: "0"
    },
    {
        source: "CAPACITIVE REACTANCE ESTIMATION Q06",
        question: "ESTIMATE: 2.2nF at 144MHz (2m band). Which is closest?",
        image: "",
        options: [
            "0.5 ohms",
            "5 ohms",
            "50 ohms",
            "500 ohms"
        ],
        correct: 0,
        explanation: "Using 1nF at 1MHz ≈ 160Ω. 2.2nF ≈ 2x more cap → 160/2 = 80Ω. 144MHz vs 1MHz = 144x higher freq → 80/144 ≈ 0.6Ω. Exact: 0.5024Ω",
        lookup: "VHF frequencies give very low reactances",
        syllabus: "0"
    },
    {
        source: "CAPACITIVE REACTANCE ESTIMATION Q07",
        question: "Which capacitor would have reactance closest to 50Ω at 7MHz?",
        image: "",
        options: [
            "220pF",
            "470pF",
            "1nF",
            "2.2nF"
        ],
        correct: 1,
        explanation: "Work backwards: need 50Ω at 7MHz. Using reference scaling, this suggests about 470pF. Check: 470pF at 7MHz gives 48.38Ω (very close to 50Ω target)",
        lookup: "Sometimes work backwards from the target",
        syllabus: "0"
    },
    {
        source: "CAPACITIVE REACTANCE ESTIMATION Q08",
        question: "ESTIMATE: 100μF at 50Hz. Which range?",
        image: "",
        options: [
            "0.01-0.1 ohms",
            "0.1-1 ohms",
            "1-10 ohms",
            "10-100 ohms"
        ],
        correct: 3,
        explanation: "Using 1μF at 1kHz ≈ 160Ω. 100μF = 100x more cap → 160/100 = 1.6Ω. 50Hz = 1/20 of 1kHz → 1.6 × 20 = 32Ω.  Exact: 31.83Ω",
        lookup: "",
        syllabus: "0"
    },
    {
        source: "CLAUDE QUIZ TUNED CIRCUITS Q01",
        question: "A series LC circuit has L=10μH and C=100pF. What is the resonant frequency?",
        image: "",
        options: [
            "1.59MHz",
            "5.03MHz",
            "15.9MHz",
            "50.3MHz"
        ],
        correct: 1,
        explanation: "f₀ = 1/(2π√LC) = 1/(2π√(10×10⁻⁶ × 100×10⁻¹²)) = 5.03MHz",
        lookup: "See resonant frequency formula",
        syllabus: "3c"
    },
    {
        source: "CLAUDE QUIZ TUNED CIRCUITS Q02",
        question: "At resonance, what is the impedance of a series LC circuit (ignoring resistance)?",
        image: "",
        options: [
            "Zero",
            "Infinite",
            "Equal to XL",
            "Equal to XC"
        ],
        correct: 0,
        explanation: "At resonance, XL = XC and they cancel out, leaving Z = 0 (ignoring resistance)",
        lookup: "See series resonance characteristics",
        syllabus: "3c"
    },
    {
        source: "CLAUDE QUIZ TUNED CIRCUITS Q03",
        question: "At resonance, what is the impedance of a parallel LC circuit (ignoring resistance)?",
        image: "",
        options: [
            "Zero",
            "Infinite",
            "Equal to XL",
            "Equal to XC"
        ],
        correct: 1,
        explanation: "At resonance in a parallel LC circuit, the impedance is maximum (theoretically infinite, ignoring resistance)",
        lookup: "See parallel resonance characteristics",
        syllabus: "3c"
    },
    {
        source: "CLAUDE QUIZ TUNED CIRCUITS Q04",
        question: "A tuned circuit has Q=100 and resonates at 7MHz. What is the bandwidth?",
        image: "",
        options: [
            "35kHz",
            "70kHz",
            "140kHz",
            "700kHz"
        ],
        correct: 1,
        explanation: "Bandwidth = f₀/Q = 7MHz/100 = 70kHz",
        lookup: "See Q factor and bandwidth relationship",
        syllabus: "3c"
    },
    {
        source: "CLAUDE QUIZ TUNED CIRCUITS Q05",
        question: "What happens to the resonant frequency if the capacitance is increased by 4 times?",
        image: "",
        options: [
            "Frequency increases by 4 times",
            "Frequency increases by 2 times",
            "Frequency decreases by 2 times",
            "Frequency decreases by 4 times"
        ],
        correct: 2,
        explanation: "f₀ ∝ 1/√C. If C increases by 4x, then √C increases by 2x, so frequency decreases by 2x",
        lookup: "See how L and C affect resonant frequency",
        syllabus: "3c"
    },
    {
        source: "CLAUDE QUIZ TUNED CIRCUITS Q06",
        question: "In a series RLC circuit at resonance, where does the maximum voltage appear?",
        image: "",
        options: [
            "Across the resistor",
            "Across the inductor or capacitor",
            "Equally across all components",
            "Across the supply"
        ],
        correct: 1,
        explanation: "At resonance, voltage across L or C can be Q times the supply voltage, much higher than across R",
        lookup: "See voltage magnification in resonant circuits",
        syllabus: "3c"
    },
    {
        source: "CLAUDE QUIZ TUNED CIRCUITS Q07",
        question: "A crystal oscillator has a series resonant frequency of 10MHz and parallel resonant frequency of 10.001MHz. This crystal would typically be used in:",
        image: "",
        options: [
            "Series mode only",
            "Parallel mode only",
            "Either series or parallel mode",
            "Neither mode - it's defective"
        ],
        correct: 2,
        explanation: "This small frequency difference is normal for crystals. They can operate in either mode depending on circuit design",
        lookup: "See crystal equivalent circuit and modes",
        syllabus: "3c"
    },
    {
        source: "CLAUDE QUIZ TUNED CIRCUITS Q08",
        question: "What is the phase relationship between voltage and current in a series LC circuit below the resonant frequency?",
        image: "",
        options: [
            "Current leads voltage (capacitive)",
            "Current lags voltage (inductive)",
            "Current and voltage are in phase",
            "Phase relationship is undefined"
        ],
        correct: 0,
        explanation: "Below resonance, XC > XL, so the circuit acts capacitively and current leads voltage",
        lookup: "See reactance vs frequency curves",
        syllabus: "3c"
    },
    {
        source: "CLAUDE QUIZ TUNED CIRCUITS Q09",
        question: "A parallel LC circuit has L=1μH and is tuned to 100MHz. What value of C is needed?",
        image: "",
        options: [
            "2.53pF",
            "25.3pF",
            "253pF",
            "2.53nF"
        ],
        correct: 0,
        explanation: "Rearranging f₀ = 1/(2π√LC): C = 1/(4π²f₀²L) = 1/(4π² × (100×10⁶)² × 1×10⁻⁶) = 2.53pF",
        lookup: "See how to calculate component values for desired frequency",
        syllabus: "3c"
    },
    {
        source: "CLAUDE QUIZ TUNED CIRCUITS Q10",
        question: "What determines the Q factor of a practical tuned circuit?",
        image: "",
        options: [
            "Only the inductance value",
            "Only the capacitance value",
            "The resistance of the components",
            "The resonant frequency only"
        ],
        correct: 2,
        explanation: "Q = XL/R (or XC/R). The resistance of the components, especially the inductor, determines the Q",
        lookup: "See Q factor and component losses",
        syllabus: "3c"
    },
    {
        source: "CLAUDE QUIZ CRYSTALS Q01",
        question: "What is the typical frequency stability of a crystal oscillator compared to an LC oscillator?",
        image: "",
        options: [
            "About the same",
            "10 times better",
            "100 times better",
            "1000 times better"
        ],
        correct: 3,
        explanation: "Crystal oscillators typically have frequency stability 1000 times better than LC oscillators",
        lookup: "See crystal vs LC oscillator stability comparison",
        syllabus: "3d"
    },
    {
        source: "CLAUDE QUIZ CRYSTALS Q02",
        question: "A crystal has a series resonant frequency of 10.000MHz and a parallel resonant frequency of 10.003MHz. What is this difference called?",
        image: "",
        options: [
            "Frequency drift",
            "Frequency pulling range",
            "Temperature coefficient",
            "Aging rate"
        ],
        correct: 1,
        explanation: "The difference between series and parallel resonant frequencies defines the frequency pulling range",
        lookup: "See crystal equivalent circuit and pulling range",
        syllabus: "3d"
    },
    {
        source: "CLAUDE QUIZ CRYSTALS Q03",
        question: "What is the equivalent circuit of a crystal near its resonant frequency?",
        image: "",
        options: [
            "A series LC circuit only",
            "A parallel LC circuit only",
            "A series LCR circuit in parallel with a capacitor",
            "A parallel LCR circuit in series with an inductor"
        ],
        correct: 2,
        explanation: "A crystal is equivalent to a series LCR circuit (motional arm) in parallel with the holder capacitance",
        lookup: "See crystal equivalent circuit model",
        syllabus: "3d"
    },
    {
        source: "CLAUDE QUIZ CRYSTALS Q04",
        question: "Which factor most affects crystal frequency stability?",
        image: "",
        options: [
            "Supply voltage changes",
            "Temperature changes",
            "Load impedance changes",
            "Humidity changes"
        ],
        correct: 1,
        explanation: "Temperature is the dominant factor affecting crystal frequency. Most crystals have temperature coefficients specified in ppm/°C",
        lookup: "See crystal temperature effects and compensation",
        syllabus: "3d"
    },
    {
        source: "CLAUDE QUIZ CRYSTALS Q05",
        question: "What is a TCXO?",
        image: "",
        options: [
            "Temperature Compensated Crystal Oscillator",
            "Tunable Crystal X-tal Oscillator",
            "Time Constant X-tal Oscillator",
            "Thermally Controlled X-tal Oscillator"
        ],
        correct: 0,
        explanation: "TCXO stands for Temperature Compensated Crystal Oscillator - uses compensation circuits to reduce temperature drift",
        lookup: "See crystal oscillator types and temperature compensation",
        syllabus: "3d"
    },
    {
        source: "CLAUDE QUIZ CRYSTALS Q06",
        question: "A 10MHz crystal is used in a circuit that presents a load capacitance of 20pF. The crystal is specified for 32pF load. How will this affect the frequency?",
        image: "",
        options: [
            "Frequency will be higher than 10MHz",
            "Frequency will be lower than 10MHz",
            "Frequency will be exactly 10MHz",
            "The crystal will not oscillate"
        ],
        correct: 0,
        explanation: "Lower load capacitance than specified causes the crystal to oscillate at a higher frequency",
        lookup: "See crystal load capacitance effects on frequency",
        syllabus: "3d"
    },
    {
        source: "CLAUDE QUIZ CRYSTALS Q07",
        question: "What is the Q factor of a typical crystal resonator?",
        image: "",
        options: [
            "10 to 100",
            "100 to 1,000",
            "1,000 to 10,000",
            "10,000 to 100,000"
        ],
        correct: 3,
        explanation: "Crystal resonators have extremely high Q factors, typically 10,000 to 100,000, much higher than LC circuits",
        lookup: "See crystal Q factor comparison with LC circuits",
        syllabus: "3d"
    },
    {
        source: "CLAUDE QUIZ CRYSTALS Q08",
        question: "What happens to a crystal's frequency as it ages?",
        image: "",
        options: [
            "It always increases",
            "It always decreases",
            "It typically decreases initially, then stabilizes",
            "It remains perfectly stable"
        ],
        correct: 2,
        explanation: "Crystals typically show an initial frequency decrease (aging) that slows over time and eventually stabilizes",
        lookup: "See crystal aging characteristics",
        syllabus: "3d"
    },
    {
        source: "CLAUDE QUIZ CRYSTALS Q09",
        question: "At what frequency mode does a 20MHz fundamental crystal typically operate?",
        image: "",
        options: [
            "Fundamental mode only",
            "3rd overtone",
            "5th overtone",
            "It cannot operate at 20MHz"
        ],
        correct: 1,
        explanation: "Crystals above about 15MHz typically use overtone operation. A 20MHz crystal usually operates on the 3rd overtone",
        lookup: "See fundamental vs overtone crystal operation",
        syllabus: "3d"
    },
    {
        source: "CLAUDE QUIZ CRYSTALS Q10",
        question: "What is the purpose of a crystal oven (OCXO)?",
        image: "",
        options: [
            "To prevent moisture damage",
            "To maintain constant temperature",
            "To increase the crystal's Q factor",
            "To reduce supply voltage sensitivity"
        ],
        correct: 1,
        explanation: "OCXO (Oven Controlled Crystal Oscillator) maintains the crystal at a constant elevated temperature to minimize frequency drift",
        lookup: "See temperature control methods for crystal stability",
        syllabus: "3d"
    },
    {
        source: "CLAUDE QUIZ SEMICONDUCTORS Q01",
        question: "What is the typical forward voltage drop of a silicon diode at room temperature?",
        image: "",
        options: [
            "0.3V",
            "0.7V",
            "1.2V",
            "2.1V"
        ],
        correct: 1,
        explanation: "Silicon diodes have a typical forward voltage drop of about 0.7V at room temperature and normal currents",
        lookup: "See diode characteristics and voltage drops",
        syllabus: "4a"
    },
    {
        source: "CLAUDE QUIZ SEMICONDUCTORS Q02",
        question: "In an NPN transistor, what is the normal bias condition for amplifier operation?",
        image: "",
        options: [
            "Base-emitter forward biased, collector-base reverse biased",
            "Base-emitter reverse biased, collector-base forward biased",
            "Both junctions forward biased",
            "Both junctions reverse biased"
        ],
        correct: 0,
        explanation: "For normal amplifier operation (active region), the B-E junction is forward biased and the C-B junction is reverse biased",
        lookup: "See transistor biasing and operating regions",
        syllabus: "4b"
    },
    {
        source: "CLAUDE QUIZ SEMICONDUCTORS Q03",
        question: "What is the approximate current gain (hfe or β) of a typical small signal transistor?",
        image: "",
        options: [
            "1 to 10",
            "10 to 50",
            "50 to 500",
            "500 to 5000"
        ],
        correct: 2,
        explanation: "Typical small signal transistors have current gains (β or hfe) in the range of 50 to 500",
        lookup: "See transistor current gain specifications",
        syllabus: "4b"
    },
    {
        source: "CLAUDE QUIZ SEMICONDUCTORS Q04",
        question: "A Zener diode with a 5.1V rating is used in a voltage regulator circuit. What is its primary function?",
        image: "",
        options: [
            "Rectification",
            "Voltage reference/regulation",
            "Current limiting",
            "Frequency mixing"
        ],
        correct: 1,
        explanation: "Zener diodes provide a stable voltage reference when reverse biased above their Zener voltage (5.1V in this case)",
        lookup: "See Zener diode operation and voltage regulation",
        syllabus: "4a"
    },
    {
        source: "CLAUDE QUIZ SEMICONDUCTORS Q05",
        question: "What type of transistor configuration provides voltage gain but no current gain?",
        image: "",
        options: [
            "Common emitter",
            "Common collector (emitter follower)",
            "Common base",
            "Common drain"
        ],
        correct: 2,
        explanation: "Common base configuration provides voltage gain but current gain less than 1 (no current gain)",
        lookup: "See transistor configurations and their characteristics",
        syllabus: "4b"
    },
    {
        source: "CLAUDE QUIZ SEMICONDUCTORS Q06",
        question: "What is the main advantage of a MOSFET over a bipolar transistor?",
        image: "",
        options: [
            "Higher current capability",
            "Lower cost",
            "Very high input impedance",
            "Better frequency response"
        ],
        correct: 2,
        explanation: "MOSFETs have extremely high input impedance (gate input) compared to the base current required by bipolar transistors",
        lookup: "See MOSFET vs bipolar transistor comparison",
        syllabus: "4c"
    },
    {
        source: "CLAUDE QUIZ SEMICONDUCTORS Q07",
        question: "A LED has a forward voltage of 2.1V and needs 20mA current. What series resistor is needed with a 12V supply?",
        image: "",
        options: [
            "220Ω",
            "390Ω",
            "495Ω",
            "680Ω"
        ],
        correct: 2,
        explanation: "R = (Vsupply - VLED)/ILED = (12 - 2.1)/0.02 = 9.9/0.02 = 495Ω",
        lookup: "See LED current limiting resistor calculations",
        syllabus: "4a"
    },
    {
        source: "CLAUDE QUIZ SEMICONDUCTORS Q08",
        question: "What happens to the resistance of a thermistor (NTC type) as temperature increases?",
        image: "",
        options: [
            "Resistance increases",
            "Resistance decreases",
            "Resistance stays constant",
            "Resistance becomes infinite"
        ],
        correct: 1,
        explanation: "NTC (Negative Temperature Coefficient) thermistors decrease in resistance as temperature increases",
        lookup: "See thermistor types and temperature characteristics",
        syllabus: "4a"
    },
    {
        source: "CLAUDE QUIZ SEMICONDUCTORS Q09",
        question: "In a Class A amplifier, what percentage of the input cycle does the transistor conduct?",
        image: "",
        options: [
            "25%",
            "50%",
            "75%",
            "100%"
        ],
        correct: 3,
        explanation: "Class A amplifiers are biased so the transistor conducts for 100% of the input signal cycle",
        lookup: "See amplifier classes and conduction angles",
        syllabus: "4d"
    },
    {
        source: "CLAUDE QUIZ SEMICONDUCTORS Q10",
        question: "What is the primary cause of thermal runaway in power transistors?",
        image: "",
        options: [
            "Excessive base current",
            "Positive feedback between temperature and collector current",
            "Too much heat sink compound",
            "Insufficient supply voltage"
        ],
        correct: 1,
        explanation: "As temperature increases, collector current increases, causing more heating, which increases current further - positive thermal feedback",
        lookup: "See thermal runaway and power transistor protection",
        syllabus: "4b"
    },
    {
        source: "CLAUDE QUIZ TRANSFORMERS Q01",
        question: "A transformer has a primary winding of 240 turns and a secondary of 60 turns. What is the turns ratio?",
        image: "",
        options: [
            "1:4",
            "4:1",
            "1:0.25",
            "0.25:1"
        ],
        correct: 1,
        explanation: "Turns ratio = Np:Ns = 240:60 = 4:1 (primary to secondary)",
        lookup: "",
        syllabus: "5a"
    },
    {
        source: "CLAUDE QUIZ TRANSFORMERS Q02",
        question: "Using a transformer with a primary winding of 240 turns and a secondary of 60 turns, if 240V AC is applied to the primary, what is the secondary voltage?",
        image: "",
        options: [
            "15V",
            "60V",
            "240V",
            "960V"
        ],
        correct: 1,
        explanation: "Vs = Vp × (Ns/Np) = 240 × (60/240) = 240 × 0.25 = 60V",
        lookup: "See transformer voltage transformation",
        syllabus: "5a"
    },
    {
        source: "CLAUDE QUIZ TRANSFORMERS Q03",
        question: "If the secondary of the transformer, with a primary winding of 240 turns and a secondary of 60 turns supplies 2A, what is the primary current (assuming 100% efficiency)?",
        image: "",
        options: [
            "0.5A",
            "2A",
            "4A",
            "8A"
        ],
        correct: 0,
        explanation: "Ip = Is × (Ns/Np) = 2 × (60/240) = 2 × 0.25 = 0.5A. Power in = Power out, so high voltage/low current on primary",
        lookup: "See transformer current transformation",
        syllabus: "5a"
    },
    {
        source: "CLAUDE QUIZ TRANSFORMERS Q04",
        question: "What is the impedance transformation ratio of a transformer with a turns ratio of 5:1?",
        image: "",
        options: [
            "5:1",
            "25:1",
            "1:5",
            "1:25"
        ],
        correct: 1,
        explanation: "Impedance ratio = (turns ratio)² = (5:1)² = 25:1",
        lookup: "See impedance transformation in transformers",
        syllabus: "5a"
    },
    {
        source: "CLAUDE QUIZ TRANSFORMERS Q05",
        question: "A 50Ω load is connected to the secondary of a 3:1 transformer. What impedance does the primary see?",
        image: "",
        options: [
            "5.6Ω",
            "16.7Ω",
            "150Ω",
            "450Ω"
        ],
        correct: 3,
        explanation: "Zp = Zs × (Np/Ns)² = 50 × (3/1)² = 50 × 9 = 450Ω",
        lookup: "See impedance transformation calculations",
        syllabus: "5a"
    },
    {
        source: "CLAUDE QUIZ TRANSFORMERS Q06",
        question: "What type of core material is best for transformers operating at RF frequencies?",
        image: "",
        options: [
            "Laminated steel",
            "Solid iron",
            "Ferrite",
            "Air core"
        ],
        correct: 2,
        explanation: "Ferrite cores have low losses at RF frequencies, unlike steel which has high eddy current losses at RF",
        lookup: "See transformer core materials and frequency response",
        syllabus: "5a"
    },
    {
        source: "CLAUDE QUIZ TRANSFORMERS Q07",
        question: "What is the primary cause of power loss in an iron-core transformer at 50Hz?",
        image: "",
        options: [
            "Copper losses in the windings",
            "Hysteresis and eddy current losses in the core",
            "Radiation losses",
            "Leakage inductance"
        ],
        correct: 1,
        explanation: "At mains frequencies, core losses (hysteresis and eddy currents) are typically the dominant loss mechanism",
        lookup: "See transformer losses and efficiency",
        syllabus: "5a"
    },
    {
        source: "CLAUDE QUIZ TRANSFORMERS Q08",
        question: "A center-tapped transformer secondary provides 25V from each half to center tap. What voltage appears across the full secondary?",
        image: "",
        options: [
            "25V",
            "35.4V",
            "50V",
            "70.7V"
        ],
        correct: 2,
        explanation: "The full secondary voltage is twice the center-tap voltage: 2 × 25V = 50V",
        lookup: "See center-tapped transformer configurations",
        syllabus: "5a"
    },
    {
        source: "CLAUDE QUIZ TRANSFORMERS Q09",
        question: "What is the main advantage of a toroidal transformer over a conventional E-I core transformer?",
        image: "",
        options: [
            "Lower cost",
            "Higher voltage rating",
            "Reduced magnetic field leakage",
            "Better high-frequency response"
        ],
        correct: 2,
        explanation: "Toroidal transformers have a closed magnetic path, resulting in much lower external magnetic field leakage",
        lookup: "See toroidal vs conventional transformer construction",
        syllabus: "5a"
    },
    {
        source: "CLAUDE QUIZ TRANSFORMERS Q10",
        question: "An audio transformer is used to match a 8Ω speaker to a 2000Ω tube amplifier output. What turns ratio is needed?",
        image: "",
        options: [
            "1:15.8",
            "15.8:1",
            "1:250",
            "250:1"
        ],
        correct: 1,
        explanation: "Turns ratio = √(Zp/Zs) = √(2000/8) = √250 = 15.8:1 (primary to secondary)",
        lookup: "See impedance matching transformer design",
        syllabus: "5a"
    },
    {
        source: "CLAUDE QUIZ POWER SUPPLIES Q01",
        question: "A half-wave rectifier uses a transformer with 25V RMS secondary. What is the peak DC output voltage (ignoring diode drop)?",
        image: "",
        options: [
            "25V",
            "35.4V",
            "50V",
            "70.7V"
        ],
        correct: 1,
        explanation: "Peak voltage = RMS × √2 = 25 × 1.414 = 35.4V",
        lookup: "See RMS to peak conversion in rectifier circuits",
        syllabus: "6a"
    },
    {
        source: "CLAUDE QUIZ POWER SUPPLIES Q02",
        question: "What is the main advantage of a full-wave bridge rectifier over a center-tap full-wave rectifier?",
        image: "",
        options: [
            "Higher output voltage",
            "Better transformer utilization",
            "Fewer diodes required",
            "Lower ripple frequency"
        ],
        correct: 1,
        explanation: "Bridge rectifiers use the full transformer secondary voltage, while center-tap circuits only use half at a time",
        lookup: "See rectifier circuit comparisons",
        syllabus: "6a"
    },
    {
        source: "CLAUDE QUIZ POWER SUPPLIES Q03",
        question: "In a full-wave rectifier fed from 50Hz mains, what is the ripple frequency?",
        image: "",
        options: [
            "25Hz",
            "50Hz",
            "100Hz",
            "200Hz"
        ],
        correct: 2,
        explanation: "Full-wave rectification produces two pulses per AC cycle, so ripple frequency = 2 × 50Hz = 100Hz",
        lookup: "See ripple frequency in rectifier circuits",
        syllabus: "6a"
    },
    {
        source: "CLAUDE QUIZ POWER SUPPLIES Q04",
        question: "What is the purpose of the reservoir capacitor in a power supply?",
        image: "",
        options: [
            "Voltage regulation",
            "Current limiting",
            "Ripple filtering",
            "Surge protection"
        ],
        correct: 2,
        explanation: "The reservoir (filter) capacitor smooths the pulsating DC from the rectifier, reducing ripple",
        lookup: "See capacitor filtering in power supplies",
        syllabus: "6a"
    },
    {
        source: "CLAUDE QUIZ POWER SUPPLIES Q05",
        question: "A Zener diode regulator has a 12V Zener with 10mA Zener current. The series resistor is 330Ω and input voltage is 18V. What is the maximum load current?",
        image: "",
        options: [
            "8.2mA",
            "18.2mA",
            "28.2mA",
            "54.5mA"
        ],
        correct: 0,
        explanation: "Series current = (18-12)/330 = 18.2mA. Load current = Total current - Zener current = 18.2 - 10 = 8.2mA",
        lookup: "See Zener diode regulator calculations",
        syllabus: "6b"
    },
    {
        source: "CLAUDE QUIZ POWER SUPPLIES Q06",
        question: "What is the main advantage of a switching power supply over a linear regulator?",
        image: "",
        options: [
            "Lower cost",
            "Better regulation",
            "Higher efficiency",
            "Lower noise"
        ],
        correct: 2,
        explanation: "Switching supplies are much more efficient (80-95%) compared to linear regulators (50-60% typical)",
        lookup: "See switching vs linear power supply comparison",
        syllabus: "6c"
    },
    {
        source: "CLAUDE QUIZ POWER SUPPLIES Q07",
        question: "In a three-terminal voltage regulator (like 7812), what is the typical dropout voltage?",
        image: "",
        options: [
            "0.7V",
            "2V",
            "5V",
            "12V"
        ],
        correct: 1,
        explanation: "Three-terminal regulators typically need about 2V headroom (dropout voltage) above the regulated output",
        lookup: "See linear regulator specifications",
        syllabus: "6b"
    },
    {
        source: "CLAUDE QUIZ POWER SUPPLIES Q08",
        question: "What type of transformer is typically used in a switching power supply?",
        image: "",
        options: [
            "50Hz mains transformer",
            "Audio frequency transformer",
            "High frequency (kHz) transformer",
            "No transformer is used"
        ],
        correct: 2,
        explanation: "Switching supplies use high-frequency transformers (typically 20-100kHz) which are much smaller and lighter",
        lookup: "See switching power supply operation",
        syllabus: "6c"
    },
    {
        source: "CLAUDE QUIZ POWER SUPPLIES Q09",
        question: "A power supply has 2% regulation. If the no-load voltage is 12.5V, what is the full-load voltage?",
        image: "",
        options: [
            "12.0V",
            "12.25V",
            "12.75V",
            "13.0V"
        ],
        correct: 1,
        explanation: "2% regulation means 2% drop from no-load to full-load: 12.5V - (12.5 × 0.02) = 12.5 - 0.25 = 12.25V",
        lookup: "See voltage regulation calculations",
        syllabus: "6b"
    },
    {
        source: "CLAUDE QUIZ POWER SUPPLIES Q10",
        question: "What safety feature is essential in all mains-powered equipment?",
        image: "",
        options: [
            "Overvoltage protection",
            "Current limiting",
            "Earth/ground connection",
            "Fuse protection"
        ],
        correct: 2,
        explanation: "Earth/ground connection is essential for safety - it provides a path for fault currents and prevents chassis from becoming live",
        lookup: "See power supply safety requirements",
        syllabus: "6d"
    }
]
export default CLAUDE_QUIZ