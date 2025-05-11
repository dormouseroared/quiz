const W13quiz = [
    {
        source: "BBDL Intermediate Quiz W13 Q1",
        question: "Which of the following statements is true about a standard monoband Yagi antenna?",
        options: [
            "The director is always the longest",
            "The driven element is always the longest",
            "There may be more than one director",
            "There may be more than one driven element"
        ],
        correct: 2,
        explanation: "The elements of a Yagi narrow towards the front of the antenna, so the reflector is always the longest, making ‘a’ and ‘b’ wrong.In a monoband Yagi there will only be one driven element, but there may be more than one director, making ‘c’ correct and ‘d’ wrong. There are other types of directional antennas that have more than one driven element, but these are not standard Yagi antennas and they are not covered in the syllabus, or the Intermediate Licence Textbook. Mentioned only in case you come across them in your wider reading/ real life experience.",
        lookup: "See page 58-60 of the Intermediate Licence textbook",
        syllabus: "4d.1"
    },
    {
        source: "BBDL Intermediate Quiz W13 Q2",
        question: "You are operating in a net with two other stations. One is located west of North from your location and the other east of North.Why might you need to rotate your horizontal VHF antenna whilst working the two stations?",
        options: [
            "They are using different antenna polarisations from each other",
            "They are using a different antenna polarisation from you",
            "Your antenna has a low front to back ratio",
            "Your antenna beam width is quite narrow"
        ],
        correct: 3,
        explanation: "A VHF Yagi antenna functions in some respects like a torch beam, so to move the radiation from “illuminating” the first station to the second station the Yagi needs to be rotated. If the polarisation were different at the two stations the Yagi would need to be flipped from horizontal to vertical or vice versa, so not ‘a’. If both distant stations were using the same polarisation as each other, but different to you, then the effect would be the same for both, so no rationale for you rotating your beam, so not ‘b’. If the antenna has a low front to back ratio, it would simply make both of the other stations weaker, if you had them on the back of the beam, so no rationale for rotating the antenna, so not ‘c’.",
        lookup: "See page 58-60 of the Intermediate Licence textbook",
        syllabus: "4c.2"
    },
    {
        source: "BBDL Intermediate Quiz W13 Q3",
        question: "The antenna in the diagram above is a trap dipole for the 20, 15 and 10m bands. What frequency will the traps marked ‘X’ be tuned to? <br><br><img src='images/w13-q3.png' alt='test'  >",
        options: [
            "12.4MHz",
            "14.2MHz",
            "21.2MHz",
            "29MHz"
        ],
        correct: 3,
        explanation: "The shortest antenna length works on the shortest wavelength, which in this case is 10m and using the conversion of λ=300 / MHz you can determine that MHz=300 / λ = 30MHz, which is near enough to 29MHz to make ‘d’ the correct answer.",
        lookup: "See page 60 of the Intermediate Licence textbook",
        syllabus: "4d.2"
    },
    {
        source: "BBDL Intermediate Quiz W13 Q4",
        question: "Electromagnetic Compatibility standards are important because:",
        options: [
            "Without them the radio spectrum would be unregulated and band occupancy would be chaotic",
            "The general public must be protected from excessive exposure to electromagnetic radiation",
            "Amateur Radio equipment would always cause interference without EMC standards",
            "All electronic equipment is capable of radiating and absorbing RF energy"
        ],
        correct: 3,
        explanation: "EMC standards do not regulate band occupancy, that is called spectrum management and is governed by radio licensing, so not ‘a’. ‘b’ is a true statement but it has nothing to do with EMC standards, it is referring to the EMF regulations and ICNIRP exposure guidelines. ‘c’ is not true; there are many electronic devices that would never be affected by amateur radio transmissions. ‘d’ is true and the standards ensure that, under normal circumstances, they can all operate together.",
        lookup: "See page 46-47 of the Intermediate Licence textbook",
        syllabus: "6a.1"
    },
    {
        source: "BBDL Intermediate Quiz W13 Q5",
        question: "Using screened power and signal cables on a receiving device will:",
        options: [
            "Reduce immunity to EMC problems",
            "Increase immunity to EMC problems",
            "Increase the risk of DC breakthrough",
            "Reduce the risk of DC breakthrough"
        ],
        correct: 1,
        explanation: "All forms of correctly installed screening should increase the immunity of equipment to EMC issues.It is very unlikely that screening will cause EMC problems so not ‘a’.Both ‘c’ and ‘d’ talk of DC breakthrough, whatever that is, so not ‘c’ or ‘d’.",
        lookup: "See page 45, 47 of the Intermediate Licence textbook",
        syllabus: "6a.2"
    },
    {
        source: "BBDL Intermediate Quiz W13 Q6",
        question: "The output from commercial amateur radio transmitters normally causes interference because:",
        options: [
            "They are poorly designed",
            "They do not have adequate filters",
            "EMC regulations do not apply to amateur equipment",
            "The RF fields generated are greater than the limits specified in EMC regulations"
        ],
        correct: 3,
        explanation: " In a domestic environment transmitter power outputs well below the legal limits may exceed the commercial EMC limits set out in the regulations so we cannot be complacent that all is well. ‘a’ and ‘b’ are possible causes, but not the most likely cause. Although the EMC regulations do not apply to non-commercial (home brew) equipment, they do apply to any commercial amateur equipment, so not ‘c’ .",
        lookup: "Cannot find any specific mention of this in the Intermediate Licence textbook; please let us know if you find something in there!",
        syllabus: "6a.3"
    },
    {
        source: "BBDL Intermediate Quiz W13 Q7",
        question: "You investigate a complaint from a neighbour about interference and find that the TV set that is affected is a very old analogue receiver with a digital TV convertor. You have asked around and no other neighbours are experiencing any problems. What is the most likely reason that the analogue TV is suffering interference?",
        options: [
            "Digital TV convertors are prone to second channel interference",
            "Analogue TV receivers could not be made to be compatible with amateur radio",
            "It was most likely made with a lower immunity to interference than modern equipment",
            "Electronic equipment deteriorates over time and becomes more susceptible to interference"
        ],
        correct: 2,
        explanation: "‘a’ may be true, but based on the information in the question, it is not possible to say this is the most likely cause. ‘b’ is not a true statement, amateur radio lived alongside analogue TV for many years and, in most cases, there were no EMC issues. ‘c’ is a true statement and would explain why this neighbour was suffering interference when others were not.Whilst electronic equipment can deteriorate over time, it does not necessarily lower the immunity levels, so ‘d’ is not the most likely reason.",
        lookup: "See page 47 of the Intermediate Licence textbook",
        syllabus: "6a.4"
    },
    {
        source: "BBDL Intermediate Quiz W13 Q8",
        question: "If you are hearing speech-like sounds coming from your analogue broadcast radio receiver, the most likely cause will be:",
        options: [
            "Breakthrough from amateur AM or SSB transmissions",
            "Breakthrough from other TV or broadcast radio transmissions",
            "Breakthrough from amateur CW transmissions",
            "Breakthrough from FM taxi radio transmissions"
        ],
        correct: 0,
        explanation: " Because the nature of both AM and SSB retains the syllables of speech, any rectifying junction in the equipment can make the signal audible; they may not be demodulated correctly, but they will be audible.However other TV or broadcast transmissions will be very weak by comparison to the amateur transmissions so not a likely source of breakthrough, so not ‘b’. Amateur CW transmissions do not sound like speech so probably not the cause of the breakthrough in this case, so not ‘c’. Finally, Taxi radio FM transmissions, although possibly strong, do not exhibit the syllables of speech so not ‘d’ .",
        lookup: "See page 47 of the Intermediate Licence textbook",
        syllabus: "6b.1"
    },
    {
        source: "BBDL Intermediate Quiz W13 Q9",
        question: "What would be the most likely cause of a digital TV screen freezing for 20 seconds about once every 30 minutes?",
        options: [
            "A petrol engine in a vintage car parked outside",
            "Amateur SSB transmissions",
            "Taxi FM radio transmissions",
            "A faulty thermostat"
        ],
        correct: 3,
        explanation: "The regular timing is a clue that it is something relatively permanent and the others are less regular.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "6b.2 & 6b.3"
    },
    {
        source: "BBDL Intermediate Quiz W13 Q10",
        question: "The most likely effect of EMC interference to a DAB radio is:",
        options: [
            "A 1kHz buzzing noise that drowns out the received signal",
            "Speech-like sounds to come from the speaker",
            "A loud buzzing noise that pulses on and off",
            "Suffering loss of signal and muted audio output"
        ],
        correct: 3,
        explanation: " A DAB receiver is a digital type of radio receiver. For this reason, a strong RF carrier can have the effect of blocking the receiver circuitry causing loss of signal and muting of the audio output.A 1kHz buzzing is an audio frequency and there is nothing in the question to suggest this is likely to be present, so not ‘a’. Because the DAB radio is designed to receive digital signals it is unlikely that a strong amateur signal will be demodulated as speech, so not ‘b’. ‘c’ is similar to ‘a’ in that ‘buzzing’ is not a feature of DAB interference from amateur radio.",
        lookup: "See page 47 of the Intermediate Licence textbook",
        syllabus: "6b.3"
    },
    {
        source: "BBDL Intermediate Quiz W13 Q11",
        question: "If a radio or TV is suffering interference no matter what frequency you transmit on, the route of entry is most likely to be:",
        options: [
            "Via the receiver’s antenna",
            "Via harmonic radiation",
            "Direct pick-up through the receiver’s case",
            "Picked up by the receiver’s intermediate frequency stage"
        ],
        correct: 2,
        explanation: "Receiver pick up tends to be frequency dependent, so ‘a’ is not likely on all frequencies. Harmonics are also frequency related so ‘b’ is not a likely route. If RF gets through the case of a piece of equipment is can be rectified and cause interference, irrespective of frequency, so ‘c’ looks possible. The receiver’s IF stage is tuned to one specific frequency, so ‘d’ looks unlikely. ‘c’ it is.",
        lookup: "See page 47 of the Intermediate Licence textbook",
        syllabus: "6c.1"
    },
    {
        source: "BBDL Intermediate Quiz W13 Q12",
        question: "Wideband TV preamplifiers in common use are:",
        options: [
            "the best means of reducing TVI",
            "likely to be susceptible to overload from strong transmissions",
            "usually fitted as a precaution against lightning strikes",
            "recommended for reducing interference from nearby transmissions"
        ],
        correct: 1,
        explanation: "The clue is in ‘wideband’ label; they amplify just about everything from DC to light, well almost! With that in mind, ‘b’ is the correct answer; any strong signal will be amplified such that interference is likely on whatever frequency is being received.",
        lookup: "See page 47 of the Intermediate Licence textbook",
        syllabus: "6c.2"
    },
    {
        source: "BBDL Intermediate Quiz W13 Q13",
        question: "A UHF TV is being blocked by your strong signal on 145 MHz. A suitable cure might be:",
        options: [
            "high pass filter at the TV end of the antenna downlead",
            "low pass filter at the TV end of the antenna downlead",
            "30 dB attenuator in the TV antenna downlead",
            "wideband masthead TV signal preamplifier at the TV antenna"
        ],
        correct: 0,
        explanation: " UHF is higher than VHF, so it seems reasonable to assume a high pass filter would allow the TV in but reject the amateur signal, so ‘a’ looks good. ‘b’ is the opposite and would not have the desired effect. ‘c’ would attenuate everything and as the amateur signal is likely to be the stronger, it would probably make matters worse. ‘d’ would also create more problems as the wideband preamplifier would amplifyeverything. So, ‘a’ is the correct answer",
        lookup: "See page 47 of the Intermediate Licence textbook",
        syllabus: "6d.1"
    },
    {
        source: "BBDL Intermediate Quiz W13 Q14",
        question: "With reference to currents flowing in twin cable, the desired equal and opposite currents are known as:",
        options: [
            "Standing wave currents",
            "Direct currents",
            "Differential currents",
            "Interfering currents"
        ],
        correct: 2,
        explanation: "If the currents in a pair of conductors in a twin cable are the same value of current flowing in opposite directions, we say they are differential currents (which do not radiate). Making ‘c’ the correct answer.Direct currents do not tend to cause EMC problems, so not ‘b’.Standing wave currents and Interfering currents have no real meaning in this context so not ‘a’ or ‘d’.",
        lookup: "See page 51-52 of the Intermediate Licence textbook",
        syllabus: "6d.2"
    },
    {
        source: "BBDL Intermediate Quiz W13 Q15",
        question: "The most effective way of checking for the presence of harmonics is with a:",
        options: [
            "SWR meter",
            "Filter in the antenna feeder",
            "Multi-meter",
            "General coverage receiver and/or VHF/UHF scanner"
        ],
        correct: 3,
        explanation: "To check for the presence of harmonics it is necessary to be able to monitor frequencies at least twice, three times, four times and five times the frequency of the signal source.So, if the fundamental is on 10.01 MHz, we should look on 20.02, 30.03 and 40.04MHz etc. A general coverage receiver or VHF/ UHF scanner would do this task but to make measurements, the modern approach would be to use a spectrum analyser. None of the other test equipment would be of any use in this application so not ’a’, ‘b’ or ‘c’.",
        lookup: "See page 48-49 of the Intermediate Licence textbook",
        syllabus: "6d.3"
    },
    {
        source: "BBDL Intermediate Quiz W13 Q16",
        question: "Transmitting into a dummy load is a useful way of checking if:",
        options: [
            "your ERP is within the limits of the Licence Schedule for your level of Licence",
            "your transmitter has developed a fault and is radiating harmonics",
            "your receiver is calibrated and the frequency is stable",
            "your station complies with UK EMC Standards"
        ],
        correct: 1,
        explanation: " Using a dummy load is useful for fault finding, or checking, from time to time, that all is well. ‘a’ needs a power measurement and knowledge of the gains/ losses in your antenna system, a dummy load would not help. ‘b’ looks good as itforms part of the test method on page 48 of the Intermediate Licence Textbook. ‘c’ is wrong because the dummy load is just a big resistor and would not help in checking ofcalibration or frequency stability of a receiver. ‘d’ is wrong because there is no requirement for amateur equipment to comply with EMC standards – it would be difficult as they are designed to radiate RF! ",
        lookup: "See page 48, 50, 51 of the Intermediate Licence textbook",
        syllabus: "6d.4"
    },
    {
        source: "BBDL Intermediate Quiz W13 Q17",
        question: "You would normally connect the microphone to your transceiver using:",
        options: [
            "Twin feeder",
            "50 Ω coax",
            "Screened cable",
            "Good quality 70 Ω coax"
        ],
        correct: 2,
        explanation: "Screened cable will keep RF out of the audio circuits and so prevent ‘feedback’.",
        lookup: "See page 45 of the Intermediate Licence textbook",
        syllabus: "6e.1"
    },
    {
        source: "BBDL Intermediate Quiz W13 Q18",
        question: "A good RF earth consists of:",
        options: [
            "A single earth rod driven well into the ground at a quarter wavelength from the antenna",
            "Multiple earth rods in damp soil as close as possible to the transmitter",
            "A 5 cm wide strip of copper connected to both the water and the gas main pipes",
            "The electricity mains earth"
        ],
        correct: 1,
        explanation: "‘a’ could give problems due to the quarter wavelength of cable being resonant. ‘c’ is not a good idea as most underground supply pipes are plastic these days and the gas main would never be a good thing to use for electric connection. Themains earth is not a good idea as it can encourage RF to enter the mains supply and you may run into safety issues with PME. Please seek advice from a competent electrician before installing any RF Earthing in your station.",
        lookup: "See page 46 of the Intermediate Licence textbook",
        syllabus: "6e.2"
    },
    {
        source: "BBDL Intermediate Quiz W13 Q19",
        question: "Which one of these statements regarding loft antennas is correct?",
        options: [
            "They should be installed close to mains wiring to minimise stray radiation",
            "They should be installed well clear of wiring to minimise coupling into the mains",
            "They should always be fed with 300Ω twin feeder",
            "There should always be a balun in the feeder"
        ],
        correct: 1,
        explanation: "Best solution is not to have loft antennas but as that is not an option, keeping them clear of other wiring is the best bet. The other options are just not viable answers.",
        lookup: "See page 45 of the Intermediate Licence textbook",
        syllabus: "6e.3"
    },
    {
        source: "BBDL Intermediate Quiz W13 Q20",
        question: "When routing RF cables and mobile radio DC power cables within vehicles they should:",
        options: [
            "Be double insulated and routed above any insulating floor coverings",
            "Not be grounded to the vehicle body or routed below any insulated floor coverings",
            "Not be routed close to electronic control units or parallel to the vehicle’s wiring loom",
            "Be routed as close as possible to electronic control units and parallel to the vehicle’s wiring loom"
        ],
        correct: 2,
        explanation: "Keeping cables apart reduces the risk of pick-up.",
        lookup: "See page 45 of the Intermediate Licence textbook",
        syllabus: "6f.2"
    },
    {
        source: "BBDL Intermediate Quiz W13 Q21",
        question: "Locating a mobile transmitting antenna on the roof will produce lower RF exposures in the vehicle than wing or boot mounted antennas because:",
        options: [
            "The antenna has a more even ground plane",
            "The radiation pattern is more omnidirectional",
            "There will be a lower SWR on the feeder",
            "There will be less radiation through the vehicle windows"
        ],
        correct: 3,
        explanation: "Fairly obvious way of keeping RF out of the vehicle electrics, the driver and any passengers.",
        lookup: "See page 45 of the Intermediate Licence textbook",
        syllabus: "6f.3"
    },
]

export default W13quiz