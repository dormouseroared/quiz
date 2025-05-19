const BBDLMockOne = [
    {
        source: "BBDL Intermediate Mock One Q1",
        question: "If someone is using your Radio Equipment and they do not have their own amateur radio Licence, they must:",
        options: [
            "Sign your logbook to confirm that they understand the Licence Terms and Conditions",
            "Give your callsign at least once every 15 minutes",
            "Comply with the Licence Terms and Conditions",
            "Not touch the radio controls"
        ],
        correct: 2,
        explanation: "There is no requirement to keep a logbook, so no requirement for anyone to sign it, making ‘a’ wrong.The requirement for callsigns to be given is ‘as often as is practicable’ so 15 minutes is not correct, making ‘b’ wrong.Licence clause 6-9 includes the requirement for operators to comply with the Licence, so ‘c’ looks good. ‘d’ is nonsense as operating is allowed and that includes setting the controls on the radio.",
        lookup: "See page 1 of the Intermediate Licence textbook",
        syllabus: "1b.1"
    },
    {
        source: "BBDL Intermediate Mock One Q2",
        question: "When assisting with an International disaster, who are you permitted to establish contact with?",
        options: [
            "Only other radio amateurs assisting the User Services",
            "Other radio amateurs and non-licenced radio operators",
            "Only members of the User Services who are also radio amateurs",
            "Only members of the International Disaster Recovery Agency (IDRA)"
        ],
        correct: 1,
        explanation: "The syllabus says you must remember that you may pass messages internationally on behave of non-licensed persons.The Licence does not actually say that, but hopefully the question covers the gist of boththe syllabus and the Licence. Key point; Licence clause 6-19 removes the restriction on only contacting other radio amateurs if operating under clause 6-5, which includes assisting with international disasters.So, ‘a’ and ‘c’ are ruledout. The IDRA is a made up agency, and does not feature in the Licence, so ‘d’ is not correct. That leaves ‘b’ and that is correct, other radio amateurs are alwaysallowed, and when assisting with disasters you may need to establish contactwith any relevant radio operator, many of whom will not be radio amateurs.",
        lookup: "See page 1 of the Intermediate Licence textbook",
        syllabus: "1c.1"
    },
    {
        source: "BBDL Intermediate Mock One Q3",
        question: "Why may a person authorised by Ofcom require you to keep a permanent record of all transmissions?",
        options: [
            "In support of any interference investigations",
            "In support of any antenna planning investigations",
            "To determine compliance with IARU Band Plans",
            "To determine compliance with international EMC regulations"
        ],
        correct: 0,
        explanation: "Ofcom have no interest in planning, IARU bandplans or international EMC regulations.Licence clause 8-4 covers this.",
        lookup: "See page 2 of the Intermediate Licence textbook",
        syllabus: "1d.2"
    },
    {
        source: "BBDL Intermediate Mock One Q4",
        question: "When your transmitter is in a remote location and you are controlling it via remote control what must you ensure?",
        options: [
            "That the transmitter is available for general use",
            "That the system can be closed down promptly, if required",
            "That any RF remote control link frequency is below 30 MHz",
            "That you only operate within frequencies listed in schedule 3 of the licence"
        ],
        correct: 1,
        explanation: "‘d’ is incorrect as there is no Schedule 3 of the licence. ‘a’ is incorrect as you are NOT allowed to establish a transmitter for general use and ‘c’ is incorrect as you must use frequencies ABOVE 30MHz leaving ‘b’ as the correct answer; you must be able to close the remote station promptly.",
        lookup: "See page 2 of the Intermediate Licence textbook",
        syllabus: "1e.1"
    },
    {
        source: "BBDL Intermediate Mock One Q5",
        question: "When must you reassess your EMF emissions?",
        options: [
            "Annually",
            "From time to time",
            "Whenever you change your radio",
            "When something has changed that could affect the exposure of the general public to EMF"
        ],
        correct: 3,
        explanation: "Ofcom guidance is clear that you only need to reassess if something has changed that could affect EMF exposure; a higher powered radio, or a higher gain antenna, for example. You need to go to the Ofcom EMF Guidance for full details.",
        lookup: "See page 2-3 of the Intermediate Licence textbook",
        syllabus: "1g.1"
    },
    {
        source: "BBDL Intermediate Mock One Q6",
        question: "Which amateur band is allocated to the Amateur Service on a Primary basis but not at all for satellite use?",
        options: [
            "1.850 – 2.000MHz",
            "7.100 – 7.200MHz",
            "10.100 – 10.150MHz",
            "24.890 – 24.990MHz"
        ],
        correct: 1,
        explanation: "A simple look up question, but take care over the exact frequencies! ‘a’ and ‘c’ are both secondary allocations, so wrong. ‘b’ is primary but has no satellite allocation; looks good. ‘d’ is a primary allocation for both amateur and satellite services, so not the correct answer here.These are easy marks, if you look up the correct information, so please familiarise yourself with the layout of the Licence Schedule provided.",
        lookup: "See page 3 of the Intermediate Licence textbook",
        syllabus: "1h.1"
    },
    {
        source: "BBDL Intermediate Mock One Q7",
        question: "The datasheet for a transistor says its gain has a tolerance of 10%. This means that the transistor can:",
        options: [
            "Amplify the current by a factor of 10",
            "Only amplify when biased to 10% of its conduction point",
            "Have a gain 10 times more than that stated on the datasheet",
            "Be expected to perform with a gain of plus or minus 10% of that stated on the data sheet"
        ],
        correct: 3,
        explanation: "Only ‘d’ can be correct here.",
        lookup: "See page 19 of the Intermediate Licence textbook",
        syllabus: "2a.1"
    },
    {
        source: "BBDL Intermediate Mock One Q8",
        question: "A 1k ohm resistor is wired in series with a 5k resistor and a 9 volt supply is connected across the two resistors. The potential difference will be divided with:",
        options: [
            "9 volts across each of the resistors",
            "4.5 volts across each of the resistors",
            "1.5 volts across the 1k resistor and 7.5 volts across the 5k resistor",
            "7.5 volts across the 1k resistor and 1.5 volts across the 5k resistor"
        ],
        correct: 2,
        explanation: "In the series circuit the current flowing through each component is the same but if the resistances are different then the potential differences across each component will be different.That rules out answers ‘a’ and ‘b’.without any calculations, the smaller resistor will have the smaller potential difference, so ‘c’ looks good.If you want to apply some maths, the total resistance in this case is 6k ohms so the 9V supply will be divided with 9 / 6 volts across each 1k Ohm, so 1.5V across the 1k and 7.5V across the 5k confirms ‘c’ to be the correct answer.",
        lookup: "See page 15 of the Intermediate Licence textbook",
        syllabus: "2c.2"
    },
    {
        source: "BBDL Intermediate Mock One Q9",
        question: "The insulating layer in a capacitor is known as:",
        options: [
            "The dielectric",
            "The insulation",
            "The co-efficient",
            "The static vane"
        ],
        correct: 0,
        explanation: " ‘b’ is true, but not its technical name, ‘c’ is wrong(the insulation will have a coefficient, but that is not its name) and as for ‘d’, the vane in a variable capacitor is one of the metal plates, so not an insulator at all.",
        lookup: "See page 16 of the Intermediate Licence textbook",
        syllabus: "2d.1"
    },
    {
        source: "BBDL Intermediate Mock One Q10",
        question: "Two 100μH inductors in parallel have a total value of:",
        options: [
            "50μH",
            "100μH",
            "200μH",
            "400μH"
        ],
        correct: 0,
        explanation: "Inductors in parallel reduce the overall value like resistors in parallel. If both are same value you simply half the value, so a trivial calculation should give you ‘a’ as the correct answer.",
        lookup: "See page 18 of the Intermediate Licence textbook",
        syllabus: "2d.5"
    },
    {
        source: "BBDL Intermediate Mock One Q11",
        question: "What type of waveform is shown below? <br><br><img src='images/bbdl-1-q11.png' alt='test'  >",
        options: [
            "Sine wave",
            "Square wave",
            "Sawtooth wave",
            "Standing wave"
        ],
        correct: 1,
        explanation: "A relatively simple deduction on this one.",
        lookup: "See page 21 of the Intermediate Licence textbook",
        syllabus: "2e.2"
    },
    {
        source: "BBDL Intermediate Mock One Q12",
        question: "An inductor stores energy in:",
        options: [
            "Its electric charge",
            "Its magnetic field",
            "Its electromagnetic radiation",
            "Its core"
        ],
        correct: 1,
        explanation: "Let's split these answers down. Energy can be stored in electric charge; this is the storage mechanism of a capacitor.so not ‘a’. Electromagnetic radiation is not a storage medium; it is energy radiating out from a radio source.So not ‘c’.We know that inductors consist of many turns of wire. Whenever a current passes down a wire it creates a magnetic field round the wire, this effect is enhanced in an inductor.As long as the current flows the stored energy in the magnetic field is maintained, If the current stops, the field breaks down and the energy is dissipated. So ‘b’ looks likely. ‘d’ could also be correct if the inductor has a core consisting of a magnetic material, but that is not general enough for the question so not ‘d’ ",
        lookup: "See page 18 of the Intermediate Licence textbook",
        syllabus: "2e.5"
    },
    {
        source: "BBDL Intermediate Mock One Q13",
        question: "A Full wave wire antenna is connected to a transmitter and powered up. The magnitude and direction of the current and voltage at any instant in time will:",
        options: [
            "Remain the same down the whole length of the conductor",
            "Be a maximum every quarter wavelength down the conductor",
            "Vary sinusoidally along the whole length of the conductor",
            "Be a minimum at the end of the conductor"
        ],
        correct: 2,
        explanation: "‘a’ is wrong because we are dealing with RF, which is a form of alternating current, so will not be the same along a full wavelength wire. ‘b’ is wrong because an AC signal is at its maximum amplitude every half a wavelength. ‘c’ is a 100% true statement. ‘d’ would be correct IF the question was only asking about current; no current can flow beyond the end of a wire. However, the question asks about voltage AND current and the voltage will be at a maximum when the current is at its minimum, so ’d’ is not a valid answer here.",
        lookup: "See page 54 of the Intermediate Licence textbook",
        syllabus: "2e.8"
    },
    {
        source: "BBDL Intermediate Mock One Q14",
        question: "In an analogue to digital conversion, what is the Nyquist rate?",
        options: [
            "Four times the frequency being sampled",
            "Twice the frequency being sampled",
            "An exact match for the frequency being sampled",
            "Half the frequency being sampled"
        ],
        correct: 1,
        explanation: "The Nyquist rate, specifies a sampling rate in a digitising system. In units of samples per second its value is twice the highest frequency in the signal to be sampled. With an equal or higher sampling rate, the resulting signal is said to be free of the distortion known as aliasing.",
        lookup: "See page 43 of the Intermediate Licence textbook",
        syllabus: "2f.1"
    },
    {
        source: "BBDL Intermediate Mock One Q15",
        question: "The energy is coupled from the primary to the secondary windings of a transformer via:",
        options: [
            "Capacitive coupling",
            "The magnetic field",
            "Resistive coupling",
            "Frequency resonance"
        ],
        correct: 1,
        explanation: "",
        lookup: "See page 24 of the Intermediate Licence textbook",
        syllabus: "2g.1"
    },
    {
        source: "BBDL Intermediate Mock One Q16",
        question: "Which if the following do you need to know in order to determine the Q value (Q or Quality Factor) of a tuned circuit?",
        options: [
            "Its resonant frequency and its 3db bandwidth",
            "Its resonant frequency and its peak impedance",
            "Its bandwidth and its peak amplitude",
            "Its peak amplitude and its peak impedance"
        ],
        correct: 0,
        explanation: "The Q is shorthand for the “Quality“ of a tuned circuit. This represents the ability of a tuned circuit to select the wanted signal at the resonant frequency from those on other frequencies.Mathematically, Q,a unitless number = Resonant Frequency/ 3dB bandwidth.",
        lookup: "See page 39 of the Intermediate Licence textbook",
        syllabus: "2h.4"
    },
    {
        source: "BBDL Intermediate Mock One Q17",
        question: "The capacitance of a variable capacitance diode:",
        options: [
            "Increases with increasing voltage when forward biased",
            "Decreases with increasing voltage when forward biased",
            "Increases with increasing voltage when reverse biased",
            "Increases with decreasing voltage when reverse biased"
        ],
        correct: 3,
        explanation: "",
        lookup: "See page 37 of the Intermediate Licence textbook",
        syllabus: "2i.1"
    },
    {
        source: "BBDL Intermediate Mock One Q18",
        question: "The circuit shown in the diagram is: <br><br><img src='images/bbdl-1-q18.png' alt='test'  >",
        options: [
            "A tuned circuit",
            "An integrated circuit",
            "A common emitter amplifier",
            "A common collector amplifier"
        ],
        correct: 2,
        explanation: "",
        lookup: "See page 31 of the Intermediate Licence textbook",
        syllabus: "2i.4"
    },
    {
        source: "BBDL Intermediate Mock One Q19",
        question: "Replacement batteries should use the same cell technology as the originals because some cell technologies:",
        options: [
            "Can deliver more current than the battery powered device requires",
            "Produce variable alternating currents",
            "Produce different terminal voltages",
            "Have different weights"
        ],
        correct: 2,
        explanation: "Usually the battery will be able to supply excess current so not ‘a’. Batteries never directly produce AC so not ‘b’.Unless you really know what you are doing and have checked the fully charged and end of charge voltages and compared it with the requirements, it is easy to do serious damage to the device being powered, so ‘c’ looks good. The weights could be an issue but secondary to the supply voltages, so not ‘d’.",
        lookup: "See page 12 of the Intermediate Licence textbook",
        syllabus: "2j.1"
    },
    {
        source: "BBDL Intermediate Mock One Q20",
        question: "Which of the following best describes an integrated circuit?",
        options: [
            "A circuit with only passive components built on a silicone substrate",
            "A circuit combining many capacitors and inductors built on a metallic substrate",
            "A device with many individual semiconductors built on a common substrate",
            "A device with many passive components and semiconductors built on a geranium substrate"
        ],
        correct: 2,
        explanation: "The Google description of an Integrated circuit is: “An assembly of electronic components, fabricated as a single unit, in which miniaturized active devices(e.g.transistors and diodes) and passive devices (e.g., capacitors and resistors) and their interconnections are built up on a thin substrate of semiconductor material(typically silicon)”. That effectively rules out ‘a’, ‘b’ and ‘d’ as they do not use silicon as the substrate.The syllabus says “Recall that many individual semiconductor devices may be built on a common substrate and packaged as an integrated circuit(IC)”, confirming ‘c’ to be the one to go for.",
        lookup: "See page 30-31 of the Intermediate Licence textbook",
        syllabus: "2i.6"
    },
    {
        source: "BBDL Intermediate Mock One Q21",
        question: "A DDS is often used as:",
        options: [
            "A sideband filter",
            "An RF generator",
            "A final frequency mixer",
            "A diverse demodulation system"
        ],
        correct: 1,
        explanation: "Not much to add here, a DDS is a Direct Digital Synthesiser. Any required frequency can be “constructed” by complex mathematical processes and a lookup table, so ‘b’.",
        lookup: "See page 33 of the Intermediate Licence textbook",
        syllabus: "3c.3"
    },
    {
        source: "BBDL Intermediate Mock One Q22",
        question: "A Balanced Modulator is used to generate:",
        options: [
            "Two sidebands and a carrier",
            "Two sidebands and a suppressed carrier",
            "Suppressed sidebands and a carrier",
            "Suppressed sidebands and a suppressed carrier"
        ],
        correct: 1,
        explanation: "A modulator generates new, mathematically related frequencies from a combination of two frequencies. This is carried out in a process called mixing. If the modulator is of a balanced design, not only is it able to create some new frequencies, but other, unwanted ones, can be “balanced out”. In this case the carrier is suppressed. This follows thedescription in ‘b’.",
        lookup: "See page 36-37 of the Intermediate Licence textbook",
        syllabus: "3e.1"
    },
    {
        source: "BBDL Intermediate Mock One Q23",
        question: "Which filter will allow efficient energy transfer above a specified frequency?",
        options: [
            "Low pass filter",
            "High pass filter",
            "Band pass filter",
            "Lower sideband filte"
        ],
        correct: 1,
        explanation: "",
        lookup: "See page 25-26 of the Intermediate Licence textbook",
        syllabus: "3g.3",
        tagged: true
    },
    {
        source: "BBDL Intermediate Mock One Q24",
        question: "The ability for a receiver to detect weak signals is known as its:",
        options: [
            "Bandwidth",
            "Noise floor",
            "Sensitivity",
            "Selectivity"
        ],
        correct: 2,
        explanation: "These words often become mixed up. Bandwidth and Selectivity is the range of frequencies being received at one time so not ‘a’ or ‘d’. The noise floor is a measure of the wanted signals compared to the carpet of other signals coming in from the aerial.If you have S9 noise at home, you have a high noise floor and the weak signals will not be heard, So not ‘b’. Sensitivity is a measure of the weakest signal that can be copied in your receiver, so ‘c’ is a good option.",
        lookup: "See page 39 of the Intermediate Licence textbook",
        syllabus: "3h.3"
    },
    {
        source: "BBDL Intermediate Mock One Q25",
        question: "The advantages of a superheterodyne receiver over a crystal-diode receiver are:",
        options: [
            "Reduced sensitivity, reduced selectivity and increased audio frequency gain",
            "Increased sensitivity, reduced selectivity and increased audio frequency gain",
            "Increased sensitivity, increased selectivity and increased audio frequency gain",
            "Increased sensitivity, increased selectivity and reduced audio frequency gain"
        ],
        correct: 2,
        explanation: "Crystal diode receivers are the simplest form of radio receiver. The Superheterodyne receiver by comparison is the typical non- DSP radio. It includes selectivity, amplification and lots of other facilities including a BFO to receive Morse code. So, let’s look at the possible answers to see which fits the bill. ‘c.’ is the best description of the superhet receiver so likely to be the one. The Superhet affords better selectivity so not ‘a.’ or ‘b’. Lastly ‘d’, the audio frequency gain will be tailored to meet the needs of the receiver.",
        lookup: "See page 38-41 of the Intermediate Licence textbook",
        syllabus: "3i.1",
        tagged: true
    },
    {
        source: "BBDL Intermediate Mock One Q26",
        question: "The audio can be properly recovered from an FM transmission by a:",
        options: [
            "Frequency Discriminator",
            "Beat frequency oscillator",
            "Carrier insertion oscillator",
            "crystal diode"
        ],
        correct: 0,
        explanation: "",
        lookup: "See page 42 of the Intermediate Licence textbook",
        syllabus: "3k.1"
    },
    {
        source: "BBDL Intermediate Mock One Q27",
        question: "A Fourier transform can be used to:",
        options: [
            "Transform the wanted frequencies into a single intermediate frequency",
            "Convert impedances to ensure maximum power transfer",
            "Attenuate common and differential mode currents",
            "Provide spectrum and waterfall displays"
        ],
        correct: 3,
        explanation: "",
        lookup: "See page 43-44 of the Intermediate Licence textbook",
        syllabus: "3m.1"
    },
    {
        source: "BBDL Intermediate Mock One Q28",
        question: "Which of the following might cause radiation from a balanced feeder?",
        options: [
            "Leaving the SWR meter in the antenna system when transmitting",
            "Earthing the case of the antenna matching unit",
            "Equal and opposite currents in the feeder",
            "Metal objects being close to the feeder"
        ],
        correct: 3,
        explanation: "Simple explanation here. A balanced feeder is a pair of conductors separated by a short space. An RF signal passing down the line creates a magnetic field around each conductor and an electrical field between them. A conducting item close to the conductors can distort the fields which unbalances the line and cause unwanted radiation.",
        lookup: "See page 55 of the Intermediate Licence textbook",
        syllabus: "4a.1"
    },
    {
        source: "BBDL Intermediate Mock One Q29",
        question: "Which of the following statements about antenna radiation patterns is true?",
        options: [
            "They are limited to showing radiation as seen from above the antenna",
            "They are limited to showing radiation as seen from the side of the antenna",
            "They are unable to depict radiation from the front and back of the antenna",
            "They are able to depict the radiation from the antenna in 3 dimensions"
        ],
        correct: 3,
        explanation: "Some radiation patterns (polar plots) either show as in ‘a’ or ‘b’ but the radiation patterns are not limited to 2D, making both wrong; modern simulation software can be used to illustrate radiation patterns in 3D. ‘c’ is wrong because you can clearly compare radiation in the forward and backwards directions; like working out the front-to-back ratio of a Yagi.",
        lookup: "See page 58-59 of the Intermediate Licence textbook",
        syllabus: "4c.2"
    },
    {
        source: "BBDL Intermediate Mock One Q30",
        question: "In order to increase gain, some single band Yagi antennas can have:",
        options: [
            "More than one director",
            "More than one reflector",
            "More than one driven element",
            "More than one of every element"
        ],
        correct: 0,
        explanation: "Key facts about a single band Yagi; there is only ever one driven element and one reflector element, although some reflectors can have multiple parts (not in syllabus) but to add more gain, you normally add more directors, confirming ‘a’ as the one that gets the point.",
        lookup: "See page 58-59 of the Intermediate Licence textbook",
        syllabus: "4d.1"
    },
    {
        source: "BBDL Intermediate Mock One Q31",
        question: "If you have a long wire antenna that is not resonant on any amateur band and you must use it, you will need to:",
        options: [
            "Accept that the antenna will not be efficient but transmit into it anyway",
            "Use a non-amateur frequency that matches the resonant frequency of the antenna",
            "Connect an AMU between the transmitter and the antenna system so you can tune the antenna to resonance",
            "Connect an AMU between the transmitter and the antenna system so you can match the feedpoint impedance to the transmitter"
        ],
        correct: 3,
        explanation: " ‘a’ could result in damage to the transmitter so is not the best idea. ‘b’ is simply illegal, so not an option! Remember, if an AMU/ ATU is connected at the transmitter end of the feeder, it will not have any effect on the antenna, which rules out ‘c’. ‘d’ looks good because the transmitter is designed to work into a specific impedance so matching the antenna system (antenna and feeder all combined) to match the designed load is a good thing to do.",
        lookup: "See page 52-53 of the Intermediate Licence textbook",
        syllabus: "4f.1"
    },
    {
        source: "BBDL Intermediate Mock One Q32",
        question: "The Skip distance is the distance between the:",
        options: [
            "End of ground wave reception and start of sky wave reception",
            "Transmitting antenna and the end of ground wave reception",
            "Transmitting antenna and start of sky wave reception",
            "End of ground wave reception and the end of sky wave reception"
        ],
        correct: 2,
        explanation: "The skip distance is the distance over the surface of the earth from the site of the transmission to the nearest point that the signals can be received on the surface of the earth after refracting in the ionosphere. For HF signals the groundwave signals may only extend a few km whilst the skip distance may be 10s of thousands of km.",
        lookup: "See page 61-63 of the Intermediate Licence textbook",
        syllabus: "5a.2"
    },
    {
        source: "BBDL Intermediate Mock One Q33",
        question: "HF Radio signals will be reflected furthest by which of the following in the earth's atmosphere?",
        options: [
            "Troposphere",
            "D Layer",
            "E Layer",
            "F Layer"
        ],
        correct: 3,
        explanation: "F is the highest so allows reflections to travel furthest.",
        lookup: "See page 62-63 of the Intermediate Licence textbook",
        syllabus: "5b.3"
    },
    {
        source: "BBDL Intermediate Mock One Q34",
        question: "Multi-path propagation can occur at SHF when signals are:",
        options: [
            "Reflected off objects, such as aircraft, and also arrive via the direct path",
            "Reflected off objects, such as buildings, and also arrive via the ionosphere",
            "Reflected off objects, such as aircraft, and also arrive via the ionosphere",
            "Reflected off rain clouds and also arrive via the direct path"
        ],
        correct: 0,
        explanation: "At SHF (3GHz and above) the wavelength is quite small and radio signals that reflect off surfaces can combine with signals that go directly from the transmitter to the receiver.Because of the slightly different transit time, the combined wave contains both deep attenuation and also enhancement.The reflecting surfaces have to be solid and have significant area, when compared to the wavelength.An aircraft in flight fits the bill.The ionosphere plays no part in SHF propagation, ruling out ‘b’ and ‘c’ and rain clouds attenuate SHF signals so not ‘d’.",
        lookup: "See page 64 of the Intermediate Licence textbook",
        syllabus: "5c.3"
    },
    {
        source: "BBDL Intermediate Mock One Q35",
        question: "Which of the following statements is correct?",
        options: [
            "Amateur transmissions produce EMC breakthrough at a much lower level than ‘normal’ domestic electronic equipment",
            "All new electronic equipment should be immune to some level of EMC breakthrough and function correctly",
            "Older amateur radio transmitters may only be operated after modification to meet current UK EMC standards",
            "All new and old electronic equipment in use must be compliant with current UK EMC standards"
        ],
        correct: 1,
        explanation: "‘a’ is wrong because our transmissions are much more powerful than any radiated power from domestic electronic equipment. ‘b’ looks good because all electronic equipment must comply with EMC standards before being placed on the market. ‘c’ is simply not true, you can operate old gear just as you can new gear, you have to make sure both are ‘clean’ and do not cause undue interference. ‘d’ follows on from ‘c’, amateur radio equipment is different to normal domestic equipment so the usual EMC standards do not apply.",
        lookup: "See page 46-47 of the Intermediate Licence textbook",
        syllabus: "6a.4"
    },
    {
        source: "BBDL Intermediate Mock One Q36",
        question: "FM transmissions are likely to cause:",
        options: [
            "A 100Hz buzzing noise that drowns out the received signal",
            "A broadcast radio to mute, or suffer reduced volume",
            "Speech-like sounds to come from the speaker",
            "A loud buzzing noise that pulses on and off"
        ],
        correct: 1,
        explanation: "",
        lookup: "See page 47 of the Intermediate Licence textbook",
        syllabus: "6b.1"
    },
    {
        source: "BBDL Intermediate Mock One Q37",
        question: "A dummy load with a high reactance will:",
        options: [
            "Present a good match on all frequencies",
            "Present a poor match on most frequencies",
            "Overheat and fail",
            "Convert all RF to heat for as long as the PTT is closed"
        ],
        correct: 1,
        explanation: "We often use a dummy load as a reference point. In most cases we want the dummy load to have a resistance with the same numeric value as the Characteristic Impedance of the transmission system. So, for most applications, we use a 50 Ohm dummy load. We also want the dummy load to have an impedance of 50 Ohms from DC to “light” that is, not to be frequency dependent. To achieve this, we want our dummy load to have a very low reactance. A dummy load with a high reactance will present a poor match on frequencies above DC and some power will be reflected back to the transmitter hence ‘b’ is correct, and the others are wrong.",
        lookup: "See page 50 of the Intermediate Licence textbook",
        syllabus: "6d.4"
    },
    {
        source: "BBDL Intermediate Mock One Q38",
        question: "It is important to reduce field strengths in modern petrol driven vehicles because it reduces the risk of:",
        options: [
            "Driver error",
            "A fuel vapour explosion",
            "Failure of the fuel management system",
            "Brain tumours being developed by passengers"
        ],
        correct: 2,
        explanation: ". Whilst talking on the radio when driving can be a distraction, the presence of high RF field strengths alone would not cause driver error. RF fields are unlikely to cause an explosion, you would need a spark for that and lastly there is no evidence that exposure to RF causes brain tumours. However, high RF fields can cause havoc to on-board computers, such as those used to regulate fuel in a modern car engine.",
        lookup: "See page 45 of the Intermediate Licence textbook",
        syllabus: "6f.2"
    },
    {
        source: "BBDL Intermediate Mock One Q39",
        question: "There is a general IARU recommendation for the use of USB/LSB on the amateur radio bands. That recommendation states that:",
        options: [
            "LSB should be used above 10MHz",
            "USB should be used above 10MHz",
            "LSB should be used above 10m",
            "USB should be used above 10m"
        ],
        correct: 1,
        explanation: "10MHz is the divide and upper sideband is used in the upper bands.All other statements are false.",
        lookup: "See page 4 of the Intermediate Licence textbook",
        syllabus: "7b.1"
    },
    {
        source: "BBDL Intermediate Mock One Q40",
        question: "You are listening to a transmission from an amateur satellite and observe that the receive frequency appears to be changing. This means that the satellite is:",
        options: [
            "In geostationary orbit",
            "Always within transmission range of Europe",
            "Only within transmission range on certain days",
            "Only within transmission range for a few minutes"
        ],
        correct: 3,
        explanation: "The frequency of a transmission from an orbiting satellite changes as the satellite approaches, passes and moves away from your receiving antenna position; this is known as Doppler shift. Transmission from a geostationary satellite does not change, so not ‘a’. ‘b’ is wrong because an orbiting satellite is only accessible when above the horizon, and is below the horizon for most of the time. ‘c’ is wrong because amateur satellites tend to have quite regular orbits with several passes every day, so it would be very unusual for there to be no access at all on any given day.",
        lookup: "See page 4-5 of the Intermediate Licence textbook",
        syllabus: "7g.1"
    },
    {
        source: "BBDL Intermediate Mock One Q41",
        question: "If adjustments to mains powered equipment must be made with the power switched on, it is advisable to:",
        options: [
            "Earth your wrists",
            "Wear a residual current device (RCD)",
            "Ensure the equipment is insulated from earth",
            "Use insulated tools"
        ],
        correct: 3,
        explanation: "Not too much to say here. Please don’t try ‘a’ or ‘c’ at home! An RCD is usually plugged into the mains socket and cannot be worn.",
        lookup: "See page 9 of the Intermediate Licence textbook",
        syllabus: "8a.6"
    },
    {
        source: "BBDL Intermediate Mock One Q42",
        question: "To avoid injury when using screwdrivers, files and drills it is advisable to:",
        options: [
            "Keep your tools sharp",
            "Work from behind the tool",
            "Keep your tools in a toolbox",
            "Use a tool belt"
        ],
        correct: 1,
        explanation: "Looking after tools is very important when maintaining or making items.In competent hands, sharp tools are often less dangerous than blunt ones so not ‘a’. Working from behind a tool is good advice, then, should the tool slip, you are out of the way so ‘b’ looks good. ‘c’and ‘d’ both relate to housekeeping, again good practice but not directly a safety issue.",
        lookup: "See page 8 of the Intermediate Licence textbook",
        syllabus: "8b.2"
    },
    {
        source: "BBDL Intermediate Mock One Q43",
        question: "With an Intermediate transmitter operating at full legal power, the EMF compliance distance is likely to be:",
        options: [
            "A couple of metres",
            "Several metres",
            "Tens of metres",
            "Hundreds of metres"
        ],
        correct: 1,
        explanation: "A proper assessment is required to be sure what your compliance distances are, but as a rule of thumb, the syllabus suggests that with 100W, especially with high gain antennas, the compliance distances can be ‘several metres’. Not covered in RSGB textbook or EMF update booklet.",
        lookup: "See BBDL Week 1 Tutorial and EMF for Intermediate briefing document.",
        syllabus: "8d.1"
    },
    {
        source: "BBDL Intermediate Mock One Q44",
        question: "When measuring resistance with an analogue meter you should first:",
        options: [
            "Select the highest resistance range",
            "Select the lowest resistance range",
            "Establish the tolerance of the resistor",
            "Set the ohmmeter to zero Ohms on the range in use"
        ],
        correct: 3,
        explanation: "One of the key differences between the analogue and digital meter is the need to ‘calibrate’ the Ohms scale. We do that by zeroing the scale with the probes touching.",
        lookup: "See page 66 of the Intermediate Licence textbook",
        syllabus: "9a.3"
    },
    {
        source: "BBDL Intermediate Mock One Q45",
        question: "How much of a power gain do you get by moving from a 25W radio to a 100W radio?",
        options: [
            "+3dB",
            "+6dB",
            "+10dB",
            "+75dB"
        ],
        correct: 1,
        explanation: "To work this out, you need to remember the 3dB doubling rule; 25W + 3dB = 50W, 50W + 3dB = 100W.So, with two lots of =3dB we have a total of + 6dB making ‘c’ the correct answer.",
        lookup: "See page 56-57 of the Intermediate Licence textbook",
        syllabus: "9b.1"
    },
    {
        source: "BBDL Intermediate Mock One Q46",
        question: "Which of the following need special techniques to solder successfully?",
        options: [
            "Tin",
            "Brass",
            "Aluminium",
            "Copper"
        ],
        correct: 2,
        explanation: "When aluminium is exposed to the atmosphere it immediately produces a thin, but hard oxide layer on the surface. Techniques used for soldering copper and brass will not remove the oxide and soldering is not possible. However specialised fluxes and filler can (with some difficulty) enable the soldering of aluminium.",
        lookup: "See page 7 of the Intermediate Licence textbook",
        syllabus: "9e.3"
    },
]

export default BBDLMockOne