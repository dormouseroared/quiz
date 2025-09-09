[
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
    }
]