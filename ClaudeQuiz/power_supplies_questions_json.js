[
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