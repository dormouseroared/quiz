const EXAM_SECRETS_SAMPLES = [
    {
        source: "Exam Secrets Samples Q1",
        question: "Under normal circumstances, messages may be sent:",
        options: [
            "to any amateurs who are on the frequency or channel concerned",
            "to anybody who happens to be listening to you at the time",
            "only to a licenced amateur in person who has exchanged callsigns with you",
            "to the station of an amateur with whom communication has been established",
        ],
        correct: 3,
        explanation: "In OFW611, which is part of EX309, see Condition 6 paragraph 19, known as Clause 6-19. The licence wording is 'are only addressed to one or more amateur station(s)'. The station may include all those people there and they may reply if under supervision. Some care in reading this question is needed to pick up the significant difference between the amateur in person and those there at the station, all of whom may be the intended recipient of your transmission and may reply if supervised.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "1c.1"
    },
    {
        source: "Exam Secrets Samples Q2",
        question: "Under what circumstances, if any, is it permissible to send an obscured or encrypted message?",
        options: [
            "The message contains personal details about other people",
            "When the radio is being used for the purposes of licence clause 6-5",
            "You can be heard by uninvited members of the press",
            "A member of the public has asked you to send a family welfare message",
        ],
        correct: 1,
        explanation: "Clause 6-5b is assisting a User Service. Clause 6-19b: 'Unless the Radio Equipment is being used for the purposes of clause 6-5, the Licensee must ensure that transmissions between amateur stations are not encrypted for the purpose of obscuring their meaning...'",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "1c.1"
    },
    {
        source: "Exam Secrets Samples Q3",
        question: "The Wireless Telegraphy (Content of Transmission) Regulations 1988 sets out requirements covering:",
        options: [
            "sending messages of a grossly offensive or obscene or menacing character",
            "limits on the number of amateurs that can be addressed in any one transmission",
            "pretending to be a person authorised ny Ofcom in order to gain an advantage",
            "time limits of a single transmission, especially when operating through a repeater",
        ],
        correct: 0,
        explanation: "More to find out aRadiating bout the The Wireless Telegraphy (Content of Transmission) Regulations 1988",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "1c.1"
    },
    {
        source: "Exam Secrets Samples Q4",
        question: "If you are operating close to the edge of a band, what is the most severe situation you are risking if your transmitter frequency is unstable?",
        options: [
            "You may cause interference to another amateur station",
            "You may radiate outside the amateur band",
            "The station you are in contact with may have to re-tune",
            "Radiation of harmonics will increase noticably",
        ],
        correct: 1,
        explanation: "Radiating outside an amateur band is a breach of licence terms. You risk being required to fix the problem before transmitting again, having a modification to your licence or, possibly, losing your licence. Willing cooperation with the OFCOM inspector is clearly the best option, and it is always possible they have suitable test equipment to help you diagnose the problem.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "1d.1"
    },
    {
        source: "Exam Secrets Samples Q5",
        question: "Satellite operation involves transmitting in one band and receiving in a different band. That means you must have equipment:",
        options: [
            "able to transmit on the uplink and receive on the downlink",
            "able to transmit and receive on both the uplink and downlink",
            "able to transmit and receive on the uplink and receive on the downlink",
            "able to transmit on both the uplink and downlink and receive on the downlink",
        ],
        correct: 2,
        explanation: "Obviously you must be able to transmit on the uplink and receive on the downlink but Clause 6-2 of OFW611 requires you not to cause undue interference. Clearly if your uplink is causing problems to another terrestrial station they are likely to reply on the frequency you are transmitting on. You need to be able to hear that reply so you are aware of the problem and take suitable action.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "1d.1"
    },
    {
        source: "Exam Secrets Samples Q6",
        question: "If a person authorised by Ofcom is of the opinion that an urgent situation exists then your Radio Equipment may be inspected:",
        options: [
            "at any time of the day or night",
            "at any and all reasonable times",
            "during office hours but 7 days a week",
            "at any time by appointment",
        ],
        correct: 0,
        explanation: "OFW611 Clause 7-1b says 'at any time' if the matter is urgent - interference to an emergency service or air traffic control perhaps. (8-1) then says what can be done to remedy the problem; which can be modification to your equipment, a restriction on its use, or close down the station. With a less or non-urgent problem an inspection during normal working hours is more likely. Normal inspections are at a reasonable time, but if there is a problem that requires urgent resolution then an inpsection could be at any time.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "1d.1"
    },
    {
        source: "Exam Secrets Samples Q7",
        question: "When operating your radio by remote control you may:",
        options: [
            "use a radio link in amateur bands below 30MHz",
            "use an internet link to access the main station",
            "utilise encryption on an amateur link",
            "provide for general use by other amateurs",
        ],
        correct: 1,
        explanation: "(6-10) does not prescribe the link technology, but does require the link to be adequately secure so that no other person can gain control. That does not include a person at your station operating under supervision. (6-10b) requires any link in an amateur band to be above 30 MHz. (6-19b) prohibits encryption of amateur transmissions (except under specific circumstances) and that also applies to remote control links on amateur frequencies.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "1e.1"
    },
    {
        source: "Exam Secrets Samples Q8",
        question: "A radio link in an amateur band used for remote control of the mains transceiver must be:",
        options: [
            "limited in power to 500mW PEP ERP",
            "encrypted to prevent misuse by others",
            "compliant with Schedule 1 to the licence",
            "capable of being monitored for interference",
        ],
        correct: 2,
        explanation: "The rules for the link are the same as for the remote main transmitter, so the answer is simply compliant with Schedule 1. (6-19b) about non-encryption applies equally to links and main transmitters.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "1e.1"
    },
    {
        source: "Exam Secrets Samples Q9",
        question: "A radio link in an amateur band used for remote control of the main transceiver must be:",
        options: [
            "limited in power to 500mW PEP ERP",
            "adequately secure but not encrypted",
            "below 30MHz",
            "above 144MHz",
        ],
        correct: 1,
        explanation: "In EX309 OFW611, Clause 6-11a requires the link to be adequately secure to prevent others gaining control. This applies irrespective of the link technology. Not specific in the licence, but it should also be failsafe such that loss of the link shuts down the main transmitter.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "1e.1"
    },
    {
        source: "Exam Secrets Samples Q10",
        question: "When operating in another country under CEPT T/R 61-01 the rules you must follow are those:",
        options: [
            "of the host country",
            "of the host country which are also in your UK licence",
            "in your UK licence",
            "in either your UK licence or the host country licence",
        ],
        correct: 0,
        explanation: "You must follow the host country rules exactly as if you were a resident there with their licence. The UK licence ONLY applies in the UK, Channel Islands and Isle of Man, including territorial waters, and in international waters or airspace provided you are on a UK etc registered ship or aircraft.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "7h.1"
    },
    {
        source: "Exam Secrets Samples Q11",
        question: "A UK amateur radio club plans to enter contest from the south of France using their club callsign. This idea is:",
        options: [
            "a good one, it might improve their score",
            "acceptable, provide they prefix their callsign with 'F/'",
            "acceptable, if they have all their HAREC certificates",
            "not acceptable, under recommendation CEPT T/R 61-01",
        ],
        correct: 3,
        explanation: "The CEPT Recommendation T/R 61-01 on temporary visits only applies to personal Full licences and does not extend to club licences.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "7h.1"
    },
    {
        source: "Exam Secrets Samples Q12",
        question: "The American continent is in ITU Region:",
        options: [
            "1",
            "2",
            "3",
            "4",
        ],
        correct: 1,
        explanation: "Includes Canada, USA and all countries in North and South America.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "7h.2"
    },
    {
        source: "Exam Secrets Samples Q13",
        question: "When carrying out an RF field assessment the table setting out the relevant tables for public exposure are identified in the:",
        options: [
            "Wireless Telegraphy Licence Conditions Booklet OFW611",
            "Guidance on EMF Compliance and Enforcement",
            "Reference levels published by the Health Security Agency",
            "RSGB EMF technical note No2 v2 October 2022",
        ],
        correct: 1,
        explanation: "Another EX309 OFW611 look it up: Condition 9 - Electromagnetic Fields (EMF) Compliance. Thus, Clause 9-1 refers to footnote 3 and the relevant tables for public exposure identified in Ofcom's Guidance on EMF Compliance and Enforcement. In reality it is easier to use the RSGB EMF Assessment spreadsheet which performs the relevant calculations and compares them with the correct table.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "1g.1"
    },
    {
        source: "Exam Secrets Samples TEST Q14",
        question: "A household consists of several family members, some of whom are licenced amateurs. Which of them are permitted to be inside the EMF exclusion zone?",
        options: [
            "only the amateur operator",
            "those with an amateur licence",
            "all resident family members",
            "personal non-resident guests",
        ],
        correct: 1,
        explanation: "Anyone who does not have an amateur licence must be protected and is regarded as 'general public'.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "1g.1",
        tagged: false
    },
    {
        source: "Exam Secrets Samples Q15",
        question: "Peak Envelope Power is that power supplied to the antenna:",
        options: [
            "at the peak of an RF cycle during normal operation",
            "averaged over 1 RF cycle at the crest of the modulation",
            "averaged over 1 audio cycle on an RMS power meter",
            "by a steady carrier before it is modulated",
        ],
        correct: 1,
        explanation: "See EX309 which contains the full text of OFW611. In Condition 10 -Interpretation - Section 1, also known as 10-1, definitions are provided, including for s) 'Peak Envelope Power (PEP) is the average power supplied to the antenna by a transmitter during one radio frequency cycle at the crest of the modulation envelope taken under normal operating conditions.' ",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "1h.1"
    },
    {
        source: "Exam Secrets Samples Q16",
        question: "When operating on 5.334MHz it is necessary to:",
        options: [
            "limit the antenna height to 10 metres above ground",
            "give your callsign at no more than 10 minute intervals",
            "not exceed a radiated power of 400W EIRP",
            "be contactable by a telephone in close proximity",
        ],
        correct: 3,
        explanation: "See Table C: Full Licence Parameters which can be found in EX309. Everything from 5258.5 to 5406.5 MHz has a Secondary status and is subject to note (g), which on the next page has 9 clauses about the 5 MHz band, including double sideband, network use and a telephone in close proximity. This is so the MOD, as Primary user of the 5 MHz band, can ask you to close down if there is an interference problem.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "1h.1"
    },
    {
        source: "Exam Secrets Samples Q17",
        question: "When operating double sideband in the band 5.276 to 5.284MHz the maximum bandwidth should not exceed:",
        options: [
            "4kHz",
            "6kHz",
            "8kHz",
            "10kHz",
        ],
        correct: 1,
        explanation: "See Table C: Full Licence Parameters which can be found in EX309. Everything from 5258.5 to 5406.5 MHz has a Secondary status and is subject to note (g), which on the next page has 9 clauses about the 5 MHz band, including double sideband, network use and a telephone in close proximity.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "1h.1"
    },
    // {
    //     source: "Exam Secrets Samples Q___________",
    //     question: "",
    //     options: [
    //         "",
    //         "",
    //         "",
    //         "",
    //     ],
    //     correct: 0,
    //     explanation: "",
    //     lookup: "See page(s) x of the Full Licence text book",
    //     syllabus: "0"
    // },
]

export default EXAM_SECRETS_SAMPLES