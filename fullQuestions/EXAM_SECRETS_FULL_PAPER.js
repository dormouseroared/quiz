const EXAM_SECRETS_FULL_PAPER = [
    {
        source: "Exam Secrets FULL PAPER Q01",
        question: "Which action is prohibited by the licence, unless carried out in support of a user service, disaster or international emergency?",
        image: "",
        options: [
            "sending messages in a code such as Morse Code, which is not widely understood",
            "using abbreviations which are not listed in the relevant examination syllabus",
            "using words where the meaning is known only to the intended recipient",
            "speaking in a foreign language not commonly spoken in the UK",
        ],
        correct: 2,
        explanation: "(6-19b) prohibits obscuring the meaning of messages unless for the purposes of (6-5) which is supporting user services or disasters. Morse and Q-codes are to enhance communication, and are fine, as is using any language both parties happen to share.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q02",
        question: "Why is it appropriate to take steps to control the transmitted bandwidth?",
        image: "",
        options: [
            "the transmission will occupy more spectrum than required for satisfactory communication and may contravene licence condition 6-2",
            "spread spectrum modes are not permitted by the amateur radio licence, unless a special research permit is obtained from Ofcom",
            "the signal will be unintelligible on most receivers",
            "the transmitted frequency will be unstable",
        ],
        correct: 0,
        explanation: "(6-2) requires us not to cause undue interference to any wireless telegraphy, including other amateurs. A transmission wider than that necessary for successful communication risks doing that and is, in any case, anti-social.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q03",
        question: "A remotely controlled transmitter is on 7.11MHz, and the control link is on 145.795MHz. The main transmitter is set to a power level of 80W ERP. The maximum permitted power limit for the link is:",
        image: "",
        options: [
            "10W",
            "40W ERP",
            "80W ERP",
            "1000W",
        ],
        correct: 3,
        explanation: "The only technical requirement for a link in an amateur bandd is that it must be above 30MHz, so the licence limit is 1kW at each end. Obviously, and to comply with (6-2) on undue interference, the link should be at the lowest power that allows reliable operation.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q04",
        question: "If you have your HAREC document with you, when in a country that has signed up to CEPT recommendation T/R 61-02, then you may:",
        image: "",
        options: [
            "operate in that country for longer than the normal 3 month limit",
            "apply for an amateur licence in that country as if you had passed their examination",
            "operate on bands that are in either that countries licence or your UK licence",
            "drop the normal requirement to prefix your UK callsign with the local prefix letters",
        ],
        correct: 1,
        explanation: "The Harmonised Amateur Radio Examination Certificate (HAREC) confirms you have passed the Full level examination, or its equivalent in signatory countries, and can obtain a licence from that country.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q05",
        question: "The UK is in ITU Region:",
        image: "",
        options: [
            "1",
            "2",
            "3",
            "4",
        ],
        correct: 0,
        explanation: "The UK and Europe are in Region 1.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q06",
        question: "What is the relevance of the transmit mode in assessing EMF (electromagnetic field) compliance?",
        image: "",
        options: [
            "it allows for the average transmit power for a given peak power",
            "it allows for the relative transmit and receive times over any 6 minute period",
            "it corrects for people being out of the main beam of the antenna",
            "it limits the instantaneous transmit power at the crest of the modulation envelope",
        ],
        correct: 0,
        explanation: "Not all modes transmit at full power while PTT is pressed. FM does. Unprocessed (uncompressed) SSB is rated at 20% and processed SSB at 50%. The RSGB online calculator has many modes built in for selection.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q07",
        question: "You are taking part in an NVIS net on 5.314MHz USB in support of an event. You must have:",
        image: "",
        options: [
            "a copy of the 5MHz schedule to refer to",
            "a telephone in your possession or nearby",
            "contact details of the nearest military unit",
            "permission from the nearest military unit",
        ],
        correct: 1,
        explanation: "The rules for identification are different on 5MHz, where we have Secondary allocation, with MOD having Primary access. Note G to Schedule 1 requires you to be contactable by telephone. This must be the number you gave to Ofcom when applying for your licence or confirming the details, including your phone number at the transmission location, remain correct.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q08",
        question: "It is decided to limit the lowest POWER from the loudspeaker to 1% of full volume. To achieve this, a resistor is inserted between the lower connection of the potentiometer and the 0V line to form a potential divider as shown in the diagram. The control itself is a 10kΩ potentiometer. The value of the resistor should be:",
        image: "images/secrets-full-paper-08.png",
        options: [
            "0.1kΩ",
            "1kΩ",
            "1.1kΩ",
            "10kΩ",
        ],
        correct: 2,
        explanation: "If the power deleivered to the loudspeaker is to be 1% of the maximum power, that is the full volume on the volume control, then the minimum will be 10% of the voltage (Power = Voltage squared/Resistance). That means the potential divider formed by the volume control and the new resistor must be 10:1. Remember that a 10kΩ and a 1kΩ resistor form an 11:1 divider (10 x 1)/(10 + 1) The 1kΩ resistor must be a bit bigger than 1kΩ for a 10:1 divider. Option C is the only one close. Vout / Vin = 0.1 = R / (10 + R), and R = 1.1kΩ. See the book for a better layout.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q09",
        question: "A 3µF and a 6µF capacitor are connected in series to a 12V supply. What is the voltage across each of the capacitors?",
        image: "",
        options: [
            "6V on each capacitor",
            "4V on 3µF and 8V on 6µF",
            "4V on 6µF and 8V on 3µF",
            "12V on each capacitor",
        ],
        correct: 2,
        explanation: "The quick solution is to realise that in series both capacitors will have the same charge, which is current x time. Q = V x C, so V = Q / C. The smaller capacitor will have the larger voltage. Calculating, 3µF and 6µF in series gives (3 x 6) / (3 + 6) = 2µF. At 12V the charge is Q = V x C = 24µC. The voltage on the 3µF capacitor  is V = Q / C = 24/3 = 8V, andd on the 6µF capacitor V = 24/6 = 4V.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q10",
        question: "The circuit diagram shows a transistor operating a relay, which consists of a coil on a soft iron former, so the magnetic attraction operates a contact to control some mains lighting. What is the purpose of the diode?",
        image: "images/secrets-full-paper-10.png",
        options: [
            "to prevent the relay operating if the low voltage supply is of the wrong polarity",
            "to avoid the back EMF from affecting the transistor when it turns on to operate the relay",
            "to avoid the back EMF from affecting the transistor when it turns off to release the relay",
            "to ensure the relay releases when the signal on the transistor base is removed",
        ],
        correct: 2,
        explanation: "If the current to the relay is stopped abruptly then the back EMF will cause a voltage spike considerably greater than the supply voltage, and quite possibly high enough to damage the transistor. The diode will provide somewhere for the current associated with the spike to pass harmlessly saving the transistor. It is not a problem at turn-on, the voltage may be applied suddenly, but the current can build up at such a rate as the coil inductance permits with only a modest EMF.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q11",
        question: "A 1kV high voltage power supply has a reservoir capacitor of 10µF. It is estimated that if the stored voltage falls to about 100V in 10 seconds then it will be safe to open the case. What value of bleed resistor should be fitted?",
        image: "",
        options: [
            "100kΩ",
            "200kΩ",
            "500kΩ",
            "1MΩ",
        ],
        correct: 2,
        explanation: "After one time constant has elapsed, the voltage will have fallen to about a third of the initial value, so after two time constants, the initial 1kV should be reasonably close to 100V. So, the time constant required is about 5 seconds. Given that Tau = C x R then R = Tau / C = 5 / 10µ = 500kΩ. Note: a more accurate calculation (which is outside the syllabus) shows the voltage is about 135V after 10 seconds, and about 11.5 seconds are needed to get down to 100V. The resistor should be sized to handle 1kV , 2mA current, and 2W power dissipation.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q12",
        question: "An 18.2µH coil and a resistor of 300Ω are connected in series. A current of 3mA at 3.5MHz is flowing through the circuit. What is the applied voltage?",
        image: "",
        options: [
            "0.9V",
            "0.96V",
            "1.5V",
            "2.1V",
        ],
        correct: 2,
        explanation: "XL = 2 x pi x f x L = 400Ω and total impedance is 500Ω (see the secrets book for more detail). At 3mA, the applied voltage is I x R = 1.5V. It is worth looking out for 3, 4, 5 triangles etc.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q13",
        question: "An SDR transmitter digitises the audio signal from the microphone at a rate of 7000 samples per second. A particularly loud whistle at 4kHz gets through the analogue audio filter, albeit reasonably well attenuated. What audio frequency will this cause at the distant receiver if all the other processes are performed as intended?",
        image: "",
        options: [
            "2kHz",
            "3kHz",
            "4kHz",
            "7kHz",
        ],
        correct: 1,
        explanation: "At 7000 samples per second the Nyquist frequency is 3.5kHz. A signal at 4kHz is 500Hz above the Nyquist frequency, so will be interpreted as a signal 500Hz below it, or 3kHz.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q14",
        question: "A transformer has 960 turns on the primary, and 64 turns on the secondary. The mains input is 240V rms. The load on the secondary is equivalent to a 2Ω resistor. What current is drawn from the mains, assuming no losses in the transformer?",
        image: "",
        options: [
            "0.5A",
            "1A",
            "6.4A",
            "8A",
        ],
        correct: 0,
        explanation: "The output from the transformer is 240 X 64 /960 = 16V. Into a 2Ω load the current is 8A and the power is I x V = 128W.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q15",
        question: "A 400W transmitter is feeding an Antenna Matching Unit where the first component is a parallel tuned circuit. On its own, the Q-factor of the tuned circuit is about 50, but when loaded, that is, connected to the antenna, the working Q drops to 5. What is a reasonable estimate for the circulating current in the tuned circuit?",
        image: "",
        options: [
            "5A",
            "8A",
            "14A",
            "40A",
        ],
        correct: 2,
        explanation: "At 400W, the input current into 50Ω is P = I squared x R so I =2.83A with a working Q of 5 that gives a circulating current of about 14A.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q16",
        question: "Calculate the component value of R1 in the circuit diagram to bring the collector voltage to 7.3V. The transistor has a VBE of 0.7V and β between 400 and 900.",
        image: "images/secrets-full-paper-16.png",
        options: [
            "38kΩ",
            "57kΩ",
            "90kΩ",
            "161kΩ",
        ],
        correct: 0,
        explanation: "With a collector voltage of 7.3V the collector current is about (12 - 7.3) / 4.7 = 1mA. The voltage across the emitter resistor will be about 1.8V, so the base will be at about 2.5V. The 2.5V across 10kΩ is a current of 250µA, and much the same current will be in R1, which should have 9.5V across it. That requires a resistance of R = 9.5 / 0.25 = 38kΩ. The base current will be a maximum of 2.5µA, which we can neglect in the standing current of 250µA.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "2i.3"
    },
    {
        source: "Exam Secrets FULL PAPER Q17",
        question: "What configuration is the transistor amplifier in the circuit diagram?",
        image: "images/secrets-full-paper-17.png",
        options: [
            "emitter follower",
            "common emitter",
            "common base",
            "common collector",
        ],
        correct: 2,
        explanation: "The input is on the emitter, and the base is held at 0V AC by a capacitor to the 0V line. That is a common base configuration.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q18",
        question: "At what frequency is the transformer in the block diagram likely to operate?",
        image: "images/secrets-full-paper-18.png",
        options: [
            "50Hz",
            "100Hz",
            "30 - 80kHz",
            "3.5 - 3.8MHz",
        ],
        correct: 2,
        explanation: "The block diagram is of a switched mode power supply. The transformer operating frequency will be above human (and hopefully dogs) hearing range, up to about 80 - 100kHz.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q19",
        question: "A modulator produces an SSB output from 8.900MHz to 8.903MHz. This is mixed with a VFO at 5.250MHz to give outputs in the 20m and 80m amateur bands. What are the actual frequencies?",
        image: "",
        options: [
            "3.650-3.653MHz and 14.150-14.153MHz",
            "3.650-3.647MHz and 14.150-14.153MHz",
            "3.650-3.653MHz and 14.150-14.147MHz",
            "3.650-3.647MHz and 14.150-14.147MHz",
        ],
        correct: 0,
        explanation: "The sum outputs are 14.150-14.153MHz and the difference outputs are 3.650-3.653MHz.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q20",
        question: "To safely operate on 29.696MHz with audio 300Hz to 3kHz, the allowable drift in the master oscillator must be better than:",
        image: "",
        options: [
            "3.4ppm",
            "10ppm",
            "34ppm",
            "100ppm",
        ],
        correct: 2,
        explanation: "The occupied bandwidth is 29.696 to 29.699MHz. The top of the band (see the schedule) is 29.700MHz, so just 1kHz to spare. 1kHz in 29700kHz is 1000000 / 29700 = 34 parts per million (ppm).",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
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
        explanation: "The blank box is the sine wave lookup table, giving the amplitude of a sone wave at enough points through the cycle to seed the digital to analogue converter to produce an analogue output of sufficient purity.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
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
        explanation: "The circuit is a balanced modulator. The output is the upper and lower sidebands representing the audio signal on the RF carrier. The carrier itself and the audio signal are balanced out.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q23",
        question: "A single tone test using the CW mode at 14.300MHz is driving the PA into non-linearity. As well as the signal on 14.300MHz, there is likely to be a signal on:",
        image: "",
        options: [
            "14.3007MHz",
            "28.300MHz",
            "42.900MHz",
            "57.100MHz",
        ],
        correct: 2,
        explanation: "Non-linearity will produce harmonics. Only 42.900MHz is a harmonic. 14.3007MHz is a 700Hz offset, relevant for a BFO, but not what was asked.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q24",
        question: "What component part of a transmitter would have an output called 'out of lock'?",
        image: "",
        options: [
            "automatic level control",
            "frequency synthesiser",
            "full break-in keying",
            "standing wave detection circuit",
        ],
        correct: 1,
        explanation: "Specifically, it would be a phase lock loop frequency synthesiser. The direct digital synthesis type does not have an out-of-lock condition. The out-of-lock output must inhibit transmission because under those circumstances, the transmitted frequency is uncontrolled.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q25",
        question: "Why will an overly strong signal within the RF front end passband, but outside the subsequent IF bandwidth, limit the receiver's ability to detect weak signals, otherwise perfectly readable?",
        image: "",
        options: [
            "the strong signal will cause the AGC to reduce the gain below that needed to bring weak signals up to a usable level",
            "non-linearity will result in intermodulation products. some of which will be close to, and on top of the wanted weak signals",
            "the dynamic range of the receiver is degraded by strong signals, and this loss of range is always at the low signal end",
            "the wanted weak signals will mix with stronger signals, resulting in them appearing at the sum and difference frequencies",
        ],
        correct: 1,
        explanation: "An overly strong signal will drive the RF fron end circuits into non-linearity, resulting in lots of intermodulation products, which will be alongside and on top of the wanted signal, which then appears to be lost in the noise. The other options deserve a comment. The AGC control signal is developed at the output from the IF, so a signal outside the IF bandwidth should have little or no effect. The dynamic range of a receiver is set by the gains and internal noise  of the receiver, not external signals. The mixing effect may be true, but the effect stated does not answer the question asked.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q26",
        question: "A superhet receiver is tuned to 1.82MHz and has an IF of 460kHz. The image frequency of the receiver might be:",
        image: "",
        options: [
            "0.90MHz",
            "0.92MHz",
            "1.36MHz",
            "2.28MHz",
        ],
        correct: 0,
        explanation: "There are two possible image frequencies. 2 x IF = 920kHz, and 1820kHz plus and minus 920kHz gives 900kHz and 2740kHz.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
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
        explanation: "The limiting factor on sensitivity is noise. Having sifficient gain is easy, but low internal noise is harder and expensive. At HF, the natural noise is high, higher than the internal noise of ordinary circuits. The opposite is true at VHF, and much more so at UHF and above. Ideally the preamp will be at the antenna end of the feeder, so feeder losses don't affect the achievable sensitivity. Higher gain antennas also improve the sensitivity, and the option of preamp, straight through or attenuator will allow the greatest range of signal levels to be handled, albeit not simultaneously.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
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
        explanation: "The device is a ratio detector, for demodulating FM signals. It relies on phase changes around resonance in a tuned circuit. The phase changes are much more marked than amplitude changes, making the device sensitive to even very narrow frequency deviations.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q29",
        question: "The phasor diagram shows a phasor representation of a modulated carrier. What type of modulation is depicted?",
        image: "images/secrets-full-paper-29",
        options: [
            "amplitude modulation",
            "frequency modulation",
            "single sideband modulation",
            "binary phase shift keying",
        ],
        correct: 1,
        explanation: "This is too long to type in. See page 152 of the secrets manual.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q30",
        question: "Which one of the functions below is NOT common to both transmit and receive?",
        image: "",
        options: [
            "local oscillator",
            "Automatic Gain Control",
            "mixer",
            "IF filter",
        ],
        correct: 1,
        explanation: "The local oscillator is often used to mix up in the transmitter and mix down to the RF in the receiver. That aslo covers the mixer for transmitting and receiving. The IF filter stages can follow the moddulator to remove the other modulation products on transmit. The AGC is only used in the IF to maintain a constant level signal into the detector.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q31",
        question: "A two way splitter for a couple of stacked 2m antennas requires two lengths oif solid polythen coax lambda / 4 long. These should be cut to:",
        image: "",
        options: [
            "104cm",
            "52cm",
            "35cm",
            "26cm",
        ],
        correct: 2,
        explanation: "Don't understand why a quarter of 2m is 51.7cm, so see this answer on secrets page 152.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q32",
        question: "A quarter wave ground-plane antenna, mounted with the radiating element vertical has a feed impedance of approximately:",
        image: "",
        options: [
            "25Ω",
            "37Ω",
            "50Ω",
            "75Ω",
        ],
        correct: 1,
        explanation: "The lambda / 4 ground plane is effectively half a dipole., the other half being the reflection in the ground plane. Feed impedance of a dipole in free space is 73Ω, so a lambda / 4 ground plane is 73 / 2 = 37Ω.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q33",
        question: "The feeder of an existing installation is replaced with one having a lower loss. On checking the installation from in the shack, it should be observed that the SWR:",
        image: "",
        options: [
            "and return loss have increased",
            "has increased, and the return loss reduced",
            "has reduced, and the return loss increased",
            "and return loss have reduced",
        ],
        correct: 1,
        explanation: "The only change is the feeder loss. The reflection at the antenna, whatever proportion that was, hasn't changed. Neither has the power from the transmitter. If the feeder loss is lower, then a bit more signal will reach the antenna, and a bit more signal will reach the transmitter on the return path. This means the Standing Wave Ratio (SWR) will be greater. Goodbye to the two options where SWR is reduced.The return loss is the ratio between the forward and reflected signals. If more reflected signal arrives back at the transmitter then the ratio between them will be lower.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q34",
        question: "An amateur inadvertently uses a short lead lambda / 4 long intended for use on an oscilloscope, where the characteristic impedance used is 75Ω. The lead is connected to a 50Ω dummy load. The impedance at the free end will be:",
        image: "",
        options: [
            "37Ω",
            "50Ω",
            "75Ω",
            "112Ω",
        ],
        correct: 3,
        explanation: "See the Secrets book for the formula and where to find it on EX309.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
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
        explanation: "Satellite communication often uses circular polarisation, mainly because the orientation of the satellite can change, either as a feature of its orbit, or as the viewing angle changes from different points on the earth's surface",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q36",
        question: "Which of these parameters about the ionosphere will have the lowest frequency?",
        image: "",
        options: [
            "MUF on a long path",
            "MUF on a short path",
            "critical frequency",
            "NVIS frequency",
        ],
        correct: 2,
        explanation: "The Critical Frequency is the highest frequency that will be refracted back to the Earth on vertical incidence. As the distance between transmitter and receiver gets greater, the angle through which the wave must be refracted reduces, so the highest frequency, the MUF, increases. The Critical Freqyency is the lowest of those. The NVIS frequency is not really a recognised term, but is a description of the MUF on a very short path.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q37",
        question: "What propagation mechanism is responsible for auroral propagation?",
        image: "",
        options: [
            "the effect is caused by intense solar illumination near the equator, causing ionisation in denser parts of the atmosphere, supporting longer distance VHF propagation",
            "charged solar particles are ddirected towards the poles by the earth's ,agnetic fields, causing curtains of ionised gases, which can refelct radio waves",
            "interaction between the sun's and earth's magnetospheres causes molecules in the upper atmosphere to become polarised, which may reflect radio waves",
            "the intense cold in the polar refions of the upper atmosphere dramatically slows the normal night time deionisation, so it can remain reflective at night",
        ],
        correct: 1,
        explanation: "The Aurora is primarily caused by charged solar particles being swept towards the poles by the earth's magnetic field. The resulting ionisation can be quite intense, and reflect radio waves.",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q38",
        question: "",
        image: "",
        options: [
            "",
            "",
            "",
            "",
        ],
        correct: 9,
        explanation: "",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q00",
        question: "",
        image: "",
        options: [
            "",
            "",
            "",
            "",
        ],
        correct: 9,
        explanation: "",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q00",
        question: "",
        image: "",
        options: [
            "",
            "",
            "",
            "",
        ],
        correct: 9,
        explanation: "",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q00",
        question: "",
        image: "",
        options: [
            "",
            "",
            "",
            "",
        ],
        correct: 9,
        explanation: "",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q00",
        question: "",
        image: "",
        options: [
            "",
            "",
            "",
            "",
        ],
        correct: 9,
        explanation: "",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
    {
        source: "Exam Secrets FULL PAPER Q00",
        question: "",
        image: "",
        options: [
            "",
            "",
            "",
            "",
        ],
        correct: 9,
        explanation: "",
        lookup: "See page(s) x of the Full Licence text book",
        syllabus: "0"
    },
]

export default EXAM_SECRETS_FULL_PAPER