const BBDL_FULL_QUIZZES = [
  {
    source: "BBDL QUIZ WEEK00 Q01",
    question:
      "Which Licence Condition clauses cover the rules on using Regional Secondary Locators (RSL)?",
    image: "",
    options: [
      "Licence 4-1a and 4-1b",
      "Licence 5-1 and 6-7",
      "Licence 6-22, 6-23 and 6-24",
      "Licence 8-1a, 8-1b, 8-2 and 8-3",
    ],
    correct: 2,
    explanation:
      "RSL is also mentioned in 6-25. Licence 6-22 outlines how M and G callsigns may use RSLs, 6-23 states that Intermediate callsigns beginning with a '2' must insert the appropriate RSL, and 6-24 lists the RSLs that must be used, if one is included in the callsign.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1a.2",
    examStrategy: 1,
    examStrategyNotes: "Check EX309",
    examCalculation: 0,
    exam_NOT: false,
    obsidianURL: "test",
  },
  {
    source: "BBDL QUIZ WEEK00 Q02",
    question:
      "Where in the Licence would you look to find out how often you must transmit your callsign?",
    image: "",
    options: ["Licence 6-19b", "Licence 6-21b", "Licence 7-1a", "Licence 9-3a"],
    correct: 1,
    explanation:
      "Licence 6-21b says “the callsign must be transmitted as frequently as is practicable during transmissions",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1a.4",
    examStrategy: 1,
    examStrategyNotes: "Check EX309",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK00 Q03",
    question:
      "Where does your Licence say that your Radio Equipment can be operated by anyone that has your permission and is under your direct supervision?",
    image: "",
    options: ["Licence 1-1", "Licence 2-2", "Licence 6-6", "Licence 6-8"],
    correct: 2,
    explanation:
      "Licence 6-6 is very clear. 6-8 allows the use by User Services during an operation or exercise, but that was not in the question.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1b.1",
    examStrategy: 1,
    examStrategyNotes: "Check EX309",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK00 Q04",
    question:
      "Licence 7-1 says that you must permit any person authorised by Ofcom to inspect your Licence and Radio Equipment. What does the word 'inspect' include?",
    image: "",
    options: [
      "Visual observation and test",
      "Visual observation only",
      "Examine and test",
      "Examine only",
    ],
    correct: 2,
    explanation:
      "If you are asked about any meaning, your first port of call should be Condition 10, which lists many definitions.The definition of the word 'Inspect' is at 10-1p.It says that it includes examine and test.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1d.1",
    examStrategy: 1,
    examStrategyNotes: "See explanation",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK00 Q05",
    question:
      "When recording a Message from another amateur and retransmitting it, the Licensee must:",
    image: "",
    options: [
      "include all callsigns",
      "remove all callsigns",
      "only transmit their own callsign",
      "ensure that their transmission is identifiable at all times",
    ],
    correct: 3,
    explanation:
      "There is nothing in the Licence Documents that covers recorded and retransmitted messages, but Licence 6-21a says that the station must be identifiable at all times.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1a.4",
    examStrategy: 2,
    examStrategyNotes: "see explanation",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK00 Q06",
    question:
      "Under normal circumstances, which of the following must NOT be sent from an amateur radio station?",
    image: "",
    options: [
      "coded messages",
      "encrypted messages",
      "details of technical investigations",
      "any transmissions that do not elicit a reply",
    ],
    correct: 1,
    explanation:
      "Licence 6-19 says that, unless you are operating for the purposes of 6-5 (emergencies / disasters), transmissions must not be encrypted for the purposes of obscuring the meaning.Codes are not ruled out, for example, Morse code and the Q code are allowed, so 'a' is OK.Licence 6-4a allows technical investigations, and there is nothing saying you are not allowed to discuss them, so 'c' is OK, and 6-12 allows Beacon transmissions, which do not elicit a reply, so 'd' is OK.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1c.2",
    examStrategy: 2,
    examStrategyNotes: "see explanation",
    examCalculation: 0,
    exam_NOT: true,
  },
  {
    source: "BBDL QUIZ WEEK00 Q07",
    question:
      "The Licence sets up some rules about transmissions being stable and free from unwanted emissions. Where would you find these rules?",
    image: "",
    options: ["Licence 1-2", "Licence 2-2", "Licence 6-2", "Licence 8-2"],
    correct: 2,
    explanation:
      "Licence 6-2 covers the design, construction, maintenance and use of Radio Equipment.From your Foundation and Intermediate studies, it should be pretty clear that poor design, poor construction, poor maintenance or poor use of Radio Equipment could result in Undue Interference to other Wireless Telegraphy.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1d.1",
    examStrategy: 2,
    examStrategyNotes: "Look through EX309",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK00 Q08",
    question:
      "There is a very specific rule on the frequencies that should be used for remote control link. Where in the Licence are the frequencies specified?",
    image: "",
    options: [
      "The Notice of Coordination",
      "The Schedule, Table C",
      "Licence 9-6",
      "Licence 6-10b",
    ],
    correct: 3,
    explanation:
      "Licence 6-10b says if an amateur band is used for remote control links, it must be above 30MHz, no if buts or maybes with that one! ",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1e.1",
    examStrategy: 1,
    examStrategyNotes: "Look through EX309",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK00 Q09",
    question:
      "CEPT Recommendation T/R 61-01 governs the use of amateur radio in other countries. Where is that recommendation defined?",
    image: "",
    options: [
      "Page 2 of the Licence",
      "Notes to Schedule 1",
      "Licence 6-10b",
      "Licence 10-1d",
    ],
    correct: 3,
    explanation:
      "The recommendation is mentioned on page 2 of the Licence, but it is not defined. If you are asked about any meaning, your first port of call should be Condition 10, which lists many definitions, including CEPT T/R 61-01. We will look at CEPT operation more when we do the Licence Conditions tutorial later in the course. [[Page 2 of the Licence is mentioned. Where is that? ]]",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1f.1",
    examStrategy: 1,
    examStrategyNotes: "See EX309 and just work through them.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK00 Q10",
    question:
      "The UK Licence allows any Licensee to operate at sea, but only on a ship that is registered in the UK, the Channel Islands or the Isle of Man. Which of the following include important information appertaining to such use?",
    image: "",
    options: [
      "Licence 4-1b",
      "Licence 10-1b",
      "Note s to Schedule 1",
      "Page 2 of the Licence",
    ],
    correct: 0,
    explanation:
      "Licence 4-1b is the only one of the four options that mentions operating from a ship; Notes to the Schedule only go up to G, so Note s is clearly wrong. [[In the quiz, I answered with Note s to Schedule 1 because there is something in the Notes. I was fooled by Note s which I thought was a misprint as the s is lower case.]]",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1a.1",
    tagged: true,
    examStrategy: 1,
    examStrategyNotes: "See EX309",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK00 Q11",
    question:
      "When a Full Licence holder is operating a Beacon which has its own callsign, which of the following dictates the maximum transmitter power?",
    image: "",
    options: [
      "the information on Page 1 of the Licence",
      "the band plan for the frequency in use",
      "Schedule 1 Table B",
      "Licence 6-13",
    ],
    correct: 3,
    explanation:
      "'a' includes nothing about beacons. 'b' does not set maximum power limits and Table B applies to Intermediate Licence holders. Licence 6-13 sets a 25W limit for beacons that have their own callsign, making it the correct answer. Not in Syllabus but worthy of note if you ever want to run a beacon with more than 5W!",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "0",
    tagged: true,
    examStrategy: 1,
    examStrategyNotes: "Look through EX309",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK00 Q12",
    question:
      "Which of the following bands has an amateur satellite allocation?",
    image: "",
    options: ["1240-1260MHz", "2310-2350MHz", "5650-5670MHz", "5820-5830MHz"],
    correct: 2,
    explanation:
      "'c' is the only one with an allocation in the third column of Licence Schedule 1, Table C; a secondary allocation for signals from Earth to space only.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1h.1",
    examStrategy: 2,
    examStrategyNotes: "Look through EX309",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK00 Q13",
    question: "The frequency band 7.000-7.100MHz is:",
    image: "",
    options: [
      "Primary",
      "Secondary",
      "Shared",
      "Available on the basis of non-interference to other services",
    ],
    correct: 0,
    explanation:
      "A severe beating if you get this wrong! Just read off the answer from the second column of Licence Schedule 1, Table C.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1h.1",
    examStrategy: 1,
    examStrategyNotes: "EX309",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK00 Q14",
    question:
      "Where in the Licence will you find specific rules about operating on the 5MHz band?",
    image: "",
    options: [
      "Licence 6-20",
      "Licence 9-7",
      "Note G to Schedule 1",
      "Note G to the Notice of Coordination",
    ],
    correct: 2,
    explanation:
      "Note G appears after Schedule 1, Table C and sets out a whole bunch of additional rules about the 5MHz band.None of the others specifically reference 5MHz.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1h.1",
    tagged: true,
    examStrategy: 1,
    examStrategyNotes: "EX309",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK00 Q15",
    question: "The UK rules on exposure to EMF from amateur radio are:",
    image: "",
    options: [
      "in the relevant tables for general public exposure identified in the ICNIRP Guidelines",
      "only applicable to transmitters with power levels above 10 Watts",
      "set out in Condition 9 of the Licence",
      "regulated by the RSGB on behalf of Ofcom",
    ],
    correct: 2,
    explanation:
      "'a' is wrong because ICNIRP is not UK specific and only provides guidelines, not rules. 'b' is incorrect because a 9 watt transmitter working into a high gain antenna can exceed the 10W EIRP level. 'c' is a true statement. 'd' is wrong because the RSGB does not enforce the rules.Licence 6-3 points to Licence Condition 9, which sets out the rules, and points to Ofcom Guidance for further detail. [[I answered with the ICNIRP Guidelines.]]",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1g.1",
    tagged: true,
    examStrategy: 3,
    examStrategyNotes: "Rules is the keyword here.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK00 Q16",
    question:
      "The purpose of the EMF restrictions set out in the UK amateur radio licence is to prevent:",
    image: "",
    options: [
      "other users of wireless telegraphy suffering potentially harmful interference",
      "radio workers being exposed to potentially harmful levels of ionising electromagnetic radiation",
      "radio amateurs exposing themselves to potentially harmful levels of non-ionising ekectromagnetic radiation",
      "the general public being exposed to levels of non-ionising electromagnetic radiation above the basic restrictions set out in tables",
    ],
    correct: 3,
    explanation:
      " Harmful interference is an EMC issue, which is not part of the EMF restrictions set out in the Licence, so not 'a'.Radio amateurs are not required to consider radio workers, or themselves, in their assessments of EMF exposure, so not 'b' or 'c'. That only leaves 'd' and it is the general public who the restrictions are intended to protect.Licence 9-1 is the main reference but 10-1n defines what is meant by 'the General Public'.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1g.1",
    examStrategy: 1,
    examStrategyNotes: "The general public is usually a good starting point.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK00 Q17",
    question:
      "The Licence says that you may only use 'Relevant Radio Equipment' if the total EMF exposure levels do not exceed the ICNIRP Guidelines. What is the definition of 'Relevant Radio Equipment'?",
    image: "",
    options: [
      "any Radio Equipmennt owned by the Licence Holder",
      "any transmitting apparatus on the site, regardless of ownership and radiated power",
      "Radio Equipment authorised by the Licence that transmits at powers greater than 10W EIRP or 6.1W ERP",
      "any transmitting apparatus owned by the Licence Holder that is capable of transmitting at powers greater than 10W EIRP or 6.1W ERP",
    ],
    correct: 2,
    explanation:
      "The term 'Relevant Radio Equipment' is used in Licence 9-1, and is defined in 10-1z",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1g.1",
    examStrategy: 2,
    examStrategyNotes: "Just one to be familiar with.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK00 Q18",
    question:
      "Around which frequency would you expect to find other UK stations using Low Power Morse Code?",
    image: "",
    options: [
      "5060kHz",
      "5262kHz",
      "Anywhere between 5284.0kHz and 5288.5kHz",
      "Anywhere between 5351.5kHz and 5366.5kHz",
    ],
    correct: 1,
    explanation:
      "See the 5 MHz (60m) Band Plan; 'a' is not in the band, 'b' is shown as QRP (low power) CW(Morse) Centre of Activity, 'c' is not a UKband, and 'd' is to be avoided for contacts within the UK",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "7b.1",
    examStrategy: 1,
    examStrategyNotes:
      "Another one to highlight on EX309 at the start: '5262 kHz - CW QRP Centre of Activity'",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK00 Q19",
    question:
      "Which mode is NOT recommended (and would also be illegal) for use in the 472kHz (600m) band?",
    image: "",
    options: [
      "Narrow Band Frequency Modulation",
      "Narrow Band digital modes",
      "QRSS",
      "CW",
    ],
    correct: 0,
    explanation:
      "See the 472 kHz (600m) Band Plan, which specifically recommends CW, QRSS and narrow- band digital modes.The band is only 7 kHz wide and NBFM is around 12.5kHz wide, so it would exceed the band edges and breach the Licence Schedule.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "7b.1",
    examStrategy: 1,
    examStrategyNotes: "A detailed look at the band plan",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK00 Q20",
    question:
      "Where would you find the formula to work out the combined value of any number of similar components connected in parallel?",
    image: "",
    options: [
      "in Schedule 1 of the Licence",
      "in Schedule 2 of the Licence",
      "in Column 1 of the Formula Sheet in EX309",
      "in Column 2 of the Formula Sheet in EX309",
    ],
    correct: 3,
    explanation:
      "The formula for resistors, capacitors or inductors connected in parallel are all in column 2 of the Formula Sheet.Those for series connections are in column 1.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "0",
    examStrategy: 1,
    examStrategyNotes: "See explanation.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK01 Q01",
    question:
      "What is the main reason for “Working Split” with transmit and receive frequencies in the same band?",
    image: "",
    options: [
      "satellites use different frequencies for the up-link and down-link",
      "it allows contest stations to keep other stations away from their frequency",
      "it spreads out stations calling you, so you have more chance of picking them out of a pile up",
      "it enables you to listen on a different frequency, to avoid interference on your transmit frequency",
    ],
    correct: 2,
    explanation:
      " 'a' is wrong because satellites use different bands for up and down links. 'b' is not true, using split in a contest would not allow quick scoring and in a busy contest would take up too much spectrum. 'c' sounds good, but let's check 'd'.If there is interference on your transmit frequency, it is unlikely other stations will hear you they might but it is not as good an answer as 'c'.",
    lookup: "See page(s) 11 of the Full Licence text book",
    syllabus: "7a.1",
    examStrategy: 3,
    examStrategyNotes:
      "an example of a good answer and the best answer. Tricky.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK01 Q02",
    question:
      "How can you ensure that you are not causing undue interference to other radio users?",
    image: "",
    options: [
      "operate with low power (QRP) at all times",
      "carry out tests on your own transmissions from time to time",
      "ask your neighbours if they are suffering RF breakthrough once in a while",
      "ask for critical signal reports from stations you work at least once a week",
    ],
    correct: 1,
    explanation:
      " You are permitted to operate up to the maximum powers listed in the Schedule, and it is perfectly feasible to operate with high power and not cause undue interference. Operating with low power can still cause undue interference, especially if your transmitter is faulty, so not 'a'. 'b' sounds like a direct quote from the Ofcom Guidance, so is a contender for a correct answer, but check 'c' and 'd' to be sure. 'c' is really not recommended; if your neighbours are suffering any interference, they are likely to blame you, so not 'c'. 'd' is not a bad thing to do, but it will only check for signal quality, not harmonics or other issues, so not the best answer.",
    lookup: "See page(s) 6-7 of the Full Licence text book",
    syllabus: "7a.8",
    examStrategy: 2,
    examStrategyNotes: "Some classic words to just be faniliar with",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK01 Q03",
    question:
      "Assuming you hold a Full UK Licence, which frequencies should you avoid using for routine amateur radio contacts?",
    image: "",
    options: [
      "5.2620 & 5.2785 MHz",
      "5.2900 & 5.3170 MHz",
      "5.2620 & 5.3170 MHz",
      "5.2785 & 5.2900 MHz",
    ],
    correct: 3,
    explanation:
      "There are four spot frequencies in these answers. All four feature in the 5MHz Bandplan; CW QRP Centre of Activity, UK Emergency Comms, Beacons & AM 6kHz max bandwidth. Of those, under normal circumstances you should not transmit on the Beacon or the Emergency Comms frequencies.",
    lookup: "See page(s) 11 of the Full Licence text book",
    syllabus: "7b.1",
    examStrategy: 2,
    examStrategyNotes:
      "Look at the 5MHz bandplan in EX309. Always highlight '5278.5 kHz - may be used for UK emergency comms traffic' and 'Beacons on 5290 kHz (Note-2)'",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK01 Q04",
    question:
      "In the 'All Modes' section of Band Plans, Amplitude Modulation is acceptable:",
    image: "",
    options: [
      "Only if the bandwidth is 6kHz or less",
      "Only if the bandwidth is 2.7kHz or less",
      "With a bandwidth greater than 6kHz provided the user considers adjacent channel activity",
      "With a bandwidth greater than 2.7kHz provided the user considers adjacent channel activity",
    ],
    correct: 3,
    explanation:
      "[[I answered bandwidth is 6kHz or less... In the 5MHz band there's this: Note 3: Amplitude Modulation is permitted with a maximum bandwidth of 6kHz, on frequencies with at least 6kHz available width, and in the Notes to the bandplans, there are these: 1. All Modes: CW, SSB and those modes listed as Centres of Activity, plus AM. Consideration should be given to adjacent channel users. 2. Amplitude Modulation (AM): AM with a bandwidth greater than 2.7kHz is acceptable in the All Modes segments provided users consider adjacent channel activity when selecting operating frequencies (Davos 2005). CONFUSING!]] AM is generally seen to have a bandwidth of around 6kHz. There was an attempt to ban it from the amateur bands, but a pragmatic agreement was reached that allows AM with a bandwidth greater than 2.7kHz provided the user considers adjacent channel activity. See 'Notes to the bandplans' in EX309 top of second column of the Notes.",
    lookup: "See page(s) 7b.1 of the Full Licence text book",
    syllabus: "7b.1",
    tagged: true,
    examStrategy: 4,
    examStrategyNotes:
      "Lots of options to choose from. Work through this a few times.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK01 Q05",
    question:
      "Some overseas stations may be restricted in their use of the 600m band to avoid interference to:",
    image: "",
    options: [
      "aircraft to ground communications",
      "ground to aircraft communications",
      "nearby radio navigation service directional beacons",
      "nearby radio navigation service non-directional beacons",
    ],
    correct: 3,
    explanation: "See Note-2 to the 472kHz / 600m Band Plan in EX309",
    lookup: "See page(s) 11 of the Full Licence text book",
    syllabus: "7b.1",
    examStrategy: 3,
    examStrategyNotes: "Work through the notes.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK01 Q06",
    question:
      "Even where the same bands are permitted it may not be possible to work some countries on some modes because:",
    image: "",
    options: [
      "The political climates do not allow it",
      "Band plans in other countries and IARU regions may not align with the UK band plan.",
      "Some IARU band plans specifically prohibit contacts between some countries",
      "The USB/LSB convention is not observed by all IARU member states.",
    ],
    correct: 1,
    explanation:
      "Some governments do not allow amateur radio (e.g. North Korea), but a total ban is not mode specific, which is the focus of the question, so 'a' is only partially correct. 'b' is 100 % true and we gave the example of 5MHz in our tutorial, so 'b' looks good. 'c' is not true; there are country exclusions in the 600m bandplan, but nothing that is mode specific, so not 'c'. 'd' is also not true, so not the one to go for.",
    lookup: "See page(s) 11-12 of the Full Licence text book",
    syllabus: "7b.2",
    examStrategy: 1,
    examStrategyNotes: "It's a fundamental aspect of how things are organised.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK01 Q07",
    question:
      "When operating under the provisions of CEPT Recommendation T/R 61-01, the Licensee MUST:",
    image: "",
    options: [
      "Await the allocation of a specific callsign for use in the host country for the duration of the stay",
      "Comply with the Terms & Conditions set out in OFW611 and the Notice of Coordination",
      "Ensure that their Licence is available for inspection by authorities in that country",
      "Use their own callsign with an appropriate suffix of their choosing",
    ],
    correct: 2,
    explanation:
      "[[I answered use their own callsign...]] The '1-page' Licence says that a Full Licence holder is permitted to operate under CEPT T/R 61-01, and if you do that, you need to make your Licence available for inspection, which is why 'c' is the correct answer. 'a' is wrong because T/R 61-01 is for temporary use and no host country callsigns are used. When in another country, you must abide by that country's Licence Conditions, so the Ofcom documents in 'b' are irrelevant. 'd' is wrong because you must use the country prefix quoted in T/R 61-01 following by your UK callsign. This particular Licence Condition is in paragraph 3 on page 2 of the 1-page Licence document issued by Ofcom, which is not included in EX309. You may scream 'foul play' but the syllabus says you need to understand the requirements of CEPT T/R 61-01.",
    lookup: "See page(s) 7-8 of the Full Licence text book",
    syllabus: "7h.1",
    tagged: true,
    examStrategy: 3,
    examStrategyNotes: "Just think this through",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK01 Q08",
    question:
      "When operating under the provisions of CEPT Recommendation T/R 61-01, the Licensee MUST:",
    image: "",
    options: [
      "Await authorisation from the authorities in that country before making any transmissions",
      "Comply with the Terms & Conditions of the country where they are located",
      "Inform Ofcom of a change in location before departure",
      "Add '/A' to their callsign to signify that they are Abroad",
    ],
    correct: 1,
    explanation:
      " 'a' is wrong because T/R 61-01 authorises temporary use so no host country authorisation is required. When in another country, you must abide by that country's Licence Conditions, so 'b' looks like a good option. 'c' is wrong because Ofcom do not care if you are operating outside of the UK, only a permanent change of address would require you to inform them. 'd' is wrong because you must use the country prefix quoted in T/R 61-01 followed by your UK callsign'; no suffix is mentioned in T/R 61-01. The syllabus says you need to understand the requirements of CEPT T/R 61-01. You can find the answer to this one in the Ofcom Guidance Document, pages 25-26.",
    lookup: "See page(s) 7-8 of the Full Licence text book",
    syllabus: "7h.1",
    examStrategy: 2,
    examStrategyNotes: "Drill",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK01 Q09",
    question:
      "If you are operating from a country in Asia, which of the following band allocations would be in use:",
    image: "",
    options: [
      "Only bands allocated in your UK Licence that are also allocated to Region 3",
      "Comply with the Terms & Conditions of the country where they are located",
      "Only bands allocated in your UK Licence that are also allocated to Region 2",
      "Only bands allocated to Region 2 that are authorised in the country you are located in",
    ],
    correct: 1,
    explanation:
      "The first point to note is that Asia is covered by ITU Region 3, so 'c' and 'd' are ruled out immediately. The second key point is that the question says you are in a country and whichever country you are in, you must abide by their rules; a band may be allocated to that Region but that does not mean it is permitted in every country in that Region. 'a' is wrong because the UK Licence is not relevant to what frequencies you can use in another country; it would be correct if the question was about internationalwaters in Asia, but it isn't.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "7h.2",
    examStrategy: 2,
    examStrategyNotes:
      "Think about which ITU region Asia is in, and eliminate some options.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK01 Q10",
    question:
      "What potential difference is required to drive 6mA through a 5M6 resistor?",
    image: "",
    options: ["33.6 V", "336 V", "3.36 kV", "33.6 kV"],
    correct: 3,
    explanation:
      "Formula to use is Ohm's law. See Worked Answer for details including calculator key strokes.<br>$$ V = I \\times R = 6 \\times 10^{-3} \\times 5.6 \\times 10 ^ 6 = 33.6kV$$",
    lookup: "See page(s) 19 of the Full Licence text book",
    syllabus: "2b.1",
    examStrategy: 1,
    examStrategyNotes:
      "A very straightforward calculation. Just take care with the powers of 10. Do an estimate first.",
    examCalculation: 1,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK01 Q11",
    question:
      "If a sensitive RF voltmeter is showing that 10 µV RMS is present across a 50Ω dummy load, how much power is being dissipated in that load?",
    image: "",
    options: ["2 picowatts", "2 micro watts", "2 milliwatts", "2 watts"],
    correct: 0,
    explanation: `See Worked Example for full details. Voltage must be in RMS to use this formula.
        <br> 
        
        $$ P = \\frac{V^2}{R} = 
        \\frac{(10 \\times 10^{-6})^2}{50} = 
        \\frac{100 \\times 10^{-12}}{50} = 
        2pW$$`,
    lookup: "See page(s) 19 of the Full Licence text book",
    syllabus: "2b.1",
    examStrategy: 2,
    examStrategyNotes:
      "Can you do an estimate first? Then take care with powers. Make sure 'munp' is written down.",
    examCalculation: 2,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK01 Q12",
    question:
      "What is the battery voltage in the circuit shown in the diagram?",
    image: "images/bbdl-quizzes-week01-q12.png",
    options: ["10V", "24V", "100V", "240V"],
    correct: 1,
    explanation:
      "There are two key points to getting this one correct; the series resistors and the units. It is a 'simple' Ohm's Law question, just complicated by there being two series resistors and the mixed units, so let's deal with the series resistors first. Hopefully you remembered that series resistors simply add together to give the total resistance, $R_{Total}$. If you are happy 'playing' with numbers, you can rethink 330kΩ as 0.33MΩ, and add 1.2MΩ to get 1.53MΩ.",
    lookup: "See page(s) 19-20 of the Full Licence text book",
    syllabus: "2b.1",
    examStrategy: 2,
    examStrategyNotes: "Worth an estimate first. Then write down steps.",
    examCalculation: 3,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK01 Q13",
    question:
      "How much power will be dissipated in the resistor combination shown in the diagram?",
    image: "images/bbdl-quizzes-week01-q13.png",
    options: ["2.88 W", "6.00 W", "14.4 W", "41.7 W"],
    correct: 1,
    explanation:
      "The key to answering this question is remembering that resistors in parallel combine to produce a lower total resistance; in this case it must be less than 820Ω. <br><br>Using the formula from EX309, $$\\frac{1}{R_T} = \\frac{1}{820}+\\frac{1}{2200}+\\frac{1}{1000000} = 597.35 \\Omega$$ SENSE CHECK: is this less than 820Ω? Yes, so feels right! <br><br>Because the AC supply is given in Volts RMS, we can now use the Power formula: $$ P = \\frac{V^2}{R} = \\frac{60^2}{597.35} = 6.03W $$ Footnote: it may not be 'obvious' at this stage but you could have ignored the 1MΩ resistor.Why? Because it is so much larger than the resistor it is in parallel with, it has very little impact on total R; it is worth remembering that the bigger the difference is between parallel resistors, the less it will change the overall value. Try it! See Worked Answers for calculator key strokes etc.",
    lookup: "See page(s) 19-20 of the Full Licence text book",
    syllabus: "2b.1",
    examStrategy: 1,
    examStrategyNotes:
      "Worth an estimate. Remember large resistors in parallel with small resistors can be ignored",
    examCalculation: 2,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK01 Q14",
    question:
      "If each of the resistors in the diagram is passing 400mA, what is the supply voltage?",
    image: "images/bbdl-quizzes-week01-q14.png",
    options: ["20.0 V", "66.7 V", "100 V", "500 V"],
    correct: 2,
    explanation:
      "[[I answered 20V... 1. ALWAYS DRAW OUT THE CIRCUIT. 2. WRITE SAME VOLTAGE ALONG THE TOP 3. ANY OF THE RESISTORS WITH THE CURRENT WILL GIVE THE CORRECT ANSWER. 4. 250 OHMS X 400 mA = 100V 5. A longer way round is to combine the resistors and the current, so that's 2A x 50 ohms = 100V 6. Doh!]] See Worked Answers for pretty much the same details.",
    lookup: "See page(s) 19-20 of the Full Licence text book",
    syllabus: "2b.1",
    tagged: true,
    examStrategy: 4,
    examStrategyNotes:
      "Always draw out the circuit with notes about where the same voltage is. Can the answer be derived in 2 ways?",
    examCalculation: 2,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK01 Q15",
    question:
      "If 400 W is being dissipated in the resistor combination in the diagram, what is the total current flowing through the resistor network?",
    image: "images/bbdl-quizzes-week01-q15.png",
    options: ["400 mA", "630 mA", "1.60 A", "2.83 A"],
    correct: 3,
    explanation: `Use the Power formula, rearranged for I in terms of P and R:
        $$ I = \\sqrt{\\frac{P}{R}} = \\sqrt{\\frac{400}{50}} = 2.83A$$
        
        See Worked Answers for more details.`,
    lookup: "See page(s) 19-20 of the Full Licence text book",
    syllabus: "2b.1",
    examStrategy: 1,
    examStrategyNotes:
      "The explanation covers it. Useful to estimate square root of 8, so just less than square root of 9.",
    examCalculation: 2,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK01 Q16",
    question:
      "What value of resistor would need to be placed in the gap 'X' to cause the voltmeter to read zero volts?",
    image: "images/bbdl-quizzes-week01-q16.png",
    options: ["10Ω", "50Ω", "100Ω", "1kΩ"],
    correct: 1,
    explanation:
      "For the voltmeter to read zero the potential difference across the resistor placed in the gap 'X' has to be the same as that across the 5kΩ resistor. In the lower potential divider, the 5kΩ resistor is half the value of the 10kΩ resistor, so there will be 3V across the 5kΩ resistor and 6V across the 10kΩ resistor. For the same to be true in the top potential divider, the gap resistor needs to be half of the 100Ω resistor, i.e. 50Ω. You can work out the combined resistance value, the current and then the individual voltages using Ohm's Law, to check, if you wish.",
    lookup: "See page(s) 20 of the Full Licence text book",
    syllabus: "2b.1",
    examStrategy: 2,
    examStrategyNotes: "Drill",
    examCalculation: 1,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK02 Q01",
    question:
      "Working on thermionic valve equipment presents a high safety risk because:",
    image: "",
    options: [
      "All thermionic valves are made of glass and can easily shatter",
      "All thermionic valves run very hot and can cause painful burns",
      "Most valve equipment uses high voltages, and these can kill, even after the equipment is switched off",
      "There is a real risk of radiation sickness",
    ],
    correct: 2,
    explanation: `Whilst 'a' and 'b' are undoubtedly true, 'c' is the most significant, and therefore the correct answer for a 'high risk'.`,
    lookup: "See page(s) 13 of the Full Licence text book",
    syllabus: "8a.1",
    examStrategy: 1,
    examStrategyNotes: "",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK02 Q02",
    question:
      "Which of the following BEST describes Protective Multiple Earthing?",
    image: "",
    options: [
      "An earthing system where the earth is connected to the neutral at one point on each consumer's property",
      "An earthing system which relies on the earth provided by the mains water pipe",
      "A system where several houses in a row each have their own independent safety earth terminals",
      "A system which requires all electrical equipment in the house to have more than one earth",
    ],
    correct: 0,
    explanation: `'a' looks like a reasonable description of PME, 'b' is wrong, many water pipes are plastic these days. 'c' is wrong as PME generally connects many properties together with no independent earth connections, which is at the heart of the risk. 'd' is the opposite of what PME relies on – all metal surfaces bonded to a single common point.`,
    lookup: "See page(s) 17-18 of the Full Licence text book",
    syllabus: "8a.2",
    examStrategy: 1,
    examStrategyNotes: "",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK02 Q03",
    question:
      "Under what circumstances should you carry out work inside live mains powered electrical equipment?",
    image: "",
    options: [
      "Only when there is no other way to carry out the work, for example setting the pre-set bias of a valve in a linear amplifier",
      "Whenever there is a fault in a piece of mains powered equipment, for example when a main power supply starts to make a loud humming sound",
      "Whenever a safety device is triggered, for example a mains fuse 'blows'",
      "Only when replacing components that are fitted in insulated sockets, for example, replacing a valve in an old transceiver",
    ],
    correct: 0,
    explanation: `'a' is the only justifiable reason to go inside live mains powered equipment. In all other cases, there will be ways to carry out servicing or repairs without any power being applied.`,
    lookup: "See page(s) 13 of the Full Licence text book",
    syllabus: "8a.6",
    examStrategy: 1,
    examStrategyNotes: "",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK02 Q04",
    question:
      "Who produces guidance on exposure to Radio Frequency Electromagnetic Fields?",
    image: "",
    options: [
      "HPA – Health Protection Authority",
      "RFA - Radio Frequency Authority",
      "ICNIRP – International Commission on Non-Ionising Radiation Protection",
      "UKCNIRP – United Kingdom Committee on Non-Ionising Radiation Protection",
    ],
    correct: 2,
    explanation: `'a', 'b' & 'd' are completely made-up names. leaving 'c' as the only correct option. NOTE the latest advice is available on the ICNIRP website http://www.icnirp.org and this is the basis of the UK Licence Condition 9 relating to EMF Risk Assessments.`,
    lookup: "See page(s) 16 of the Full Licence text book",
    syllabus: "8d.1",
    examStrategy: 1,
    examStrategyNotes: "",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK02 Q05",
    question:
      "Your station is located in a house overlooking a public park. You carry out a compliance assessment and the only issue is that there is a park bench within the exclusion zone. The bench is used throughout the day but the park is closed every evening at dusk. Which of the following changes would not ensure compliance?",
    image: "",
    options: [
      "Only operating after dusk",
      "Reducing your power so the public park is not in the exclusion zone",
      "Placing a warning sign on the bench advising it should not be used for more than six minutes at a time",
      "Increasing the height of your antenna to reduce the horizontal separation distance to zero at ground level",
    ],
    correct: 2,
    explanation: `Operating after dusk means the park is closed and there is no reason to expect the general public to be present, so 'a' is sound. Reducing your power so the park is no longer in the exclusion zone is absolutely compliant, so 'b' is fine. Placing a warning sign on the bench does not mean it will be followed, and the general public may be walking near the bench, so 'c' would NOT ensure compliance. Increasing the height of the antenna so the horizontal separation distance is zero is another good way of complying, as far as the bench is concerned. How to comply with the EMF restriction is not well covered in the textbook.`,
    lookup: "See BBDL Week 1 Tutorial",
    syllabus: "1g.1",
    examStrategy: 1,
    examStrategyNotes: "",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK02 Q06",
    question: "As a protection against lightning, a static discharge system:",
    image: "",
    options: [
      "Provides a low impedance path from your antenna to earth",
      "Discharges static build-up to earth but does not affect your RF transmissions",
      "Normally consists of a parallel tuned circuit",
      "Should only be connected when you are not using the antenna",
    ],
    correct: 1,
    explanation: `'a' is not correct, it is quite a high resistance, so will present a high Z, 'b' looks better. 'c' is wrong as that would affect antenna performance and 'd' is not true as static can build up at any time. So, 'b' it is.`,
    lookup: "See page(s) 16-17 of the Full Licence text book",
    syllabus: "8e.1",
    examStrategy: 1,
    examStrategyNotes: "Drill!",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK02 Q07",
    question:
      "Handling live mains electric cables whilst outdoors gives rise to a greater risk because:",
    image: "",
    options: [
      "The cables' insulation may be carrying RF energy",
      "The air may support arcing",
      "The ground may be damp, increasing the risk of electrocution",
      "There is an increased risk of lightning strike",
    ],
    correct: 2,
    explanation: `'a' is RF not mains, so not that one. 'b' is more about high voltage static build-up/lightning not mains power, so not that one. 'c' sounds feasible as damp earth provides better conduction and a lower resistance path through you. 'd' may be true outdoors but has nothing to do with mains cables, so not that one. 'c' it is.`,
    lookup: "See page(s) 14-15 of the Full Licence text book",
    syllabus: "8f.4",
    examStrategy: 1,
    examStrategyNotes: "Drill.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK02 Q08",
    question:
      "Many radio amateurs operate transceivers from their vehicles. Which of the following precautions would be more appropriate to mobile operation rather than when operating from a fixed location?",
    image: "",
    options: [
      "Use of an RCD in the power supply chain",
      "Heavy radio equipment secured to prevent movement",
      "Use of a master switch the location of which is known to all present",
      "Use of correctly rated fuses in all DC power leads",
    ],
    correct: 1,
    explanation: `Controls 'a', 'c' and 'd' all apply in a fixed location; 'd' applies equally in fixed and mobile power supply leads, so not more appropriate to either. Heavy equipment ('b') is not normally secured in a fixed location as it is unlikely to move but a transceiver could become a lethal missile in a vehicle collision or emergency stop.`,
    lookup: "See page(s) 15 of the Full Licence text book",
    syllabus: "8f.5",
    examStrategy: 2,
    examStrategyNotes: "Something that applies only to a vehicle?",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK02 Q09",
    question: "A risk assessment should be prepared:",
    image: "",
    options: [
      "After an accident has happened",
      "Whenever amateur radio is being used",
      "When an activity could present a hazard to yourself and others",
      "If someone suspects Health and Safety laws are being broken",
    ],
    correct: 2,
    explanation: `'a' suggests it is too late to be assessing risks, although you might carry out an assessment before restarting the activity that resulted in the accident, so half-correct. 'b' is not the case if you are on your own and there is clearly no risk to anyone else, so not universally true. 'c' sounds very sensible, as it recognises the responsibility to keep everyone safe. 'd' is not a reason to do a risk assessment, more a case of investigating why a breach of the law may have occurred. 'c' is the most correct answer here because it is true without any qualification.`,
    lookup: "See page(s) 14 of the Full Licence text book",
    syllabus: "8f.6",
    examStrategy: 1,
    examStrategyNotes: "Come on this one is obvious.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK02 Q10",
    question:
      "Appropriate insurance should be obtained for all amateur radio activities but in particular where:",
    image: "",
    options: [
      "There is some risk of injury",
      "The public could be involved",
      "High levels of radio energy are present",
      "Risk assessments show that insurance is an appropriate risk control",
    ],
    correct: 1,
    explanation: `'a' could apply to every situation and it doesn't say who might be injured, so not a good answer. 'b' sounds sensible as members of the public are afforded a higher duty of care than yourself, or other radio amateurs, who know about the hazards and risks associated with an amateur station. 'c' is a situation to avoid and you are unlikely to get insurance to cover exceeding the ICNIRP exposure levels, so not that one. 'd' is wrong because insurance does not control the risk, it just protects you against any claims against you.`,
    lookup: "See page(s) 14 of the Full Licence text book",
    syllabus: "8f.6",
    examStrategy: 1,
    examStrategyNotes: "...and obvious again.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK02 Q11",
    question:
      "The risks associated with the use of electrical generators include:",
    image: "",
    options: [
      "Fuel, electricity and exhaust gasses",
      "Electric shock, fire and carbon monoxide poisoning",
      "Good earthing, fuel stored in metal cans, ensuring good ventilation for exhaust gasses",
      "Using RCD's, keeping fuel stocks away from ignition sources, running the generator outdoors",
    ],
    correct: 1,
    explanation: `'b' is the best fit with this question; 'a' is a list of hazards, which give rise to risks. 'b' are risks (bad things that might happen). 'c' & 'd' are all appropriate risk controls, but not risks.`,
    lookup: "See page(s) 14-15 of the Full Licence text book",
    syllabus: "8f.7",
    examStrategy: 1,
    examStrategyNotes: "Drill",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK02 Q12",
    question:
      "What is the total resistance of the circuit shown in the diagram?",
    image: "images/bbdl-quizzes-week02-q12.png",
    options: ["1250Ω", "312Ω", "250Ω", "50Ω"],
    correct: 3,
    explanation: `The first thing to note here is that there are two parallel networks, each made up from five 125Ω resistors, and they are wired in series. So, we need to find out RTotal for each of the parallel sections, and then add them together. With the resistors all being the same value, we can simply divide the value, 125Ω, by the number of resistors, 5, so each one of the parallel groups has an RTotal of 125/5 = 25Ω. With two such groups in series, the total is 25 + 25 = 50Ω.`,
    lookup: "See page(s) 19-20 of the Full Licence text book",
    syllabus: "2b.1",
    examStrategy: 2,
    examStrategyNotes: "Drill",
    examCalculation: 1,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK02 Q13",
    question:
      "What is the approximate total resistance in the circuit shown in the diagram?",
    image: "images/bbdl-quizzes-week02-q13.png",
    options: ["10 Ω", "101 Ω", "110 Ω", "1110 Ω"],
    correct: 1,
    explanation: `In any 'complex' resistor network like this, you need to work out the sections one at a time. You cannot do series and parallel all at once, you need to make them all look like series or all parallel. In this case you need to work out what the total value of the two parallel resistors are then add that to the one series resistor, as if the two in parallel were a single resistor. Parallel resistors use the '1/Rtotal = 1/R1 +1/R2 etc' formula. See worked answer for full calculator keystrokes if required.`,
    lookup: "See page(s) 20 of the Full Licence text book",
    syllabus: "2b.1",
    examStrategy: 2,
    examStrategyNotes:
      "The 1k resistor is large but not large enough to be ignored! This one seems resistant to estimating, so use the CALCULATOR!",
    examCalculation: 2,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK02 Q14",
    question:
      "If the battery in the circuit shown in the diagram provides a potential difference of 12V, how much current will flow through R1?",
    image: "images/bbdl-quizzes-week02-q14.png",
    options: ["10mA", "100mA", "10A", "100A"],
    correct: 0,
    explanation: `There are a few stages to go through to get the answer. First of all we need to work out $R_{Total}$, then use Ohm's Law to work out the current. So, the first step with the resistor combination is to work out the combined resistance of the parallel element formed by R2 & R3. Our 'rule of thumb' tells us it will be less than 220Ω. The 1MΩ actually has little effect and the combination comes out at 219.95Ω (see key stokes below). We can add 220Ω to the 1kΩ, so make $R_{Total}$ = 1220Ω. Now Ohm's Law says V= IR and so I = V/R = 12/1220 = 0.0098A, which rounds up to 0.01A = 10mA. Because R1 is in series with the battery, all of the current flowing in the circuit will pass through R1. See worked answer for full calculator keystrokes.`,
    lookup: "See page(s) 19-20 of the Full Licence text book",
    syllabus: "2b.1",
    examStrategy: 1,
    examStrategyNotes:
      "The image takes a long time to load. Take care when estimating with 1/100, which is 0.01. Carefully does it.",
    examCalculation: 2,
    exam_NOT: false,
    tagged: true,
  },
  {
    source: "BBDL QUIZ WEEK02 Q15",
    question:
      "If supply is 100V RMS, how much power will be dissipated by the network shown in the diagram?",
    image: "images/bbdl-quizzes-week02-q15.png",
    options: ["10W", "20W", "50W", "100W"],
    correct: 2,
    explanation: `The main formula to use here is P=V2/R. We are given V, and because it is an RMS value, we can use it without any further work. R is not so straightforward; we have five series pairs all wired in parallel. As with all these kinds of questions we must work out the equivalent values to get them all into either a series, or a parallel circuit. In this case we can easily work out that each series pair gives 820 + 180 = 1000Ω. So, we have the equivalent of five 1kΩ resistors in parallel. With five resistors of the same value we simply divide the value by the number of resistors = 1000/5 = 200Ω. We can now work out the power using 100V RMS and 200Ω: $$P=\\frac{V^2}{R} = \\frac{100^2}{200} = 50W$$`,
    lookup: "See page(s) 19-20 of the Full Licence text book",
    syllabus: "2b.1",
    examStrategy: 1,
    examStrategyNotes: "Drill.",
    examCalculation: 1,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03 Q01",
    question:
      "If a capacitor in a tuned circuit has a wide tolerance, assuming the temperature is stable, what effect will the wide tolerance have on the resonant frequency?",
    image: "",
    options: [
      "It could cause it to be high",
      "It could cause it to be low",
      "It could cause it to be high or low",
      "It could cause it to drift",
    ],
    correct: 2,
    explanation: `Tolerance is the amount something can vary above or below its stated value. 'a' and 'b' are correct but not a complete answer. Changing the value of a capacitor will not cause a tuned circuit to drift, so not 'd'. It is worth noting that drift is the result of a change in temperature and Temperature effects and Tolerances are both mentioned in the Full Licence Manual.`,
    lookup: "See page(s) 29-30 of the Full Licence text book",
    syllabus: "2a.1",
    examStrategy: 3,
    examStrategyNotes: "Drift is the result of a change in temperature",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03 Q02",
    question: "In a capacitor, the capacitance increases:",
    image: "",
    options: [
      "With increased plate separation and increased plate size",
      "With increased plate separation and decreased plate size",
      "With decreased plate separation and increased plate size",
      "With decreased plate separation and decreased plate size",
    ],
    correct: 2,
    explanation: `The formula for capacitance is on the Formula Sheet, so don't guess; look it up. That said, the EX309 version is not 100% correct; the top line should read 'kA' not 'kA'. Plate separation distance 'd' is on the bottom line, so any increase in plate separation will reduce the capacitance, ruling out 'a' and 'b'. Surface area 'A' is on the top line so that will need to increase in order to increase capacitance, so that makes 'c' the correct answer. If you are not sure, try plugging in some simple numbers and see what happens if you increase or decrease distance and area; the numbers do not matter, it is the direction of change that is being tested. `,
    lookup: "See page(s) 21-22 of the Full Licence text book",
    syllabus: "2d.1",
    examStrategy: 2,
    examStrategyNotes: "Drill",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03 Q03",
    question:
      "Which of the following dielectrics would be MOST suitable for use in a VHF tuned circuit?",
    image: "",
    options: [
      "polythene",
      "polyester",
      "low-k ceramic",
      "tantalum electrolytic",
    ],
    correct: 2,
    explanation: `Electrolytics tend to be high values, so would not be found in VHF tuned circuits, ruling out 'd'. Synthetic materials tend to be very lossy at VHF, so 'a' and 'b' are probably not the best choices. Ceramic is good for most frequencies, but the textbook makes the point that low-k ceramics are good for RF use, making 'c' the one to go for.`,
    lookup: "See page(s) 22 of the Full Licence text book",
    syllabus: "2d.2",
    examStrategy: 2,
    examStrategyNotes: "This is just drilling.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03 Q04",
    question:
      "The voltage marking on the side of an electrolytic capacitor is:",
    image: "",
    options: [
      "The voltage required to bias it to allow current to flow",
      "The AC voltage it will regulate",
      "The voltage at which it can be used safely without breaking down",
      "The maximum DC voltage it will conduct ",
    ],
    correct: 2,
    explanation: `The markings on a capacitor show its value and safe working voltage, in other words, the voltage it will work at for ever and a day. 'a' is wrong because we do not bias capacitors. 'b' is wrong because whilst some capacitors smooth DC, they do not regulate. 'd' is wrong because capacitors do not conduct DC.`,
    lookup: "See page(s) 22 of the Full Licence text book",
    syllabus: "2d.3",
    examStrategy: 2,
    examStrategyNotes: "Straightforward.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03 Q05",
    question: "A capacitor can be used to:",
    image: "",
    options: [
      "block both alternating current (AC) and direct current (DC)",
      "allow both alternating current (AC) and direct current (DC) to pass through",
      "decouple alternating current (AC) and allow direct current (DC) to pass through",
      "decouple alternating current (AC) and block direct current (DC)",
    ],
    correct: 3,
    explanation: `A capacitor passes AC but blocks DC. When a capacitor couples AC to ground, it is known as decoupling. So, 'a', 'b' and 'c' are all wrong.'d'is the correct answer.`,
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2e.4",
    examStrategy: 2,
    examStrategyNotes: "",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03 Q06",
    question: "A 'back EMF' can be described as:",
    image: "",
    options: [
      "the terminal voltage of a battery when connected with reverse polarity",
      "the RF energy radiated from the rear of a Yagi antenna",
      "the electromotive force released from a charged capacitor",
      "the opposition to increasing current flow through an inductor",
    ],
    correct: 3,
    explanation: `Back EMF is a phenomenon specific to inductors (coils). The act of passing current through the inductors generates a magnetic field which in turn induces a current into the coil, but with reverse polarity, that electromotive force is the 'back EMF'. That makes 'd' the correct answer `,
    lookup: "See page(s) 23 of the Full Licence text book",
    syllabus: "2d.4",
    examStrategy: 2,
    examStrategyNotes: "Another straightforward one.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03 Q07",
    question: "An inductor can be used to:",
    image: "",
    options: [
      "Allow AC to pass and to block DC",
      "Allow RF signals to pass whilst attenuating AF signals",
      "Prevent RF signals from a semiconductor circuit entering its DC supply",
      "Prevent DC from passing from the supply rail to a semiconductor circuit",
    ],
    correct: 2,
    explanation: `'a' describes a capacitor, not an inductor, so not that one. 'b' is unlikely as the reactance of an inductor increases with frequency, so it will oppose RF current flow way more than AF current, so that is wrong. 'c' appears to describe the action of an RF choke in the DC supply to an amplifier, so that looks good. 'd' is wrong as the semiconductor device would not be very active without a DC supply. `,
    lookup: "See page(s) 27 of the Full Licence text book",
    syllabus: "2e.5",
    examStrategy: 2,
    examStrategyNotes:
      "What happens to the reactance of an inductor as frequency rises?",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03 Q08",
    question:
      "If an inductor of $5 \\mu H$ is connected in series with a 22 ohm resistor, and a DC supply connected, how long will it take for the maximum current to be flowing?",
    image: "",
    options: ["227 ns", "4.4 Ms", "1.136 µs", " 22 Ms"],
    correct: 2,
    explanation: `Maximum current will be flowing at t x 5 where t is the Time Constant. See the Formula sheet for the Time Constant formula t=L/R. So t= 5 µH/22 ohms = 0.227 µ seconds. Constant current will be at five times this which is 1.136 µ sec.`,
    lookup: "See page(s) 23-24 of the Full Licence text book",
    syllabus: "2d.7",
    examStrategy: 2,
    examStrategyNotes:
      "Drill... See EX309 for the formula. Worth a note on the reminder sheet about what happens at Time Constant values 1 and 5, for example.",
    examCalculation: 2,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03 Q09",
    question: "Which one of the following statements is correct?",
    image: "",
    options: [
      "Current leads the potential difference in a capacitor and lags the p.d. in an inductor",
      "Current leads the potential difference in a capacitor and leads the p.d. in an inductor",
      "Current lags the potential difference in a capacitor and leads the p.d. in an inductor",
      "Current lags the potential difference in a capacitor and lags the p.d. in an inductor",
    ],
    correct: 0,
    explanation: `First point to note is that Voltage is more correctly known as potential difference (p.d.). Secondly, remember the CIVIL memory aid? In a capacitor (C), current (I) leads potential difference (V), whereas V leads I in an inductor (L), making 'a' correct. PROBABLY BEST TO WRITE CIVIL OUT AND LABEL C AS CAPACITOR AND L AS INDUCTOR LIKE C-IV AND L-VI TO AVOID CONFUSION IN THE HEAT OF THE MOMENT`,
    lookup: "See page(s) 25 of the Full Licence text book",
    syllabus: "2e.3",
    examStrategy: 2,
    examStrategyNotes: "CIVIL",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03 Q10",
    question: "What is the capacitive reactance of a 1µF capacitor at 100 kHz?",
    image: "",
    options: ["0.62 Ohm", "1.59 Ohm", "3.14 Ohm", "6.28 Ohm"],
    correct: 1,
    explanation: `A fairly straightforward calculation using $X_C$ = 1/2πfC, with calculator keystrokes etc in the quiz worked answers.`,
    lookup: "See page(s) 25 of the Full Licence text book",
    syllabus: "2e.3",
    examStrategy: 2,
    examStrategyNotes: "See explanation",
    examCalculation: 2,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03 Q11",
    question:
      "If you have a 25μH inductor and you want to use it in a 30m tuned circuit, what value capacitor would you need?",
    image: "",
    options: ["10pF", "10nF", "100pF", "100nF"],
    correct: 0,
    explanation: `First point to note is that 30m = 300/30 = 10MHz. Then some manipulation is required (or you do the 'standard' calculation 4 times, with calculator sequence in quiz worked answers, and strike lucky on the first go). The formula needs to be squared up and rearranged to show that:.
        
        $C = \\frac{1}{4 \\pi^2 f^2 L }$`,
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2h.1",
    examStrategy: 3,
    examStrategyNotes: "Update this when you next answer this for real.",
    examCalculation: 3,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03 Q12",
    question:
      "A quartz crystal has two resonant frequencies. A crystal will only resonate on the frequency marked on its case if:",
    image: "",
    options: [
      "it is used in the series or parallel configuration it was designed for",
      "the case is NOT connected to an electrical ground point",
      "the case marking observes the correct polarity",
      "it is used in the correct crystal holder",
    ],
    correct: 0,
    explanation: `Crystals will only oscillate on their intended frequency when they are used as intended; in either series or parallel configuration. Some constructors say all crystal cases must be grounded, others say it matters not, so no consensus for 'b'. Crystals are not fussy which way round they are fitted, so polarity does not matter, making 'c' wrong, and not all crystals use holders, many are soldered directly on to the printed circuit board, so not 'd'.`,
    lookup: "See page(s) 29-30 of the Full Licence text book",
    syllabus: "2h.2",
    examStrategy: 2,
    examStrategyNotes: "Keep drilling on this one.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03 Q13",
    question:
      "What is the Q of a tuned circuit comprising a 5µH inductor with a DC resistance of 0.5Ω and a capacitor of 200pF at its resonant frequency?",
    image: "",
    options: ["5", "31.4", "157", "314"],
    correct: 3,
    explanation: `Use $f = \\frac{1}{2 \\pi \\sqrt{LC}}$ to find resonant frequency (=5MHz), then you can work out Q using the formula $Q = \\frac{2 \\pi f L}{R}$, only because the Inductor version is a bit easier than the Capacitor version. 
        <br><br> 
        
        $Q = \\frac{2 \\cdot \\pi \\cdot 5 \\cdot 10^6 \\cdot 5 \\cdot 10^{-6}}{0.5} = 314$ 
        
        <br><br>No key strokes provided this time; see if you can work it out for yourself, and if you get stuck, ask your tutor.`,
    lookup: "See page(s) 28 of the Full Licence text book",
    syllabus: "2h.4",
    tagged: true,
    examStrategy: 4,
    examStrategyNotes:
      "Drill. See EX309 for resonant frequency, and Q which is C1R8.",
    examCalculation: 3,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03 Q14",
    question:
      "What is the dynamic resistance of a parallel tuned circuit, comprising a 5µH inductor with a DC resistance of 0.5Ω and a capacitor of 200pF ?",
    image: "",
    options: ["0.5Ω", "500Ω", "50kΩ", "5MΩ"],
    correct: 2,
    explanation: `The formula to use is on the Formula Sheet, so look it up! You should find $R_D = \\frac{L}{CR}$ so a 'simple' matter of keying in the right numbers and the answer should be 50000 or 50kΩ. The book says it is not examined, but the meaning of dynamic resistance is in the syllabus, and the formula is on the EX309 formula sheet. Included here just in case! Calculator keys: 5 EXP -6 / (0.5 x 200 EXP -12)`,
    lookup: "See page(s) 28 of the Full Licence text book",
    syllabus: "2h.5",
    tagged: true,
    examStrategy: 4,
    examStrategyNotes:
      "PARALLEL TUNED CIRCUIT. EX309. Can be done with or without calculator. Good calculator practice.",
    examCalculation: 3,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03A Q01",
    question:
      "Referring to the circuit in the diagram, the voltmeter is indicating a potential difference of 50 volts across R3. Assuming the voltmeter has a very high internal resistance, what is the supply voltage, and what is the current through the ammeter?",
    image: "images/bbdl-quizzes-week03A-q01.png",
    options: ["100V & 0.5A", "100V & 2A", "50V & 0.5A", "50V & 2A"],
    correct: 1,
    explanation: `There are a number of steps to this one. First step is to recognise that R2 and R3 form a potential divider (two resistors in series). Because theyare the same resistance, the potential difference (voltage) will be the same across both. We are told there is 50V across R3 so the supply voltage must be twice that = 100V. That rules out 'c' and 'd'. Next step; we can see that R1 is in parallel with the potential divider formed by R2 and R3 (redraw it with both R2 and R3 vertical if you cannot see that). So, we have the equivalent of two 100Ω resistors in parallel. That means the total resistance is 50Ω. Final step is to work out the current through the ammeter. Armed with the knowledge that V = 100V and R = 50Ω, we can use good old Ohm's law to work out I = V/R = 2A, showing 'b' to be the correct answer.`,
    lookup: "See page(s) 20 of the Full Licence text book",
    syllabus: "2b.1",
    examStrategy: 3,
    examStrategyNotes: "",
    examCalculation: 3,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03A Q02",
    question:
      "Which of the following does NOT describe one of the formulas for 'Q'?",
    image: "",
    options: [
      "The resonant frequency of a tuned circuit divided by the <u>half voltage</u> bandwidth",
      "The voltage across a capacitor multiplied by the values of kA/d for the capacitor",
      "The centre frequency of a band pass filter, divided by its -3db bandwidth",
      "The reactance of an inductor divided by its resistance",
    ],
    correct: 0,
    explanation: `HINT: <ul><li>CONVERT EACH ANSWER INTO A FORMULA (RECOGNITION ON EX309 MORE LIKELY)</li><li>HIGHLIGHT USE OF 'NOT' ON SUMMARY SHEET</li></ul><hr>The first thing to note here is that is it a 'NOT' question, so there should be three 'true' statements and one 'not true' statement. <br><br>You should also remember that there are 3 versions of 'Q' in the Full syllabus, related to:<ul><li>'charge' in a capacitor</li><li>bandwidth in a tuned circuit</li><li>magnification factor</li></ul>The 'definitions' used in the question are not exactly as you might find them in EX309, and you need to join a few bits together. <br><br>'a' looks OK at first sight but bandwidth for Q is measured at the <b>half-power</b> point, not the <b>half-voltage</b> point, so 'a' is definitely NOT true. <br><br>'b' describes the formula $Q = V \\cdot C$ substituting the C = kA/d formula for C, which is entirely correct (EX309 C1R3 & C2R3). <br><br>'c' describes the formula $Q = \\frac{F_c}{F_u - F_l}$ but uses the -3dB point for the bandwidth, so is entirely correct (EX309 C2R8). <br><br>'d' is more straightforward and describes the formula $Q = \\frac{X_L}{R}$, which is also correct (EX309 C1R8). <br><br>So, 'a' is the only one that is NOT true and is therefore the correct answer. <br><br>See syllabus 2h.4 also.`,
    lookup: "See page(s) 21-22, 28 of the Full Licence text book",
    reference: "Fully explained in Week04 wrong question review",
    syllabus: "2d.1",
    tagged: true,
    examStrategy: 5,
    examStrategyNotes:
      "This is a classic type 5. Flag it and move on. Leave until the end. If time, have a fiddle. Then guess!",
    examCalculation: 0,
    exam_NOT: true,
  },
  {
    source: "BBDL QUIZ WEEK03A Q03",
    question:
      "Which of the following capacitors is likely to suffer the greatest loss of signal at high frequency?",
    image: "",
    options: ["ceramic", "polythene", "air-spaced", "silvered mica"],
    correct: 1,
    explanation: `As a rule of thumb, man-made dielectrics suffer greater losses
than 'natural' ones. Ceramic, air and mica are all formed from naturally occurring
materials, whereas polythene is definitely a man-made sheet material.`,
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2d.2",
    examStrategy: 3,
    examStrategyNotes: "",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03A Q04",
    question:
      "The voltage at which an electrolytic capacitor can be used safely without breaking down is sometimes referred to as:",
    image: "",
    options: [
      "The 'knee' voltage",
      "The forward bias voltage",
      "The safe working voltage",
      "The maximum back EMF that can be expected",
    ],
    correct: 2,
    explanation: `The markings on a capacitor show its capacitance value and safe working voltage, in other words, the voltage it will work at for ever and a day. 'a' is feature of a Zener diode, not a capacitor. 'b' is wrong because we do not bias capacitors, forward or reverse. 'd' is wrong because capacitors do not produce a back EMF, that is an inductor property.`,
    lookup: "See page(s) 22 of the Full Licence text book",
    syllabus: "2d.3",
    examStrategy: 2,
    examStrategyNotes: "Drill this one",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03A Q05",
    question:
      "What is the effect of changing the magnitude of the current flowing in a coil?",
    image: "",
    options: [
      "The self-inductance adds to the normally fixed inductance of the coil.",
      "The self-inductance causes a voltage to be induced between the ends of the coil.",
      "The self-inductance causes a current to be created in nearby coils of wire.",
      "The self-inductance subtracts from the normally fixed inductance of the coil.",
    ],
    correct: 1,
    explanation: `Self-inductance is defined as the induction of a voltage in a current-carrying wire when the current in the wire is itself changing. Hence the magnetic field created by a changing current in the circuit itself induces a voltage in the same circuit. The voltage is said to be self-induced. So 'a', 'c', 'd' are wrong leaving 'b' to be the correct answer.`,
    lookup: "See page(s) 23-24 of the Full Licence text book",
    syllabus: "2d.4",
    examStrategy: 2,
    examStrategyNotes:
      "Drill this. A change in current causes back EMF, and that is voltage!",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03A Q06",
    question:
      "If an inductor of 10μH is connected in series with a 12 ohm resistor to a 12 Volt supply. How long will it take for the Inductor current to reach about two thirds of the maximum current?",
    image: "",
    options: ["833 ns", "1.2 μs", "4.16 μs", "6 μs"],
    correct: 0,
    explanation: `When the inductor is connected to the 12 Volt supply the current will initially be limited by the back emf generated by the inductor self-inductance and the resistance of the resistor. <br><br>The current will then rise to a maximum current I= V/R = 12/12 = 1 Amp. <br><br>The Inductor current will reach about 66% of the maximum in one Time Constant = $$\\frac{L}{R} = \\frac{10 \\times 10^{-6}}{12} = 833ns$$ See Quiz Worked Answers for calculator script.`,
    lookup: "See page(s) 23-24 of the Full Licence text book",
    syllabus: "2d.7",
    examStrategy: 2,
    examStrategyNotes:
      "What percentage of the maximum current is reached after one Time Constant? See EX309 for the formula. Make an estimate... play with the powers of ten. See if any answers look close.",
    examCalculation: 2,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03A Q07",
    question:
      "If you need to remove an unwanted AC signal from a DC supply which of the following would help?",
    image: "",
    options: [
      "A capacitor in series with the DC supply.",
      "A capacitor in parallel with the DC supply.",
      "A low value resistor in series with the DC supply.",
      "A low value resistor in parallel with the DC supply.",
    ],
    correct: 1,
    explanation: `A capacitor in series with the supply would block DC so not 'a'. If we want to remove an unwanted AC signal from a DC supply, we need to decouple the supply, this is achieved with a suitable capacitor placed across the supply so 'b' looks good. A resistor in series or parallel would, on its own, have little effect on the AC signal but could have a significant effect on the DC supply, so not 'c' or 'd'.`,
    lookup: "See page(s) 26-27 of the Full Licence text book",
    syllabus: "2e.4",
    examStrategy: 2,
    examStrategyNotes: "",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03A Q08",
    question:
      "Switch mode power supplies often have one or more inductors as part of the DC power output circuit to:",
    image: "",
    options: [
      "Avoid mains hum affecting the DC output from the power supply",
      "Prevent feedback from the transmitter entering the power supply",
      "Provide DC decoupling (AC blocking) of the power supply's output.",
      "Maintain a noise-free DC power supply.",
    ],
    correct: 2,
    explanation: `Unlike a linear power supply the DC output may have some ultrasonic noise but is unlikely to carry mains hum so not 'a'. Feedback from the transmitter is not what the inductor is for so not 'b'. Although the inductor may help in reducing the RF noise on the output it is better described as AC blocking and decoupling of the output signal.`,
    lookup: "See page(s) 26-27 of the Full Licence text book",
    syllabus: "2e.5",
    examStrategy: 2,
    examStrategyNotes: "",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03A Q09",
    question: "What is the impedance of the circuit shown in the diagram?",
    image: "images/bbdl-quizzes-week03A-q09.png",
    options: [
      "There is almost zero impedance because it is a series circuit",
      "Z cannot be calculated, there is not enough information",
      "470 Ω",
      "475 Ω",
    ],
    correct: 1,
    explanation: `I went a bit haywire with this one. I wrote down the formula for impedance $$Z = \\sqrt{R^2 + {X_L}^2} = \\sqrt{400^2 + ({5 \\times 10^{-6}})^2} = 470 \\Omega$$ completely forgetting that $X_L$ is needed using $X_L =2 \\pi f L$ <br><br>So, because the frequency f is not supplied there can't be a calculation. Hence the tagging! <br><br><i>The danger is that it's easy taking R so there's a tendency to just take L.</i><br><br>`,
    lookup: "See page(s) 26-27 of the Full Licence text book",
    syllabus: "2e.6",
    tagged: true,
    examStrategy: 5,
    examStrategyNotes:
      "Can we use the value of L directly, or is there some calculation we have to make for REACTANCE that involves frequency and Inductance. And the frequency is...",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03A Q10",
    question:
      "What is the resonant frequency of a 100pF capacitor in parallel with a 100μH inductor?",
    image: "",
    options: ["1.59 MHz", "3.14 MHz", "6.28 MHz", "15 MHz"],
    correct: 0,
    explanation: `Another one for the calculator. See worked answers for script.`,
    lookup: "See page(s) 27-28 of the Full Licence text book",
    syllabus: "2h.1",
    examStrategy: 2,
    examStrategyNotes: "",
    examCalculation: 2,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03A Q11",
    question: "The circuit diagram shows:",
    image: "images/bbdl-quizzes-week03A-q11.png",
    options: [
      "The equivalent of a quartz crystal",
      "A band stop filter",
      "A mains EMC filter",
      "A Colpitts crystal oscillator",
    ],
    correct: 0,
    explanation: `The inclusion of a series and a parallel capacitor should alert you to the fact that this is no simple high or low pass filter, nor is it a band-stop filter. The mains filter has transformers and capacitors in a more balanced circuit and would need three conductors, so 'a' is really the only viable answer.`,
    lookup: "See page(s) 29 of the Full Licence text book",
    syllabus: "2h.2",
    examStrategy: 1,
    examStrategyNotes: "Need to review this in flashcards.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03A Q12",
    question:
      "Component ratings in tuned circuits, particularly those in transmitters and antenna matching units, need to be larger than you might expect because:",
    image: "",
    options: [
      "Impedance transformation always generates heat and lower rated components increase this effect",
      "Components with higher ratings are more likely to be accurate in value, so have lower losses due to any mis-matching",
      "The Q factor will multiply the voltages and currents present in the tuned circuits",
      "Tuned circuits will be less prone to drift if they are constructed from heavy duty components",
    ],
    correct: 2,
    explanation: `In all power circuits that contain tuned circuits there is a good chance of creating large circulating currents and applied voltages so 'c' is a good bet. Although impedance transformation does generate heat, lower rated components cannot make this worse so not 'a'. 'b' is simply wrong, components of higher ratings are not necessarily more accurate or lossy. Similarly, tuned circuits drift with temperature but in the power circuits found in transmitters and matching units this is not an issue so not 'd.'.`,
    lookup: "See page(s) 28-29 of the Full Licence text book",
    syllabus: "2h.4",
    examStrategy: 3,
    examStrategyNotes: "Drill",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03A Q13",
    question:
      "If a parallel tuned circuit is constructed from a 10pF capacitor, and a 100μH inductor that has a coil resistance of 1Ω, what is its Dynamic Resistance?",
    image: "",
    options: ["1 Ω", "1k Ω", "100k Ω", "10M Ω"],
    correct: 3,
    explanation: `For a parallel tuned circuit consisting of, a capacitor and an inductor (which will always have some resistance), the Dynamic Resistance can be calculated from $R_D = \\frac{L}{C \\cdot R}$`,
    lookup: "See page(s) 27-28 of the Full Licence text book",
    syllabus: "2h.5",
    examStrategy: 4,
    examStrategyNotes:
      "Dynamic Resistance. See EX309. No calculator required, except for practice.",
    examCalculation: 2,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03A Q14",
    question:
      "If you hear a station say that they are 'listening 5 to 10 up' it means:",
    image: "",
    options: [
      "They are listening for stations using 5 or 10MHz for their up-link",
      "The repeater they are using has an off-set of between 5 and 10 kilohertz",
      "They are looking to work stations with the numbers between 5 and 10 in their callsigns",
      "They will only respond to stations who are transmitting between 5 and 10 kilohertz higher up the band",
    ],
    correct: 3,
    explanation: `This is known as 'working split' and is often used by DX stations to manage pile-ups when many stations call at the same time. Listening 5 or 10kHz up the band spreads out the masses calling. 'a' is referring to satellite working but there is no satellite allocation on either of those bands (check EX309 schedule 1), so that one is wrong. Similarly, repeaters use offsets of much more than a few kHz, so not that one. 'c' is another way of working through a pile-up but the DX would say something like 'only stations with 5' in the call please'.`,
    lookup: "See page(s) 11 of the Full Licence text book",
    syllabus: "7a.1",
    examStrategy: 2,
    examStrategyNotes: "Nice and easy.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03A Q15",
    question:
      "Which of the following frequencies should be used for digital mode contacts?",
    image: "",
    options: ["472.5 kHz", "473.5 kHz", "474.5 kHz", "475.5 kHz"],
    correct: 3,
    explanation: `This is a look up question from the Band Plan provided. IARU Region-1 does not have a formal band plan for this allocation, but has a usage recommendation: 472-475 kHz CW-only 200Hz max BW, 475-479 kHz - CW & Digimodes. 'd' is the only answer that falls into the CW & Digimodes section. You should be looking this up in the 600m Bandplan, Note 1 refers. `,
    lookup: "See page(s) 11 of the Full Licence text book",
    syllabus: "7b.1",
    examStrategy: 3,
    examStrategyNotes: "",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03A Q16",
    question:
      "The holder of a HAREC certificate issued by another country is NOT entitled to:",
    image: "",
    options: [
      "Operate in the UK for up to 3 months without prior authorisation",
      "Apply for a UK Full Licence if they move home to live in the Isle of Man",
      "Apply for a UK Foundation Licence if they move home to live in England",
      "Operate, with the permission of the captain, from a UK registered aircraft using bands listed in the UK Licence schedule as permitting use whilst airborne",
    ],
    correct: 2,
    explanation: `'a', 'b' and 'd' are all permitted under the UK Licence rules, so a foreign amateur holding a HAREC certificate would be allowed to do all those things; the host country rules apply. 'c' would NOT be allowed as the CEPT agreement only applies to certain licences (e.g. the Full Licence in the UK). `,
    lookup: "See page(s) 7-8 of the Full Licence text book",
    syllabus: "7h.1",
    examStrategy: 2,
    examStrategyNotes: "",
    examCalculation: 0,
    exam_NOT: true,
  },
  {
    source: "BBDL QUIZ WEEK03A Q17",
    question:
      "Which of the following electronic devices are normally operated using potential differences that are much higher than the domestic mains supply?",
    image: "",
    options: [
      "Radio frequency power field effect transistors, or FETs",
      "Valves, also known as thermionic vacuum tubes",
      "Varactor diodes, also known as variable capacitance diodes",
      "Bipolar Junction Transistors, or BJTs",
    ],
    correct: 1,
    explanation: ` Whilst there are some valves that operate at 12V, most have over 300V on their anodes and power supplies. It is not uncommon to have over 1kV potential difference present. The semi-conductors that feature in all the other answers are rarely operated above 50V in amateur radio circuits.`,
    lookup: "See page(s) 13 of the Full Licence text book",
    syllabus: "8a.1",
    examStrategy: 2,
    examStrategyNotes: "",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03A Q18",
    question:
      "Under severe fault conditions, Protective Multiple Earthing systems can cause:",
    image: "",
    options: [
      "Reduced immunity to EMC breakthrough",
      "Fatal electric shocks and/or fires in amateur radio stations",
      "Harmonic radiation from high power linear amplifiers",
      "RF burns when in contact with metal objects linked to transmitter circuits",
    ],
    correct: 1,
    explanation: `'a', 'c' and 'd' can be issues in amateur stations but not related to PME. PME effectively links numerous properties together so under fault conditions extremely high currents can pass through the amateur station's RF earth with risks of fire and shocks. NOTE. If you are in any doubt regarding PME, consult a qualified person for advice. `,
    lookup: "See page(s) 17-18 of the Full Licence text book",
    syllabus: "8a.2",
    examStrategy: 1,
    examStrategyNotes: "Drill",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03A Q19",
    question:
      "If you must carry out work inside a piece of live mains powered equipment you should:",
    image: "",
    options: [
      "Ensure that you are wearing an earthed wrist strap.",
      "Ensure that you are standing on a conductive mat that is connected to a good earthing point.",
      "Work carefully with only one hand inside the equipment whilst keeping your other hand in your pocket.",
      "Remove all other personnel from the room.",
    ],
    correct: 2,
    explanation: `Both 'a' and 'b' would provide a good earth and therefore a low resistance path for the mains to pass through your body, which is not a good thing! 'd' would mean there was no-one there to assist, should you come into contact with the mains electricity, so another bad choice. 'c' minimises the risk of having a low resistance path across your heart and therefore provides some degree of protection.`,
    lookup: "See page(s) 13 of the Full Licence text book",
    syllabus: "8a.6",
    examStrategy: 1,
    examStrategyNotes:
      "You don't want to put your heart on the path between live electricity and Earth",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03A Q20",
    question:
      "It is never advisable to exceed the EMF guidelines set by ICNIRP, but when is it particularly important to pay attention to this?",
    image: "",
    options: [
      "When operating on frequencies below 500kHz",
      "When operating from a lighthouse or lightship at sea",
      "When operating in a location that is open to the public",
      "When operating via a satellite that is directly overhead",
    ],
    correct: 2,
    explanation: `'a' is wrong because frequencies below 500kHz are exempt from EMF risk assessment. 'b' is location where you might need to take care, but only if the general public are likely to be present, so it is only partially correct. 'c' is correct in all circumstances. 'd' is unlikely to be an issue as it is highly unlikely that there will be any members of the general public between your transmitting antenna and the satellite directly overhead, it is another one that could be correct, but not in all circumstances.`,
    lookup: "See page(s) 16 of the Full Licence text book",
    syllabus: "8d.1",
    examStrategy: 1,
    examStrategyNotes: "Drill",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03A Q21",
    question:
      "Thunder clouds can carry heavy static charges. For a lightning strike to occur there needs to be:",
    image: "",
    options: [
      "Copper lightning rods that provide a high resistance path to earth",
      "An appropriate level of ionisation in the D layer to enable LF propagation",
      "Sufficient rain or hail in the atmosphere to provide a direct connection across the opposing poles of the potential difference",
      "Air that is sufficiently ionised so as to provide a low resistance path to earth",
    ],
    correct: 3,
    explanation: ` 'a' is incorrect as a high resistance path is not conducive to lightning. 'b' is incorrect as the ionosphere has little to do with lightning. Even a heavy rain/hail shower will rarely provide a direct connection between the cloud and earth, so not 'c'. 'd' describes the precise requirements for a lightning strike to occur. `,
    lookup: "See page(s) 16-17 of the Full Licence text book",
    syllabus: "8e.1",
    examStrategy: 1,
    examStrategyNotes: "Drill",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03A Q22",
    question:
      "You are intending to operate from some temporary premises using the same power supply, transmitter, power amplifier and aerial system combination as you use at home, but with the aerial system closer to the ground. Which of the following would be the most significant change in your safety risk assessment?",
    image: "",
    options: [
      "Increased risk of electric shock due to damp ground",
      "Increased risk of tripping over trailing mains cables",
      "Increased risk of contact with overhead power lines",
      "Increased risk of exposure to non-ionising electromagnetic radiation",
    ],
    correct: 3,
    explanation: `There is no mention of damp ground in the question so 'a' looks unlikely. Using the same transmitter and amplifier suggests you are not using batteries, so it may be an issue but there is no mention of long extension leads or the location of the mains sockets, so 'b' is not 100%. Power lines are also not mentioned in the question, so nothing to be sure 'c' is the right answer. However, if you have reduced the height of the aerial, it is likely that the RF exposure will be higher when transmitting, so 'd' looks like the best answer.  There are other references to EMF assessments, but this question is focused on temporary premises and the increased risk of excessive EMF exposures.`,
    lookup: "See page(s) 14 of the Full Licence text book",
    syllabus: "8f.4",
    examStrategy: 1,
    examStrategyNotes: "Drill Drill Drill!",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03A Q23",
    question:
      "Many radio amateurs operate transceivers from their vehicles. What additional safety risks can be introduced that would not be present when operating from a fixed location?",
    image: "",
    options: [
      "Risk of fire from a malfunction causing excess current to flow in the transceiver DC power lead",
      "Risk of fatal electric shock due to coming into contact with the radio power supply",
      "Risk of hearing damage from using headphones to monitor FM channels at high AF gain settings",
      "Risk of long flexible vertical antennas striking pedestrians",
    ],
    correct: 3,
    explanation: `Risks 'a', 'b' and 'c' are all present in a fixed location and 'b' would be unlikely in a vehicle unless there was some kind of mobile mains voltage generator in use. 'd' is unlikely to be an issue in a fixed location as home-based antennas tend to be in high locations, away from pedestrian routes, whereas those mounted on vehicles can whip back and forth as the vehicle moves, stops and starts.`,
    lookup: "See page(s) 15 of the Full Licence text book",
    syllabus: "8f.5",
    tagged: true,
    examStrategy: 3,
    examStrategyNotes: "Update this when you answer this next.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03A Q24",
    question: "Carrying out a risk assessment involves:",
    image: "",
    options: [
      "Preventing hazards from occurring",
      "Removing every element of risk from an activity",
      "Recording all foreseeable hazards and then removing them",
      "Identifying things with the potential to cause harm (the hazards) and taking steps to mitigate the risks they pose",
    ],
    correct: 3,
    explanation: `We can never prevent all hazards, so not 'a'. Similarly, we cannot remove every element of risk; there is always a risk of something happening, so not 'b'. 'c' is a bit like 'a': we cannot remove every hazard (e.g. RF radiation will always be present), so not 'c'. 'd' looks best, identify what could cause harm and manage it.`,
    lookup: "See page(s) 14 of the Full Licence text book",
    syllabus: "8f.6",
    examStrategy: 1,
    examStrategyNotes: "",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03A Q25",
    question: "When operating a petrol engine powered generator, you should:",
    image: "",
    options: [
      "Keep all fuel in a locked metal cabinet located at least 500m away",
      "Keep all fuel behind a non-flammable barrier located at least 50m away",
      "Only refuel the generator in accordance with the generator operating manual",
      "Only refuel the generator from plastic fuel containers that are earthed to the generator chassis",
    ],
    correct: 2,
    explanation: `Options 'a', and 'b' are all extreme precautions that may be totally over the top, in most circumstances. 'd' does not really make sense; earthing plastic fuel containers? 'c' is exactly what you should do, so that is the one to select. `,
    lookup: "See page(s) 14-15 of the Full Licence text book",
    syllabus: "8f.7",
    examStrategy: 1,
    examStrategyNotes: "",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK03A Q26",
    question:
      "If a resistor in a transmitter power amplifier is replaced with a similar device of unknown tolerance, what is the most likely impact of the change?",
    image: "",
    options: [
      "The output power could be too high, leading to a breach in licence conditions",
      "The output power could be lower, leading to poorer performance",
      "The output power could be higher or lower and would require thorough testing",
      "The output power could contain more harmonics and become unstable",
    ],
    correct: 2,
    explanation: ` If a component in a piece of equipment is replaced with one of unknown tolerance the real value of that component can be very different from the expected value. This can have major effects on the performance of the equipment. Although 'a', 'b', and 'd' might, in part, be correct, the important aspect here is that thorough testing will be required to confirm the correct performance of the equipment. `,
    lookup: "See page(s) 33-34 of the Full Licence text book",
    syllabus: "2a.1",
    examStrategy: 2,
    examStrategyNotes: "Drill",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK04 Q01",
    question:
      "The property that allows a transformer to pass energy from one circuit to another is known as:",
    image: "",
    options: [
      "Stray Capacitance",
      "Mutual Inductance",
      "Inductive Reactance",
      "Capacitive Reactance",
    ],
    correct: 1,
    explanation: `A 'classic' isolating transformer consists of two inductors wound on a common former. Because they share the same former, the magnetic field generated by one, induces a current in the other. They are therefore magnetically coupled and are said to exhibit 'mutual inductance'. 'a' is wrong because whilst energy can be transferred by stay capacitance, that is not reliable and is not used in transformers. 'c' is wrong because whilst each winding of a transformer will exhibit inductive reactance, that is not the property that allows the transformer action to take place. 'd' is wrong because capacitive reactance has little to do with the operation of a transformer.`,
    lookup: "See page(s) 28-29 of the Full Licence text book",
    syllabus: "2g.1",
    examStrategy: 1,
    examStrategyNotes: "",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK04 Q02",
    question:
      "If you need to transform an impedance from 50 to 1250 Ohms using a tuned transformer where the tuned circuit inductor primary has 50 turns on it, how many turns would be required on the secondary?",
    image: "",
    options: ["10", "25", "250", "1250"],
    correct: 2,
    explanation: ` Impedance ratio is 1:25 and we know the impedance ratio is the square of the turns ratio, so turns ratio must be 1:5 (the square root of the impedance ratio), stepping up from 50 turns would therefore need 250 turns on the secondary, making 'c' the correct answer.`,
    lookup: "See page(s) 28-29 of the Full Licence text book",
    syllabus: "2g.1",
    examStrategy: 3,
    examStrategyNotes: "",
    examCalculation: 3,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK04 Q03",
    question:
      "If a mains transformer has 2000 turns on its primary and 150 on its secondary, the output will be:",
    image: "",
    options: ["17.25V", "150V", "2000V", "3066V"],
    correct: 0,
    explanation: ` You can use the formula and calculator if you wish, but the turns ratio is about 13:1 (2000/150) and with fewer turns on the secondary the output will therefore be about 230/13 or about 17.5V, making 'a' the one to go for.  Using approximate values like this may feel a bit inaccurate, but for most calculations it will be good enough and removes any complex formula manipulation and/or calculator rage! `,
    lookup: "See page(s) 28-29 of the Full Licence text book",
    syllabus: "2g.1",
    examStrategy: 2,
    examStrategyNotes: " Fairly obvious how to go about this. No twists.",
    examCalculation: 1,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK04 Q04",
    question:
      "Which of the following statements about transformers is correct?",
    image: "",
    options: [
      "Losses in core materials can cause changes to the transformation ratio",
      "Losses in core materials can cause heating which adversely affects power handling for a given size of transformer",
      "Core materials have no effect on losses but the choice of material will affect the physical size of any given transformer",
      "Core materials have no effect on output voltage and the choice of material is determined entirely by the physical size of any given transformer",
    ],
    correct: 1,
    explanation: `Losses cause heating, but will not cause a change in the transformation ratio, so 'a' is wrong. Because of the heating, the amount of power a transformer can handle is limited, so 'b' looks good. 'c' is wrong because the choice of core material will affect the losses; some materials are more lossy than others. 'd' is wrong because whilst the choice of materials will impact the physical size of the transformer, the physical size does not determine the choice of material. That makes 'b' the only credible 'correct' statement. `,
    lookup: "See page(s) 28-29 of the Full Licence text book",
    syllabus: "2g.1",
    examStrategy: 1,
    examStrategyNotes: "Stay calm!",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK04 Q05",
    question:
      "Which one of the following statements about Zener diodes is NOT true?",
    image: "",
    options: [
      "Zener diodes are always used in the forward bias mode.",
      "The current through a Zener should always be limited, e.g. by series resistors.",
      "Zener diodes are used as voltage references",
      "Applying the breakdown voltage to a Zener diode is non-destructive.",
    ],
    correct: 0,
    explanation: `A good tip for a 'not' question is to read the answers and put a wee tick against those you think are true statements; the one without a tick is the correct (not true) answer. In this case, 'a' looks suspect as any diode in forward bias mode will merely conduct current. 'b' is definitely true; a lack of a current limiting series resistor is a sure-fire recipe for burned out diodes. 'c' is definitely true as voltage regulation is the main use for Zener diodes. 'd' is also true or every Zener would fail every time we used it. So 'a' is the only correct (not true) option. See also 2j.2`,
    lookup: "See page(s) 32 of the Full Licence text book",
    syllabus: "2i.1",
    examStrategy: 3,
    examStrategyNotes: "Just need to drill this one.",
    examCalculation: 0,
    exam_NOT: true,
  },
  {
    source: "BBDL QUIZ WEEK04 Q06",
    question:
      "In this circuit of a transistor amplifier, capacitor C3 is included to:",
    image: "images/bbdl-quizzes-week04-q06.png",
    options: [
      "Hold the AC voltage at its peak value during negative cycles",
      "Ensure that there is no AC signal across R4",
      "Couple the signal to the next stage",
      "Prevent any DC flowing through R4",
    ],
    correct: 1,
    explanation: `C3 is known as a bypass capacitor and is included to ensure that there is no AC signal across the emitter resistor R4. C3 effectively shorts out R4 from an AC perspective but, because the capacitor blocks DC, the DC flows through R4, maintaining the DC biasing. <br>Some fairly deep biasing knowledge/understanding required, yes, but could you have got to the answer by ruling out the wrong answers? 'a' is certainly a capacitor function; for example, the reservoir capacitor in a linear power supply, but is not appropriate here. 'c' is not correct as C3 is connected to ground and C1 and C2 are the coupling (input and output) capacitors. Capacitors can block DC for sure, but 'd' would only be correct if C3 were in series with R4 but it is in parallel, so DC will flow through the resistor, making 'd' wrong. See https://www.electronics-tutorials.ws/amplifier/amp_2.html and syllabus 2e.4`,
    lookup: "See page(s) 34 of the Full Licence text book",
    syllabus: "2i.3",
    examStrategy: 4,
    examStrategyNotes:
      "Just keep drilling this. Do we need a way to identify drilling?",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK04 Q07",
    question: "The diagram shows:",
    image: "images/bbdl-quizzes-week04-q07.png",
    options: [
      "A forward biased bipolar transistor",
      "A reverse biased bipolar transistor",
      "A reverse biased field effect transistor",
      "A forward biased field effect transistor",
    ],
    correct: 2,
    explanation: `The labels on the diagram are quite helpful. First off, the 'd, g, s' connections are the drain, gate and source; making this a Field Effect Transistor, ruling out 'a' and 'b', but is it forward or reverse biased? 'c' or 'd'? The 'P' material that forms the gate is connected to a negative potential difference, so the positive charges will be attracted to the negative terminal and away from the depletion layer making it reverse biased. Therefore 'c' is the correct answer. `,
    lookup: "See page(s) 36-37 of the Full Licence text book",
    syllabus: "2i.3",
    examStrategy: 4,
    examStrategyNotes:
      "Check if there are any flashcards or label diagrams to practice this on.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK04 Q08",
    question:
      "In this list, which class of amplifier is least likely to cause distortion and generate harmonics?",
    image: "",
    options: ["A", "AB", "B", "C"],
    correct: 0,
    explanation: ` Class A amplifiers are renowned for their purity, so 'a' is the correct answer.`,
    lookup: "See page(s) 35-36 of the Full Licence text book",
    syllabus: "2i.4",
    examStrategy: 1,
    examStrategyNotes: "A all the way.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK04 Q09",
    question: "The amplifier circuit shown is:",
    image: "images/bbdl-quizzes-week04-q09.png",
    options: [
      "a common base amplifier",
      "a common emitter amplifier",
      "a common collector amplifier",
      "none of the above",
    ],
    correct: 2,
    explanation: `The input is connected to the base, and the output to the emitter, so neither of those are common. That must make this a common collector amplifier, also known as an emitter follower. 'c' is therefore the correct answer`,
    lookup: "See page(s) 34-35 of the Full Licence text book",
    syllabus: "2i.4",
    examStrategy: 5,
    examStrategyNotes: `
      Using CBE for the transistor connectors, from the top down, 
      there's an output from the Emitter, and an input to the Base.
      Since we need 4 connections to get from input to output the 
      collector must be common.
    `,
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK04 Q10",
    question: "The amplifier circuit shown:",
    image: "images/bbdl-quizzes-week04-q10.png",
    options: [
      "has high input impedance and high output impedance",
      "has a high voltage gain",
      "has a voltage gain of less than unity",
      "inverts the input signal",
    ],
    correct: 2,
    explanation: ` 'a' is wrong as none of the amplifiers covered has both high input and output impedances; remember if you put them in a chain with the common pins in alphabetical order, the impedance goes very roughly; LOW-(b)-HIGH-(c)-LOW-(e)-HIGH. 'd' is definitely wrong as only the common emitter inverts the signal. So, does it have high or low voltage gain? The common collector, or emitter follower, is often used as a buffer amplifier more because of its isolation properties than the voltage gain, which is less than 1, making 'c' the correct answer. `,
    lookup: "See page(s) 34-35 of the Full Licence text book",
    syllabus: "2i.4",
    examStrategy: 4,
    examStrategyNotes:
      "This is not trivial but refer to the flashcards summary.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK04 Q11",
    question:
      "The circuit diagram shows part of a power supply. The waveforms present at the input and output of Q1 are shown in the inserts. Device Q1 is therefore a:",
    image: "images/bbdl-quizzes-week04-q11.png",
    options: [
      "step-down transformer",
      "bridge rectifier",
      "reservoir capacitor",
      "voltage regulator",
    ],
    correct: 3,
    explanation: `The left hand insert shows a DC signal with some ripple. The right hand insert shows no ripple at all. That would suggest that Q1 is a voltage regulator, making 'd' the correct answer. It should be noted that the output voltage will be a little less than the input to ensure that a ripple-free output is assured. `,
    lookup: "See page(s) 37-38 of the Full Licence text book",
    syllabus: "2j.2",
    examStrategy: 2,
    examStrategyNotes: "Drilling needed.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK04 Q12",
    question:
      "Looking at the diagram, which of the following statements is true?",
    image: "images/bbdl-quizzes-week04-q12.png",
    options: [
      "The output is being regulated by the switching action of Tr1 and Tr2",
      "The output is being regulated by an integrated circuit voltage regulator",
      "Tr1 is passing the full output current and D1 is acting as a voltage reference",
      "Tr2 is passing the full output current and D1 is set to match the output impedance",
    ],
    correct: 2,
    explanation: `The diagram shows a discrete component voltage regulator circuit, which rules out 'b'. 'a' is wrong because the transistors are not being used as switches; this type of regulator is found in linear power supplies. 'c' sounds good as Tr1 is wired to pass current from the input to the output and D1 is connected to Tr2 to allow a comparison between the output and the voltage set by the Zener action. 'd' is wrong because Tr2 does not pass the whole of the current and D1 has nothing to do with impedance matching.`,
    lookup: "See page(s) 37-38 of the Full Licence text book",
    syllabus: "2j.2",
    examStrategy: 4,
    examStrategyNotes: "This is not trivial",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK04 Q13",
    question:
      "In a half-wave rectifier, the PIV of the diode must be rated much higher than the peak voltage supplied by the secondary winding because:",
    image: "",
    options: [
      "AC voltage is quoted in RMS",
      "The diode conducts on both positive and negative parts of the cycle",
      "The peak inverse voltage across the diode will be around twice the peak voltage supplied by the secondary winding due to the stored charge in the reservoir capacitor",
      "The inductor in the voltage regulator will induce a back EMF",
    ],
    correct: 2,
    explanation: `One of those 'which is the best answer?' questions. 'a' is true, but not the full story, 'b' is just wrong, 'c' is more correct than 'a' as it includes the negative peak/reservoir capacitor consideration, 'd' may be true but has little to do with selecting PIV. Looks like 'c' is the best answer.`,
    lookup: "See page(s) 31-32 of the Full Licence text book",
    syllabus: "2j.3",
    examStrategy: 4,
    examStrategyNotes: "Not sure where this is covered.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK04 Q14",
    question:
      "By operating at frequency higher than the 50Hz mains, switch mode power supplies:",
    image: "",
    options: [
      "Can use smaller components and be much lighter",
      "Prevent any of the EMC problems associated with linear power supply units",
      "Provide much lower efficiencies but are lighter and smaller",
      "Are able to step up or step down voltages",
    ],
    correct: 0,
    explanation: `Most switch mode power supplies operate at switching frequencies of many kHz. This means that the electronics are more like radio circuits than mains power supply circuits; making them much smaller and lighter. Unfortunately, due to their switching nature, switch mode power supplies can be a source of EMC problems when compared with linear supplies 'b' is totally wrong. 'c' is wrong because whilst being lighter and physically smaller, switch mode power supplies are moreefficient than linear supplies, not less efficient. 'd' is not correct, because step up and step-down voltage is common practice in both linear and switch mode power supplies, the higher frequency does not affect that property. `,
    lookup: "See page(s) 38 of the Full Licence text book",
    syllabus: "2j.4",
    examStrategy: 1,
    examStrategyNotes: "Drill",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK04 Q15",
    question:
      "In the block diagram, arrange the labels 1 to 3 in the correct order, left to right (i.e. from the input side to the output side) to make up a switch mode power supply.<br>1. Rectifier <br>2. Transformer <br>3. Switch / Chopper",
    image: "images/bbdl-quizzes-week04-q15.png",
    options: ["1, 2, 3", "1, 3, 2", "2, 1, 3", "3, 2, 1"],
    correct: 3,
    explanation: ` The flow is from mains filter, the AC is rectified to a high voltage DC, the switch, or chopper, creates pulses at a higher frequency than the mains, the pulses are then transformed to the voltage level required. A second rectifier creates the DC output which is filtered before use. A sample of the output voltage is fed back to the switch via a control circuit which regulates the output.`,
    lookup: "See page(s) 38 (Fig 5.32) of the Full Licence text book",
    syllabus: "2j.4",
    examStrategy: 3,
    examStrategyNotes: "Symmetry is your friend here.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK05 Q01",
    question:
      "In order for an oscillator to maintain its oscillation it must be provided with:",
    image: "",
    options: [
      "A good quality coil, tightly wound on a grooved former",
      "Some feedback from its output to its input",
      "Short wiring between components",
      "A stable voltage supply",
    ],
    correct: 1,
    explanation: `Feedback is essential to maintain oscillation. 'a', 'c', and 'd' are all features of agood stable oscillator but none of those help to maintain oscillation.`,
    lookup: "See page(s) 42 of the Full Licence text book",
    syllabus: "2i.5",
    examStrategy: 1,
    examStrategyNotes: "Drill this one.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK05 Q02",
    question: "The term Modulation Index refers to:",
    image: "",
    options: [
      "The bandwidth of an AM signal",
      "The amplitude of an AM signal",
      "The ratio of the peak deviation of an FM signal to the maximum audio frequency",
      "The ratio of the AF amplitude to the peak deviation of an FM signal",
    ],
    correct: 2,
    explanation: `Firstly, always link the term Modulation Index to Frequency Modulation (FM), that eliminates 'a', and 'b'. A look at the words in 'd', we are considering AF (audio frequency) amplitude and its effect on the peak deviation. This sounds possible but it is not right. However, 'the ratio of the peak deviation of an FM signal to the maximum audio frequency' is the definition for Modulation Index.`,
    lookup: "See page(s) 43 of the Full Licence text book",
    syllabus: "3a.2",
    examStrategy: 3,
    examStrategyNotes:
      "Think of Modulation Index for WBFM (5) and NBFM (0.83), and Maximum or Peak Deviation, divided by Maximum Audio Frequency,",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK05 Q03",
    question:
      "You cannot multiply a 14.430MHz SSB signal up to the 2 metre band because:",
    image: "",
    options: [
      "It will result in a bandwidth of around 25 to 30 kHz.",
      "You cannot multiply frequencies by 10",
      "You cannot use SSB on the 2 metre band.",
      "You are not allowed to generate signals outside the amateur band.",
    ],
    correct: 0,
    explanation: `Multiplying a 14.430MHz signal by ten will give us a signal in the 2 metre band (14.430 x 10 = 144.300). So why should we not do it? Multiplying the frequency will also multiply the bandwidth, so a 2.5kHz SSB signal will be 25kHz wide if multiplied by 10, a 3kHz wide signal will be 30kHz wide, so 'a' looks like a good reason for not doing so. Whilst it is not easy to multiply a signal by 10 in a single amplifier stage, a doubler stage (2x) followed by a quintupler stage (5x) is technically possible, so not 'b'. 'c' is just plain wrong (most 2m contests use SSB) and 'd' is also incorrect because whilst we cannot transmit signals outside the amateur bands, we often generate signals on frequencies outside the amateur bands for use within radio equipment (e.g. a BFO in a receiver or a VFO in a mixer arrangement). So 'a' it is. `,
    lookup: "See page(s) 46-47 of the Full Licence text book",
    syllabus: "3b.1",
    examStrategy: 2,
    examStrategyNotes: "Check for flashcards.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK05 Q04",
    question: "It is important to minimise drift because:",
    image: "",
    options: [
      "Drift can cause harmonics to develop",
      "Drift can result in out-of-band transmissions",
      "Drift can cause spurious emissions",
      "All of the above",
    ],
    correct: 1,
    explanation: `A and C are incorrect, making D also wrong. That only leaves B for the correct answer, and extreme drift can indeed take your transmissions out of the amateur band, especially if you are operating near the band edge.`,
    lookup: "See page(s) 42, 51 of the Full Licence text book",
    syllabus: "3c.1",
    examStrategy: 3,
    examStrategyNotes: "This should be well drilled.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK05 Q05",
    question:
      "The purity of the signals produced by a synthesiser can be improved by:",
    image: "",
    options: [
      "Employing sturdy construction techniques.",
      "Using a well-regulated power supply for the synthesiser",
      "Housing the synthesiser in a temperature controlled enclosure.",
      "Increasing the number of bits in the digital representation of the signal.",
    ],
    correct: 3,
    explanation: `Answers 'a', 'b' and 'c' are good for minimising drift in a traditional VFO based on a tuned circuit. The only viable option for a digital oscillator is 'd'. More digital bits will produce smaller steps in the digital representation of the signal. `,
    lookup: "See page(s) 39-40, 45 of the Full Licence text book",
    syllabus: "3c.3",
    examStrategy: 2,
    examStrategyNotes: "Pretty straightforward really.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK05 Q06",
    question: "The block diagram shown is a",
    image: "images/bbdl-quizzes-week05-dds.png",
    options: [
      "Software Defined Radio (SDR)",
      "Digital Frequency Meter (DFM)",
      "Direct Digital Synthesiser (DDS)",
      "Phase Locked Loop (PLL) synthesiser",
    ],
    correct: 2,
    explanation: `Bit of detective work required here! Looking at the blocks we can see a “clock”, so it sounds digital, a “look up table” so it sounds more digital and aren't “look up tables” used to digitally generate a sine wave? Also, a Digital to Analogue Convertor is the device that creates the sinewave from the digital data. So, have we got a Software defined radio? No this is just the block diagram of a frequency generator. So not 'a'. Is this going to measure frequency in a meter? No there is no meter face or numeric display so not 'b'. Is this a Phase Locked Loop type of synthesiser? No, there is no feedback loop, dividers or comparator. So, that suggests it must be a DDS, and it is. `,
    lookup: "See page(s) 45 of the Full Licence text book",
    syllabus: "3c.3",
    examStrategy: 1,
    examStrategyNotes: "",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK05 Q07",
    question:
      "A frequency multiplier stage must generate harmonics. This is usually through use of a:",
    image: "",
    options: [
      "balanced modulator",
      "class A amplifier",
      "class C amplifier",
      "crystal oscillator",
    ],
    correct: 2,
    explanation: `The class C amplifier is the one known to be rich in harmonics so ideally suited to multiplying frequencies – answer 'c' is the correct option.`,
    lookup: "See page(s) 46 of the Full Licence text book",
    syllabus: "3d.1",
    examStrategy: 3,
    examStrategyNotes:
      "A Class C amplifier is great for generating the harmonics needed for a FREQUENCY MULTIPLIER.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK05 Q08",
    question:
      "Which of the following statements about transmitter architecture is TRUE?",
    image: "",
    options: [
      "Mixers and multipliers can be used for FM and SSB modulated signals",
      "Multipliers cannot be used for SSB modulated signals",
      "Mixers can only be used for FM modulated signals",
      "Mixers can only be used for SSB modulated signals",
    ],
    correct: 1,
    explanation: `Mixers can be used for any type of modulated signal so 'c' and 'd' are not true. Multipliers cannot be used for AM or SSB modulated signals as they would have their bandwidth increased and you cannot modulate voice with a very narrow bandwidth that could be multiplied, so 'a' is not true but 'b' is true.`,
    lookup: "See page(s) 46-47 of the Full Licence text book",
    syllabus: "3b.1",
    examStrategy: 1,
    examStrategyNotes: "Drill",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK05 Q09",
    question: "The bandwidth of an FM transmission may be reduced by:",
    image: "",
    options: [
      "Reducing the PA gain",
      "Using a low pass filter after the PA",
      "Using a microphone with an AF response up to 15kHz",
      "Reducing the gain of the microphone amplifier.",
    ],
    correct: 3,
    explanation: `'d' is the correct answer. FM Bandwidth (BW) is determined by the maximum Audio Frequency and the peak deviation, so 'a' will have no effect on the bandwidth of the FM transmission, neither will 'b' (reducing harmonics), or 'c' (a mic with an AF response greater than 3kHz has potential for increasing the bandwidth of the audio frequency signals). That must mean 'd' is the correct answer. Why? Because less AF amplitude will mean less deviation, so less BW, hopefully sufficient to ensure that the modulation does not achieve the peak deviation. `,
    lookup: "See page(s) 43 of the Full Licence text book",
    syllabus: "3e.1",
    examStrategy: 2,
    examStrategyNotes: "Yes you know the answer to this.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK05 Q10",
    question:
      ". In the section of the circuit diagram of an SSB transmitter shown, what is the function of the crystal/capacitor combination in the middle ?",
    image: "images/bbdl-quizzes-week05-remove-sideband.png",
    options: [
      "To only allow one sideband to pass",
      "To generate the sidebands",
      "To modulate the carrier",
      "To suppress the carrier",
    ],
    correct: 0,
    explanation: `Remember the steps in generating a single sideband signal using the traditional method. A carrier is first generated, this is passed through a balanced mixer together with the audio signal. The mixer creates two amplitude modulated sidebands, one above and one below the carrier frequency. The carrier is also “nulled out” by means of the balancing action of the device. We now have a Double Sideband Suppressed Carrier signal. This is what enters the circuit from the left side. Next, wehave transistor amplifier. Then the four quartz crystals (the subject of the question) and three capacitors to ground. This is a classic ladder crystal filter circuit. It has a bandwidth of perhaps 3kHz and will only allow one sideband to pass. This is followed with another transistor amplifier to add some gain and match the filter impedance to the following circuits. Aide memoir: One crystal and a transistor is probably an oscillator. More than one crystal with more than one capacitor is probably a filter. `,
    lookup: "See page(s) 47 of the Full Licence text book",
    syllabus: "3e.2",
    examStrategy: 2,
    examStrategyNotes: "Pretty obvious.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK06 Q01",
    question: "A linear Power Amplifier (PA) must be used for:",
    image: "",
    options: [
      "FM transmissions",
      "SSB transmissions",
      "CW transmissions",
      "All of the above",
    ],
    correct: 1,
    explanation: ` A linear PA is necessary where the signal being amplified has changing 
amplitude. Therefore, FM and CW transmissions do not require linear amplification, so only 'b' can be 
correct. There is often confusion between a linear PA (i.e. a class A amplifier stage in a transmitter) and 
an external linear amplifier; you can use an external linear amplifier for all modes, but it is not necessary
for CW or FM. That is why some cheap 2m external amplifiers are OK for FM, but not suitable for SSB. `,
    lookup: "See page(s) 48-49 of the Full Licence text book",
    syllabus: "3f.2",
    examStrategy: 1,
    examStrategyNotes:
      "A power amplifier is optional, but if you do use one with SSB, it has to be a Linear Power Amplifier.",
    examCalculation: 0,
  },
  {
    source: "BBDL QUIZ WEEK06 Q02",
    question: "In this circuit, C1, C2 and L1 are for:",
    image: "images/bbdl-quizzes-week06-RF-power-amplifier.png",
    options: [
      "Frequency stability",
      "Bias adjustment",
      "Gain adjustment",
      "Impedance matching",
    ],
    correct: 3,
    explanation: `Amplifiers need to be matched to the adjacent stages and variable capacitors 
in a tuned tee network with an inductor (L1) are good for impedance matching (like in an antenna
matching unit). 'd' is therefore the correct answer. `,
    lookup: "See page(s) 48-49 of the Full Licence text book",
    syllabus: "3f.3",
    examStrategy: 1,
    examStrategyNotes:
      "Variable capacitors, and an inductor, so definitely impedance matching.",
    examCalculation: 0,
    exam_NOT: false,
  },
  {
    source: "BBDL QUIZ WEEK06 Q03",
    question: `Which one of the following modes of transmission has the highest average
       power output when using a transmitter with the same peak envelope power?`,
    image: "",
    options: ["FM", "CW", "AM", "SSB"],
    correct: 0,
    explanation: ` First key point is that PEP is measured at the crest of the modulated waveform 
(see licence). You can therefore have 400W PEP on any mode and the crest of the modulated waveform 
will be the same in any mode. However, FM has a constant amplitude so the PA is working hard all of the 
time that the PTT is closed. All the others have peaks and troughs in the modulation, so have a lower 
average power. 'a' is therefore the correct answer. It is worth noting that the concept of power amplifiers working more or less, 
depending on the mode, is often referred to as the 'duty cycle'. A high duty cycle equates to a higher 
level of average power. `,
    lookup: "See page(s) 49-50 of the Full Licence text book",
    syllabus: "3f.4",
    examStrategy: 1,
    examStrategyNotes: "Include in flashcards",
    examCalculation: 0,
  },
  {
    source: "BBDL QUIZ WEEK06 Q04",
    question: `If you are using a transceiver with an external linear amplifier and the 
      two units do not have compatible ALC circuits, which control must you use 
      to ensure their correct operation?`,
    image: "",
    options: [
      "The microphone AF gain control on the transceiver",
      "The manual RF power control on the transceiver",
      "The Automatic Gain Control on the transceiver",
      "The by-pass switch on the amplifier",
    ],
    correct: 1,
    explanation: `Most modern transceivers have an Automatic Level Control (ALC) to prevent 
overdriving of the power amplifier. It can also be used to link to external power amplifiers to ensure they 
are not overdriven. If your transceiver or external amplifier do not have compatible ALC circuits, you will 
need to use the manual RF power control on the transceiver to ensure that you only use the minimum 
drive for a given output. 'a' would simply limit the modulation, and a low level of modulation could still 
cause the amplifier to be overdriven in some modes, so not that one. 'b' is correct. 'c' is wrong because 
AGC is a receiver function and will not affect the transmission. 'd' will take the amplifier out of use, which 
will rule out any unwanted transmissions from the amplifier but it does not ensure its correct operation, 
so not that one. This is covered on page 50 of the Full Licence textbook, although the option to use the 
manual RF Power control is not included.`,
    lookup: "See page(s) 50 of the Full Licence text book",
    syllabus: "3f.5",
    examStrategy: 4,
    examStrategyNotes: `Think about signal chain: what directly controls RF output to amplifier? 
      Eliminate: bypass switch (unknown), AGC (incompatible), mic gain (indirect). 
      Choose: manual RF power control (direct control in watts).`,
    examCalculation: 0,
  },
  {
    source: "BBDL QUIZ WEEK06 Q05",
    question: "A transmitter's ALC circuit can be used to:",
    image: "",
    options: [
      "Drive the receiver's signal or 'S' meter",
      "Provide a form of protection against a high SWR at the antenna socket",
      "Increase the drive to an amplifier to ensure it is driven to maximum power",
      "Move the transmitter frequency away from the receive frequency when working split",
    ],
    correct: 1,
    explanation: `Automatic Level Control is used to limit transmitter output and linked to an 
SWR detection circuit it can be used to reduce power if a high SWR is present. 'a' is wrong because the 'S' 
meter is usually driven by the receiver's AGC (Automatic Gain Control) circuit. 'c' is wrong because ALC 
limits power, it does not promote any increase. 'd' is wrong because ALC does not affect the frequency of 
the transmitter. `,
    lookup: "See page(s) 50 of the Full Licence text book",
    syllabus: "3f.5",
    examStrategy: 4,
    examStrategyNotes: "include in flashcards",
    examCalculation: 0,
  },
  {
    source: "BBDL QUIZ WEEK06 Q06",
    question: `In a 15m SSB transmitter, if we mix a 9MHz SSB signal with an oscillator
       on 12MHz, what unwanted mixer products are most likely to be produced?`,
    image: "",
    options: [
      "3MHz, 6MHz and 14MHz",
      "21MHz, 27MHz and 63MHz",
      "3MHz, 6MHz and 30MHz",
      "1MHz, 17MHz and 49MHz",
    ],
    correct: 2,
    explanation: `'c' is the correct answer. You need to work out the sums and differences for 9 and 12MHz, and their 2nd
and 3rd harmonics. Answer 'a' includes 14MHz, which is not one of the mixer products in that range, so not that one. 'b' 
includes 21MHz, which is what you are trying to achieve (15m = 21MHz) so it is not an unwanted 
product, making it wrong too. 'c' includes three predictable unwanted products; 12-9 = 3, 18-12 = 6, and 
12 + 18 = 30, so that looks good. 'd' is wrong because none of those are predictable mixer products. So, 
'c' is the answer. 
`,
    lookup: "See page(s) 42 of the Full Licence text book",
    syllabus: "3f.2",
    examStrategy: 4,
    examStrategyNotes:
      "practice using the grid. Be aware of the conversion of wavelength into frequency.",
    examCalculation: 2,
  },
  {
    source: "BBDL QUIZ WEEK06 Q07",
    question:
      "If you are designing a transmitter that will mix a carrier oscillator with a VFO you should:",
    image: "",
    options: [
      "Ensure that the frequencies are locked 'in phase'",
      "Be sure to use one oscillator that is a harmonic of the other",
      "Use an accurate frequency meter to ensure that the oscillators are 'netted' on the same frequency",
      "Not use oscillators that will produce unwanted outputs close to the wanted frequency",
    ],
    correct: 3,
    explanation: `'a' is only relevant in a PLL design and the question does not mention that, so 
not that one. 'b' is bad practice as it can cause even more harmonics. 'c' is wrong because you don't 
want the two oscillators to be on the same frequency. 'd' sounds like a good way to avoid problems 
associated with mixing, so that is the one to go for. Remember that mixing produces sums and 
differences of the two frequencies being mixed and their harmonics!`,
    lookup: "See page(s) 52 of the Full Licence text book",
    syllabus: "3f.2",
    examStrategy: 2,
    examStrategyNotes: "Include in flashcards",
    examCalculation: 0,
  },
  {
    source: "BBDL QUIZ WEEK06 Q08",
    question: "Over-modulation of an AM transmitter is likely to result in:",
    image: "",
    options: [
      "Modulation by harmonics of the modulating audio frequencies",
      "Radiation of harmonics of the carrier frequency",
      "Spurious oscillation of the PA stage",
      "A high SWR",
    ],
    correct: 0,
    explanation: `I answered B, so check similar answers by writing them down.  Over-modulation sounds dreadful and is clearly bad practice. The problem 
occurs when audio signals with excessive amplitude drive the modulator too hard and the signal starts to 
break up. That generates harmonics of the audio frequencies which then modulate the carrier, resulting 
in a large increase in the bandwidth. That sounds distorted and causes 'splatter' or adjacent channel 
interference, to give it its proper name. 'a' is therefore the correct answer. `,
    lookup: "See page(s) 55 of the Full Licence text book (Operator faults)",
    syllabus: "3g.1",
    tagged: true,
    examStrategy: 4,
    examStrategyNotes: `Read this very carefully. Harmonics is mentioned in A and B. Over-modulation implies that audio is overwhelming the carrier frequency with side effects.`,
    examCalculation: 0,
  },
  {
    source: "BBDL QUIZ WEEK06 Q09",
    question:
      "In order to prevent unnecessary sideband splatter the percentage modulation of an AM signal should be kept below:",
    image: "",
    options: ["25%", "50%", "66%", "100%"],
    correct: 3,
    explanation: ` In the grey box on page 42 of the textbook the advice is to stay at around 80-
90% to be 'safe'.`,
    lookup: "See page(s) 55 of the Full Licence text book (Operator faults)",
    syllabus: "3g.1",
    examStrategy: 3,
    examStrategyNotes: "Include in flashcards.",
    examCalculation: 0,
  },
  {
    source: "BBDL QUIZ WEEK06 Q10",
    question: "Overdriving a linear amplifier will cause:",
    image: "",
    options: [
      "The PA valve to burn out",
      "The SWR to rise",
      "Second channel interference",
      "Adjacent channel interference",
    ],
    correct: 3,
    explanation: ` 'a' is unlikely as valve PAs are quite robust. 'b' is nothing to do with how much 
drive is being applied. 'c' is a superheterodyne receiver concept, not a transmitter issue, so 'd' is the only 
viable answer, although harmonics would also be likely. S`,
    lookup: "See page(s) 56 of the Full Licence text book",
    syllabus: "3g.2",
    examStrategy: 4,
    examStrategyNotes: "Choose an answer based on evaluation of each option.",
    examCalculation: 0,
  },
  {
    source: "BBDL QUIZ WEEK06 Q11",
    question:
      "Which of the following would NOT avoid the generation of harmonics in a transmitter?",
    image: "",
    options: [
      "Reducing RF drive levels to amplifiers",
      "Using inductive coupling between amplifier stages",
      "Using a push-pull amplifier for the PA",
      "Having a high pass filter in the output stage",
    ],
    correct: 3,
    explanation: ` 'a', 'b' and 'c' are all cited as good ways to prevent harmonics on page 52 - 53 
of the Full Licence textbook. 'd' is not listed as a prevention method in the textbook and no filter on the 
output stage can prevent the generation of harmonics, making it the correct answer here. There is an 
argument that push-pull amplifiers do not prevent the generation of odd harmonics, but they do avoid 
some (even) harmonics so 'c' is therefore only partially correct, whereas 'd' is 100% correct in all 
circumstances. Sometime you do have to select the 'best' answer at this level.`,
    lookup: "See page(s) 52-53 of the Full Licence text book",
    syllabus: "3g.3",
    examStrategy: 4,
    examStrategyNotes: `
    On paper, evaluate each answer in turn: is this true? 
    At the end, the one that isn't true should be the answer`,
    examCalculation: 0,
    exam_NOT: true,
  },
  {
    source: "BBDL QUIZ WEEK06 Q12",
    question: `In a 15m SSB transmitter, if we mix a 9MHz SSB signal with an oscillator on 12MHz, 
      what filter would be best to use after the power amplifier?`,
    image: "",
    options: [
      "A Low Pass Filter with a cut off frequency just below 9MHz",
      "A High Pass Filter with a cut off frequency just below 9MHz",
      "A Band Pass Filter with a centre frequency around 21.20MHz",
      "A Band Stop Filter with a centre frequency around 21.20MHz",
    ],
    correct: 2,
    explanation: `. 'a' is wrong because it would not allow our wanted 21MHz signal to pass. 'b' is 
wrong because it would allow all of the mixer products and any harmonics produced by the power 
amplifier to pass. 'c' would allow our wanted 21MHz signals to pass whilst attenuating any mixer 
leakage and any harmonics produced by the power amplifier, which sounds good. 'd' is wrong because it 
would stop our wanted signal and let everything else pass. `,
    lookup: "See page(s) 52-53 of the Full Licence text book",
    syllabus: "3g.3",
    examStrategy: 4,
    examStrategyNotes:
      "Perhaps draw some graphs of the four different approaches on the same graph, just to be clear on what a low pass filter would achieve, for example.",
    examCalculation: 1,
    examCalculation: 0,
  },
  {
    source: "BBDL QUIZ WEEK06 Q13",
    question:
      "Which one of the following statements is NOT true? Parasitic oscillation:",
    image: "",
    options: [
      "Can occur at frequencies much lower than the wanted frequency",
      "Can occur at frequencies much higher than the wanted frequency",
      "Can be caused by excessively long component leads",
      "Is always at a harmonic of the wanted frequency",
    ],
    correct: 3,
    explanation: `I answered C.  The key feature of parasitic oscillations is that they are NOT harmonics and can 
be on pretty much any frequency. 'd' is therefore not true and the correct response to this question. `,
    lookup: "See page(s) 53-54 of the Full Licence text book",
    syllabus: "3g.4",
    tagged: true,
    examStrategy: 5,
    examStrategyNotes:
      "Have to evaluate each one in turn: is this true? At the end of the cycle, there should be one not marked as true. That is the answer.",
    examCalculation: 0,
    exam_NOT: true,
  },
  {
    source: "BBDL QUIZ WEEK06 Q14",
    question: "An 'out of lock' condition may occur when:",
    image: "",
    options: [
      "A PLL frequency synthesiser is tuned too rapidly",
      "The phase noise is too great",
      "A crystal oscillator drifts",
      "The power supply is not regulated",
    ],
    correct: 0,
    explanation: ` Phase locked loop frequency synthesisers work by making small adjustments to 
the operating frequency until the loop is 'locked'. PLLs are unable to deal with changes in frequency that 
are too rapid as they are unable to lock onto any specific step. 'a' looks like a good answer, and the 
others have little to do with frequency steps or locking onto a specific frequency. Out of lock detector 
circuits are included in frequency synthesisers to inhibit transmission of an “unlocked” frequency.
`,
    lookup: "See page(s) 54 of the Full Licence text book",
    syllabus: "3g.5",
    examStrategy: 1,
    examStrategyNotes: "Include in flashcards",
    examCalculation: 0,
  },
  {
    source: "BBDL QUIZ WEEK06 Q15",
    question:
      "Which of the following would best ensure the 'clean' operation of an HF external power amplifier?",
    image: "",
    options: [
      "Using the AGC loop to prevent it being overdriven",
      "A High Pass Filter with a cut off frequency just above 3MHz on the input",
      "A Low Pass Filter with a cut off frequency just below 3MHz on the output",
      "Only using the minimum amount of RF drive to achieve the required output",
    ],
    correct: 3,
    explanation: `
    'a' is wrong because AGC is a receiver function. 
    'b' is wrong because it would allow any unwanted mixer products, and any harmonics produced by the transmitter power amplifier, to 
    pass into the external amplifier. 
    'c' would attenuate all HF signals, making the external amplifier ratherpointless. 
    'd' is correct because using the minimum drive required reduces the chance of distortion within the external amplifier.`,
    lookup: "See page(s) 56 of the Full Licence text book",
    syllabus: "3g.2",
    examStrategy: 4,
    examStrategyNotes: "Include in flashcards",
    examCalculation: 0,
  },
  {
    source: "BBDL QUIZ WEEK06A Q01",
    question: `Which of the meters in this circuit should show a reading of about 51 
milliamperes?`,
    image: "images/bbdl-quizzes-week06a-q01.png",
    options: ["Voltmeter 1", "Voltmeter 2", "Ammeter 1", "Ammeter 2"],
    correct: 2,
    explanation: `This is a question for applying several 
formulas: resistors in parallel, resistors in series and Ohm's law. 
<hr>
But first, we can rule out answers 'a' and 'b', as Voltmeters will never read amperes, or 
milliamperes, so it is between Ammeter 1 and Ammeter 2.
<hr>
Ammeter 1 requires us to work out the combined resistance of the three 
resistor network and then use Ohm's law with the 9V battery.
<hr>
Ammeter 2 requires us to work out the combined resistance of the parallel 
resistors, then work out the voltage across them and then use Ohm's law with 
the 'new' voltage and the 100Ω resistor. 
<hr>
So, what is the combined resistance of the parallel resistors? Without touching 
the calculator you should know that it will be somewhere between 50 and 
100Ω; because the combined resistance of any parallel resistor network is 
always less than the smallest, in this case, less than 100. If you had two 100Ω 
resistors, it would be half; 50Ω. So with any other value in parallel with the 
100Ω resistor it has to be somewhere between 50 and 100Ω. Using the formula 
from EX309, $$ \\frac{1}{R_{TOTAL}} = \\frac{1}{R_1} + \\frac{1}{R_1} = \\frac{1}{100} + \\frac{1}{330} = 76.74Ω$$
<hr>
See below for the calculator strokes and the rest of the working out….
<ul>
<li>100 for the 100Ω resistor</li>
<li>[x-1] to make it 1/R</li>
<li>[+] to add the two resistors</li>
<li>330 for the 330Ω resistor</li>
<li>[x-1] to make it 1/R</li>
<li>= gives you $1/R_{Total}$ = 0.01303</li>
<li>[x-1] to give $R_{Total}$</li>
<li>= 76.74Ω, which fits our original non-math estimate perfectly!</li>
</ul>
<hr>
Now an easy bit; the two values in series just add up. The total resistance is the 
lower combined 'pair' in series with the top 100Ω resistor, gives us a total of 
about 177Ω.
Now we know the total resistance and the voltage, we can work out the total 
current using Ohm's law manipulated to give us I = V / R = 9 / 177 = 0.0508A 
hitting the ENG button gives 50.847x10-3 or about 51mA - which looks good as 
the answer; Ammeter 1 would read 51mA.
Just to be sure, let's check out Ammeters 2 and 3….
To do that we need to know the voltage across the parallel resistors. We now 
know the combined value of the bottom two resistors is 77Ω, and we know 
there is a total of 51mA flowing through them, so we can work out what the 
voltage is across them: V = IR, so 0.051A x 77Ω = 3.9V. 
Using Ohm's law again, the current flowing through the bottom 100Ω resistor 
is I = V / R = 3.9 / 100 = 0.039A hitting the ENG button give 39x10-3 or 39mA, 
which is not the 51mA we are looking for, so 'c' is confirmed as being the 
correct answer.
Not for the question, but just for completeness, what about Ammeter 3?
If we know there is 51mA flowing into the combined network, and 39mA is 
flowing through the lower 100Ω resistor, it should be 'obvious' that there is 
about 12mA flowing through the 330Ω resistor, through Ammeter 3. Don't 
believe it? We know there is 3.9V across the resistor so I = V / R = 3.9 / 330 = 
0.0118A hitting the ENG button give 11.8x10-3 or 11.8mA. That is near enough 
to 12mA to show that the total current flowing through the top resistor is 
divided between the bottom 'pair'.
A bit of a marathon, but good revision!
`,
    lookup: "See page(s) 19-20 of the Full Licence Manual",
    syllabus: "2b.1",
    reference: "",
    examStrategy: 3,
    examStrategyNotes:
      "There is a very detailed explanation if required. This is a great one for revision.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: true,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK06A Q02",
    question: ` Capacitors will work to a maximum voltage above which they will be 
damaged or more likely destroyed. That voltage is known as:`,
    image: "",
    options: [
      "The saturation voltage",
      "The breakdown voltage",
      "The reverse bias voltage",
      "The peak supply voltage",
    ],
    correct: 1,
    explanation: `It is a definition.`,
    lookup: "See page(s) 22 of the Full Licence Manual",
    syllabus: "2d.3",
    reference: "",
    examStrategy: 1,
    examStrategyNotes: "Just drill this.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK06A Q03",
    question: `A "back EMF" can be described as:`,
    image: "",
    options: [
      "The terminal voltage of a battery when connected with reverse polarity",
      "The RF energy radiated from the rear of a Yagi antenna",
      "The electromotive force released from a charged capacitor",
      "The opposition to increasing current flow through an inductor",
    ],
    correct: 3,
    explanation: `Back EMF is a phenomenon specific to inductors 
(coils). The act of passing current through an inductor generates a magnetic 
field which in turn induces a current into the coil, but with reverse polarity, that 
electromotive force is the 'back EMF'. `,
    lookup: "See page(s) 23-24 of the Full Licence Manual",
    syllabus: "2d.4",
    reference: "",
    examStrategy: 1,
    examStrategyNotes: "",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK06A Q04",
    question: `A large value electrolytic capacitor is wired in 
series with a resistor and 900V DC is applied 
across the circuit. After 7 seconds the voltage 
across the capacitor has reached 600V. 
What will the approximate voltage be after 14 
seconds?`,
    image: "",
    options: ["650V", "700V", "800V", "900V"],
    correct: 2,
    explanation: `This is a puzzle. From EX309 we have that the Time Constant, Tau, τ=CR
    but we don't have any values. But, we do know that after 7 seconds we have 2/3 charge (600/900), 
    so the Time Constant is 7 seconds. The insight is that, after the next 7 seconds (so t = 14s)
    the charge will move 2/3 of the remaining 300V, so another 200V, making 800V.
    `,
    lookup:
      "Obsidian Time Constant and the google chart. See Full Licence textbook pages 22-23.",
    syllabus: "2d.7",
    reference: "After Week06 Review in Week07 Tutorial Slides p4-6",
    examStrategy: 4,
    examStrategyNotes:
      "This hasn't been covered anywhere else, or in the manual, but it's a very useful insight.",
    examCalculation: 2,
    tagged: true,
  },
  {
    source: "BBDL QUIZ WEEK06A Q05",
    question: `If a 15V 50Hz AC supply is connected across the 
circuit shown in the diagram, what will the voltage 
be across the resistor? #AC_DIAGNOSIS`,
    image: "images/bbdl-quizzes-week06a-q05.png",
    options: ["0V", "4.6V", "14.3V", "15V"],
    correct: 2,
    explanation: `
    Many steps for 1 mark = a swine of a question! <hr>
    1. Ohm's Law V = I x R will work, but we don't know I, so how to work it out? <hr>
    2. Series circuit will have same I through R1 and C1 ($X_C$) which 
    combine to give Z, if we can work out Z we can work out I. <hr>
    3. To work out combined Z we need $X_C$, which we can work out. We have f (50Hz) and C (10µF). <br>
    $X_C = \\frac{1}{2 \\cdot \\pi \\cdot f \\cdot C} = 318Ω$ <hr>
    4. We now need the combined Z , so work it out…
    $Z = \\sqrt{R^2 + X^2} = \\sqrt{1000^2 + 318^2} = 1049Ω$ <hr>
    5.  I = V/R in DC circuit, I = V/Z in AC circuit <br>
    I = V/Z = 15/1049 = 0.0143A <hr>
    6. Question wants V across the resistor, we now know R and I, so we can use Ohm's Law <br>
    $V = I \\cdot R = 0.0143A \\times 1000Ω = 14.3V$ <hr>
    `,
    lookup: "See page(s) x of the Full Licence Manual",
    syllabus: "2e.6",
    reference: "After Week06 Review in Week07 Tutorial Slides p4-6",
    examStrategy: 5,
    examStrategyNotes: `If all of the component values are known (for the AC supply we need Voltage AND Frequency), we can calculate capacitor reactance $X_C$, 
    then circuit Impedance $Z$, then current I, and finally $V_R$. As a check, we can then calculate $V_C$ and check 
    that the voltages add up using Pythagoras, because $V_R$ and $V_C$ DO NOT add up to 15V because of phase difference.`,
    examCalculation: 4,
    tagged: true,
    obsidianURL:
      "obsidian://open?vault=FULL-LICENCE-COURSE&file=QUESTION%20ANALYSIS%20FOLDER%2FAC_Circuit_Analysis_Diagnostic",
  },
  {
    source: "BBDL QUIZ WEEK06A Q06",
    question: ` A 20:1 step down mains transformer draws a primary current of 0.5 A. 
What is the current in the secondary?
`,
    image: "",
    options: ["0.2A", "10A", "20A", "50A"],
    correct: 1,
    explanation: `For a transformer the current ratio is the same as the 
turns ratio BUT note that the current increases as the volts decrease (power in 
= power out, less a bit of heat). So, 0.5A in with a ratio of 20:1 will give 20 x 0.5 
= 10A out, making 'b' is the correct answer. May be worth noting that this 
explains why the mains fuse in your 25A shack power supply is not 25A, but the 
output fuse at 12 volts is!`,
    lookup: "See page(s) 29 of the Full Licence Manual",
    syllabus: "2g.1",
    reference: "",
    examStrategy: 3,
    examStrategyNotes:
      "See EX309 C2R10 for the formula that relates Primary and Secondary current to the Turns Ratio.",
    examCalculation: 2,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK06A Q07",
    question: `What is the dynamic resistance of a parallel tuned circuit comprising a 
5µH inductor with a DC resistance of 0.5Ω and a capacitor of 200pF?
`,
    image: "",
    options: [" 0.5Ω", "500Ω", " 50kΩ", " 5MΩ"],
    correct: 2,
    explanation: `The textbook says this is not examinable, but the 
formula to use is on the EX309 Formula Sheet, so look it up! You should find RD
= L / CR so a 'simple' matter of keying in:
5 the value of the inductor
[x10x] to make it µH
[-] 
6
[/] divided by
[(] open bracket for the CR part of the formula
200 value of the capacitor
[x10x]to make it pF
[-] 
12
[x] multiplied by
0.5 the value of the resistance
[)] close the bracket
[=] the answer 50000
[ENG] = 50 x103 better known as 50kΩ.
We are not 
sure if calculations are required. The formula is on EX309 and the syllabus says 
you need to recall the meaning of Dynamic Resistance, which could include 
applying your recollection to a 'simple' scenario.`,
    lookup: "See page(s) 28 of the Full Licence Manual",
    syllabus: "2h.5",
    reference: "",
    examStrategy: 3,
    examStrategyNotes:
      "EX309 R3C8 for $R_D$ in terms of L, C and R. As ever, watch out for the UNITS!",
    examCalculation: 2,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK06A Q08",
    question: `The diagram shows the current and voltage characteristics for a 
component which is marked '5v6' on its body. If $V_r$ is nearly 6 volts, the 
device is most likely to be:
`,
    image: "images/bbdl-quizzes-week06a-q08.png",
    options: [
      "a rectifier diode with a high PIV rating",
      "a Variable Capacitance diode",
      "a Zener diode",
      "a silicon signal diode",
    ],
    correct: 2,
    explanation: `The current/voltage chart shows that the device will 
conduct with a small positive voltage or a larger, 6 volt, reverse bias voltage 
across it. A rectifier diode will only conduct when forward biased, but it will 
breakdown if the PIV rating is exceeded in reverse. However, answer 'a' says it 
has a high PIV rating, so it should not breakdown at 6 volts, so not 'a'. The 
Variable Capacitance Diode (aka Varicap or Varactor diode) will not conduct if 
reverse biased to 6 volts or the capacitance properties would be lost, so not 'b'. 
The Zener diode is designed to allow reverse bias current to flow when the 
specified reverse bias voltage is reached and 5.6 volts is a common Zener value, 
so 'c' looks promising, but let's check 'd'. A silicon signal diode is really just like 
a rectifier diode but with a lower current rating. The maximum reverse voltage
ratings are usually much higher than 6 volts, so 'd' is not the answer and 'c' is 
the one to go for.`,
    lookup: "See page(s) 31-33 of the Full Licence Manual",
    syllabus: "2i.1",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: "Drill this image.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL:
      "obsidian://open?vault=FULL-LICENCE-COURSE&file=QUESTION%20ANALYSIS%20FOLDER%2Fzener_diode",
  },
  {
    source: "BBDL QUIZ WEEK06A Q09",
    question: `An oscillator circuit requires feedback to maintain the oscillations. Which 
components in the circuit provide the feedback?
`,
    image: "images/bbdl-quizzes-week06a-q09.png",
    options: ["R3 and C5", "R1 and R2", "C1 and C2", "C3 and C4"],
    correct: 3,
    explanation: `Feedback needs to link the output back to the input. 
Only C3 and C4 do that. C4 is not as obvious as C3, which feeds AC from the 
emitter back to the base, but it pays a part in setting how much of the signal is 
fed back; you can think of it as a capacitor version of the potential divider. `,
    lookup: "See page(s) 42 of the Full Licence Manual",
    syllabus: "2i.5",
    reference: "",
    examStrategy: 3,
    examStrategyNotes: "Drill",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK06A Q10",
    question: `Switch mode power supplies normally switch, or chop, the rectified DC, 
at:`,
    image: "",
    options: [
      "a frequency lower than mains frequency",
      "mains frequency",
      "a frequency higher than mains frequency",
      "very high frequency (VHF)",
    ],
    correct: 2,
    explanation: ` This is the reason switch mode PSUs gained a bad 
reputation; the higher frequency switching can generate dreadful QRM. More 
recent designs have improved this to the point that most commercial power 
supplies are switch mode these days. Looking at the options; switching at a
lower frequency would require more turns on the transformer, increase losses 
and increase size, weight, etc, so not 'a'. Rectifying mains to DC and switching 
it back to 50Hz would be pointless, so not 'b', and whilst VHF switching is not 
impossible, it is not the way current SMPSUs work, so not 'd'.`,
    lookup: "See page(s) 38 of the Full Licence Manual",
    syllabus: "2j.4",
    reference: "",
    examStrategy: 2,
    examStrategyNotes:
      "I got this one wrong in the quiz, so have a good check up and drill on this.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK06A Q11",
    question: `Which of the following is most likely to include one or more multiplier 
stages?`,
    image: "",
    options: [
      "FM transmitter for 600m",
      "SSB transmitter for 5MHz",
      "AM transmitter for 70MHz",
      "CW transmitter of 10GHz",
    ],
    correct: 3,
    explanation: ` Multiplier stages cannot be used for AM or SSB 
transmitters because they broaden the bandwidth and distort the modulation, 
ruling out 'b' and 'c'. The whole point of multiplying is to get to a higher 
frequency, so you would need to start at a really low frequency to multiply up 
to 600m (472kHz) whereas, the textbook tells us that multipliers are used for 
microwave transmitters in UHF/Gigahertz bands.`,
    lookup: "See page(s) 46 of the Full Licence Manual",
    syllabus: "3b.1",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: "Drill these and own them!",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL:
      "obsidian://open?vault=FULL-LICENCE-COURSE&file=QUESTION%20ANALYSIS%20FOLDER%2Fmultiplier",
  },
  {
    source: "BBDL QUIZ WEEK06A Q12",
    question: ` It is important to minimise drift because:
`,
    image: "",
    options: [
      "drift can cause harmonics to develop",
      "drift can result in out-of-band transmissions",
      "drift can cause spurious emissions",
      "all of the above",
    ],
    correct: 1,
    explanation: `'a' and 'c' are incorrect, making 'd' also wrong. That 
only leaves 'b' for the correct answer; extreme drift can indeed take your 
transmissions out of the amateur band, especially if you are operating near the 
band edge. `,
    lookup: "See page(s) 42 of the Full Licence Manual",
    syllabus: "3c.1",
    reference: "",
    examStrategy: 1,
    examStrategyNotes: "This is well drilled, and there is a flashcard!",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK06A Q13",
    question: `The block marked 'X' on the diagram should be marked:
`,
    image: "images/bbdl-quizzes-week06a-q13.png",
    options: [
      "Double Balanced Mixer",
      "Analogue Digital Converter",
      "Phase Lock Loop",
      "Look Up Table",
    ],
    correct: 3,
    explanation: `The block diagram represents a direct digital 
synthesiser similar to the ones that define the operating frequencies in our 
modern transceivers. The frequency control is some form of front panel 
mounted directional rotary encoder, which, together with a time reference in a 
clock oscillator are fed to a so-called Look up table. Here the sine wave is 
created in the form of many incremental steps. This information passes to the 
DAC where the analogue form of the sine wave is created as a continuous 
process. This signal is almost suitable for use, but it does contain some 
unwanted higher frequency elements. These are removed with a low pass filter.`,
    lookup: "See page(s) 45 of the Full Licence Manual",
    syllabus: "3c.3",
    reference: "",
    examStrategy: 1,
    examStrategyNotes:
      "THis is well drilled and there is a diagram with labels for this.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK06A Q14",
    question: ` If a transmitter has an SSB filter centred on 9MHz, what will its cut off 
frequencies be?
`,
    image: "",
    options: [
      "8.907 & 9.000 MHz",
      "8.9985 & 9.0015 MHz",
      "9.000 & 9.003 MHz",
      "9.0085 & 9.015 MHz",
    ],
    correct: 1,
    explanation: `The cut off frequency is the -3dB or half-power point 
on the filter response curve and it defines the bandwidth of the filter. As an SSB 
filter needs to be around 3kHz wide, only 'b' provides that with 9MHz at the 
centre of the pass band. See our Week 5 tutorial for more on important filter frequencies. 
This does not appear to be covered in the Full Licence 
textbook!`,
    lookup: "See page(s) x of the Full Licence Manual",
    syllabus: "3e.2",
    reference: "",
    examStrategy: 4,
    examStrategyNotes:
      "This caused a flurry of mental anguish in the quiz, so do go through this again.",
    examCalculation: 3,
    exam_NOT: false,
    tagged: false,
    obsidianURL:
      "obsidian://open?vault=FULL-LICENCE-COURSE&file=QUESTION%20ANALYSIS%20FOLDER%2FSSB",
  },
  {
    source: "BBDL QUIZ WEEK06A Q15",
    question: `Which of the circuits shown is most likely to be an RF Power 
Amplifier:`,
    image: "images/bbdl-quizzes-week06a-q15.png",
    options: ["A", "B", "C", "D"],
    correct: 2,
    explanation: `You should spot that circuit A is a crystal oscillator, 
the fact that it has a crystal is a bit of a give-away. It also has no input, and any 
amplifier will have an input and an output, so not 'a'. 'b' is definitely an 
amplifier but there is nothing to specifically make it an RF Power Amplifier, so 
it's a maybe, and we need to keep looking. 'c' is more like an RF Power Amp, 
with a matching circuit on the input, an RF choke on the collector to 'force' the 
RF into the low pass filter, so 'c' is looking good. Whilst circuit 'd' has an input 
and an output, both are via electrolytic capacitors and there is another 
electrolytic attached to the IC, and they are generally more of an audio 
frequency circuit component. The 'most likely' circuit is therefore 'c'. `,
    lookup: "See page(s) 48-49 of the Full Licence Manual",
    syllabus: "3f.2",
    reference: "",
    examStrategy: 5,
    examStrategyNotes:
      "Write down the letters and make notes against each one, to eliminate some, and eventually it comes.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL:
      "obsidian://open?vault=FULL-LICENCE-COURSE&file=QUESTION%20ANALYSIS%20FOLDER%2FRF_amplifier_circuit",
  },
  {
    source: "BBDL QUIZ WEEK06A Q16",
    question: `Parasitic oscillations are generally caused by:`,
    image: "",
    options: [
      "an amplifier bursting into oscillation on the frequency of an unintended tuned circuit",
      "an amplifier bursting into oscillation on the frequency of a known tuned circuit",
      "overdriving a Class C amplifier with too little bias",
      "operating a Class A amplifier with too much bias",
    ],
    correct: 0,
    explanation: `Parasitic oscillations are unpredictable and often 
difficult to pin down. The main source is when stray capacitance or inductance 
inadvertently forms a tuned circuit with another component. 'b' is describing 
'self-oscillation' and overdriving amplifiers is more likely to cause distortion 
rather than oscillation, so 'c' and 'd' are not the ones to select here.`,
    lookup: "See page(s) 53-54 of the Full Licence Manual",
    syllabus: "3g.4",
    reference: "",
    examStrategy: 5,
    examStrategyNotes: "Check through this for flashcards etc.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL:
      "obsidian://open?vault=FULL-LICENCE-COURSE&file=QUESTION%20ANALYSIS%20FOLDER%2Fparasitic_oscillations",
  },
  {
    source: "BBDL QUIZ WEEK06A Q17",
    question: `If you are operating a DXpedition, or a very popular Special Event 
Station, what is the best way to spread out the pile up of stations calling you?`,
    image: "",
    options: [
      "Set your transceiver to 'split frequency' mode and ask callers to call 5 to 10 kilohertz higher than your transmit frequency",
      "Start by only working stations with callsigns with 'Alpha' in them, then 'Bravo', and so on",
      "Start by only working stations with the number 'Zero' in them, then 'One' and so on",
      "Take the loudest, clearest signals first and then work your way to the weaker ones",
    ],
    correct: 0,
    explanation: `Although calling stations according to their first letter 
or number does separate the pileup, this can be very frustrating for callers. It is 
not the recommended method so not 'b' or 'c'. Just calling the biggest stations 
does work, but it means that the weak or distant stations never get a look in, so 
again 'd' is not good practice. That leaves us with “working split”. This is the 
technique used by the biggest and most experienced DX stations. Essentially 
the DX station transmits on one fixed frequency and tunes the receiver to a 
slightly different frequency 5-10kHz further up the band. The chaser listens on 
the DX transmit frequency and transmits within the 5-10kHz band. An 
experienced chaser will be able to identify the DX stations listening pattern and 
position themselves on the best frequency to make the contact quickly. Phew.`,
    lookup: "See page(s) 11 of the Full Licence Manual",
    syllabus: "7a.1",
    reference: "",
    examStrategy: 1,
    examStrategyNotes: "",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK06A Q18",
    question: `Which of the following IARU Region 1 countries is permitted to use the 
frequencies 472 – 479 kHz?
`,
    image: "",
    options: ["The Russian Federation", "United Kingdom", "Algeria", "Tunisia"],
    correct: 1,
    explanation: `A Look up question using EX309, no excuse to get these wrong!! `,
    lookup: "See page(s) 11 of the Full Licence Manual",
    syllabus: "7b.1",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: "EX309 look up.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK06A Q19",
    question: `If you must carry out work inside a piece of live mains powered equipment you should:`,
    image: "",
    options: [
      "Ensure that you wear an earthed wrist strap",
      "Ensure that you are standing on a conductive mat that is connected to a good earthing point",
      "Work with only one hand inside the equipment and keep the other hand in your pocket",
      "Remove all other personnel from the room",
    ],
    correct: 2,
    explanation: `Both 'a' and 'b' would provide a good earth and 
therefore a low resistance path for the mains to pass through your body, which 
is not a good thing! 'd' would mean there was no-one there to assist, should 
you come into contact with the mains electricity, so another bad choice. 'c' 
minimises the risk of having a low resistance path across your heart and 
therefore provides some degree of protection.`,
    lookup: "See page(s) 13 of the Full Licence Manual",
    syllabus: "8a.6",
    reference: "",
    examStrategy: 1,
    examStrategyNotes: "Should be a good drilling one.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK06A Q20",
    question: `Whilst a direct lightning strike carries a clear and obvious risk, what 
harm might be caused by a lightning strike in close proximity to an amateur radio station?`,
    image: "",
    options: [
      "Semiconductors in radio equipment can be destroyed due to the high level of static discharge",
      "Protective fuses in the DC supply can be blown due to excessive current being drawn by the receiver AGC circuits",
      "Solder in aerial connections can melt due to the high current flowing through the feeder",
      "The station could burst into flames due to the high levels of electromagnetic radiation surrounding the lightning strike",
    ],
    correct: 0,
    explanation: `'b' is highly unlikely; even if the lightning strike did 
trigger the AGC circuit, the current drawn should not blow any fuses. 'c' would 
be more likely if there was a direct strike. Any fires would be caused by high 
electrical currents, rather than EM radiation, so not 'd'.`,
    lookup: "See page(s) 16-17 of the Full Licence Manual",
    syllabus: "8e.1",
    reference: "",
    examStrategy: 3,
    examStrategyNotes:
      "I found the phrase 'static discharge' rang a few bells.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL:
      "obsidian://open?vault=FULL-LICENCE-COURSE&file=QUESTION%20ANALYSIS%20FOLDER%2Flightning_strike",
  },
  {
    source: "BBDL QUIZ WEEK06A Q21",
    question: `When travelling to another country with your amateur radio equipment, 
    which of the following is most relevant to check?`,
    image: "",
    options: [
      "Suitable feeder plug adapters are available",
      "PSU will work with the local mains voltage",
      "DC fuses are appropriately rated for local use",
      "Ofcom recognise the country as a member of the IARU ",
    ],
    correct: 1,
    explanation: `
    With the Key words being: '…most relevant…' the implication is that we are looking for the best answer.
    Also note, this question is towards the end of the paper, so is likely to be about safety.<hr>

    'a' – you do need appropriate feeder plugs but you would normally take them with you. 
    <mark>relevant but is it MOST relevant?</mark> <hr>
    'b' – different countries have different mains voltages so it a major consideration that the PSU 
    will work safely <mark>more relevant than feeder plugs</mark> <hr>
    'c' – the DC supply to your radio is the same no matter where you are (usually 13.8V) so there is 
no such thing as local rating for that <mark>not relevant</mark> <hr>
    'd' – IARU is made up of national radio societies. Ofcom are the UK regulator and they have no 
    interest in IARU, or what you do in other countries. <mark>not relevant</mark> <hr>
    'b' is the 'most relevant' correct answer <hr>
    `,
    lookup: "See page(s) x of the Full Licence Manual",
    syllabus: "8f.4",
    reference: "After Week06 Review in Week07 Tutorial Slides p4-6",
    examStrategy: 4,
    examStrategyNotes:
      "There is a lot to take in on this one. The explanation is well laid out.",
    examCalculation: 0,
    tagged: true,
  },
  {
    source: "BBDL QUIZ WEEK06A Q22",
    question: `It is important to keep records of your demonstration station risk 
assessments because:`,
    image: "",
    options: [
      "It is a legal requirement for every radio amateur to carry out risk assessments for all safety hazards",
      "All safety risk assessments must be made available to an officer acting on behalf of Ofcom",
      "Carrying out risk assessments on all safety hazards is a requirement of the UK amateur radio Licence",
      "Risk assessment records may be required for the purpose of insurance or in defence of negligence claims",
    ],
    correct: 3,
    explanation: `Relatively straightforward answer. Whilst there is a 
requirement to carry out assessments of EMF exposure, there is no explicit legal 
requirement to carry out full safety risk assessments in an amateur context. 
Ofcom are not really interested in amateur radio safety, other than for the 
general public's exposure to EMF.`,
    lookup: "See page(s) 14 of the Full Licence Manual",
    syllabus: "8f.6",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: "There are temptations here.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK06A Q23",
    question: ` In repairing a receiver that had suffered damage from a near-by 
lightning strike, a 27pF capacitor in the input filter had to be replaced. A 
replacement capacitor was sourced from a reputable supplier and fitted in 
place. On powering up the receiver the input filter was found to need some 
adjustment to make it work as it should. What is the most likely reason for 
that adjustment being needed?`,
    image: "",
    options: [
      "The repair process, heating and cooling during soldering, etc had changed the centre frequency of the input filter",
      "The damage caused by the electrostatic discharge had changed centre frequency of the input filter",
      "The new capacitor had a different value to the original, due to variation within a tolerance band.",
      "The new capacitor was incorrectly marked and had a different value to the original.",
    ],
    correct: 2,
    explanation: `'a' is feasible but usually once circuits have cooled 
down, they will return to their original frequency, so it is only a maybe. 'b' is 
wrong as we know the 27pF capacitor needed replacing, but once replaced, the 
effect of the damage should have been nullified, so not a strong contender. 'c' 
makes sense, a 27pF capacitor with a 10% tolerance could be anywhere 
between 24.3 and 29.7pF, and that could be enough to detune the filter, 
especially is one was at the low end, and the other at the high end, so 'c' looks 
strong. Whilst it is no impossible, 'd' is highly unlikely as the question tells us 
the component came from a reputable supplier. Had it been purchased on a 
popular auction site, then there may be more doubt. 'c' is the best answer. `,
    lookup: "See page(s) 19 of the Full Licence Manual",
    syllabus: "8f.6",
    reference: "we covered it in a bit more detail in Week 3 of the course",
    examStrategy: 1,
    examStrategyNotes: "Fairly straightdorward.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK07 Q01",
    question: `The Dynamic Range of a receiver is defined as the difference between:`,
    image: "",
    options: [
      "The –60dB points above and below the wanted signal",
      "The minimum discernible signal and the maximum signal without distortion",
      "The lowest and highest radio frequencies it is able to receive",
      "The lowest and the highest audio frequencies it is able to reproduce",
    ],
    correct: 1,
    explanation: `The only viable option here is 'b', which is the correct answer.`,
    lookup: "See page(s) 57-58 of the Full Licence Manual",
    syllabus: "3h.3",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: `There is only one definition of Dynamic Range.`,
    examCalculation: 0,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK07 Q02",
    question: `The diagram shows:`,
    image: "images/bbdl-quizzes-week07-q02.png",
    options: ["A mixer", "An AGC stage", "an RF amplifier", "an IF filter"],
    correct: 0,
    explanation: `Looking at the inputs and outputs, there is RF (Radio Frequency) and LO (Local
Oscillator) going in, with IF (Intermediate Frequency) coming out. That suggests some kind of mixer,
rather than an amplifier or filter.`,
    lookup: "See page(s) 58-60 of the Full Licence Manual",
    syllabus: "3i.1",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: `Look for two inputs and one output, that makes it a ...`,
    examCalculation: 0,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK07 Q03",
    question: `A UHF receiver has an IF of 36 MHz. When it is tuned to 503 MHz,
     what are the two possible local oscillator frequencies?`,
    image: "",
    options: [
      "467 MHz and 539 MHz",
      "431 MHz and 575 MHz",
      "72 MHz and 1006 MHz",
      "36 MHz and 539 MHz",
    ],
    correct: 0,
    explanation: `A simple sum and difference calculation to find what two local oscillator
frequencies can be used to resolve a 503MHz carrier whilst using an IF of 36MHz. Sum is 36 + 503 =
539MHz and difference is 503 – 36 = 467MHz, making 'a' the correct answer.`,
    lookup: "See page(s) 59 of the Full Licence Manual",
    syllabus: "3i.3",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: `Sum and Difference!`,
    examCalculation: 0,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK07 Q04",
    question: `Double superheterodyne receivers will typically have:`,
    image: "",
    options: [
      "Both first and second IFs of around the same frequency to enhance the selectivity",
      "Both first and second IFs on frequencies that are harmonically related to the Wanted Frequency",
      "A high first IF to push the image frequency as far away from the wanted frequency as possible and a low second IF to provide good selectivity",
      "A low first IF to push the image frequency as far away from the wanted frequency as possible and a high second IF to provide good selectivity",
    ],
    correct: 2,
    explanation: `Having both IFs on the same frequency would not be two IFs (you cannot
change a frequency to itself), so 'a' is incorrect. Having IFs on harmonically related frequencies would be
unwise as unwanted mixer products could be on the IFs, so 'b' is wrong. Normal practice is to have a high
1st IF to push the image frequency as far away from the wanted frequency as possible, which makes 'c'
look good and rules out 'd'. The only credible answer is therefore 'c' and the second part of the answer,
having a low 2nd IF to provide good selectivity, confirms it.`,
    lookup: "See page(s) 59-60 of the Full Licence Manual",
    syllabus: "3i.3",
    reference: "",
    examStrategy: 1,
    examStrategyNotes: `Drill this.`,
    examCalculation: 0,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK07 Q05",
    question: `Which block of a superhet receiver allows it to be tuned across a wide range of radio frequencies?`,
    image: "",
    options: [
      "The Carrier Insertion Oscillator",
      "The Local Oscillator",
      "The Demodulator",
      "The IF filter",
    ],
    correct: 1,
    explanation: `In a superhet, the IF Filter, the demodulator and the CIO are all only dealing
with one frequency, so whilst they will be involved in all received frequencies, they do not facilitate a
wide tuning range, so definitely not those. The Local Oscillator maybe an LC based VFO, or a synthesiser
based on a PLL or DDS, and it is that which generates a range of frequencies to mix with a range of RF
frequencies to produce the fixed IF.`,
    lookup: "See page(s) 59-60 of the Full Licence Manual",
    syllabus: "3i.2",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: `What does the tuning?`,
    examCalculation: 0,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK07 Q06",
    question: `Phase noise is normally a phenomenon associated with:`,
    image: "",
    options: [
      "Phase modulators",
      "Digital oscillators",
      "Reception of signals via two or more paths",
      "Rectification of AC in a mains power supply",
    ],
    correct: 1,
    explanation: `Phase noise can be generated by all oscillators. It is measured in dBc/Hz and is
a measure of how much noise there is in relation to the oscillator's output frequency. It can be heard
most widely as the hash accompanying a clean carrier. Some oscillators are noisier than others. Quiet
ones are free running VFO's and crystal oscillators. Bad ones are poorly designed phase locked loops and
Direct Digital Synthesisers.`,
    lookup: "See page(s) 54, 60-61 of the Full Licence Manual",
    syllabus: "3i.5",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: `PLL and DDS are digital oscillators.`,
    examCalculation: 0,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK07 Q07",
    question: `In the diagram, which component, or components, tune the circuit to the appropriate frequency?`,
    image: "images/bbdl-quizzes-week07-q07.png",
    options: ["Only Ce", "Only C1", "Only C2", "C1 and C2"],
    correct: 3,
    explanation: `Ce is a by-pass or de-coupling capacitor, so not 'a'. C1 tunes L2, so it could be
'b' but what about tuning the output stage? C2 tunes the unlabelled primary of the output transformer,
so 'c' could be a correct answer. However, if both C1 and C2 tune the amplifier, at input and output, that
must make 'd' the most correct 'best' answer.`,
    lookup: "See page(s) 58-59 of the Full Licence Manual",
    syllabus: "3j.1",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: `Pay attention`,
    examCalculation: 0,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK07 Q08",
    question: `In order to overcome high levels of background noise, 
    Chris decides to fit an external preamplifier to the input of their 
    3.5MHz receiver. The receiver has a dynamic range of 95dB and the 
    preamplifier has a gain of 10dB. The effective dynamic range of the 
    combined pre-amp and receiver system is likely to be around:`,
    image: "",
    options: ["85dB", "95dB", "105dB", "950dB"],
    correct: 0,
    explanation: `On 3.5MHz the external noise is generally quite high. By adding 10dB gain to
the receiver, the noise level will be amplified by 10dB and strong signals will still distort once they reach
the same level as they would without the amplifier. That means the effective dynamic range of the
combined system is 10dB less than it was without the external pre-amp. If there were no noise, as is
often the case on 28MHz and VHF/UHF, the dynamic range would be unchanged, weaker signals would
be heard with a 10dB gain. Strong signals would still distort at lower signal levels than without the
amplifier, but the 95dB range would be retained. Remember that the basic dynamic range of a receiver
cannot really be improved upon, it can only be made worse.`,
    lookup: "See page(s) 65-66 of the Full Licence Manual",
    syllabus: "3j.1",
    reference: "",
    examStrategy: 3,
    examStrategyNotes: `Noise will be amplified too so it will be less.`,
    examCalculation: 0,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK07 Q09",
    question: `Sideband inversion occurs in a mixer when:`,
    image: "",
    options: [
      "The modulator is overloaded by too much AF signal",
      "The modulated signal is subtracted from the RF oscillator signal",
      "The RF oscillator signal is subtracted from the modulated signal",
      "The Power Amplifier is overloaded by too much drive signal",
    ],
    correct: 1,
    explanation: `'a' and 'd' may cause distorted signals to be transmitted, but no sideband
inversion will occur through stages being overdriven. So is it modulated signal from oscillator or
oscillator from modulated? If in doubt try an example for yourself; USB signal 14.0 to 14.003MHz, take
that from an oscillator on 20MHz and IF will run 6.0 to 5.997MHz (now looks like LSB). Same 14MHz USB
signal with a 5MHz oscillator; subtracting 5MHz from 14MHz USB gives 9.0 to 9.003MHz (still USB). So
sideband inversion occurs when you subtract the modulated signal from the oscillator signal.`,
    lookup: "See page(s) 63-64 of the Full Licence Manual",
    syllabus: "3i.3",
    reference: "",
    examStrategy: 3,
    examStrategyNotes: ` LO to the left and WANTED to the right, with a MINUS in the middle, that's INVERSION.`,
    examCalculation: 0,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK07 Q10",
    question: `Which of the following statements is TRUE in relation to an external RF Amplifier being added to an existing receiver?`,
    image: "",
    options: [
      "The dynamic range will be improved",
      "The external noise levels will be reduced",
      "The reception of weaker signals can be improved",
      "The Signal to Noise ratio for a given signal will always be improved",
    ],
    correct: 2,
    explanation: `External RF amplifiers sometimes help, sometimes not. They can never improve
the dynamic range of the receiver, so 'a' is not true. They can increase noise levels, but they will never
reduce noise levels, so 'b' is not true. A good quality RF amp in a low noise environment can improve
weak signal reception, noting that distortion will still occur earlier with moderate to strong signals, so 'c'
looks to be a feasible answer. With the potential to increase noise and with signals distorting at a lower
level, 'd' cannot always be true. 'c' is therefore the 'most correct' answer.`,
    lookup: "See page(s) 57-58 of the Full Licence Manual",
    syllabus: "3j.1",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: `It's the pre-amp phenomena.`,
    examCalculation: 0,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK08 Q01",
    question: `All amateur signals, both analogue and digital, include some form of:`,
    image: "",
    options: [
      "Amplitude modulation",
      "Frequency modulation",
      "Frequency or phase modulation",
      "Amplitude, and/or frequency/phase modulation",
    ],
    correct: 3,
    explanation: ` It almost seems too simple to be true, but yes, all amateur signals consist of 
changes in the amplitude or frequency / phase of a carrier. Sometimes the carrier is purposely not 
transmitted as in SSB, but a carrier was needed to create the modulation. Note here that phase and 
frequency modulation are very similar and often the only difference is the way the modulation was 
created, but there can be subtle differences. This fact allows all forms of modulation to be generated, 
and demodulated, in software.`,
    lookup: "See page(s) 67-68 of the Full Licence Manual",
    syllabus: "3m.1",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: `Just have to think it through`,
    examCalculation: 0,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK08 Q02",
    question: `What information is normally depicted in the position of the phasors resolved as the values on two axes at right angles?`,
    image: "",
    options: [
      "The amplitude and phase of a signal",
      "The amplitude and frequency of the signal",
      "The peak deviation and phase of the signal",
      "The amplitude and peak deviation of the signal",
    ],
    correct: 0,
    explanation: `In this question we have parachuted into the understanding of signals that are 
to be found in software defined radios (SDR). A phasor is a way of displaying the amplitude (length of the 
phasor), and phase angle of the signal (the circular angle from a vertical or horizontal reference). If you 
wish to delve a little deeper and actually see a rotating phasor, please spend a few minutes looking at 
this oscilloscope setup: https://www.youtube.com/watch?v=5GGD99Qi1PA `,
    lookup: "See page(s) 67-68 of the Full Licence Manual",
    syllabus: "3m.1",
    reference: "",
    examStrategy: 4,
    examStrategyNotes: `More learning materials needed.`,
    examCalculation: 0,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK08 Q03",
    question: `A receiver that functions by processing in-phase and quadrature signals (IQ Signals) enables:`,
    image: "",
    options: [
      "Digital signal processing and demodulation",
      "Double balanced demodulation",
      "Two signals to be demodulated at the same time",
      "More accurate stabilisation of a phase locked loop frequency synthesiser",
    ],
    correct: 0,
    explanation: ` The words “in-phase and quadrature signals” are a good guide to the fact that 
we are describing a Software Defined Radio (SDR) receiver. 'b' doesn't sound like any of the 
demodulators covered in the syllabus, so not that one. 'c' may be possible with an SDR but it would 
require two receivers to be running and is a feature on some analogue radios, so only a 'maybe' at best 
and 'd' is just not true; I and Q play no part in the PLL block diagram. Only 'a' includes the critical word 
'digital' and is 100% correct.`,
    lookup: "See page(s) 67-68 of the Full Licence Manual",
    syllabus: "3m.2",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: `Drill.`,
    examCalculation: 0,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK08 Q04",
    question: `In a hybrid superheterodyne/SDR receiver, 
    what do you need to do to the IF to produce I and Q components for digital processing?`,
    image: "",
    options: [
      "Mix the IF with a local oscillator that has a 90-degree phase difference to the IF signal",
      "Mix the IF with two local oscillators that have a 90-degree phase difference to each other",
      "Split the signal path into two and include a multiplier in one of the new pathways",
      "Split the signal path into two and include a Q filter in one of the new pathways",
    ],
    correct: 1,
    explanation: ` The first building brick of an SDR receiver is the creation of in-phase and 
quadrature signals. This can be done in a number of ways; using two local oscillators to produce I and Q 
signals is one way. This is captured in the description in 'b'. Answer 'a' is not correct, because a single LO 
would not produce an I and a Q signal, so not 'a'. 'c' and 'd' are just plain wrong. `,
    lookup: "See page(s) 67-68 of the Full Licence Manual",
    syllabus: "3m.2",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: `Drill`,
    examCalculation: 0,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK08 Q05",
    question: `Which of the following would NOT be shared between the transmitter and receiver sections of an SSB transceiver?`,
    image: "",
    options: [
      "The antenna socket",
      "The local oscillator",
      "The AGC loop",
      "The carrier insertion oscillator",
    ],
    correct: 2,
    explanation: `If you have a transceiver yourself, you will know that the antenna socket is used 
on both transmit and receive, so not 'a'. There is generally only one tuning knob to tune the local 
oscillator, so not 'b'. AGC is a receiver feature, not to be confused with ALC which is a transmitter 
feature, so 'c' looks like a good answer. Finally, the same CIO is often used to drive the SSB generator and 
the Product Detector, so not 'd'. `,
    lookup: "See page(s) 50 of the Full Licence Manual",
    syllabus: "3n.1",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: `Drill.`,
    examCalculation: 0,
    exam_NOT: true,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK08 Q06",
    question: `Which of the following describes a transverter?`,
    image: "",
    options: [
      "A device for converting 12 V DC to 240 V AC",
      "A frequency converter, allowing signals received on one band to be retransmitted on another band",
      "A frequency converter, allowing an HF transceiver to be used to transmit and receive on a VHF/UHF band",
      "A type of receiving antenna which matches 50 Ω coax at all HF frequencies",
    ],
    correct: 2,
    explanation: `A transverter is a combination of a receive converter and a transmit converter 
to allow a transceiver to be used on a different band. 'a' would be a voltage inverter, 'b', a transponder 
and 'd' could be a dummy load, or one of those antennas that claims to have a flat SWR across the HF 
bands. That means that 'c' is the correct answer. `,
    lookup: "See page(s) 66 of the Full Licence Manual",
    syllabus: "3n.2",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: `Drill`,
    examCalculation: 0,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK08 Q07",
    question: `Debbie buys a second-hand transverter to operate to 4m using 
    her 28MHz transceiver. She finds that the crystal is missing from the 
    transverter local oscillator. 
    Which frequency should she buy to replace it?`,
    image: "",
    options: ["70MHz", "28MHz", "42MHz", "4MHz"],
    correct: 2,
    explanation: `A simple mixer sum and difference question. The 4m band is approximately 
70MHz so the crystal will be either 70 plus 28 (the sum) = 98MHz, or 70 minus 28 (the difference) = 
42MHz. 98MHz is not an option given, which makes 'c' the correct answer. `,
    lookup: "See page(s) 66 of the Full Licence Manual",
    syllabus: "3n.2",
    reference: "",
    examStrategy: 4,
    examStrategyNotes: `Fairly straightforward.`,
    examCalculation: 1,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK08 Q08",
    question: `You are constructing a stacked array comprising two Yagi antennas
     for 144MHz and the instructions require you to make two quarter wave feeders. 
     You plan to use standard polythene dielectric coaxial cable. 
     How long should each one be?`,
    image: "",
    options: ["2.08m", "1.04m", "0.52m", "0.35m"],
    correct: 3,
    explanation: `To find a quarter wave length of feeder you must divide 300 by the frequency 
to get the wavelength and then divide by 4. So, 300/144 = 2.08 and 2.08/4 = 0.52m. To make a physical 
quarter wave length feeder we must take the velocity factor into account, which is generally taken as 
0.67 for standard coax. So 0.52 x 0.67 = 0.35m making 'd' the correct answer.`,
    lookup: "See page(s) 72 of the Full Licence Manual",
    syllabus: "4a.3",
    reference: "",
    examStrategy: 4,
    examStrategyNotes: `Follow the steps. A flashcard or two would be useful.`,
    examCalculation: 3,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK08 Q09",
    question: `The diagram shows:`,
    image: "images/bbdl-quizzes-week08-q09.png",
    options: [
      "a 1:1 transformer balun",
      "a 4:1 transformer balun",
      "a sleeve balun",
      "an ATU",
    ],
    correct: 0,
    explanation: `The diagram clearly shows a transformer balun with 6 turns 
on both primary and secondary, albeit the secondary is centre tapped. So, if the turns are the same, the 
impedance is the same on both sides, or 1:1.`,
    lookup: "See page(s) 69-70 of the Full Licence Manual",
    syllabus: "4b.1",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: `Study the types of balun. Perhaps a composite picture of them all in the diagram editor.`,
    examCalculation: 0,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK08 Q10",
    question: `Which one of the following statements is correct?`,
    image: "",
    options: [
      "Coax feeders never radiate",
      "A balun should prevent radiation from coax feeding a balanced antenna",
      "Radio waves have a greater velocity in feeder than in air",
      "Velocity factor means that a 1/4 λ of feeder will be longer than a true 1/4 λ",
    ],
    correct: 1,
    explanation: ` If coax never radiated, we would not need baluns, so 'a' is wrong. 'b' kind of 
backs that up and looks like a potential correct answer. 'c' is wrong, RF goes slower in solids than in free 
space, and 'd' is equally wrong as physical lengths are always shorter than the calculated 'electrical' 
length. `,
    lookup: "See page(s) 69-70 of the Full Licence Manual",
    syllabus: "4b.1",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: `Narrow it down...`,
    examCalculation: 0,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK08 Q11",
    question: `The ADC in an SDR receiver can produce unintended digital signals. These are known as:`,
    image: "",
    options: [
      "Intermodulation products",
      "Spurious emissions",
      "Harmonics",
      "Aliases",
    ],
    correct: 3,
    explanation: `ADC stands for Analogue to Digital Converter which are capable of producing 
unintended signals if the sampling rate is below the Nyquist rate or twice the wanted frequency. Those 
unintended signals are known as aliases and we use anti-alias filters to prevent them happening. Options
'a', 'b' and 'c' are all transmitter interference problems, more to do with analogue circuits, so not correct 
here. `,
    lookup: "See page(s) 39-40 of the Full Licence Manual",
    syllabus: "2f.1",
    reference: "",
    examStrategy: 1,
    examStrategyNotes: `Drill`,
    examCalculation: 0,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK08 Q12",
    question: `The Fourier Transform is used to:`,
    image: "",
    options: [
      "Change mains voltage to a lower voltage in a digitally controlled switch mode power supply",
      "Transform the input impedance of an antenna system to match the output of an SDR-based transmitter",
      "Take digital signals in the time domain and calculate the amplitude and frequencies of the original signals",
      "Digitize complex analogue waveforms to enable them to be processed in software",
    ],
    correct: 2,
    explanation: `'a' sounds like mains transformer but that wouldn't be found in a switch mode 
power supply, so wrong on two counts. SDR-based transmitters have no different requirements for 
antenna system matching to analogue transmitters; the power amplifiers are all analogue, so 'b' is 
nonsense. 'c' is pretty much the textbook/syllabus definition of the Fourier Transform, so looks good. 'd' 
is the job of the Analogue to Digital Convertor (ADC), so not that one.`,
    lookup: "See page(s) 40 of the Full Licence Manual",
    syllabus: "2f.2",
    reference: "",
    examStrategy: 3,
    examStrategyNotes: `Always difficult with some similar answers.`,
    examCalculation: 0,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK08 Q13",
    question: `A response curve of an IFT that shows a 'double peak' with a dip in the middle would indicate:`,
    image: "",
    options: [
      "An over coupled IF transformer",
      "A single IF tuned circuit",
      "An under coupled IF transformer",
      "A critically coupled IF transformer",
    ],
    correct: 0,
    explanation: `The 'double peak' curve described in the question is a classic indicator of an 
over coupled IFT, making 'a' the correct answer.`,
    lookup: "See page(s) 61-62 of the Full Licence Manual",
    syllabus: "3i.4",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: `Preparation is key. IFT is an Intermediate Frequency Transformer.`,
    examCalculation: 0,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK08 Q14",
    question: `The circuit shown in the figure is:`,
    image: "images/bbdl-quizzes-week08-q14.png",
    options: [
      "An AM demodulator, also known as an Envelope Detector",
      "An SSB demodulator, also known as a Product Detector",
      "A Data Mode demodulator, also known as a Phase Detector",
      "An FM demodulator, also known as a Ratio Detector",
    ],
    correct: 0,
    explanation: `The single diode and absence of a CIO or BFO suggests that this an AM 
detector, aka an envelope detector, making 'a' the answer to go for. It is worth remembering that the 
terms demodulator and detector mean much the same thing, in receivers; the demodulation is carried 
out by different detectors, depending on the mode.`,
    lookup: "See page(s) 62-64 of the Full Licence Manual",
    syllabus: "3k.1",
    reference: "",
    examStrategy: 4,
    examStrategyNotes: `Another composite of the options using diagram editor...`,
    examCalculation: 0,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK08 Q15",
    question: `AGC voltage is often derived from the output of the demodulator and applied to:`,
    image: "",
    options: [
      "the local oscillator",
      "the IF amplifier",
      "the demodulator itself",
      "the RF power amplifier",
    ],
    correct: 1,
    explanation: `AGC alters the gain of the receiver to maintain a constant level of audio output 
and feeding back to the local oscillator or the demodulator will not help achieve the aim, ruling out 'a' 
and 'c'. The RF power amplifier is a transmitter stage. So not relevant to AGC in a receiver. The only one 
that fits here is 'b', which is the correct answer. Most of the receiver amplification takes place in the IF 
amplifier stages so changing the IF gain will have the most effect in maintaining a constant level of audio 
output, but it is not unknown for the AGC to also control the RF amplifier gain. `,
    lookup: "See page(s) 62-63 of the Full Licence Manual",
    syllabus: "3l.1",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: `Drill`,
    examCalculation: 0,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK09 Q01",
    question: `If you make a half-wavelength dipole for use on 14.200MHz, you can expect each side of the 
dipole to be:`,
    image: "",
    options: ["3.53m", "5.02m", "5.28m", "5.55m"],
    correct: 1,
    explanation: `Use λ = 300/MHz to find 1λ, halve it to give ½ λ then multiply by 
0.95, to allow for the end correction factor, then halve again to give dimension for one 
half of the dipole. That should show that B is the correct answer.`,
    lookup: "See page(s) 72 of the Full Licence Manual",
    syllabus: "4d.1",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: `Just follow the steps.`,
    examCalculation: 1,
    exam_NOT: false,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK09 Q02",
    question: `The passive elements in a Yagi antenna will:`,
    image: "",
    options: [
      "Be longer than ½ λ",
      "Cause the coax feeder to radiate",
      "Increase the feedpoint impedance of the driven element",
      "Decrease the feedpoint impedance of the driven element",
    ],
    correct: 3,
    explanation: `Only the reflector(s) will be longer than the driven element, so 
not 'a'. There is nothing to suggest the additional elements will cause the feeder to 
radiate, so not 'b'. So, do they increase or decrease the feedpoint impedance? It is a 
decrease and using a standard dipole as the driven element of a Yagi will result in a 
feedpoint impedance of about 12Ω. So 'd' is the correct answer.`,
    lookup: "See page(s) 74 of the Full Licence Manual",
    syllabus: "4d.2",
    reference: "",
    examStrategy: 1,
    examStrategyNotes: `Just part of the Yagi drilling for week09.`,
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK09 Q03",
    question: `In a half-wave dipole, the RF current flowing in an antenna is at a maximum:`,
    image: "",
    options: [
      "At the feedpoint of the antenna",
      "At the ends of the antenna elements",
      "When the voltage is also at a maximum",
      "When there is a high SWR",
    ],
    correct: 0,
    explanation: `It should be fairly obvious that the current stops at the end of a 
half-wave dipole – it cannot flow any further, so 'b' is ruled out. The ends of the antenna 
can be seen as a very high impedance because there is a high potential difference 
(voltage) and low (no) current. In the centre of the antenna the impedance is quite low, 
because there is high current, and low potential difference (voltage). It is worth noting 
that the current and the voltage are 90 degrees out of phase making 'c' wrong. When 
there is a high SWR, you may get very little RF flowing in the antenna as most of the 
power will be reflected back down the feeder, so not 'd'. `,
    lookup: "See page(s) 72 of the Full Licence Manual",
    syllabus: "4d.2",
    reference: "",
    examStrategy: 1,
    examStrategyNotes: `Just some drilling to do in week09.`,
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK09 Q04",
    question: `If the forward power on a feeder results in a reading of 666 volts and the 
reflected voltage is 222 volts, what is the SWR?`,
    image: "images/bbdl-quizzes-week09-SWR.png",
    options: ["4:1", "3:1", "2:1", "1:1"],
    correct: 2,
    explanation: `The formula for (Voltage) SWR is in the exam reference data 
booklet EX309, showing that you add the forward and reflected voltages together and 
divide them by the same numbers subtracted. In this case 666 + 222 = 888 divided by 666 
– 222 = 444 and 888/444 = 2.`,
    lookup: "See page(s) 71 of the Full Licence Manual",
    syllabus: "4e.1",
    reference: "",
    examStrategy: 3,
    examStrategyNotes: `Just pay attention to the formula.`,
    examCalculation: 2,
    exam_NOT: false,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK09 Q05",
    question: `Return Loss and Standing Wave Ratio are two ways of expressing the match, or 
mismatch, in an antenna system. Which of the following statements is TRUE?`,
    image: "",
    options: [
      "A high Return Loss equates to a low SWR",
      "A high Return Loss equates to a high SWR",
      "You cannot relate Return Loss and SWR as they are calculated from different data",
      "You can relate Return Loss and SWR as they are both expressed using a decibel notation",
    ],
    correct: 0,
    explanation: `This is one of those concepts best remembered by the extremes; 
if you have a perfect match between your feeder and your antenna (1:1 SWR) you will 
radiate all of your RF and there will be 100% loss from the system, put it another way, the 
Return Loss is at its highest possible value when the SWR is at its lowest, making 'a' sound 
about right. 'b' is the opposite so not that one. 'c' is true in that the two are calculated in 
different ways but there are ways to convert one to the other, they are just not in the Full
syllabus, so the full statement is not true. 'd' is wrong because Return Loss is expressed in 
dB but SWR is expressed as a ratio, like 2:1. `,
    lookup: "See page(s) 71 of the Full Licence Manual",
    syllabus: "4e.2",
    reference: "",
    examStrategy: 3,
    examStrategyNotes: `Drill drill drill!`,
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK09 Q06",
    question: `Your antenna system comprises a long length of coaxial feeder that loses about 
half of the power you feed in, and an antenna with a return loss of 27dB. What is 
the total Return Loss in your antenna system?`,
    image: "",
    options: ["24dB", "27dB", "30dB", "33dB"],
    correct: 3,
    explanation: `Two things to remember here, first that half power = -3dB and 
that total Return Loss is equal to the antenna Return Loss plus TWICE the feeder loss, so in 
this case, 27 plus 3 + 3 = 33dB = 'd'.`,
    lookup: "See page(s) 71 of the Full Licence Manual",
    syllabus: "4e.3",
    reference: "",
    examStrategy: 3,
    examStrategyNotes: `Just follow the steps!`,
    examCalculation: 3,
    exam_NOT: false,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK09 Q07",
    question: `The antenna matching unit circuit shown in the diagram is a:`,
    image: "images/bbdl-quizzes-week09-q07.png",
    options: ["Pi-match", "L-match", "T-match", "Gamma-match"],
    correct: 0,
    explanation: `A simple identification question. This is a 'Pi' network, so called 
because it looks like 'π'.`,
    lookup: "See page(s) 76-77 of the Full Licence Manual",
    syllabus: "4f.1",
    reference: "",
    examStrategy: 1,
    examStrategyNotes: `Drill those AMUs!`,
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK09 Q08",
    question: `The purpose of an antenna matching unit placed between the transmitter and 
the coax is to:`,
    image: "",
    options: [
      "Remove the standing wave from the feeder",
      "Tune the antenna system to the frequency in use",
      "Tune out any reactance to leave a purely resistive load",
      "Match the antenna impedance to the transmitter power level",
    ],
    correct: 2,
    explanation: `'a' is wrong, the AMU changes the impedance seen by the 
transmitter, but it does not do anything to the antenna/feeder mismatch, so the standing 
wave is still there, the transmitter just cannot 'see' it. 'b' is not true, and a good reason 
for not calling AMUs ATUs, because they do not 'tune' the antenna. There are exceptions 
to that rule, but they are beyond the syllabus and in those cases the AMU is more a part 
of the antenna system, than merely a 'go between'. 'c' sounds good, because the 
transmitter is operating at its most efficient when it is working into a pure 50Ω, zero 
reactance, load. 'd' is wrong because impedance has nothing to do with power; a well 
matched antenna system should give the same response no matter what power you are 
using. So, 'c' is the one to go for.`,
    lookup: "See page(s) 76-77 of the Full Licence Manual",
    syllabus: "4f.1",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: `Drill...`,
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK09 Q09",
    question: `What is the input impedance of a quarter wavelength of 75 Ω coax that has an 
antenna with a 50 Ω feedpoint impedance connected to its output?`,
    image: "images/bbdl-quizzes-week09-q09.png",
    options: ["50 Ω", "75 Ω", "112 Ω", "400 Ω"],
    correct: 2,
    explanation: `A 'simple' calculation that requires the formula: 
    $$ {Z_O}^2 = Z_{IN} \\times Z_{OUT} $$ 
from EX309 to be rearranged: 
$$ Z_{IN} = \\frac{{Z_O}^2}{Z_{OUT}} = \\frac{5625}{50} = 112.5Ω $$ so 'c' is the correct answer. Worth noting that this is just about 
the feedpoint impedance of a delta loop antenna!`,
    lookup: "See page(s) 70 of the Full Licence Manual",
    syllabus: "4f.2",
    reference: "",
    examStrategy: 4,
    examStrategyNotes: `Assign the question's words to the values for Zin, Zout and Z0 to make sense of the confusion. That leaves the unknown as Zin...`,
    examCalculation: 3,
    exam_NOT: false,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK09 Q10",
    question: `The feedpoint impedance of an antenna is 162 ohms, and you are feeding it with 50 ohm
coax. Which of the following would you need to fit between the antenna and the 
coax to give a good impedance match?`,
    image: "",
    options: [
      "A sleeve balun",
      "A quarter wavelength 90 ohm coaxial transformer",
      "A transformer balun with 3:1 turns ratio",
      "An isolation transformer with 3:1 turns ratio",
    ],
    correct: 1,
    explanation: `'a' can be discounted, whilst a sleeve balun is a very effective 
single band balun, it does nothing to the feedpoint impedance. 'b' requires a little 
calculation to know if the quarterwave feeder transformer would work. Both 'c' and 'd' 
offer a 3:1 turns ratio, so their impedance ratio will be 9:1, due to the square of the turns 
relationship, so both are wrong; 162Ω divided by 9 is well below 50Ω. 'b' looks like a good 
bet but the calculations below will confirm if it is the correct answer.`,
    lookup: "See page(s) 70 of the Full Licence Manual",
    syllabus: "4f.2",
    reference: "",
    examStrategy: 4,
    examStrategyNotes: `Follow the steps...`,
    examCalculation: 3,
    exam_NOT: false,
    tagged: false,
  },
  {
    source: "BBDL QUIZ WEEK09A Q01",
    question: `The total resistance of the circuit shown is:`,
    image: "images/bbdl-quizzes-week09a-q01.png",
    options: ["5k Ohm", "15k Ohm", "20k Ohm", "30k Ohm"],
    correct: 3,
    explanation: `You can do the formula thing, if you want, but three 30k resistors in parallel 
divide down to 10k and that in series with 20k adds up to 30k in total = ‘d’. `,
    lookup: "See page(s) 19-20 of the Full Licence Manual",
    syllabus: "2b.1",
    reference: "",
    examStrategy: 1,
    examStrategyNotes: "Shortcuts are available!",
    examCalculation: 1,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q02",
    question: `Increasing the surface area of a capacitor will:`,
    image: "",
    options: [
      "Increase its working voltage",
      "Increase its capacitance",
      "Decrease its working voltage",
      "Decrease its capacitance",
    ],
    correct: 1,
    explanation: `Surface area is one of the parameters in the Formula for calculating 
capacitance and it being on the top line means that any increase in area will increase the overall value, 
making ‘b’ the correct answer.`,
    lookup: "See page(s) 21-22 of the Full Licence Manual",
    syllabus: "2d.1",
    reference: "",
    examStrategy: 1,
    examStrategyNotes: "Yes this one is obvious.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q03",
    question: `Self-inductance can be defined as:`,
    image: "",
    options: [
      "the ability to store and release electric charge",
      "the self-generated electro motive force that enhances current flow",
      "the property that generates a back EMF that opposes any change of current flow",
      "the impedance value equivalent to a resistor of the same value in the same circuit",
    ],
    correct: 2,
    explanation: `‘a’ is wrong because capacitors store electric charge, inductors store energy as 
a magnetic field. ‘b’ is wrong because the self-generated EMF opposes change in current flow. ‘c’ looks 
good. ‘d’ is a bit of a ramble that sounds a bit like Dynamic Resistance but not self-inductance. ‘c’ it is. `,
    lookup: "See page(s) 23 of the Full Licence Manual",
    syllabus: "2d.4",
    reference: "",
    examStrategy: 1,
    examStrategyNotes: "Another obvious one.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q04",
    question: `If an inductor of 25µH is connected in series with a 10 Ohm resistor, and a DC supply 
connected, how long will it take for the current to reach 66% of its maximum value?`,
    image: "",
    options: ["2.5 µs", "400 ks", " 12.5 µs", "2 Ms"],
    correct: 0,
    explanation: `We are fortunate here because 66% is the current reached in 1 time constant. 
For a circuit containing a resistor and an inductor one time constant, τ = L/R`,
    lookup: "See page(s) x of the Full Licence Manual",
    syllabus: "2d.7",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: "One time constant is 66% and 5 time constants is full!",
    examCalculation: 2,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q05",
    question: `Which component can be used to block AC but allow DC to pass?`,
    image: "",
    options: [
      "Capacitor",
      "Inductor",
      "Slow-blow fuse",
      "Diode with forward bias",
    ],
    correct: 1,
    explanation: ` a capacitor, does the opposite, blocking DC but allowing AC to flow, so not ‘a’. 
An inductor has the property of self-inductance, generating a back EMF as current increases, or 
decreases, which opposes the flow of AC, but allows the DC to flow, so ‘b’ looks good. A slow-bow fuse, 
or any fuse for that matter, is just a piece of wire, so it will pass AC or DC up to its maximum rating, then 
it melts and nothing flows, so not ‘c’. ‘d’ is wrong as the diode will conduct DC and at least half of an AC 
signal. ‘b’ it is then.`,
    lookup: "See page(s) 26-27 of the Full Licence Manual",
    syllabus: "2e.5",
    reference: "",
    examStrategy: 3,
    examStrategyNotes: "Pay attention to this one. Tricky under pressure.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q06",
    question: `False digital representations of analogue signals can be avoided by:`,
    image: "",
    options: [
      "Including an anti-aliasing filter in the analogue signal path",
      "Sampling at less than half the Nyquist rate",
      "Using two signals with a 90 degree phase shift between them",
      "Adding ferrite to the outside of the signal input feeder",
    ],
    correct: 0,
    explanation: `The false digital representations that can be produced in the sampling of 
analogue signals are known as ‘aliases’. If you remember that it should be easy to deduce 
that an anti￾aliasing filter would be used to avoid them. ‘b’ is wrong because you need to sample at or above the 
Nyquist rate to avoid aliases. ‘c’ is the basis of the SDR concept and does not impact aliases. ‘d’ is a good 
way of preventing common mode currents and/or spurious signal generation, but not aliases.`,
    lookup: "See page(s) 39-40 of the Full Licence Manual",
    syllabus: "2f.1",
    reference:
      "BBDL hand out ‘Digital Signals for the Full Licence’ has better syllabus coverage. ",
    examStrategy: 1,
    examStrategyNotes:
      "The Digital Signals paper has been rendered in Obsidian.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL:
      "obsidian://open?vault=FULL-LICENCE-COURSE&file=QUESTION%20ANALYSIS%20FOLDER%2FDigital%20Signals%20and%20SDR%20for%20Full%20Licence",
  },
  {
    source: "BBDL QUIZ WEEK09A Q07",
    question: `An antenna matching transformer has a turns ratio of 1:3. It will match a 50Ω transmitter 
output to what impedance antenna?`,
    image: "",
    options: ["50 Ω", "75 Ω", "300 Ω", "450 Ω"],
    correct: 3,
    explanation: `For transformers the impedance ratio is determined by ‘the square of the turns’ 
ratio. So, in this case 1:3 turns gives 1:9 Z ratio. The 50Ω rig will therefore match a 450Ω load at the 
other side of the transformer. ‘d’ is the one to go for this time. The formula is in EX309 but you are 
unlikely to need it for this type of question.`,
    lookup: "See page(s) 29 of the Full Licence Manual",
    syllabus: "2g.1",
    reference: "",
    examStrategy: 2,
    examStrategyNotes:
      "Check the EX309 formula to confirm that Impedance is proportional to the square of the Turns Ratio.",
    examCalculation: 2,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q08",
    question: `Which of the following best describes a feature of a quartz crystal?`,
    image: "",
    options: [
      "It naturally has two resonant frequencies known as series and parallel.",
      "It contains two tuned circuits formed from small inductors and capacitors",
      "It is sensitive to polarity such that the resonant frequency depends on the crystal’s biasing.",
      "The resonance of the quartz material is directly proportional to the directivity of the electron flow through the mineral.",
    ],
    correct: 0,
    explanation: `‘a’ is the correct answer (all others are complete waffle!). All crystals have two resonant frequencies, 
quite close to each other, and you need to check whether the crystal is intended for series or parallel 
operation to ensure it works on the marked frequency.`,
    lookup: "See page(s) 29-30 of the Full Licence Manual",
    syllabus: "2h.2",
    reference: "",
    examStrategy: 1,
    examStrategyNotes: "Only one right answer. A well drilled answer.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q09",
    question: `Which of the following would conduct when reverse biased to more than a specifically designed voltage?`,
    image: "",
    options: [
      "Variable Capacitance Diode",
      "Light Emitting Diode",
      "Rectifier Diode",
      "Zener Diode",
    ],
    correct: 3,
    explanation: `A Variable Capacitance, or Varactor, diode is used in tuning and FM 
modulation circuits due to its capacitance changing properties when reverse biased, so not ‘a’. An LED 
simply emits light when it is forward biased and has no specific properties when reverse biased, so not 
‘b’. A Rectifier diode works by not conducting when reverse biased, so not ‘c’. The Zener diode, however, 
is often used in power supply regulation because it has the ability to conduct when reverse biased above 
a specific voltage that is set in its design and manufacture.`,
    lookup: "See page(s) 32 of the Full Licence Manual",
    syllabus: "2i.1",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: "This should be well drilled.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q10",
    question: `The amplifier in the diagram has:`,
    image: "images/bbdl-quizzes-week09a-q10.png",
    options: [
      "a low input impedance and a low output impedance",
      "a high input impedance and a high output impedance",
      "a high input impedance and a low output impedance",
      "a low input impedance and a high output impedance",
    ],
    correct: 3,
    explanation: `The diagram shows a common base amplifier, it has a low input impedance of 
around 50 ohms and a high output impedance of about 50k ohms.`,
    lookup: "See page(s) 35 Figure 5.21 of the Full Licence Manual",
    syllabus: "2i.4",
    reference: "",
    examStrategy: 5,
    examStrategyNotes:
      "Tricky. This image should be drilled. I beleieve it is a flashcard.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q11",
    question: `In a switch mode power supply, what does the ‘switching’ or ‘chopping’ section do?`,
    image: "",
    options: [
      "Convert mains AC to DC with a ripple",
      "Generate pulses of DC at high frequency",
      "Provide feedback to regulate the output voltage",
      "Smooth out the DC output",
    ],
    correct: 1,
    explanation: `The main sections of a switch mode PSU are: 
Mains rectifier produces pulses of DC at mains voltage and 50Hz.
Smoothing/reservoir capacitors producing DC at mains voltage.
Switching transistors create square wave pulses of DC in the kHz range at mains voltage.
A ferrite cored transformer that produces the require output current and voltage requirements.
A smoothing and filter section that cleans up the output.
A feedback and control section that monitors the output voltage to adjust the switching times of the 
switching transistors. So, the switching function is best described in answer ‘b’. `,
    lookup: "See page(s) 38 of the Full Licence Manual",
    syllabus: "2j.4",
    reference: "",
    examStrategy: 2,
    examStrategyNotes:
      "Drill. Although it says high frequency, it is faster than mains frequency.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q12",
    question: `What block is missing from this 145MHz FM transmitter?`,
    image: "images/bbdl-quizzes-week09a-q12.png",
    options: [
      "Frequency Multiplier",
      "Buffer Amplifier",
      "Frequency Discriminator",
      "Final Frequency Mixer",
    ],
    correct: 0,
    explanation: `The transmitter uses a multiplier arrangement to get to the final frequency. 
The carrier oscillator is on 16.17MHz, so the output from the x3 multiplier would be around 48.51MHz, 
which is someway short of 145MHz. Another x3 multiplier will have the output around 145.500MHz, 
which is what we want for 2m FM calling.`,
    lookup: "See page(s) 41-46 of the Full Licence Manual",
    syllabus: "3b.1",
    reference: "",
    examStrategy: 4,
    examStrategyNotes:
      "Watch out for the mention of the frequency in the question, and spot the gap! It is not a Buffer Amplifier!",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q13",
    question: `Which of the following is a consequence of a transmitter oscillator drifting:`,
    image: "",
    options: [
      "intermittent reception at the receiving station",
      "spurious emissions over a broad spectrum",
      "harmonics being transmitted",
      "out-of-band transmissions",
    ],
    correct: 3,
    explanation: ` ‘a’ ‘b’ and ‘c’ are simply wrong, they are not caused by drift. That only leaves 
‘d’ for the correct answer. Extreme drift can indeed take your transmissions out of the amateur band, 
especially if you are operating near the band edge such as on the narrow sub-sections of the 60m band.`,
    lookup: "See page(s) x of the Full Licence Manual",
    syllabus: "3c.1",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: "This should be well rehearsed.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q14",
    question: `In the diagram the unnamed block is:`,
    image: "images/bbdl-quizzes-week09a-q14.png",
    options: [
      "A power amplifier",
      "A low pass filter",
      "A voltage controlled oscillator",
      "A direct digital synthesiser",
    ],
    correct: 2,
    explanation: `Two of the potential answers feature in a phase lock loop circuit, ‘b’ and ‘c’, the 
PLL does not have a power amp, so ‘a’ is ruled out, and the diagram is not a DDS, so ‘d’ cannot be 
correct. However, the low pass filter, answer ‘b’, is already shown after the phase comparator, so the 
voltage controlled oscillator, answer ‘c’, is the one to go for.`,
    lookup: "See page(s) 44 of the Full Licence Manual",
    syllabus: "3c.3",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: "Another name for a Phase Lock Loop.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q15",
    question: `The main element of a frequency multiplier stage is normally a:`,
    image: "",
    options: [
      "Low pass filter",
      "Class C amplifier",
      "Class A amplifier",
      "Variable capacitance diode",
    ],
    correct: 1,
    explanation: `Depending on the cut-off frequency, a low pass filter could allow the original 
signal and any multiplied frequencies to pass. Even if the cut-off frequency was just above the desired 
multiplied frequency, any leakage of the fundamental frequency would also pass, so not ‘a’. The class C 
amplifier is the one known to be rich in harmonics so ideally suited to multiplying frequencies; answer ‘b’ 
looks like the correct option. A class A amplifier is ‘pure’ and is unlikely to produce many harmonics, so 
not much use as a multiplier, therefore ‘c’ is not correct. A varicap diode could be used to tune the tuned 
circuit, but the main element is the transistor that generates the harmonics, so not ‘d’.`,
    lookup: "See page(s) 46 of the Full Licence Manual",
    syllabus: "3d.1",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: "A little nugget to tuck away.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q16",
    question: `Assuming the peak envelope power (PEP) remains constant, which one of the following 
statements is true?`,
    image: "",
    options: [
      "FM will result in a higher average power than CW or SSB",
      "CW will result in a higher average power than FM or SSB",
      "AM will result in a higher average power than CW or FM",
      "SSB will result in a higher average power than FM or CW",
    ],
    correct: 0,
    explanation: `The FM carrier envelope has a constant amplitude so the PA is working all of 
the time the PTT is closed. All the others have peaks and troughs in the envelope, so have a lower 
average power. So ‘a’ is the correct answer. Discussed on pages 48 - 49 of the Full Licence textbook. It is 
worth noting that the concept of power amplifiers working more or less, depending on the mode, is often
referred to as the ‘duty cycle’. A high duty cycle equates to a higher level of average power and to higher 
level of loss and heat dissipation.`,
    lookup: "See page(s) 48-49 of the Full Licence Manual",
    syllabus: "3f.4",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: "Another wee nugget to tuck away.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q17",
    question: `In which section of a transceiver would you find an out of lock inhibitor?`,
    image: "",
    options: [
      "the PLL synthesiser",
      "the phasing modulator",
      "the waterfall display of a Software Defined Radio",
      "the anti-aliasing filter of a Digital to Analogue Convertor (DAC)",
    ],
    correct: 0,
    explanation: `The out of lock inhibitor prevents the transmitter from operating if the PLL is 
not locked, so preventing transmissions on frequencies that are not under control.`,
    lookup: "See page(s) 44-45 of the Full Licence Manual",
    syllabus: "3g.5",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: "Yep, time to dig out that precious nugget.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q18",
    question: `Overloading a superheterodyne receiver causes intermodulation products. These products are 
a problem because:`,
    image: "",
    options: [
      "They generate false signals on the image frequency",
      "They generate false signals called aliases",
      "They reduce the dynamic range of the receiver by limiting its ability to receive weak signals",
      "They reduce the dynamic range of the receiver by causing weaker signals to distort",
    ],
    correct: 2,
    explanation: ` ‘a’ is wrong because the intermodulation products are close to the wanted 
signal and have no connection to the image frequency or 2nd channel interference. ‘b’ is wrong as it is a 
feature of SDR not superhet receivers. ‘c’ looks good because the intermodulation products will raise the 
noise floor, burying weaker signals. ‘d’ is incorrect because the overloading would not add any gain that 
would cause weaker signals to distort.`,
    lookup: "See page(s) 58 of the Full Licence Manual",
    syllabus: "3h.3",
    reference: "",
    examStrategy: 3,
    examStrategyNotes: "It's all about raising the noise floor.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q19",
    question: ` Phase noise has the effect of:`,
    image: "",
    options: [
      "Causing a kind of echo effect",
      "Raising the minimum detection level",
      "Intermittent noise in a phase lock loop",
      "Wideband interference across the RF spectrum",
    ],
    correct: 1,
    explanation: `Ideally all frequency sources used in communication systems should deliver a 
pure sine wave carrier. This would be represented in the frequency domain by a single line. All real 
sources have unwanted amplitude or phase modulated noise components. These phase modulated 
components are known as phase noise and can be seen in the frequency domain as sidebands extending 
both above and below the wanted carrier. Among other effects, the phase noise raises the minimum
detectable signal floor. It can be reduced by the use of high Q oscillators, higher oscillator power and 
using low noise active devices.`,
    lookup: "See page(s) 54 of the Full Licence Manual",
    syllabus: "3i.5",
    reference: "",
    examStrategy: 4,
    examStrategyNotes: "More work on this. Perhaps a flashcard.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q20",
    question: `Adding an external pre-amplifier to a receiver can:`,
    image: "",
    options: [
      "Extend its usable frequency range",
      "Reduce its usable frequency range",
      "Increase its dynamic range",
      "Decrease its dynamic range",
    ],
    correct: 3,
    explanation: `Adding a pre-amp does nothing to the operating frequency, making ‘a’ and ‘b’ 
wrong. The additional gain of the amplifier can increase the noise at the bottom end of the dynamic 
range and will cause strong signals to distort, so reducing the dynamic range (by about the same dB as 
the gain of the amplifier).`,
    lookup: "See page(s) 65-66 of the Full Licence Manual",
    syllabus: "3j.1",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: "Yes it is a nugget!",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q21",
    question: `A ratio detector is used in which one of the following?`,
    image: "",
    options: [
      "An SWR meter",
      "An FM demodulator",
      "An AM demodulator",
      "An SSB demodulator",
    ],
    correct: 1,
    explanation: `A ratio detector is a type of demodulator, which rules out ‘a’. AM requires an 
envelope detector (so not ‘c’), SSB needs a product detector (so not ‘d’) and so the ratio detector must be 
used for FM, making ‘b’ the correct answer. `,
    lookup: "See page(s) 63-64 of the Full Licence Manual",
    syllabus: "3k.1",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: "Does Ratio Detector ring any bells. It ought to!",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q22",
    question: `In order to fully capture the information contained in the amplitude and phase of a signal, the 
position of the phasors must be resolved as the values on:`,
    image: "",
    options: [
      "The X axis",
      "The Y axis",
      "Two axes set at 90 degrees to each other",
      "Two axes set at 180 degrees to each other",
    ],
    correct: 2,
    explanation: `Phasor Diagrams are a graphical way of representing the magnitude and 
directional relationship between two or more alternating quantities. Although phase and amplitude can 
be compared and displayed on 2 axes at 90 degrees, phasors of different frequencies cannot be resolved.`,
    lookup: "See page(s) 67-68 of the Full Licence Manual",
    syllabus: "3m.1",
    reference: "",
    examStrategy: 4,
    examStrategyNotes: "More work needed on this one, including flashcards.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q23",
    question: `Which of the following transceiver blocks would be least likely to be used in both the receiver 
and transmit paths?`,
    image: "",
    options: [
      "SSB crystal filter",
      "Carrier Insertion Oscillator",
      "Automatic Gain Control loop",
      "Direct Digital Synthesiser Local Oscillator",
    ],
    correct: 2,
    explanation: `As a general rule of thumb, oscillators and filters are shared between the 
receiver and the transmitter in a transceiver. In this case, ‘a’, ‘b’ and ‘d’ fit that bill, and the AGC loop is 
only used in the receiver side of the transceiver, making ‘c’ the one to go for.`,
    lookup: "See page(s) 50 of the Full Licence Manual",
    syllabus: "3n.1",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: "Just work through it.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q24",
    question: `Which of the following would best describe a choke balun connected between a length of 
coaxial feeder and a balanced antenna?`,
    image: "",
    options: [
      "A device for a single frequency with no impedance matching",
      "A device for a single frequency with potential for impedance matching",
      "A broadband device with no impedance matching",
      "A broadband device with potential for impedance matching",
    ],
    correct: 2,
    explanation: `. The choke balun can be made by looping up coaxial feeder or by sliding ferrite 
beads onto the outside of the coax. It includes no transformer action, so ‘b’ and ‘d’ are ruled out. So, is it 
a single band device or a broadband device? The only single band balun is the sleeve balun, made from a 
one quarter wavelength external metallic sleeve, ruling out ‘a’.`,
    lookup: "See page(s) 69-70 of the Full Licence Manual",
    syllabus: "4b.1",
    reference: "",
    examStrategy: 4,
    examStrategyNotes: "More work needed.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: true,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q25",
    question: `If you make a half-wave dipole for use on 18.100MHz, you can expect each side of the dipole 
to be:`,
    image: "",
    options: ["8.29m", "7.87m", "4.14m", "3.94m"],
    correct: 3,
    explanation: `Use λ = 300/MHz to find 1 wavelength, halve it to give ½ wavelength then
halve it again to give you ¼ wavelength (one side of the dipole). Now multiply by 0.95, to allow for the 
end correction factor, and that will give you the dimension for one half of the dipole. That should show 
that ‘d’ is the correct answer.`,
    lookup: "See page(s) 72 of the Full Licence Manual",
    syllabus: "4d.1",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: "Straightforward.",
    examCalculation: 2,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q26",
    question: `A standing wave on a feeder is caused by:`,
    image: "",
    options: [
      "The antenna being resonant",
      "The interaction of an RF signal travelling up the feeder to the antenna and RF signal travelling back down the feeder having been reflected from the antenna",
      "The multiplication of the RF voltage and the RF current at any point on the feeder",
      "The feedpoint impedance of the antenna being too closely matched to the characteristic impedance of the feeder",
    ],
    correct: 1,
    explanation: ` Generally speaking, if the antenna is resonant the feedpoint impedance will be 
about what is expected and therefore there should be no standing wave on the feeder, so not ‘a’. ‘b’ 
sounds good as it is taking about forward and reflected power. ‘c’ is the calculation for input power and 
nothing to do with standing waves and ‘d’ describes the exact circumstances for no standing waves on 
the feeder.`,
    lookup: "See page(s) 71 of the Full Licence Manual",
    syllabus: "4e.1",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: "Fairly easy.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q27",
    question: `Which of the following statements is FALSE?`,
    image: "",
    options: [
      "Placing an AMU at the transmitter end of an antenna system will not remove the standing wave from the feeder",
      "An ‘L’ match AMU can only match loads higher in impedance than the transmitter output impedance",
      "An AMU should be able to tune out any reactance to leave a purely resistive load",
      "AMU components must be capable of handling the high currents that circulate within the unit",
    ],
    correct: 1,
    explanation: ` ‘a’ is true, the AMU changes the impedance seen by the transmitter, but 
it does not do anything to the antenna/feeder mismatch, so the standing wave is still there, the 
transmitter just cannot ‘see’ it. ‘b’ is false, because an ‘L’ match can be used in two configurations, one 
way for matching low Z and the other for high Z systems. ‘c’ sounds good, because the transmitter is 
operating at its most efficient when it is working into a pure 50Ω, zero reactance, load. ‘d’ is also true 
because there are indeed high currents circulating in the matching circuits, which was covered at 
Intermediate level.`,
    lookup: "See page(s) 76-77 of the Full Licence Manual",
    syllabus: "4f.1",
    reference: "",
    examStrategy: 5,
    examStrategyNotes:
      "One by one, which ones are true, to eliminate and leave possibles.",
    examCalculation: 0,
    exam_NOT: true,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q28",
    question: `You are tuning across the band and you hear lots of stations spread over a 5 kilohertz section 
of the band all calling the same DX station. You then hear the DX station transmitting about 5 
kilohertz lower down the band. What is the most likely explanation for this?`,
    image: "",
    options: [
      "The DX station has drifted off frequency",
      "The DX station is trying to avoid QRN on their frequency",
      "The DX station is operating ‘split’ to spread out the pile up",
      "Those calling the DX station are all on the wrong frequency",
    ],
    correct: 2,
    explanation: `“Working split” is a technique that enables a DX station to work the maximum 
number of different stations in a given time window. This technique is often heard on the 20m band and, 
to a lesser extent, on other the bands. When trying to work the DX station the chaser listens to the DX 
transmissions and hopefully works out the listening pattern employed by the DX station. Then calls on 
that frequency until acknowledged. Woe betides the chaser who calls on the DX transmission frequency!`,
    lookup: "See page(s) 11 of the Full Licence Manual",
    syllabus: "7a.1",
    reference: "",
    examStrategy: 1,
    examStrategyNotes: "Another nugget.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q29",
    question: `Which of the following frequencies would be best if you want to call CQ using QRP SSB?`,
    image: "",
    options: ["5.2620 MHz", "5.2900 MHz", "5.2985 MHz", "5.3600 MHz"],
    correct: 2,
    explanation: `No need to guess this one, use the EX309 sheet supplied. No excuses for 
getting this type of question wrong.`,
    lookup: "See page(s) 11 of the Full Licence Manual",
    syllabus: "7b.1",
    reference: "",
    examStrategy: 3,
    examStrategyNotes:
      "Do this again and get it right this time. Write the frequencies down as kHz to match EX309, then go through one by one and eliminate. ",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q30",
    question: `Considering the four tasks below, when would you be most likely to encounter potentially 
lethal voltages?`,
    image: "",
    options: [
      "When tuning a valve-based linear amplifier , using the operating controls on the outside of the case",
      "When operating a mains powered switch mode power supply that has a metal case",
      "When dismantling a 600W FET-based amplifier that has its 50V DC power cord removed",
      "When setting up the 13.8 volt DC output level in a linear mains power supply with the case open.",
    ],
    correct: 3,
    explanation: `The first thing to note here, is that potential differences of 50 volts and below 
are not considered to be ‘potentially lethal’. Answer ‘c’ can therefore be discounted because it is 
powered by 50V DC, and even if there are some charged capacitors to worry about, there are no 
potentially lethal voltages present. Options ‘a’, ‘b’ and ‘d’ all have mains voltages present, which can be 
lethal, but which is ‘most likely’ to expose you to danger? ‘a’ and ‘b’ make no mention of the case being 
open, whereas ‘d’ does and that increases the risk of coming into contact with mains voltage, making ‘d’ 
the one to go for.`,
    lookup: "See page(s) 13 of the Full Licence Manual",
    syllabus: "8a.1",
    reference: "",
    examStrategy: 3,
    examStrategyNotes: "Work through this.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q31",
    question: `Which of the following organisations produces the WHO sponsored guidance on levels of 
exposures for Radio Frequency Electro-Magnetic Fields?`,
    image: "",
    options: ["RSGB", "IARU", "Ofcom", "ICNIRP"],
    correct: 3,
    explanation: `The International Commission for Non-Ionising Radiation Protection (ICNIRP) 
are the advisors to the World Health Organisation (WHO). Whilst the other organisations listed do 
produce guidance on EMF, only ICNIRP are sponsored by the WHO.`,
    lookup: "See page(s) 16 of the Full Licence Manual",
    syllabus: "8d.1",
    reference: "",
    examStrategy: 2,
    examStrategyNotes: "A nugget is needed.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q32",
    question: `Which of the following safety precautions would be more appropriate for a mobile amateur 
radio station than a home-based station?`,
    image: "",
    options: [
      "Securing the transceiver in its mounting bracket",
      "Having a Residual Current Device at the supply point",
      "Keeping a safe distance away from radiation antennas",
      "Ensuring all DC leads are fused in accordance with the manufacturers’ instructions",
    ],
    correct: 0,
    explanation: ` First thing to consider is the meaning of ‘mobile’; installed in a vehicle, in a 
vessel on an inland waterway, or as a pedestrian. None of the answers would be appropriate for 
pedestrian operation so the question must be pointing us towards operating in a vehicle, or vessel.
Having equipment secured in place is extremely important in a vehicle or vessel; as a result of any severe 
movement or emergency stop situation a heavy object could become a dangerous missile. This is not an 
issue in a home-based station, so looks like a good answer. ‘b’ would only be applicable in a mains￾operated station, so not applicable here. ‘c’ and ‘d’ are equally important in a home based or mobile 
station, so not correct here.`,
    lookup: "See page(s) x of the Full Licence Manual",
    syllabus: "8f.5",
    reference: "",
    examStrategy: 4,
    examStrategyNotes:
      "A great opportunity to get completely the wrong end of the stick. For 'mobile', probably best to read 'car', and get everything strapped down.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q33",
    question: `When a risk assessment is done you need to record:
`,
    image: "",
    options: [
      "The significant findings",
      "The risks that cannot be controlled",
      "Details of everything that has been considered",
      "All hazards present and the mitigations put in place for each one",
    ],
    correct: 0,
    explanation: `Relatively straight forward answer. Whilst you can record as much detail as 
you like, you must record the significant findings. If you have risks you cannot control, you should not 
really be going ahead, so not ‘b’. ‘c’ would make the risk assessment a very large document that makes it 
impossible to read, or to find the important points, so not ‘c’. ‘d’ is not correct because there could be 
hundreds of trivial hazards that need no mitigating action. `,
    lookup: "See page(s) x of the Full Licence Manual",
    syllabus: "8f.6",
    reference: "",
    examStrategy: 3,
    examStrategyNotes:
      "It looked straightforward, but a subtle play on words is hard to beat.",
    examCalculation: 0,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  {
    source: "BBDL QUIZ WEEK09A Q34",
    question: `The resistors in the base biasing circuit shown above have a tolerance of 10%. What is the
range of possible maximum and minimum DC voltages on the base?`,
    image: "images/bbdl-quizzes-week09a-q34.png",
    options: [
      "2.98v to 3.48v",
      "3.48v to 4.05v",
      "3.48v to 5.36v",
      "2.98v to 4.05v",
    ],
    correct: 3,
    explanation: `First point of note is that ‘the voltage on the base’ is the voltage across the 
lower base bias resistor. First, you need to calculate the minimum and maximum values for the base 
resistors and then do a few Ohm’s law calculations. The resistors are 10% tolerance so could be 10% 
higher, or 10% lower than there marked value. So, 33k could be anywhere between 29.7k and 36.3k and 
the 10k could be anything between 9k and 11k. The base bias resistors from a series circuit, so their 
resistances add up such that we can work out the current through both, and then the voltage across the 
bottom one. Now it is a matter of doing four calculations with the ‘extreme’ values of resistors 
combined: • 36.3k + 11k = 47.3 k which gives a current of V ÷ R = 15v ÷ 47.3k = 317µA 
o So, voltage across 11k = I x R = 3.48v
• 36.3k + 9k = 45.3k which gives a current of V ÷ R = 15v ÷ 45.3k = 331µA 
o So, voltage across 9k = I x R = 2.98v
• 29.7k + 11k = 40.7k which gives a current of V ÷ R = 15v ÷ 40.7k = 368µA
o So, voltage across 11k = I x R = 4.05v
• 29.7k + 9k = 38.7k which gives a current of V ÷ R = 15v ÷ 38.7k = 387µA
o So, voltage across 9k = I x R = 3.48v`,
    lookup: "See page(s) 19-20 of the Full Licence Manual",
    syllabus: "2a.1",
    reference: "",
    examStrategy: 3,
    examStrategyNotes:
      "Best to have a go through one or two of these, and check out potential dividers.",
    examCalculation: 3,
    exam_NOT: false,
    tagged: false,
    obsidianURL: "",
  },
  // {
  //   source: "BBDL QUIZ WEEK09 Q00",
  //   question: ``,
  //   image: "",
  //   options: ["", "", "", ""],
  //   correct: 9,
  //   explanation: ``,
  //   lookup: "See page(s) x of the Full Licence Manual",
  //   syllabus: "0",
  //   reference: "",
  //   examStrategy: 1,
  //   examStrategyNotes: ``,
  //   examCalculation: 0,
  //   exam_NOT: false,
  //   tagged: false,
  // },
]

export default BBDL_FULL_QUIZZES
