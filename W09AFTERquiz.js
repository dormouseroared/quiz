const W09AFTERquiz = [
    {
        source: "BBDL Intermediate Quiz W09 AFTER Q1",
        question: " If you purchase a 27nF capacitor and the supplier tells you the component has a 5% tolerance, which of the following values would be acceptable when you measure it?",
        options: [
            "29000pF",
            "0.030µF",
            "2700pF",
            "28nF"
        ],
        correct: 3,
        explanation: "There are two things being tested here; your ability to work out what +/-5% of 27nF is, and your ability to flip between the various sub - units of the Farad. So, 27nF + 5 % = 28.35nF = 0.02835µF or 28350pF. ‘a’ and ‘b’ are higher than that so they are out of the running. ‘d’ looks good, but let’s check ‘c’, 27nF – 5 % = 25.65nF = 25650pF and ‘c’ is much less than that, so not a possible answer. ‘d’ is the only one in tolerance, so that is the answer.",
        lookup: "See page 19 of the Intermediate Licence textbook",
        syllabus: "2a.1"
    },
    {
        source: "BBDL Intermediate Quiz W09 AFTER Q2",
        question: "A radio receiver draws 2A from a 12V power supply. However, when the radio is turned off the supply voltage increases to 13V. What is the source resistance?",
        options: [
            "6.5Ω",
            "1.0Ω",
            "2.0Ω",
            "0.5Ω"
        ],
        correct: 3,
        explanation: "Remember V drop = I x R source, therefore a quick manipulation of the formula gives R source = V drop divided by I. So, R source =1 V divided by 2 A = 0.5Ω.",
        lookup: "See page 16 of the Intermediate Licence textbook",
        syllabus: "2c.3"
    },
    {
        source: "BBDL Intermediate Quiz W09 AFTER Q3",
        question: "A 50pF capacitor is connected in series with a 100pF capacitor. What will the combined value be?",
        options: [
            "150pF",
            "75pF",
            "33pF",
            "25pF"
        ],
        correct: 2,
        explanation: "You can use the formula in EX308 to work it out, like [5][0][x - 1][+][1][0][0][x - 1][=][Ans][x - 1][=] which should give you 33.33333, or 33pF in round numbers. However, you need not touch your calculator if you remember a couple of rules of thumb….first one says that the combined value of capacitors in series is always less than the lowest one, so ‘a’ and ‘b’ are immediately ruled out. Second one is that if you connect two of the same value the combined value will be half, which is the lowest value it can be; anything higher will therefore give you something more than a half, ruling out ‘d’.The rules of thumb set the expected value somewhere between 25 and 50pF, and only ‘c’ fits that bill. [THE EDITOR: The smallest possible combined value (for two series capacitors) happens when they are equal. If they are unequal, the total capacitance will always be greater than half of the smaller capacitor.]",
        lookup: "See page 17-18 of the Intermediate Licence textbook",
        tagged: true,
        syllabus: "2d.2"
    },
    {
        source: "BBDL Intermediate Quiz W09 AFTER Q4",
        question: "Which of the following BEST describes what the value of an inductor depends on?",
        options: [
            "Its length",
            "Its diameter",
            "Its length and diameter",
            "Its length, diameter and the number of turns"
        ],
        correct: 3,
        explanation: "All three ‘a’ to ‘c’ have an effect so ‘d’ is the most comprehensively correct answer.",
        lookup: "See page 22-23 of the Intermediate Licence textbook",
        syllabus: "2d.4"
    },
    {
        source: "BBDL Intermediate Quiz W09 AFTER Q5",
        question: " If an AC signal has a Root Mean Square value of 22V what is its peak-to￾peak value?",
        options: [
            "22V",
            "30.8V",
            "44V",
            "61.6V"
        ],
        correct: 3,
        explanation: "Multiplying by 1.4 converts rms to peak = 30.8 and peak multiplied by two gives peak- to - peak = 61.6V",
        lookup: "See page 20 of the Intermediate Licence textbook",
        syllabus: "2e.3"
    },
    {
        source: "BBDL Intermediate Quiz W09 AFTER Q6",
        question: " In these graphs of reactance:<br><br><img src='images/w09after-q6.png' alt='test'  >",
        options: [
            "The left graph shows capacitive, and the right inductive",
            "The left graph shows inductive, and the right capacitive",
            "The left graph shows resistive, and the right capacitive",
            "They both show capacitive, but at different frequencies"
        ],
        correct: 1,
        explanation: " You either remember the respective shapes of the graphs or you can work it out as follows: as XL is a simple multiplication, the value will increase in direct proportion to the increase in frequency(no fractions involved; double the frequency, double the reactance), however, XC is inversely proportional to the frequency(values on bottom of the fraction; double the frequency and you halve X, and in theory you could keep doubling / halving and never get to zero!). If you really need convincing try calculating XC and XL for a capacitor and inductor of your choice(any value will do) at, say, 1 and 10MHz and you should find one of the reactance values increases with frequency and the other decreases.",
        lookup: "See page 23 of the Intermediate Licence textbook",
        syllabus: "2e.4 & 2e.5"
    },
    {
        source: "BBDL Intermediate Quiz W09 AFTER Q7",
        question: "The frequency of a radio signal with a wavelength of 3cm is:",
        options: [
            "10kHz",
            "10MHz",
            "1GHz",
            "10GHz"
        ],
        correct: 3,
        explanation: "A centimetre wavelength is best converted to metres before attempting the frequency calculation. There are 100cm in every metre so 3cm is 0.03m. You should recall that frequency in MHz = 300 / λ in metres = 300 / 0.03 = 10000MHz. We can convert MHz to GHz by moving the decimal point 3 places to the left = 10GHz.",
        lookup: "See page 20-21 of the Intermediate Licence textbook",
        syllabus: "2e.7"
    },
    {
        source: "BBDL Intermediate Quiz W09 AFTER Q8",
        question: "Sampling at a rate above the Nyquist rate will:",
        options: [
            "produce aliases in the digital representation",
            "increase the accuracy of the digital representation",
            "reduce the number of bits used by the digital representation",
            "require less computing power to process the digital representation"
        ],
        correct: 1,
        explanation: "Sampling at a rate below the Nyquist rate will produce aliases, so not ‘a’.The Nyquist rate is the minimum for good sampling, so sampling at a higher rate will result in a more accurate digital representation, so ‘b’ looks good. ‘c’ is wrong because the number of bits is not dependent on the sampling rate, only the resolution of the ADC. ‘d’ is definitely wrong because more sampling, means more data so more computing power required to process it. ‘b’ it is.",
        lookup: "See page 43 of the Intermediate Licence textbook",
        syllabus: "2f.1"
    },
    {
        source: "BBDL Intermediate Quiz W09 AFTER Q9",
        question: " A transformer:",
        options: [
            "Can be used to step-up, or step-down, an AC voltage",
            "Should not be used when batteries are available",
            "Is just as effective with AC as it is with DC",
            "Cannot be used with AC"
        ],
        correct: 0,
        explanation: "‘b’ is a matter of choice; rigs do not know what they are being powered by, battery power has some advantages in terms of not picking up mains- borne interference, but mains is more reliable for long term use. ‘c’ and ‘d’ are just wrong.",
        lookup: "See page 24 of the Intermediate Licence textbook",
        syllabus: "2g.1"
    },
    {
        source: "BBDL Intermediate Quiz W09 AFTER Q10",
        question: "Which of the following is the BEST description of the term ‘Q’?",
        options: [
            "The bandwidth of a tuned circuit",
            "The bandwidth of a tuned circuit divided by the resonant frequency",
            "The goodness of the components in a tuned circuit",
            "The selectivity of a tuned circuit"
        ],
        correct: 3,
        explanation: "Bandwidth is only one part of Q, so not ‘a’. The formula for Q in EX308 shows ‘b’ to be the wrong way up. Q is a feature of the tuned circuit, not its individual components so ‘c’ is not what we are looking for. ‘d’ is exactly what Q is describing, how narrow and steep sided is the tuned circuit’s response curve, so ‘d’ it is.",
        lookup: "See page 39 of the Intermediate Licence textbook",
        syllabus: "2h.4"
    },
    {
        source: "BBDL Intermediate Quiz W09 AFTER Q11",
        question: " If a battery is connected in a simple circuit containing a diode such that the battery positive terminal is connected to the diode cathode:",
        options: [
            "The diode is reverse biased and current will flow",
            "The diode is forward biased and no current will flow",
            "The diode is forward biased and current will flow",
            "The diode is reverse biased and no current will flow"
        ],
        correct: 3,
        explanation: "If the cathode is connected to +ve potential difference it is reverse biased. In that state no current can flow. So ‘d’ is the correct answer.",
        lookup: "See page 27-28 of the Intermediate Licence textbook",
        syllabus: "2i.1"
    },
    {
        source: "BBDL Intermediate Quiz W09 AFTER Q12",
        question: "Setting the potential differences and currents in a transistor circuit is known as:",
        options: [
            "Limiting",
            "Biasing",
            "Deviating",
            "Conducting"
        ],
        correct: 1,
        explanation: "Not much else to say about this one!",
        lookup: "See page 30-31 of the Intermediate Licence textbook",
        syllabus: "2i.4"
    },
    {
        source: "BBDL Intermediate Quiz W09 AFTER Q13",
        question: "Rechargeable batteries are often marked with a value quoted in Ampere-hours. What does this value mean?",
        options: [
            "An indication of the stored energy when fully charged",
            "The time after which the battery should be recharged",
            "The time for which the battery will power the connected device",
            "The maximum charging current at which the battery can be safely charged"
        ],
        correct: 0,
        explanation: "There is a good clue in the Units, Ampere Hours. A multiplication of the current flow and the time for which that current will flow. So, a 10Ah battery will supply 10A for 1 hour or 2A for 5 hrs. Note that in a battery, this is the measure of each cell capacity in series. Five 10Ah cells in series will create a battery with 10Ah capacity.",
        lookup: "See page 16 of the Intermediate Licence textbook",
        syllabus: "2j.1"
    },
    {
        source: "BBDL Intermediate Quiz W09 AFTER Q14",
        question: "Which of the follow statements is TRUE when comparing a Switch Mode Power Supply Unit (SMPSU) with a linear power supply unit?",
        options: [
            "The SMPSU is heavier and generates more RF noise",
            "The SMPSU is lighter and generates less RF noise",
            "The SMPSU is lighter and more efficient",
            "The SMPSU is heavier and less efficient"
        ],
        correct: 2,
        explanation: "the only real downside of an SMPSU is that they produce more RF noise, so ‘a’ is half correct and ‘b’ is half- wrong, so we can rule out ‘b’. ‘a’ and ‘d’ suggest the SMPSU is heavier, which is wrong, so they should be rejected. That only leaves ‘c’ and they are indeed lighter and more efficient than their linear counterparts.",
        lookup: "See page 30 of the Intermediate Licence textbook",
        syllabus: "2j.4"
    },
    {
        source: "BBDL Intermediate Quiz W09 AFTER Q15",
        question: " Narrow Band Frequency Modulation (NBFM) is defined as:",
        options: [
            "Where the ratio of the peak deviation and the maximum modulating frequency is greater than 1",
            "Where the ratio of the peak deviation and the maximum modulating frequency is less than 1",
            "Where the bandwidth of the modulated signal is less than 25kHz",
            "Where the bandwidth of the modulated signal is less than 1kHz"
        ],
        correct: 1,
        explanation: "The modulation index (h) is calculated by dividing the peak deviation by the maximum audio frequency and for NBFM, the modulation index must be less than 1.",
        lookup: "See page 37 of the Intermediate Licence textbook",
        syllabus: "3a.2"
    },
    {
        source: "BBDL Intermediate Quiz W09 AFTER Q16",
        question: " In a Single Side Band transmitter, the SSB filter will:",
        options: [
            "suppress the carrier to at least -30dB",
            "ensure the signal bandwidth is limited to 12.5kHz",
            "only allow one sideband to pass to the RF power amplifier",
            "remove any harmonics from the RF power amplifier output"
        ],
        correct: 2,
        explanation: " It is the job of the balanced mixer to suppress the carrier so not ‘a’.A 12.5 kHz bandwidth sounds like an FM channel so not ‘b’. It is the job of the Low Pass filter to remove harmonics of the transmitted signal so not ‘d’.The SSB filter is a very narrow filter and is tailored to pass a band of frequencies which are only one sideband wide, typically 2.7kHz or 3kHz wide.",
        lookup: "See page 36-37 of the Intermediate Licence textbook",
        syllabus: "3e.2"
    },
    {
        source: "BBDL Intermediate Quiz W09 AFTER Q17",
        question: "Chirp can normally be cured by:",
        options: [
            "Including a key click filter in the power amplifier circuit",
            "Providing good thermal shielding around all frequency sensitive components",
            "Ensuring that the power supply to all oscillators is decoupled by high value capacitors",
            "Having a stable voltage supply with more than enough current capability to deal with surges in demand"
        ],
        correct: 3,
        explanation: "Chirp is related to rapid changes in oscillator frequency. ‘a’ is a cure for key clicks but not chirp. ‘b’ would prevent drift due to temperature changes, but not chirp. ‘c’ would ensure there is no unwanted RF on the supply and prevent FM–type instability but not chirp. ‘d’ looks like a good candidate as a poorly regulated DC supply, or one with inadequate current capacity, can cause chirp as the voltage drops on key down. So ‘d’ is the one to go for.",
        lookup: "See page 36 of the Intermediate Licence textbook",
        syllabus: "3g.5"
    },
    {
        source: "BBDL Intermediate Quiz W09 AFTER Q18",
        question: "Which of the following bands should NOT be used for contests:",
        options: [
            "1.8MHz",
            "24MHz",
            "70MHz",
            "144MHz"
        ],
        correct: 1,
        explanation: "The ‘WARC’ bands (so called because they were agreed at a World Amateur Radio Conference) are designated as contest- free by IARU.They are 10, 18 & 24MHz. 5MHz is also a contest - free band, but it is not relevant to this question. It is a simple memory thing; regular listening on the bands at the weekends should remind you where to go if you want to avoidcontests, or which bands not to use, if you want to enter a contest.",
        lookup: "See page 4 of the Intermediate Licence textbook",
        syllabus: "7b.1"
    },
    {
        source: "BBDL Intermediate Quiz W09 AFTER Q19",
        question: "Amateur satellites have limited power available. It is therefore important to use:",
        options: [
            "the most efficient mode available",
            "the same mode as the satellite’s beacon signal",
            "the minimum power available from your transmitting equipment when switched to satellite mode",
            "a power level that ensures that your down-link signal is no stronger than the satellite’s beacon signal"
        ],
        correct: 3,
        explanation: "The key point here is to limit your power so as not to drain the satellite’s battery and/ or cause the satellite to overload and close down. ‘a’ is wrong because some efficient modes can still use high power. ‘b’ is wrong because many satellites are effectively multi - mode repeaters and there is no requirement to limit your transmissions to the beacon mode. ‘c’ is wrong because the minimum power may not be sufficient to make the contact. ‘d’ is correct because it balances your transmitter power with the beacon’s signal,making sure you can make the contact without using too much power.",
        lookup: "See page 4-5 of the Intermediate Licence textbook",
        syllabus: "7g.4"
    },
    {
        source: "BBDL Intermediate Quiz W09 AFTER Q20",
        question: "When testing live equipment it is good practice to:",
        options: [
            "Keep one hand in a pocket",
            "Have both hands on the equipment",
            "Switch off any RCD in the power lead",
            "Use non-insulated probes and screwdrivers"
        ],
        correct: 0,
        explanation: "‘a’ is the only safety precaution listed here.",
        lookup: "See page 9-10 of the Intermediate Licence textbook",
        syllabus: "8a.6"
    },
    {
        source: "BBDL Intermediate Quiz W09 AFTER Q21",
        question: "It is bad practice to leave the chuck key in a powered drill because it could:",
        options: [
            "Prevent accurate drilling",
            "Fly out and injure someone",
            "Cause imbalance to the drill",
            "Lead to spurious oscillations"
        ],
        correct: 1,
        explanation: "Others may be effects but they are not listed as bad practice under the safety syllabus items.",
        lookup: "See page 8 of the Intermediate Licence textbook",
        syllabus: "8b.4"
    },
    {
        source: "BBDL Intermediate Quiz W09 AFTER Q22",
        question: "After you get your Intermediate callsign, you need to know your EMF compliance distance when operating mobile because:",
        options: [
            "the Intermediate Licence allows more power than the Foundation Licence",
            "the compliance distances for Intermediate maximum power allocations are greater than for the Foundation Licence",
            "the Intermediate Licence requires you to know the compliance distance for all of the bands in the Schedule",
            "pedestrians might be inside the EMF compliance distance"
        ],
        correct: 3,
        explanation: " It is true that the Licence allows more power, but the assessment is based on what you do, not what you are allowed to do; there is nothing in the question to suggest you are using maximum legal power, so not‘a’.Similarly, ‘b’ is a true statement but the question does not say you are using maximum legal power, so ‘b’ is not correct. ‘c’ is wrong because the assessment should be based on what you actually do, not what you are allowed to do; there is no point assessing for bands you do not use. ‘d’ is correct because you are more likely to get close to pedestrians when out mobile than when you are operating at home.So, you need to know how close they can get before you have to stop transmitting. Not covered in the RSGB textbook or updatebooklet. See BBDL Week 1 Tutorial and EMF for Intermediate briefing document.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "8d.1"
    },
    {
        source: "BBDL Intermediate Quiz W09 AFTER Q23",
        question: "When using a multimeter to measure the potential difference across a battery you should set the meter to:",
        options: [
            "The next DC voltage range higher than the expected potential difference",
            "The next AC voltage range higher than the expected potential difference",
            "The next DC voltage range lower than the expected potential difference",
            "The next AC voltage range lower than the expected potential difference"
        ],
        correct: 0,
        explanation: "A battery produces DC, so ‘b’ and ‘d’ are ruled out. With all measurements it is always best to start with a range higher than the value you can expect because the meter could be damaged by connecting it to a voltage very much greater than the Full-Scale voltage",
        lookup: "See page 65-66 of the Intermediate Licence textbook",
        syllabus: "9a.1"
    },
    {
        source: "BBDL Intermediate Quiz W09 AFTER Q24",
        question: "After you have passed the Intermediate exam, you may decide to buy an RF Amplifier to boost your Foundation HF transceiver output to the maximum legal power for your new Licence. How much gain will the amplifier need?",
        options: [
            "5dB",
            "6dB",
            "7dB",
            "9dB"
        ],
        correct: 1,
        explanation: "The question boils down to working out the gain, in decibels, for an amplifier that has an input of 25W, the Foundation maximum for HF, to 100W, the Intermediate licence maximum. Using the 3dB = double rule of thumb you should have worked out that + 3dB = 50W, then another = 3dB makes a total of + 6dB = 100W = answer ‘b’.",
        lookup: "See page 56-57 of the Intermediate Licence textbook",
        syllabus: "9b.1"
    },
    {
        source: "BBDL Intermediate Quiz W09 AFTER Q25",
        question: "Before soldering two wires together, it is good practice to coat both conductors with solder to aid heat transfer.This process is known as:",
        options: [
            "Cleansing",
            "Oxidising",
            "Silvering",
            "Tinning"
        ],
        correct: 3,
        explanation: "A simple definition. Nothing much else to say. ",
        lookup: "See page 7 of the Intermediate Licence textbook",
        syllabus: "9e.4"
    },
]

export default W09AFTERquiz