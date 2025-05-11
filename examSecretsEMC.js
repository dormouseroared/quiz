const ExamSecretsEMC = [
    {
        source: "Exam Secrets EMC Q1",
        question: "Which statement below BEST describes the concept of electromagnetic compatibility?",
        options: [
            "electronic equipment must avoid causing any electromagnetic disturbance",
            "electronic equipment must be immune to ill effects due to electromagnetic disturbance",
            "electronic equipment must be reasonably immune to electromagnetic disturbance and must not cause intolerable disturbance",
            "electronic equipment that does not adequately limit the electromagnetic disturbance they cause or are insufficiently immune must be marked as non complying"
        ],
        correct: 2,
        explanation: "The essential concept is finding a reasonable and viable solution. Equipment must be reasonably immune and minimise unwanted radiation. If the limit on  radiation is below the level of immunity then problems are unlikely to occur. This does assume reasonable physical separation but also recognises that transmitters are designed to radiate and receivers are designed to receive.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "6a.1"
    },
    {
        source: "Exam Secrets EMC Q2",
        question: "Tests show that RF is not being sent down power lines from an amateur transmitter and the radiated field strength is just within acceptable limits. Nonetheless a mains powered domestic radio is having problems with the transmission. What could be done to improve the matter?",
        options: [
            "Probably very little if the field strength is reasonable",
            "obtain a new receiver certified compliant with the EMC regulations",
            "ask the amateur concerned to not transmit while the neighbour is home",
            "try to improve the immunity of the affected receiver by filtering the mains lead"
        ],
        correct: 3,
        explanation: "The interference mechanism is most likely RF pickup in the mains wiring being conducted into the radio. The radio might not meet the EMC directive limits so a new radio might be better. That said the EMC directive cannot anticipate all situations. As asked, there is still room to fit a filter, a ferrite ring, to the mains lead. This stands a good chance of resolving the problem.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "6a.2"
    },
    {
        source: "Exam Secrets EMC Q3",
        question: "An amateur radio transmitter",
        options: [
            "is licenced to cause electromagnetic disturbance to other electronic equipment",
            "might cause RF fields stronger than the agreed limits on electromagnetic disturbance",
            "must not be able to cause electromagnetic disturbance to any electronic equipment",
            "must be identified as being capable of causing electromagnetic disturbance"
        ],
        correct: 1,
        explanation: "The amateur licence allows transmissions but clause 5(1)(b) does not allow Undue Interference. Clause 17(1)(mm) defines that by reference to section 115 of the Wireless Telegraphy Act (2006) which says 'it degrades, obstructs or repeatedly interrupts anything which is being broiadcast or otherwise transmitted'. The licenced levels do permit field strengths that, depending on distance, might cause problem, so to comply with the licence  it is necessary to then deal with them. Clearly it is socially preferable to not cause problems to any electronic equipment but the licence only refers to radio devices.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "6a.3"
    },
    {
        source: "Exam Secrets EMC Q4",
        question: "New electronic equipment should meet the European EMC immunity requirements",
        options: [
            "and older equipment must be brought up to the current standards",
            "but older or poorly installed equipment might not meet the standards",
            "and existing installations must be re-tested to the current standards",
            "and must avoid causing difficulties to older equipment not meeting the standards"
        ],
        correct: 1,
        explanation: "Older equipment may not meet the current standards and poor installation of new equipment could also be a source of difficulty either in causing interference or being more susceptible to interference. There is no requirement to bring old equipment up to current standards but actual cases will be dealt with on their individual merits.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "6a.4"
    },
    {
        source: "Exam Secrets EMC Q5",
        question: "An SSB speech transmission is being picked up by a music system even if its radio receiver is switched off. A likely effect is that the:",
        options: [
            "radio circuitry is tuned to the offending transmission and weakly responding",
            "interference will cause speech like sounds in the loudspeakers",
            "volume of the wanted broadcast transmission will be reduced or muted",
            "AGC will vary the volume of the wanted signal in time with the interference"
        ],
        correct: 1,
        explanation: "If the radio receiving parts of the victim system are turned off then the likely mechanism is pickup and diode like demodulation.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "6b.1"
    },
    {
        source: "Exam Secrets EMC Q6",
        question: "An FM speech transmission is being picked up by a music system that does not include a radio receiver. This could result in:",
        options: [
            "distortion to the speech of the FM transmission",
            "the speech being clearly audible in the loudspeakers",
            "the music being played being distorted or reduced in volume",
            "the AGC varying the volume of the music in time with the speech"
        ],
        correct: 2,
        explanation: "An FM transmission is constant amplitude. Pressing or releasing the PTT on the transmitter might cause a click on the music system, or if particularly strong then diode-like detection causes DC voltages which upsets the bias of the music system electronics causing distortion or loss of volume. Clicks are a more likely occurrence but that was not an available answer.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "6b.1"
    },
    {
        source: "Exam Secrets EMC Q7",
        question: "A medium wave radio is suffering every few minutes from a short burst of heavy interference causing a rasping sound. A likely source is:",
        options: [
            "a nearby computer",
            "an amateur transmitter",
            "a mechanical thermostat",
            "a fluorescent light"
        ],
        correct: 2,
        explanation: "Mechanical thermostats use a bi-metal strip which senses the temperature by bending as the two metals expand at different rates. That results in a very slow opening and closing of a contact actuated by the bending. This causes a short burst of sparking and consequent wide-band RF radiation which can be detected over a few tens of metres.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "6b.2"
    },
    {
        source: "Exam Secrets EMC Q8",
        question: "A digital TV is suffering from modest interference from an FM amateur transmission. This may be seen as:",
        options: [
            "a jerky picture and jigsaw like pixelation",
            "loss of colour and a severe buzz on sound",
            "wavy lines and patterning on the picture",
            "spots on the screen and possible clicks on sound"
        ],
        correct: 0,
        explanation: "The modulation techniques of digital TV are reasonably robust but interference can corrupt the data resulting in small groups of picture pixels being wrongly decoded, pixelation. The nature of the TV data signal is such that squares of picture are corrupted rather like a missing or wrong coloured piece in a jigsaw. Unlike analogue TV all forms of interference and even momentarily weak wanted signals all have similar visual effects.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "6b.3"
    },
    {
        source: "Exam Secrets EMC Q9",
        question: "A domestic radio is found to be susceptible to interferance from an amateur transmission. Tuning the radio to different frequencies or asking the amateur to transmot in other parts of the band has little effect. Ferrite rings on the transmitter power leads made no difference. It is likely the receiver is suffering from:",
        options: [
            "direct pickup",
            "conducted interference",
            "a poor earth connection",
            "an almost flat battery"
        ],
        correct: 0,
        explanation: "The fact that the exact tuning of either the transmitter or the victim has no effect suggests that the signal is getting in to non-tuned parts of the receiver. That could be pickup by wiring inside the receiver or, if relevant, the power cable into the receiver. The fact that ferrite rings on the transmitter power leads had no effect shows that the interference is not conducted along the mains wiring out of the shack.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "6c.1"
    },
    {
        source: "Exam Secrets EMC Q10",
        question: "A known problem with many masthead TV amplifiers is that:",
        options: [
            "they are tuned only to the UK TV channels",
            "they amplify a wide range of frequencies",
            "their power supply is often delivered via the coaxial down lead",
            "linear amplifiers are commonly used"
        ],
        correct: 1,
        explanation: "Many mast-head TV amplifiers are made for the wider European market and cover a wider range of frequencies than are used in the UK alone. That renders them more susceptible to picking up amateur transmissions.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "6c.2"
    },
    {
        source: "Exam Secrets EMC Q11",
        question: "The purpose of a filter in the power supply leads to a tranceiver is to:",
        options: [
            "prevent noise and interference on the mains from affecting the receiver",
            "minimise the production of harmonics, which may cause interference",
            "minimise the level of RF from the transmitter getting into the mains wiring",
            "ensure the supply to the transceiver is properly balanced"
        ],
        correct: 2,
        explanation: "A filter on the mains lead of a transceiver will minimise noise on the mains getting into the receiver circuits and degrading reception. It will also minimise the risk of RF getting out into the mains when transmitting. It is that, the risk of causing interference, that is the reason for the filter. Improving reception is a bonus.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "6d.1"
    },
    {
        source: "Exam Secrets EMC Q12",
        question: "HF and VHF transmissions occasionally cause interference to a nearby TV set. A possible cure is to fit a:",
        options: [
            "low-pass filter in the TV aerial down lead",
            "high-pass filter in the TV aerial down lead",
            "low-pass filter in the transmitter feeder",
            "high-pass filter in the transmitter feeder"
        ],
        correct: 1,
        explanation: "TV signals are in the UHF band above 470MHz. The question makes no suggestion the amateur transmissions are plagued by harmonics so it would be wrong to simply assume that is the case. It is much more likely the strength of the transmissions are upsetting the TV. That leads to fitting a high-pass filter in the TV lead to admit the wanted UHF TV signals but reject the lower frequency VHF and HF amateur ones.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "6d.1"
    },
    {
        source: "Exam Secrets EMC Q13",
        question: "Placing a ferrite ring round an RF feeder will reduce the:",
        options: [
            "common mode currents because the magnetic field from each conductor adds together",
            "common mode currents because the magnetic field from each conductor cancels out",
            "differential mode currents because the magnetic field from each conductor adds together",
            "differential mode currents because the magnetic field from each conductor cancels out"
        ],
        correct: 0,
        explanation: "Common mode currents flow in the same direction at the same time so their magnetic fields add. That means the inductive effect of the ferrite ring will attenuate those currents. Differential mode currents are equal and opposite so the magbnetic fields cancel and the ferrite ring will have no effect. Properly setup, it is the defferential mode current that is the wanted signal.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "6d.2"
    },
    {
        source: "Exam Secrets EMC Q14",
        question: "Checking for spurious signals and harmonics from the transmitter is best done using:",
        options: [
            "a crystal set receiver",
            "a general coverage receiver",
            "a frequency counter",
            "an RF power meter"
        ],
        correct: 1,
        explanation: "A crystal set is far too insensitive and would fail to detect harmonics that were strong enough to cause problems. A frequency counter only responds to the strongest signal and would not show if there were any harmonics. RF power meters are not normally tuned and would show the strength of the fundamental signal, not any harmonics. A general coverage receiver is the best option.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "6d.3"
    },
    {
        source: "Exam Secrets EMC Q15",
        question: "A 3.5MHz transmitter is believed to have a third harmonic. A suitable device to check this is:",
        options: [
            "a VHF receiver",
            "an oscilloscope",
            "a frequency counter",
            "an HF receiver"
        ],
        correct: 3,
        explanation: "The third harmonic of 3.5MHz is 10.5MHz, in the HF band, not VHF. A frequency counter will respond to the 3.5MHz signal, not any harmonic. The harmonic will cause some distortion to the waveform but would be way over an acceptable level before departure from a clean sinewave was observable on an oscilloscope. The HF receiver ideally with a dummy load to ensure the fundamental signal does not overload it is the correct choice.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "6d.3"
    },
    {
        source: "Exam Secrets EMC Q16",
        question: "It is suspected RF is leaking out of the transmitter via its power leads. A suitable test is:",
        options: [
            "run the transmitter on batteries on low power rather than the power supply",
            "run an affected device on batteries if one is available and compare results",
            "sweep round the house wiring and mains inlet with a handheld receiver",
            "check for problems whilst transmitting as normal but in to a dummy load"
        ],
        correct: 3,
        explanation: "If leakage via the power leads is suspected then removing the radiated RF by using the dummy load will show that the problem will remain. Running on batteries is a good idea but to be effective as a test the transmitter must be run on full power. Running at low power will probably stop the interference but give no clue as to the mechanism.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "6d.4"
    },
    {
        source: "Exam Secrets EMC Q17",
        question: "The drawing shows 4 possible constructions of a dummy load. Without considering their power handling, which construction would be most suitable? <br><br><img src='images/secret-q17.png' alt='test'  >",
        options: [
            "Dummy load 1",
            "Dummy load 2",
            "Dummy load 3",
            "Dummy load 4"
        ],
        correct: 3,
        explanation: "There are three requirements of a dummy load. 1. Correct resistance 2. No reactance 3. No RF radiation (screened!). The best option is 4, as all requirements are satisfied. Option 1 with resistors in parallel should be the correct resistance, and in parallel, any residual inductance in each resistor will be minimised. But it isn't screened. Option 3 tends to maximise the residual inductance, and option 2 is clearly inductive. Options 2 and 3 are not screened either.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "6d.4"
    },
    {
        source: "Exam Secrets EMC Q18",
        question: "It is necessary to set the voltage level into the microphone socket of your transceiver from a new desk microphone. To do that you have borrowed a separate receiver so you can compare the volume of your hand microphone and the new desk microphone. The RF output from the transceiver should be connected to:",
        options: [
            "the receiver RF input socket",
            "your normal antenna",
            "nothing, just left unconnected",
            "a dummy load"
        ],
        correct: 3,
        explanation: "The transceiver should be connected to a dummy load so its RF power amplifier is feeding the correct load resistance and very little signal is radiated. There will be sufficient radiated signal to be picked up at a nearby receiver. Connecting the transceiver output direct to the receiver input will result in instant and expensive damage.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "6d.4"
    },
    {
        source: "Exam Secrets EMC Q19",
        question: "The connection between a transmitter and an antenna matching unit:",
        options: [
            "should be made using coaxial cable and RF plugs which connect with the braid",
            "can use any type of cable since the antenna matching unit will avoid any problems",
            "should not be longer than one quarter of a wavelength to avoid matching problems",
            "must inckllude a suitable balun for the frequencies in use by the transmitter"
        ],
        correct: 0,
        explanation: "It is important that coaxial cable is used to maintain screening and continuity of the braid outer conductor as well as the inner conductor. The AMU will not prevent radiation from the wrong type of cable and, since the SWR should be close to unity between the transceiver and AMU the length is immaterial. At HF, where an AMU is common, cable loss is not normally an issue.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "6e.1"
    },
    {
        source: "Exam Secrets EMC Q20",
        question: "A good RF earth:",
        options: [
            "should be used in place of the house mains earth",
            "is the house mains water supply pipe",
            "is a short fat lead to copper rods buried in the garden",
            "is only required for frequencies above 430MHz"
        ],
        correct: 2,
        explanation: "Whatever RF earthing is arranged, the mains safety earth must remain connected. The RF earth should be as short as practicable and a substantial flat braid or tape is better than a round conductor.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "6e.2"
    },
    {
        source: "Exam Secrets EMC Q21",
        question: "Using a loft antenna for amateur radio activities is:",
        options: [
            "normally quite satisfactory if an outside antenna will look unsightly",
            "likely to cause considerable interference to TV reception",
            "only advisable for frequencies above 30MHz",
            "only advisable for frequencies below 30MHz"
        ],
        correct: 1,
        explanation: "Loft antennas have two drawbacks. Signal loss through the tiles and felt (which might be metallised) and proximity to TV aerials, down leads and mains cables.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "6e.3"
    },
    {
        source: "Exam Secrets EMC Q22",
        question: "When fitting a transceiver in a vehicle it is necessary to:",
        options: [
            "run the power cables neatly alongside the existing wiring loom to avoid making additional holes in the vehicle",
            "connect the power leads direct to the battery by the shortest available route, with a fuse in both leads",
            "keep the power leads and antenna leads well away from other power or control leads in the vehicle",
            "integrate the audio output from the receiver with the existing vehicle music system to mute the music when required"
        ],
        correct: 2,
        explanation: "All the leads connected to the transceiver should be kept away from existing vehicle wiring and certainly not run parallel to the same loom. Normally the positive lead is fused to the battery with the negative lead connected to the chassis close to the battery connection to the chassis. The exception is where the manufacturer specifies otherwise and it is clear the reference is to transmitting equipment, ewhere the allowable transmit power should also mbe specified.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "6f.2"
    },
    {
        source: "Exam Secrets EMC Q23",
        question: "When choosing a location for a vehicle mounted antenna an important consideration is the:",
        options: [
            "field strength inside the vehicle",
            "effect on the antenna radiation pattern",
            "height of the antenna above ground",
            "length of the feeder to the antenna"
        ],
        correct: 0,
        explanation: "The most important matter about vehicle mounted antennas is safety. The field strength inside the vehicle must be considered, from both an EMC and human exposure viewpoint. Also the size and location must not constitute a hazard for occupants or pedestrians.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "6f.3"
    },
]

export default ExamSecretsEMC