const OWN_QUESTIONS = [
    {
        source: "OWN QUESTIONS Q01",
        question: "What is the fundamental property that defines an inductor's behavior in a circuit?",
        image: "",
        options: [
            "It opposes changes in voltage",
            "It opposes changes in current",
            "It stores energy in an electric field",
            "It converts AC to DC",
        ],
        correct: 1,
        explanation: `Inductors oppose changes in current due to Lenz's law and self-induced back EMF`,
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2"
    },
    {
        source: "OWN QUESTIONS Q02",
        question: "Where does an inductor store its energy?",
        image: "",
        options: [
            "In the electric field between its turns",
            "In the resistance of the wire",
            "In the magnetic field around and within the coil",
            "In the insulation between windings",
        ],
        correct: 2,
        explanation: `Inductors store energy in the magnetic field created by current flow through the coil`,
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2"
    },
    {
        source: "OWN QUESTIONS Q03",
        question: "According to Lenz's law, the direction of induced EMF in an inductor will:",
        image: "",
        options: [
            "Always be in the same direction as the applied voltage",
            "Always oppose the change that created it",
            "Depend on the frequency of the applied signal",
            "Be random and unpredictable",
        ],
        correct: 1,
        explanation: `Lenz's law states that induced EMF opposes the change in magnetic flux that created it`,
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2"
    },
    {
        source: "OWN QUESTIONS Q04",
        question: "In a DC circuit after all transients have settled, an ideal inductor behaves like:",
        image: "",
        options: [
            "An open circuit (infinite resistance)",
            "A short circuit (zero resistance)",
            "A capacitor",
            "A current source",
        ],
        correct: 1,
        explanation: `In DC steady state, there's no change in current, so no back EMF is generated. The inductor acts like a short circuit.`,
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2"
    },
    {
        source: "OWN QUESTIONS Q05",
        question: "As frequency increases in an AC circuit, the impedance of an inductor:",
        image: "",
        options: [
            "Decreases",
            "Remains constant",
            "Increases",
            "First increases then decreases",
        ],
        correct: 2,
        explanation: `Inductive reactance XL = 2πfL, so impedance increases linearly with frequency`,
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2"
    },
    {
        source: "OWN QUESTIONS Q06",
        question: "What happens to the inductance when you increase the number of turns in a coil?",
        image: "",
        options: [
            "Inductance decreases proportionally",
            "Inductance remains the same",
            "Inductance increases proportionally to the square of the turns",
            "Inductance increases linearly with turns",
        ],
        correct: 2,
        explanation: `Inductance is proportional to N², where N is the number of turns.`,
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2"
    },
    {
        source: "OWN QUESTIONS Q07",
        question: "Adding a ferrite core to an air-core inductor will:",
        image: "",
        options: [
            "Decrease the inductance",
            "Increase the inductance",
            "Have no effect on inductance",
            "Convert it to a capacitor",
        ],
        correct: 1,
        explanation: `Ferrite cores increase magnetic permeability, concentrating the magnetic field and increasing inductance.`,
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2"
    },
    {
        source: "OWN QUESTIONS Q08",
        question: "When two inductors are connected in series (assuming no mutual coupling), the total inductance is:",
        image: "",
        options: [
            "Less than the smallest individual inductance",
            "Equal to the average of the individual inductances",
            "Equal to the sum of the individual inductances",
            "Equal to the product divided by the sum",
        ],
        correct: 2,
        explanation: `Series inductors add directly: LTotal = L1 + L2 + L3... (similar to series resistors).`,
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2"
    },
    {
        source: "OWN QUESTIONS Q09",
        question: "When two equal inductors are connected in parallel (assuming no mutual coupling), the total inductance is:",
        image: "",
        options: [
            "Twice the value of one inductor",
            "Half the value of one inductor",
            "The same as one inductor",
            "Four times the value of one inductor",
        ],
        correct: 1,
        explanation: `Parallel inductors follow the reciprocal rule: 1/LTotal = 1/L1 + 1/L2. For equal values, LTotal = L/2.`,
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2"
    },
    {
        source: "OWN QUESTIONS Q10",
        question: "The time constant of an RL circuit determines:",
        image: "",
        options: [
            "The maximum current the circuit can handle",
            "How quickly the circuit responds to changes",
            "The power consumption of the circuit",
            "The operating frequency of the circuit",
        ],
        correct: 1,
        explanation: `Explanation: The time constant τ = L/R determines how quickly current builds up or decays in response to voltage changes.`,
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2"
    },
    {
        source: "OWN QUESTIONS Q11",
        question: "A high-Q inductor in an RF circuit indicates:",
        image: "",
        options: [
            "High losses and poor selectivity",
            "Low losses and good selectivity",
            "High current handling capability",
            "Low inductance value",
        ],
        correct: 1,
        explanation: `High Q means low losses (XL/R ratio is high) and provides good selectivity in resonant circuits.`,
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2"
    },
    {
        source: "OWN QUESTIONS Q12",
        question: "Every real inductor has a self-resonant frequency above which it behaves more like:",
        image: "",
        options: [
            "A resistor",
            "A capacitor",
            "A short circuit",
            "An open circuit",
        ],
        correct: 1,
        explanation: `Above self-resonance, parasitic capacitance between windings dominates, making the inductor appear capacitive.`,
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2"
    },
    {
        source: "OWN QUESTIONS Q13",
        question: "The prefix pica - p - (as in 25pW) means:",
        image: "",
        options: [
            "$10^{-12}$",
            "$10^{-9}$",
            "$10^{-3}$",
            "$10^{-6}$",
        ],
        correct: 0,
        explanation: `pica means $10^{-12}$`,
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0",
        tagged: true
    },
    {
        source: "OWN QUESTIONS Q14",
        question: "The prefix micro - µ - (as in 200µV) means:",
        image: "",
        options: [
            "$10^{-12}$",
            "$10^{-9}$",
            "$10^{-3}$",
            "$10^{-6}$",
        ],
        correct: 3,
        explanation: `micro µ means $10^{-6}$`,
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0",
        tagged: true
    },
    {
        source: "OWN QUESTIONS Q15",
        question: "The prefix milli - m - (as in 3mA) means:",
        image: "",
        options: [
            "$10^{-12}$",
            "$10^{-9}$",
            "$10^{-3}$",
            "$10^{-6}$",
        ],
        correct: 2,
        explanation: `milli m means $10^{-3}$`,
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0",
        tagged: true
    },
    {
        source: "OWN QUESTIONS Q13",
        question: "The prefix nano - n - (as in 10nF) means:",
        image: "",
        options: [
            "$10^{-12}$",
            "$10^{-9}$",
            "$10^{-3}$",
            "$10^{-6}$",
        ],
        correct: 1,
        explanation: `nano n means $10^{-9}$`,
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0",
        tagged: true
    },
    {
        source: "OWN QUESTIONS Q01",
        question: "",
        image: "",
        options: [
            "",
            "",
            "",
            "",
        ],
        correct: 9,
        explanation: ``,
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
]

export default OWN_QUESTIONS