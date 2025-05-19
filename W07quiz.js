const W07quiz = [
    {
        source: "BBDL Intermediate Quiz W07 Q1",
        question: "A diode will conduct:",
        options: [
            "Direct current regardless of polarity",
            "Alternating current with switching polarity",
            "Current in one direction only",
            "Up to its peak inverse voltage (PIV)"
        ],
        correct: 2,
        explanation: "‘Direct Current’ may seem like an option, but it will only work if the polarity is correct, so ‘a’ is not a 100% correct answer. With AC, a diode will only allow half the sine wave through, when the polarity is in the correct direction, making ‘b’ wrong. ‘c’ is 100% correct and requires no qualification, it is therefore ‘the’ correct answer to this question. ‘d’ is about how much reverse bias voltage a diode can take, and is not part of the Intermediate syllabus.",
        lookup: "See page 27-28 of the Intermediate Licence textbook",
        syllabus: "2i.1"
    },
    {
        source: "BBDL Intermediate Quiz W07 Q2",
        question: " One of the properties of a Variable Capacitance Diode is that:",
        options: [
            "As the forward bias is increased the capacitance increases",
            "As the reverse bias is increased the capacitance decreases",
            "As the forward bias decreases the capacitance decreases",
            "As the reverse bias is increased the capacitance increases"
        ],
        correct: 1,
        explanation: "To some extent, all diodes exhibit the property of change in capacitance across the junction as the reverse bias is increased, or decreased. This property is useful in allowing us to change the capacitance in a circuit by applying an external voltage to the device.  The variable capacitance diode is manufactured to make the most of this phenomenon. With higher reverse bias voltage, the depletion layer at the semiconductor boundary becomes wider and the capacitance decreases.",
        lookup: "See page 37 of the Intermediate Licence textbook",
        syllabus: "2i.2"
    },
    {
        source: "BBDL Intermediate Quiz W07 Q3",
        question: "The connections of a Bipolar Junction Transistor are:",
        options: [
            "exit, brace, concentrator",
            "emitter, brace, concentrator",
            "gate, drain, source",
            "emitter, base, collector"
        ],
        correct: 3,
        explanation: "The two sets we use at Intermediate level are emitter, base and collector (for the BJT) and source, gate and drain (for the FET).",
        lookup: "See page 30-31 of the Intermediate Licence textbook",
        syllabus: "2i.3"
    },
    {
        source: "BBDL Intermediate Quiz W07 Q4",
        question: "A small current in the base of a transistor amplifier will cause a larger current to flow through the collector because:",
        options: [
            "The forward resistance of the transistor is very low",
            "The transistor has gain",
            "The phase of the output is opposed to the input",
            "The base impedance is high"
        ],
        correct: 1,
        explanation: "A transistor is a three terminal device (emitter, base, collector) in which a small base current will control a larger collector current and this enables the transistor to be used as an amplifier. The ratio of the collector current to the base current(IC/ IB) is the current gain ß or hFE of the device.",
        lookup: "See page 30-31 of the Intermediate Licence textbook",
        syllabus: "2i.3"
    },
    {
        source: "BBDL Intermediate Quiz W07 Q5",
        question: "Setting the potential differences and currents in a transistor circuit is known as:",
        options: [
            "Limiting",
            "Biasing",
            "Deviating",
            "Conducting"
        ],
        correct: 1,
        explanation: " Not much else to say about this one!",
        lookup: "See page 31 of the Intermediate Licence textbook",
        syllabus: "2i.4"
    },
    {
        source: "BBDL Intermediate Quiz W07 Q6",
        question: "The circuit symbol shown is: <br><br><img src='images/w07-q6.png' alt='test'  >",
        options: [
            "A Zener diode",
            "A Bipolar Junction Transistor",
            "A Field Effect Transistor",
            "A Voltage Regulator"
        ],
        correct: 2,
        explanation: "A straightforward memory test or picture recognition. ‘a’ only has two connections, so not that. The BJT has three connections(collector, base & emitter, or cbe), so don’t chose answer ‘b’. Answer ‘c’ looks better, as the FET connections are source, gate and drain, or sgd. The Voltage Regulator also has three pins but they are in, ground and out, so ‘d’ is wrong.",
        lookup: "See page 11, 30 of the Intermediate Licence textbook",
        syllabus: "2i.3"
    },
    {
        source: "BBDL Intermediate Quiz W07 Q7",
        question: "Which of the following best describes an integrated circuit?",
        options: [
            "A device with both reactive and active components built on a copper substrate",
            "A circuit combining many capacitors and inductors built on a geranium substrate",
            "A device with many individual semiconductors built on a common substrate",
            "A circuit with only passive components on a common substrate"
        ],
        correct: 2,
        explanation: "We almost take Integrated Circuits for granted these days. They are complex devices that carry out many functions.They can contain passive components such as capacitors and resistors, together with active components such as transistors and diodes. However, the syllabus limits our consideration to ‘many semiconductors on a single substrate’. ‘a’ is wrong because the substrate is not made of copper. ‘b’ is wrong because the substrate is not made from a flower! ‘d’ is wrong because the IC’s covered by the syllabus all contain some active devices.",
        lookup: "See page 30-31 of the Intermediate Licence textbook",
        syllabus: "2i.6"
    },
    {
        source: "BBDL Intermediate Quiz W07 Q8",
        question: "The function of the rectifier in a power supply is:",
        options: [
            "To convert the AC mains Voltage to a lower AC Voltage",
            "To convert the AC into a ripple-free DC Voltage",
            "To convert an AC Voltage into DC pulses",
            "To convert a DC Voltage with ripple into a ripple-free AC Voltage"
        ],
        correct: 2,
        explanation: "A single rectifier diode only passes current in one direction. This property is employed either with a single device, two diodes or sometimes 4 diodes to convert AC current into DC current which is in the form of a series of DC ‘pulses’. ‘a’ is the job of the transformer, not the rectifier, so not that one. ‘b’ would require smoothing and regulating, so not correct. ‘d’ is plain wrong, none of the power supplies we look at change DC into ripple- free AC.",
        lookup: "See page 28-29 of the Intermediate Licence textbook",
        syllabus: "2j.2"
    },
    {
        source: "BBDL Intermediate Quiz W07 Q9",
        question: "The diagram shows: <br><br><img src='images/w07-q9.png' alt='test'  >",
        options: [
            "A half wave rectifier circuit",
            "A four wave rectifier circuit",
            "A full wave bridge rectifier circuit",
            "A half wave bridge circuit"
        ],
        correct: 2,
        explanation: "The four diode ‘diamond’ is the classic layout for a bridge rectifier, and the bridge rectifier is a full wave rectifier.",
        lookup: "See page 28-29 of the Intermediate Licence textbook",
        syllabus: "2j.2"
    },
    {
        source: "BBDL Intermediate Quiz W07 Q10",
        question: " Given a 50 Hz supply what would be the ripple frequency across the resistor R? <br><br><img src='images/w07-q10.png' alt='test'  >",
        options: [
            "25 Hz",
            "50 Hz",
            "100 Hz",
            "200 Hz"
        ],
        correct: 2,
        explanation: "The full wave rectification produces twice as many positive peaks as the input waveform so the frequency of the ripple is doubled.",
        lookup: "See page 28-29 of the Intermediate Licence textbook",
        syllabus: "2j.3"
    },
    {
        source: "BBDL Intermediate Quiz W07 Q11",
        question: "Thinking about a single diode 12 Volt power supply, which diagram best represents the Voltage waveform across the load if the reservoir capacitor is removed? <br><br><img src='images/w07-q11.png' alt='test'  >",
        options: [
            "a",
            "b",
            "c",
            "d"
        ],
        correct: 2,
        explanation: "In a typical power supply the diode produces rectified DC pulses ranging from zero volts to a peak and back again with half - wave gaps between pulses.",
        lookup: "See page 28-29 of the Intermediate Licence textbook",
        syllabus: "2j.3"
    },
    {
        source: "BBDL Intermediate Quiz W07 Q12",
        question: "Which is the correct order of functions in a regulated linear power supply?",
        options: [
            "Transformation, rectification, smoothing, regulation",
            "Rectification, smoothing, regulation, transformation",
            "Smoothing, transformation, regulation, rectification",
            "Regulation, rectification, transformation, smoothing"
        ],
        correct: 0,
        explanation: "The first function is to change the mains AC Voltage from 230V RMS to a lower voltage such as 20Volts RMS. Then we need to change the AC to DC. A rectifier undertakes this function. But we still have the ripple to contend with. Removing most of the ripple is the function of the smoothing or reservoir capacitor. To regulate the output voltage such that it does not drop under changing load we use some form of regulator(often in an integrated circuit).",
        lookup: "See page 28-29 of the Intermediate Licence textbook",
        syllabus: "2j.4"
    },
    {
        source: "BBDL Intermediate Quiz W07 Q13",
        question: "In a linear power supply, which component is key to regulating the output voltage?",
        options: [
            "The Pass Transistor",
            "The Zener Diode",
            "The decoupling capacitors",
            "The switching transistors"
        ],
        correct: 1,
        explanation: "The pass transistor, literally passes the current at whatever voltage is offered to it, so not ‘a’. Zener diodes are used widely to regulate voltages, and they are the main component involved in controlling the voltage in a discrete component regulator circuit, making ‘b’ a good choice, but always check the other options… The decoupling capacitors play no part in the actual regulation process, but are there to prevent any AC creeping through to the output, so not ‘c’. Switching transistors form part of a switch mode power supply, so not applicable to the linear supply, making ‘d’ wrong.",
        lookup: "See page 28-29 of the Intermediate Licence textbook",
        syllabus: "2j.4"
    },
    {
        source: "BBDL Intermediate Quiz W07 Q14",
        question: "Which of the following power supplies is MOST likely to give rise to unwanted electrical noise at RF frequencies?",
        options: [
            "a stand-alone power supply with a discrete component ‘pass transistor’ regulator",
            "a built-in power supply with an integrated circuit regulator",
            "a stand-alone switch mode power supply",
            " a 230V AC isolating power supply for use with an old valve radio"
        ],
        correct: 2,
        explanation: "The syllabus requires you to know the advantages and disadvantages of linear and switch mode power supplies. The key point here is that linear power supplies, are relatively quiet at RF, but switch mode power supplies can be quite noisy. ‘a’ and ‘b’ mention the different regulators found in linear supplies, so should be quiet and not correct answers. ‘d’ is less specific but there is no mention of it being a switch mode power supply, so the MOST likely correct answer is ‘c’, which is a switch mode power supply.",
        lookup: "See page 29-30 of the Intermediate Licence textbook",
        syllabus: "2j.4"
    },


]

export default W07quiz