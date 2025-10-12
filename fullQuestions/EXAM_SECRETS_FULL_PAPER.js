const EXAM_SECRETS_FULL_PAPER = [
  {
    source: "Exam Secrets FULL PAPER Q01",
    question:
      "Which action is prohibited by the licence, unless carried out in support of a user service, disaster or international emergency?",
    image: "",
    options: [
      "sending messages in a code such as Morse Code, which is not widely understood",
      "using abbreviations which are not listed in the relevant examination syllabus",
      "using words where the meaning is known only to the intended recipient",
      "speaking in a foreign language not commonly spoken in the UK",
    ],
    correct: 2,
    explanation:
      "(6-19b) prohibits obscuring the meaning of messages unless for the purposes of (6-5) which is supporting user services or disasters. Morse and Q-codes are to enhance communication, and are fine, as is using any language both parties happen to share.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1",
  },
  {
    source: "Exam Secrets FULL PAPER Q02",
    question:
      "Why is it appropriate to take steps to control the transmitted bandwidth?",
    image: "",
    options: [
      "the transmission will occupy more spectrum than required for satisfactory communication and may contravene licence condition 6-2",
      "spread spectrum modes are not permitted by the amateur radio licence, unless a special research permit is obtained from Ofcom",
      "the signal will be unintelligible on most receivers",
      "the transmitted frequency will be unstable",
    ],
    correct: 0,
    explanation:
      "(6-2) requires us not to cause undue interference to any wireless telegraphy, including other amateurs. A transmission wider than that necessary for successful communication risks doing that and is, in any case, anti-social.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1",
  },
  {
    source: "Exam Secrets FULL PAPER Q03",
    question:
      "A remotely controlled transmitter is on 7.11MHz, and the control link is on 145.795MHz. The main transmitter is set to a power level of 80W ERP. The maximum permitted power limit for the link is:",
    image: "",
    options: ["10W", "40W ERP", "80W ERP", "1000W"],
    correct: 3,
    explanation:
      "The only technical requirement for a link in an amateur bandd is that it must be above 30MHz, so the licence limit is 1kW at each end. Obviously, and to comply with (6-2) on undue interference, the link should be at the lowest power that allows reliable operation.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1",
  },
  {
    source: "Exam Secrets FULL PAPER Q04",
    question:
      "If you have your HAREC document with you, when in a country that has signed up to CEPT recommendation T/R 61-02, then you may:",
    image: "",
    options: [
      "operate in that country for longer than the normal 3 month limit",
      "apply for an amateur licence in that country as if you had passed their examination",
      "operate on bands that are in either that countries licence or your UK licence",
      "drop the normal requirement to prefix your UK callsign with the local prefix letters",
    ],
    correct: 1,
    explanation:
      "The Harmonised Amateur Radio Examination Certificate (HAREC) confirms you have passed the Full level examination, or its equivalent in signatory countries, and can obtain a licence from that country.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1",
  },
  {
    source: "Exam Secrets FULL PAPER Q05",
    question: "The UK is in ITU Region:",
    image: "",
    options: ["1", "2", "3", "4"],
    correct: 0,
    explanation: "The UK and Europe are in Region 1.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "7h.2",
  },
  {
    source: "Exam Secrets FULL PAPER Q06",
    question:
      "What is the relevance of the transmit mode in assessing EMF (electromagnetic field) compliance?",
    image: "",
    options: [
      "it allows for the average transmit power for a given peak power",
      "it allows for the relative transmit and receive times over any 6 minute period",
      "it corrects for people being out of the main beam of the antenna",
      "it limits the instantaneous transmit power at the crest of the modulation envelope",
    ],
    correct: 0,
    explanation:
      "Not all modes transmit at full power while PTT is pressed. FM does. Unprocessed (uncompressed) SSB is rated at 20% and processed SSB at 50%. The RSGB online calculator has many modes built in for selection.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1",
  },
  {
    source: "Exam Secrets FULL PAPER Q07",
    question:
      "You are taking part in an NVIS net on 5.314MHz USB in support of an event. You must have:",
    image: "",
    options: [
      "a copy of the 5MHz schedule to refer to",
      "a telephone in your possession or nearby",
      "contact details of the nearest military unit",
      "permission from the nearest military unit",
    ],
    correct: 1,
    explanation:
      "The rules for identification are different on 5MHz, where we have Secondary allocation, with MOD having Primary access. Note G to Schedule 1 requires you to be contactable by telephone. This must be the number you gave to Ofcom when applying for your licence or confirming the details, including your phone number at the transmission location, remain correct.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "1",
  },
  {
    source: "Exam Secrets FULL PAPER Q08",
    question:
      "It is decided to limit the lowest POWER from the loudspeaker to 1% of full volume. To achieve this, a resistor is inserted between the lower connection of the potentiometer and the 0V line to form a potential divider as shown in the diagram. The control itself is a 10kΩ potentiometer. The value of the resistor should be:",
    image: "images/secrets-full-paper-08.png",
    options: ["0.1kΩ", "1kΩ", "1.1kΩ", "10kΩ"],
    correct: 2,
    explanation:
      "If the power delivered to the loudspeaker is to be 1% of the maximum power, that is the full volume on the volume control, then the minimum will be 10% of the voltage (Power = Voltage squared/Resistance). That means the potential divider formed by the volume control and the new resistor must be 10:1. Remember that a 10kΩ and a 1kΩ resistor form an 11:1 divider (10 x 1)/(10 + 1) The 1kΩ resistor must be a bit bigger than 1kΩ for a 10:1 divider. Option C is the only one close. Vout / Vin = 0.1 = R / (10 + R), and R = 1.1kΩ. See the book for a better layout.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2",
  },
  {
    source: "Exam Secrets FULL PAPER Q09",
    question:
      "A 3µF and a 6µF capacitor are connected in series to a 12V supply. What is the voltage across each of the capacitors?",
    image: "",
    options: [
      "6V on each capacitor",
      "4V on 3µF and 8V on 6µF",
      "4V on 6µF and 8V on 3µF",
      "12V on each capacitor",
    ],
    correct: 2,
    explanation: `
        The quick solution is to realise that in series, both capacitors will have the same charge, which is current x time. 
        
        $$ Q = V \\times C $$
        $$ V = \\frac{Q}{C} $$ 
        
        The smaller capacitor will have the larger voltage. <br>
        The total capacitance of the two capacitors in series gives 
        
        $$ C_T = \\frac{3 \\times 6}{3 + 6} = 2µF $$
        
        At 12V, the total charge is:
        
        $$Q_T = V \\times C = 12V \\times 2µF = 24µC $$
        
        The voltage on the 3µF capacitor is:
        
        $$ V_3 = \\frac{Q}{C} = \\frac{24 \\times 10^{-6}}{3 \\times 10^{-6}} = 8V $$
        $$ V_6 = \\frac{Q}{C} = \\frac{24 \\times 10^{-6}}{6 \\times 10^{-6}} = 4V $$
        lookup: "See page(s) x of the Full Licence text book`,
    syllabus: "2",
  },
  {
    source: "Exam Secrets FULL PAPER Q10",
    question:
      "The circuit diagram shows a transistor operating a relay, which consists of a coil on a soft iron former, so the magnetic attraction operates a contact to control some mains lighting. What is the purpose of the diode?",
    image: "images/secrets-full-paper-10.png",
    options: [
      "to prevent the relay operating if the low voltage supply is of the wrong polarity",
      "to avoid the back EMF from affecting the transistor when it turns on to operate the relay",
      "to avoid the back EMF from affecting the transistor when it turns off to release the relay",
      "to ensure the relay releases when the signal on the transistor base is removed",
    ],
    correct: 2,
    explanation:
      "If the current to the relay is stopped abruptly then the back EMF will cause a voltage spike considerably greater than the supply voltage, and quite possibly high enough to damage the transistor. The diode will provide somewhere for the current associated with the spike to pass harmlessly saving the transistor. It is not a problem at turn-on, the voltage may be applied suddenly, but the current can build up at such a rate as the coil inductance permits with only a modest EMF.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2",
  },
  {
    source: "Exam Secrets FULL PAPER Q11",
    question:
      "A 1kV high voltage power supply has a reservoir capacitor of 10µF. It is estimated that if the stored voltage falls to about 100V in 10 seconds then it will be safe to open the case. What value of bleed resistor should be fitted?",
    image: "",
    options: ["100kΩ", "200kΩ", "500kΩ", "1MΩ"],
    correct: 2,
    explanation: `After one time constant has elapsed, the voltage will have fallen to about a third of the initial value, so after two time constants, the initial 1kV should be reasonably close to 100V i.e. 1000V drops to 333V after <b>one time constant</b>, then to 111V after two <b>two time constants</b>. 
        <br><br>
        So, given that we are told that the stored voltage in the capacitor drops to about 100V in 10 seconds, the time constant (Tau) required is about 5 seconds. 
        <br><br>
        Given that 
        $$\\tau = C \\times R$$ 
        then 
        $$R = \\frac{\\tau}{C} = \\frac{5s}{10µF} = 500k\\Omega$$ 
        
        Note: a more accurate calculation (which is outside the syllabus) shows the voltage is about 135V after 10 seconds, and about 11.5 seconds are needed to get down to exactly 100V. 
        
        The resistor should be sized to handle 1kV , 2mA current, and 2W power dissipation.`,
    lookup: "See page(s) 22 of the Full Licence text book",
    syllabus: "2d.7",
  },
  {
    source: "Exam Secrets FULL PAPER Q12",
    question:
      "An 18.2µH coil and a resistor of 300Ω are connected in series. A current of 3mA at 3.5MHz is flowing through the circuit. What is the applied voltage?",
    image: "",
    options: ["0.9V", "0.96V", "1.5V", "2.1V"],
    correct: 2,
    explanation: `
        <a href='https://www.electronics-tutorials.ws/inductor/ac-inductors.html' target='_blank'>Inductive REACTANCE</a> of the coil is given by:

        $$ X_L = 2 \\pi  f  L = 2 \\times \\pi \\times 3.5 \\times 10^6 \\times 18.2 \\times 10^{-6} = 400\\Omega $$

        Total impedance is given by:

        $$ Z = \\sqrt{300^2 + 400^2} = 500\\Omega $$
        
        The applied voltage is:
        $$ V = I \\times R = 3 \\times 10^{-3}A \\times 500 \\Omega = 1.5V $$
        
        It is worth looking out for 3, 4, 5 triangles etc.`,
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2",
  },
  {
    source: "Exam Secrets FULL PAPER Q13",
    question:
      "An SDR transmitter digitises the audio signal from the microphone at a rate of 7000 samples per second. A particularly loud whistle at 4kHz gets through the analogue audio filter, albeit reasonably well attenuated. What audio frequency will this cause at the distant receiver if all the other processes are performed as intended?",
    image: "",
    options: ["2kHz", "3kHz", "4kHz", "7kHz"],
    correct: 1,
    explanation:
      "At 7000 samples per second the Nyquist frequency is 3.5kHz. A signal at 4kHz is 500Hz above the Nyquist frequency, so will be interpreted as a signal 500Hz below it, or 3kHz.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3",
    tagged: true,
  },
  {
    source: "Exam Secrets FULL PAPER Q14",
    question:
      "A transformer has 960 turns on the primary, and 64 turns on the secondary. The mains input is 240V rms. The load on the secondary is equivalent to a 2Ω resistor. What current is drawn from the mains, assuming no losses in the transformer?",
    image: "",
    options: ["0.5A", "1A", "6.4A", "8A"],
    correct: 0,
    explanation: `
        The output from the transformer is proportional to the turns ratio: 
        $$V_{out} = V_{in} \\times \\frac{T_{out}}{T_{in}} = 240 \\times \\frac{64}{960} = 16V $$ 
        The load on the secondary is equivalent to 2Ω, so:
        
        $$ I_{out} = \\frac{V_{out}}{R_{out}} = \\frac{16V}{2Ω} = 8A $$

        and the power on output is:
        $$ P_{out} = IV = 8 \\times 16 = 128W $$

        On input, as there are no losses in this transformer, power in equals power out, and the input current is:
        $$ I = \\frac{P_{in}}{V_{in}} = \\frac{128}{240} = 0.53A$$

        <br>
        <br>
        <br>
        <br>
        When \\(a \\ne 0\\), there are two solutions to \\(ax^2 + bx + c = 0\\) and they are
        $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$
        `,
    lookup: "See page(s) 28-29 of the Full Licence text book",
    syllabus: "2g.1",
  },
  {
    source: "Exam Secrets FULL PAPER Q15",
    question:
      "A 400W transmitter is feeding an Antenna Matching Unit where the first component is a parallel tuned circuit. On its own, the Q-factor of the tuned circuit is about 50, but when loaded, that is, connected to the antenna, the working Q drops to 5. What is a reasonable estimate for the circulating current in the tuned circuit?",
    image: "",
    options: ["5A", "8A", "14A", "40A"],
    correct: 2,
    explanation: `At 400W, the input current into 50Ω is:
        $$ P = I \\times V = I^2 \\times R $$
        Therefore:
        $$ I = \\sqrt{\\frac{P}{R}} = \\sqrt{\\frac{400}{50}} = 2.83A$$

        With a working Q of 5 that gives a circulating current of about 14A.
        <br><br>
        [[I don't understand this last part. <br><br>This is an inline test for MathJax: $x=\\sqrt{4}$ ]]
        `,
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3",
    tagged: true,
  },
  {
    source: "Exam Secrets FULL PAPER Q16",
    question:
      "Calculate the component value of R1 in the circuit diagram to bring the collector voltage to 7.3V. The transistor has a VBE of 0.7V and β between 400 and 900.",
    image: "images/secrets-full-paper-16.png",
    options: ["38kΩ", "57kΩ", "90kΩ", "161kΩ"],
    correct: 0,
    explanation:
      "With a collector voltage of 7.3V the collector current is about (12 - 7.3) / 4.7 = 1mA. The voltage across the emitter resistor will be about 1.8V, so the base will be at about 2.5V. The 2.5V across 10kΩ is a current of 250µA, and much the same current will be in R1, which should have 9.5V across it. That requires a resistance of R = 9.5 / 0.25 = 38kΩ. The base current will be a maximum of 2.5µA, which we can neglect in the standing current of 250µA.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2i.3",
  },
  {
    source: "Exam Secrets FULL PAPER Q17",
    question:
      "What configuration is the transistor amplifier in the circuit diagram?",
    image: "images/secrets-full-paper-17.png",
    options: [
      "emitter follower",
      "common emitter",
      "common base",
      "common collector",
    ],
    correct: 2,
    explanation:
      "The input is on the emitter, and the base is held at 0V AC by a capacitor to the 0V line. That is a common base configuration.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2",
  },
  {
    source: "Exam Secrets FULL PAPER Q18",
    question:
      "At what frequency is the transformer in the block diagram likely to operate?",
    image: "images/secrets-full-paper-18.png",
    options: ["50Hz", "100Hz", "30 - 80kHz", "3.5 - 3.8MHz"],
    correct: 2,
    explanation:
      "The block diagram is of a switched mode power supply. The transformer operating frequency will be above human (and hopefully dogs) hearing range, up to about 80 - 100kHz.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "2",
  },
  {
    source: "Exam Secrets FULL PAPER Q19",
    question:
      "A modulator produces an SSB output from 8.900MHz to 8.903MHz. This is mixed with a VFO at 5.250MHz to give outputs in the 20m and 80m amateur bands. What are the actual frequencies?",
    image: "",
    options: [
      "3.650-3.653MHz and 14.150-14.153MHz",
      "3.650-3.647MHz and 14.150-14.153MHz",
      "3.650-3.653MHz and 14.150-14.147MHz",
      "3.650-3.647MHz and 14.150-14.147MHz",
    ],
    correct: 0,
    explanation:
      "The sum outputs are 14.150MHz (0Hz) to 14.153MHz (3kHz) and the difference outputs are 3.650MHz (0Hz) to 3.653MHz (3kHz).",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3",
  },
  {
    source: "Exam Secrets FULL PAPER Q20",
    question:
      "To safely operate on 29.696MHz with audio 300Hz to 3kHz, the allowable drift in the master oscillator must be better than:",
    image: "",
    options: ["3.4ppm", "10ppm", "34ppm", "100ppm"],
    correct: 2,
    explanation:
      "The occupied bandwidth is 29.696 to 29.699MHz. The top of the band (see the schedule) is 29.700MHz, so just 1kHz to spare. 1kHz in 29700kHz is 1000000 / 29700 = 34 parts per million (ppm).",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3",
    tagged: true,
  },
  {
    source: "Exam Secrets FULL PAPER Q21",
    question: "What is the function of the blank box in the block diagram?",
    image: "images/secrets-full-paper-21.png",
    options: [
      "sine wave lookup table",
      "Fourier transform",
      "square to sine wave conversion",
      "digital filter",
    ],
    correct: 0,
    explanation:
      "The blank box is the sine wave lookup table, giving the amplitude of a sone wave at enough points through the cycle to seed the digital to analogue converter to produce an analogue output of sufficient purity.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3",
  },
  {
    source: "Exam Secrets FULL PAPER Q22",
    question: "What is the output from this circuit?",
    image: "images/secrets-full-paper-22.png",
    options: [
      "a single sideband with no carrier",
      "a single sideband with a carrier",
      "a double sideband with a carrier",
      "a double sideband with no carrier",
    ],
    correct: 3,
    explanation:
      "The circuit is a balanced modulator. The output is the upper and lower sidebands representing the audio signal on the RF carrier. The carrier itself and the audio signal are balanced out.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3",
  },
  {
    source: "Exam Secrets FULL PAPER Q23",
    question:
      "A single tone test using the CW mode at 14.300MHz is driving the PA into non-linearity. As well as the signal on 14.300MHz, there is likely to be a signal on:",
    image: "",
    options: ["14.3007MHz", "28.300MHz", "42.900MHz", "57.100MHz"],
    correct: 2,
    explanation:
      "Non-linearity will produce harmonics. Only 42.900MHz is a harmonic. 14.3007MHz is a 700Hz offset, relevant for a BFO, but not what was asked.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3",
  },
  {
    source: "Exam Secrets FULL PAPER Q24",
    question:
      "What component part of a transmitter would have an output called 'out of lock'?",
    image: "",
    options: [
      "automatic level control",
      "frequency synthesiser",
      "full break-in keying",
      "standing wave detection circuit",
    ],
    correct: 1,
    explanation:
      "Specifically, it would be a phase lock loop frequency synthesiser. The direct digital synthesis type does not have an out-of-lock condition. The out-of-lock output must inhibit transmission because under those circumstances, the transmitted frequency is uncontrolled.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3",
  },
  {
    source: "Exam Secrets FULL PAPER Q25",
    question:
      "Why will an overly strong signal within the RF front end passband, but outside the subsequent IF bandwidth, limit the receiver's ability to detect weak signals, otherwise perfectly readable?",
    image: "",
    options: [
      "the strong signal will cause the AGC to reduce the gain below that needed to bring weak signals up to a usable level",
      "non-linearity will result in intermodulation products. some of which will be close to, and on top of the wanted weak signals",
      "the dynamic range of the receiver is degraded by strong signals, and this loss of range is always at the low signal end",
      "the wanted weak signals will mix with stronger signals, resulting in them appearing at the sum and difference frequencies",
    ],
    correct: 1,
    explanation:
      "An overly strong signal will drive the RF fron end circuits into non-linearity, resulting in lots of intermodulation products, which will be alongside and on top of the wanted signal, which then appears to be lost in the noise. The other options deserve a comment. The AGC control signal is developed at the output from the IF, so a signal outside the IF bandwidth should have little or no effect. The dynamic range of a receiver is set by the gains and internal noise  of the receiver, not external signals. The mixing effect may be true, but the effect stated does not answer the question asked.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3",
  },
  {
    source: "Exam Secrets FULL PAPER Q26",
    question:
      "A superhet receiver is tuned to 1.82MHz and has an IF of 460kHz. The image frequency of the receiver might be:",
    image: "",
    options: ["0.90MHz", "0.92MHz", "1.36MHz", "2.28MHz"],
    correct: 0,
    explanation:
      "There are two possible image frequencies. 2 x IF = 920kHz, and 1820kHz plus and minus 920kHz gives 900kHz and 2740kHz.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3",
  },
  {
    source: "Exam Secrets FULL PAPER Q27",
    question: "Why is a preamp often more beneficial at VHF/UHF than at HF?",
    image: "",
    options: [
      "at HF, many signals overlap from different parts of the world, so the environment is interference limited",
      "at VHF and UHF, the natural background noise is much lower, and internal receiver noise can be the limiting factor",
      "VHF and UHF propagation is poorer, and signals are naturally weaker, which requires more gain for good detectors",
      "HF propagation is poorer, and signals are naturally weaker, which requires more gain for good detection",
    ],
    correct: 1,
    explanation:
      "The limiting factor on sensitivity is noise. Having sifficient gain is easy, but low internal noise is harder and expensive. At HF, the natural noise is high, higher than the internal noise of ordinary circuits. The opposite is true at VHF, and much more so at UHF and above. Ideally the preamp will be at the antenna end of the feeder, so feeder losses don't affect the achievable sensitivity. Higher gain antennas also improve the sensitivity, and the option of preamp, straight through or attenuator will allow the greatest range of signal levels to be handled, albeit not simultaneously.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3",
  },
  {
    source: "Exam Secrets FULL PAPER Q28",
    question: "The device shown in the diagram is a:",
    image: "images/secrets-full-paper-28.png",
    options: [
      "product detector",
      "SWR indicator",
      "frequency discriminator",
      "PLL out-of-lock detector",
    ],
    correct: 2,
    explanation:
      "The device is a ratio detector, for demodulating FM signals. It relies on phase changes around resonance in a tuned circuit. The phase changes are much more marked than amplitude changes, making the device sensitive to even very narrow frequency deviations.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3",
  },
  {
    source: "Exam Secrets FULL PAPER Q29",
    question:
      "The phasor diagram shows a phasor representation of a modulated carrier. What type of modulation is depicted?",
    image: "images/secrets-full-paper-29.png",
    options: [
      "amplitude modulation",
      "frequency modulation",
      "single sideband modulation",
      "binary phase shift keying",
    ],
    correct: 1,
    explanation:
      "This is too long to type in. See page 152 of the secrets manual.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3",
  },
  {
    source: "Exam Secrets FULL PAPER Q30",
    question:
      "Which one of the functions below is NOT common to both transmit and receive?",
    image: "",
    options: [
      "local oscillator",
      "Automatic Gain Control",
      "mixer",
      "IF filter",
    ],
    correct: 1,
    explanation:
      "The local oscillator is often used to mix up in the transmitter and mix down to the RF in the receiver. That also covers the mixer for transmitting and receiving. The IF filter stages can follow the moddulator to remove the other modulation products on transmit. The AGC is only used in the IF to maintain a constant level signal into the detector.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "3",
  },
  {
    source: "Exam Secrets FULL PAPER Q31",
    question:
      "A two way splitter for a couple of stacked 2m antennas requires two lengths of solid polythen coax ƛ / 4 long. These should be cut to:",
    image: "",
    options: ["104cm", "52cm", "35cm", "26cm"],
    correct: 2,
    explanation:
      "Don't understand why a quarter of 2m is 51.7cm, so see this answer on secrets page 152.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "4",
  },
  {
    source: "Exam Secrets FULL PAPER Q32",
    question:
      "A quarter wave ground-plane antenna, mounted with the radiating element vertical has a feed impedance of approximately:",
    image: "",
    options: ["25Ω", "37Ω", "50Ω", "75Ω"],
    correct: 1,
    explanation:
      "The ƛ / 4 ground plane is effectively half a dipole., the other half being the reflection in the ground plane. Feed impedance of a dipole in free space is 73Ω, so a ƛ / 4 ground plane is 73 / 2 = 37Ω.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "4",
  },
  {
    source: "Exam Secrets FULL PAPER Q33",
    question:
      "The feeder of an existing installation is replaced with one having a lower loss. On checking the installation from in the shack, it should be observed that the SWR:",
    image: "",
    options: [
      "and return loss have increased",
      "has increased, and the return loss reduced",
      "has reduced, and the return loss increased",
      "and return loss have reduced",
    ],
    correct: 1,
    explanation:
      "The only change is the feeder loss. The reflection at the antenna, whatever proportion that was, hasn't changed. Neither has the power from the transmitter. If the feeder loss is lower, then a bit more signal will reach the antenna, and a bit more signal will reach the transmitter on the return path. This means the Standing Wave Ratio (SWR) will be greater. Goodbye to the two options where SWR is reduced. The return loss is the ratio between the forward and reflected signals. If more reflected signal arrives back at the transmitter then the ratio between them will be lower.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "4",
  },
  {
    source: "Exam Secrets FULL PAPER Q34",
    question:
      "An amateur inadvertently uses a short lead ƛ / 4 long intended for use on an oscilloscope, where the characteristic impedance used is 75Ω. The lead is connected to a 50Ω dummy load. The impedance at the free end will be:",
    image: "",
    options: ["37Ω", "50Ω", "75Ω", "112Ω"],
    correct: 3,
    explanation:
      "See the Secrets book for the formula and where to find it on EX309.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "4",
  },
  {
    source: "Exam Secrets FULL PAPER Q35",
    question: "Communication with satellites often uses:",
    image: "",
    options: [
      "vertical polarisation",
      "slant polarisation",
      "horizontal polarisation",
      "circular polarisation",
    ],
    correct: 3,
    explanation:
      "Satellite communication often uses circular polarisation, mainly because the orientation of the satellite can change, either as a feature of its orbit, or as the viewing angle changes from different points on the earth's surface",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "5",
  },
  {
    source: "Exam Secrets FULL PAPER Q36",
    question:
      "Which of these parameters about the ionosphere will have the lowest frequency?",
    image: "",
    options: [
      "MUF on a long path",
      "MUF on a short path",
      "critical frequency",
      "NVIS frequency",
    ],
    correct: 2,
    explanation:
      "The Critical Frequency is the highest frequency that will be refracted back to the Earth on vertical incidence. As the distance between transmitter and receiver gets greater, the angle through which the wave must be refracted reduces, so the highest frequency, the MUF, increases. The Critical Freqyency is the lowest of those. The NVIS frequency is not really a recognised term, but is a description of the MUF on a very short path.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "5",
  },
  {
    source: "Exam Secrets FULL PAPER Q37",
    question:
      "What propagation mechanism is responsible for auroral propagation?",
    image: "",
    options: [
      "the effect is caused by intense solar illumination near the equator, causing ionisation in denser parts of the atmosphere, supporting longer distance VHF propagation",
      "charged solar particles are directed towards the poles by the earth's magnetic fields, causing curtains of ionised gases, which can reflect radio waves",
      "interaction between the sun's and earth's magnetospheres causes molecules in the upper atmosphere to become polarised, which may reflect radio waves",
      "the intense cold in the polar regions of the upper atmosphere dramatically slows the normal night time deionisation, so it can remain reflective at night",
    ],
    correct: 1,
    explanation:
      "The Aurora is primarily caused by charged solar particles being swept towards the poles by the earth's magnetic field. The resulting ionisation can be quite intense, and reflect radio waves.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "5",
  },
  {
    source: "Exam Secrets FULL PAPER Q38",
    question:
      "A neighbour is complaining that amateur transmissions are causing his top quality alarm system to trigger. Its quality is not really in doubt, but the problem may be caused by:",
    image: "",
    options: [
      "a change in operating frequency at the amateur station",
      "installing the system with unscreened, untwisted wires throughout",
      "a missing RF earth at the premises where the alarm is fitted",
      "an overhead telephone line passing close to the affected premises",
    ],
    correct: 1,
    explanation:
      "The field from an amateur transmitter can be quite high, higher than envisaged by the EMC directive when setting immunity standards for interference conducted into the affected device, not helped by poor installation methods. Ferrite rings and twisting the wiring to avoid open loops will reduce the risk.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "6",
  },
  {
    source: "Exam Secrets FULL PAPER Q39",
    question: "Home constructed amateur radio transmitters must:",
    image: "",
    options: [
      "be designed to comply with the CEPT EMC standards",
      "be demonstrated to comply with the CEPT EMC standards",
      "comply with the licence requirements in respect of interference",
      "comply with both the CEPT and licence interference requirements",
    ],
    correct: 2,
    explanation:
      "The EMC directive and CEPT requirements apply to equipment placed on the market, not home made (or modified) equipment. Nonetheless, the requirements of the licence to avoid undue interference to wireless telegraphy apparatus still apply.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "6",
  },
  {
    source: "Exam Secrets FULL PAPER Q40",
    question: "Blocking is a phenomenon where:",
    image: "",
    options: [
      "a filter is used to remove an image channel in a receiver, but pass the wanted signal",
      "a strong constant signal close in frequency to the wanted signal overloads the receiver input",
      "a transmission on the intermediate frequency of a receiver is picked up and interferes with the wanted signal",
      "a wanted signal is interrupted in time with the modulation envelope of an unwanted interfering signal",
    ],
    correct: 1,
    explanation:
      "Blocking is caused by a strong signal driving the victim equipment outside its operating range, such that the wanted signal disappears, or the equipment ceases to function as intended. If the wanted signal is interfered with in time with the interfering modulation, then that phenomenon is termed cross-modulation. Often, the interfering modulation is distinguishable as another transmission.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "7",
  },
  {
    source: "Exam Secrets FULL PAPER Q41",
    question: "RF entering an electronic device may be demodulated by:",
    image: "",
    options: [
      "the radio receiver section of the device",
      "any semiconductor junction in the device",
      "any tuned circuits close to the radio frequency concerned",
      "the loudspeaker and leads",
    ],
    correct: 1,
    explanation:
      "All semiconductor sevices rely in part on non-linear junctions inside the semiconductor e.g. diode. Consequently, unwanted RF can be demodulated, in the manner of a diode detector for AM.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "7",
  },
  {
    source: "Exam Secrets FULL PAPER Q42",
    question:
      "Morse transmissions at 1.82MHz on top band are causing interference to a neighbour's battery powered medium wave radio, particularly when it is tuned to 900kHz. This may well be because:",
    image: "",
    options: [
      "the radio antenna is a quarter wave long at the affected frequency",
      "the local oscillator in the radio is set above the tuned frequency",
      "a sub-harmonic of the transmission is getting radiated as well",
      "the field strength is causing direct pickup on that particular frequency",
    ],
    correct: 1,
    explanation:
      "it is common for the local oscillator in a medium wave domestic radio to be set above the wanted signal, because its tuning range is then proportionately much lower. The image frequency is twice the IF removed, and the IF is typically in the range 460-470kHz, partly because it is an optimum choice from image-v-adjacent considerations, and partly bevause it is economic for all manufacturers to choose common components. 1830 - 900 = 930kHz, and half that is 465kHz. 1.83MHz is on the image frequency of a domestic medium wave radio tuned to 900kHz. There is a small rrange of frequencies where this problem can occur.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "7",
  },
  {
    source: "Exam Secrets FULL PAPER Q43",
    question:
      "A particularly strong signal, on 145MHz, is causing interference to the FM broadcast band, notably 102.6MHz. A T-piece is used to connect a coaxial stub in parallel with the input to the domestic radio. The coaxial cable stub should be:",
    image: "",
    options: [
      "ƛ/4 at 102.6MHz, with the free end shorted, inner to braid",
      "ƛ/4 at 145MHz, with the free end shorted, inner to braid",
      "ƛ/4 at 145MHz, with the free end open circuit and insulated",
      "ƛ/2 at 145MHz, with the free end open circuit and insulated",
    ],
    correct: 2,
    explanation:
      "The aim is to short out the unwanted 145MHz signal whilst doing as little damage as possible to the 102.6MHz signal. A ƛ/4 coaxial stub, open circuit at the far end, will appear as a short circuit at the T-bar end. It needs to be ƛ/4 at 145MHz.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "7",
  },
  {
    source: "Exam Secrets FULL PAPER Q44",
    question:
      "A competition station is using 400W fed to two stacked long Yagis with a total gain of 16dB. It is assumed that other equipment will have adequate immunity to field strengths of up to 3V/m; that is achieved at a distance of about:",
    image: "",
    options: ["30m", "130m", "300m", "2.1km"],
    correct: 2,
    explanation:
      "See EX309 formula sheet: middle column, towards the bottom, which is E = 7 x sqrt(erp) / d where erp is 400W with an antenna gain of 16dB (10dB + 3dB + 3dB) or 40 times. Distance comes out to 295m, and the real answer could be anywhere from 250-350m.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "6e.1",
  },
  {
    source: "Exam Secrets FULL PAPER Q45",
    question:
      "Balanced horizontal HF antennas tend to cause fewer EMC problems to neighbouring houses, because:",
    image: "",
    options: [
      "house wiring is generally more susceptible to vertically polarised fields",
      "being balanced, the horizontal fields will largely cancel out",
      "house wiring is unbalanced, and less sensitive to balanced fields",
      "a balun at the antenna centre allows the coaxial cable feed to drop vertically away",
    ],
    correct: 0,
    explanation:
      "House wiring tends to act as a vertical antenna, with the horizontal wiring acting as capacitive loading. Consequently, it tends to be more susceptible to vertical fields. A better analysis is outside the scope of the syllabus.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "7",
  },
  {
    source: "Exam Secrets FULL PAPER Q46",
    question:
      "What does the Federation of Communication Services do that is of interest to the radio amateur?",
    image: "",
    options: [
      "Provide a route for amateurs to make their collective wishes known to government",
      "provide advice and assistance on EMC problems in domestic households",
      "issie publications on the wide range of communications facilities in commercial use",
      "produce the Code of Practice for installing radio communications facilities in vehicles",
    ],
    correct: 3,
    explanation:
      "The Federation of Communications Services produces document FCS 1363 which is the accepted Code of Practice for installing radio communications facilities in vehicles.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "7",
  },
  {
    source: "Exam Secrets FULL PAPER Q47",
    question:
      "A neighbour complains that he is suffering quite often from interference to his TV and suspects it might be you. You should:",
    image: "",
    options: [
      "explain that now the TV transmissions are digital, the concept of suffering radio interference no longer exists",
      "suggest he might be better off subscribing to one of the many cable fed systems",
      "ask if can recall when the problem occurs and compare that with your operating log",
      "advise him to call the services of a TV dealer or, if he prefers, report the matter to the BBC",
    ],
    correct: 2,
    explanation:
      "A good reason to keep a log. One you already have, clearly kept since well before the complaint arose, will be given much more credibility than one written after the complaint.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "6",
  },
  {
    source: "Exam Secrets FULL PAPER Q48",
    question: "What is the purpose of operating split frequency?",
    image: "",
    options: [
      "it spreads out ststions calling in a pile-up, allowing some callsigns to be copied",
      "it allows full duplex or simultaneous two way contacts, speeding up contacts",
      "it simplifies automated log keeping at the distant station in a pile-up",
      "it allows callers from different countries to operate in accordance with their band plans",
    ],
    correct: 0,
    explanation:
      "Rare stations, particularly DXpeditions (visits to rare locations) can cause a large pile-up where there are hundreds of overlapping calls, none of which are clear. By listening a few kHz away from the transmit frequency, the callers are much more spread out and more successfull contacts can be made.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "7",
  },
  {
    source: "Exam Secrets FULL PAPER Q49",
    question:
      "When sending an Olivia data signal with a bandwidth of about 350kHz in the 472kHz band, it is recommended to use frequencies between:",
    image: "",
    options: [
      "472.0-479.0kHz",
      "472.0-475.0kHz",
      "475.0-479.0kHz",
      "477.0-479.9kHz",
    ],
    correct: 2,
    explanation:
      "The 472kHz (600m) Band Plan recommends 475-479kHz for CW and digital modes over 200kHz bandwidth. The 472-475kHz part is for modes with a bandwidth of less than 200kHz.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "7",
  },
  {
    source: "Exam Secrets FULL PAPER Q50",
    question:
      "What is the risk, in an amateur radio context, if a PME mains supply suffers a break in the neutral conductor somewhere in the street outside the premises?",
    image: "",
    options: [
      "all power to the shack wil be lost, possibly in the middle of a contact",
      "RCBO's and similar protective devices may trip, hiding reconnection of supply",
      "the mains earth and bonded metalwork will rise significantly above earth potential",
      "the reflected power in the network can momentarily double the mains voltage",
    ],
    correct: 2,
    explanation:
      "If the supply Neutral is ruptured in the street, then the house Neutral will rise to near Live potential through connected appliances. If the premises have a PME supply, then the house Earth will be connected to the incoming Neutral at the Main Earth Terminal (MET) beside the company fuse and meter. That means the house Earth will also rise to near Live voltage, as will all exposed metalwork which is bonded to the house Earth. Not all exposed metalwork need be bonded to the MTE, which is explained in Chapter 3 under PME. [8a.2]",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "8a.2",
  },
  {
    source: "Exam Secrets FULL PAPER Q51",
    question:
      "A fellow amateur terminates the feeders on a copper panel, where they enter the shack, to allow manual antenna selection. There is a Radio Frequency Choke (RFC) between each centre conductor and the earthed panel. What is the purpose of the RFC?",
    image: "",
    options: [
      "to bleed off any static charges that might collect on the antennas",
      "to assist in bringing the whole system to resonance, avoiding the need for an AMU",
      "to offset the capacitances inherent in the main coaxial feeders to the antennas",
      "to allow the coaxial cable to carry power to an external automated AMU",
    ],
    correct: 0,
    explanation:
      "RFCs are fairly high inductance, often wound on a ferrite slug intended to pass modest currents, but block RF. They won't affect the RF characteristics of the installation, but will provide a DC static discharge path.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "8",
  },
  {
    source: "Exam Secrets FULL PAPER Q52",
    question:
      "You are proposing to run an amateur radio station at a scout camp, and have access to a shed for dry storage and mains power. As part of your planning, you must check the:",
    image: "",
    options: [
      "number of scouts who will be at the radio station at any one time",
      "capacity of the mains supply in the shed, and provision of an RCBO",
      "allowable height and space requirements of the various antennas",
      "ease of vehicle access to deliver the equipment to the radio station",
    ],
    correct: 1,
    explanation:
      "All the options have their merits, but the one affecting SAFETY is the goodness and adequacy of the mains supply and the provision of RCBOs. That, the other options listed, and several other factors, including RF field strengths, should be the subject of a written Risk Assessment.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "8",
  },
  {
    source: "Exam Secrets FULL PAPER Q53",
    question:
      "One of the documents an insurance company is likely to want to see when requesting cover for club meetings and training courses at a new club premises is:",
    image: "",
    options: [
      "reports of activities carried out over the previous year",
      "record of premium payments over the last three years",
      "minutes of the most recent annual general meeting",
      "a risk assessment covering the proposed activities",
    ],
    correct: 3,
    explanation:
      "Any activity to which visitors attend should have a risk assessment. The core reason is to identify and minimise risks, and have procedures ready to deal with any incidents that do occur. Normally they are a mandatory part of obtaining insurance cover.  They will be requested if a claim arises, if they haven;t been requested as part of arranging cover. Not having documented assessments could result in the insurance being invalid, and personal liability for compensation.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "8",
  },
  {
    source: "Exam Secrets FULL PAPER Q54",
    question:
      "A small 50µA movement meter is to be used as a voltmeter reading 0-15V DC. The meter coil has a resistance of 80Ω. What value resistor should be used, and how should it be fitted?",
    image: "",
    options: [
      "15kΩ in series",
      "300kΩ in series",
      "15kΩ in parallel",
      "300kΩ in parallel",
    ],
    correct: 1,
    explanation:
      "As a voltmeter, it will need a series resistor to limit the current to 50µA when 15V is applied of value R = V / I.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "9",
  },
  {
    source: "Exam Secrets FULL PAPER Q55",
    question:
      "An RF voltmeter is calibrated to read RMS voltages and indicates the key down CW output from a transmitter is 145V into the feeder. What power does this represent?",
    image: "",
    options: ["210W", "300W", "420W", "590W"],
    correct: 2,
    explanation: "The power is 145V into 50Ω, so use P = V squared / R",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "9",
  },
  {
    source: "Exam Secrets FULL PAPER Q56",
    question:
      "The oscilloscope shown in the drawing has the time base set to 500µS/div and the Y amplifier to 10V/div. What is the frequency of the signal?",
    image: "images/secrets-full-paper-56.png",
    options: ["200Hz", "400Hz", "500Hz", "2kHz"],
    correct: 2,
    explanation:
      "Inspection of the drawing shows 4 divisions per wavelength so that's 4 x 500µS. Knowing the cycle time or period, the frequency is the inverse.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "9",
  },
  {
    source: "Exam Secrets FULL PAPER Q57",
    question:
      "A microphone amplifier is designed for an audio input of 4mV and an output of 0.6V. The input and output impedances are both 600Ω. The gain of the amplifier is:",
    image: "",
    options: ["11.8dB", "21.8dB", "43.5dB", "56.6dB"],
    correct: 2,
    explanation: "See page 153 for the worked answer and formula used.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "9",
  },
  {
    source: "Exam Secrets FULL PAPER Q58",
    question:
      "A tuned circuit comprises a capacitor of 100pF and an inductor of 200µH. The inductor has a temperature coefficient of +3ppm per degree C. What temperature coefficient is needed for the capacitor to keep the centre frequency as stable as possible?",
    image: "",
    options: ["+3ppm", "-3ppm", "+6ppm", "-6ppm"],
    correct: 1,
    explanation:
      "The need is to bring the overall coefficient as close to zero as possible. In this case, zero is achieved by choosing a capacitor with a -3ppm coefficient. The fact that the value of one is 100 units and the other 200 units is not relevant.",
    lookup: "See page(s) x of the Full Licence text book",
    syllabus: "9",
  },
]

export default EXAM_SECRETS_FULL_PAPER
