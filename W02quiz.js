const W02quiz = [
    {
        source: "BBDL Intermediate Quiz W02 Q1",
        question: "If a resistor’s colour code is green, blue, red, silver. Which of the following measured values would be correct?",
        options: [
            "6220",
            "5100",
            "5025",
            "4720"
        ],
        correct: 1,
        explanation: "This is a four band resistor so the first three colours state the value and the fourth its tolerance. If you use the colour code in EX308 to work this out you should see it is 5600Ω with a 10% tolerance. 10% of 5600 is 560, so the actual value could be anywhere between 5600 + 560 = 6160, and 5600 – 560 = 5040. Only ‘b’ fits into that range, making it the one to go for.",
        lookup: "See page 14 of the Intermediate Licence textbook",
        syllabus: "2a.1"
    },
    {
        source: "BBDL Intermediate Quiz W02 Q2",
        question: "A resistor with colours: Yellow, Violet, Red, Silver) is:",
        options: [
            "472 Ω 5%",
            "472 Ω 10%",
            "4700 Ω 5%",
            "4700 Ω 10%"
        ],
        correct: 3,
        explanation: "Yellow = 4, Violet = 7 and Red = 2 zeros = 4700 ohms, ruling out ‘a’ and ‘b’. The silver band indicates 10% tolerance, so ‘d’ is the correct answer.",
        lookup: "See page 14 of the Intermediate Licence textbook",
        syllabus: "9c.1"
    },
    {
        source: "BBDL Intermediate Quiz W02 Q3",
        question: "A surface mount resistor is marked 4M7. Its value will be:",
        options: [
            "0.0047 ohms",
            "4.7 ohms",
            "4,700 ohms",
            "4,700,000 ohms"
        ],
        correct: 3,
        explanation: "4M7 is a numerical marking meaning 4.7 mega ohms and mega means a million; 4.7 million = 4, 700,000.",
        lookup: "See page 13 of the Intermediate Licence textbook",
        syllabus: "9c.1"
    },
    {
        source: "BBDL Intermediate Quiz W02 Q4",
        question: "Three 270 Ω resistors connected in series are equivalent to:",
        options: [
            "90 Ω",
            "145 Ω",
            "270 Ω",
            "810 Ω"
        ],
        correct: 3,
        explanation: "Any number of resistors connected in series add together, so in this case, 270 + 270 + 270 = 810 ohms, making ‘d’ the one to go for.",
        lookup: "See page 13 of the Intermediate Licence textbook",
        syllabus: "2c.1"
    },
    {
        source: "BBDL Intermediate Quiz W02 Q5",
        question: " In the circuit, what would the potential difference be across the resistor, and how much current would be flowing through it? <br><br><img src='images/w02-q5.png' alt='test'  >",
        options: [
            "2V and 200mA",
            "7V and 70mA",
            "7V and 700mA",
            "9V and 90mA"
        ],
        correct: 1,
        explanation: "First the potential difference. We know there is a total of 9V across the whole circuit and that 2V of that is across the LED. That means there must be 7V across the resistor. That rules out ‘a’ and ‘d’.As we know its value is 100 ohms, using the formula I = V / R, the current works out as 7/100 = 0.07A, or 70mA, making ‘b’ the one to go for. ",
        lookup: "See page 15-16 of the Intermediate Licence textbook",
        syllabus: "2c.1"
    },
    {
        source: "BBDL Intermediate Quiz W02 Q6",
        question: " If a potential divider made up of a 30 Ohm resistor and a 90 Ohms resistor has a potential of 12 Volts applied across it, what is the value of potential across the 30 ohm resistor?",
        options: [
            "1V",
            "3V",
            "6V",
            "12V"
        ],
        correct: 1,
        explanation: "Again, two ways of getting the answer, use the potential divider formula or work out the current through the two resistors then work out the pd across the 30Ω resistor. Both should give you ‘b’ as the correct answer.Sanity check; ‘d’ cannot be correct as some potential dividing is going on, ‘c’ cannot be correct as both resistors would need to be equal to result in half the supply V and ‘a’ would require the other resistor to be nearer to 10 times bigger than 30 ohms to get around a tenth of the PD. Not all questions offer such an ‘obvious answer’, but it is always worth doing the sanity check on your calculated answer! ",
        lookup: "See page 15 of the Intermediate Licence textbook",
        syllabus: "2c.2"
    },
    {
        source: "BBDL Intermediate Quiz W02 Q7",
        question: "What are the maximum and minimum output voltages available from the potentiometer shown in the picture?<br><br><img src='images/w02-q7.png' alt='test'  >",
        options: [
            "Maximum 12, Minimum 0",
            "Maximum 12, Minimum 5",
            "Maximum 7, Minimum 0",
            "Maximum 7, Minimum 5"
        ],
        correct: 3,
        explanation: "If there were just the potentiometer in the circuit, the max and min would be 12v and 0v, but we have two other resistors, so ‘a’ is wrong. A quick way to do this is to add up the resistance in the divider and see if there is a neat fit with the supply volts. In this case we have a total of 12k ohms and 12 volts, which means, each 1k ohm will have 1 volt across it. The minimum volts(at the bottom of the potentiometer) will be 5V (making b or d viable) but the 2k potentiometer and the bottom 5k ohm resistor combine to make 7k ohm, meaning only 7V will be available at the top of the potentiometer range. ’d’ is therefore the correct answer.",
        lookup: "See page 15-16 of the Intermediate Licence textbook",
        syllabus: "2c.2"
    },
    {
        source: "BBDL Intermediate Quiz W02 Q8",
        question: "When using a multi-meter to measure the potential difference across a battery you should set the meter to:",
        options: [
            "The next DC voltage range higher than the expected potential difference",
            "The next AC voltage range higher than the expected potential difference",
            "The next DC voltage range lower than the expected potential difference",
            "The next AC voltage range lower than the expected potential difference"
        ],
        correct: 0,
        explanation: "A battery produces DC, so ‘b’ and ‘d’ are ruled out. With all measurements it is always best to start with a range higher than the value you can expect because a fault could give you up to the maximum supply volts.",
        lookup: "See page 65 of the Intermediate Licence textbook",
        syllabus: "9a.1"
    },
    {
        source: "BBDL Intermediate Quiz W02 Q9",
        question: "Which of the following multi-meter ranges should be used to measure an unknown direct current?",
        options: [
            "250μA",
            "250mA",
            "500mA",
            "10A"
        ],
        correct: 3,
        explanation: "For unknown current you should always start with the highest range available. With volts you normally know what the supply is and can therefore work out the maximum possible; with current you have no idea if there is a fault that will draw a very high current!",
        lookup: "See page 66 of the Intermediate Licence textbook",
        syllabus: "9a.1"
    },
    {
        source: "BBDL Intermediate Quiz W02 Q10",
        question: "When measuring resistance with an analogue meter you should first:",
        options: [
            "Select the highest resistance range",
            "Select the lowest resistance range",
            "Establish the tolerance of the resistor",
            "Zero the ohmmeter on the range in use"
        ],
        correct: 3,
        explanation: "One of the key differences between the analogue and digital meter is the need to ‘calibrate’ the ohms scale. We do that by zeroing the scale with the probes touching.",
        lookup: "See page 66 of the Intermediate Licence textbook",
        syllabus: "9a.3"
    },
    {
        source: "BBDL Intermediate Quiz W02 Q11",
        question: "Which of the following is an advantage of using an analogue multimeter?",
        options: [
            "the moving needle is ideal for indicating a peak value when making adjustments",
            " polarity does not matter when measuring potential difference (voltage)",
            "there is no battery required when using it to measure resistance",
            "the scale is precise and easy to read"
        ],
        correct: 0,
        explanation: "Digital multi-meters are not so good at displaying readings that are constantly changing, whereas a needle swings up or down, making it easy to see when a peak value has been achieved, so ‘a’ is good.Polarity is VERY important when measuring volts on an analogue meter, as theneedle tries to swing backwards if you get it wrong, making ‘b’ wrong.A battery is always needed when measuring resistance because you need to pass some current through the resistor to obtain a measurement, making ‘c’ wrong. The scale on an analogue meter is not difficult to read but it does need some care, and the precision is not great, due to parallax errors and having to make judgements between the lines on the scale, making ‘d’ wrong.",
        lookup: "See page 65 of the Intermediate Licence textbook",
        syllabus: "9a.3"
    },
    {
        source: "BBDL Intermediate Quiz W02 Q12",
        question: "If you wish to measure the direct current flowing through into a circuit how you would connect your multi-meter ?",
        options: [
            "In parallel with the power supply (across the terminals)",
            "In series between the power supply and the circuit under test",
            "In parallel with each of the components in the circuit than add the results together",
            "In series with each of the components in the circuit than add the results together"
        ],
        correct: 1,
        explanation: "You want all of the current flowing into the circuit to flow through the meter. ‘a’ would short out the PSU, ‘c’ would also short out each component as you measured and ‘d’ would give you multiples of the same reading.",
        lookup: "See page 65 of the Intermediate Licence textbook",
        syllabus: "9a.2"
    },
    {
        source: "BBDL Intermediate Quiz W02 Q13",
        question: "Which of the following statements about multi-meters is true?",
        options: [
            "When measuring DC current the meter has a medium resistance",
            "When measuring DC volts the meter has a medium resistance",
            "When measuring DC current the meter has a high resistance",
            "When measuring DC volts the meter has a high resistance"
        ],
        correct: 3,
        explanation: "When looking at voltmeters and ammeters, they either have a high or low internal resistance, which rules out ‘a’ and ‘b’. How to decide which is the high resistance? If you remember that an ammeter goes in series with the circuit under test, you should also remember that it has to have a low resistance to prevent it affecting the circuit under test. The voltmeter, on the other hand, goes across the component under test and needs a high resistance to prevent it ‘robbing’ so much current that the reading will be inaccurate. So, ‘d’ it is.",
        lookup: "See page 65-66 of the Intermediate Licence textbook",
        syllabus: "9a.2"
    },
    {
        source: "BBDL Intermediate Quiz W02 Q14",
        question: " What value of resistor would have a potential difference of 12.25V across it when it is dissipating 3W of power?",
        options: [
            "0.5Ω",
            "4.0Ω",
            "50Ω",
            "450Ω"
        ],
        correct: 2,
        explanation: " You can do this in two ways, the longer, 2-step, method is to use the Foundation formula P=IV to work out the current, then use V=IR to work out R. The quicker way is to transpose P=V2/ R so that R=V2/ P then plug in the numbers, but that formula is not provided in EX308 and some find it hard to remember. Try both and you should find that ‘c’ is the correct answer no matter how you work it out.",
        lookup: "See page 12-13 of the Intermediate Licence textbook",
        syllabus: "9a.5"
    },
    {
        source: "BBDL Intermediate Quiz W02 Q15",
        question: "The shack electric kettle draws 10A from the mains when boiling water. How much power is it consuming when doing this work?",
        options: [
            "10 W",
            "50 W",
            "400 W",
            "2.3 kW"
        ],
        correct: 3,
        explanation: "Power formula is P = I x V. Mains voltage is 230, so 230 x 10 = 2300W, which can also be expressed as 2.3 kW; divide Watts by 1000 to convert to kilowatts.",
        lookup: "See page 12-13 of the Intermediate Licence textbook",
        syllabus: "9a.5"
    },
]

export default W02quiz