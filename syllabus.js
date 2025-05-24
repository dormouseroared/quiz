const syllabusItems = [
    {
        key: "0",
        level: "dummy",
        title: "for anything not having a syllabus code",
        text: "This is probably EX308 or similar."
    },
    {
        key: "1a.1",
        level: "foundation",
        title: "Nature of amateur radio, types of licence and call signs",
        text: "Recall that the amateur licence is for self-training in radio communications and is of a non-commercial nature. Business use and commercial advertising is not permitted."
    },
    {
        key: "1a.1",
        level: "foundation",
        title: "Nature of amateur radio, types of licence and call signs",
        text: "Recall that the amateur licence permits operation in and over the United Kingdom, the Channel Islands and the Isle of Man in each case including their territorial seas."
    },
    {
        key: "1a.1",
        level: "foundation",
        title: "Nature of amateur radio, types of licence and call signs",
        text: "Recall that the amateur licence also authorises operation aboard ships or aircraft registered in the United Kingdom, the Channel Islands or the Isle of Man in international water or airspace."
    },
    {
        key: "1a.1",
        level: "foundation",
        title: "Nature of amateur radio, types of licence and call signs",
        text: "Recall that the licence does not permit use in other countries or their territorial waters or airspace. Notes: In practice a very low percentage of ships/ aircraft are so registered and thus quite limited to the wider international arrangements for Full Licensees. Airborne use has limited power and is primary allocations only. Note. Refer to 1F1 for CEPT / International arrangements."
    },
    {
        key: "1a.2",
        level: "foundation",
        title: "Nature of amateur radio, types of licence and call signs",
        text: "Recall the various types of UK Amateur Licence. Recall that Regional Secondary Locators (RSLs), although optional, are defined in the licence and frequently used by amateurs to identify the location of their transmitting station. Recall the RSLs that may be used by individual amateurs: D, E, I, J, M, U, W. Recall that the use of an RSL is mandatory for all 2x series callsigns.Recall that where an RSL is used, it must be used correctly. Understand that suffixes may be used (but must not be offensive or obscure correct identification). Recall that suffixes can optionally be used to indicate type of operation. Recall the restrictions applicable to Foundation Licensees in operation from a ship or aircraft. Note: The optional club secondary locators are not examined."
    },
    {
        key: "1a.2",
        level: "intermediate",
        title: "Nature of amateur radio, types of licence and call signs",
        text: "Recall the restrictions applicable to Intermediate licensees in operation from a ship or aircraft."
    },
    {
        key: "1a.3",
        level: "foundation",
        title: "Nature of amateur radio, types of licence and call signs",
        text: "Recall that the Licensee must give immediate notice to Ofcom of any change to the Licensee’s name and address quoted on the licence."
    },
    {
        key: "1a.3",
        level: "foundation",
        title: "Nature of amateur radio, types of licence and call signs",
        text: "Recall that the Licensee must confirm that the details shown on the licence remain valid at least once every five years."
    },
    {
        key: "1a.3",
        level: "foundation",
        title: "Nature of amateur radio, types of licence and call signs",
        text: "Recall that the licence can be revoked by Ofcom for breaches of licence conditions."
    },
    {
        key: "1a.4",
        level: "foundation",
        title: "Nature of amateur radio, types of licence and call signs",
        text: "Recall the requirements for station identification. Note: For the purposes of the examination this includes identifying when there is a change of: frequency, mode, including change of digital protocols, FM(Frequency Modulation),AM(Amplitude Modulation), SSB(Single Sideband), CW(Carrier Wave - Morse Code), DATA(e.g.PSK, RTTY, WSPR, FT8), Supervisor, Regional Secondary Locator, if used"
    },
    {
        key: "1b.1",
        level: "foundation",
        title: "Operation and supervision",
        text: "Recall that only the licensee, or any other person operating under the licensee’s direct supervision, may use the Radio Equipment."
    },
    {
        key: "1b.1",
        level: "foundation",
        title: "Operation and supervision",
        text: "Recall that the call sign of the supervisor is used to identify the station and operation is in accordance with the supervisor’s licence."
    },
    {
        key: "1b.1",
        level: "foundation",
        title: "Operation and supervision",
        text: "Recall that in certain circumstances the licensee may allow the equipment to be used by a member of a User Service. Notes: The term ‘Radio Equipment’ (in initial capitals) is a defined licence term meaning the equipment used and identified by the operator’s call sign.If a visiting amateur uses the radio equipment with their own call sign, it is then deemed to be their Radio Equipment.The nature of the circumstances and identity of the User Service are not examinable."
    },
    {
        key: "1b.1",
        level: "intermediate",
        title: "Operation and supervision",
        text: "Understand the meaning of direct supervision, duties of the supervisor and need for the operator to comply with the licence."
    },
    {
        key: "1c.1",
        level: "foundation",
        title: "Messages",
        text: "Recall the requirements to send messages only to other amateur radio stations and only using UK Amateur frequencies."
    },
    {
        key: "1c.1",
        level: "foundation",
        title: "Messages",
        text: "Recall that a 'Net' or 'Network' refers to transmissions to three or more Amateurs with whom communication and identification has been established."
    },
    {
        key: "1c.1",
        level: "foundation",
        title: "Messages",
        text: "Recall that transmitting for general reception, that is to anybody who may be listening, is not permitted other than for CQ calls."
    },
    {
        key: "1c.1",
        level: "intermediate",
        title: "Messages",
        text: "Recall that in an international disaster messages may be passed, internationally, on behalf of non-licensed persons."
    },
    {
        key: "1c.1",
        level: "full",
        title: "Messages",
        text: "Understand the requirements relating to the content of messages and who messages may be sent to."
    },
    {
        key: "1c.1",
        level: "full",
        title: "Messages",
        text: "Understand the circumstances when messages, including encrypted content, may be sent."
    },
    {
        key: "1c.1",
        level: "full",
        title: "Messages",
        text: "Understand the distinction between the use of codes and abbreviations and encryption."
    },
    {
        key: "1c.1",
        level: "full",
        title: "Messages",
        text: "Understand that people of all ages and backgrounds participate in amateur radio and that messages must not cause offence,particularly in the context of relevant legislation including the Wireless Telegraphy(Content of Transmission) Regulations 1988 and the Communications Act(2003)."
    },
    {
        key: "1c.2",
        level: "foundation",
        title: "Messages",
        text: "Recall that encryption is not permitted except at the direct request of a User Service or for control of amateur satellites. Note: Morse code is not a secret code and that it is only secret codes which obscure the meaning of the Message that are prohibited."
    },
    {
        key: "1c.2",
        level: "intermediate",
        title: "Messages",
        text: "Recall that the licensee may pass messages on behalf of a User Service and may permit them to use the Radio Equipment to send messages."
    },
    {
        key: "1d.1",
        level: "foundation",
        title: "Apparatus, inspection and closedown",
        text: "Recall the Licensee must ensure that the station is not causing Undue Interference to other radio users."
    },
    {
        key: "1d.1",
        level: "foundation",
        title: "Apparatus, inspection and closedown",
        text: "Recall that a person authorised by Ofcom has the right to any or all the following: Inspection of, require the modification of, require the closedown of, restrict the operation of, the Radio Equipment."
    },
    {
        key: "1d.1",
        level: "intermediate",
        title: "Apparatus, inspection and closedown",
        text: "Recall that transmissions from the station must not cause undue interference to other radio users."
    },
    {
        key: "1d.1",
        level: "intermediate",
        title: "Apparatus, inspection and closedown",
        text: "Recall that the Licensee must reduce any emissions causing interference, to the satisfaction of a person authorised by Ofcom."
    },
    {
        key: "1d.1",
        level: "intermediate",
        title: "Apparatus, inspection and closedown",
        text: "Understand that this may include a reduction in transmit power or any other action required to reduce emissions to an acceptable level."
    },
    {
        key: "1d.1",
        level: "full",
        title: "Apparatus, inspection and closedown",
        text: "Understand the requirements for clean and stable transmitters and the need to control transmitted bandwidth."
    },
    {
        key: "1d.1",
        level: "full",
        title: "Apparatus, inspection and closedown",
        text: "Understand the need to avoid Undue Interference to other wireless telegraphy"
    },
    {
        key: "1d.1",
        level: "full",
        title: "Apparatus, inspection and closedown",
        text: "Understand the need to have equipment for the reception of messages on all frequencies and modes in use for transmissions."
    },
    {
        key: "1d.1",
        level: "full",
        title: "Apparatus, inspection and closedown",
        text: "Understand the role of Ofcom in cases of Undue Interference."
    },
    {
        key: "1d.2",
        level: "foundation",
        title: "Apparatus, inspection and closedown",
        text: "Recall that a person authorised by Ofcom may require the Licence holder to keep a log (aka a record) of all transmissions made over a specified period of time."
    },
    {
        key: "1d.2",
        level: "intermediate",
        title: "Apparatus, inspection and closedown",
        text: "Recall the occasions for mandatory log keeping."
    },
    {
        key: "1d.2",
        level: "intermediate",
        title: "Apparatus, inspection and closedown",
        text: "Understand circumstances in which modification or cessation of operating of the station may be required."
    },
    {
        key: "1d.2",
        level: "intermediate",
        title: "Apparatus, inspection and closedown",
        text: "Understand circumstances in which modification of transmitting equipment may be required."
    },
    {
        key: "1e.1",
        level: "intermediate",
        title: "unattended and remote control operation",
        text: "Recall that the licensee may use any communication link for the purposes of Remote Control of their station and must ensure that: (1) any links used for the Remote Control of the Radio Equipment must be adequately secure so as to ensure that no other person is able to control the Radio Equipment; (2) Remote Control links using Amateur Radio frequencies must use frequency bands above 30 MHz and must not be encrypted; (3) transmissions from the Radio Equipment can be terminated promptly; and (4) the Licence Number must be displayed on or next to any unattended Radio Equipment located other than at the address shown in the licence."
    },
    {
        key: "1g.1",
        level: "foundation",
        title: "Electromagnetic fields",
        text: "Recall the (1) purpose of basic EMF restrictions (2) equipment to which the EMF restrictions apply (3) transmit power level at which the EMF restrictions apply (4) persons to which the EMF restrictions apply (5) need to keep a record of assessments carried out. Note: See also 8D1. The record includes a justification of why no further action is required if that is the case (e.g. power levels are below the threshold)"
    },
    {
        key: "1g.1",
        level: "intermediate",
        title: "Electromagnetic fields",
        text: "Recall (1) the average and peak transmit power level at which the EMF restrictions apply; (2) when there is a need to reassess EMFcompliance."
    },
    {
        key: "1g.1",
        level: "full",
        title: "Electromagnetic fields",
        text: "Understand relevant information in the licence: (1) Origin of the EMF restrictions(ICNIRP) (2) Meaning of the term ‘general public’;(3) Areas in which the general public need to be protected from EMF in breach of the limits (4) Records of EMF assessment (5) Procedure for carrying out an EMF assessment (6) Emergency situations."
    },
    {
        key: "1h.1",
        level: "foundation",
        title: "Licence Schedule",
        text: "Identify relevant information in Schedule 1 to the Foundation licence."
    },
    {
        key: "1h.1",
        level: "foundation",
        title: "Licence Schedule",
        text: "Recall the difference between Primary and Secondary status and that other services may also be present with such status in some allocations. A copy of the relevant part of Schedule 1 will be available during the examination."
    },
    {
        key: "1h.1",
        level: "intermediate",
        title: "Licence Schedule",
        text: "Identify relevant information in Schedule 1 to the Intermediate licence. A copy of the relevant part of Schedule 1 will be available during the examination."
    },
    {
        key: "1h.1",
        level: "full",
        title: "Licence Schedule",
        text: "Identify relevant information in Schedule 1 and Notice of coordination to the Full licence. A copy of the relevant part of Schedule 1 and the Notice of coordination will be available during the examination."
    },
    {
        note: "start here to insert foundation and full page 17 of syllabus 1.6b",
        key: "2a.1",
        level: "intermediate",
        title: "Fundamental theory",
        text: "Recall that components have tolerances, and that the measured value of a component may not precisely agree with its marked value."
    },
    {
        key: "2c.1",
        level: "intermediate",
        title: "Resistors",
        text: "Understand circuits comprising series and parallel connections of resistors and cells."
    },
    {
        key: "2c.1",
        level: "intermediate",
        title: "Resistors",
        text: "Calculate the value of any one of the three quantities(V, I or R) given the other two."
    },
    {
        key: "2c.1",
        level: "intermediate",
        title: "Resistors",
        text: "Calculate the combined resistance of two or three resistors in series and/ or parallel. Resistors of different values may be used in series or parallel or combined series parallel circuits. The prefixes milli and kilo may be involved for some of these calculations."
    },
    {
        key: "2c.2",
        level: "intermediate",
        title: "Resistors",
        text: "Understand that two or three resistors can be arranged to act as a potential divider and apply the formula. The prefixes milli and kilo may be involved for some of these calculations."
    },
    {
        key: "2c.3",
        level: "intermediate",
        title: "Resistors",
        text: "Understand the difference between potential difference(PD) and electromotive force(EMF)."
    },
    {
        key: "2c.2",
        level: "intermediate",
        title: "Resistors",
        text: "Understand the concept of source resistance (impedance) and voltage drop due to current flow."
    },
    {
        key: "2d.1",
        level: "intermediate",
        title: "Reactive components",
        text: "Recall that a capacitor normally consists of two metal plates separated by an insulating material and that its capacitance is measured in Farads."
    },
    {
        key: "2d.1",
        level: "intermediate",
        title: "Reactive components",
        text: "Understand that a capacitor can store an electric charge, and that its ability to store a charge (capacitance) depends upon the area of the plates, their separation and the nature of the material between the plates (the dielectric)."
    },
    {
        key: "2d.2",
        level: "intermediate",
        title: "Reactive components",
        text: "Understand and apply the formulae for calculating the combined values of two or three capacitors in series and in parallel."
    },
    {
        key: "2d.3",
        level: "intermediate",
        title: "Reactive components",
        text: "Recall that some capacitors e.g. electrolytic are polarised and must be correctly connected to avoid injury, damage or destruction."
    },
    {
        key: "2d.4",
        level: "intermediate",
        title: "Reactive components",
        text: "Understand the relative movement of a conductor in a magnetic field will induce a voltage across the ends of the conductor."
    },
    {
        key: "2d.4",
        level: "intermediate",
        title: "Reactive components",
        text: "Recall that a current passing through a wire forms a magnetic field around the wire."
    },
    {
        key: "2d.4",
        level: "intermediate",
        title: "Reactive components",
        text: "Recall that an inductor is normally a coil formed of a number of turns of wire to concentrate the magnetic field and that inductance is measured in Henries."
    },
    {
        key: "2d.4",
        level: "intermediate",
        title: "Reactive components",
        text: "Recall that an inductor is able to store energy in its magnetic field."
    },
    {
        key: "2d.4",
        level: "intermediate",
        title: "Reactive components",
        text: "Recall that the ability to store energy is known as inductance, which depends upon the number of turns of wire on the coil and its dimensions."
    },
    {
        key: "2d.5",
        level: "intermediate",
        title: "Reactive components",
        text: "Understand and apply the formulae for calculating the combined values of two or three inductors in series and in parallel."
    },
    {
        key: "2d.6",
        level: "intermediate",
        title: "Reactive components",
        text: "Recall that the inductance of a coil increases with increasing number of turns, increasing coil diameter and decreasing spacing between turns."
    },
    {
        key: "2d.6",
        level: "intermediate",
        title: "Reactive components",
        text: "Understand the use of high permeability cores and slug tuning."
    },
    {
        key: "2e.1",
        level: "intermediate",
        title: "AC theory",
        text: "Understand that by repeatedly charging and discharging in alternate directions, a capacitor can pass alternating currents but cannot pass a direct current."
    },
    {
        key: "2e.2",
        level: "intermediate",
        title: "AC theory",
        text: "Understand the sinusoidal curve as a graphical representation of the rise and fall of an alternating current or voltage over time and that both the frequency and the amplitude must be specified."
    },
    {
        key: "2e.2",
        level: "intermediate",
        title: "AC theory",
        text: "Recognise the graphical representation of a square wave."
    },
    {
        key: "2e.2",
        level: "intermediate",
        title: "AC theory",
        text: "Recall that the time in seconds for one cycle is the Periodic Time(T) and the formula T=1 / f and f= 1 / T where f = frequency in Hertz."
    },
    {
        key: "2e.2",
        level: "intermediate",
        title: "AC theory",
        text: "Recall the concept of phase difference between two signals, and that it can be expressed in degrees."
    },
    {
        key: "2e.3",
        level: "intermediate",
        title: "AC theory",
        text: "Recall that the potential difference across and current through a resistor are in phase."
    },
    {
        key: "2e.3",
        level: "intermediate",
        title: "AC theory",
        text: "Recall that the power dissipated in a resistive circuit varies over the cycle."
    },
    {
        key: "2e.3",
        level: "intermediate",
        title: "AC theory",
        text: "Recall that the RMS current or voltage in an AC circuit is equal to the current or voltage of a DC supply that would result in the same power dissipation."
    },
    {
        key: "2e.3",
        level: "intermediate",
        title: "AC theory",
        text: "Recall that the RMS value of a sinusoidal waveform, Vrms = 0.707 × Vp(peak Voltage) Perform relevant calculations. "
    },
    {
        key: "2e.3",
        level: "intermediate",
        title: "AC theory",
        text: "Recall that the term ‘Reactance’ describes the opposition to current flow in a purely inductive or capacitive circuit where the phase difference between V and I is 90°."
    },
    {
        key: "2e.4",
        level: "intermediate",
        title: "AC theory",
        text: "Recall that the ratio of the RMS potential difference to the RMS current as the capacitor stores energy in its electric field is called the reactance of the capacitor and is measured in ohms."
    },
    {
        key: "2e.4",
        level: "intermediate",
        title: "AC theory",
        text: "Understand that the reactance of a capacitor depends on the frequency of the alternating current and that the reactance falls as the frequency rises."
    },
    {
        key: "2e.4",
        level: "intermediate",
        title: "AC theory",
        text: "Identify the graph of reactance against frequency for the capacitor."
    },
    {
        key: "2e.5",
        level: "intermediate",
        title: "AC theory",
        text: "Recall that an inductor will take time to store or release energy in its magnetic field."
    },
    {
        key: "2e.5",
        level: "intermediate",
        title: "AC theory",
        text: "Recall that the ratio of the RMS potential difference to the RMS current as the inductor stores energy in its magnetic field is called the reactance of the inductor and is measured in ohms."
    },
    {
        key: "2e.5",
        level: "intermediate",
        title: "AC theory",
        text: "Understand that the reactance of an inductor depends on the frequency of the alternating current and that the reactance rises as the frequency rises."
    },
    {
        key: "2e.5",
        level: "intermediate",
        title: "AC theory",
        text: "Identify the graph of reactance against frequency for the inductor."
    },
    {
        key: "2e.6",
        level: "intermediate",
        title: "AC theory",
        text: "Recall that in a circuit comprising resistors and capacitors or inductors(or both) a current will result in energy transfer into heat in the resistors and energy storage and release in the capacitors or inductors."
    },
    {
        key: "2e.6",
        level: "intermediate",
        title: "AC theory",
        text: "Recall that in such a circuit the ratio of the overall potential difference to current is termed ‘impedance’ and that this name denotes an opposition to both energy transfer and energystorage in the circuit."
    },
    {
        key: "2e.6",
        level: "intermediate",
        title: "AC theory",
        text: "Recall impedance is measured in ohms."
    },
    {
        key: "2e.7",
        level: "intermediate",
        title: "AC theory",
        text: "Recall and manipulate the formula v = f × λ. Calculate frequency or wavelength given the other parameter. The velocity of radio waves will be given in the Reference Booklet."
    },
    {
        key: "2e.8",
        level: "intermediate",
        title: "AC theory",
        text: "Understand that where a conductor is carrying an RF signal which has a wavelength comparable to the length of the conductor that the magnitude and direction of the current and voltage at any point in time will vary in a sinusoidal manner along the length of the conductor."
    },
    {
        key: "2f.1",
        level: "intermediate",
        title: "Digital signals",
        text: "Recall that digital signals with more bits and/or increased sampling rate enables a more accurate representation of the analogue signal."
    },
    {
        key: "2f.1",
        level: "intermediate",
        title: "Digital signals",
        text: "Recall that the error introduced by sampling the analogue signal to produce the digital signal is a form of distortion."
    },
    {
        key: "2f.1",
        level: "intermediate",
        title: "Digital signals",
        text: "Recall that the minimum sampling rate needs to be greater than twice the frequency of the analogue signal to adequately capture the detail of the analogue signal being sampled."
    },
    {
        key: "2f.1",
        level: "intermediate",
        title: "Digital signals",
        text: "Recall that the minimum sampling rate is known as the Nyquist rate."
    },
    {
        key: "2g.1",
        level: "intermediate",
        title: "Transformers",
        text: "Understand that a simple transformer consists of two coils of wire sharing the same magnetic field."
    },
    {
        key: "2g.1",
        level: "intermediate",
        title: "Transformers",
        text: "Recall that it may have an iron core to concentrate the field."
    },
    {
        key: "2g.1",
        level: "intermediate",
        title: "Transformers",
        text: "Understand that at higher frequencies (e.g. RF and IF) a ferrite core, rather than an iron core, is used for improved efficiency."
    },
    {
        key: "2g.1",
        level: "intermediate",
        title: "Transformers",
        text: "Understand that energy is transferred from one coil to the other by changes in the field when alternating current is used, and that this does not happen with constant direct current."
    },
    {
        key: "2g.1",
        level: "intermediate",
        title: "Transformers",
        text: "Understand that an alternating potential difference (such as the mains) can be stepped down using fewer turns of wire on the secondary coil than the primary and can be stepped up using more turns on the secondary than on the primary"
    },
    {
        key: "2g.1",
        level: "intermediate",
        title: "Transformers",
        text: "Understand that the output from a transformer will always be an alternating current. Note that knowledge of the impedance change is not required."
    },
    {
        key: "2h.1",
        level: "intermediate",
        title: "Tuned circuits and resonance",
        text: "Recall that a series or parallel circuit of a capacitor and inductor together forms a tuned circuit."
    },
    {
        key: "2h.1",
        level: "intermediate",
        title: "Tuned circuits and resonance",
        text: "Recall, using graphical methods, that at resonance the reactance of the capacitance will equal the reactance of the inductance, XC = XL."
    },
    {
        key: "2h.2",
        level: "intermediate",
        title: "Tuned circuits and resonance",
        text: "Recall that, at their resonant frequencies, series tuned circuits present a low impedance, whereas parallel tuned circuits present a high impedance."
    },
    {
        key: "2h.2",
        level: "intermediate",
        title: "Tuned circuits and resonance",
        text: "Identify the response curves of impedance vs frequency for series and parallel resonant circuits."
    },
    {
        key: "2h.3",
        level: "intermediate",
        title: "Tuned circuits and resonance",
        text: "Recall that the energy stored in the capacitor and inductor in a tuned circuit can transfer from one to the other at a particular frequency, known as the resonant frequency."
    },
    {
        key: "2h.3",
        level: "intermediate",
        title: "Tuned circuits and resonance",
        text: "Recall how the resonant frequency depends on the value of capacitance and inductance. Note that candidates must know that increasing L or C reduces the resonant frequency and vice- versa. Knowledge of the resonant frequency formula is not required."
    },
    {
        key: "2h.4",
        level: "intermediate",
        title: "Tuned circuits and resonance",
        text: "Recall that selectivity of a tuned circuit is the ratio of the bandwidth of the circuit (that is the range of frequencies the circuit will accept) to the resonant frequency."
    },
    {
        key: "2h.4",
        level: "intermediate",
        title: "Tuned circuits and resonance",
        text: "Recall that the Q factor (Q-factor or Quality Factor) of a tuned circuit is an indication of the selectivity of the tuned circuit."
    },
    {
        key: "2h.5",
        level: "intermediate",
        title: "Tuned circuits and resonance",
        text: "Identify the circuits of simple low pass, high pass, band pass and band stop (notch) filters and their response curves."
    },
    {
        key: "2i.1",
        level: "intermediate",
        title: "Semiconductor devices",
        text: "Recall that a diode will conduct current in one direction only."
    },
    {
        key: "2i.1",
        level: "intermediate",
        title: "Semiconductor devices",
        text: "Recall that a diode junction has a depletion layer and that a voltage must be applied to overcome this and allow current to flow(forward bias)."
    },
    {
        key: "2i.1",
        level: "intermediate",
        title: "Semiconductor devices",
        text: "Understand the use of a diode to produce direct current from an alternating current is known as rectification."
    },
    {
        key: "2i.2",
        level: "intermediate",
        title: "Semiconductor devices",
        text: ""
    },
    {
        key: "2i.1",
        level: "intermediate",
        title: "Semiconductor devices",
        text: "Recall that a variable capacitance diode behaves like a capacitor when reverse biased and that the capacitance of a reverse biased diode depends on the magnitude of the reverse bias."
    },
    {
        key: "2i.3",
        level: "intermediate",
        title: "Semiconductor devices",
        text: "Understand that a bipolar junction transistor is a three terminal device(emitter, base, collector) in which a small base current will control a larger collector current and this enables the transistor to be used as an amplifier."
    },
    {
        key: "2i.3",
        level: "intermediate",
        title: "Semiconductor devices",
        text: "Understand that the ratio of the collector current to the base current(IC/IB) is the current gain ß or hFE of the transistor."
    },
    {
        key: "2i.3",
        level: "intermediate",
        title: "Semiconductor devices",
        text: "Understand that if the variation in the base current is large enough the collector current can be turned on and off and the transistor behaves as a switch. Note: the candidate is not required to recall transistor configurations. Circuits shown will be an NPN transistor connected in common emitter mode."
    },
    {
        key: "2i.4",
        level: "intermediate",
        title: "Semiconductor devices",
        text: "Recognise the circuit of a simple common emitter amplifier."
    },
    {
        key: "2i.4",
        level: "intermediate",
        title: "Semiconsuctor devices",
        text: "Recall that semiconductors must be provided with the correct DC voltages and currents to allow them to function and that this is termed biasing. Note that calculations are not required."
    },
    {
        key: "2i.5",
        level: "intermediate",
        title: "Semiconductor devices",
        text: "Recall that a transistor can be used to generate audio and radio frequencies by maintaining the oscillations in a tuned or frequency selective circuit."
    },
    {
        key: "2i.5",
        level: "intermediate",
        title: "Semiconductor devices",
        text: "Distinguish between a crystal oscillator and a variable frequency oscillator(VFO) based on a tuned circuit. Note: Diagrams will show the Colpitts oscillator with the transistor in emitter follower mode. Candidates are not expected to recognise other types of oscillator."
    },
    {
        key: "2i.6",
        level: "intermediate",
        title: "Semiconductor devices",
        text: "Recall that many individual semiconductor devices may be built on a common substrate and packaged as an integrated circuit(IC)."
    },
    {
        key: "2i.6",
        level: "intermediate",
        title: "Semiconductor devices",
        text: "Recall that ICs may provide complete circuit functions, including, amplifiers, oscillators, voltage regulators and digital processing chips in a single package. Questions will be limited to the IC applications shown above."
    },
    {
        key: "2j.1",
        level: "intermediate",
        title: "Cells and power supplies",
        text: "Recall that different technologies used in cells give different terminal voltages."
    },
    {
        key: "2j.1",
        level: "intermediate",
        title: "Cells and power supplies",
        text: "Recall that battery capacity (stored charge) is measured in Ampere-hours(Ah)."
    },
    {
        key: "2j.2",
        level: "intermediate",
        title: "Cells and power supplies",
        text: "Recall the circuit diagrams and characteristics of different types of rectifier and smoothing circuit (i.e. half wave, full wave and bridge)."
    },
    {
        key: "2j.3",
        level: "intermediate",
        title: "Cells and power supplies",
        text: "Understand that in a rectifier circuit a reservoir capacitor can store a charge during the conducting part of the cycle and release it during the non-conducting part, providing a smoothing effect and a smoother DC output."
    },
    {
        key: "2j.3",
        level: "intermediate",
        title: "Cells and power supplies",
        text: "Identify the AC and rectified (pulsed DC) waveforms."
    },
    {
        key: "2j.4",
        level: "intermediate",
        title: "Cells and power supplies",
        text: "Identify discrete component and integrated circuit linear power supplies and understand the basic principle of their operation."
    },
    {
        key: "2j.4",
        level: "intermediate",
        title: "Cells and power supplies",
        text: "Recall the relative merits of linear and switched mode power supplies.Size, efficiency, heat, input and output voltage, RFI, cost & weight."
    },
    {
        key: "3a.2",
        level: "intermediate",
        title: "Transmitter concepts",
        text: "Recall the meaning of depth of modulation for amplitude modulation."
    },
    {
        key: "3a.2",
        level: "intermediate",
        title: "Transmitter concepts",
        text: "Recall the meanings of wide band and narrow band frequency modulation."
    },
    {
        key: "3a.2",
        level: "intermediate",
        title: "Transmitter concepts",
        text: "Recall the meaning of the term Peak Deviation. "
    },
    {
        key: "3a.3",
        level: "intermediate",
        title: "Transmitter concepts",
        text: "Understand that single sideband (SSB) is a form of amplitude modulation where one sideband and the carrier have been removed from the transmitted signal."
    },
    {
        key: "3a.3",
        level: "intermediate",
        title: "Transmitter concepts",
        text: "Understand that SSB is more efficient than AM or FM because power is not used to transmit the carrier and the other sideband."
    },
    {
        key: "3a.3",
        level: "intermediate",
        title: "Transmitter concepts",
        text: "Understand that a second advantage is that the transmitted signal takes up only half the bandwidth, e.g. 3kHz not 6kHz."
    },
    {
        key: "3a.3",
        level: "Intermediate",
        title: "Transmitter concepts",
        text: "Recall that : (1) AM uses less bandwidth than FM (2) SSB uses less bandwidth than AM (3) CW uses less bandwidth than SSB. Some digital modes may use less bandwidth than any of the above."
    },
    {
        key: "3b.1",
        level: "Intermediate",
        title: "Transmitter architecture",
        text: "Understand the block diagrams of CW, AM, SSB and FM transmitters."
    },
    {
        key: "3c.1",
        level: "Intermediate",
        title: "Oscillators",
        text: "Recall and understand the relative advantages and disadvantages of a crystal oscillator and a VFO."
    },
    {
        key: "3c.1",
        level: "Intermediate",
        text: "Recall that the resonant frequency of the tuned circuit in a VFO determines the frequency of oscillation."
    },
    {
        key: "3c.2",
        level: "Intermediate",
        title: "Oscillators",
        text: "Recall that the frequency stability of an oscillator can be improved by rigid mechanical construction, screening the oscillator enclosure, a regulated DC supply and a buffer amplifier immediately after the oscillator circuit."
    },
    {
        key: "3c.2",
        level: "Intermediate",
        title: "Oscillators",
        text: "Understand that a lack of stability (drift) may result in operation outside the amateur bands."
    },
    {
        key: "3c.2",
        level: "Intermediate",
        title: "Oscillators",
        text: "Recall that most modern oscillators are digital synthesisers, which are very stable and are based on a crystal reference."
    },
    {
        key: "3c.3",
        level: "Intermediate",
        title: "Oscillators",
        text: "Recall that digital signals can be used to generate audio and RF signals by Direct Digital Synthesis(DDS)."
    },
    {
        key: "3c.3",
        level: "Intermediate",
        title: "Oscillators",
        text: "Recall the meaning of DDS. "
    },
    {
        key: "3c.3",
        level: "Intermediate",
        title: "Oscillators",
        text: "Recall that a Direct Digital Synthesiser generates audio and RF signals from pre-set digital values held in a memory, or Lookup Table."
    },
    {
        key: "3e.1",
        level: "Intermediate",
        title: "Microphone amplifiers and modulators",
        text: "Recall that a Balanced Modulator is used to produce two sidebands whilst suppressing the carrier."
    },
    {
        key: "3e.2",
        level: "intermediate",
        title: "Microphone amplifiers and modulators",
        text: "Understand that an SSB filter is a Band Pass Filter that will only allow one sideband to pass to the Power Amplifier."
    },
    {
        key: "3e.2",
        level: "intermediate",
        title: "Microphone amplifiers and modulators",
        text: "Recall that in an analogue transmitter, SSB filters are normally constructed from a number of quartz crystals or other resonators."
    },
    {
        key: "3e.3",
        level: "intermediate",
        title: "Microphone amplifiers and modulators",
        text: "Recall that a variable capacitance diode can be used in an oscillator to produce frequency modulation(FM)."
    },
    {
        key: "3f.1",
        level: "intermediate",
        title: "RF power amplifiers",
        text: "Understand the concept of the efficiency of an amplifier stage and estimate expected RF output power for a given DC input power, given the stage’s efficiency."
    },
    {
        key: "3g.2",
        level: "intermediate",
        title: "Transmitter interference",
        text: "Recall that oscillators, mixers and amplifiers can produce harmonics which are multiples of the fundamental frequency."
    },
    {
        key: "3g.2",
        level: "intermediate",
        title: "Transmitter interference",
        text: "Recall that harmonics can cause interference to other amateur bands and other radio users."
    },
    {
        key: "3g.3",
        level: "intermediate",
        title: "Transmitter interference",
        text: "Recall that a filter is a device that blocks some frequencies and passes others."
    },
    {
        key: "3g.3",
        level: "intermediate",
        title: "Transmitter interference",
        text: "Understand the effects of low-pass, bandpass and high-pass filters."
    },
    {
        key: "3g.3",
        level: "intermediate",
        title: "Transmitter interference",
        text: "Understand that a low-pass filter, a band-pass filter and a band stop(notch) filter can minimise the radiation of harmonics."
    },
    {
        key: "3g.3",
        level: "intermediate",
        title: "Transmitter interference",
        text: "Recall that RF power amplifiers can produce harmonics of the wanted signals and that suitable filtering is required to avoid harmonic radiation."
    },
    {
        key: "3g.4",
        level: "intermediate",
        title: "Transmitter interference",
        text: "Understand that too fast a rise and fall time of the transmitted RF envelope of a CW transmitter may cause excessive bandwidth (key clicks) and that this can be minimised by suitable filters in the keying stage."
    },
    {
        key: "3g.4",
        level: "intermediate",
        title: "Transmitter interference",
        text: "Recognise a diagrammatic representation of rise and fall time."
    },
    {
        key: "3g.5",
        level: "intermediate",
        title: "Transmitter interference",
        text: "Recall the cause and effect of ‘chirp’ and identify suitable remedies."
    },
    {
        key: "3h.2",
        level: "intermediate",
        title: "Receiver concepts",
        text: "Understand the block diagrams of the crystal diode receiver, and direct conversion receiver."
    },
    {
        key: "3h.2",
        level: "intermediate",
        title: "Receiver concepts",
        text: "Understand the functions of the RF amplifier, demodulator (detector), and audio amplifier as used in an analogue receiver."
    },
    {
        key: "3h.3",
        level: "intermediate",
        title: "Receiver concepts",
        text: "Recall that a receiver’s ability to detect weak signals is known as its sensitivity."
    },
    {
        key: "3h.3",
        level: "intermediate",
        title: "Receiver concepts",
        text: "Recall that very strong signals can overload a receiver and cause distortion to the audio output."
    },
    {
        key: "3h.4",
        level: "intermediate",
        title: "Receiver concepts",
        text: "Recall that a receiver’s ability to reject frequencies outside the wanted signal bandwidth is known as its selectivity."
    },
    {
        key: "3h.4",
        level: "intermediate",
        title: "Receiver concepts",
        text: "Understand the limitations of tuned circuits in selecting wanted frequencies and the effect of the Q factor (Q-factor or Quality Factor) of tuned circuits."
    },
    {
        key: "3i.1",
        level: "intermediate",
        title: "Superheterodyne concepts",
        text: "Understand the need for and advantages of the superheterodyne architecture."
    },
    {
        key: "3i.2",
        level: "intermediate",
        title: "Superheterodyne concepts",
        text: "Recall that the intermediate frequency is the sum of or difference between the RF and local oscillator frequencies and is produced by a mixer."
    },
    {
        key: "3i.3",
        level: "intermediate",
        title: "Superheterodyne concepts",
        text: "Recall that a superheterodyne receiver uses a fixed IF stage to enable good selectivity and that mixing ahead of the IF enables multi-band reception."
    },
    {
        key: "3i.3",
        level: "intermediate",
        title: "Superheterodyne concepts",
        text: "Understand that tuned circuits in RF and IF amplifiers select the wanted signal."
    },
    {
        key: "3i.3",
        level: "intermediate",
        title: "Superheterodyne concepts",
        text: "Identify the tuned circuits in the circuit of an IF amplifier."
    },
    {
        key: "3k.1",
        level: "intermediate",
        title: "Demodulation",
        text: "Understand how a diode detector will recover the audio from amplitude modulated signals."
    },
    {
        key: "3k.1",
        level: "intermediate",
        title: "Demodulation",
        text: "Understand that to generate the audio from CW signals a beat frequency oscillator(BFO) is used; for the recovery of single sideband audio a carrier insertion oscillator(CIO) and product detector are used and for the recovery of FM audio a discriminator is used."
    },
    {
        key: "3k.1",
        level: "intermediate",
        title: "Demodulation",
        text: "Identify the waveforms produced in a diode AM detector."
    },
    {
        key: "3l.1",
        level: "intermediate",
        title: "Automatic gain control (AGC)",
        text: "Understand that the automatic gain control (AGC) of a receiver operates by sensing the strength of the received signals at the detector and adjusting the gain of the IF and sometimes the RF amplifiers to keep the audio output level fairly constant."
    },
    {
        key: "3l.1",
        level: "intermediate",
        title: "Automatic gain control (AGC)",
        text: "Recall that the AGC signal can also drive a signal strength meter (S-meter)."
    },
    {
        key: "3m.1",
        level: "intermediate",
        title: "SDR transmitters and receivers",
        text: "Recall that SDR software uses a mathematical function called a Fourier transform which sifts the composite signal into its constituent independent frequencies for processing."
    },
    {
        key: "3m.1",
        level: "intermediate",
        title: "SDR transmitters and receivers",
        text: "Recall that this can also be used to provide a spectrum or waterfall display."
    },
    {
        key: "3m.1",
        level: "intermediate",
        title: "SDR transmitters and receivers",
        text: "Recall that digital filters can be much more selective than analogue filters."
    },
    {
        key: "3m.2",
        level: "intermediate",
        title: "SDR transmitters and receivers",
        text: "Recall the meaning of the time domain and the frequency domain."
    },
    {
        key: "3m.2",
        level: "intermediate",
        title: "SDR transmitters and receivers",
        text: "Understand how signals in the time domain may also be viewed in the frequency domain."
    },
    {
        key: "3m.2",
        level: "intermediate",
        title: "SDR transmitters and receivers",
        text: "Identify for some simple harmonic waves, the spectrum obtained using the Fourier transform."
    },
    {
        key: "3m.3",
        level: "intermediate",
        title: "SDR transmitters and receivers",
        text: "Recall the different elements that make up the functions of an SDR(block diagram)."
    },
    {
        key: "4a.1",
        level: "intermediate",
        title: "Feeders",
        text: "Understand the equal and opposite currents flowing in a balanced feeder cause equal and opposite fields around the two conductors."
    },
    {
        key: "4a.1",
        level: "intermediate",
        title: "Feeders",
        text: "Understand that these fields cancel out, but that nearby objects can cause an imbalance that makes the feeder radiate RF energy."
    },
    {
        key: "4a.1",
        level: "intermediate",
        title: "Feeders",
        text: "Recall that a rectangular waveguide must have its larger dimension greater than λ/ 2 for the signal to travel."
    },
    {
        key: "4a.2",
        level: "intermediate",
        title: "Feeders",
        text: "Recall that twin feeder usually has lower loss than coaxial cable."
    },
    {
        key: "4a.2",
        level: "intermediate",
        title: "Feeders",
        text: "Recall that loss is measured in dB."
    },
    {
        key: "4a.2",
        level: "intermediate",
        title: "Feeders",
        text: "Understand the relationship between RF output power, feeder loss and power delivered to the antenna."
    },
    {
        key: "4a.2",
        level: "intermediate",
        title: "Feeders",
        text: "Calculate the unknown quantity given the other two. Feeder loss will be in multiples of 3dB and 10dB."
    },
    {
        key: "4a.3",
        level: "intermediate",
        title: "Feeders",
        text: "Recall that feeders have a characteristic impedance which depends upon the diameter and spacing of the conductors."
    },
    {
        key: "4a.3",
        level: "intermediate",
        title: "Feeders",
        text: "Recall that this impedance determines the ratio of the RF RMS potential difference to the RF, RMS current in a correctly terminated feeder."
    },
    {
        key: "4a.3",
        level: "intermediate",
        title: "Feeders",
        text: "Recall that for amateur use 50Ω coaxial feeder is normally used; that coaxial cable for TV and satellite receivers has a different impedance of 75Ω."
    },
    {
        key: "4a.3",
        level: "intermediate",
        title: "Feeders",
        text: "Recall that balanced feeder is commonly available from 75Ω to 600Ω."
    },
    {
        key: "4a.3",
        level: "intermediate",
        title: "Feeders",
        text: "Recall that correctly terminated means correctly connected with a resistive load equal to the cable characteristic impedance."
    },
    {
        key: "4b.1",
        level: "intermediate",
        title: "Baluns",
        text: "Recall the construction and use of choke type baluns."
    },
    {
        key: "4c.2",
        level: "intermediate",
        title: "Antenna concepts",
        text: "Understand the front-to-back ratio of an antenna."
    },
    {
        key: "4c.2",
        level: "intermediate",
        title: "Antenna concepts",
        text: "Understand the beam width of an antenna."
    },
    {
        key: "4c.2",
        level: "intermediate",
        title: "Antenna concepts",
        text: "Understand that radiation patterns exist in three dimensions."
    },
    {
        key: "4c.4",
        level: "foundation",
        title: "Antenna concepts",
        text: "Recall that antenna gain can also be expressed relative to a theoretical antenna that radiates equally in all directions and this is shown as EIRP, Effective Isotropic Radiated Power."
    },
    {
        key: "4c.4",
        level: "foundation",
        title: "Antenna concepts",
        text: "Recall that 10W EIRP is equivalent to 6.1W ERP."
    },
    {
        key: "4c.4",
        level: "intermediate",
        title: "Antenna concepts",
        text: "Recall that an isotropic radiator is a theoretical antenna that radiates equally in all directions."
    },
    {
        key: "4c.4",
        level: "intermediate",
        title: "Antenna concepts",
        text: "Recall the Effective Isotropic Radiated Power (EIRP) is based on an isotropic antenna reference rather than a dipole and is expressed in dBi."
    },
    {
        key: "4c.4",
        level: "intermediate",
        title: "Antenna concepts",
        text: "Recall that a half-wave dipole has a gain, in its optimum direction, of 2.15dBi"
    },
    {
        key: "4c.5",
        level: "foundation",
        title: "Antenna concepts",
        text: "Recall that VHF and UHF signals will normally be received most effectively when the transmitter and the receiver have the same antenna polarisation and that this is less important at HF because the polarisation may change during ionospheric reflection."
    },
    {
        key: "4c.5",
        level: "intermediate",
        title: "Antenna concepts",
        text: "Recall that the angle at which the radio wave leaves the antenna is known as the angle of radiation and that longer distances normally requires a lower angle of radiation."
    },
    {
        key: "4c.5",
        level: "intermediate",
        title: "Antenna concepts",
        text: "Recall the effect of the ground on the angle of radiation."
    },
    {
        key: "4c.6",
        level: "foundation",
        title: "Antenna concepts",
        text: "Recall that the connection point of the feeder to the antenna is called the feed point."
    },
    {
        key: "4c.6",
        level: "foundation",
        title: "Antenna concepts",
        text: "Recall that at the design frequency the feed point has an impedance that should match the impedance of the feeder and the transmitter."
    },
    {
        key: "4c.6",
        level: "foundation",
        title: "Antenna concepts",
        text: "Recall that the feed point impedance of an antenna is related to the dimensions of the antenna and the wavelength of the applied signal."
    },
    {
        key: "4c.6",
        level: "foundation",
        title: "Antenna concepts",
        text: "Recall that if the feed point impedance of the antenna does not match that of the feeder, energy will be reflected back down the feeder the proportion reflected depending upon the degree of mismatch."
    },
    {
        key: "4c.6",
        level: "intermediate",
        title: "Antenna concepts",
        text: "Recall that the current flowing into an antenna is related to the feed point impedance and the potential difference of the applied signal."
    },
    {
        key: "4c.6",
        level: "intermediate",
        title: "Antenna concepts",
        text: "Recall that an antenna will only present the correct feed point impedance when fed with the frequency for which it is designed."
    },
    {
        key: "4c.6",
        level: "intermediate",
        title: "Antenna concepts",
        text: "Recall that a centre fed half-wave dipole has a feed point impedance of 73Ω in free space and that under practical conditions (e.g.due to ground proximity effects) this will be approximately 50Ω when used at its designed frequency."
    },
    {
        key: "4d.1",
        level: "foundation",
        title: "Types of antenna",
        text: "Identify the half-wave dipole, λ/4 (quarter wavelength) ground plane, Yagi, end-fed wire and 5 / 8 λ(five eighths wavelength antennas."
    },
    {
        key: "4d.1",
        level: "foundation",
        title: "Types of antenna",
        text: "Understand that the sizes of HF and VHF antennas are different because they are related to wavelength, though they operate on the same basic principles."
    },
    {
        key: "4d.1",
        level: "foundation",
        title: "Types of antenna",
        text: "Understand that the λ/2 (half wavelength) dipole has a physical length approximately equal to a half wavelength of the correct signal."
    },
    {
        key: "4d.1",
        level: "intermediate",
        title: "Types of antenna",
        text: "Recall that a three-element Yagi has a half-wave driven element, a reflector that is slightly longer than the driven element and a director that is slightly shorter than the driven element."
    },
    {
        key: "4d.1",
        level: "intermediate",
        title: "Types of antenna",
        text: "Recall that Yagi antennas may have more than one director."
    },
    {
        key: "4d.2",
        level: "intermediate",
        title: "Types of antenna",
        text: "Recall that an antenna trap is a parallel tuned circuit and understand how it enables a single antenna to be resonant and have an acceptable feed-point impedance on more than one frequency."
    },
    {
        key: "4d.2",
        level: "intermediate",
        title: "Types of antenna",
        text: "Recall that this technique may be extended to multielement antennas such as Yagis."
    },
    {
        key: "4e.1",
        level: "foundation",
        title: "Standing waves",
        text: "Recall that the antenna system must be suitable for the frequency of the transmitted signal."
    },
    {
        key: "4e.1",
        level: "foundation",
        title: "Standing waves",
        text: "Recall that if an antenna is not correctly designed for the frequency it will not match the transmitter and will not work effectively."
    },
    {
        key: "4e.1",
        level: "foundation",
        title: "Standing waves",
        text: "Recall that if the antenna does not match the feeder some power from the transmitter will be reflected back towards the transmitter causing standing waves."
    },
    {
        key: "4e.1",
        level: "intermediate",
        title: "Standing waves",
        text: "Understand that the signal reflected back down the feeder will combine with the waves travelling up the feeder from the transmitter leading to the formation of standing waves."
    },
    {
        key: "4e.1",
        level: "intermediate",
        title: "Standing waves",
        text: "Recall that both forward and reflected signals are subjected to feeder loss."
    },
    {
        key: "4e.1",
        level: "intermediate",
        title: "Standing waves",
        text: "Recall that the reflected signal will change the input impedance of the feeder so that it is no longer the characteristic impedance and the feeder will not then present the correct impedance to the transmitter."
    },
    {
        key: "4e.2",
        level: "foundation",
        title: "Standing waves",
        text: "Recall that an SWR meter shows whether an antenna presents the correct match to the transmitter and is reflecting minimum power back to the transmitter."
    },
    {
        key: "4e.2",
        level: "foundation",
        title: "Standing waves",
        text: "Recall that a high SWR, measured at the transmitter, is an indication of a fault in the antenna or feeder and not the transmitter."
    },
    {
        key: "4e.2",
        level: "foundation",
        title: "Standing waves",
        text: "Recall that the transmitter may be damaged in the presence of a high SWR much greater than 2:1."
    },
    {
        key: "4f.1",
        level: "foundation",
        title: "Antenna matching units",
        text: "Recall that where an antenna has not been designed for the frequency being used, the feed resistance will change resulting in a mismatch and that an Antenna Matching Unit (AMU), also sometimes referred to as an ATU, can correct the mismatch and is used to ensure that the transmitter can supply energy to the antenna without damage to the transmitter."
    },
    {
        key: "4f.1",
        level: "intermediate",
        title: "Antenna matching units",
        text: "Recall that a transmitter is designed to transfer energy into a specific impedance."
    },
    {
        key: "4f.1",
        level: "intermediate",
        title: "Antenna matching units",
        text: "Understand that an antenna matching unit (AMU) can change the impedance presented to the transmitter and that an AMU does not tune the feeder or the antenna to resonance."
    },
    {
        key: "4f.1",
        level: "intermediate",
        title: "Antenna matching units",
        text: "Understand that if the AMU is located at the transmitter, it will have no effect on the actual SWR on the feeder between the AMU and antenna."
    },
    {
        key: "4g.1",
        level: "intermediate",
        title: "Plugs and sockets",
        text: "Recall that in a correctly connected and terminated coaxial cable the RF field only exists within the cable and is not affected by objects outside the cable. Note that correctly connected means screen and inner conductor continuity through any plug and socket."
    },
    {
        key: "5a.2",
        level: "intermediate",
        title: "Radio propagation: key concepts",
        text: "Understand the meaning of ground wave, tropospheric (space) wave, sky wave, skip distance and skip zone (dead zone)."
    },
    {
        key: "5a.2",
        level: "intermediate",
        title: "Radio propagation: key concepts",
        text: "Understand why the ground wave has a limited range due to absorption of energy in the ground and that the loss increases with increasing frequency."
    },
    {
        key: "5a.3",
        level: "intermediate",
        title: "Radio propagation: key concepts",
        text: "Recall that electromagnetic radiation comprises both an electrical field and a magnetic field."
    },
    {
        key: "5a.3",
        level: "intermediate",
        title: "Radio propagation: key concepts",
        text: "Recall that the two fields are always at right angles to each other and that the direction of propagation is at right-angles to both fields."
    },
    {
        key: "5a.3",
        level: "intermediate",
        title: "Radio propagation: key concepts",
        text: "Recall that it is the plane of polarisation of the electric field that defines the polarisation of the electromagnetic wave."
    },
    {
        key: "5b.1",
        level: "intermediate",
        title: "Ionosphere",
        text: "Understand that the ionosphere comprises layers of ionised gases and that the ionisation is caused by solar emissions including ultraviolet radiation and charged solar particles."
    },
    {
        key: "5b.1",
        level: "intermediate",
        title: "Ionosphere",
        text: "Recall the ionospheric layers (D, E, F1 and F2) and approximate heights."
    },
    {
        key: "5b.2",
        level: "intermediate",
        title: "Ionosphere",
        text: "Recall that the level of ionisation changes with the time of day, the time of year, and according to the, approximately, 11-year sunspot cycle."
    },
    {
        key: "5b.2",
        level: "intermediate",
        title: "Ionosphere",
        text: "Understand that the sunspot number is an indicator of solar activity and that more sunspots give better HF propagation as a result of increased ionisation."
    },
    {
        key: "5b.2",
        level: "intermediate",
        title: "Ionosphere",
        text: "Recall that the highest frequency that will be refracted over a given path is known as the maximum usable frequency(MUF)."
    },
    {
        key: "5b.3",
        level: "intermediate",
        title: "Ionosphere",
        text: "Recall that the F2 layer provides the furthest refractions for HF signals(about 4000km) and that the F layers combine at night."
    },
    {
        key: "5b.3",
        level: "intermediate",
        title: "Ionosphere",
        text: "Recall that multiple hops permit worldwide propagation."
    },
    {
        key: "5b.3",
        level: "intermediate",
        title: "Ionosphere",
        text: "Understand how fading occurs and its effect on the received signal."
    },
    {
        key: "5b.3",
        level: "intermediate",
        title: "Ionosphere",
        text: "Recall that Short Path ionospheric propagation of HF signals is the most direct route around the earth."
    },
    {
        key: "5b.3",
        level: "intermediate",
        title: "Ionosphere",
        text: "Recall that Long Path ionospheric propagation is where HF signals are received via the opposite route around the earth to the Short Path."
    },
    {
        key: "5b.4",
        level: "intermediate",
        title: "Ionosphere",
        text: "Recall that the D layer tends to absorb the lower radio frequencies during daylight hours and that it tends to disappear at night."
    },
    {
        key: "5b.4",
        level: "intermediate",
        title: "Ionosphere",
        text: "Recall that the lowest frequency that can pass through the D-layer without significant absorption is the lowest usable frequency(LUF)."
    },
    {
        key: "5b.4",
        level: "intermediate",
        title: "Ionosphere",
        text: "Understand that if the D-layer absorption (LUF) occurs at frequencies higher than the MUF then no ionospheric propagation can occur."
    },
    {
        key: "5b.5",
        level: "intermediate",
        title: "Ionosphere",
        text: "Recall that in addition to VHF, waves in the in the 24 MHz and 28 MHz upper HF band can also occasionally be significantly increased by refraction from highly ionised areas in the E layer(Sporadic E)."
    },
    {
        key: "5b.5",
        level: "intermediate",
        title: "Ionosphere",
        text: "Recall that the height of the E layer will support a single hop of up to about 2000km and that multi-hop propagation can occur."
    },
    {
        key: "5c.3",
        level: "intermediate",
        title: "VHF and above",
        text: "Recall that at VHF and above, multipath propagation can occur where signals are reflected off objects(such as a buildings or aircraft) and the reflected signal is received in addition to the direct, un-reflected, signal."
    },
    {
        key: "6a.1",
        level: "intermediate",
        title: "EMC concepts",
        text: "Understand that all electronic equipment is capable of radiating and absorbing radio frequency energy."
    },
    {
        key: "6a.1",
        level: "intermediate",
        title: "EMC concepts",
        text: "Recall that the basic principle of electromagnetic compatibility is that apparatus should be able to function satisfactorily in its electromagnetic environment and without causing undue electromagnetic disturbance to other apparatus in that environment."
    },
    {
        key: "6a.2",
        level: "intermediate",
        title: "EMC concepts",
        text: "Recall that the immunity of a device can often be improved by screening and filtering power, signal and control leads."
    },
    {
        key: "6a.3",
        level: "intermediate",
        title: "EMC concepts",
        text: "Understand that transmitters in domestic environments may give rise to RF fields stronger than the agreed limits."
    },
    {
        key: "6a.3",
        level: "intermediate",
        title: "EMC concepts",
        text: "Understand that transmitters in domestic environments are not normal situations and special measures may have to be taken."
    },
    {
        key: "6a.4",
        level: "intermediate",
        title: "EMC concepts",
        text: "Understand that new electronic equipment should meet the British Standards Institute immunity requirements but that existing equipment and poorly installed equipment may not."
    },
    {
        key: "6b.1",
        level: "intermediate",
        title: "Sources of interference and their effects",
        text: "Recall that speech transmissions, particularly AM and SSB may cause speech like sounds in analogue radio, audio systems and telephones."
    },
    {
        key: "6b.1",
        level: "intermediate",
        title: "Sources of interference and their effects",
        text: "Recall that FM transmission is more likely to mute or reduce the volume of the wanted signals (audio or RF)."
    },
    {
        key: "6b.2",
        level: "intermediate",
        title: "Sources of interference and their effects",
        text: "Recall non-radio sources of interference and their effects: Arcing thermostats, Vehicle ignition systems, Electric Motors, Computers and peripherals, Switch mode power supplies, Plasma TVs, Very high bit rate digital subscriber line (VDSL) equipment, LED lighting, Solar photovoltaic (PV) inverters"
    },
    {
        key: "6b.2",
        level: "intermediate",
        title: "Sources of interference and their effects",
        text: "Recall that this gives rise to various buzzing sounds on analogue radio receivers which can correlate with the nature and use of the interference source e.g.bursts of undesirable sounds when a thermostat opens or closes."
    },
    {
        key: "6b.3",
        level: "intermediate",
        title: "Sources of interference and their effects",
        text: "Recall that interference to Digital Audio Broadcasting (DAB) may cause loss of signal (muted audio) and to digital televisions may cause the picture to freeze, appear to pixelate that is break up into larger squares, become jerky or disappear."
    },
    {
        key: "6c.1",
        level: "intermediate",
        title: "Filtering and remedial measures",
        text: "Recall that direct pick up in affected devices tends to be independent of a specific frequency within a band although differences may be noticed between different bands."
    },
    {
        key: "6c.1",
        level: "intermediate",
        title: "Filtering and remedial measures",
        text: "Recall that direct pickup is especially an issue in the VHF/UHF bands."
    },
    {
        key: "6c.2",
        level: "intermediate",
        title: "Filtering and remedial measures",
        text: "Understand that some masthead and down lead TV amplifiers are broadband, amplifying a wide range of frequencies, including amateur frequencies."
    },
    {
        key: "6c.2",
        level: "intermediate",
        title: "Filtering and remedial measures",
        text: "Understand that this can result in overloading of the amplifier and/ or the TV input."
    },
    {
        key: "6d.1",
        level: "intermediate",
        title: "Filtering and remedial measures",
        text: "Understand that filters can be fitted in the leads from the power supply to the transmitter to help minimise RF energy entering the mains wiring."
    },
    {
        key: "6d.1",
        level: "intermediate",
        title: "Filtering and remedial measures",
        text: "Recall the use of ferrite ring filters for minimising unwanted RF on antenna downleads and mains leads to affected equipment."
    },
    {
        key: "6d.1",
        level: "intermediate",
        title: "Filtering and remedial measures",
        text: "Recall and understand the use of high-pass or lowpass filters to reduce the level of HF and VHF amateur transmissions into other electronic equipment."
    },
    {
        key: "6d.1",
        level: "intermediate",
        title: "Filtering and remedial measures",
        text: "Understand the use of mains filters to reduce RF, electric motor and thermostat interference to TV, radio and audio systems."
    },
    {
        key: "6d.2",
        level: "intermediate",
        title: "Filtering and remedial measures",
        text: "Understand the meanings of common mode and differential mode currents and signals."
    },
    {
        key: "6d.2",
        level: "intermediate",
        title: "Filtering and remedial measures",
        text: "Understand how a ferrite ring or choke can be used to attenuate common mode signals in twin wires and braid currents on coaxial cables."
    },
    {
        key: "6d.3",
        level: "intermediate",
        title: "Filtering and remedial measures",
        text: "Recall how to use a suitable general coverage receiver to check for spurious and harmonic emissions from the station."
    },
    {
        key: "6d.4",
        level: "intermediate",
        title: "Filtering and remedial measures",
        text: "Understand the use of a dummy load in fault finding."
    },
    {
        key: "6d.4",
        level: "intermediate",
        title: "Filtering and remedial measures",
        text: "Recall that the resistor(s) used in a dummy load must be non-reactive and of a suitable power rating."
    },
    {
        key: "6d.4",
        level: "intermediate",
        title: "Filtering and remedial measures",
        text: "Recall how to use a dummy load to check if interference is being caused by a radiated signal or leakage into the mains or other wiring."
    },
    {
        key: "6e.1",
        level: "intermediate",
        title: "Station design and antenna placement/general principles",
        text: "Recall how to interconnect the transmitter, microphone, power supply, SWR meter and band or low pass filters, using appropriate cables, to minimise EMC problems."
    },
    {
        key: "6e.2",
        level: "intermediate",
        title: "Station design and antenna placement/general principles",
        text: "Recall what constitutes a good RF earth, its purpose and use."
    },
    {
        key: "6e.3",
        level: "intermediate",
        title: "Station design and antenna placement/general principles",
        text: "Understand that siting a transmitting antenna close to mains wiring, TV or radio antennas and down-leads is a potential problem exacerbated by the use of a loft or indoor transmitting antenna."
    },
    {
        key: "6f.2",
        level: "intermediate",
        title: "Station design and antenna placement/mobile installations ",
        text: "Recall that when routing RF cables and mobile radio DC power leads within vehicles they should not be routed in parallel with the vehicle wiring loom and they should not be run near electronic control units."
    },
    {
        key: "6f.2",
        level: "intermediate",
        title: "Station design and antenna placement/mobile installations ",
        text: "Recall that radio frequency energy can cause interference to vehicle electronic circuits, including audio systems, navigation systems, remote locking, alarms and engine fuel management systems particularly when operating equipment with an RF output of 10W or more."
    },
    {
        key: "6f.3",
        level: "intermediate",
        title: "Station design and antenna placement/mobile installations ",
        text: "Understand that mobile antenna location can affect the radiation field strength within the vehicle; e.g.wing or boot mounted antennas are likely to produce higher exposures than roof mounted antennas."
    },
    {
        key: "7a.3",
        level: "intermediate",
        title: "Good operating practices and procedures ",
        text: "Recall common international call sign prefixes; EI(Eire), F(France), I(Italy), JA(Japan), PA(Netherlands), VE(Canada), VK(Australia), W(USA), ZL(New Zealand)."
    },
    {
        key: "7a.5",
        level: "intermediate",
        title: "Good operating practices and procedures ",
        text: "Recall that there are awards available for achievements which include: working continents, countries, islands, prefixes, locator squares and that variations may include certain frequency bands or low power."
    },
    {
        key: "7a.5",
        level: "intermediate",
        title: "Good operating practices and procedures ",
        text: "Recall that amateur radio contests require the exchange of information such as signal report, serial number and location."
    },
    {
        key: "7a.5",
        level: "intermediate",
        title: "Good operating practices and procedures ",
        text: "Recall that contests often have sections for different bands, power levels and modes."
    },
    {
        key: "7b.1",
        level: "intermediate",
        title: "Band plans",
        text: "Recall that band plans are produced by the IARU."
    },
    {
        key: "7b.1",
        level: "intermediate",
        title: "Band plans",
        text: "Recall that the band plans state that: no SSB operation should take place in the 10MHz(30m) band."
    },
    {
        key: "7b.1",
        level: "intermediate",
        title: "Band plans",
        text: "Recall that the band plans state that: no contests shall be organised in the 5MHz(60m), 10MHz(30m), 18MHz(17m) and 24MHz(12m), bands."
    },
    {
        key: "7b.1",
        level: "intermediate",
        title: "Band plans",
        text: "Recall that the band plans state that: transmissions on satellite frequencies should be avoided for terrestrial contacts."
    },
    {
        key: "7b.1",
        level: "intermediate",
        title: "Band plans",
        text: "Note: The 5MHz (60m) band is NOT available to Intermediate Licence holders."
    },
    {
        key: "7e.1",
        level: "intermediate",
        title: "Codes and abbreviations",
        text: "Recall the meaning and the reason for use of the Q codes: QRM, QRN, QRO, QRP, QRT, QSB, QSL, QSO, QSY, QTH."
    },
    {
        key: "7f.2",
        level: "intermediate",
        title: "Digital interfaces",
        text: "Recall that several types of transmissions can be generated and received with the use of a personal computer and a suitable interface."
    },
    {
        key: "7f.2",
        level: "intermediate",
        title: "Digital interfaces",
        text: "Recall minimal distortion can be obtained by careful adjustments between the DAC interface and the transmitter."
    },
    {
        key: "7f.2",
        level: "intermediate",
        title: "Digital interfaces",
        text: "Recall other programs running on the PC that is handling the transmitter or receiver audio may cause interference e.g. warning beeps and alerts."
    },
    {
        key: "7g.1",
        level: "intermediate",
        title: "Satellites",
        text: "Recall that satellites orbit the Earth at heights above 250km and understand that most amateur satellites are moving in relation to the Earth and will only be above the horizon at certain times."
    },
    {
        key: "7g.2",
        level: "intermediate",
        title: "Satellites",
        text: "Recall that the up-link and down-link frequencies are generally in different amateur bands and that details are published by amateur organisations."
    },
    {
        key: "7g.2",
        level: "intermediate",
        title: "Satellites",
        text: "Recall that the transmitting station must be able to receive both the up-link and down-link signals."
    },
    {
        key: "7g.3",
        level: "intermediate",
        title: "Satellites",
        text: "Understand that amateur satellites can only be used when they are above the horizon at both the sending and receiving stations, and that the movement of the satellite will cause frequency variation, known as Doppler shift, on the received signal, which must be allowed for when selecting operating frequencies."
    },
    {
        key: "7g.4",
        level: "intermediate",
        title: "Satellites",
        text: "Understand that satellites have a very limited power supply, derived from solar panels, and that excessive up- link power may result in wasteful and unfair use of the satellite’s power."
    },
    {
        key: "7h.1",
        level: "intermediate",
        title: "CEPT and international",
        text: "Recall that other Administrations (foreign countries) do not routinely recognise the Intermediate Licence."
    },
    {
        key: "8a.1",
        level: "intermediate",
        title: "Electricity",
        text: "Understand that large or high-voltage capacitors can store dangerous electriccharges and must be discharged before working on equipment."
    },
    {
        key: "8a.1",
        level: "intermediate",
        title: "Electricity",
        text: "Recall that large value resistors can be used to provide leakage paths for these stored charges."
    },
    {
        key: "8a.4",
        level: "intermediate",
        title: "Electricity",
        text: "Recall that equipment mains fuses may be of a special type, such as quick blow or slow blow to allow for an initial surge of current and that the specified type must be fitted."
    },
    {
        key: "8a.4",
        level: "intermediate",
        title: "Electricity",
        text: "Understand that a fuse must be correctly rated for proper protection, and, in the absence of manufacturer’s instructions, to select an appropriate fuse. For mains: current = power/230 where 230 is the nominal mains voltage."
    },
    {
        key: "8a.6",
        level: "intermediate",
        title: "Electricity",
        text: "Understand that working on live equipment must only be done if it is not practicable to do otherwise and if the risks and appropriate precautions are fully understood."
    },
    {
        key: "8a.8",
        level: "intermediate",
        title: "Electricity",
        text: "Understand that vehicle batteries are a source of very high currents which can start a fire and that battery contents are corrosive."
    },
    {
        key: "8a.8",
        level: "intermediate",
        title: "Electricity",
        text: "Understand that explosive hydrogen gas can be given off when charging batteries and that ample ventilation is required."
    },
    {
        key: "8b.2",
        level: "intermediate",
        title: "Using tools",
        text: "Understand that screwdrivers, drills, saws and files must be handled with care."
    },
    {
        key: "8b.2",
        level: "intermediate",
        title: "Using tools",
        text: "Understand that fingers should always be behind the blade of hand tools."
    },
    {
        key: "8b.3",
        level: "intermediate",
        title: "Using tools",
        text: "Understand that any items being drilled, sawn or filed must be securely held in a vice or similar device to prevent them slipping or rotating."
    },
    {
        key: "8b.4",
        level: "intermediate",
        title: "Using tools",
        text: "Understand that any locking keys, and/or chuck keys, must be removed before using a power tool such as a drill to prevent the key being ejected at high speed."
    },
    {
        key: "8b.5",
        level: "intermediate",
        title: "Using tools",
        text: "Understand that using a centre punch will help prevent a drill bit slipping."
    },
    {
        key: "8b.6",
        level: "intermediate",
        title: "Using tools",
        text: "Understand the reasons why a bench-mounted pillar drill is safer than a hand- held drill."
    },
    {
        key: "8d.1",
        level: "foundation",
        title: "Working with RF",
        text: "Recall that the main health effect of exposure to electromagnetic radiation is heating of body tissue and that the eyes are particularly susceptible to damage."
    },
    {
        key: "8d.1",
        level: "intermediate",
        title: "Working with RF",
        text: "Recall that at 100W transmit power, especially with higher gain antennas, the EMF compliance distance can be several metres."
    },
    {
        key: "8d.1",
        level: "intermediate",
        title: "Working with RF",
        text: "Recall that, when mobile, pedestrians might be inside the EMF compliance distance."
    },
    {
        key: "8d.1",
        level: "intermediate",
        title: "Working with RF",
        text: "Recall that in such situations, especially when stationary, transmission must cease."
    },
    {
        key: "8d.2",
        level: "foundation",
        title: "Working with RF",
        text: "Recall that guidance on safe levels of RF radiation is available from government and international bodies, Health Security Agency and the International Commission on Non Ionizing Radiation Protection(ICNIRP)."
    },
    {
        key: "8d.3",
        level: "foundation",
        title: "Working with RF",
        text: "Recall what a waveguide is and why it is unwise to look down a microwave frequency waveguide or to stand close to or in front of high-gain antennas as they may be in use."
    },
    {
        key: "8d.4",
        level: "foundation",
        title: "Working with RF",
        text: "Recall that antenna elements and other conductors carrying RF should not be touched whilst transmitting."
    },
    {
        key: "8d.4",
        level: "foundation",
        title: "Working with RF",
        text: "Recall that antennas should be mounted where people will not come into accidental contact with them. Note: this does not apply to low powered devices such as hand-held equipment."
    },
    {
        key: "8e.1",
        level: "foundation",
        title: "Lightning",
        text: "Recall that particularly high antennas may need special protection against lightning."
    },
    {
        key: "8e.1",
        level: "foundation",
        title: "Lightning",
        text: "Recall that the local authority building department may be able to offer advice."
    },
    {
        key: "8e.1",
        level: "intermediate",
        title: "Lightning",
        text: "Recall that limited protection of equipment against the build-up of static charge can be obtained from gas discharge arrestors, spark gaps and bleed resistors."
    },
    {
        key: "9a.1",
        level: "intermediate",
        title: "Measurements",
        text: "Recall the purpose of a multimeter and understand how to set the meter to the correct range and polarity before connecting to the circuit."
    },
    {
        key: "9a.2",
        level: "intermediate",
        title: "Measurements",
        text: "Understand that voltmeters have a high internal resistance so that they draw minimal current from the circuit under test."
    },
    {
        key: "9a.2",
        level: "intermediate",
        title: "Measurements",
        text: "Understand that ammeters have a low internal resistance so that they minimise the voltage loss to the circuit under test."
    },
    {
        key: "9a.2",
        level: "intermediate",
        title: "Measurements",
        text: "Understand that a voltmeter is always connected in parallel with a component or circuit being tested."
    },
    {
        key: "9a.2",
        level: "intermediate",
        title: "Measurements",
        text: "Understand that an ammeter is always connected in series with a component or circuit being tested."
    },
    {
        key: "9a.3",
        level: "intermediate",
        title: "Measurements",
        text: "Understand the advantages and disadvantages of analogue and digital displays and be able to read analogue and digital values."
    },
    {
        key: "9a.5",
        level: "intermediate",
        title: "Measurements",
        text: "Understand the use of voltmeters and ammeters to determine the power applied to a circuit."
    },
    {
        key: "9b.1",
        level: "intermediate",
        title: "Decibels",
        text: "Recall that decibels are a power ratio."
    },
    {
        key: "9b.1",
        level: "intermediate",
        title: "Decibels",
        text: "Recall that a power gain of 3 dB equates to doubling the power and 10dB equates to a power increase of times 10."
    },
    {
        key: "9b.1",
        level: "intermediate",
        title: "Decibels",
        text: "Calculate the power gain or loss of various dB ratios based on 3 and 10dB and their multiples. This includes examples such as 25W is equivalent to 14dBW."
    },
    {
        key: "9b.1",
        level: "intermediate",
        title: "Decibels",
        text: "Recall that dB gains and losses in a system can be added to find the total gain or loss in the system."
    },
    {
        key: "9b.1",
        level: "intermediate",
        title: "Decibels",
        text: "Recall the meaning of: dBW(comparison with 1 W), dBi(comparison with an isotopic radiator) and dBd(comparison with a half wave dipole)."
    },
    {
        key: "9c.1",
        level: "intermediate",
        title: "Components",
        text: "Recall the resistor colour code, colours 0 to 9 with gold as multiplier."
    },
    {
        key: "9c.1",
        level: "intermediate",
        title: "Components",
        text: "Recall silver (10%) and gold (5%) as tolerance bands."
    },
    {
        key: "9c.1",
        level: "intermediate",
        title: "Components",
        text: "Identify the value of a resistor between 1Ω and 9MΩ from the E12 series. Candidates are not expected to know the values of the E12 series."
    },
    {
        key: "9c.1",
        level: "intermediate",
        title: "Components",
        text: "Recall how to read both 4 band and 5 band resistors."
    },
    {
        key: "9c.1",
        level: "intermediate",
        title: "Components",
        text: "Recall how to read components with a numeric marking of the format 4R7, 3k3 or for capacitors, 103."
    },
    {
        key: "9d.1",
        level: "intermediate",
        title: "Construction",
        text: "Recall that screening with thin metal sheet is effective in reducing unwanted radiation from equipment and/ or between stages within equipment."
    },
    {
        key: "9e.1",
        level: "intermediate",
        title: "Soldering",
        text: "Understand that soldering is a method of joining metal wires and components using solder and a hot soldering iron."
    },
    {
        key: "9e.2",
        level: "intermediate",
        title: "Soldering",
        text: "Recall that solder is a low melting point alloy and that many solders contain a flux to help the solder to flow and to prevent a layer of oxide forming on the surfaces to be joined."
    },
    {
        key: "9e.3",
        level: "intermediate",
        title: "Soldering",
        text: "Recall that some metals are easier to solder than others."
    },
    {
        key: "9e.4",
        level: "intermediate",
        title: "Soldering",
        text: "Understand that the tip of the soldering iron has to be cleaned to help remove any oxide and then tinned to prevent the oxide re- forming and to improve the conduction of heat to the joint."
    },
    {
        key: "9e.4",
        level: "intermediate",
        title: "Soldering",
        text: "Recall the reason for tinning wires prior to soldering."
    },
]

export default syllabusItems