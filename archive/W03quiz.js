const W03quiz = [
    {
        source: "BBDL Intermediate Quiz W03 Q1",
        question: "What is the total resistance of the circuit shown in the diagram? <br><br><img src='images/w03-q1.png' alt='test'  >",
        options: [
            "22Ω",
            "40.5Ω",
            "68Ω",
            "162Ω"
        ],
        correct: 1,
        explanation: "To resolve this you need to work out the series element first, which is fairly straightforward, 33 + 47 = 80Ω. Now we can treat the 80 Ω and the 82 Ω resistor as a simple parallel combination.As they are almost equal, it feels like the answer should be around 40 Ω, but let’s calculate it, to be sure (see worked answers for calculator instructions)",
        lookup: "See page 13-14 of the Intermediate Licence textbook",
        syllabus: "2c.1"
    },
    {
        source: "BBDL Intermediate Quiz W03 Q2",
        question: "If the Ammeter in the circuit shown in the diagram is reading 660mA, how much current will be flowing through each of the 3k3 Ohm resistors? <br><br><img src='images/w03-q2.png' alt='test'  >",
        options: [
            "0.33A",
            "0.66A",
            "1.32A",
            "330A"
        ],
        correct: 0,
        explanation: "First of all you should spot that the total 660mA will divide through the parallel resistors and because the resistors are of equal value(both 3k3), the current will divide equally = 660 / 2 = 330mA.Now, the answers are in Amps, so you need to convert 330mA into Amps = 0.33A, making ‘a’ the correct answer.This is not really covered in the Intermediate textbook, but it is in the syllabus",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "2c.1"
    },
    {
        source: "BBDL Intermediate Quiz W03 Q3",
        question: "The electromotive force (EMF) of a battery is greater than the potential difference (PD) between the terminals when it is under load.This is because:",
        options: [
            "The battery has its own internal resistance which reduces the PD under load",
            "Manufacturers try to convince you the battery is better than it actually is",
            "The battery is ‘flat’",
            "The battery terminals are corroded"
        ],
        correct: 0,
        explanation: "Look at the book",
        lookup: "See page 16 of the Intermediate Licence textbook",
        syllabus: "2c.3"
    },
    {
        source: "BBDL Intermediate Quiz W03 Q4",
        question: "Which of the following statements about different cell technologies is true?",
        options: [
            "They all produce the same current over the same timeframe",
            "They can produce different terminal voltages",
            "They all produce batteries of the same weight",
            "They can produce different AC waveforms"
        ],
        correct: 1,
        explanation: "Different cell chemistry can deliver open circuit voltages of less than 1.5 Volts up to 5 Volts so ‘b’ is likely. The current delivered is greatly affected by the load so ‘a’ is not correct. Battery weights vary enormously depending on construction materials and capacity so ‘c’ is out. Lastly on their own batteries only produce DC voltages and currents.",
        lookup: "See page 12 of the Intermediate Licence textbook",
        syllabus: "2j.1"
    },
    {
        source: "BBDL Intermediate Quiz W03 Q5",
        question: "Rechargeable batteries are often marked with a value quoted in Ampere-hours. What does this value mean?",
        options: [
            "An indication of the stored energy when fully charged ",
            "The time after which the battery should be recharged",
            "The time for which the battery will power the connected device",
            "The maximum charging current at which the battery can be safely charged"
        ],
        correct: 0,
        explanation: " Not too much to say here",
        lookup: "See page 16 of the Intermediate Licence textbook",
        syllabus: "2j.1"
    },
    {
        source: "BBDL Intermediate Quiz W03 Q6",
        question: "What is the main safety risk associated with charging a vehicle battery in the shack?",
        options: [
            "Interference noise capable of overloading the receiver",
            "High Voltages capable of melting cables",
            "Acid leakage capable of burning skin and clothing",
            "Production of hydrogen gas capable of causing an explosion"
        ],
        correct: 3,
        explanation: "Interference noise would not be a safety hazard so not ‘a’. The only high voltages present when charging a vehicle battery are associated with the mains supply. Fuses and good earthing should minimise this risk and it is high current that would melt cables, so not ‘b’. Acid leakage is an ever present hazard with vehicle batteries but the risk is not increased during charging, so not ‘c’. However, hydrogen gas is produced during the charging process. This is a very explosive gas which if not ventilated could cause an explosion, so ‘d’ is the one to go for here.",
        lookup: "See page 16 of the Intermediate Licence textbook",
        syllabus: "8a.8"
    },
    {
        source: "BBDL Intermediate Quiz W03 Q7",
        question: "A capacitor is defined as:",
        options: [
            "two metal plates separated by air",
            "two metal plates separated by paper",
            "two metal plates separated by ceramic",
            "two metal plates separated by an insulating material"
        ],
        correct: 3,
        explanation: "All are capacitors but only ‘d’ is a full definition of the term.",
        lookup: "See page 16-17 of the Intermediate Licence textbook",
        syllabus: "2d.1"
    },
    {
        source: "BBDL Intermediate Quiz W03 Q8",
        question: "Which capacitor, when accurately measured, is within tolerance if marked as 3.3nF ± 20%? ",
        options: [
            "4.4nF",
            "3.9nF",
            "2.6nF",
            "2.5nF"
        ],
        correct: 1,
        explanation: "Simple maths here. The capacitor can be 20% above or below the marked value and still be in tolerance.",
        lookup: "See page 19 of the Intermediate Licence textbook",
        syllabus: "2a.1"
    },
    {
        source: "BBDL Intermediate Quiz W03 Q9",
        question: "Two 100µF capacitors in series have a total value of:",
        options: [
            "50µF",
            "100µF",
            "200µF",
            "400µF"
        ],
        correct: 0,
        explanation: "Series capacitors are like parallel resistors, so use the 1/C formula from EX308 if you wish, but as they are the same value, merely halving that value will give you the correct answer, ‘a’.Connecting two capacitors in series can be seen as moving the end plates further apart, and one of the things that determines the value of a capacitor is the distance between the plates. It is not a syllabus point, but you may like to note that increasing that distance will reduce the value.",
        lookup: "See page 17-18 of the Intermediate Licence textbook",
        syllabus: "2d.2"
    },
    {
        source: "BBDL Intermediate Quiz W03 Q10",
        question: "You examine a circuit board and find two capacitors wired in parallel. One is marked 5p6 and the other 221. What is their combined value?",
        options: [
            "226.6 pF",
            "225.6 pF",
            "5.46 pF",
            "0.18 pF"
        ],
        correct: 1,
        explanation: "The marking 5p6 means 5.6 pF, the p for pico and its position is the decimal point. The marking 221 means 22 with one zero =220 and in the absence of any letters it is taken to be pF.So, we have 220 in parallel with 5.6 pF and if you check the formula in EX308, parallel capacitors simply add up their values, and 220 + 5.6 = 225.6,making ‘b’ the correct answer.",
        lookup: "See page 17-18 of the Intermediate Licence textbook",
        syllabus: "2d.2 & 9c.1"
    },
    {
        source: "BBDL Intermediate Quiz W03 Q11",
        question: "In high voltage circuits it is a good idea to place suitable resistors:",
        options: [
            " in parallel with large value capacitors",
            "in parallel with all capacitors",
            "in series with large value capacitors",
            " in series with all capacitors"
        ],
        correct: 0,
        explanation: "Capacitors in high voltage circuits can store hazardous voltages for a long time. If you connect a high value resistor in parallel with them, the stored energy will leak away slowly, rendering the capacitor safe. Answer ‘a’ looks good. Wiring the resistor in series will not leak the charge away, so that rules out ‘c’ and ‘d’ and not all capacitors can store the dangerous charges, so not ‘b’.",
        lookup: "See page 16-17 of the Intermediate Licence textbook",
        syllabus: "8a.1"
    },
    {
        source: "BBDL Intermediate Quiz W03 Q12",
        question: "With which of the following capacitors must correct polarity be observed?",
        options: [
            "Air Spaced",
            "Ceramic",
            "Electrolytic",
            "Polystyrene"
        ],
        correct: 2,
        explanation: "Most capacitors can be fitted into circuits either way round but the Electrolytic types are very sensitive to being used with correct polarity; they are usually marked with a negative ‘stripe’ next to the negative lead, and the positive lead is usually longer than the negative, providing two clues as to which way round they must be connected. If you get it wrong, they can, and do, explode! ",
        lookup: "See page 16-17 of the Intermediate Licence textbook",
        syllabus: "2d.3"
    },
]

export default W03quiz