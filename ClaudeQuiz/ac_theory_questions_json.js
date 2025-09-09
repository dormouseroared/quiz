[
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
        question: "What is the phase angle in the circuit from Q04?",
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
    }
]