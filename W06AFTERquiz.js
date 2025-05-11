const W06AFTERquiz = [
    {
        source: "BBDL Intermediate Quiz W06 AFTER Q1",
        question: " If an 5µH inductor has a 10% tolerance rating, what is the highest value it could be?",
        options: [
            "4.5µH",
            "5µH",
            "5.5µH",
            "6µH"
        ],
        correct: 2,
        explanation: "10% of 5 is 0.5, so maximum value is 5 + 0.5 = 5.5 µH.",
        lookup: "See page 19 of the Intermediate Licence textbook",
        syllabus: "2a.1"
    },
    {
        source: "BBDL Intermediate Quiz W06 AFTER Q2",
        question: "If a 4.5V battery with an internal resistance of 20 Ω is connected across an external load with a resistance of 200 Ω, what will the potential difference across the load be?",
        options: [
            "0.41V",
            "2.25V",
            "4.09V",
            "4.5V"
        ],
        correct: 2,
        explanation: " You should be able to rule out ‘d’ from the knowledge that the potential difference will drop when the battery is doing work (i.e. passing current). To work out which of the other three answers is correct needs two step; first work out the current that is flowing, and then use that to workout the potential difference(voltage) across the external load. So, Current(I) = V ÷ R, which is 4.5V ÷ 220 Ω (that is the internal resistance added to the external load resistance). That works out to 0.02045A, which we can round to 0.02A. Good old Ohm’s Law says V = I x R, so here we have 0.02A x 200 Ω = 4.09V = answer ‘c’. For info, the other 0.41V is across the internal resistance (aka the voltage drop).",
        lookup: "See page 16 of the Intermediate Licence textbook",
        syllabus: "2c.3"
    },
    {
        source: "BBDL Intermediate Quiz W06 AFTER Q3",
        question: "What is the combined value of the capacitor network shown in the diagram?  <br><br> <img src='images/w06after-q3.png' alt='test'  >",
        options: [
            "130pF",
            "195pF",
            "433pF",
            "520pF"
        ],
        correct: 1,
        explanation: "As with any mixed network we have to condense it to a single series or parallel circuit. In this case we need to work out the combined value of the parallel capacitors and then combine that with the series capacitor. So, checking EX308, we see that capacitors in parallel simply add up, so 130 + 130 + 130 = 390pF. We now have the equivalent of two capacitors in series, and EX308 formula shows that they will divide down. Quite fortuitously, we have the equivalent of two 390pF capacitors in series and that means the combined value will be exactly half = 195pF.",
        lookup: "See page 17-18 of the Intermediate Licence textbook",
        syllabus: "2d.2"
    },
    {
        source: "BBDL Intermediate Quiz W06 AFTER Q4",
        question: "A 1000µH inductor is in series with a 1.5mH inductor. They will have a total value of:",
        options: [
            "1150µH",
            "1.6mH",
            "2.5mH",
            "1001.5mH"
        ],
        correct: 2,
        explanation: " Inductors in series add up just like resistors in series. Important to convert 1000µH to 1mH, then a trivial sum should give you ‘c’ as the correct answer.",
        lookup: "See page 19 of the Intermediate Licence textbook",
        syllabus: "2d.5"
    },
    {
        source: "BBDL Intermediate Quiz W06 AFTER Q5",
        question: "If the RF output of a transmitter is measured on an oscilloscope and seen to be 140V peak-to-peak, what is the approximate RMS voltage?",
        options: [
            "196V",
            "140V",
            "100V",
            "50V"
        ],
        correct: 3,
        explanation: "Without calculating it, we know that RMS is a little less than half of a peak-to-peak value, so only ‘d’ fits that bill. To check,converting peak-to-peak to peak we halve the 140 to 70, then to go from peak to RMS we multiply by 0.7, which gives us 49 = near enough to 50 for an approximate answer.",
        lookup: "See page 20 of the Intermediate Licence textbook",
        syllabus: "2e.3"
    },
    {
        source: "BBDL Intermediate Quiz W06 AFTER Q6",
        question: "‘Impedance’ can be thought of as:",
        options: [
            "Opposition to alternating current in a circuit containing resistance, capacitance and / or inductance",
            "The DC resistance of quarter wavelength of feeder",
            "The reactance of a resonant antenna",
            "The cause of loss in a feeder"
        ],
        correct: 0,
        explanation: "You should recall that resistance, reactance and impedance are all measured in Ohms but they relate to very different circuits. Impedance is where you have a combination of resistance and reactance, and the reactance can come from either a capacitor or an inductor. ‘b’ is wrong because it relates to pure resistance. ‘c’ is talking about pure reactance, so wrong again. ‘d’ is just wrong, losses in feeders are nothing to do with impedance.",
        lookup: "See page 24 of the Intermediate Licence textbook",
        syllabus: "2e.6"
    },
    {
        source: "BBDL Intermediate Quiz W06 AFTER Q7",
        question: "What is the exact wavelength of an RF signal of 145MHz?",
        options: [
            "2m",
            "2.07m",
            "48cm",
            "70cm"
        ],
        correct: 1,
        explanation: "You might be tempted to go for ‘a’ because you know that 145MHz is in the 2m band, but hold on! Because the question is seeking the exact wavelength, you need to use the formula in EX308. Because the question is dealing in MHz, we can use the ‘short form’ of the formula where λ (in metres) = 300 / f (in MHz) so 300 / 145 = 2.0689 = 2.07m.",
        lookup: "See page 21 of the Intermediate Licence textbook",
        syllabus: "2e.7"
    },
    {
        source: "BBDL Intermediate Quiz W06 AFTER Q8",
        question: " If a mains transformer has 2000 turns on its primary and 150 on its secondary, the output will be:",
        options: [
            "17.25V",
            "230V",
            "2000V",
            "3066V"
        ],
        correct: 0,
        explanation: "You should recall that the output voltage from a transformer depends on the turns ratio – if there are fewer turns on the secondary than the primary, the output will be less than the input.In this case, only answer ‘a’ is less than 230V, making it the one to go for.If you want to stretch yourself a bit, the ratio of the turns is about 13: 1(2000 / 150) and with fewer turns on the secondary the output will therefore be about 230/13 (input V divided by turns ratio) = about 17.5V.",
        lookup: "See page 24 of the Intermediate Licence textbook",
        syllabus: "2g.1"
    },
    {
        source: "BBDL Intermediate Quiz W06 AFTER Q9",
        question: "If a low pass filter has a cut-off frequency of 5MHz, which amateur band would it be MOST suitable for?",
        options: [
            "4m",
            "6m",
            "60m",
            "80m"
        ],
        correct: 3,
        explanation: " If you are unsure of this, it is best to convert the wavelengths into MHz frequency bands, by dividing 300 by the metres: • 4m = 75MHz • 6m = 50MHz • 60m = 5MHz • 80m = 3.75MHzNow, if the low pass filter has a cut off frequency of 5MHz, it will not allow very much above 5MHz to pass, so not ‘a’ or ‘b’. At its cut off frequency, it is - 3dBdown, so it is not really useful to have half of your 5MHz power heating up thefilter, so ‘c’ is doubtful.Because it is lower than 5MHz, 3.75MHz will pass without any attenuation, and 5MHz is not too far above the operatingfrequency, so ‘d’ looks like the MOST correct answer; we will cover more on Low Pass Filters like this when we look at transmitters.",
        lookup: "See page 26 of the Intermediate Licence textbook",
        syllabus: "2h.5"
    },
    {
        source: "BBDL Intermediate Quiz W06 AFTER Q10",
        question: " If a battery is rated at 7 Amp-hour, how long, in theory, could you expect to use it to power your radio, which draws 875mA ?",
        options: [
            "12 hours",
            "8 hours",
            "7 hours",
            "1 hour"
        ],
        correct: 1,
        explanation: " In theory, a 7Ah battery will pass 1A for 7 hours, or 7A for 1 hour; you simply divide the Amp- hour rating by the current.So, if we divide the 7Ahr by the 0.875A current drawn by the radio, we get 8 hours.",
        lookup: "See page 16 of the Intermediate Licence textbook",
        syllabus: "2j.1"
    },
    {
        source: "BBDL Intermediate Quiz W06 AFTER Q11",
        question: "Which of the following best describes a role of the IARU to make the best use of the amateur radio spectrum?",
        options: [
            "Negotiating with national radio societies to agree band plans",
            "Running the international QSL bureau and Logbook of the World",
            "Meeting with other radio user organisations to promote amateur radio",
            "Negotiating with the international radio regulator to agree amateur power limits"
        ],
        correct: 0,
        explanation: "‘a’ is definitely true; the IARU make our bandplans.There is no one international QSL bureau, each country runs its own but works with others to form an international network, and LoTW is run by the ARRL,based in the USA, not the IARU, so not ‘b’. ‘c’ and ‘d’ may be true, but it is not how the IARU makes best use of our spectrum.",
        lookup: "See page 4 of the Intermediate Licence textbook",
        syllabus: "7b.1"
    },
    {
        source: "BBDL Intermediate Quiz W06 AFTER Q12",
        question: "Having gained your UK Intermediate Licence, you plan to take your amateur radio equipment with you on holiday. In which of the following destinations are you allowed to transmit from without obtaining prior approval from the Regulator?",
        options: [
            "Guernsey",
            "France",
            "Italy",
            "Eire"
        ],
        correct: 0,
        explanation: "Guernsey is one of the Channel Islands and therefore covered by your UK Licence. All others are European countries that do not automatically recognise the UK Foundation and Intermediate Licences.",
        lookup: "See page 2 of the Intermediate Licence textbook",
        syllabus: "7h.1"
    },
    {
        source: "BBDL Intermediate Quiz W06 AFTER Q13",
        question: "You encounter Doppler Shift when transmitting through a satellite. This means that:",
        options: [
            "The satellite is stationary and there is no frequency variation",
            "The satellite is stationary and there is frequency variation",
            "The satellite is moving away or towards you and there is frequency variation",
            "The satellite is moving away or towards you and there is no frequency variation"
        ],
        correct: 2,
        explanation: "Simple memory test.",
        lookup: "See page 4-5 of the Intermediate Licence textbook",
        syllabus: "7g.3"
    },
    {
        source: "BBDL Intermediate Quiz W06 AFTER Q14",
        question: "A gas discharge device is used to:",
        options: [
            "Protect against build-up of static charges on an antenna",
            "Prevent static interference to reception",
            "Prevent surges in the mains supply",
            "Prevent a lightning strike"
        ],
        correct: 0,
        explanation: "Airborne static noise is a complex problem that cannot be fixed with a simple discharge device, so not ‘b’, and ‘c’ needs a mains spike filter to protect against, not a gas discharge device. Even a full professional lightning protection system cannot prevent a strike, so ‘d’ is not an option. ‘a’ is correct because that is what the discharge device is there to do.",
        lookup: "See page 11 of the Intermediate Licence textbook",
        syllabus: "8e.1"
    },
    {
        source: "BBDL Intermediate Quiz W06 AFTER Q15",
        question: "Which of the following is a benefit from holding a piece of aluminium in a vice when drilling holes in it?",
        options: [
            " it will prevent the drill slipping away from your mark and scratching the surface",
            " it will prevent the aluminium from spinning around as the drill bit grips",
            " it will prevent sharp swarf from being generated",
            " it will prevent the aluminium over heating"
        ],
        correct: 1,
        explanation: "‘a’ would be a benefit from using a centre punch, so not that one. ‘b’ looks good, the vice will hold it firm. ‘c’ is wrong because swarf will be generated no matter what you hold the aluminium with, likewise, the aluminium will get hot when you drill it, whether or not it is in a vice, so ‘d’ is not the one to go for.",
        lookup: "See page 8 of the Intermediate Licence textbook",
        syllabus: "8b.3"
    },
    {
        source: "BBDL Intermediate Quiz W06 AFTER Q16",
        question: "You are operating from a vehicle in a public car park on top of a high hill. Your station has a large Yagi antenna providing a peak power of 500W EIRP. A group of ramblers stop to take in the view. Based on your EMF assessment, they are within the exclusion zone. Which of the following MUST you do?",
        options: [
            "Have a security guard move them to a position outside the exclusion zone",
            "Advise them that they are at risk of being exposed to ionising radiation",
            "Carry on as they will not be there for very long",
            "Cease transmissions until they have moved on"
        ],
        correct: 3,
        explanation: "The Licence says you must not operate unless you are within the recommended EMF exposure guidelines.Because your peak power is above 100W EIRP, the only option that meets the Licence requirement, and does not infringe public access rights, is ‘d’. ‘a’ may ensure compliance but is likely to be opposed by members of the public, in a public space.See page 2 of the RSGB EMF Updates booklet, but it does not cover the syllabus point very well.",
        lookup: "See page x of the Intermediate Licence textbook",
        syllabus: "8d.1"
    },
    {
        source: "BBDL Intermediate Quiz W06 AFTER Q17",
        question: "The total current in the circuit can be measured by an ammeter by connecting it: <br><br><img src='images/w06after-q17.png' alt='test'  >",
        options: [
            "Across points X and Y",
            "Across the terminals of the PSU",
            "Across the light bulb",
            "Across a break in the wire at point Z"
        ],
        correct: 3,
        explanation: "We measure Voltage/Potential DIFFERENCE across a component, making ‘a’, ‘b’ and ‘c’ all incorrect for a current measurement. We measure the current FLOW by connecting the ammeter in Series with the circuit, so we need to break the circuit and insert the ammeter, only ‘d’ fits that method.",
        lookup: "See page 65-66 of the Intermediate Licence textbook",
        syllabus: "9a.2"
    },
    {
        source: "BBDL Intermediate Quiz W06 AFTER Q18",
        question: ". If an amplifier boosts your old 10W Foundation transmitter up to 100W for use with your new Intermediate Licence, what gain does the amplifier have?",
        options: [
            "2dB",
            "3dB",
            "10dB",
            "90dB"
        ],
        correct: 2,
        explanation: "100W is ten times 10W and 10dB gain is equal to a ten times increase in power.",
        lookup: "See page 56 of the Intermediate Licence textbook",
        syllabus: "9b.1"
    },
    {
        source: "BBDL Intermediate Quiz W06 AFTER Q19",
        question: " If a filter has a cut off frequency of 7MHz and a 7MHz signal of 20VRMS is connected to the filter, what voltage will be measured across a matched load on its output?",
        options: [
            "20.00 Volts (RMS)",
            "14.14 Volts (RMS)",
            "10.00 Volts (RMS)",
            "5.86 Volts (RMS)"
        ],
        correct: 1,
        explanation: "The cut off frequency is defined as the -3dB, or half power point. It can also be shown to be the point where the voltage is attenuated to 0.707 of the input voltage.This question uses volts so it is simply a matter of multiplying 20VRMS by 0.707, which gives 14.14VRMS.",
        lookup: "See page 20 of the Intermediate Licence textbook",
        syllabus: "9b.1 & 2h.5"
    },
    {
        source: "BBDL Intermediate Quiz W06 AFTER Q20",
        question: "Coating a metal surface with solder before making the joint is known as:",
        options: [
            "Tuning",
            "Tinning",
            "Restoring",
            "Resonating"
        ],
        correct: 1,
        explanation: "Not too much to say here.",
        lookup: "See page 7 of the Intermediate Licence textbook",
        syllabus: "9e.4"
    },
]

export default W06AFTERquiz