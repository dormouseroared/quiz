const W05quiz = [
    {
        source: "BBDL Intermediate Quiz W05 Q1",
        question: "A transformer:",
        options: [
            "Can be used to step-up or step-down an AC voltage",
            "Should not be used when batteries are available",
            "Is just as effective with AC as with DC ",
            "Cannot be used with AC"
        ],
        correct: 0,
        explanation: "‘b’ is a matter of choice; rigs do not know what they are being powered by, battery power has some advantages in terms of not picking up mains-borne interference, but mains is more reliable for long term use. ‘c’ and ‘d’ are just wrong.",
        lookup: "See page 24 of the Intermediate Licence textbook",
        syllabus: "2g.1"
    },
    {
        source: "BBDL Intermediate Quiz W05 Q2",
        question: "In a transformer, energy will be transferred from the primary to the secondary as long as:",
        options: [
            "the AC voltage developed across the secondary is more, or less, than the AC voltage applied to the primary",
            "the Direct Currents flowing in the primary and secondary are different",
            "the Alternating Current flowing in the primary causes the magnetic fields in the secondary to change",
            "the DC voltage across in the primary causes the magnetic fields in the secondary to change"
        ],
        correct: 2,
        explanation: "Transformers will not work with DC, so ‘b’ and ‘d’ are instantly wrong. ‘a’ is wrong because energy transfer can take place with the primary and secondary voltages the same; it is known as an isolating transformer and has the same number of turns on both windings. The changing magnetic field around both the primary and the secondary windings are what enable energy to be transferred from the AC flowing in the primary into a current in the secondary.",
        lookup: "See page 24 of the Intermediate Licence textbook",
        syllabus: "2g.1"
    },
    {
        source: "BBDL Intermediate Quiz W05 Q3",
        question: "A capacitor is able to allow alternating current to pass by:",
        options: [
            "Having a low resistance",
            "Having a low impedance",
            "Repeatedly charging and discharging in a single direction",
            "Repeatedly charging and discharging in alternate directions"
        ],
        correct: 3,
        explanation: "It is because an alternating current is constantly changing polarity(direction) that the capacitor is able to charge and discharge, allowing alternating current to flow in the circuit.",
        lookup: "See page 22 of the Intermediate Licence textbook",
        syllabus: "2e.1"
    },
    {
        source: "BBDL Intermediate Quiz W05 Q4",
        question: "Which of the following statements about alternating current is true?",
        options: [
            "Voltage and Current are never in phase",
            "Voltage and Current are always in phase",
            "Voltage and Current can be out of phase and the difference is measured in Ohms",
            "Voltage and Current can be out of phase and the difference is measured in degrees"
        ],
        correct: 3,
        explanation: "If AC is applied to a pure resistor, the voltage and current will be in phase, making ‘a’ wrong. If the same AC is applied to a pure capacitor, or a pure inductor, the Voltage and current will be out of phase, so, ‘b’ is wrong. If you remember that phase difference is measured in degrees, you should see why ‘c’ is wrong and ‘d’ is correct.",
        lookup: "See page 21-23 of the Intermediate Licence textbook",
        syllabus: "2e.2"
    },
    {
        source: "BBDL Intermediate Quiz W05 Q5",
        question: "The opposition to alternating current flow in a circuit containing either an inductor or a capacitor is known as: ",
        options: [
            "Resistance",
            "Reactance",
            "Impedance",
            "Admittance"
        ],
        correct: 1,
        explanation: "Reactance is defined as the opposition to current flow where there is a pure capacitance or a pure inductance.It is worth noting that the formulas for Reactance, XC and XL, are in EX308, but the syllabus does not require you to calculate Reactance until the Full Licence level.Knowing that the formulas are provided should not cause you any panic, in the unlikely event of a Reactance calculation question cropping up in the exam.",
        lookup: "See page 23 of the Intermediate Licence textbook",
        syllabus: "2e.3"
    },
    {
        source: "BBDL Intermediate Quiz W05 Q6",
        question: "If you were to pass an alternating current through a resistor with zero reactance,measure the potential difference across the resistor and the current flowing through the resistor:",
        options: [
            "the voltage and current would have equal and opposite values",
            "the voltage and current would be equal values of volts and amps",
            "the voltage and current would be out of phase",
            "the voltage and current would be in phase"
        ],
        correct: 3,
        explanation: "There is no reactance in a pure resistance so as the voltage rises more current flows and vice versa(remember Ohm’s law?).As they change at the same time, we say they are in phase.",
        lookup: "See page 21-22 of the Intermediate Licence textbook",
        syllabus: "2e.3"
    },
    {
        source: "BBDL Intermediate Quiz W05 Q7",
        question: "A 12V peak alternating current signal will not dissipate the same power in a resistor as 12V direct current applied to the same resistor because:",
        options: [
            "The power dissipated in a resistive circuit varies over the cycle",
            "The voltage and current would be out of phase",
            "The reactance of the resistor varies over the cycle",
            "The voltage and current would be in phase"
        ],
        correct: 0,
        explanation: " With an AC signal the voltage and current vary from zero to a peak, back to zero and then to the same negative value. As the AC signal is only at 12V for an instant twice each cycle, for the majority of the time the voltage will be less than 12V, so the power over a cycle will be less than it would be if a constant 12V DC were applied. This is why we must use the RMS value for Ohm’s law and power AC calculations.",
        lookup: "See page 19-20 of the Intermediate Licence textbook",
        syllabus: "2e.3"
    },
    {
        source: "BBDL Intermediate Quiz W05 Q8",
        question: "The diagram shows the AC Voltage and Current waveforms for an inductor. What is the phase difference between the two waveforms?<br><br><img src='images/w05-q8.png' alt='test'  >",
        options: [
            "zero Ohms",
            "45 degrees",
            "90 degrees",
            "180 Ohms"
        ],
        correct: 2,
        explanation: "First thing to note is that phase difference is measured in degrees, so ‘a’ and ‘d’ can be ruled out straight away.With a pure inductor, or capacitor, the phase difference is always 90 degrees.You can check that by noting that a complete cycle has 360 degrees, and in the diagram, the difference is a quarter of a cycle; a quarterof 360 degrees is 90 degrees.",
        lookup: "See page 22-23 of the Intermediate Licence textbook",
        syllabus: "2e.3"
    },
    {
        source: "BBDL Intermediate Quiz W05 Q9",
        question: "The ratio of the RMS potential difference and the RMS current in a capacitor is known as:",
        options: [
            "Reactance",
            "Resistance",
            "Inductance",
            "capacitance"
        ],
        correct: 0,
        explanation: "Reactance is the opposition to current flow in a capacitor, similar to resistance in a resistor, but taking account of the phase shift caused by the capacitor charging/ discharging.It is measured in Ohms and can be calculated using Ohm’s law with XC in place of R; V = I x XC so, XC = V / I.",
        lookup: "See page 23-24 of the Intermediate Licence textbook",
        syllabus: "2e.4"
    },
    {
        source: "BBDL Intermediate Quiz W05 Q10",
        question: " The reactance of an inductor:",
        options: [
            "Depends on the voltage of the alternating current flowing through it; the reactance increases as the voltage increases",
            "Depends on the amplitude of the alternating current flowing through it; the reactance increases as the amplitude increases",
            "Depends on the frequency of the alternating current flowing through it; the reactance increases as the frequency increases",
            "Depends on the phase of the alternating current flowing through it; the reactance increases as the phase difference increases"
        ],
        correct: 2,
        explanation: "You may recall that reactance is often shown on a graph. Inductive reactance has a graph that is a straight line which rises from left to right. The vertical scale is the reactance and the horizontal scale is frequency, making ‘c’ the only viable answer here.",
        lookup: "See page 23-24 of the Intermediate Licence textbook",
        syllabus: "2e.5"
    },
    {
        source: "BBDL Intermediate Quiz W05 Q11",
        question: " Impedance is BEST described as opposition to energy storage or transfer in a circuit containing:",
        options: [
            "Only a resistor",
            "Only a capacitor",
            "Only an inductor",
            "A resistor and either a capacitor or an inductor"
        ],
        correct: 3,
        explanation: "‘a’ would be resistance and both ‘b’ and ‘c’ would be reactance.",
        lookup: "See page 24 of the Intermediate Licence textbook",
        syllabus: "2e.6"
    },
    {
        source: "BBDL Intermediate Quiz W05 Q12",
        question: " Which of the following are measured in Ohms?",
        options: [
            "Capacitance and inductance",
            "Capacitance and reactance",
            "Impedance and reactance",
            "Impedance and inductance"
        ],
        correct: 2,
        explanation: "Resistance, reactance and impedance are all measured in Ohms. Capacitance is measured in Farad and inductance in Henry, making ‘a’, ‘b’ and ‘d’ all incorrect.",
        lookup: "See page 23-24 of the Intermediate Licence textbook",
        syllabus: "2e.4 & 2e.5 & 2e.6"
    },

]

export default W05quiz