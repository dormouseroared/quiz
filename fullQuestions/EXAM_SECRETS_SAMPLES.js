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
    {
        source: "Exam Secrets Samples FULL Technical Basics Q1",
        question: "A potential divider uses two 1KΩ resistors to obtain a bias voltage from the supply. The two resistors are colour coded brown, black, red, silver, indicating they are 10% tolerance. How far out might the bias voltage be?",
        options: [
            "0%",
            "5%",
            "10%",
            "20%",
        ],
        correct: 2,
        explanation: "The error in the bias voltage will still be 10%. This may be shown by calculation using limit values, say 900Ω and 1100Ω. V(out) = V(in) * 900/2000 = V(in) * 0.45 which is 10% different to 0.5 expected.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2a.1",
        tagged: true
    },
    {
        source: "Exam Secrets Samples FULL Technical Basics Q2",
        question: "Two resistors are connected in parallel, 20 kΩ and 30 kΩ. They are connected in series with an 8 kΩ resistor. The effective resistance of the combination is:",
        options: [
            "12 kΩ",
            "20 kΩ",
            "28 kΩ",
            "33 kΩ",
        ],
        correct: 1,
        explanation: "The 20 kΩ and 30 kΩ resistors in parallel have a resistance of (20 x 30)/(20 + 30) which is 12 kΩ. In series with 8 kΩ gives 20 kΩ.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2b.1",
        tagged: true
    },
    {
        source: "Exam Secrets Samples FULL Technical Basics Q3",
        question: "What current is drawn from the power supply in the circuit diagram?  <br><br><img src='images/secrets-tech-q3.png' alt='test'  >",
        options: [
            "10mA",
            "11.8mA",
            "15mA",
            "18.5mA",
        ],
        correct: 0,
        explanation: "At first glance, this circuit is neither series nor parallel and cannot be solved by the normal means. However, further inpection shows that the voltages at each end of the 2 kΩ resistor are equal, so no current will pass through it. We can simply remove it, or replace it with a piece of wire, it will make no difference.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2b.1",
        tagged: true
    },
    {
        source: "Exam Secrets Samples FULL Technical Basics Q4",
        question: "What power is dissipated in the 1 kΩ resistor in the circuit diagram?  <br><br><img src='images/secrets-tech-q4.png' alt='test'  >",
        options: [
            "14mW",
            "19mW",
            "25mW",
            "225mW",
        ],
        correct: 0,
        explanation: "See Technical Basics Q3 for how to handle the 2 kΩ resistor. Then in the left pair of resistors, it is 15V across 4 kΩ so current is 3.75 mA and power = IV or I squared * R which is 3.75/1000 * 3.7/1000 * 1000 or 14 mA. Or, voltage divide 15V across 1 and 3 giving 3.75V and power = VI = V squared / R and if time permits confirm by doing it both ways.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2b.1",
        tagged: true
    },
    {
        source: "Exam Secrets Samples FULL Technical Basics Q5",
        question: "A radio receiver is reading S9 on its scale, which the handbook says is an input of 50 µV PD RMS. In 50Ω this represents an input power of:",
        options: [
            "0.05pW",
            "50pW",
            "1nW",
            "50µW",
        ],
        correct: 1,
        explanation: "power = voltage squared / resistance",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2b.1",
        tagged: true
    },
    {
        source: "Exam Secrets Samples FULL Technical Basics Q6",
        question: "The audio signal from a computer soundcard is 100mV, and must be reduced to 10mV to connect to the transmitter. A potential divider is used with a 10 kΩ resistor connected between the soundcard output and the transmitter microphone input. The resistor between the microphone input and earth should be:",
        options: [
            "900 Ω",
            "1.0 kΩ",
            "1.1 kΩ",
            "10 kΩ",
        ],
        correct: 2,
        explanation: "The voltage divider will have resistors in the ratio 9:1 with the smallest one giving 1/10 and the larger one giving 9/10.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2b.1",
        tagged: true
    },
    {
        source: "Exam Secrets Samples FULL Technical Basics Q7",
        question: "A trimmer capacitor consists of five foils connected to the body of the device and four foils loosely interleaved between them with a thin insulation to prevent contact. It is adjusted so the spacing is, on average, halved. The capacitance will:",
        options: [
            "halve",
            "reduce to about 70%",
            "increase by about 40%",
            "double",
        ],
        correct: 3,
        explanation: "The formula sheet gives the capacitance as C=kA/d where A is the area of the plates and d their separation. If d is halved the capacitance will double.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2d.1",
        tagged: true
    },
    {
        source: "Exam Secrets Samples FULL Technical Basics Q8",
        question: "A 1 µF and a 2 µF capacitor are connected in series. The two open ends are then connected to a 30V supply charging the two capacitors. What is the voltage across the 2 µF capacitor?",
        options: [
            "10V",
            "15V",
            "20V",
            "30V",
        ],
        correct: 0,
        explanation: "The relevant formula is C (Farads) = Q (Coulombs) / V (Volts). So, V = Q/C which means small C gives big V, and 20V on 1µF with 10V on 2µF. Formally 1/C = 1/1 + 1/2 so Total Capacitance is 0.667 µF. Total Charge Q = CV =30 X 0.667 = 20 µC. Then Voltage on 2µF is 20µC/2µF = 10V",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2d.1",
        tagged: true
    },
    {
        source: "Exam Secrets Samples FULL Technical Basics Q9",
        question: "The energy in a capacitor is given by E = Q x V, that is the product of charge and potential difference. Given that, by how much does the energy stored in a capacitor increase if the potential difference is doubled?",
        options: [
            "doubles x2",
            "triples x3",
            "quadruples x4",
            "five times x5",
        ],
        correct: 2,
        explanation: "In this question, you are given some information that is outside the syllabus (E = Q x V). You should know that for a capacitor the charge Q = V x C. So energy E = V squared x C, hence double squared or 4 times. This increase of energy as the square of voltage has hazard and safety implications.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2d.1",
        tagged: true
    },
    {
        source: "Exam Secrets Samples FULL Technical Basics Q10",
        question: "Capacitors are available with assorted dielectrics, polythene, ceramic, etc. A factor affecting the choice of dielectric is:",
        options: [
            "linearity",
            "leakage resistance",
            "phase angle",
            "operating frequency",
        ],
        correct: 3,
        explanation: "Many plastics will absorb some energy from an RF field, exampled by some plastics getting hot in a microwave oven - a good test in choosing suitable materials in power amplifier design. High power AMUs, especially with resonant circuits, can develop voltages easily into the kV range. That level of dielectric stress can cause some plastics to fail.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2d.2",
        tagged: true
    },
    {
        source: "Exam Secrets Samples FULL Technical Basics Q11",
        question: "Which dielectric in a capacitor is most likely to absorb energy resulting in losses as the frequency increases?",
        options: [
            "air",
            "glass",
            "polythene",
            "mica",
        ],
        correct: 2,
        explanation: "Polythene is goodd at audio frequencies but lossy at RF.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2d.2",
        tagged: true
    },
    {
        source: "Exam Secrets Samples FULL Technical Basics Q12",
        question: "Apart from the capacitance, another parameter to be considered when selecting a low value capacitor (say 0.1 µF) is:",
        options: [
            "power handling",
            "polarity",
            "breakdown voltage",
            "internal resistance",
        ],
        correct: 2,
        explanation: "A 0.1 µF capacitor won't be of electrolytic construction, so polarity is not an answer, but breakdown voltage is. Most capacitors are rated for DC and must be de-rated  for AC and particularly RF. For mains use, special capacitors, class X or Y, must be used, the choice depending on intended use and failure mechanism.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2d.3",
        tagged: true
    },
    {
        source: "Exam Secrets Samples FULL Technical Basics Q__________",
        question: "",
        options: [
            "",
            "",
            "",
            "",
        ],
        correct: 0,
        explanation: "",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
]

export default EXAM_SECRETS_SAMPLES