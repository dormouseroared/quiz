const W04quiz = [
    {
        source: "BBDL Intermediate Quiz W04 Q1",
        question: "In an inductor, energy is stored:",
        options: [
            "As chemical energy",
            "As an electric charge",
            "In a magnetic field",
            "In a coiled spring"
        ],
        correct: 2,
        explanation: "Simple memory point, as the current passes through the coil a magnetic field is formed and energy is stored in that magnetic field.",
        lookup: "See page 18-19 of the Intermediate Licence textbook",
        syllabus: "2d.4"
    },
    {
        source: "BBDL Intermediate Quiz W04 Q2",
        question: "The basic unit of inductance is:",
        options: [
            "The Farad",
            "The Henry",
            "The Frank",
            "The Siemens"
        ],
        correct: 1,
        explanation: "Simple memory point, the Farad is the unit of capacitance, so not ‘a’. The Frank is not, as far as we know, an electrical units, so not ‘c’, and the Siemens is a unit, but not for inductance, so not ‘d’. The Henry, ‘b’, it is.",
        lookup: "See page 18 of the Intermediate Licence textbook",
        syllabus: "2d.4"
    },
    {
        source: "BBDL Intermediate Quiz W04 Q3",
        question: "In an inductor, inductance increases:",
        options: [
            "With increased number of turns and increased coil diameter",
            "With increased number of turns and decreased coil diameter",
            "With decreased number of turns and increased coil diameter",
            "With decreased number of turns and decreased coil diameter"
        ],
        correct: 0,
        explanation: "No formula to refer to here but more turns, more diameter and more turns per cm all increase inductance.The only option that fits those criteria is ‘a’",
        lookup: "See page 18 of the Intermediate Licence textbook",
        syllabus: "2d.4 & 2d.6"
    },
    {
        source: "BBDL Intermediate Quiz W04 Q4",
        question: "If a coil has 30 turns around a high permeability core and you find that the value of its inductance is too high for the job you want to use it for, how could you reduce its value?",
        options: [
            "Remove the core",
            "Add a few more turns",
            "Wind it again with a greater diameter",
            "Reducing the length of the 30 turn coil"
        ],
        correct: 0,
        explanation: "Removing the core from the inductor will definitely reduce its value, so ‘a’ looks good, but let’s look at the other options. Adding turns to a coil increases its value, so not ‘b’.Increasing the diameter of the 30 turns will increase the inductance, so not ‘c’. Likewise, reducing the length of a coil concentrates the magnetic field it produces and so increases the inductance, so not ‘d’. ‘a’ is the one to go for.",
        lookup: "See page 18-19 of the Intermediate Licence textbook",
        syllabus: "2d.4 & 2d.6"
    },
    {
        source: "BBDL Intermediate Quiz W04 Q5",
        question: "Two 100µH inductors in series have a total value of:",
        options: [
            "50µH",
            "100µH",
            "200µH",
            "400µH"
        ],
        correct: 2,
        explanation: "Inductors in series add up like resistors in series, so a trivial sum should give you ‘c’ as the correct answer.",
        lookup: "See page 18-19 of the Intermediate Licence textbook",
        syllabus: "2d.5"
    },
    {
        source: "BBDL Intermediate Quiz W04 Q6",
        question: "Radio frequency signals are most often shown diagrammatically as:",
        options: [
            "A sine wave",
            "A square wave",
            "A standing wave",
            "An oscillating wave"
        ],
        correct: 0,
        explanation: " You can get square wave RF signals but by far the most common depiction is the sine wave. The standing wave is very difficult to show diagrammatically and an oscillating wave could be any form of AC.",
        lookup: "See page 19-20 of the Intermediate Licence textbook",
        syllabus: "2e.2"
    },
    {
        source: "BBDL Intermediate Quiz W04 Q7",
        question: "If an AC signal has a period of 1μs, what is its frequency?",
        options: [
            "1Hz",
            "1kHz",
            "1MHz",
            "1GHz"
        ],
        correct: 2,
        explanation: "The formula for frequency says that f = 1 / t. In this example, t = 1μs but we need to convert that into seconds so we can apply it directly to the formula. To do that we move the decimal point six places to the left so 1μs = 0.000001s. Applying that to the formula, 1/0.000001 = 1000000 or 1 million cycles per second, which is 1MHz.",
        lookup: "See page 20 of the Intermediate Licence textbook",
        syllabus: "2e.2"
    },
    {
        source: "BBDL Intermediate Quiz W04 Q8",
        question: "If an AC signal has a frequency of 10MHz, how long would it take for 10 cycles to be completed?",
        options: [
            "1μs",
            "1ms",
            "1s",
            "1ks"
        ],
        correct: 0,
        explanation: "A little tricky this one but using Engineering Notation, and taking it step by step it is not too bad: (1) First step is to remember that 10MHz is keyed in as 10[x10x] 6; Mega is x106. (2) Next use a calculator to calculate the time for one cycle, t = 1 / f = 1[÷]10[x10x] 6[=] 1x10 - 7 (3) Now multiply by 10 to give the time for 10 cycles[Ans][x] 10[=] 1x10 - 6 = 1μs; micro is x10 - 6 (BEST TO SEE THE WORKED ANSWER TO GET THE POWERS ETC CORRECTLY FORMATTED)",
        lookup: "See page 20 of the Intermediate Licence textbook",
        syllabus: "2e.2"
    },
    {
        source: "BBDL Intermediate Quiz W04 Q9",
        question: "The frequency of a radio signal with a wavelength of 23cm is:",
        options: [
            "76kHz",
            "13MHz",
            "766MHz",
            "1.3GHz"
        ],
        correct: 3,
        explanation: "A centimetre wavelength is best converted to metres before attempting the frequency calculation. There are 100cm in every metre so 23cm is 0.23m. You should recall that frequency in MHz = 300 / λ in metres = 300 / 0.23 = 1300MHz. We can convert MHz to GHz by moving the decimal point 3 places to the left = 1.3GHz.",
        lookup: "See page 21 of the Intermediate Licence textbook",
        syllabus: "2e.7"
    },
    {
        source: "BBDL Intermediate Quiz W04 Q10",
        question: "We often refer to our amateur bands by their approximate wavelength, such as 18MHz being the 17m band.What is the actual frequency of a radio signal with a wavelength of 17m?",
        options: [
            "17.65MHz",
            "18.10MHz",
            "21.25MHz",
            "56.65MHz"
        ],
        correct: 0,
        explanation: "There is a formula for this in EX308, but because the question is in metres and MHz, the easy way to do this is to divide 300 by 17 = 17.65MHz. You may protest and say ‘but I know that the 17m band is on 18MHz’, so ‘b’ is the answer.Sorry to point out that the question asked for the actual frequency, not the colloquial name given to the band by radio amateurs; 17m is not the only band that is ‘not quite right’, so take care!",
        lookup: "See page 21 of the Intermediate Licence textbook",
        syllabus: "2e.7"
    },
    {
        source: "BBDL Intermediate Quiz W04 Q11",
        question: "The RMS value of an AC signal that has a peak voltage of 10V is:",
        options: [
            "5V",
            "7V",
            "14V",
            "20V"
        ],
        correct: 1,
        explanation: "For our purposes, multiplying a peak value by 0.7 will give the RMS value, so 10 x 0.7 = 7V.",
        lookup: "See page 20 of the Intermediate Licence textbook",
        syllabus: "2e.3"
    },
    {
        source: "BBDL Intermediate Quiz W04 Q12",
        question: "If an AC signal with a voltage of 5V RMS is applied across a 50 ohm resistor, the RMScurrent flowing through the resistor will be:",
        options: [
            "25A",
            "10A",
            "100mA",
            "25mA"
        ],
        correct: 2,
        explanation: "Straightforward Ohm’s Law V = I x R so I = V / R. 5 / 50 = 0.1 A and moving the decimal point three places to the right gives us 100mA.",
        lookup: "See page 20 of the Intermediate Licence textbook",
        syllabus: "2e.3"
    },
    {
        source: "BBDL Intermediate Quiz W04 Q13",
        question: ".If a 50 ohm resistor has an AC signal with a voltage of 112V peak-to-peak applied across it, how much power will be dissipated in the resistor?",
        options: [
            "251W",
            "63W",
            "31W",
            "2.2W"
        ],
        correct: 2,
        explanation: "We need to go through a few steps to get to the answer. (1) First the peak - to - peak needs to be halved to get the peak value and 112 / 2 = 56. (2) we need to turn the peak value into a VRMS value and 56 x 0.707 = 39.59. (3) Now we have the VRMS we can work out the current through the resistor using I = V / R, and 39.59 ÷ 50 = 0.79A. (4) Finally, we multiply the VRMS by the current because P = V x I = 39.59 x 0.79 = 31.35W making ‘c’ the one to choose. Once you have the VRMS, you could do a short cut by using V2/ R, but that formula is not provided in the exam, and you get the same answer using Ohm’s Law and the Power formula; it’s your choice.",
        lookup: "See page 13, 20 of the Intermediate Licence textbook",
        syllabus: "2e.3"
    },
    {
        source: "BBDL Intermediate Quiz W04 Q14",
        question: "Which of the following best describes the waveform in the diagram? <br><br><img src='images/w04-q13.png' alt='test'  >",
        options: [
            "A modulated wave",
            "A distorted wave",
            "A square wave",
            "A sine wave"
        ],
        correct: 2,
        explanation: "A bit like the old catchphrase from the TV programme of the same name; ‘say what you see’! You should recall the AM and FM modulated waveforms from you Foundation training, and they did not look like the diagram, so not ‘a’. The waveform is quite regular and repeats evenly, so it does not look distorted, making ‘b’wrong. ‘c’ looks like a good answer, and ‘d’ is definitely wrong as a sine wave is very round, and not at all square.",
        lookup: "See page 21 of the Intermediate Licence textbook",
        syllabus: "2e.2"
    },
]

export default W04quiz