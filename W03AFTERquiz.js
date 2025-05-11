const W03AFTERquiz = [
    {
        source: "BBDL Intermediate Quiz W03 AFTER Q1",
        question: "If a 5% tolerance resistor is marked as 470 ohms, which of the following shows the widest range of actual values it might be:",
        options: [
            "465 to 475 ohms",
            "423 to 517 ohms",
            "457 to 483 ohms",
            "447 to 493 ohms"
        ],
        correct: 3,
        explanation: "Simply a matter of working out 5% of 470; 470 x 5 ÷ 100 = 23.5, then add 23.5 to 470 = 493.5, and take 23.5 from 470 = 446.5.Answers ‘a’, ‘c’ and ‘d’ are all between those two extremes, but ‘d’ is the widest range, which is what the question asked for.",
        lookup: "See page 14-15 of the Intermediate Licence textbook",
        syllabus: "2a.1"
    },
    {
        source: "BBDL Intermediate Quiz W03 AFTER Q2",
        question: "In the circuit diagram, what would the ammeter read if the single cell was replaced by a 12V battery? <br><br><img src='images/w03after-q2.png' alt='test'  >",
        options: [
            "4.5mA",
            "2.7mA",
            "1.5mA",
            "0.5mA"
        ],
        correct: 0,
        explanation: "The two 3k3 resistors in parallel have a combined resistance of 1.65k ohms. That in series with the 1k adds up to a total of 2.65k ohms. Total current flowing in the circuit equals V / R = 12 / 2650 = 0.0045A = 4.5mA.",
        lookup: "See page 13-14 of the Intermediate Licence textbook",
        syllabus: "2c.1"
    },
    {
        source: "BBDL Intermediate Quiz W03 AFTER Q3",
        question: "What are the maximum and minimum output voltages as the potentiometer is adjusted? <br><br><img src='images/w03after-q3.png' alt='test'  >",
        options: [
            "Maximum 15, Minimum 0",
            "Maximum 12, Minimum 1",
            "Maximum 12, Minimum 2",
            "Maximum 10, Minimum 2",
        ],
        correct: 2,
        explanation: " If there were just the potentiometer in the circuit, the max and min would be 15v and 0v, but we have two other resistors, so ‘a’ is wrong. A quick way to do this is to add up the resistance in the divider and see if there is a neat fit with the supply volts. In this case we have a total of 15k ohms and 15 volts, which means, each 1k ohm will have 1 volt across it.The minimum volts(at the top of the 2k ohm resistor) will be 2V(making c or d viable) but the 10k pot* and the 2k ohm resistor combine to make 12k ohm so only 12V will be available at the top of the pot* range, making ‘c’ the correct answer. If there wasn’t a neat fit between the volts and the resistance, you would have to do a couple of potential divider calculations with 3kΩ as R1 with 12kΩ(10k+ 2k at the top of the range) and 2kΩ(at the bottom of the range) as R2.",
        lookup: "See page 15-16 of the Intermediate Licence textbook",
        syllabus: "2c.2"
    },
    {
        source: "BBDL Intermediate Quiz W03 AFTER Q4",
        question: " If a 12v battery has an internal resistance of 6 ohms, what would the potential difference be across a 6 ohm load and how much current would be flowing through the load?",
        options: [
            "12 volts and 2 amps",
            "12 volts and 1 amp",
            "6 volts and 2 amps",
            "6 volts and 1 amp"
        ],
        correct: 3,
        explanation: "The first key point is to remember that the total resistance in the circuit will be the load plus the internal resistance, so here we have 6 + 6 = 12 ohms. Using Ohm’s Law we can work out the current flowing through the circuit, I = V ÷ R, so I = 12 ÷ 12 = 1A, ruling out ‘a’ and ‘c’.Next, we need to think about the voltage, remembering that there will be a voltage across the internal resistance as well as the load. As they are both the same value, both will have 6 volts across them, making ‘d’ the correct answer.",
        lookup: "See page 16 of the Intermediate Licence textbook",
        syllabus: "2c.3"
    },
    {
        source: "BBDL Intermediate Quiz W03 AFTER Q5",
        question: "The value of a capacitor depends on:",
        options: [
            "plate separation and plate area",
            "dielectric material, plate separation and plate area",
            "working voltage, dielectric material, plate separation and plate area",
            "polarity, working voltage, dielectric material, plate separation and plate area"
        ],
        correct: 1,
        explanation: "‘a’ is partly correct but omits the effect of the dielectric, so not fully correct. Working voltage and polarity can be important in using capacitors, but they do not have any impact on the capacitor’s value, so not ‘c’ or ‘d’. ‘b’ is therefore the only fully correct answer.",
        lookup: "See page 16-17 of the Intermediate Licence textbook",
        syllabus: "2d.1"
    },
    {
        source: "BBDL Intermediate Quiz W03 AFTER Q6",
        question: "Which of the following applies only to electrolytic capacitors?",
        options: [
            "They must be fitted observing correct polarity",
            "They must be used within their safe working voltage",
            "They change value depending how much voltage is across them",
            "They have a reactance equal to voltage applied across them divided by the current flowing through them"
        ],
        correct: 0,
        explanation: "‘c’ is not true for any capacitors, so not that one. ‘b’ and ‘d’ are both true statements about all capacitors, but only electrolytics can explode if you fit them the wrong way round, making ‘a’ the correct answer.",
        lookup: "See page 16-17 of the Intermediate Licence textbook",
        syllabus: "2d.3"
    },
    {
        source: "BBDL Intermediate Quiz W03 AFTER Q7",
        question: "‘Ampere-hours’ is a measure of:",
        options: [
            "The type of DC waveform that a battery can deliver",
            "The maximum current that a battery can deliver",
            "The energy storage capacity of a battery",
            "The electromotive force of a battery"
        ],
        correct: 2,
        explanation: "",
        lookup: "See page 16 of the Intermediate Licence textbook",
        syllabus: "2j.1"
    },
    {
        source: "BBDL Intermediate Quiz W03 AFTER Q8",
        question: "Why should you NOT assume that every cell has an EMF of 1.5V?",
        options: [
            "because any external load will cause the EMF to drop",
            "because all cells have a manufacturing tolerance of over 20%",
            "because some batteries have an EMF much greater than 1.5 volts",
            "because different cell technologies use different chemicals that give different values of EMF"
        ],
        correct: 3,
        explanation: "‘a’ is wrong because external loads cause the potential difference to be lower than the EMF, but the EMF is not affected by the external load. Whilst there will be some tolerance in the manufacture of cells, ‘b’ is just not true, if you test many brand new 1.5v cells you will find most are very close to 1.5V. ‘c’ is a true statement but the question is about a cell, not a battery, so it is not a correct answer here. ‘d’ is a true statement and is the correct answer here.",
        lookup: "See page 12 & 16 of the Intermediate Licence textbook",
        syllabus: "2j.1"
    },
    {
        source: "BBDL Intermediate Quiz W03 AFTER Q9",
        question: "Which of the following stations would be located in Canada:",
        options: [
            "VK3ROO",
            "VE3PDQ",
            "CT4RZ",
            "HC4RCF"
        ],
        correct: 1,
        explanation: "‘a’ is Australia. ‘c’ is Portugal and ‘d’ is Ecuador.",
        lookup: "See page 6 of the Intermediate Licence textbook",
        syllabus: "7a.3"
    },
    {
        source: "BBDL Intermediate Quiz W03 AFTER Q10",
        question: " Before entering an amateur radio contest you must:",
        options: [
            "ensure that you have a good stock of QSL cards to confirm each contact you make",
            "ensure that your QRZ.com page is up to date, showing the contest information",
            "check what information you need to exchange with each contact you make",
            "check that your logbook is up to date"
        ],
        correct: 2,
        explanation: "‘a’ is wrong because you do not need QSL cards in a contest. ‘b’ is wrong because there is no requirement to have a QRZ.com page, never mind keep it up to date. ‘c’ sounds good because you must exchange the correct information and different contests use different types of exchange. ‘d’ is wrong because you only need to submit a log of the contacts made during the contest, it is irrelevant if your log is not up to date before the contest. Contesting is on page 6 in the Intermediate Licence textbook but it is muddled up with information on Awards.",
        lookup: "BBDL Intermediate Week 1 - Weekly Instructions.pdf",
        syllabus: "7a.4"
    },
    {
        source: "BBDL Intermediate Quiz W03 AFTER Q11",
        question: "The Q code for man-made interference is:",
        options: [
            "QRN",
            "QSB",
            "QRT",
            "QRM"
        ],
        correct: 3,
        explanation: "‘M’ for ‘man-made’ is the best way to remember this.",
        lookup: "See page 4 of the Intermediate Licence textbook",
        syllabus: "7e.1"
    },
    {
        source: "BBDL Intermediate Quiz W03 AFTER Q12",
        question: "When connecting a digital interface between a computing device and your transceiver for transmitting and receiving data modes, you MUST ensure that:",
        options: [
            "Only “Firewire” protocols are applied to the interface",
            "Output levels of the soundcard used by the computing device are set correctly",
            "Any additional USB peripherals connected to the computing device must be disabled",
            "A Bluetooth 4.0 connection is used between the interface and the computing device"
        ],
        correct: 1,
        explanation: "Answer (a), Firewire (IEEE 1394), is not widely used in amateur radio, so not a ‘must’. It is important to set audio levels to the correct levels for clean transmissions, and good, error free, reception, so ‘b’ looks like a good answer.Other USB connected peripherals may remain connected, provided they do not impact the operation of the interface, so not answer(c); there is no need to disable them unless they genuinely interfere with Tx / Rx operation. But be aware that PC noises and sounds may also pass through to the transmitter, so need to be minimised, or ideally filtered.Answer ‘d’ is a bit like ‘a’, Bluetooth is sometimes used to connect radio equipment, but it is not a ‘must’ for connecting an interface between a transceiver and a computing device.",
        lookup: "See page 5-6 of the Intermediate Licence textbook",
        syllabus: "7f.2"
    },
    {
        source: "BBDL Intermediate Quiz W03 AFTER Q13",
        question: "Without specific permission, which of the following would you NOT be permitted to do?",
        options: [
            "Operate during a contest",
            "Operate a QRP beacon to test a new antenna you have constructed",
            "Operate from another country using the internationally agreed prefix for that country",
            "Operate with digital modes using a suitable computing device and an interface to your transceiver"
        ],
        correct: 2,
        explanation: "Contests, beacons and digital modes are all mentioned as things you can do in the Operating chapter of the textbook, and/ or the Bandplan. Operating outside the UK, the Channel Islands and the Isle of Man, is not an automatic right and you will need to seek permission in advance.",
        lookup: "See page 2 of the Intermediate Licence textbook",
        syllabus: "7h.1"
    },
    {
        source: "BBDL Intermediate Quiz W03 AFTER Q14",
        question: "In examining a mains power supply unit you note a high value resistor wired in parallel with a high value electrolytic capacitor. What is the purpose of that resistor?",
        options: [
            "To set the voltage in the power supply",
            "To limit the current available from the power supply",
            "To discharge the capacitor when the unit is switched off",
            "To ensure the capacitor is working within its safe working voltage"
        ],
        correct: 2,
        explanation: " For a resistor to set the voltage it would need to be part of a potential divider, and there is no mention of a second resistor here, so not ‘a’.To limit current, a resistor needs to be in series with the power supply, so not ‘b’. ‘c’ sounds feasible, because the high resistance will have negligible effect under normal operating but will leak away any stored charge once the unit is switched off. ‘d’ is a bit like ‘a’ in that you need a potential divider to set voltages and a single resistor cannot do that, so not ‘d’.",
        lookup: "See page 16-17 of the Intermediate Licence textbook",
        syllabus: "8a.1"
    },
    {
        source: "BBDL Intermediate Quiz W03 AFTER Q15",
        question: "Fitting a spark gap in your antenna feeder will:",
        options: [
            "Increase the received signal level",
            "Increase the SWR on the antenna system",
            "Provide full protection against a direct lightning strike",
            "Provide limited protection against equipment damage from static build up"
        ],
        correct: 3,
        explanation: ". ‘d’ is the only possible answer here. ",
        lookup: "See page 11 of the Intermediate Licence textbook",
        syllabus: "8e.1"
    },
    {
        source: "BBDL Intermediate Quiz W03 AFTER Q16",
        question: "The fuse in a UK Mains plug should always be:",
        options: [
            "A 3 Amp fuse",
            "A 5 Amp fuse",
            "A 13 Amp fuse",
            "A fuse correctly rated for proper protection"
        ],
        correct: 3,
        explanation: " Later in the course we work out how to decide which is appropriate, but you need a fuse that is rated just a little higher than the current needed by the piece of equipment it is protecting. For example, a power supply that draws a maximum of 2 amps would be best with a 3 amp fuse because it will fail well before a 13 amp fuse would, making it a safer bet.",
        lookup: "See page 10 of the Intermediate Licence textbook",
        syllabus: "8a.4"
    },
    {
        source: "BBDL Intermediate Quiz W03 AFTER Q17",
        question: ". A 12V car battery can be a very useful power supply for an amateur radio transceiver but they must be used with care because:",
        options: [
            "They are capable of delivering very high currents that can heat wires and start fires",
            "They are capable of delivering very high voltages that can destroy radio electronic circuits",
            "They are very heavy and can crush antenna feeders and patch leads causing short circuits",
            "They are fitted with internal fuses and if too much current is drawn from the battery the fuse will blow and the battery will need to be disposed of"
        ],
        correct: 0,
        explanation: " ‘b’ is tosh, a 12V battery cannot, on its own, deliver high voltages, so rule that one out. ‘c’ is true, in that they are heavy, but not so heavy to crush a feeder to the point of causing short circuits; that is quite extreme! ‘d’ is wrong, if they had internal fuses, we would not be overly worried about them delivering high currents.",
        lookup: "See page 8-9 of the Intermediate Licence textbook",
        syllabus: "8a.8"
    },
    {
        source: "BBDL Intermediate Quiz W03 AFTER Q18",
        question: "What is the main safety precaution when handling hand tools like screwdrivers, drills, files and saws?",
        options: [
            "Ensuring the mains supply is switched off",
            "Ensuring that you hold them carefully by the blades",
            "Ensuring that they are maintained in rust free condition",
            "Fingers should always be behind the blades of hand tools"
        ],
        correct: 3,
        explanation: "A common sense answer for this one – keep your fingers away from the danger!",
        lookup: "See page 8-9 of the Intermediate Licence textbook",
        syllabus: "8b.2"
    },
    {
        source: "BBDL Intermediate Quiz W03 AFTER Q19",
        question: "In order to prevent a drill bit slipping across a sheet of metal when drilling you should use:",
        options: [
            "A vice",
            "A chuck key",
            "A centre punch",
            "A hand drill, rather than an electric drill"
        ],
        correct: 2,
        explanation: "A vice will prevent the workpiece from spinning, but not the drill slipping, so not ‘a’. The chuck key secures the drill bit in the drill jaws, so not ‘b’. A centre punch provides a small dent inthe metal and does help keep the drill bit where you want it, so ‘c’ looks good and ‘d’ is not true – how the drill is powered has little to do with the bit slipping or not, so not ‘d’.",
        lookup: "See page 8 of the Intermediate Licence textbook",
        syllabus: "8b.5"
    },
    {
        source: "BBDL Intermediate Quiz W03 AFTER Q20",
        question: "If you run a full 100W of FM into a vertical antenna mounted on top of a vehicle, the safety separation distance is likely to be:",
        options: [
            "Less than 1m",
            "Several metres",
            "A mandatory minimum of 10m",
            "Tens of metres"
        ],
        correct: 1,
        explanation: "You may think it is unfair to ask for specific details of an EMF assessment outcome, but the syllabus specifically quotes these words. ‘a’ is wrong because there are few assessments that will give a result less than 2m. ‘b’ is what the syllabus says, so is a safe bet! ‘c’ is wrong because there is no mandatory 10m minimum. ‘d’ is wrong; you would need a very high gain antenna to require a separation distance of tens of metres.",
        lookup: "see BBDL EMF Topics document",
        syllabus: "8d.1"
    },
    {
        source: "BBDL Intermediate Quiz W03 AFTER Q21",
        question: "One advantage of analogue multimeters over digital multimeters is:",
        options: [
            "They are more accurate",
            "They are easier to read",
            "They don’t need batteries",
            "They make it easy to read a changing value"
        ],
        correct: 3,
        explanation: "The main reason for using an analogue meter these days is that they are great for seeing ‘peaks’ or ‘dips’ in potential difference, or current, when tuning a radio circuit",
        lookup: "See page 65-66 of the Intermediate Licence textbook",
        syllabus: "9a.3"
    },
    {
        source: "BBDL Intermediate Quiz W03 AFTER Q22",
        question: "In order to determine the power being used by a transmitter, we need to measure the voltage and the current, and use the Power formula from EX308. If you have a voltmeter and a separate ammeter they would be connected with:",
        options: [
            "the voltmeter in series with the power supply and the ammeter across the power supply terminals",
            "the ammeter in series with the power supply and the voltmeter across the power supply terminals",
            "the voltmeter and the ammeter connected in parallel but wired in series with the power supply ",
            " the voltmeter and the ammeter both in parallel across the power supply terminals"
        ],
        correct: 1,
        explanation: "A memory test, voltmeters are used across the unit under test, and ammeters are connected in series with the unit under test. We then multiply the volts and the amps to determine the power, in watts.",
        lookup: "See page 65-66 of the Intermediate Licence textbook",
        syllabus: "9a.5"
    },
    {
        source: "BBDL Intermediate Quiz W03 AFTER Q23",
        question: "‘Tinning’ can be described as:",
        options: [
            "Scraping the bare wire to make it shine",
            "Enclosing a tuned circuit with a tin shield",
            "Ringing in the ears caused by listening to the radio at high volume",
            "Coating a surface with solder before making the joint"
        ],
        correct: 3,
        explanation: "Not too much to say here.",
        lookup: "See page 7 of the Intermediate Licence textbook",
        syllabus: "9e.4"
    },
    {
        source: "BBDL Intermediate Quiz W03 AFTER Q24",
        question: " The solder wire used to construct amateur radio projects can be described as:",
        options: [
            "a metal alloy with a high melting point",
            "metallic glue with a high melting point",
            "a metal alloy with a relatively low melting point",
            "metallic glue with a relatively low melting point"
        ],
        correct: 2,
        explanation: " Soldering is more a means of joining metal parts where the solder bonds with the parts to form a strong mechanical and electrical joint.That is very different from gluing things together with some kind of adhesive.So, ‘b’ and ‘d’ should be ruled out. So, does solder have a high or low melting point? Whilst a soldering iron gets quite hot, it is a much lower temperature than is needed to melt copper, or steel.It is therefore seen to have a relatively low melting point",
        lookup: "See page 7 of the Intermediate Licence textbook",
        syllabus: "9e.2"
    },
]

export default W03AFTERquiz