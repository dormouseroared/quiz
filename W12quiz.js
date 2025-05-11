const quizData = [
    {
        source: "BBDL Intermediate Quiz W12 Q1",
        question: "Thinking about a radio frequency signal flowing in a wire that is longer than a wavelength, which of these statements is TRUE?",
        options: [
            "there is no electron movement unless there is a capacitor at the end of the wire",
            "the signal will only reverse its polarity to travel in the opposite direction once the electrons have all reached the end of the wire",
            "current flows with the same polarity throughout the wire for one full cycle and then flows with the opposite polarity for the next full cycle",
            "current flows with the same polarity in alternate half wavelengths along the wire and flows, at the same time, with the opposite polarity in the other half wavelengths"
        ],
        correct: 3,
        explanation: "In a short wire, it is unlikely that wavelength will be a factor, but in a very long wire, more than one wavelength long, the AC will flow in both directions at the same time; some of the wire will be going positive, and other parts will be going negative. The pattern repeats every full wavelength, so opposite polarity occurs every half wavelength.",
        lookup: "See page 54 of the Intermediate Licence textbook",
        syllabus: "2e.8"
    },
    {
        source: "BBDL Intermediate Quiz W12 Q2",
        question: "Thirty metres of twin wire feeder connects a 24.990 MHz transmitter to its antenna. At a certain instant in time, an RF probe shows the voltage on the line to be at its positive peak. A similar probe, on the same feeder but 12m closer to the antenna will, at the exact same time, show:",
        options: [
            "a positive peak of the same magnitude",
            "a negative peak of the same magnitude",
            "about half the peak voltage",
            "zero volts"
        ],
        correct: 0,
        explanation: "Back to this idea of AC on a long wire. First thing to do is to calculate the wavelength of a signal on 24.990MHz; 300/24.990 = 12.00m. So, the question is asking what you would find one full wavelength closer to the antenna. The AC sinewave repeats every cycle and a cycle is one wavelength long, so the second reading would be identical to the first.",
        lookup: "See page 54 of the Intermediate Licence textbook",
        syllabus: "2e.8"
    },
    {
        source: "BBDL Intermediate Quiz W12 Q3",
        question: " Which of the following statements about Balanced Feeder is true when it is well away from external objects?",
        options: [
            "For any given length the losses are greater than the same length of coaxial feeder",
            "A balun is always required to be fitted between balanced feeder and the antenna",
            "The RF currents in each conductor are equal and opposite",
            "It always has a characteristic impedance of 300 ohms"
        ],
        correct: 2,
        explanation: "‘a’ is wrong because balanced feeders have lower losses than coaxial cables. ‘b’ is not true because not all antennas are unbalanced. ‘c’ looks good and is the reason balanced feeder does not radiate. ‘d’ is wrong because the characteristic impedance is determined by the diameter and spacing of the conductors and can be anything from 75 to 600 ohms.",
        lookup: "See page 55 of the Intermediate Licence textbook",
        syllabus: "4a.1"
    },
    {
        source: "BBDL Intermediate Quiz W12 Q4",
        question: "For a waveguide to be used it must have:",
        options: [
            "A well-regulated DC supply",
            "Equal and opposite currents flowing in its conductors",
            "A cross-section dimension of more than half a wavelength of the frequency in use",
            "An insulated covering"
        ],
        correct: 2,
        explanation: "Waveguides can be thought of as tunnels down which the electromagnetic wave passes. For this to happen, the widest dimension must be at least half a wavelength at the frequency in use. A wave guide does not require a power supply, so not ‘a’.Unlike cables the analogy of equal and opposite currents is not relevant, so not ‘b’. Lastly most waveguides do not have an insulated covering, unless for weather protection, so not ‘d’",
        lookup: "See page 55 of the Intermediate Licence textbook",
        syllabus: "4a.1"
    },
    {
        source: "BBDL Intermediate Quiz W12 Q5",
        question: "Your transmitter supplies 50 Watts to an antenna system with an antenna gain of 8 dB and feeder with a total loss of 2 dB. The ERP is: ",
        options: [
            "5 W",
            "50 W",
            "100 W",
            "200 W"
        ],
        correct: 3,
        explanation: "You should recall, from Foundation level, that the ERP is the gain of the antenna multiplied by the pawer applied to it. Now we are doing that with dB. You may start by screaming ‘foul’ as 2dB and 8dB are not ‘rule of thumb’ values in the Intermediate syllabus. True, but you can work it out, there is just a little bit of joining up to be done; if you have 8dB of gain in the antenna, but the power is reduced by 2dB before it gets there, due to feeder loss, the total gain in the system is 6dB(+8 - 2 = 6dB). 6dB is known to be two lots of 3dB and each 3dB equates to a doubling of power.So, 50 x 2 = 100 then 100 x 2 = 200W.",
        lookup: "See page 56-57 of the Intermediate Licence textbook",
        syllabus: "4a.2"
    },
    {
        source: "BBDL Intermediate Quiz W12 Q6",
        question: "You want the power at the antenna end of a length of feeder to be 50 Watts. Based on the manufacturer’s data sheet, you know the length of feeder has a loss of 4dB. The transmitter’s output power will therefore need to be about:",
        options: [
            "20 W",
            "50 W",
            "100 W",
            "125 W"
        ],
        correct: 3,
        explanation: "This is a case of working backwards; if you need 50W at the antenna end of the feeder and it has loss, you MUST need to put more power into the feeder, so ‘a’ and ‘b’ should be immediately ruled out. If the feeder had 3dB loss, you would need double the power in, so 100W, but the loss is 4dB, so ‘c’ is not correct and you must need more than 100W from your transmitter to get 50W out, making ‘d’ the only viable answer.",
        lookup: "See page 56 of the Intermediate Licence textbook",
        syllabus: "4a.2"
    },
    {
        source: "BBDL Intermediate Quiz W12 Q7",
        question: "The characteristic impedance of a feeder is determined by:",
        options: [
            "The length of the feeder.",
            "The diameter and spacing of the conductors.",
            "The potential difference applied and the current flowing in the conductors.",
            "The frequency of the applied signal and the dimensions of the antenna."
        ],
        correct: 1,
        explanation: "That is the definition, not much else to say.",
        lookup: "See page 54-55 of the Intermediate Licence textbook",
        syllabus: "4a.3"
    },
    {
        source: "BBDL Intermediate Quiz W12 Q8",
        question: "Balanced feeder has a characteristic impedance of:",
        options: [
            "50 Ω",
            "75 Ω",
            "300 Ω",
            "A value dependant on its dimensions"
        ],
        correct: 3,
        explanation: "There are many types of balanced feeder but in every type the characteristic impedance is determined by the diameter and spacing of the conductors.",
        lookup: "See page 55 of the Intermediate Licence textbook",
        syllabus: "4a.3"
    },
    {
        source: "BBDL Intermediate Quiz W12 Q9",
        question: "Which one of the following statements is correct?",
        options: [
            "Coax feeders never radiate.",
            "A balun should prevent radiation from coax feeder.",
            "Radio waves have a greater velocity in feeder than in air.",
            "All feeders must be used in multiples of half a wavelength at the frequency of operation."
        ],
        correct: 1,
        explanation: "If coax never radiated, we would not need baluns, so ‘a’ is wrong. ‘b’ kind of backs that up and looks like a potential correct answer. ‘c’ is wrong, RF goes slower in solids, and ‘d’ is also wrong as all kind of feeder lengths are used.",
        lookup: "See page 51-52 of the Intermediate Licence textbook",
        syllabus: "4b.1"
    },
    {
        source: "BBDL Intermediate Quiz W12 Q10",
        question: "The diagram shows: <br><br><img src='images/choke-balun.png'>",
        options: [
            "a choke balun",
            "a band pass balun",
            "a quarter wave stub",
            "part of a dipole trap"
        ],
        correct: 0,
        explanation: "This is a type of choke balun; the ferrite rings add inductance to prevent current from the antenna flowing back down the outside of the coax. The Intermediate Licence textbook suggests you have to have several loops of coax going through a ferrite ring but the same effect can be had by having several ferrite rings around a single length of coax. If you didn’t know that, maybe you could work through the options and eliminate the wrong answers; ‘b’ is not a type of balun, so wrong. The picture does not show any quarter wave dimensions, so not ‘c’.A dipole trap is a parallel tuned circuit, so not ‘d’, leaving ‘a’ as the only viable answer.",
        lookup: "See page 57 of the Intermediate Licence textbook",
        syllabus: "4b.1"
    },
    {
        source: "BBDL Intermediate Quiz W12 Q11",
        question: " If an antenna is quoted as having a radiated power that is four times that of an isotropic radiator, which of the following is the most accurate gain figure?",
        options: [
            "+4dB",
            "+4dBi",
            "+6dBd",
            "+6dBi"
        ],
        correct: 3,
        explanation: "First thing to spot is that a gain of 4 times = +6dB, narrowing down the answers to ‘c’ and ‘d’.dBd references a dipole and dBi references an isotropic source, making ‘d’ the correct answer",
        lookup: "See page 58 of the Intermediate Licence textbook",
        syllabus: "4c.4"
    },
    {
        source: "BBDL Intermediate Quiz W12 Q12",
        question: " What is the angle of radiation if an antenna is sending all of its radiation vertically, towards the sky directly above the station?",
        options: [
            "0 degrees",
            "45 degrees",
            "90 degrees",
            "180 degrees"
        ],
        correct: 2,
        explanation: "",
        lookup: "See page 59 of the Intermediate Licence textbook",
        syllabus: "4c.5"
    },
    {
        source: "BBDL Intermediate Quiz W12 Q13",
        question: "The feedpoint impedance of an antenna is related to:",
        options: [
            "The potential difference applied to and the current flowing in the antenna",
            "The ratio of the ERP compared to an isotropic source",
            "The SWR measured at the antenna feedpoint",
            "The characteristic impedance of the feeder"
        ],
        correct: 0,
        explanation: "‘b’ is the correct answer",
        lookup: "See page 51 of the Intermediate Licence textbook",
        syllabus: "4c.6"
    },
    {
        source: "BBDL Intermediate Quiz W12 Q14",
        question: "A centre fed half-wave dipole in free space has a feedpoint impedance of: ",
        options: [
            "0 ohms (short circuit)",
            "73 ohms",
            "100 ohms",
            "Infinity (open circuit)"
        ],
        correct: 1,
        explanation: "",
        lookup: "See page 51 of the Intermediate Licence textbook",
        syllabus: "4c.6"
    },
    {
        source: "BBDL Intermediate Quiz W12 Q15",
        question: "Despite making no changes to your system you have noticed that the SWR of your fixed 2m antenna has been steadily improving over a period of several weeks. Why might this be ?",
        options: [
            "Rain water is getting into your feeder increasing losses in forward and reflected power.",
            "The aging effect of coaxial cable reduces losses and improves SWR.",
            "The transmitter AGC is automatically adjusting the matching.",
            "An antenna needs time to settle into its surroundings."
        ],
        correct: 0,
        explanation: "This one is a case of applying the syllabus to a scenario. Thinking about ‘a’ if the rain water is increasing loss in the feeder it will have an impact on forward power, so less arrives at the antenna, therefore less will be reflected and any reflected power will also suffer loss on the way back down the feeder. So, the SWR meter sees less reflected power and shows a better SWR; ‘a’ looks reasonable. ‘b’ says the losses reduce, so more of the power will reach the antenna, more will be reflected and more of the reflected power will arrive back at the SWR meter, which would give a higher reading, which makes this one wrong. ‘c’ is wrong because AGC is a receiver feature and has nothing to do with antenna system matching. ‘d’ is just plain nonsense(sorry if you picked that one!).",
        lookup: "See page 52-53 of the Intermediate Licence textbook",
        syllabus: "4e.1"
    },
    {
        source: "BBDL Intermediate Quiz W12 Q16",
        question: "An Antenna Matching Unit (AMU) fitted at the transmitter end of a coaxial feeder is used to:",
        options: [
            "tune the antenna.",
            "adjust the impedance of the antenna.",
            "remove the Standing Wave on the feeder",
            "match the impedance of the antenna system to the transmitter output."
        ],
        correct: 3,
        explanation: "In general, an AMU does NOT tune the antenna, so not ‘a’. The AMU also does NOT change the impedance of the antenna, so not ‘b’.Even when the AMU provides a 1: 1 SWR at the transmitter there will still be a standing wave between the AMU and the antenna, so not ‘c’.The function of the AMU is to match the impedance of the antenna system to the output impedance of the transmitter(usually 50 ohms).",
        lookup: "See page 53 of the Intermediate Licence textbook",
        syllabus: "4f.1"
    }, {
        source: "BBDL Intermediate Quiz W12 Q17",
        question: "What piece of radio apparatus would enable you to use a dipole designed for 50MHz to be used on 28MHz without damaging the transmitter?",
        options: [
            "A choke balun",
            "A 1:1 transformer balun",
            "An internal AMU/ATU",
            "An external SWR meter"
        ],
        correct: 2,
        explanation: " If an antenna is used on a frequency other than the frequency it was designed for, it will not provide a good match and there will be a high SWR. To correct the mismatch you would use an Antenna Matching Unit, or AMU. Neither a choke or 1: 1 balun will transform the impedance so would not work in this case, which rules out‘a’ and ‘b’. The SWR meter would tell us if there was, or was not, a good match but it would do nothing to correct any mismatch, so ‘d’ is not the one to go for. ‘c’ really is the only viable option here.",
        lookup: "See page 53 of the Intermediate Licence textbook",
        syllabus: "4f.1"
    }, {
        source: "BBDL Intermediate Quiz W12 Q18",
        question: " For a coaxial cable to work properly and not be affected by objects outside the cable, it must:",
        options: [
            "Have correctly fitted plugs with good connections on both screen and inner conductors",
            "Have the correct characteristic impedance for the AMU and antenna in use",
            "Be buried in soft earth or sand for at least 67% of the feeder length",
            "Connect to a Balun at the antenna end"
        ],
        correct: 0,
        explanation: "If the coaxial cable is not properly terminated with the correct plugs, correctly connected, the cable will not function correctly and it is likely that there will be current flowing on the outside of the screen. This will mean that it can radiate and the signals in the coax can be affected by any external objects. ‘b’ is nonsense; the AMU is able to deal with a wide range of impedances presented by different antennas. ‘c’ is not true because not every coaxial cable will go across the ground – up to a chimney mounted antenna for example. ‘d’ is not true as a balun is not always required, for example between coax and an unbalanced antenna.",
        lookup: "See page 54 of the Intermediate Licence textbook",
        syllabus: "4h.1"
    }, {
        source: "BBDL Intermediate Quiz W12 Q19",
        question: "Below are four aspects of a radio wave and its radiation. Which answer best describes the elements that are NOT at 90 degrees to each other? <br><p>1. electric field</p><p>2. magnetic field</p><p>3. polarisation</p><p>4. the antenna element</p>",
        options: [
            "1 and 2",
            "2 and 3",
            "1, 2 and 3",
            "1, 3 and 4"
        ],
        correct: 3,
        explanation: "The antenna element is always in the same plane as the polarisation: a vertical antenna generates vertically polarised radio propagation. So aspects 3 and 4 are never at 90 degrees to each other, and the only answer that includes them is ‘d’, but what about the electric field, aspect 1 in the question ? Well, the electric field is the one that determines the polarisation so it too would be in the same plane asthe antenna element, making ‘d’ entirely the right answer. The magnetic field, aspect 2 is always at 90 degrees to the electric field, aspect 1, so also at right angles to the polarisation and the antenna element. That means that any answer with aspect 2 included is wrong; that rules out ‘a’, ‘b’ and ‘c’.",
        lookup: "See page 60 of the Intermediate Licence textbook",
        syllabus: "5a.3"
    }, {
        source: "BBDL Intermediate Quiz W12 Q20",
        question: " If an antenna has a gain figure of 7dBd, what would it be if expressed in dBi?",
        options: [
            "3.5dBi",
            "4.85dBi",
            "7.00dBi",
            "9.15dBi"
        ],
        correct: 3,
        explanation: "Very simple if you remember that the dBi gain figure is always higher than the dBd gain figure; only one answer fits that model. You should also recall that dBi for any antenna is always dBd plus 2.15dB.So, in this case, 7 + 2.15 = 9.15 = ‘d’.",
        lookup: "See page 58 of the Intermediate Licence textbook",
        syllabus: "4c.4 & 9b.1"
    },

]

export default quizData