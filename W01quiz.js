const W01quiz = [
    {
        source: "BBDL Intermediate Quiz W01 Q1",
        question: "Calling CQ on CW you receive the reply “QRM PSE QSY DE VK0VVV”. This is:",
        options: [
            "A low power Canadian station confirming that they are using the frequency and asking you to send slower",
            "An Australian station letting you know there is man-made interference on the frequency and suggesting you change frequency",
            "A Venezuelan station confirming reception of your call but asking you for a close down",
            "An Indian station experiencing interference from a natural source (e.g. static) and asking you to reduce your power"
        ],
        correct: 1,
        explanation: "The first thing to work out is the callsign; VK is the Australian prefix (K for Kangaroo?). That rules out ‘a’, ‘c’ and ‘d’. To be sure, QRM means ‘man - made interference’ and QSY means ‘change frequency’ confirming ‘b’ as the correct answer.",
        lookup: "See page 4 & 6 of the Intermediate Licence textbook",
        syllabus: "7a.3 & 7e.1"
    },
    {
        source: "BBDL Intermediate Quiz W01 Q2",
        question: "Normal operating under IARU band plans recommends use of LSB below?",
        options: [
            "5MHz",
            "10MHz",
            "18MHz",
            "24MHz"
        ],
        correct: 1,
        explanation: "A look up question – refer to the ‘Notes to the Band Plans’ in the bottom right￾hand corner of the Band Plans page in the Exam Reference Data Handbook EX308.",
        lookup: "See page 4 of the Intermediate Licence textbook",
        syllabus: "7b.1"
    },
    {
        source: "BBDL Intermediate Quiz W01 Q3",
        question: "The call sign I2RST would belong to a Station located in:",
        options: [
            "India",
            "Italy",
            "Northern Ireland",
            "Republic of Ireland"
        ],
        correct: 1,
        explanation: " I = Italy, India is VU, Northern Ireland is MI and the Republic is EI. Whilst VU is not in the Intermediate Licence textbook, the correct answer is; it is worth noting that you may see ‘unknown’ callsigns as distracters in exam questions.",
        lookup: "See page 6 of the Intermediate Licence textbook",
        syllabus: "7a.3"
    },
    {
        source: "BBDL Intermediate Quiz W01 Q4",
        question: "To enter an amateur radio contest, you will normally need to:",
        options: [
            "Operate from an unusual location",
            "Exchange specified information correctly",
            "Produce QSL cards confirming all contacts",
            "Be a member of the relevant national society"
        ],
        correct: 1,
        explanation: "Operating from a rare location may make you more attractive to others and increase your QSO numbers, but it is not a requirement to take part in a contest, so not ‘a’. All contests require some information to be exchanged, so ‘b’ looks good. QSL cards can take months, even years, to arrive, so not appropriate for contests, definitely not ‘c’. Some contests require you to be a member of the organising group, but that may be a local Club and the national society is not relevant, so not ‘d’.",
        lookup: "See page 6 of the Intermediate Licence textbook",
        syllabus: "7a.4"
    },
    {
        source: "BBDL Intermediate Quiz W01 Q5",
        question: "Which of the following types of transmission is MOST likely to use a computer connected to a standard analogue radio (i.e. not an SDR radio) via a suitable interface?",
        options: [
            "AM",
            "SSB",
            "FM",
            "a data mode"
        ],
        correct: 3,
        explanation: "With the increased use of SDR technology, just about any mode can be generated in computer software, but this question specifies using an analogue radio and a suitable interface. Morse Code(CW), data modes(e.g. FT8, RTTY, PSK31) and amateur TV are some of modes that can be generated using an external computer. So ‘d’ is the correct answer here.",
        lookup: "See page 5 of the Intermediate Licence textbook",
        syllabus: "7f.2"
    },
    {
        source: "BBDL Intermediate Quiz W01 Q6",
        question: "Most amateur satellites orbit the earth at a height of:",
        options: [
            "Above 250km",
            "Below 250km",
            "Between 100km and 400km",
            "Between 70km and 250km"
        ],
        correct: 0,
        explanation: "This is a straight forward memory question, pure and simple; no formula or look up table to help you, sorry.",
        lookup: "See page 4-5 of the Intermediate Licence textbook",
        syllabus: "7g.1"
    },
    {
        source: "BBDL Intermediate Quiz W01 Q7",
        question: "Most amateur satellites orbit the earth at a fairly high speed. In order to make contact with another station via a satellite, the minimum requirement is for it to be ‘visible’, or ‘above the horizon’: ",
        options: [
            "Just at the transmitting station location",
            "Just at the receiving station locations",
            "At both the transmitting and receiving location",
            "Or able to ‘see’ any favourable ionospheric propagation"
        ],
        correct: 2,
        explanation: "‘a’ and ‘b’ are wrong because if the satellite is only visible to one station the other will not be able to hear the transmissions. ‘c’ works because both stations can ‘see’ the satellite. ‘d’ is wrong the ionosphere plays no part in line-of-sight communications with satellites.",
        lookup: "See page 4-5 of the Intermediate Licence textbook",
        syllabus: "7g.3"
    },
    {
        source: "BBDL Intermediate Quiz W01 Q8",
        question: "If you have a piece of electrical equipment and the fuse has blown. There are no markings on the old fuse and you do not have the original owner’s handbook. How would you work out which replacement fuse to fit?",
        options: [
            "work out the required current using the operating voltage and the power rating marked on the equipment and select a fuse rated a little higher in value",
            "work out the required current using the operating voltage and the power rating marked on the equipment and select a fuse rated a little lower in value",
            "work out the required operating voltage using the current and the power rating marked on the equipment and select a fuse rated a little higher in value",
            "work out the required operating voltage using the current and the power rating marked on the equipment and select a fuse rated a little lower in value"
        ],
        correct: 0,
        explanation: "Fuses are rated in Amps, so you need to know the current. The formula P = V x I can be used to work out current(I = P ÷ V); you should recall that formula in your Foundation training. The formula is also in the exam reference data booklet EX308. So that rules out ‘c’ and ‘d’, which are looking to work out the operating voltage. Next consideration is whether the fuse should be rated a little higher, or a little lower, than the calculated value. It should be reasonably obvious that too low a value will cause the fuse to blow under normal operating conditions. Having it a bit higher, so it only blows under fault conditions, makes more sense.",
        lookup: "See page 10 of the Intermediate Licence textbook",
        syllabus: "8a.4"
    },
    {
        source: "BBDL Intermediate Quiz W01 Q9",
        question: "If you MUST work on live electrical equipment that uses a 3-core mains cable, it MUST be earthed because: ",
        options: [
            "It is a Licence Condition",
            "It is a requirement under the Electricity at Work Regulations 1999",
            "It will ensure that the station is fully protected against a lightning strike",
            "It will ensure that the equipment is provided with a low resistance path to earth under fault conditions"
        ],
        correct: 3,
        explanation: "‘a’, ‘b’ and ‘c’ are simply not true but ‘d’ is.",
        lookup: "See page 9, 46 of the Intermediate Licence textbook",
        syllabus: "8a.6"
    },
    {
        source: "BBDL Intermediate Quiz W01 Q10",
        question: "You plan to take advantage of your new Intermediate Licence and are going to build a linear amplifier to boost your radio to operate at 100W. You need to make a front panel from a small sheet of aluminium. Which of the following would NOT be a recommended safe practice?",
        options: [
            "Picking up all tools by their handles and keeping your hands away from the sharp ends",
            "Using a vice to hold the aluminium sheet steady whilst you saw, drill and file it to size",
            "Connecting the aluminium workpiece to the mains earth with a thick copper cable",
            "Preparing any hole locations by marking them with a centre punch"
        ],
        correct: 2,
        explanation: "‘a’, ‘b’ and ‘d’ are all good things to do to ensure your own safety, but earthing the workpiece to the mains is of no benefit and has the potential to put mains voltage on the aluminium, if there was a fault in the mains. It is worth noting that in questions with ‘not’ in the stem, it is worth testing all four answers for true / false in order to find the ‘odd one out’.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "8b.2 & 8b.3 & 8b.5"
    },
    {
        source: "BBDL Intermediate Quiz W01 Q11",
        question: "A bench-mounted pillar drill:",
        options: [
            "Is safer than a hand-held drill",
            "Is less accurate than a hand-held drill",
            "Is more powerful than a hand-held drill",
            "Uses a higher operating voltage than a hand-held drill"
        ],
        correct: 0,
        explanation: "A bench mounted drill, sometimes called a pillar drill, is safer than a hand-held drill because it is fixed and cannot accidentally make accidental contact with you or other objects. They also usually incorporate a vice to hold the workpiece keeping both of your hands away from the danger point. They tend to be more accurate, because they are fixed, making ‘b’ wrong. There are some light￾weight hobby drills and some high- power industrial drills of both hand - held and bench - mounted types,meaning ‘c’ is not always true. Similarly, you can get both types of drill in different operating voltages, so ‘d’ is not always true.",
        lookup: "See page 9 of the Intermediate Licence textbook",
        syllabus: "8b.6"
    },
    {
        source: "BBDL Intermediate Quiz W01 Q12",
        question: "Thinking about safety, which of the following is the most important difference between the Foundation and the Intermediate Licence?",
        options: [
            "The Intermediate Licence schedule includes many more microwave frequencies",
            "EMF exposures may be significantly greater with Intermediate Licence power levels",
            "There are fewer restrictions on the remote operation of beacons in the intermediate Licence",
            "Intermediate Licence holders have no specific restrictions on homebrewing transmitting equipment"
        ],
        correct: 1,
        explanation: "All four answers are factually correct, but only ‘b’ has a direct link to safety; exposure to electro- magnetic fields, which have the potential to heat up body tissue.",
        lookup: "See page 2-3, 11 of the Intermediate Licence textbook",
        syllabus: "8d.1"
    },
    {
        source: "BBDL Intermediate Quiz W01 Q13",
        question: "Which of the following would NOT provide protection of equipment against the build-up of a static charge?",
        options: [
            "Spark gaps",
            "Gas discharge arrestors",
            "A correctly rated fuse",
            "Bleed resistors"
        ],
        correct: 2,
        explanation: "A reminder that the question says NOT. ‘a’, ‘b’ and ‘d’ are all devices to protect against static charge and are specifically cited in the syllabus. A fuse is of little help in static / lightning protection, making ‘c’ the one to go for.",
        lookup: "See page 11 of the Intermediate Licence textbook",
        syllabus: "8e.1"
    },
    {
        source: "BBDL Intermediate Quiz W01 Q14",
        question: "Soldering can best be described as:",
        options: [
            "welding radio components together using heat",
            "joining radio components together using conductive adhesive",
            "welding metal wires and components together using a welding torch",
            "joining metal wires and components using solder and a hot soldering iron"
        ],
        correct: 3,
        explanation: "Only ‘d’ is a valid description of the process of soldering. Welding takes place at a much higher temperature and uses welding rods or wire rather than solder. Conductive adhesive may well exist but it is not used in soldering.",
        lookup: "See page 7 of the Intermediate Licence textbook",
        syllabus: "9e.1"
    },
    {
        source: "BBDL Intermediate Quiz W01 Q15",
        question: "The flux in solder is there to:",
        options: [
            "Help the solder to flow and to prevent a layer of oxide forming on the surfaces to be joined",
            "Help the solder to flow and to ensure a protective layer of oxide forms over the surfaces being joined",
            "Prevent the solder flowing away from the joint and to prevent a layer of oxide forming on the surfaces to be joined",
            "Prevent the solder flowing away from the joint and to ensure a protective layer of oxide forms over the surfaces being joined"
        ],
        correct: 0,
        explanation: "Only ‘a’ is a valid description of the role played by the flux contained in most solder used in amateur radio.",
        lookup: "See page 7 of the Intermediate Licence textbook",
        syllabus: "9e.2"
    },
    {
        source: "BBDL Intermediate Quiz W01 Q16",
        question: "Which of the following would be easier to solder?",
        options: [
            "A thin copper wire being connected to thick copper ground rod",
            "A thin stainless-steel wire being connected to a large brass nut",
            "A thin steel resistor lead being connected to a wide copper track on a printed circuit board",
            "Two thin sheets of aluminium being joined to form a project case"
        ],
        correct: 2,
        explanation: "Soldering to any thick metal is difficult because the heat is conducted away. Soldering thin wire is much easier. Copper and steel are easier than aluminium and stainless- steel. So, bringing those two key points together, ‘c’ looks to be the best option.",
        lookup: "See page 7 of the Intermediate Licence textbook",
        syllabus: "9e.3"
    },
]

export default W01quiz