const OWN_QUESTIONS = [
    {
        source: "OWN QUESTIONS Q00",
        question: "MathJax Test of questionDiv, optionsDiv, explanationDiv and syllabusItemsDiv<br>inline: $Q = V \\cdot C$ <br><br>display: $$ Q = V \\times C $$",
        image: "",
        options: [
            "all answers are the same: $R_D$",
            "all answers are the same: $R_D$",
            "all answers are the same: $R_D$",
            "all answers are the same: $R_D$",
        ],
        correct: 1,
        explanation: `Yes its $R_D$ again!!`,
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
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
        source: "OWN QUESTIONS Q16",
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
        source: "OWN QUESTIONS Q17",
        question: "What will the charge be on a $22 \\mu F$ capacitor if it is connected to a 12V DC supply for several hours? #Q",
        image: "",
        options: [
            "$264 \\mu C$",
            "$26.4 \\mu C$",
            "$2640 \\mu C$",
            "$2.64 \\mu C$",
        ],
        correct: 0,
        explanation: `$Q = V \\cdot C$ and because several hours have passed, we have exceeded 5 time constants. There is a flashcard for this also.`,
        lookup: "See page(s) 21 of the Full Licence text book",
        syllabus: "2d.1",
        reference: "BBDL FULL COURSE - Week03A - Tutorial Video - 01:18:38",
        tagged: true
    },
    {
        source: "OWN QUESTIONS Q18",
        question: "If a capacitor of 1F will store 1C of charge for an applied PD of 1V, what PD would a $10,000 \\mu F$ capacitor need to achieve the same charge? #Q",
        image: "",
        options: [
            "10V",
            "100V",
            "1000V",
            "1V",
        ],
        correct: 1,
        explanation: `$$Q = V \\cdot C$$ From this we get V = Q/C and that becomes $\\frac{1}{10 \\times 10^{-3}} = 100V $ noting that $10,000 \\mu F$ is the same as $ 10mF $.`,
        lookup: "See page(s) 21 of the Full Licence text book",
        syllabus: "2d.1"
    },
    {
        source: "OWN QUESTIONS Q19",
        question: "If a 10mF capacitor is charged with a constant current of 10mA for 1 minute, what would its charge be (in Coulombs), and what would the potential difference be (in Volts)? #Q",
        image: "",
        options: [
            "60mC & 60V",
            "600mC & 60V",
            "600mC & 600V",
            "60mC & 600V",
        ],
        correct: 1,
        explanation: `First of all: $$Q = I \\cdot t$$ so Charge is current x time (which is a bit weird as that implies charge could get very high with no limit) and $$Q = 10 \\times 10^{-3} \\times 60 = 600mC$$ then use $$Q = V \\cdot C$$ to get $$V = \\frac{Q}{C} = \\frac{600 \\times 10^{-3}}{10 \\times 10^{-3}} = 60V$$ I emailed Steve about this, and the answer is to apply the formula with the numbers and not think too deeply about it.`,
        lookup: "See page(s) 21 of the Full Licence text book",
        syllabus: "2d.1"
    },
    {
        source: "OWN QUESTIONS Q20",
        question: "What is the selectivity Q for a series tuned 'acceptor' circuit, with a resonant frequency $f_0$ of 10.7MHz, an upper half power frequency (-3dB) $f_2$ of 10.706MHz, and a lower half-power point (-3dB) $f_1$ of 10.694MHz.    #Q",
        image: "images/own-q20.png",
        options: [
            "892",
            "89.2",
            "8.92",
            "0.892",
        ],
        correct: 0,
        explanation: `$$Q = \\frac{f_0}{f_2 - f_1}$$<br> Then $Q = \\frac {10.7 \\times 10^6}{(10.706 - 10.694) \\times 10^6} = 891.7$<br><br>The bandwidth comes out to 12kHz and may be provided or need to be calculated.`,
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2h.4"
    },
    {
        source: "OWN QUESTIONS Q21",
        question: "What is the selectivity Q for a series tuned circuit, an 'acceptor' circuit, with a resonant frequency $f_0$ of 10.7MHz, an upper half power frequency (upper -3dB point), $f_2$, of 10.702MHz, and a lower half-power point (lower -3dB point), $f_1$, of 10.698MHz.    #Q",
        image: "images/own-q20.png",
        options: [
            "2675",
            "26.75",
            "267.5",
            "0.2675",
        ],
        correct: 0,
        explanation: `$$Q = \\frac{f_0}{f_2 - f_1}$$<br> Then $Q = \\frac {10.7 \\times 10^6}{(10.702 - 10.698) \\times 10^6} = 2675$<br><br>The bandwidth comes out to 4kHz and may be provided or need to be calculated. The narrower the bandwith, the higher the Q. The mode of transmission determines the bandwidth required. `,
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2h.4"
    },
    // {
    //     source: "OWN QUESTIONS Q01",
    //     question: "",
    //     image: "",
    //     options: [
    //         "",
    //         "",
    //         "",
    //         "",
    //     ],
    //     correct: 9,
    //     explanation: ``,
    //     lookup: "See page(s) x of the Full Licence text book",
    //     syllabus: "0"
    // },
]

export default OWN_QUESTIONS