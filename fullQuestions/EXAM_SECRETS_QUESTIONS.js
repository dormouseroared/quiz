const EXAM_SECRETS_QUESTIONS = [
  {
    source: "Exam Secrets FULL [Licensing] 1C1-1",
    question: "Under normal circumstances, messages may be sent:",
    options: [
      "to any amateurs who are on the frequency or channel concerned",
      "to anybody who happens to be listening to you at the time",
      "only to a licenced amateur in person who has exchanged callsigns with you",
      "to the station of an amateur with whom communication has been established",
    ],
    correct: 3,
    explanation:
      "In OFW611, which is part of EX309, see Condition 6 paragraph 19, known as Clause 6-19. The licence wording is 'are only addressed to one or more amateur station(s)'. The station may include all those people there and they may reply if under supervision. Some care in reading this question is needed to pick up the significant difference between the amateur in person and those there at the station, all of whom may be the intended recipient of your transmission and may reply if supervised.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1c.1",
  },
  {
    source: "Exam Secrets FULL [Licensing] 1C1-2",
    question:
      "Under what circumstances, if any, is it permissible to send an obscured or encrypted message?",
    options: [
      "The message contains personal details about other people",
      "When the radio is being used for the purposes of licence clause 6-5",
      "You can be heard by uninvited members of the press",
      "A member of the public has asked you to send a family welfare message",
    ],
    correct: 1,
    explanation:
      "Clause 6-5b is assisting a User Service. Clause 6-19b: 'Unless the Radio Equipment is being used for the purposes of clause 6-5, the Licensee must ensure that transmissions between amateur stations are not encrypted for the purpose of obscuring their meaning...'",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1c.1",
  },
  {
    source: "Exam Secrets FULL [Licensing] 1C1-3",
    question:
      "The Wireless Telegraphy (Content of Transmission) Regulations 1998 sets out requirements covering:",
    options: [
      "sending messages of a grossly offensive or obscene or menacing character",
      "limits on the number of amateurs that can be addressed in any one transmission",
      "pretending to be a person authorised ny Ofcom in order to gain an advantage",
      "time limits of a single transmission, especially when operating through a repeater",
    ],
    correct: 0,
    explanation:
      "More to find out aRadiating bout the The Wireless Telegraphy (Content of Transmission) Regulations 1988",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1c.1",
  },
  {
    source: "Exam Secrets FULL [Licensing] 1D1-1",
    question:
      "If you are operating close to the edge of a band, what is the most severe situation you are risking if your transmitter frequency is unstable?",
    options: [
      "You may cause interference to another amateur station",
      "You may radiate outside the amateur band",
      "The station you are in contact with may have to re-tune",
      "Radiation of harmonics will increase noticably",
    ],
    correct: 1,
    explanation:
      "Radiating outside an amateur band is a breach of licence terms. You risk being required to fix the problem before transmitting again, having a modification to your licence or, possibly, losing your licence. Willing cooperation with the OFCOM inspector is clearly the best option, and it is always possible they have suitable test equipment to help you diagnose the problem.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1d.1",
  },
  {
    source: "Exam Secrets Samples FULL [Licensing] 1D1-2",
    question:
      "Satellite operation involves transmitting in one band and receiving in a different band. That means you must have equipment:",
    options: [
      "able to transmit on the uplink and receive on the downlink",
      "able to transmit and receive on both the uplink and downlink",
      "able to transmit and receive on the uplink and receive on the downlink",
      "able to transmit on both the uplink and downlink and receive on the downlink",
    ],
    correct: 2,
    explanation:
      "Obviously you must be able to transmit on the uplink and receive on the downlink but Clause 6-2 of OFW611 requires you not to cause undue interference. Clearly if your uplink is causing problems to another terrestrial station they are likely to reply on the frequency you are transmitting on. You need to be able to hear that reply so you are aware of the problem and take suitable action.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1d.1",
  },
  {
    source: "Exam Secrets Samples FULL [Licensing] 1D1-3",
    question:
      "If a person authorised by Ofcom is of the opinion that an urgent situation exists then your Radio Equipment may be inspected:",
    options: [
      "at any time of the day or night",
      "at any and all reasonable times",
      "during office hours but 7 days a week",
      "at any time by appointment",
    ],
    correct: 0,
    explanation:
      "OFW611 Clause 7-1b says 'at any time' if the matter is urgent - interference to an emergency service or air traffic control perhaps. (8-1) then says what can be done to remedy the problem; which can be modification to your equipment, a restriction on its use, or close down the station. With a less or non-urgent problem an inspection during normal working hours is more likely. Normal inspections are at a reasonable time, but if there is a problem that requires urgent resolution then an inpsection could be at any time.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1d.1",
  },
  {
    source: "Exam Secrets FULL [Licensing] 1E1-1",
    question: "When operating your radio by remote control you may:",
    options: [
      "use a radio link in amateur bands below 30MHz",
      "use an internet link to access the main station",
      "utilise encryption on an amateur link",
      "provide for general use by other amateurs",
    ],
    correct: 1,
    explanation:
      "(6-10) does not prescribe the link technology, but does require the link to be adequately secure so that no other person can gain control. That does not include a person at your station operating under supervision. (6-10b) requires any link in an amateur band to be above 30 MHz. (6-19b) prohibits encryption of amateur transmissions (except under specific circumstances) and that also applies to remote control links on amateur frequencies.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1e.1",
  },
  {
    source: "Exam Secrets Samples FULL [Licensing] 1E1-2",
    question:
      "A radio link in an amateur band used for remote control of the mains transceiver must be:",
    options: [
      "limited in power to 500mW PEP ERP",
      "encrypted to prevent misuse by others",
      "compliant with Schedule 1 to the licence",
      "capable of being monitored for interference",
    ],
    correct: 2,
    explanation:
      "The rules for the link are the same as for the remote main transmitter, so the answer is simply compliant with Schedule 1. (6-19b) about non-encryption applies equally to links and main transmitters.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1e.1",
  },
  {
    source: "Exam Secrets Samples FULL [Licensing] 1E1-3",
    question:
      "A radio link in an amateur band used for remote control of the main transceiver must be:",
    options: [
      "limited in power to 500mW PEP ERP",
      "adequately secure but not encrypted",
      "below 30MHz",
      "above 144MHz",
    ],
    correct: 1,
    explanation:
      "In EX309 OFW611, Clause 6-11a requires the link to be adequately secure to prevent others gaining control. This applies irrespective of the link technology. Not specific in the licence, but it should also be failsafe such that loss of the link shuts down the main transmitter.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1e.1",
  },
  {
    source: "Exam Secrets FULL [Licensing] 1F1-1",
    question:
      "When operating temporarily in another country under CEPT T/R 61-01 the rules you must follow are those:",
    options: [
      "of the host country",
      "of the host country which are also in your UK licence",
      "in your UK licence",
      "in either your UK licence or the host country licence",
    ],
    correct: 0,
    explanation:
      "You must follow the host country rules exactly as if you were a resident there with their licence. The UK licence ONLY applies in the UK, Channel Islands and Isle of Man, including territorial waters, and in international waters or airspace provided you are on a UK etc registered ship or aircraft.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "7h.1",
  },
  {
    source: "Exam Secrets FULL [Licensing] 1F1-2",
    question:
      "A UK amateur radio club plans to enter contest from the south of France using their club callsign. This idea is:",
    options: [
      "a good one, it might improve their score",
      "acceptable, provide they prefix their callsign with 'F/'",
      "acceptable, if they have all their HAREC certificates",
      "not acceptable, under recommendation CEPT T/R 61-01",
    ],
    correct: 3,
    explanation:
      "The CEPT Recommendation T/R 61-01 on temporary visits only applies to personal Full licences and does not extend to club licences.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "7h.1",
  },
  {
    source: "Exam Secrets FULL [Licensing] 1F2-1",
    question: "The American continent is in ITU Region:",
    options: ["1", "2", "3", "4"],
    correct: 1,
    explanation:
      "Includes Canada, USA and all countries in North and South America.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "7h.2",
  },
  {
    source: "Exam Secrets FULL [Licensing] 1G1-1",
    question:
      "When carrying out an RF field assessment the table setting out the relevant tables for public exposure are identified in the:",
    options: [
      "Wireless Telegraphy Licence Conditions Booklet OFW611",
      "Guidance on EMF Compliance and Enforcement",
      "Reference levels published by the Health Security Agency",
      "RSGB EMF technical note No2 v2 October 2022",
    ],
    correct: 1,
    explanation:
      "Another EX309 OFW611 look it up: Condition 9 - Electromagnetic Fields (EMF) Compliance. Thus, Clause 9-1 refers to footnote 3 and the relevant tables for public exposure identified in Ofcom's Guidance on EMF Compliance and Enforcement. In reality it is easier to use the RSGB EMF Assessment spreadsheet which performs the relevant calculations and compares them with the correct table.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1g.1",
  },
  {
    source: "Exam Secrets FULL [Licensing] 1G1-2",
    question:
      "A household consists of several family members, some of whom are licenced amateurs. Which of them are permitted to be inside the EMF exclusion zone?",
    options: [
      "only the amateur operator",
      "those with an amateur licence",
      "all resident family members",
      "personal non-resident guests",
    ],
    correct: 1,
    explanation:
      "Anyone who does not have an amateur licence must be protected and is regarded as 'general public'.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1g.1",
    tagged: false,
  },
  {
    source: "Exam Secrets FULL [Licensing] 1H1-1",
    question: "Peak Envelope Power is that power supplied to the antenna:",
    options: [
      "at the peak of an RF cycle during normal operation",
      "averaged over 1 RF cycle at the crest of the modulation",
      "averaged over 1 audio cycle on an RMS power meter",
      "by a steady carrier before it is modulated",
    ],
    correct: 1,
    explanation:
      "See EX309 which contains the full text of OFW611. In Condition 10 -Interpretation - Section 1, also known as 10-1, definitions are provided, including for s) 'Peak Envelope Power (PEP) is the average power supplied to the antenna by a transmitter during one radio frequency cycle at the crest of the modulation envelope taken under normal operating conditions.' ",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1h.1",
  },
  {
    source: "Exam Secrets FULL [Licensing] 1H1-2",
    question: "When operating on 5.334MHz it is necessary to:",
    options: [
      "limit the antenna height to 10 metres above ground",
      "give your callsign at no more than 10 minute intervals",
      "not exceed a radiated power of 400W EIRP",
      "be contactable by a telephone in close proximity",
    ],
    correct: 3,
    explanation:
      "See Table C: Full Licence Parameters which can be found in EX309. Everything from 5258.5 to 5406.5 MHz has a Secondary status and is subject to note (g), which on the next page has 9 clauses about the 5 MHz band, including double sideband, network use and a telephone in close proximity. This is so the MOD, as Primary user of the 5 MHz band, can ask you to close down if there is an interference problem.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1h.1",
  },
  {
    source: "Exam Secrets FULL [Licensing] 1H1-3",
    question:
      "When operating double sideband in the band 5.276 to 5.284MHz the maximum bandwidth should not exceed:",
    options: ["4kHz", "6kHz", "8kHz", "10kHz"],
    correct: 1,
    explanation:
      "See Table C: Full Licence Parameters which can be found in EX309. Everything from 5258.5 to 5406.5 MHz has a Secondary status and is subject to note (g), which on the next page has 9 clauses about the 5 MHz band, including double sideband, network use and a telephone in close proximity.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1h.1",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2A1-1",
    question:
      "A potential divider uses two 1KΩ resistors to obtain a bias voltage from the supply. The two resistors are colour coded brown, black, red, silver, indicating they are 10% tolerance. How far out might the bias voltage be?",
    options: ["0%", "5%", "10%", "20%"],
    correct: 2,
    explanation:
      "The error in the bias voltage will still be 10%. This may be shown by calculation using limit values, say 900Ω and 1100Ω. V(out) = V(in) * 900/2000 = V(in) * 0.45 which is 10% different to 0.5 expected.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2a.1",
    tagged: true,
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2B1-1",
    question:
      "Two resistors are connected in parallel, 20 kΩ and 30 kΩ. They are connected in series with an 8 kΩ resistor. The effective resistance of the combination is:",
    options: ["12 kΩ", "20 kΩ", "28 kΩ", "33 kΩ"],
    correct: 1,
    explanation:
      "The 20 kΩ and 30 kΩ resistors in parallel have a resistance of (20 x 30)/(20 + 30) which is 12 kΩ. In series with 8 kΩ gives 20 kΩ.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2b.1",
    tagged: true,
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2B1-2",
    question:
      "What current is drawn from the power supply in the circuit diagram?  <br><br><img src='images/secrets-tech-q3.png' alt='test'  >",
    options: ["10mA", "11.8mA", "15mA", "18.5mA"],
    correct: 0,
    explanation:
      "At first glance, this circuit is neither series nor parallel and cannot be solved by the normal means. However, further inpection shows that the voltages at each end of the 2 kΩ resistor are equal, so no current will pass through it. We can simply remove it, or replace it with a piece of wire, it will make no difference.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2b.1",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2B1-2",
    question:
      "What current is drawn from the power supply in the circuit diagram?",
    image: "images/secrets-tech-q3.png",
    options: ["10mA", "11.8mA", "15mA", "18.5mA"],
    correct: 0,
    explanation:
      "At first glance, this circuit is neither series nor parallel and cannot be solved by the normal means. However, further inpection shows that the voltages at each end of the 2 kΩ resistor are equal, so no current will pass through it. We can simply remove it, or replace it with a piece of wire, it will make no difference.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2b.1",
    tagged: true,
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2B1-3",
    question:
      "What power is dissipated in the 1kΩ resistor in the circuit diagram?  <br><br><img src='images/secrets-tech-q4.png' alt='test'  >",
    options: ["14mW", "19mW", "25mW", "225mW"],
    correct: 0,
    explanation:
      "See Technical Basics Q3 for how to handle the 2 kΩ resistor. Then in the left pair of resistors, it is 15V across 4 kΩ so current is 3.75 mA and power = IV or I squared * R which is 3.75/1000 * 3.7/1000 * 1000 or 14 mA. Or, voltage divide 15V across 1 and 3 giving 3.75V and power = VI = V squared / R and if time permits confirm by doing it both ways.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2b.1",
    tagged: true,
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2B1-4",
    question:
      "A radio receiver is reading S9 on its scale, which the handbook says is an input of 50 µV PD RMS. In 50Ω this represents an input power of:",
    options: ["0.05pW", "50pW", "1nW", "50µW"],
    correct: 1,
    explanation: "power = voltage squared / resistance",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2b.1",
    tagged: true,
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2B1-5",
    question:
      "The audio signal from a computer soundcard is 100mV, and must be reduced to 10mV to connect to the transmitter. A potential divider is used with a 10 kΩ resistor connected between the soundcard output and the transmitter microphone input. The resistor between the microphone input and earth should be:",
    options: ["900 Ω", "1.0 kΩ", "1.1 kΩ", "10 kΩ"],
    correct: 2,
    explanation:
      "The voltage divider will have resistors in the ratio 9:1 with the smallest one giving 1/10 and the larger one giving 9/10.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2b.1",
    tagged: true,
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2D1-1",
    question:
      "A trimmer capacitor consists of five foils connected to the body of the device and four foils loosely interleaved between them with a thin insulation to prevent contact. It is adjusted so the spacing is, on average, halved. The capacitance will:",
    options: [
      "halve",
      "reduce to about 70%",
      "increase by about 40%",
      "double",
    ],
    correct: 3,
    explanation:
      "The formula sheet gives the capacitance as C=kA/d where A is the area of the plates and d their separation. If d is halved the capacitance will double.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2d.1",
    tagged: true,
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2D1-2",
    question:
      "A 1µF and a 2µF capacitor are connected in series. The two open ends are then connected to a 30V supply charging the two capacitors. What is the voltage across the 2µF capacitor?",
    options: ["10V", "15V", "20V", "30V"],
    correct: 0,
    explanation:
      "The relevant formula is C (Farads) = Q (Coulombs) / V (Volts). So, V = Q/C which means small C gives big V, and 20V on 1µF with 10V on 2µF. Formally 1/C = 1/1 + 1/2 so Total Capacitance is 0.667 µF. Total Charge Q = CV =30 X 0.667 = 20 µC. Then Voltage on 2µF is 20µC/2µF = 10V",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2d.1",
    tagged: true,
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2D1-3",
    question:
      "The energy in a capacitor (E) is given by: $$E = Q \\times V$$ where Q is charge and V is potential difference. <br><br>Given that, by how much does the <i>energy</i> stored in a capacitor increase if the potential difference is doubled?",
    options: ["doubles x2", "triples x3", "quadruples x4", "five times x5"],
    correct: 2,
    explanation:
      "In this question, you are given some information that is outside the syllabus (E = Q x V). You should know that for a capacitor the charge Q = V x C. So energy E = V squared x C, hence double squared or 4 times. This increase of energy as the square of voltage has hazard and safety implications.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2d.1",
    tagged: true,
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2D2-1",
    question:
      "Capacitors are available with assorted dielectrics, polythene, ceramic, etc. A factor affecting the choice of dielectric is:",
    options: [
      "linearity",
      "leakage resistance",
      "phase angle",
      "operating frequency",
    ],
    correct: 3,
    explanation:
      "Many plastics will absorb some energy from an RF field, exampled by some plastics getting hot in a microwave oven - a good test in choosing suitable materials in power amplifier design. High power AMUs, especially with resonant circuits, can develop voltages easily into the kV range. That level of dielectric stress can cause some plastics to fail.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2d.2",
    tagged: true,
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2D2-2",
    question:
      "Which dielectric in a capacitor is most likely to absorb energy resulting in losses as the frequency increases?",
    options: ["air", "glass", "polythene", "mica"],
    correct: 2,
    explanation: "Polythene is good at audio frequencies but lossy at RF.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2d.2",
    tagged: true,
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2D3-1",
    question:
      "Apart from the capacitance, another parameter to be considered when selecting a low value capacitor (say 0.1 µF) is:",
    options: [
      "power handling",
      "polarity",
      "breakdown voltage",
      "internal resistance",
    ],
    correct: 2,
    explanation:
      "A 0.1 µF capacitor won't be of electrolytic construction, so polarity is not an answer, but breakdown voltage is. Most capacitors are rated for DC and must be de-rated  for AC and particularly RF. For mains use, special capacitors, class X or Y, must be used, the choice depending on intended use and failure mechanism.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2d.3",
    tagged: true,
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2D4-1",
    question:
      "The current arrow shows the direction of the current in the inductor shown in the diagram. The legend shows whether the current is increasing, decreasing, alternating or steady. The '+' symbol shows which end of the coil is positive for the induced back EMF in the coil. Which one correctly shows the polarity of the induced EMF?",
    image: "images/secrets-tech-q20.png",
    options: ["Drawing A", "Drawing B", "Drawing C", "Drawing D"],
    correct: 1,
    explanation:
      "This question requires some thought. Option C can be discounted, as the back EMF won't remain at one end with an alternating current. Option D is also out, as inductive back EMF occurs when a current changes, no back EMF for steady currents. Choice is now A or B. An inductor tries to oppose a current increase. In A it is aiding so A seems wrong. In B it is trying to keep the current going when the external drive is to reduce it. That is true, we have our answer. Note opposition to change is equaslly true for increasing or decreasing currents.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2d.4",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2D4-2",
    question:
      "An old style doorbell has a coil acting as an electromagnet, pulling an iron arm across to strike the gong, but in doing so breaks the electrical circuit so the arm returns to the rest position, ready to repeat the process. In breaking the circuit, the current:",
    image: "",
    options: [
      "stops instantly",
      "stops quickly",
      "increases before falling to zero",
      "reverses direction briefy",
    ],
    correct: 1,
    explanation:
      "The back EMF in an inductor opposes change, in this case trying to reduce the current to zero. The magnitude of the back EMF is related to the rate of change. If the current did stop instantly, the rate of chage is infinitely high, that would generate an infinite voltage to keep the current going. In reality, the resulting sparking briefly maintains the current so the rate of change is slowed. A doorbell of the type mentioned running on 6V could easily have one or two hundred volts at the breaking contact.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2d.4",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2D7-1",
    question:
      "The graph shows the flow of current through a circuit from  'switch on'. The circuit comprises a resistor and:",
    image: "images/secrets-tech-q30.png",
    options: [
      "capacitor in series",
      "inductor in series",
      "capacitor in parallel",
      "inductor in parallel",
    ],
    correct: 1,
    explanation:
      "Options C and D can be quickly ruled out. If the resistor was in parallel then at switch on the current would rise at least to the value of V/R, which does not happen. That would also apply to option A since the capacitor is initially discharged, the current would jump up to V/R and tail off as the capacitor charges. That leaves B as the only remaining option. The current is zero and climbing just after switch on, which strongly suggests an inductor must be in the only current path, which points to B as well.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2d.7",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2D7-2",
    question:
      "A valve receiver has a power supply producing 300V. It takes about 10 seconds to unscrew the lid, and it is considered safe if the voltage has dropped to about 100V by the time the lid is off. The smoothing capacitor is 200µF. Approximately what value should be chosen as the bleeder resistor to minimise wasted power but meets the safety requirement?",
    image: "",
    options: ["20kΩ", "50kΩ", "100kΩ", "200kΩ"],
    correct: 1,
    explanation:
      "After one time constant, the voltage on C will have fallen to about 1/3 of its initial value. From the narrative, we can conclude tha time constant CR is 10 seconds. So 'R =10s/200µF' which comes to 50kΩ when the right units are applied.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2d.7",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2E3-1",
    question:
      "The drawing shows the current and voltage waveforms in an unknown component. The component is probably a:",
    image: "images/secrets-tech-q21.png",
    options: ["resistor", "capacitor", "inductor", "diode"],
    correct: 1,
    explanation:
      "The current and voltage are in phase in a resistor, and a diode only conducts in one direction. The current is leading the voltage in the drawing so it is a capacitor. Memory aid: CIVIL.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2e.3",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2E3-2",
    question: "A 318pF capacitor has a reactance at 1MHz of:",
    image: "",
    options: ["500Ω", "1000Ω", "1570Ω", "5000Ω"],
    correct: 0,
    explanation: "X(c) = 1/(2 * pi * f * C)",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2e.3",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2E4-1",
    question:
      "A transistor amplifier is shown in the circuit diagram. Capacitor C3 is used for:",
    image: "images/secrets-tech-q22.png",
    options: ["coupling", "decoupling", "buffering", "blocking"],
    correct: 1,
    explanation:
      "The circuit is a common emitter amplifier. C3 decouples the emitter of the transistor, removing any signal at the emitter so the full input signal is across the base-emitter junction of the transmitter. Without the decoupling, much of the voltager gain of the circuit would be lost.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2e.4",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2E4-2",
    question:
      "What is the function of the capacitor marked C in the circuit diagram?",
    image: "images/secrets-tech-q23.png",
    options: ["coupling", "decoupling", "DC blocking", "tuning"],
    correct: 2,
    explanation:
      "The circuit is a Colpitts LC oscillator. Without capacitor C, the DC bias voltage set up by the base potential divider woukd be shorted out by the inductor in the tuned circuit. It is there for DC blocking, it could be argued that it is also a signal coupling capacitor allowing the transistor to 'see' the tuned circuit. However, the term 'coupling' in this context is normally reserved for coupling a signal from one stage to the next, betwenn a local oscillator and a mixer, for example.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2e.4",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2E5-1",
    question:
      "What is the purpose of the inductor marked 'r.f.c.' in the circuit diagram?",
    image: "images/secrets-tech-q24.png",
    options: [
      "to resonate with the 22pF capacitor in the desired frequency band",
      "to provide a dynamic impedance load for the transistor",
      "to filter out the harmonics of the RF signal from the transistor",
      "to help minimise RF signals on the positive supply rail",
    ],
    correct: 3,
    explanation:
      "The r.f.c. has two purposes: to provide DC power to the transistor, and as an r.f.c. to limit the RF signal getting back on to the positive supply rail. It should have a high inductance to have a high RF reactance/impedance.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2e.5",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2E6-1",
    question:
      "A resistor of 400Ω and a capacitor of 0.1µF are fed from an AC source. At a certain frequency the reactance of the capacitor is 300Ω. The impedance of the circuit is:",
    options: ["300Ω", "400Ω", "500Ω", "700Ω"],
    correct: 2,
    explanation:
      "This question uses a formula from the reference booklet (Z**2 = R**2 + X**2). Look out for 3-4-5 right angled triangle ratios to avoid  the calculator.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2e.6",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2F1-1",
    question:
      "An audio signal from the microphone in a voice transmitter is being sampled 7000 times per second. Limitations in the filtering in the microphone amplifier mean that a signal at 4kHz is present at the sampling point. What effect will this have?",
    options: [
      "no effect as the signal is above the Nyquist limit",
      "the signal is below the Nyquist limit so will be accurately sampled",
      "the signal will appear as an alias signal at 500Hz",
      "the signal will appear as an alias signal at 3kHz",
    ],
    correct: 3,
    explanation:
      "Sampling at 7000 samples per second gives an upper limit of 3500Hz. The 4kHz signal is 500Hz above the limit so will show as an alias 500Hz below the limit, that is 3kHz.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2f.1",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2F1-2",
    question:
      "To avoid aliases appearing in the digital representation of an analogue signal, it is normal to use:",
    options: [
      "an analogue filter to remove signals at frequencies above the sampling rate",
      "an analogue filter to remove signals at frequencies above half the sampling rate",
      "an digital filter to remove signals at frequencies above the sampling rate",
      "an digital filter to remove signals at frequencies above half the sampling rate",
    ],
    correct: 1,
    explanation:
      "Any signal of a frequency over half the sampling rate will form an alias and must be removed by an ordinary analogue filter prior to sampling. If such signals get past the sampling and are digitised they are indistinguishable from legitimate signals.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2f.1",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2F2-1",
    question: "The Fourier transform is used to:",
    options: [
      "sample analogue signals and produce a digital representation of them for subsequent digital processing",
      "take the digital samples in the time domain and calculate the amplitudes of the signals in the frequency domain",
      "utilise the frequency domain signals from the digital sampling to produce a panoramic display of amplitude against frequency",
      "convert the frequency domain signals to an analogue domain suitable for feeding to an audio amplifier",
    ],
    correct: 1,
    explanation:
      "The Fourier transform is a mathematical process of taking the digitised samples of the combined incoming signals and representing the amplitudes in frequency order.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2f.2",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2F2-2",
    question:
      "What is the name of the mathematical process used to take a stream of digitised samples of an analogue signal and depict it as the amplitudes of the individual frequency components of the signal?",
    options: [
      "A Fourier transform",
      "A Nyquist conversion",
      "The Shannon transform",
      "Anti-alias filtering",
    ],
    correct: 0,
    explanation: "See 2F2-1",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "0",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2G1-1",
    question:
      "In a transformer, the energy is transferred from the primary to the secondary by:",
    options: [
      "mutual inductance",
      "electromagnetic coupling",
      "magnetic resonance",
      "eddy current production",
    ],
    correct: 0,
    explanation:
      "The coupling between the primary and secondary windings of a transformer is termed mutual inductance, as opposed to self-inductance of a single coil. It is magnetic coupling, not electromagnetic, which is a reference to radio waves.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2g.1",
  },
  {
    id: 1,
    note: "This was made with form capture using gemini canvas. That's why the key names are in quotes; there's an id; and an answer; some values are null; tagged is present.",
    source: "Exam Secrets FULL [Technical Basics] 2G1-2",
    question:
      "A valve RF amplifier requires a load impedance of 1.8kΩ, which needs to be matched to a 50Ω output. The secondary has 5 turns. How many turns are required on the primary?",
    image: null,
    options: ["30", "36", "180", "250"],
    answer: "30",
    correct: 0,
    explanation:
      "Remember the impedance ratio is the square of the turns ratio. The Impedance ratio is 1800:50 or 36:1, and the square root of 36 is 6. So primary turns = 6 x secondary turns = 30.",
    lookup: null,
    syllabus: "2g.1",
    tagged: false,
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2G1-3",
    question:
      "When selecting a core for an intermediate frequency (IF) transformer, you should consider the:",
    options: [
      "RF screening properties of the chosen material",
      "frequency range over which it will operate",
      "matching to the impedance of the following circuit",
      "resonant frequency of the chosen material",
    ],
    correct: 1,
    explanation: "",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2g.1",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2H1-1",
    question:
      "At 10MHz, a long wire antenna presents a capacitive reactance at its feedpoint equivalent to a capacitor of about 20pF. What inductance is required to bring the system to resonance?",
    options: ["12.5µH", "25µH", "40µH", "80µH"],
    correct: 0,
    explanation: "It's the EX309 resonant frequency formula, and transposing.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2h.1",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2H1-2",
    question:
      "The crystal of an old oscillator circuit for a miniature CW transmitter has been lost, but the capacitor is marked as 30pF and the coil is measured as about 4.25µH. What band is the transmitter designed for?",
    options: ["10m", "15m", "17m", "20m"],
    correct: 3,
    explanation:
      "The resont frequency formula is on EX309. Take care with units! Try an estimate first.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2h.1",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2H2-1",
    question: "Which drawing shows the equivalent circuit of a crystal?",
    image: "images/secrets-tech-q25.png",
    options: ["Drawing 1", "Drawing 2", "Drawing 3", "Drawing 4"],
    correct: 1,
    explanation: "Drawing 2 is the equivalent of a crystal. But why?",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2h.2",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2H2-2",
    question:
      "A home made crystal oscillator is found to be unstable in frequency, and adjustment of the small trimmer oscillator can cause it to stop oscillating. The circuit used has been published in a well known magazine, and is known to work. What is a reasonable next check, having inspected the circuit board and soldering?",
    options: [
      "check that the gain of the transistor is sufficient for the intended operation",
      "check whether the crystal should be mounted horizontally or vertically",
      "check the stability and adequacy of the bench power supply unit",
      "check whether the crystal is designed for series or parallel operation",
    ],
    correct: 3,
    explanation:
      "If the circuit expects a crystal designed for parallel resonance, but a series resonance crystal is used, then it will usually work in the 'wrong' mode,but not reliably, and not on the correct frequency.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2h.2",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2H4-1",
    question:
      "A series resonant circuit has 10V peak across it when at resonance. At that frequency, the resistance of the coil is approximately 4Ω and the Q-factor is calculated as 100. The peak voltage across the capacitor will be about:",
    image: "",
    options: ["40V", "100V", "400V", "1000V"],
    correct: 3,
    explanation:
      "The Q-factor is the ratio of X(L) to R which means it is also the ratio of the voltage across R, which is 10V peak, to the voltage across L (and C). At resonance the voltages across L and C will be equal and in antiphase, so the supply voltage is all across R. With a Q of 100 the voltage across the inductor will be Q x the supply voltage, which comes to 1000V. This may be the case in an AMU at high transmit powers, although with the antenna radiating most of the power, the loaded-Q may be rather lower.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2h.4",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2H4-2",
    question:
      "A 3.5MHz tuned circuit has a 3dB bandwidth of 35kHz. At that frequency the reactance of both the coil and the capacitor are calculated to be 2.4kΩ. The coil resistance will be about:",
    image: "",
    options: ["2.4Ω", "3.5Ω", "24Ω", "35Ω"],
    correct: 2,
    explanation:
      "The Q-factor of this circuit is 3.5MHz/35kHz which is 100.Q is also X(L)/R (and X(C)/R since X(L) = X(C) at resonance) so if X is 2.4kΩ then R must 24Ω.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2h.4",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2H4-3",
    question:
      "Some antenna matching units can have tuned circuits with a high Q-factor. A significant implication of this is that:",
    image: "",
    options: [
      "there will be a need to reduce the Q-factor for satisfactory reception of wide band signals",
      "the circulating currents and voltages in the tuned circuits can be very high",
      "tuning the receiver to the wanted signal can become quite critical",
      "a low pass filter is also desirable to limit harmonic radiation",
    ],
    correct: 1,
    explanation:
      "Robust construction and wide spaced capacitors are needed in high power AMUs to cope with high circulating currents and voltages",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2h.4",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2H5-1",
    question:
      "Which circuit or device possesses a property commonly called its 'dynamic resistance'?",
    image: "",
    options: [
      "The input resistance of a feeder for correct impedance matching",
      "The input resistance of the base of an RF transistor amplifier",
      "The effective resistance of a parallel tuned circuit at resonance",
      "The effective resistance of a series tuned circuit at resonance",
    ],
    correct: 2,
    explanation: "Dynamic resistance R(D) of a parallel tuned circuit.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2h.5",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2I1-1",
    question: "A Zener diode is:",
    image: "",
    options: [
      "forward biased, to provide a specified reference voltage",
      "reverse biased, to provide a specified reference voltage",
      "forward biased, to provide an accurately known current",
      "reverse biased, to prevent excessive current flow",
    ],
    correct: 1,
    explanation:
      "The Zener diode is used reverse biased and will conduct at a set voltage, determined during manufacture. The current must be limited to prevent destruction. It is a voltage reference.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2i.1",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2I3-1",
    question:
      "The drawing shows a class A amplifier using an N-channel depletion mode Field Effect Transistor (FET). The source and drain voltages are shown. What voltage might be expected on the gate in normal operation?",
    image: "images/secrets-tech-q26.png",
    options: ["3.2V", "5.2V", "9.2V", "16V"],
    correct: 0,
    explanation:
      "A depletion mode FET (most are) will have a reverse biased gate so the voltage will be a bit lower than the source gate which is at 4.5V, so 3.2V fits the bill.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2i.3",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2I4-1",
    question:
      "A transistor amplifier has a current gain of one, and a voltage gain of about 30. It is likely that the configuration of the device is:",
    image: "",
    options: [
      "emitter follower",
      "common emitter",
      "common base",
      "common collector",
    ],
    correct: 2,
    explanation:
      "In a transistor, the emitter and collector currents are almost equal, but the base current is much smaller. To have a current gain of one, the input must be on the emitter, and the output on the collector; that is a common base amplifier.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2i.4",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2I4-2",
    question:
      "A sine wave signal is supplied to the base of a common emitter amplifier, which is biased in class A. Which statement correctly descibes the output signal?",
    image: "",
    options: [
      "The output is a complete smooth sinewave, larger than the input, and in phase with the input.",
      "The output is a complete smooth sinewave, larger than the input, and 180 degrees out of phase with the input.",
      "The output is a complete smooth sinewave, very slightly smaller than the input, and in phase with the input.",
      "The output is a complete smooth sinewave, very slightly smaller than the input, and 180 degrees out of phase with the input.",
    ],
    correct: 1,
    explanation:
      "Class A means that the biasing is such that the complete cycle of signal is faithfully amplified. All four answers say that, so strictly we do not need that information. The common emitter circuit gives both voltage gain and current gain, so the output will be larger than the input, and is also 180 degrees out of phase.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2i.4",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2I4-3",
    question:
      "Which configuration of transistor amplifier exhibits a high current gain but a voltage gain of about one?",
    image: "",
    options: [
      "common emitter",
      "common gate",
      "common collector",
      "common source",
    ],
    correct: 2,
    explanation:
      "The output from the emitter follower tracks the input on the base, so has a gain of about one; just under one to be exact,as a small part of the input signal actually drives the transistor.The current gain is high; about the value of beta for the device.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2i.4",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2I4-4",
    question: "An amplifier operated in class C is particularly suited to:",
    image: "",
    options: [
      "audio and low frequency signals",
      "a push-pull output stage for audio or RF",
      "radio frequencies for AM and SSB",
      "radio frequencies for CW and FM",
    ],
    correct: 3,
    explanation:
      "A class C amplifier amplifies less than half the waveform of the signal. Audo signals would be distorted and, with many frequencies involved could not be cleaned up with tuned circuits to remove the harmonics. A push-pull circuit, even at RF, relliea on a smooth transition from one transistor conducting to the other. Each transistor must handle at least haldf the waveform, which is class B. Class C relies on tuned circuitsto remove the harmonics and thus the distortion. The other feature of class C is that it is biased into non-conduction in the absence of a signal and relies on a strong input signal to turn on the power resistors. Consequently it is not sensitive to varying drive levels; it is highly non-linear. Modulations relying on signal magnitude, such as AM or SSB cannot be handled, so FM and SSB only.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2i.4",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2I4-5",
    question:
      "Which class of biasing is least likely to cause the production of harmonics in the input signal?",
    image: "",
    options: ["Class A", "Class C", "Class AB", "Class B"],
    correct: 0,
    explanation:
      "Class A biasing ensures every part of the waveform is amplifed correctly so is least likely to cause distortion and the product of harmonics.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2i.4",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2I5-1",
    question:
      "An oscillator is, in effect, an amplifier stage and a frequency selective feedback stage. In order  to oscillate:",
    image: "",
    options: [
      "the frequency selective stage must be set manually to the wanted frequency.",
      "the gain of the amplifier stage must be at least equal to the loss in the feedback stage.",
      "the amplifier stage must provide a 90 degree phase shift at the wanted frequency",
      "the feedback stage must provide a 90 degree phase shift at the wanted frequency",
    ],
    correct: 1,
    explanation:
      "There are two key requirements. The gain in the amplifier must not be less than the loss in the feedback, or any oscillation will die out. The phase of the amplifier and feedback must be such that there is no overall phase change round the loop. Either both devices have a zero degree chnage or both have 180 degree change at the wanted frequency. Note answer A may be a true statementm vut it isn't the anser to the question asked.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2i.5",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2J2-1",
    question:
      "The circuit diagram shows a regulated supply for 13.6V. The voltage across the Zener diode D will be about:",
    image: "images/secrets-tech-q27.png",
    options: ["0.7V", "3V", "6V", "10V"],
    correct: 2,
    explanation:
      "Regulation is achieved by monitoring the output voltage. In this circuit by means of a potential divider with two 10kΩ resistors. The voltage fed to the base of the sense transistor will be around 6.8V, which suggests the emitter will be at just over 6V.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2j.2",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2J3-1",
    question:
      "The secondary of a power supply transformer for a valve receiver produces 200V RMS. A half-wave rectifier is used, feeding a smoothing capacitor. The maximum reverse voltage across the diode will be about:",
    image: "",
    options: ["200V", "300V", "400V", "600V"],
    correct: 3,
    explanation:
      "The capacitor will charge to the peak voltage of the transformer output, or 200 x 1,414 = 283V. On negative half cycles, the voltage on the capacitor, and the transformer voltage will add to double that voltage across the diode. So, at least 566V. With real life mains voltage variations and simply playing safe, we must allow at aleast 600V for the diode. 1000V and 2000V diodes are readily available and the cost differemce is negligible, so play even safer!",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "0",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2J4-1",
    question:
      "The drawing shows a block diagram of a typical switched mode power supply. What item or function is associated with the blank box?",
    image: "images/secrets-tech-q28.png",
    options: [
      "mains transformer (50Hz)",
      "High frequency transformer",
      "Voltage stabilisation",
      "Smoothing and filtering",
    ],
    correct: 1,
    explanation:
      "The mains is rectified and may be partly smoothed then chopped at some 10s of kHz so the transformer size and weight can be substantially reduced. The box is a high frequency transformer.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2j.4",
  },
  {
    source: "Exam Secrets FULL [Technical Basics] 2J4-2",
    question:
      "What function is performed in the blank box in the block diagram of a typical switched mode power supply?",
    image: "images/secrets-tech-q29.png",
    options: [
      "filtering",
      "voltage transformation",
      "DC smoothing",
      "high frequency chopping",
    ],
    correct: 3,
    explanation:
      "The mains is rectified and may be partly smoothed then chopped at some 10s of KHz so the transformer size can be substantially reduced. The box contains the electronics to chop the rectified mains before feeding to the transformer.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2j.4",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3A2-1",
    question: "An FM transmission is regarded as 'narrow band' when:",
    image: "",
    options: [
      "only speech or audio signals below 3.5kHz are transmitted",
      "the deviation is less than 50% of the peak deviation for the system",
      "the modulation index is equal to or less than unity",
      "the deviation ratio does not exceed unity",
    ],
    correct: 2,
    explanation:
      "The definition of narrow band is where the ratio of the deviation to the audio frequency is less than one. Some amateur transmissions can be slightly over unity, but in general terms, thay are regarded as narrow band, whiich avoids taking up too much spectrum greater than that required for reasonable sounding and effective communication.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3a.2",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3B1-1",
    question:
      "The diagram shows an SSB transmitter. What is the function of the box marked '2'?",
    image: "images/secrets 3B1-1.png",
    options: ["modulator", "mixer", "amplifier", "sideband filter"],
    correct: 1,
    explanation:
      "Boxes 2 and 4 are both mixers (HINT two inputs, one output). Box 4 is better known as the modulator where the modulation is set at a fixed 'carrier' frequency set by the crystal oscillator. That is then mixed up (or down) to the transmit frequency in box 2. Box 1 is a synthesiser allowing the final frequency to be controlled.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3b.1",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3B1-2",
    question:
      "The modulator of a multi-mode transceiver operates at 4.7MHz. To produce a signal at 14.1MHz the modulator output should be:",
    image: "",
    options: [
      "fed to a frequency tripler",
      "modulated on to the 14.1MHz carrier",
      "mixed with a clean signal on 9.4MHz",
      "filtered to remove the image on 11.7MHz",
    ],
    correct: 2,
    explanation:
      "Mixing the modulated signal at 4.7MHz with a signal at 9.4MHz will produce outputs at 4.7MHz (which must be filtered out) and 14.1MHz. A tripler will produce the right carrier frequency, but is not suitable for SSB or AM since it will damage the audio sidebands.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3b.1",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3C1-1",
    question: "The MOST significant effect of drift in a transmitter is that:",
    image: "",
    options: [
      "the distant receiver will have to retune periodically to maintain contact",
      "the received signal quality will be markedly impaired",
      "transmission may occur outside an amateur band",
      "interference may be caused to other amateurs",
    ],
    correct: 2,
    explanation:
      "The question does not say where in the band the transmission is, so it applies to any part of the band. In-band drift is a nuisance to the station contacted, annoying to amateurs on adjacent frequencies and a breach of the licence if drifting out of band. As asked, the event of most significance is out of band transmission. Note if the frequency  was stated and clearly well away from the band edge, the a question on the most likely unfortunate effect would be annoying other amateurs. Read such questions carefully to be sure of what is being asked.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3c.1",
    tagged: true,
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3C3-1",
    question:
      "The block diagram of a frequency synthesiser shows the division ratios and the crystal oscillator frequency. The output frequency is:",
    image: "images/secrets 3C3-1.png",
    options: ["100.4544MHz", "432.0000MHz", "436.0000MHz", "2880.000MHz"],
    correct: 2,
    explanation:
      "The reference signal at 6MHz is divided by 480 so the phase comparator operates at 6000/480 = 12.5kHz. The VCO signal is divided by 34880 and that must also be 12.5kHz. The VCO is operating at 12.5 x 34880 = 436000kHz or 436MHz in the 70cm amateur band.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3c.3",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3C3-2",
    question: "The drawing shows an example of a:",
    image: "images/secrets 3C3-2.png",
    options: [
      "phase lock loop synthesiser",
      "digital to analogue conversion",
      "direct digital synthesis",
      "analogue sinewave generation",
    ],
    correct: 2,
    explanation:
      "The drawing is of a Direct Digital Synthesiser. The sinewave lookup table is probably the best indicator.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3c.3",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3D1-1",
    question:
      "A 9cm transmitter is used to produce an FM signal on 10.260GHz. The transmitter is likely to be set to a frequency of:",
    image: "",
    options: ["3260MHz", "3420MHz", "3456MHz", "3620MHz"],
    correct: 1,
    explanation:
      "If the 9cm source is mixed up then all options can be equally likely. FM signals can be frequency multiplied, so divide 10260MHz by the four options and see which one has an integer value. 10260/3420 = 3, so the 9cm driver transmitter feeds a frequency tripler.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3d.1",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3E1-1",
    question:
      "What is the necessary bandwidth of an FM system with a peak deviation of 5kHz and a maximum audio frequency of 3.5kHz?",
    image: "",
    options: ["5kHz", "7kHz", "10kHz", "17kHz"],
    correct: 3,
    explanation:
      "The rule of thumb is 2 x (max deviation + max audio frequency) so 2 x (5 + 3.5) = 17kHz. In theory, FM has an infinite number of sidebands of diminishing amplitude. Carson's rule ia a guide to what is adequate to recover the modulation with good accuracy. It is more useful for wideband FM (higher modulation indexes), but is an indication for amateur usage.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3e.1",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3E1-2",
    question:
      "A data transmitter feeds the binary signal direct to the modulator of the transmitter, resulting in a 170kHz transmitted frequency shift between a data one and a data zero. Off-air this type of modulation is indistinguishable from:",
    image: "",
    options: [
      "feeding the binary data to the microphone socket of an FM transmitter",
      "feeding the binary data to a modem producing two audio tones separated by 170kHz and feeding them to the microphone socket of an FM transmitter",
      "feeding the binary data to a modem producing two audio tones separated by 170kHz and feeding them to the microphone socket of an SSB transmitter",
      "feeding the binary data to the microphone socket of an SSB transmitter",
    ],
    correct: 2,
    explanation:
      "This is not an easy question, but it does get to the heart of different forms of modulation. The stem of the question describes direct modulation, producing one radio frequency for a data 0 and another 170kHz different for a data 1. Feedibg binary data to the microphone socket fails for two reasons. The voltage levels are likely to be much higher than the few millivolts expected, and microphones are analogue not digital. That rules oout options A and D. Feeding two audio tones into the microphone socket on FM is a good system in common use, but FM has multiple sidebands, not as described in the stem. Feeding an audio tone into an SSB transmitter will give a single RF signal offset from the notional carrier by the audio frequency, so using two audio tones 170kHz apart will have an identical RF output. It will not be possible, off-air, to know which method was used to produce the signal.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3e.1",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3F2-1",
    question:
      "Which type of modulation CANNOT use a non-linear external RF power amplifier?",
    image: "",
    options: [
      "any type of modulation",
      "CW modulation",
      "SSB modulation",
      "FM modulation",
    ],
    correct: 2,
    explanation:
      "Non-linear amplifiers can only be used where the RF level does not change, other than siple on or off, as in CW. Some data systems appear to be of constant amplitude, but do have momentary amplitude variations during the change from one data symbol to the next.They too need linear amplifiers to avoid spurious RF at other frequencies during the change.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3f.2",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3F2-2",
    question:
      "In the context of an electronic circuit, what is meant by the term linearity?",
    image: "",
    options: [
      "the circuit has only one input and one output, so the output is always a function of the one input",
      "the circuit may have more than one input, but all of them will have an equal effect on the output",
      "a given percentage change in the input will result in exactly the same percentage change in the output",
      "a graph of the output current plotted against the output voltage will always be a straight line",
    ],
    correct: 2,
    explanation:
      "Linearity in an amplifier means that the output is a faithful reproduction of the input with no distortion, no additional frequencies or harmonics that were not present at the input. The only difference is that the signal is bigger.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3f.2",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3F2-3",
    question:
      "Signals at 3.601MHz and 3.603MHz represent two audio tones SSB modulated on a 3.600MHz suppressed carrier which are fed to a non-linear amplifier. Apart from the wanted signals, possible output frequencies are:",
    image: "",
    options: [
      "3.605MHz and 3.906MHz",
      "3.599MHz and 3.607MHz",
      "3.604MHz and 3.605MHz",
      "3.602MHz and 3.605MHz",
    ],
    correct: 1,
    explanation:
      "If an amplifier or other circuit is non-linear then there will be harmonics and intermodulation products (Imps) of all the frequencies present. At RF, the harmonics will be way out of band and easily removed by the filters. So will many of the intermodulation products. However, frequencies like (3 x f1) - (2 x f2) will be as far removed from f1 and f2 as f1 and f2 are apart. They will be in-band and particularly if f1 and f2 are from relatively low audio notes then the Imps will be on top of other audio frequencies and impossible to filter out. (2 x 3.601) - 3.603 = 3.599 and (3 x 3.603) - (2 x 3.601) = 3.607 This question is not difficult but does take a bit of time searching for credible frequencies. Leave it to last.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3f.2",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3F3-1",
    question:
      "In the circuit diagram, the collector load can be identified as:",
    image: "images/secrets 3F3-1.png",
    options: ["the r.f.c.", "L1", "L1, C1-3 and the output", "the transistor"],
    correct: 2,
    explanation:
      "The collector load is the component(s) which absorb the signal currents and power. The radio frequency choke, (r.f.c.), will not pass any RF, only DC to power the transistor. All the amplified RF passes via L1, C1, C2 & C3 to the output load, the feeder and antenna.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3f.3",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3F4-1",
    question: "Employing speech processing in a transmitter will:",
    image: "",
    options: [
      "limit the average output power and heat dissipation to a safe value",
      "increase the average output power and heat dissipation",
      "reduce the average output power or heat dissipation",
      "not affect the average output power or heat dissipation",
    ],
    correct: 1,
    explanation:
      "The aim of speech processing is to limit the peaks of the signal, allowing the average output power level to be increased without breaching the licence limits or the limits imposed by the equipment, typically the power amplifier.If the average level is increased then so is the heat dissipation and the demand on the power supply.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3f.4",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3F5-1",
    question:
      "The ALC line between the transmitter and external power amplifier (PA):",
    image: "",
    options: [
      "provides a signal from the transmitter to the PA to control the output power",
      "provides a signal from the PA to limit or reduce the transmitter output power",
      "allows the metering on the transmitter to show the relevant conditions in the PA",
      "prevents the PA from being over-modulated",
    ],
    correct: 1,
    explanation:
      "The AUTOMATIC LEVEL CONTROL (ALC) is a signal fed back from the power amplifier (often external) to the driver transmitter to indicate the drive is higher than the power amplifier can properly handle. It should not be relied on or used to set the upper limit of output power.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3f.5",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3G1-1",
    question: "Over-modulation is most likely to cause:",
    image: "",
    options: [
      "unwanted radiation on harmonics of the RF transmitted signal",
      "interference caused by harmonics of the audio signal",
      "inadequate suppression of the unwanted sideband",
      "frequency instability in the transmitted signal",
    ],
    correct: 1,
    explanation:
      "Over-modulation means that the maximum excursions of the audio or other input signal is trying to drive the modulator beyond its designed limit. The most likely effect is that the audio signal will be clipped in some way and that will introduce distortion, harmonics and intermodulation products after any frequency limiting in the microphone amplifier, or other source. That means the sidebands will extend beyond the intended bandwidth, causing interference to users on adjacent channels or frequencies.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3g.1",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3G1-2",
    question:
      "An amplitude modulated transmission on 14.200MHz is over-modulated. This may cause interference to other stations on:",
    image: "",
    options: ["14.100MHz", "14.196MHz", "28.4MHz", "42.6MHz"],
    correct: 1,
    explanation:
      "As explained in 3G1-1 the transmitted RF will extend outside the intended frequency band, In this case we are looking for a user just outside a band 3kHz above and below the carrier i.e. just outside 14.197 to 14.203MHz.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3g.1",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3G2-1",
    question:
      "Overdriving an external power amplifier (PA) may cause intermodulation products because:",
    image: "",
    options: [
      "the PA will be operated outside its linear range",
      "the ALC action will try to shut down the PA",
      "the ALC is too slow to respond to the modulation envelope",
      "excessive current will flow in the PA output transistors",
    ],
    correct: 0,
    explanation:
      "Overdriving the PA will push it outside its linear range, causing distortion and intermodulation products",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3g.2",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3G2-2",
    question:
      "The drive to the power amplifier stage of a transmitter is a bit too high. The most likely affect of this is:",
    image: "",
    options: [
      "over-modulation resulting in a loss of audio when on SSB",
      "increase in the background noise level on speech",
      "a reduction in the stability of the carrier frequency",
      "an increase in the bandwidth of the transmitted signal",
    ],
    correct: 3,
    explanation:
      "Excess drive to the PA  can cause non-linearity and consequent intermodulation products. Odd order products, particularly third order, will be close to and even within the wanted signal resulting in an increase in the transmitted bandwidth.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3g.2",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3G3-1",
    question:
      "A transmitter is designed to perform all its modulation functions at 5MHz, and mix the modulated signal with a signal from a synthesiser, which can be multiplied up as required. What type of filter should be provided at the PA output?",
    image: "",
    options: [
      "high-pass filter",
      "low-pass filter",
      "band-pass filter",
      "band-stop filter",
    ],
    correct: 2,
    explanation:
      "A low-pass filter will provide some protection against harmonics of the RF, but a band-pass filter is needed to protect against radiating lower frequencies present inside the transmitter as part of the overall process.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3g.3",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3G4-1",
    question:
      "The circuit diagram shows part of an amplifier for 144MHz. L2 and C2 resonate at 144MHz, but there is an unwanted spurious signal caused by L1 and C1 resonating at 2MHz. This parasitic oscillation may be removed by:",
    image: "images/secrets 3G4-1.png",
    options: [
      "changing C1 from 100nF to 500nF",
      "fitting another 100nF capacitor in parallel with L1",
      "fitting a 10nF capacitor and 10Ω resistor in series from the bottom of L1 to the 0V line",
      "fitting a 10nF capacitor and 10Ω resistor in series from the bottom of L2 to the 0V line",
    ],
    correct: 2,
    explanation:
      "Changing the value of L1 or C1 may simply change the frequency at which L1 and C1 resonate. It might dampen the resonance, but just as likely it won't. The cure is to absorb the energy so the oscillation does not occur. A resistor from the bottom of L1 to the 0V line achieves this, but a capacitor having a low reactance at 2MHz is needed as a DC block.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3g.4",
    examStrategy: "5",
    examStrategyNotes: "I have nothing for this at the moment.",
    examCalculation: "1",
    exam_NOT: false,
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3G5-1",
    question: "A frequency synthesiser may produce the wrong output if:",
    image: "",
    options: [
      "the 'out of lock' signal loses control of the VCO in the synthesiser",
      "the signals into the phase comparator are on different frequencies",
      "division ratios of the programmable divider and crystal divider are different",
      "temperature stability of the VCO is not maintained",
    ],
    correct: 1,
    explanation:
      "A pgase lock loop synthesiser (PLL) is in lock when the two signals into the phase comparator are equal and it is their phase difference that is controlling the VCO frequency. A demand for a rapid frequency change or a momentary spike or break in the DC supply can cause loss of lock, such that the frequency from the VCO is no longer controlled, causing the two frequencies to be different. A well designed circuit will re-establish lock, but during that time an out-of-lock signal is needed to inhibit transmission of an uncontrolled signal.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3g.5",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3H3-1",
    question:
      "A radio receiver can just resolve a signal at a level of 0.16 µV (-123dBm), and the maximum signal before overloading is 10mV (-27dBm). What is the dynamic range?",
    image: "",
    options: ["27dB", "96dB", "123dB", "150dB"],
    correct: 1,
    explanation:
      "The dunamic range is simply the range, in dB, between the weakest resolvable signal, and the maximum before the onset of non-linearity due to overload. 123 - 27 = 96dBm. Note, both levels were in the same unit (dBm) and had the same sign (-). If the units and/or sign were different, then more care would be required.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3h.3",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3H3-2",
    question:
      "Listening close to the top of the 7MHz band it is noticed that weak signals become much easier to resolve in the late afternoon, when a broadcast station on 7.22MHz ceases transmission. It is well over 30kHz away so it was not expected to be a problem with a 2.7kHz SSB filter on the wanted signal. A likely cause is:",
    image: "",
    options: [
      "the SSB filter is not quite as good as expected",
      "the broadcast station has excessively wide sidebands",
      "intermodulation products in the receiver front end",
      "driving the AGC in time with the broadcast modulation",
    ],
    correct: 2,
    explanation:
      "The 2.7kHz filter will be in the receiver IF. The strong brioadcast signal on 7.22MHz will be inside the bandwidth of the RF front end amplifier and is evidently overloading it. That is causing multiple intermodulation products, seen as a generaL increase in the noise floor for several kHz around the broadcast and masking the wanted signal. It might be that a small input attenuator will reduce the overload and Imps without reducing the wanted signal so much that it is then unusable.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3h.3",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3I3-1",
    question:
      "The diagram shows a double superhet for HF that mixes all incoming signals to the first IF above the HF band. To what frequency should LO2 be set?",
    image: "images/secrets 3I3-1.png",
    options: ["12.650MHz", "38.900MHz", "66.400MHz", "69.700MHz"],
    correct: 2,
    explanation:
      "This is a matter of trying the four possibilities. 53.75 + 14.25 = 68MHz as IF1. Mix with LO2 at 66.4MHz gives an IF2 of 1.6MHz",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3i.3",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3I3-2",
    question:
      "A general coverage receiver is required to tune over the range 600kHz to 1600kHz and uses readily available IF components at 465kHz. The best choice for the local oscillator tuning range is:",
    image: "",
    options: [
      "135kHz - 1135kHz",
      "465kHz - 1465kHz",
      "600kHz - 1600kHz",
      "1065kHz - 2065kHz",
    ],
    correct: 3,
    explanation:
      "Option B can be discounted, as the LO should not be on the IF. Option D is the wanted sinal tuning range, so won't be the LO range. Options A and D would both give the required tuning range and IF, however the question asks for the best choice,acknowledging there is more than one possibility. Tuning from 1065kHz to 2065kHz is a 2:1 tuning range; tuning from 135kHz to 1135kHz is an 8.4:1 range, which is inherently harder. It would also required a 70:1 capacitor range in a tuned circuit. This is not normally achievable in one span.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3i.3",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3I3-3",
    question:
      "A wideband scanner picks up a good CW signal when tuned to 3.61MHz, but picks up the same signal when tuned to 7.51MHz. A reason for this might be that the:",
    image: "",
    options: [
      "transmitter has a strong second harmonic",
      "receiver intermediate frequency is 1.95MHz",
      "signal on 3.61MHz is overloading the receiver",
      "transmitter key click filter is faulty",
    ],
    correct: 1,
    explanation:
      "A superhet receiver can receive equally on the wanted frequency and its image. Normally, the image is rejected by a tuned circuit in the RF front end. The reference to wideband is a hint that it is not filtered in this case. The wanted signal and its image are twice the IF apart which would put the IF on (7.51 - 3.61)/ 2 which is 1.95MHz. Option B is the correct answer. The second harmonic of 3.61MHz is 7.22MHz, too far away from 7.51MHz to be credible and particularly on CW where even small frequency offsets are audibly clear. That discounts options A and C, which differ only in where the harmonics originates: transmitter or overloaded receiver. Key clicks are also a red herring, as there could be such clicks, but that does not fit the desription of Morse being clearly heard.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3i.3",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3I3-4",
    question:
      "The factor suggesting a low intermediate frequency should be used in a receiver design is that:",
    image: "",
    options: [
      "image frequency rejection is simplified",
      "the tuning range of the local oscillator is reduced",
      "oscillation due to stray capacitances is less likely to occur",
      "the rejection of adjacent channel interference is easier to accomplish",
    ],
    correct: 3,
    explanation:
      "A given frequency offset is a larger proportion of a low intermediate frequency. It is easier to filter out an adjacent channel with a low IF.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3i.3",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3I4-1",
    question:
      "A feature of an over-coupled response in an IF transformer is that the:",
    image: "",
    options: [
      "bandwidth is markedly reduced, making the configuration ideal for CW reception",
      "-3dB bandwidth is wider than other coupling methods, with minimal effect on the response at -30dB or -60dB",
      "increased coupling allows lower gain in the IF transistors, with consequent reduction in likelihood of oscillations",
      "distortions caused by reduced AGC bias are significantly reduced",
    ],
    correct: 1,
    explanation:
      "Over-coupling a tuned circuit means wider shoulders and a modest dip in the centre of the frequency response curve, That widens the acceptance bandwidth at -3dB (or -6dB) without having much effect on the -60dB bandwidth. That can mean the response is closer matched to the frequenbcy occupancy of a wanted signal, without affecting the rejection of nearby unwanted signals.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3i.4",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3I5-1",
    question:
      "An operator has taken much care to get a really good IF filter for CW use, but in use the results are much poorer than expected; a very clean stable signal appears to get through the filter over a wider frequency range than the filter response. A possible reason is:",
    image: "",
    options: [
      "the receiver's local oscillator has a high level of phase noise close to its operating frequency",
      "the poor screening of the IF filters is allowing too much signal leakage across the whole IF band.",
      "the image frequency attenuation is a lot poorer than the out of band attenuation of the new IF filer",
      "the RF front end amplifier is not as noise free as the new filter needs to operate to its full potential",
    ],
    correct: 0,
    explanation:
      "The question clearly states the filter response is good and that the test signal is good. Option D about noise does not address the problem and is irrelevant to the question. Option C, regarding image response, is also irrelevant. Options A and B appear plausible, but B is discouraged, saying the filter is good. Can A be the answer? Yes. Phase noise, the small random phase variations  of the local oscillator, cause noise sidebands on the otherwise clean oscillator signal. The RF test signal is intended to mix with the  LO to produce the IF. However, it can also mix with the spurious noise sidebands of the LO, meaning it is present in the IF over the width of those noise sidebands, even if the test signal was absolutely perfect. In good, low noise receivers the phase noise can be a limiting factor in receiver(or transmitter) performance.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3i.5",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3J1-1",
    question:
      "A radio receiver is specified as having a lowest resolvable signal of 5µV (-123dBW) and a maximum signal without overload of 158mV (-33dBW). Fitting a preamp of 10dB gain results in the lowest resolvable signal of 3µV (-127dBW). What change is there in the dynamic range of the new system?",
    image: "",
    options: [
      "increased by 4dB",
      "no change",
      "reduced by 4dB",
      "reduced by 6dB",
    ],
    correct: 3,
    explanation:
      "The dynamic range of the receiver itself is 90dB (123 - 33). With the pre-amp, the maximum signal before overload drops by 10dB due to the gain of the pre-amp. On its own that reduces the dynamic range by 10dB. However, the combination of pre-amp gain and its superior noise performance has allowed signals of 3µV to be resolved, rather than 5µV, an improvement of 127 - 123 = 4dB. The overall dynamic rabge has reduced by 10 - 4 = 6dB.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3j.1",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3K1-1",
    question:
      "Demodulation of an FM signal is normally achieved by a circuit which:",
    image: "",
    options: [
      "relies on the slope of a tuned circuit producing amplitude changes in response to the frequency changes of the signal",
      "times the period between successive cycles to determine the exact frequency of the signal",
      "mixes the signal with a known reference frequency to determine instantaneous frequency offset",
      "uses changes in phase angle in a tuned circuit to give different voltages, which may then be rectified",
    ],
    correct: 3,
    explanation:
      "The normal method  of demodulating FM is to use a circuit which relies on phase changes in a tuned circuit. The phase changes much more rapidly than the amplitude response, so is sensitive to the comparitively small frequency changes of narrow band FM. Slope detection will work, provided the slope of the side of a tuned circuit response is reasonably linear, but is markedly less sensitive. It can only really be considered an option when the receiver has a diode detector (for AM) but no purpose designed FM capability. It is also only usable on strong signals due to its insensitivity. There are other methods, for example, using a phase lock loop, perhaps more common for data demodulation, but these are outside the syllabus.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3k.1",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3K1-2",
    question:
      "Why, when an all mode receiver is set to FM, is the AGC normally turned off?",
    image: "",
    options: [
      "The AGC would interfere with the amplitude variations of the received signal",
      "the gain is maximised so a limiter results in constant level signals",
      "the gain is minimised so the signals don't overload the modulator",
      "FM relies on frequency variations, so the amplitude is not of concern",
    ],
    correct: 1,
    explanation:
      "Turning off the AGC allows the IF amplifiers to work at maximum gain. The signal amplitude is then limited by using diodes to clip the signal or a transistor circuit with a limited supply voltage and running oyut of headroom. That ensures constant level signals into the demodulator to remove much of the effect of noise, which is an amplitude disturbance and also enhances 'capture effect' whereby weaker co-channel FM signals are largely ignored.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3k.1",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3L1-1",
    question: "Choosing a slow decay on the AGC means that:",
    image: "",
    options: [
      "the transmitter will increase power to an external power amplifier slowly, enabling the onset of non-linearity to be easily identified",
      "the background noise, particularly when on SSB will recover to its normal level over a few seconds rather than instantly",
      "a sudden loud noise such as a static crash is attenuated to a greater extent than normal to prevent any hearing loss or damage",
      "the average power fed to the transmitter can be increased since the peaks of power are more limited than normal speech",
    ],
    correct: 1,
    explanation:
      "A fast attack is often desirable to limit the sesponse to sudden loud nioses. A slow decay means the IF gain recovers slowly, so background RF noise returns to its normal level over a second or two and possibly longer.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3l.1",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3M1-1",
    question:
      "What method does a software defined receiver use to demodulate incoming signals which may use any modulation mode?",
    image: "",
    options: [
      "the receiver is equipped with all the chosen demodulator circuits and can rapidly try each one until an intellible signal emerges ",
      "the receiver is equipped with all the chosen demodulator circuits and can simultaneously use each one, picking the output with an intellible signal",
      "the receiver demodulates the amplitude of the signal in two phases, separated by ninety degrees, allowing any modulation mode to be extracted",
      "the receiver requires a data signal, normally encoded im the carrier, to define the modulation mode being used",
    ],
    correct: 2,
    explanation:
      "By demodulating and digitising the received signal in two phases at right angles it is possible to use software to demodulate any known modulation scheme. Being a software function, it is also possible to add the capability to demodulate new modes, simply by updating the software.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3m.1",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3M1-2",
    question:
      "The drawing shows the phasor diagram representation of a modulated signal. What method of modulation is shown?",
    image: "images/secrets 3M1-2.png",
    options: [
      "amplitude modulation",
      "frequency modulation",
      "phase modulation",
      "data modulation",
    ],
    correct: 0,
    explanation:
      "The actual signal at any moment in time is the vector (or phasor) sum of the carrier and all sidebands present. In this case, the carrier and upper and lower sidebands. Inspection of the drawing shows the resultant will have constant phase with the sideband vectors simply adding and subtracting to the length i.e the amplitude of the signal. That is AM.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3m.1",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3M2-1",
    question:
      "The drawing shows part of the front end of an SDR receiver. What is significant about signals f1 and f2 from the local oscillator?",
    image: "images/secrets 3M2-1.png",
    options: [
      "f1 and f2 must be exactly in phase with the incoming carrier",
      "f1 and f2 must have exactly a 90 degree phase relationship",
      "f1 and f2 must have exactly a 180 degree phase relationship",
      "f1 and f2 must be harmonically related, normally second harmonic",
    ],
    correct: 1,
    explanation:
      "The two frequencies f1 and f2 must be at right angles, so the amplitude and phase of the incoming RF signal can be accurately digitised for subsequent processing, to separate out individual transmissions and demodulate them mathematically",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3m.2",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3N1-1",
    question:
      "Which one of the following parts of a tranceiver is only used on one of the two functions  of transmitting or receiving?",
    image: "",
    options: [
      "automatic level control",
      "DDS local oscillator",
      "mixer",
      "carrier insertion oscillator",
    ],
    correct: 0,
    explanation:
      "ALC is only used on transmit, to control the amplitude of the transmitted signal and avoid overdriving the RF power amplifier, to prevent it producing excessive harmonics and intermodulation products. The other functions are used for both transmit and receive.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3n.1",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3N2-1",
    question:
      "The homemade converter shown in the drawing is intended to be connected to an HF receiver operating in the 28 - 30MHz band. Which amateur band is it intended for?",
    image: "images/secrets 3N2-1.png",
    options: ["2m", "4m", "6m", "10m"],
    correct: 2,
    explanation:
      "The converter is producing an IF on 28-30MHz using an 80MHz LO. The input RF is either 80 - (28 to 30) = 50 to 52MHz or 80 + (28 to 30) = 108 to 110MHz. 50MHz is the 6m amateur band. 108 to 110MHz is an aeronautical radio navigation band.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3n.2",
  },
  {
    source: "Exam Secrets FULL [Transmitters Receivers] 3N2-2",
    question:
      "The converter shown has an unfortunate design problem. What is it?",
    image: "images/secrets 3N2-1.png",
    options: [
      "the oscillators in the transverter and receiver are in different enclosures so may suffer different temperature related drifts",
      "the received frequency will decrease as the frequency on the HF receiver is increased, because the transverter oscillator is above the received frequency",
      "it will be necessary to add 28MHz to all the frequencies displayed on the HF receiver",
      "The system will be unsuitable for receiving SSB signals because the sidebands are reversed in the mixing process",
    ],
    correct: 1,
    explanation:
      "The converter will translate 50MHz to 30MHz and 52MHz to 28MHz, so tuning up the band on the HF receiver will result in tuning down the band on 6m. It will also result in the upper and lower sidebands swapping sides. Pefectly usable, just have to set to the 'wrong' sideband and tune accordingly.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3n.2",
  },
  {
    source: "Exam Secrets FULL [Feeders and Antennas] 4A3-1",
    question:
      "The drawing shows two 70MHz Yagis, stacked together with ƛ/4 tails of solid polythene coax to the splitter for impedance matching. What length are the tails?",
    image: "images/secrets 4A3-1.png",
    options: ["71cm", "107cm", "143cm", "214cm"],
    correct: 0,
    explanation:
      "The coax is described as solid polythene, so you should remember that it has a velocity factor of 2/3. Lengths in the coax are 2/3 of the free space calculation. At 70MHz a wavelength is 300/70 or 4.29m, and ƛ/4 is 107cm. Then we take 2/3 of that to give 71cm.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "4a.3",
  },
  {
    source: "Exam Secrets FULL [Feeders and Antennas] 4B1-1",
    question: "The drawing shows a:",
    image: "images/secrets 4B1-1.png",
    options: ["sleeve balun", "choke balun", "1:1 balun", "4:1 balun"],
    correct: 2,
    explanation:
      "Transformer baluns provide an opportunity to change the impedance; and note for for RF transformers, the ratio is normally quoted as the impedance ratio, not the turns ratio. Inspection of the drawing shows the same number of turns on primary and secondary, making it a 1:1 balun.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "4b.1",
  },
  {
    source: "Exam Secrets FULL [Feeders and Antennas] 4D1-1",
    question: "The length of an HF dipole for 14MHz should be:",
    image: "",
    options: ["7.1m", "10.2m", "10.7m", "21.4m"],
    correct: 1,
    explanation:
      "In free space ƛ = 300/14 = 21.4m so ƛ/2 = 10.7m... However, it is not quite free space as there is an antenna (a wire conductor) there. The normal correction factor is to reduce the length by 5%, which gives 10.2m...",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "4d.1",
  },
  {
    source: "Exam Secrets FULL [Feeders and Antennas] 4D2-1",
    question:
      "A 70cm dipole is fitted with a reflector and a number of directors to achieve greater gain, but it is found the SWR has risen markedly. A possible solution is to:",
    image: "",
    options: [
      "shorten the length of the dipole elements",
      "lengthen the feeder by ƛ/4",
      "add a conductor to create a folded dipole",
      "swap the positions of the director and reflectors",
    ],
    correct: 2,
    explanation:
      "Adding passive elements to a dipole can dramatically reduce its feed impedance, solved by using a folded dipole which, if both conductors are the same diameter, increases the feed impedance by a factor of four.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "4d.2",
  },
  {
    source: "Exam Secrets FULL [Feeders and Antennas] 4E1-1",
    question:
      "A poorly matched antenna results in half the incident power being reflected. Neglecting feeder losses, the SWR will be about:",
    image: "",
    options: ["1.5:1", "2:1", "3:1", "6:1"],
    correct: 3,
    explanation:
      "The question needs to be read carefully. It says half the power is reflected. That is the reflected voltage (and current) are reduced by a factor of (1/√2) or to 70.7% of the incident value. The SWR is given by Vmax/Vmin = (Vi + Vr)/(Vi - Vr) = (1 + 0.707)/(1 - 0.707) where Vi is the incident voltage and Vr is the reflected voltage. That works out as almost 6:1",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "4e.1",
  },
  {
    source: "Exam Secrets FULL [Feeders and Antennas] 4E2-1",
    question: "A well matched antenna will exhibit a:",
    image: "",
    options: [
      "high return loss and low SWR",
      "high return loss and high SWR",
      "low return loss and low SWR",
      "low return loss and high SWR",
    ],
    correct: 0,
    explanation:
      "Remembering a good match is a low SWR is easy, but what is that as a return loss? The return loss is the ratio of the incident power to the reflected power. The reflected power will be low, hopefully very low, so the ratio of incident to reflected power will be high.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "4e.2",
  },
  {
    source: "Exam Secrets FULL [Feeders and Antennas] 4E3-1",
    question:
      "A new antenna shows a return loss of 23dB when measured in the shack. If the feeder loss is 2dB, the return loss at the antenna connection will be:",
    image: "",
    options: ["19dB", "21dB", "25dB", "27dB"],
    correct: 0,
    explanation:
      "Return loss is the ratio of incident power to reflected power at the point of measurement. Visualise a lossy feeder: much power will be lost on the way up and the same proportion on the way back. In the shack, the return loss will be high, almost irrespective of the match at the antenna. With that in mind, the return loss at the transmitter is the return loss at the antenna plus twice the feeder loss. In this question, we are given the measurement in the shack, so the loss at the antenna will be 23dB - (2 x 2dB) = 19dB...",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "4e.3",
    tagged: true,
  },
  {
    source: "Exam Secrets FULL [Feeders and Antennas] 4F1-1",
    question:
      "The impedance seen looking into the feeder termination in the shack is 200Ω resistive and a capacitive reactance of 30Ω. To bring this to 50Ω resistive for the transmitter, it will be necessary to use an:",
    image: "",
    options: [
      "AMU",
      "AMU and a 4:1 transformer",
      "AMU and a 1:1 balun",
      "AMU and a 4:1 balun",
    ],
    correct: 0,
    explanation:
      "There is no mention of balanced or unbalanced feeders or antennas, so the two balun options are red herrings. An AMU can achieve resistance value changes as well as cancelling out any reactance. Of course, there are limits, but a 4:1 resistance change is well inside the capability of an AMU. ",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "4f.1",
    tagged: true,
  },
  {
    source: "Exam Secrets FULL [Feeders and Antennas] 4F2-1",
    question:
      "The antennas in the drawing each gave a feed impedance of 50Ω, but this needs to be transformed to 100Ω, so the two antennas can be fed in parallel. What should the characteristic impedance of the matching tails be to achieve this?",
    image: "images/secrets 4F2-1.png",
    options: ["50Ω", "70Ω", "75Ω", "100Ω"],
    correct: 1,
    explanation:
      "This is a ƛ/4 coax transformer question. The formula, from the Reference Data booklet, is Z0 squared = Zin x Zout.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "4f.2",
  },
  {
    source: "Exam Secrets FULL [Propagation] 5A1-1",
    question: "In an electromagnetic wave the:",
    image: "",
    options: [
      "field strength falls linearly with distance",
      "field strength obeys the inverse square law with distance",
      "power flux density drops linearly with distance",
      "power flux density depends on the square root of the field strength",
    ],
    correct: 0,
    explanation:
      "The field strength is an inverse linear relationship. Twice the distance is half the field strength. Just like resistors halving the field strength (V/m) is a quarter of the power flux density (V/m2).",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "5a.1",
  },
  {
    source: "Exam Secrets FULL [Propagation] 5A3-1",
    question:
      "Circular polarisation is characterised by the electric and magnetic:",
    image: "",
    options: [
      "vectors rotating in opposite directions",
      "vectors having a 90 degree phase difference, giving the appearance of rotation",
      "fields taking the form of closed circles rather than a flat plane of polarisation",
      "fields remaining at right angles, but rotating through one revolution per wavelength",
    ],
    correct: 3,
    explanation:
      "The E and H fields remain in phase and at 90 degrees polarisation but twist or rotate one complete revolution per wavelength.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "5a.3",
  },
  {
    source: "Exam Secrets FULL [Propagation] 5A3-2",
    question:
      "Satellites often use circular rather than linear polarisation. A reason for this is:",
    image: "",
    options: [
      "because the antennas have a high gain, but also a high wind resistance, which is not a problem in space",
      "the attenuation between left handed and right handed antennas is much higher, allowing both to be used to increase link capacity",
      "the apparent orientation of the satellite depends on where on earth the satellite is viewed",
      "to provide a degree of attenuation to terrestrial signals which are either vertical or horizontal, reducing the risk of interference",
    ],
    correct: 2,
    explanation:
      "Satellites can be seen from a wide area of the earth and the earth's curvature means that the polarisation of the satellite depends on where it is viewed from.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "5a.3",
  },
  {
    source: "Exam Secrets FULL [Propagation] 5B1-1",
    question:
      "When there is a high sunspot count it is likely that HF propagation will be:",
    image: "",
    options: [
      "noticably enhanced, allowing many more contacts",
      "rather poorer than normal, with less chance of a contact",
      "particularly variable, with a much higher risk of fading",
      "characterised by enhanced reflection from the D layer",
    ],
    correct: 0,
    explanation:
      "A higher sunspot count means more charged particles and UV radiation, increasing the level of ionisation, which increases the MUF and enhances long distance propagation.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "5b.1",
  },
  {
    source: "Exam Secrets FULL [Propagation] 5B2-1",
    question: "The highest MUFs can be expected to occur during the:",
    image: "",
    options: [
      "day in the winter",
      "night in the winter",
      "day in the summer",
      "night in the summer",
    ],
    correct: 0,
    explanation:
      "The range of variation in the MUF is higher in the winter than the summer. Although there is more sunlight to cause ionisation in the summer, the rate of recombination, deionisation, is greater in the summer so the achieved MUFs are lower.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "5b.2",
  },
  {
    source: "Exam Secrets FULL [Propagation] 5B2-2",
    question:
      "Which option below shows a list of frequencies in ascending order, assuming a contact is possible?",
    image: "",
    options: [
      "critical frequency, optimum working frequency, LUF, MUF",
      "LUF, critical frequency, optimum working frequency, MUF",
      "LUF, optimum working frequency, MUF, critical frequency",
      "critical frequency, LUF, MUF, optimum working frequency",
    ],
    correct: 1,
    explanation:
      "The critical frequency, the optimum working frequency and the MUF are all related. The critical frequency is the maximum frequency returned on a vertical path, the MUF is the maximum returned on a particular path, and the optimum is around 10-15% below the MUF. All of those relate to the F1 and F2 layers. The LUF is set by absorption in the D layer. Particularly on a long path involving multiple hops in different time zones, the LUF can be above the MUF when no ionospheric communication is possible over the path concerned. If communication is possible, it follows that the LUF is below the MUF and optimum frequencies.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "5b.2",
    tagged: true,
  },
  {
    source: "Exam Secrets FULL [Propagation] 5B3-1",
    question: "One of the difficulties with NVIS propagation is:",
    image: "",
    options: [
      "interference from direct signals propagated via groundwave",
      "finding a suitable frequency above the LUF and below the MUF",
      "finding a suitable frequency below the LUF and above the MUF",
      "achieving the correct vertical angle for optimum radiation",
    ],
    correct: 1,
    explanation:
      "A key feature of Near Vertical Incidence Skywave is that short paths require sharp angles of refraction, meaning that the MUF can be below 7MHz. D layer absorption sets the LUF above 3.5MHz so 5MHz is the optimum and often the only available band.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "5b.3",
  },
  {
    source: "Exam Secrets FULL [Propagation] 5B4-1",
    question: "The polarisation of an HF antenna, particularly for receiving:",
    image: "",
    options: [
      "can be important in avoiding multi-path propagation",
      "does not matter, as the plane of the wave may be changed in the ionosphere",
      "is not critical when the antenna is less than half a wavelength in height",
      "should match that of the transmitting station for best results",
    ],
    correct: 1,
    explanation:
      "HF signals often undergo polarisation change in the ionosphere, so the appropriate polarisation of a receive antenna is unpredictable",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "5b.4",
  },
  {
    source: "Exam Secrets FULL [Propagation] 5C3-1",
    question: "EME contacts are best made when:",
    image: "",
    options: [
      "there is a full moon",
      "there is a new moon",
      "the moon is at apogee (furthest)",
      "the moon is at perigee (closest)",
    ],
    correct: 3,
    explanation:
      "The moon is a poor RF reflector and even with sharp focussing, most of the transmitted signal misses the moon. The distance to the moon can be the deciding factor in overall path loss and success of the contact.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "5c.3",
  },
  {
    source: "Exam Secrets FULL [Propagation] 5C3-2",
    question: "auroral flutter on radio signals is caused by:",
    image: "",
    options: [
      "changes in the level of ionisation",
      "changes in the earth's magnetic field",
      "movement of the ionised curtains",
      "rapid rotation of signal polarisation",
    ],
    correct: 2,
    explanation:
      "Auroral communication is by reflection  of the ionised curtains which form the polar regions. These move or flutter due to the random arrival of charged particles interacting with the Earth's magnetic field and gas particles in the upper atmosphere.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "5c.3",
  },
  {
    source: "Exam Secrets FULL [Propagation] 5D1-1",
    question: "Galactic noise originates from:",
    image: "",
    options: [
      "various natural noise sources such as distant thunderstorms",
      "thermal radiation from the ground causing ionic movement in the air",
      "outside the effect of the earth and its atmosphere",
      "ransom electron movement in crystal lattices in semiconductors",
    ],
    correct: 2,
    explanation:
      "Galactic noise is the name given to random background noise originating outside the Earth and its atmosphere",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "5d.1",
  },
  {
    source: "Exam Secrets FULL [Propagation] 5D2-1",
    question: "The purpose of a link budget is to:",
    image: "",
    options: [
      "determine the gain of the antennae to be used at each end of the link",
      "determine the noise fugure required at the receiver to allow communication",
      "ensure that the end to end path loss is reciprocal, that is, equal in each direction",
      "check that the proposed system will deliver an adequate signal to noise ratio",
    ],
    correct: 3,
    explanation:
      "A link budget is the sum of all the gains and losses between the transmitter output socket and the receiver input socket. That allows a calculated prediction of the signal strength at the receiver, given the transmit power , and thus the likely success of the contact.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "5d.2",
  },
  {
    source: "Exam Secrets FULL [EMC] 6A2-1",
    question: "Poor installation of EMC compliant equipment:",
    image: "",
    options: [
      "should be acceptable, as the compliance rules allow for inexperienced installation",
      "is quite likely to compromise its safe and effective operation",
      "is a breach of the EMC regulations and could result in prosecution",
      "is likely to cause considerable interference to many radio equipment users",
    ],
    correct: 1,
    explanation:
      "Both 'compromise its safe...' and 'considerable interference...' are credible answers, but the safety consideration is the better answer.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "6a.2",
  },
  {
    source: "Exam Secrets FULL [EMC] 6A4-1",
    question:
      "When you modify a commercial transceiver to operate in an amateur band you must ensure the device complies with the requirements of:",
    image: "",
    options: [
      "your amateur radio licence",
      "both your licence and the original commercial specification",
      "the original commercial specification",
      "the national EMC standards for the frequency band concerned",
    ],
    correct: 0,
    explanation:
      "The requirement is simply to comlpy with the standards in your licence: particularly clause 7 on Equipment. You may like to check the other standards as a technical guide, but that is a personal choice.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "6a.4",
  },
  {
    source: "Exam Secrets FULL [EMC] 6B1-1",
    question:
      "It is noticed that leaving a mobile phone next to the bedside clock-radio results in occasional clicking and buzzing noises. This is:",
    image: "",
    options: [
      "an indication that the phone might not be reducing its transmit power when in standby mode",
      "the clock-radio is unduly sensitive, and might not be EMC compliant",
      "possibly due to one of the two items having developed a fault",
      "quite normal if the two items are close together, and easily resolved with increased separation",
    ],
    correct: 3,
    explanation:
      "Mobile phones need to keep periodic contact with a local base station so incoming calls can be correctly routed. If placed alongside other electrical equipment it is not realistic to expect no interaction. Only a modest separation is required to avoid problems.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "6b.1",
  },
  {
    source: "Exam Secrets FULL [EMC] 6B1-2",
    question:
      "A significant risk of importing electrical equipment is that it may:",
    image: "",
    options: [
      "not have been manufactured to comply with European EMC standards",
      "not be available locally, so may be easily identified as an illicit import",
      "have been designed to work on 60Hz mains supplies for keeping time",
      "take longer to obtain spares and consumable parts",
    ],
    correct: 0,
    explanation:
      "All the answers could be a true statement, but non-compliance with EMC regulations could give rise to interference problems and might alsorisk electrical safety.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "6b.1",
  },
  {
    source: "Exam Secrets FULL [EMC] 6B2-1",
    question:
      "Which mode of transmission is most likely to be a cause of cross-modulation?",
    image: "",
    options: ["SSB", "FM", "PSK", "RTTY"],
    correct: 0,
    explanation:
      "Cross modulation is where the modulation of one signal becomes impressed on another signal, isually because the victim receiver is being pushed out of its linear range. A strong FM signal can cause blocking, which can effectively mute reception of the wanted signal by overloading the receiver. Cross-mod requires amplitude variations associated with SSB. (FM, PSK and RTTY are relatively constant amplitude with frequency or phase changes. The transitions can result in amplitude changes which could cause a low frequency buzz, the pitch depending on data rate.)",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "6b.2",
  },
  {
    source: "Exam Secrets FULL [EMC] 6B3-1",
    question:
      "It is noticed that when a nearby amateur operates on 3.78MHz, his voice and another female voice on 3.60MHz are both heard, interfering with a world service broadcast on 3.96MHz. Inspections of both amateur stations give them a clean bill of health. The interference may be caused by:",
    image: "",
    options: [
      "one of the amateur stations overdriving their PA",
      "a corroded contact in some metalwork",
      "an image frequency in the receiver",
      "a fault on the world service transmitter",
    ],
    correct: 1,
    explanation:
      "This is a case of playing with the numbers. Can signals on 3.60 and 3.78MHz cause a signal on 3.96MHz? The affected frequency is above both transmissions, so the first option is (2 x 3.78) - 3.60 = 3.96! Found it! Corroded contacts can be partially rectifying, particularly if one of the signals is quite strong, and this can cause intermodulation products.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "6b.3",
  },
  {
    source: "Exam Secrets FULL [EMC] 6C1-1",
    question:
      "A 7MHz SSB transmission is heard as a voice like signal in a neighbour's music system that has a medium wave and VHF FM receiver, as well as a CD player. Tests reveal it does not matter which audo input is selected, it simply needs to be switched on. A possible explanation is that:",
    image: "",
    options: [
      "a harmonic of the transmission falls on the IF of the receiver",
      "the signal is being picked up on the speaker leads, and detected in a P-N junction",
      "sufficient signal is being picked up for its envelope to excite the loudspeakers",
      "there is direct pickup into the very sensitive CD laser amplifier",
    ],
    correct: 1,
    explanation:
      "Options 'a harmonic of the transmission...' and 'there is direct pickup...' should be discounted because the effect does not depend on the signal source selected on the music system. It is unlikely the pick-up is sufficient to drive the speakers directly, far more likely that the SSB transmission is being picked up and conveyed to the audio amplifier, where a P-N semiconductor junction is acting as a diode detector with the audio circuits amplifying the resulting signal.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "6c.1",
  },
  {
    source: "Exam Secrets FULL [EMC] 6C2-1",
    question:
      "Which transmission risks overloading a TV mast-head pre-amplifier?",
    image: "",
    options: ["2m FM", "40m SSB", "80m CW", "10GHz TV"],
    correct: 0,
    explanation:
      "Many masthead amplifiers cover either from about 50MHz (old TV bands in many continental countries) or 90MHz (bottom of VHF sound broadcasts) up to around 900MHz, which was the top of most TV broadcast bands. 2m and 70cm are inside that range.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "6c.2",
  },
  {
    source: "Exam Secrets FULL [EMC] 6C3-1",
    question:
      "It is noticed that when transmitting in the 3.5MHz band there is often interference evident on the domestic VHF FM radio. The most likely mechanism is:",
    image: "",
    options: [
      "direct pickup into the more sensitive RF front end of the receiver",
      "conducted interference via the mains wiring affecting the audio stages",
      "third harmonic of the transmissions getting into the receiver IF stages",
      "intermodulation between the amateur transmitter and the VHF broadcast",
    ],
    correct: 2,
    explanation:
      "The third harmonic of 3.567MHz is 10.7MHz, which is the standard intermediate frequency of domestic FM broadcast receivers. That is easily the most likely option.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "6c.3",
  },
  {
    source: "Exam Secrets FULL [EMC] 6C3-2",
    question: "The UK Digital Audio Broadcasting band in the UK extends from:",
    image: "",
    options: [
      "526kHz - 1606kHz",
      "87.5MHz - 108MHz",
      "174MHz - 230MHz",
      "183MHz - 240MHz",
    ],
    correct: 2,
    explanation:
      "This is a 'remember it' question, either directly as in this question, or to answer an EMC question as in 6C3-1, where knowing the IF was an integral part of selecting the correct answer.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "6c.3",
  },
  {
    source: "Exam Secrets FULL [EMC] 6D1-1",
    question:
      "Several ferrite rings are fitted over a two-wire ribbon feeder. This is found to have no effect on the transmitted signal. Why?",
    image: "",
    options: [
      "the ferrite is not very effective at radio frequencies",
      "the RF currents are in phase in each conductor, and have no net effect",
      "the transmitted signal is a common mode signal, and not affected by ferrite",
      "the transmitted signal is a differential mode signal, and not affected by the ferrite",
    ],
    correct: 3,
    explanation:
      "The wanted signal, transmit or receive, coax or twin wire, is always differential mode. That isd, the currents at any point are always in opposite directions with no overall magnetic field. If there is no field, the ferrite rings will have no effect.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "6d.1",
  },
  {
    source: "Exam Secrets FULL [EMC] 6D1-2",
    question:
      "Tests suggest that RF is being picked up on the loudspeaker leads of a music system and the speech is heard from the loudspeakers. The most likely effective cure is fitting:",
    image: "",
    options: [
      "ferrite rings at the loudspeaker ends of the leads",
      "ferrite rings at the amplifier ends of the leads",
      "0.1µF capacitors across the loudspeaker terminals",
      "1000µF capacitors in series with the speaker leads",
    ],
    correct: 1,
    explanation:
      "The interference mechanism is that modulated RF is being picked up on the speaker leads and conducted into the audio amplifier stage of the music system. Any diode or transistor in the amplifier is likely to rectify the RF signal, resulting in demodulation to become an audio signal, which can then be amplified alongside whatever music is being played. The need is to stop the RF getting into the amplifier stages. Ferrite rings should do that. The 0.1µF capacitors, if fitted at the amplifier end of the leads might help, but with the common mode pickup on both leads, it is far from certain. The series 1000µF capacitor would have minimal effect if any, and ferrite rings at the loudspeaker end of the leads would have little or no effect too.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "6d.1",
  },
  {
    source: "Exam Secrets FULL [EMC] 6D1-3",
    question:
      "The drawing shows a ccoaxial stub to remove a 2m amateur signal from a 100MHz VHF transmission. The stub should be open circuit at the free end and:",
    image: "images/secrets 6D1-3.png",
    options: [
      "ƛ/4 long at 145MHz",
      "ƛ/2 long at 145MHz",
      "ƛ/4 long at 100MHz",
      "ƛ/2 long at 100MHz",
    ],
    correct: 0,
    explanation:
      "The aim is to put a short circuit across the input at 145MHz to attenuate signals picked up at that frequency and do minimal damage to signals at 100MHz. An open circuit stub ƛ/4 at 145MHz will have that effect.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "6d.1",
  },
  {
    source: "Exam Secrets FULL [EMC] 6D1-4",
    question:
      "A 2m amateur antenna and a broadcast TV antenna are mounted on the same roof. To minimise the risk of problems, it is helpful to fit a:",
    image: "",
    options: [
      "high-pass filter in the TV down lead",
      "low-pass filter in the TV down lead",
      "high-pass filter in the amateur feeder",
      "low-pass filter in the amateur feeder",
    ],
    correct: 0,
    explanation:
      "The aim is to keep 145MHz out of the TV input at frequencies above 470MHz. There could be small harmonics of 145MHz at 290, 435 and 580MHz. 725MHz is now off the top of the TV band. However, the key need is to avoid a strong signal at 145MHz getting into the TV and causing overload or non-linearity. The best bet is a high-pass filter allowing frequencies above 470MHz in the TV aerial lead.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "6d.1",
  },
  {
    source: "Exam Secrets FULL [EMC] 6D2-1",
    question: "What should the point marked 'X' be connected to?",
    image: "images/secrets 6D2-1.png",
    options: [
      "the centre of a balanced feeder",
      "the earth point on an Antenna Tuning Unit (ATU)",
      "the safety earth point on a transmitter",
      "the braid of the feeder connector on a balun",
    ],
    correct: 2,
    explanation:
      "The drawing is a mains filter. Point X is connected via the mains plug to the house earth, and should now be connected to an earth point on the transmitter/transceiver as the safety earth. Note the guidance regarding an RF earth, and cross-bonding the two earths. Professional advice is essential as there are safety considerations which differ depending on the type of supply and the engineering practice of your particular supplier, the District Network Operator.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "6d.2",
  },
  {
    source: "Exam Secrets FULL [EMC] 6E1-1",
    question:
      "The field strength 20m away from an antenna of 10dB gain fed with 40W is:",
    image: "",
    options: ["7V/m", "140V/m", "0.08W/m2", "0.8W/m2"],
    correct: 0,
    explanation:
      "The answer says C, but it is A. Field strength = 7 X sqrt(ERP) / d comes out to 7V/m. Why is this ERP, by default?",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "6e.1",
  },
  {
    source: "Exam Secrets FULL [EMC] 6E2-1",
    question:
      "If the RF earth on an HF transmitter is missing or not well installed, it is quite likely that:",
    image: "",
    options: [
      "the frequency stability of the transmitter will be impaired",
      "the RCBO on the mains input to the house will trip out",
      "the transceiver will appear 'hot' to the touch when on transmit",
      "decoding of data signals will be impaired, leading to data errors",
    ],
    correct: 2,
    explanation:
      "Unless the antenna system is well balanced, there is a real possibility that the transmitter will have a moderately high RF voltage on the outer connection of the coaxial output to the feeder. That means the entire case will have that RF voltage and give a hot to the touch sensation, which can be quite unpleasant. This also means RF radiation in the shack which could cause interference to other electronic equipment.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "6e.2",
  },
  {
    source: "Exam Secrets FULL [EMC] 6E3-1",
    question:
      "Minimum coupling between an HF dipole antenna and the feeder is achieved by:",
    image: "",
    options: [
      "using balanced feeder from the dipole down to ground level",
      "twisting the balanced feeder to get one half twist per quarter wavelength",
      "keeping the dipole elements and the feeder at right angles",
      "using a balun and a ferrite choke on the feeder, close to the dipole",
    ],
    correct: 2,
    explanation:
      "The feeder, coaxial or twin, should leave centre-fed dipole antennas at right angles to avoid pickup from the radiated field",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "6e.3",
  },
  {
    source: "Exam Secrets FULL [EMC] 6F1-1",
    question:
      "General advice on installing amateur radio in a vehicle is available from the:",
    image: "",
    options: [
      "Ofcom Code of Practice for mobile amateur operation",
      "Federation of Communication Services Code of Practice",
      "Radio Communications Federation Mobile Code of Practice",
      "Automobile Association (AA) or Royal Automobile Club (RAC)",
    ],
    correct: 1,
    explanation:
      "The Federation of Communication Services produce a Code of Practice (FCS1362:2016) for installing radio communications equipment in vehicles. It is regarded as the industry standard, but it does say that specific instructions from the vehicle manufacturer take precedence. Following such guidance may be a requirement of your vehicle insurance policy.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "6f.1",
  },
  {
    source: "Exam Secrets FULL [EMC] 6F2-1",
    question:
      "When installing an amateur transceiver in a vehicle, it is important to:",
    image: "",
    options: [
      "connect the radio to a circuit which is dead when the ignition key is removed",
      "keep the antenna and feeder well away from the vehicle wiring",
      "check the auxiliary position on the ignition switch is adequately rated",
      "mount the transceiver on the dashboard where it can be easily seen",
    ],
    correct: 1,
    explanation:
      "Keeeping the antenna, feeder and transceiver power and control wiring as far away from the vehicle electrics will minimise the risk of RF pickup. Consider also the field strength in the passenger compartment.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "6f.2",
  },
  {
    source: "Exam Secrets FULL [EMC] 6F2-2",
    question:
      "To minmise the likelihood of RF being conducted into the vehicle electronics and in the absence of specific manufacturer instructions:",
    image: "",
    options: [
      "the positive and negative leads should run together by a convenient route direct to the vehicle battery with both leads unfused",
      "the positive and negative leads should run together by a convenient route direct to the vehicle battery with fuses in both the positive and negative leads",
      "the positive and negative leads should run together direct to the vehicle battery with only the positive lead fused",
      "the positive lead should be fused direct to the vehicle battery and the negative lead to the chassis by the battery negative connection",
    ],
    correct: 3,
    explanation:
      "Any specific guidance by the manufacturer should be followed but the normal standard advice (FCS1362:2016) is to take the positive power lead direct to the battery with a suitable fuse. The negative lead should run parallel as far as practicable and connect to the vehicle chassis nect to where the battery negative connects to the chassis. The negative lead is not fused. That is a change to the superceded document MPT1362.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "6f.2",
  },
  {
    source: "Exam Secrets FULL [EMC] 6G1-1",
    question:
      "An old telephone belonging to a neighbour is suffering from interference by HF SSB. A possible cure to try is to:",
    image: "",
    options: [
      "fit capacitors of about 0.01µF across the input terminals to the phone",
      "connect a 100µH choke in series with each lead of the telephone",
      "clip ferrite rings over the lead to the telephone or wind around a ring if possible",
      "replace the phone with a modern electronic version",
    ],
    correct: 2,
    explanation:
      "Telephone equipment requires approval for connection to the network and should not therefore be modified since it will invalidate the approval. The best option is a ferrite ring. In severe cases more than one ring might be required to get sufficient inductance.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "6g.1",
  },
  {
    source: "Exam Secrets FULL [OPERATING] 7A1-1",
    question:
      "You hear a station calling CQ and clearly getting frequent replies, but your replies are not getting any response. It is a strong station, and propagation is good. Why might that be?",
    image: "",
    options: [
      "You are calling on the wrong sideband",
      "They might be operating 'split' frequency",
      "The skip distance is different for each direction",
      "You are not a recognised DXCC member",
    ],
    correct: 1,
    explanation:
      "It is normal for rare stations who are likely to get a 'pile-up', that is lots of stations calling, to set their receiver to a different frequency to the frequency used for transmitting. Typically within 10kHz. That is so they spread out all the callers, and stands some chance of receiving a complete callsign to go back to. This is about SPLIT frequency.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "7a.1",
  },
  {
    source: "Exam Secrets FULL [OPERATING] 7B1-1",
    question:
      "You are listening to the 5MHz band and hear an overseas station calling on 5.3730MHz USB.",
    image: "",
    options: [
      "You may reply on the same frequency and hold a conversation",
      "You may reply on 5.3715MHz and see if you get a reply",
      "You may reply on the same frequency and suggest a QSY",
      "You cannot respond at all to that station",
    ],
    correct: 1,
    explanation:
      "Inspection of the licence schedule shows that the relevant sub-band is 5.362 to 5.3745MHz, so a signal on 5.3730MHz (carrier) will extend upwards to about 5.3760MHz, which is 1.5kHz outside the sub-band. That would be a breach of the licence, and will interfere with the primary user. 3kHz down from the top of the band is 5.3715MHz, which is as high as you can go and remain within your allocation. It is worth a try: you will be heard and if the overseas station can tune down and remain within his allocation, then a QSO is possible. It will have the side benefit of alerting that station to check the UK limits if calling for a UK contact. Operating outside the band edges is a matter the Primary User (MOD) has complained about.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "7b.1",
  },
  {
    source: "Exam Secrets FULL [OPERATING] 7B2-1",
    question:
      "You are holding an HF CW contact with another amateur but you are constantly interrupted by other contacts on SSB. The most likely reason is that:",
    image: "",
    options: [
      "the SSB users are members of a fishing fleet keeping in contact on amateur frequencies",
      "the amateur band in another country is different from the UK one",
      "skip distances are much greater than usual due to high solar activity",
      "other UK amateurs are inclined to ignore the band plans if it happens to suit them",
    ],
    correct: 1,
    explanation:
      "The International Amateur Radio Union (IARU) do try to achieve common regional band plans, but it is not always possible, since licence allocations and patterns of use do vary. The question does ask for a judgement call since some of the other options are possible but less likely. It does help to be aware of the syllabus, which makes specific reference to band plans.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "7b.2",
  },
  {
    source: "Exam Secrets FULL [SAFETY] 8A1-1",
    question: "High DC voltages are likely to be found:",
    image: "",
    options: [
      "in the power supply of a high power transistor RF amplifier",
      "in equipment utilising thermionic valves",
      "in a PME supply with a ruptured neutral",
      "at the fed end of end-fed antennas",
    ],
    correct: 1,
    explanation:
      "Valve equipment typically runs at around 200-300V DC. Power amplifiers can be up to 3kV. Easy to miss the question, regarding 'DC'.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "8a.1",
  },
  {
    source: "Exam Secrets FULL [SAFETY] 8A2-1",
    question:
      "In a premises supplied using PME practice, the supply company will have connected the prenises' main earth point to:",
    image: "",
    options: [
      "the earthed outer sheath of the underground supply",
      "the neutral conductor at the point of entry to the premises",
      "an earth rod adjacent to the point of entry",
      "the mains water supply to the premises",
    ],
    correct: 1,
    explanation:
      "There is no separate earth conductor in a PME electricity supply. Instead, the neutral conductor is earthed at the sub-station, and at points along the road. In the house, the domestic safety earth is connected, cross-bonded, to the supply neutral.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "8a.2",
  },
  {
    source: "Exam Secrets FULL [SAFETY] 8A6-1",
    question: "When unavoidably working on live equipment, you should:",
    image: "",
    options: [
      "wear an anti-static wrist band with a resistance to earth of not greater than 20 ohms",
      "keep one hand clear of the equipment and earthed objects at all times",
      "display a notice on the shack door 'Live working - no entry'",
      "place the equipment concerned on an insulating rubber mat",
    ],
    correct: 1,
    explanation:
      "Normally, one should work on unplugged equipment, but there are occasions where adjustments need to made while working. Under those circumstances, one hand should be kept away so that even if a shock is experienced, it won't be across the chest and affect the heart rhythm.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "8a.6",
  },
  {
    source: "Exam Secrets FULL [SAFETY] 8D1-1",
    question: "The ICNIRP provide guidance on:",
    image: "",
    options: [
      "safe working levels for high voltage supplies",
      "minimum signal levels for TV coverage areas",
      "communications signal to noise ratios",
      "safe EM field strength exposure levels",
    ],
    correct: 3,
    explanation:
      "ICNIRP is the International Commission on Non-Ionising Radiation Protection. Their remit is advising on the safe levels of exposure to non-ionising radiation such as electromagnetic fields, RF fields to you and me. The answer in the book is incorrectly specified as B, when it should be D.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "8d.1",
    tagged: true,
  },
  {
    source: "Exam Secrets FULL [SAFETY] 8E1-1",
    question:
      "Fitting a proprietary spark gap and discharge tube to the feeder to an HF dipole antenna should:",
    image: "",
    options: [
      "prevent the build up of damaging static charges",
      "avoid damage to the transceiver in the event of being struck by lightning",
      "permit a second receiver to be fitted to the antenna even while transmitting",
      "avoid the need to disconnect the transceiver during a thunderstorm",
    ],
    correct: 0,
    explanation:
      "The spark gap is fitted between the antenna feeder and earth. It is designed to conduct at around 350V preoviding static protection and limited protection against nearby lightning strikes. The conduction potential is too high to protect semiconductor receiver front ends. That requires a medium high value resistor which won't protect from lightning induced surges.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "8e.1",
  },
  {
    source: "Exam Secrets FULL [SAFETY] 8F4-1",
    question:
      "When operating a special event station in tented accommodation, and using an extension cable to provide mains power, it is necessary to:",
    image: "",
    options: [
      "use a residual current protective device",
      "use circuit breakers in preference to wire fuses",
      "route the power supply cable well above head height",
      "provide additional filtering to avoid unwanted radiation",
    ],
    correct: 0,
    explanation:
      "Any outside use of mains carries an increased risk. An RCBO both in the supply building and at the tent site are essential. Filtering might be helpful but is not as important as the RCBO. An overhead supply will keep it out of reach, but might exacerbate RF noise or pickup.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "8f.4",
  },
  {
    source: "Exam Secrets FULL [SAFETY] 8F5-1",
    question: "When fitting a transmitter in a vehicle, you should:",
    image: "",
    options: [
      "use an existing circuit to obtain power for the radio",
      "identify a circuit that is only live once the engine has started",
      "provide a facility for hands-free operation to avoid distractions",
      "fit a fuse in the lead from the battery negative terminal to the chassis",
    ],
    correct: 2,
    explanation:
      "Hands free operation is essential. Operating the radio is a distraction, and distractions from driving must be minimised. The other answers might seems a good idea but all have a problem. Existing circuits and switched live circuits risk RF induction into the vehicle electronics and control systems. The only exception is a supply specifically intended for transmitters and even then it is essential to check whether it was for an FM or AM/SSB transmitter. FM transmitters have a relatively steady continuous current demand on transmit. SSB, apart from having a more intrusive RF field, has rapidly varying DC current demand which is more than likely to cause problems.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "8f.5",
  },
  {
    source: "Exam Secrets FULL [SAFETY] 8F6-1",
    question:
      "When planning an event open to the public, which activity must be regarded as essential?",
    image: "",
    options: [
      "advertising the event beforehand",
      "timetabling the various activities",
      "performing a risk assessment",
      "identifying sufficient staffing",
    ],
    correct: 2,
    explanation:
      "A risk assessment is an essential part of the planning. The venue owners and event organisers, if you are part of a larger event, are likely to make that a condition of taking part. Equally it will be part of the insurance policy conditions. However the key reason is the safety of the public. Conducting an assessment will identify the risks and allow opportunity to minimise the risk and have an effective strategy for dealing with any residual risk.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "8f.6",
  },
  {
    source: "Exam Secrets FULL [SAFETY] 8F6-2",
    question: "The purpose of the risk assessment is to:",
    image: "",
    options: [
      "avoid the possibility of being liable for an accident",
      "identify the cause, harm and mitigation of accidents",
      "show the visiting public that you take their safety seriously",
      "comply with the requirements of insurance cover for the event",
    ],
    correct: 1,
    explanation:
      "The aim of the risk assessment is to identify risks, minimise their occurrence and effect, and develop plans to handle the situation should an incident occur.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "8f.6",
  },
  {
    source: "Exam Secrets FULL [SAFETY] 8F7-1",
    question:
      "When using a petrol-electric generator at a field day event the cans of fuel to refill the generator should be stored:",
    image: "",
    options: [
      "alongside the generator for ease of use",
      "together with the fire extinguisher for safety",
      "away from the generator and the fire extinguisher",
      "comply with the requirements of insurance cover for the event",
    ],
    correct: 2,
    explanation:
      "Petrol is very flammable. Petrol vapour will spread, and is potentially explosive. Consider that a gallon can power a car for over 30 and possibly 60 miles. Vapour near or in the air inlet of the generator could ignite, as could spills over a hot engine. Storage should be away from the generator, and sufficiently away from the fire extinguisher that the extinguisher remains accessible if a fire does occur. Downwind is sensible but not the key consideration.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "8f.7",
  },
  {
    source: "Exam Secrets FULL [MEASUREMENTS] 9A1-1",
    question:
      "A 1mA meter has a 30Ω internal resistance and is to be used as a 5A meter in a power supply unit. The shunt resistor should have a resistance of:",
    image: "",
    options: ["1mΩ", "5mΩ", "6mΩ", "30mΩ"],
    correct: 2,
    explanation:
      "The meter movement is 1mA full scale. At that current, the voltage across it will be 1mA x 30Ω = 30mV. The shunt must have 30mV across it at 5A, (strictly 4.999A). The resistance of the shunt is 30mV / 5A = 6mΩ.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "9a.1",
  },
  {
    source: "Exam Secrets FULL [MEASUREMENTS] 9A1-2",
    question:
      "The meters in the drawing are correctly set to an appropriate range, except that meter 3 has been left on 10mA DC. What will be the reading on meter 4?",
    image: "images/secrets-9a1-2.png",
    options: ["0mA", "0.67mA", "1.0mA", "1.5mA"],
    correct: 0,
    explanation:
      "Meter 3 should be set to measure the voltage across the 4kΩ and 6kΩ resistors in series. However, it was set to a current range, so will have a very low resistance, so there are only a few mV across the 4kΩ and 6kΩ resistors and only µA through them. Meter 4 will read zero.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "9",
  },
  {
    source: "Exam Secrets FULL [MEASUREMENTS] 9A3-1",
    question:
      "A 10MHz crystal reference has an original accuracy of 5ppm and ages at 5ppm per year. A year later it is used to check a 10MHz USB transmitter. It is estimated the reference can be compared with the receiver to an accuracy of 100Hz, and the transmitter can then be relied on to the nearest 100Hz within a month of calibration. The bandwidth of the receiver is limited to 500Hz. What is the lowest frequency it is safe to transmit in the 10MHz amateur band that day without risking being out of band?",
    image: "",
    options: ["10,000.3kHz", "10,000.8kHz", "10,100.3kHz", "10,100.8kHz"],
    correct: 2,
    explanation:
      "This question relies on adding up all the errors. Since the wording is 'safe to transmit' then the only way to be safe is to assume all the errors are worst case. A methodical approach is the best way of dealing with this type of question, and the actual numbers are usually relatively easy. See the book for much more detail...",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "9",
  },
  {
    source: "Exam Secrets FULL [MEASUREMENTS] 9A4-1",
    question:
      "An antenna is connected by a short feeder to the input of a radio receiver. Everything is correctly matched to 50Ω and a sensitive high impedance RF voltmeter across the feeder records an input to the receiver of 10µV. The receiver is disconnected and the level of RF signal noted. The reading will be about:",
    image: "",
    options: ["5µV", "10µV", "14µV", "20µV"],
    correct: 3,
    explanation:
      "If everything is correctly matched, then there is a signal with a 50Ω source resistance feeding a receiver with a 50Ω load resistance. This means the source EMF is 20µV, with 10µV being dropped in the source resistance and 10µV across the receiver load. If the receiver is disconnected, then there is no RF current, and no voltage drop in the source resistance. The high impedance RF voltmeter will 'see' the source EMF of 20µV.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "9a.4",
  },
  {
    source: "Exam Secrets FULL [MEASUREMENTS] 9A4-2",
    question:
      "A signal source for the HF band is designed to produce 50µV into a 50Ω load, corresponding to -73dBm and S9 on a typical S-meter. When checked on an oscilloscope, the peak to peak amplitude will be about:",
    image: "",
    options: ["283µV", "141µV", "100µV", "71µV"],
    correct: 0,
    explanation:
      "The key point here is to recognise that the signal source is intended to work into and match a 50Ω load. An oscilloscope typically has an input impedance of 1MΩ, close to an open circuit. The signal at the oscilloscope input will be 100µV, not 50µV, when loaded. The 100µV is an RMS value, so a peak will be 141.4µV and a peak to peak on the oscilloscope will be 283µV.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "9a.4",
  },
  {
    source: "Exam Secrets FULL [MEASUREMENTS] 9A5-1",
    question:
      "A peak reading diode probe is used to measure the transmitter RF output into a dummy load. The probe indicates 12V . What is the output power?",
    image: "",
    options: ["0.8W", "1.2W", "1.4W", "2.9W"],
    correct: 2,
    explanation:
      "The probe shows a peak value of 12V, so the RMS value will be 12 / 1.41 = 8.49V. Into 50Ω, the output power is 8.49 / 50 = 1.4W.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "9a.5",
  },
  {
    source: "Exam Secrets FULL [MEASUREMENTS] 9A5-2",
    question: "Peak envelope power is defined as the power:",
    image: "",
    options: [
      "at the top of an RF cycle of an unmodulated carrier",
      "at the top of an RF cycle at the crest of the modulation",
      "averaged over one RF cycle at the crest of the modulation envelope",
      "averaged over one audio cycle at the crest of the modulation envelope",
    ],
    correct: 2,
    explanation:
      "This is often misunderstood, but the answer is provided. See Note (b) to Schedule 1 of the licence which is provided in the exam.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "9a.5",
  },
  {
    source: "Exam Secrets FULL [MEASUREMENTS] 9A6-1",
    question:
      "A crystal calibrator is used to check the frequency accuracy pf a VHF transceiver. A discrepancy of about 200Hz is noticed. ",
    image: "",
    options: [
      "this is a higher error than expected, and the transceiver needs adjusting",
      "this is a credible outcome, but it is worth adjusting the transceiver",
      "this is a credible outcome, but either or both items could be off frequency",
      "this is too high a discrepancy, something is faulty, or the test method is suspect",
    ],
    correct: 2,
    explanation:
      "The VHF receiver can reasonably be taken to be in the 2m band, say 145MHz. A 1ppm error would give a frequency offset of 145Hz. That would apply to both the crystal reference in the transmitter, and in the crystal calibrator, especially if both are more than a year out of calibration. The difficulty with such checks is that, as described, there is no certainty which device is in error, and it is entirely likely that thay both are to some extent.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "9a.6",
  },
  {
    source: "Exam Secrets FULL [MEASUREMENTS] 9A7-1",
    question: "The switch in the diagram is likely to be labelled:",
    image: "images/secrets-9a7-1.png",
    options: ["hi-lo", "on-off", "+ -", "fwd-rev"],
    correct: 3,
    explanation:
      "The device shown is an SWR meter, reading forward and reverse power, with the ability to switch between them.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "9a.7",
  },
  {
    source: "Exam Secrets FULL [MEASUREMENTS] 9A8-1",
    question:
      "An oscilloscope timebase is set to 1ms per division, and the Y-axis to 10mV per division. The signal in the diagram is approximately:",
    image: "images/secrets-9a8-1.png",
    options: [
      "500Hz, 20mV RMS",
      "500Mhz, 30mV RMS",
      "2kHz, 20mV RMS",
      "2kHz, 30mV RMS",
    ],
    correct: 0,
    explanation:
      "Inspection of the drawing shows the voltage to be 6 divisions, peak to peak. At 10mV per division, that is 60mV peak-to-peak, or 30mV peak, or 30 x 0.7 = 21mV RMS. Reading the screen that accurately is difficult, so about 20mV is about as good as it gets.Similarly, there are 5 complete cycles in 10 divisions of 1ms per division, which is 2ms per cycle. The frequency is the reciprocal of a single cycle time, sp 1 / 0.002 = 500Hz.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "9a.8",
  },
  {
    source: "Exam Secrets FULL [MEASUREMENTS] 9A9-1",
    question:
      "The drawing shows a spectrum analyser scan of the frequency span 10-60MHz to check for the third harmonic of a 14Mhz transmission. The carrier has been set to 0dB. How far below the carrier is the third harmonic?",
    image: "images/secrets-9a9-1.png",
    options: ["20dB", "23dB", "32dB", "35dB"],
    correct: 2,
    explanation:
      "The off-air display shows there are many signals present. We are told the carrier is at 14MHz and normalised to 0dB. Third harmonic is 3 x 14 = 42MHz, and careful inspection shows the signal at 42MHz is about 32dB below the carrier. Estimating a vertical drop from the peak is not always easy, but the two sides of that spike straddle the 42 scale point on the X-axis and the bottom of the spike is close enough to the axis to allow certainty.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "9a.9",
  },
  {
    source: "Exam Secrets FULL [MEASUREMENTS] 9B1-1",
    question:
      "A pre-amplifier, having 50Ω input and output impedances, is specified as giving 40µV out for 10µV in. Its gain, in dB, is:",
    image: "",
    options: ["6dB", "10dB", "12dB", "30dB"],
    correct: 2,
    explanation:
      "We are told the impedances are the same, so a doubling of voltage is a 6dB increase. Doubling again is another 6dB. 12dB in total. The reference to impedance is necessary, otherwise a 4 times step-up transformer could be mistaken for having a gain. In linear (not dB) terms, the calculation is: The output voltage is 4 times greater, which in the same impedance means the current is 4 times greater, giving a power gain of 16 times. ",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "9b.1",
  },
  {
    source: "Exam Secrets FULL [MEASUREMENTS] 9B1-2",
    question:
      "A radio receiver is being checked, and a 0.2µV SSB signal at the RF input produces a 1V tone at the audio output, together with noise averaging 100mV. The signal to noise ratio is:",
    image: "",
    options: ["10dB", "20dB", "0dB", "-121dBm"],
    correct: 1,
    explanation:
      "The signal to noise ratio is the ratio of 1V to 100mV. Both are at the same point, the audio output, so clearly they are in the same impedance. 10 times voltage is 100 times power which is 20dB. Alternatively, remember that 10 times voltage is 20dB without going via the power step.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "9b.1",
  },
  {
    source: "Exam Secrets FULL [MEASUREMENTS] 9C1-1",
    question:
      "The coil in the LC tuned circuit normally increases its inductance as the temperature rises. One solution to minimise frequency drift is to:",
    image: "",
    options: [
      "use a capacitor with a negative temperature coefficient",
      "use a capacitor with a positive temperature coefficient",
      "mount the capacitor further away from any source of heat",
      "mount the coil vertically to minimise the temperature gradient",
    ],
    correct: 0,
    explanation:
      "Ideally we want components with a zero temperature coefficient, but this is seldom possible, so the best  available solution is to select a balance of components to have an overall zero coefficient. In this case a negative coefficient capacitor to offset the positive one in the inductor.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "9c.1",
    tagged: true,
  },
]

export default EXAM_SECRETS_QUESTIONS
