[
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
    }
]