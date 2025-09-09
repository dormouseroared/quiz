[
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
    }
]