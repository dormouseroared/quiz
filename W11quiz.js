const W11quiz = [
    {
        source: "BBDL Intermediate Quiz W11 Q1",
        question: "If you want to operate from a ship that has been registered in the UK, who do you need to get permission from?",
        options: [
            "Ofcom",
            "The owner of the vessel",
            "The Coast Guard for the area of water you will be in",
            "The captain, or person in charge of the vessel"
        ],
        correct: 3,
        explanation: "Licence Condition 8-3 is very clear on this requirement. Ofcom have given you blanket permission, subject to the captain agreeing. The owner may be impossible to contact, and would no doubt delegate the decision to the captain, and the Coast Guard has no interest in amateur radio.",
        lookup: "See page 1 of the Intermediate Licence textbook",
        syllabus: "1a.2"
    },
    {
        source: "BBDL Intermediate Quiz W11 Q2",
        question: "The meaning of ‘direct supervision’ in relation to using another Radio Amateur’s Radio Equipment is when the supervisor is:",
        options: [
            "Sitting next to the user and operating the controls for them.",
            "Demonstrating the controls and checking correct operation from time to time.",
            "In the same room and able to prevent incorrect use of the Radio Equipment.",
            "Setting all radio controls such as the operating frequency, mode, etc. and keying the PTT."
        ],
        correct: 2,
        explanation: "‘Direct supervision’ means being close enough to prevent unwanted things happening whilst giving direction and advice. Supervision by occasional visits to check all is well, is not sufficient to meet the Licence terms and conditions; the use of Radio Equipment, means the other amateur’s Callsign is being used, so they must be present as they are responsible for complying with the Licence.",
        lookup: "See page 1 of the Intermediate Licence textbook",
        syllabus: "1b.1"
    }, {
        source: "BBDL Intermediate Quiz W11 Q3",
        question: "In times of international emergency an Intermediate licensee may:",
        options: [
            "Pass messages on behalf of non-licenced persons.",
            "Use any radio frequency requested.",
            "Only use bands with Primary status.",
            "Only transmit if asked by a User Service."
        ],
        correct: 0,
        explanation: "There is no explicit statement in the Licence to allow you to pass messages to non- licenced persons but 6 - 5 does allow you to assist with International disasters and those working to assist may not be RadioAmateurs. Licence condition 6 - 19 limits contacts to other Radio Amateurs, unless you are operating under 6 - 5; it seems saving life and limb is much more important than ‘normal’ licencing conditions! So, joining these together, you can see why, under these conditions, messages may be passed on behalf of non - licenced persons over Amateur Radio. Which is what the syllabus is getting at.",
        lookup: "See page 1 of the Intermediate Licence textbook",
        syllabus: "1c.1"
    }, {
        source: "BBDL Intermediate Quiz W11 Q4",
        question: "During an emergency operation being conducted by a Responder, who may you allow to use your Radio Equipment?",
        options: [
            "A member of the UK Media or Broadcast Service",
            "A member of the Radio Society of Great Britain",
            "A member of the public with a genuine need",
            "A User Service"
        ],
        correct: 3,
        explanation: "Licence 6-8 allows a User Service to use your Radio Equipment in any operation or exercise conducted by a Responder.You are not required to know who the User Services, or the Responders are, just that the User Services can use your radios, and your callsign, if needed.",
        lookup: "See page 1 of the Intermediate Licence textbook",
        syllabus: "1c.2"
    }, {
        source: "BBDL Intermediate Quiz W11 Q5",
        question: "Your transmissions must not cause:",
        options: [
            "Undue interference to any electronic equipment.",
            "Any interference to any electronic equipment.",
            "Undue interference to other radio users.",
            "Any interference to other radio users."
        ],
        correct: 2,
        explanation: "The key phrase when talking about the severity of interference is ‘Undue’; it is what the Licence says! That puts ‘a’ and ‘c’ in theframe as possible correct answers. So is it electronic equipment or radio users who are due protection from ‘undue interference’? There are pieces of electronic equipment that are not protected, like hard - wired telephones, CDplayers, kitchen scales, etc, but all radio users are afforded some protection so ‘c’ is the one to go for.",
        lookup: "See page 2 of the Intermediate Licence textbook",
        syllabus: "1d.1"
    }, {
        source: "BBDL Intermediate Quiz W11 Q6",
        question: "Under normal circumstances there is no requirement to maintain a permanent record of transmissions (log). As an Intermediate Licence Holder, when MUST you keep a log?",
        options: [
            "When operating from a Vessel at Sea.",
            "When operating from an Alternative Address.",
            "When required to do so by a person authorised by Ofcom.",
            "When submitting retrospective planning permission to your Local Authority."
        ],
        correct: 2,
        explanation: "There is no Licence requirement to keep a log when operating at sea so not ‘a’.There is no difference in logging requirements whether you are operating from home, another address, or when mobile, so not ’b’.Ofcom may require a permanent log to be taken to investigateinterference issues, so ‘c’ looks good. ‘d’ is just wrong, the Local Authority will be more interested in visual impact and safety than who you have been working.",
        lookup: "See page 2 of the Intermediate Licence textbook",
        syllabus: "1d.2"
    },
    {
        source: "BBDL Intermediate Quiz W11 Q7",
        question: " If you wish to use your station by Remote Operation, as an Intermediate Licence holder, you must:",
        options: [
            "Only use a remote link via the internet",
            "Encrypt all messages sent by the remote transmitter",
            "Use an amateur band above 30MHz, if using an RF link",
            "Open the remote link for general use by all licensed amateurs"
        ],
        correct: 2,
        explanation: "‘a’ is wrong because you can use any link, not just the internet. ‘b’ and ‘d’ are not permitted by the Licence Conditions. ‘c’ is covered by Licence condition 6-10. ",
        lookup: "See page 2 of the Intermediate Licence textbook",
        syllabus: "1e.1"
    },
    {
        source: "BBDL Intermediate Quiz W11 Q8",
        question: " What is the peak power threshold for needing to carry out a detailed EMF assessment?",
        options: [
            "10W ERP",
            "50W ERP",
            "50W EIRP",
            "100W EIRP"
        ],
        correct: 3,
        explanation: "The key point about EMF thresholds is that they are EIRP levels, that rules out ‘a’ and ‘b’.The average power threshold is 10W EIRP and the peak power threshold is 100W EIRP.",
        lookup: "See page 3 of the Intermediate Licence textbook & RSGB update booklet oages 2-3",
        syllabus: "1g.1"
    },
    {
        source: "BBDL Intermediate Quiz W11 Q9",
        question: "Assuming you already operate such that your station radiates just below the EMF thresholds, which of the following would NOT require you to review your EMF assessment?",
        options: [
            "Starting to use FM rather than SSB",
            " Increasing your transmitter output power from 10W to 50W",
            " Installing a new Yagi antenna with a higher gain than your old vertical antenna",
            "Replacing your Icom transceiver with a home-made transceiver that has the same output power"
        ],
        correct: 3,
        explanation: "The make or model of the transceiver is of no relevance to the EMF assessment; if the output power is the same, there can be no additional RF exposures. All the other changes are likely to increase exposures, so a re- assessment must be carried out.",
        lookup: "See page 3 of the Intermediate Licence textbook and RSGB Update Booklet page 2",
        syllabus: "1g.1"
    },
    {
        source: "BBDL Intermediate Quiz W11 Q10",
        question: "On which frequencies may an Intermediate Licence holder NOT operate? ",
        options: [
            "3.500 – 3.800 MHz",
            "10.150 – 10.200 MHz",
            "21.050 – 21.149 MHz",
            "28.000 – 28.700 MHz"
        ],
        correct: 1,
        explanation: "The 10MHz frequencies quoted are outside of our 10MHz band allocation. All the others are within the allocations shown in the Intermediate Schedule.",
        lookup: "See page 3 of the Intermediate Licence textbook & EX308 page 2",
        syllabus: "1h.1"
    },
    {
        source: "BBDL Intermediate Quiz W11 Q11",
        question: "On which frequencies may an Intermediate Licence holder operate via a satellite?",
        options: [
            "10000 - 10125 MHz",
            "24150 - 24250 MHz",
            "77500 - 78000 MHz",
            "122250 – 123000 MHz"
        ],
        correct: 2,
        explanation: "Remember that 1000MHz = 1GHz. The 77GHz section is the only one of the four options with a satellite allocation shown in the Intermediate Schedule.",
        lookup: "See page 3 of the Intermediate Licence textbook & column 3 of look up table on page 2 in EX308",
        syllabus: "1h.1"
    },
    {
        source: "BBDL Intermediate Quiz W11 Q12",
        question: "Skip distance is:",
        options: [
            "The distance from the transmitter to the point where the sky wave returns to Earth",
            "The distance from the end of the ground wave to the point where the sky wave returns to Earth",
            "The distance to where distant UHF stations who are heard within the UK",
            "Ionospheric reflection from the E layer"
        ],
        correct: 0,
        explanation: "The definition is just what ’A’ says.<br> ‘B’ is a good definition of the Skip Zone, or Dead Zone, so not ‘B’. <br>A distant UHF station is more likely to be using Tropospheric Ducting, so not ‘C’. <br>Lastly ‘D’ is what skip may be defined as, but not the Skip Distance, so not that one.",
        lookup: "See pages 61 fig 13.1, 62-63 of the Intermediate Licence textbook",
        syllabus: "5a.2",
        tagged: true
    },
    {
        source: "BBDL Intermediate Quiz W11 Q13",
        question: " In which layer does Space Wave propagation occur?",
        options: [
            "the troposphere",
            "the D layer of the ionosphere",
            "the E layer of the ionosphere",
            "the F layer of the ionosphere"
        ],
        correct: 0,
        explanation: "Space Wave propagation takes place in the troposphere, which is located below the ionosphere. You should have immediately ruled out ‘b’ as the D-layer absorbs radio energy and is generally unhelpful to any kind of propagation. Ionospheric propagation, via the F or E layer, is normally referred to as ‘Sky Wave’ propagation. So, ‘c’ and ‘d’ are also wrong. Not well covered, and the term ‘space wave’ is not used in the textbook.",
        lookup: "See page 63-64 of the Intermediate Licence textbook",
        syllabus: "5a.2"
    },
    {
        source: "BBDL Intermediate Quiz W11 Q14",
        question: "Which of the following best describes the Ionosphere?",
        options: [
            "It disappears at night",
            "It is made up from several layers of ionised gas that can absorb, refract or reflect radio waves",
            "It is a single layer of ionised particles that enhance radio wave propagation on the VHF and UHF bands",
            "It is unpredictable because it is constantly changing height and only supports propagation when it is under 100km above the ground"
        ],
        correct: 1,
        explanation: "Key facts about the Ionosphere are that it has several layers, it is roughly 100-400km high, it supports HF propagation and it changes between day and night. It does not totally disappear at night, so ‘a’ is wrong. ‘b’ looks good. ‘c’ is wrong about the single layer and which bands use ionospheric propagation. ‘d’ is wrong on height.",
        lookup: "See page 61-62 of the Intermediate Licence textbook",
        syllabus: "5b.1"
    },
    {
        source: "BBDL Intermediate Quiz W11 Q15",
        question: "What is the significance of the solar cycle?",
        options: [
            "ionospheric propagation is affected primarily by sunspots, and the number of spots increase and decrease over an 11 - year cycle",
            "UHF propagation is affected primarily by the sun’s energy levels, and that increases and decreases between the daily day / night cycle",
            "ionospheric propagation is affected primarily by sunspots, and the number of spots increases and decreases between the daily day / night cycle",
            "UHF propagation is affected primarily by the sun’s energy levels, whichincrease and decrease over an 11 - year cycle"
        ],
        correct: 0,
        explanation: "The solar cycle generally refers to the 11-year cycle of sunspot activity; cycle 25 is currently building, so the next few years should see HF propagation getting better and better. UHF propagation is not affected by solar activity so you should have ruled out ‘b’ and ‘d’.So is it ‘a’ or ‘c’?When the sunspots are active, they are present 24 hours a day, so ‘c’ is not true; the only reason there is a change between day and night is because the sun’s radiation is less effective at night and that is the case throughout the solar cycle.",
        lookup: "See page 63 of the Intermediate Licence textbook",
        syllabus: "5b.2"
    },
    {
        source: "BBDL Intermediate Quiz W11 Q16",
        question: "The F2 layer of the ionosphere:",
        options: [
            "Is the layer nearest the earth",
            "Combines with the F1 layer at night",
            "Supports ‘ducting’ propagation during the summer",
            "The highest region of ionised gasses surrounding the sun"
        ],
        correct: 1,
        explanation: "‘a’ refers to the D layer, so not that one, ‘b’ looks good. ‘c’ is wrong; ducting occurs in the troposphere. ‘d’ confuses the sun and the earth, so ‘b’ is the only viable answer to this question.",
        lookup: "See page 62 of the Intermediate Licence textbook",
        syllabus: "5b.3"
    },
    {
        source: "BBDL Intermediate Quiz W11 Q17",
        question: "Which layer provides the longest single hop path length?",
        options: [
            "D layer",
            "E layer",
            "F1 layer",
            "F2 layer"
        ],
        correct: 3,
        explanation: "The higher the layer, the longer the path and as the layers are labelled from the earth upwards, reflection from the D layer would be the shortest path and F2 the longest.",
        lookup: "See page 63 of the Intermediate Licence textbook",
        syllabus: "5b.3"
    },
    {
        source: "BBDL Intermediate Quiz W11 Q18",
        question: "What does the D-layer do?",
        options: [
            "improves ionospheric propagation during the day",
            "disappears at night",
            "causes multi-path reflections on UHF",
            "occasionally enhances propagation on VHF and the higher HF bands"
        ],
        correct: 1,
        explanation: "The D-layer is generally seen as a bad thing for amateur radio propagation because it tends to absorb radio frequency energy in the MF and lower HF bands. However, as ionisation levels drop at night it disappears, allowing longer distance contacts on the lower HF and MF bands. ‘a’ could be talking about the F or E layers, so that is wrong. ‘c’ sounds more like buildings and aircraft than the ionosphere, so not that one. ‘d’ is a good description of what the E layer can do, so not that one either.",
        lookup: "See page 62 of the Intermediate Licence textbook",
        syllabus: "5b.4"
    },
    {
        source: "BBDL Intermediate Quiz W11 Q19",
        question: "Which of the following amateur radio bands will see the most enhanced propagation from ionisation in the E-layer ?",
        options: [
            "3.5 MHz",
            "14 MHz",
            "50 MHz",
            "433 MHz"
        ],
        correct: 2,
        explanation: "The E-layer mainly affects VHF propagation, especially with Spradic-E, although it can also enhance propagation on the HF bands above 20MHz (at 24MHz and 28MHz). Hops can reach 2000km, and multiple hops are possible. Only answer ‘c’ fits that criteria in this question. VHF band range is: 30MHz -> 300MHz or 10m -> 1m.",
        lookup: "See page 62 of the Intermediate Licence textbook",
        syllabus: "5b.5"
    },
    {
        source: "BBDL Intermediate Quiz W11 Q20",
        question: "At which frequencies can multi-path propagation occur where signals are reflected off buildings or aircraft?",
        options: [
            "LF and MF",
            "MF and HF",
            "HF and VHF",
            "VHF and UHF"
        ],
        correct: 3,
        explanation: "",
        lookup: "See very last paragraph on page 64 of the Intermediate Licence textbook",
        syllabus: "5c.3"
    },
]
export default W11quiz