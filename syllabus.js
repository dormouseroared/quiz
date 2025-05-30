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
        text: "Understand that people of all ages and backgrounds participate in amateur radio and that messages must not cause offence, particularly in the context of relevant legislation including the Wireless Telegraphy (Content of Transmission) Regulations 1988 and the Communications Act(2003)."
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
        text: "Recall that the licensee may use any communication link for the purposes of Remote Control of their station and must ensure that: (1) any links used for the Remote Control of the Radio Equipment must be adequately secure so as to ensure that no other person is able to control the Radio Equipment (2) Remote Control links using Amateur Radio frequencies must use frequency bands above 30 MHz and must not be encrypted (3) transmissions from the Radio Equipment can be terminated promptly (4) the Licence Number must be displayed on or next to any unattended Radio Equipment located other than at the address shown in the licence."
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
        text: "Recall (1) the average and peak transmit power level at which the EMF restrictions apply (2) when there is a need to reassess EMF compliance."
    },
    {
        key: "1g.1",
        level: "full",
        title: "Electromagnetic fields",
        text: "Understand relevant information in the licence: (1) Origin of the EMF restrictions (ICNIRP) (2) Meaning of the term ‘general public’ (3) Areas in which the general public need to be protected from EMF in breach of the limits (4) Records of EMF assessment (5) Procedure for carrying out an EMF assessment (6) Emergency situations"
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
        key: "2a.1",
        level: "foundation",
        title: "Fundamental theory",
        text: "Understand that the flow of electrons is an electric current."
    },
    {
        key: "2a.1",
        level: "foundation",
        title: "Fundamental theory",
        text: "Recall that a conductor allows electrons to flow easily and that an insulator does not."
    },
    {
        key: "2a.1",
        level: "foundation",
        title: "Fundamental theory",
        text: "Recall that metals such as copper and brass are good conductors, as is carbon.Plastics, rubber, glass and ceramics are regarded as insulators."
    },
    {
        key: "2a.1",
        level: "foundation",
        title: "Fundamental theory",
        text: "Recall that current can flow across wet insulators."
    },
    {
        key: "2a.1",
        level: "foundation",
        title: "Fundamental theory",
        text: "Recall that the unit of electric current is the Ampere (Amp)."
    },
    {
        key: "2a.1",
        level: "foundation",
        title: "Fundamental theory",
        text: "Recall that the unit of electrical potential is the Volt."
    },
    {
        note: "start here to insert foundation and full page 17 of syllabus 1.6b",
        key: "2a.1",
        level: "intermediate",
        title: "Fundamental theory",
        text: "Recall that components have tolerances, and that the measured value of a component may not precisely agree with its marked value."
    },
    {
        key: "2a.1",
        level: "full",
        title: "Fundamental theory",
        text: "Understand component tolerances and the effects they may have in circuit operation."
    },
    {
        key: "2a.2",
        level: "foundation",
        title: "Fundamental theory",
        text: "Recall that a circuit is needed to allow current to flow, and that circuit will include a source of electrical energy."
    },
    {
        key: "2a.2",
        level: "foundation",
        title: "Fundamental theory",
        text: "Recall that current in all parts of a series circuit has the same value."
    },
    {
        key: "2a.2",
        level: "foundation",
        title: "Fundamental theory",
        text: "Recall that the potential differences across items in parallel are the same."
    },
    {
        key: "2b.1",
        level: "foundation",
        title: "Power",
        text: "Recall that power is measured in Watts (W)."
    },
    {
        key: "2b.1",
        level: "foundation",
        title: "Power",
        text: "Recall that a current through a resistor results in conversion of electrical energy to heat energy in the resistor."
    },
    {
        key: "2b.1",
        level: "foundation",
        title: "Power",
        text: "Understand that Power (Watts) in a circuit is the product of the Potential Difference(Voltage) and the Current(Amps) i.e.P = V×I"
    },
    {
        key: "2b.1",
        level: "full",
        title: "Power",
        text: "Solve series/parallel resistor circuits to calculate currents, voltages, resistances and power given appropriate values. This may include the use of series/ parallel formulae, Ohm’s Law and power. Equations include P = V²/R and P=I²×R "
    },
    {
        key: "2c.1",
        level: "foundation",
        title: "Resistance",
        text: "Understand that resistance is the property of a material that opposes the flow of electricity."
    },
    {
        key: "2c.1",
        level: "foundation",
        title: "Resistance",
        text: "Recall that the unit of resistance is the Ohm (Ω)."
    },
    {
        key: "2c.1",
        level: "foundation",
        title: "Resistance",
        text: "Recall that the current (I) through a resistor (R) is proportional to the voltage(V) across that resistor."
    },
    {
        key: "2c.1",
        level: "foundation",
        title: "Resistance",
        text: "Use Ohm’s law to calculate the value of any one of the three quantities(voltage V, current, I and resistance R) given the other two."
    },
    {
        key: "2c.1",
        level: "foundation",
        title: "Resistance",
        text: "Understand that where a supply feeds more than one component or device the total current is the sum of the currents in the individual items when connected in parallel."
    },
    {
        key: "2c.1",
        level: "intermediate",
        title: "Resistance",
        text: "Understand circuits comprising series and parallel connections of resistors and cells."
    },
    {
        key: "2c.1",
        level: "intermediate",
        title: "Resistance",
        text: "Calculate the value of any one of the three quantities(V, I or R) given the other two."
    },
    {
        key: "2c.1",
        level: "intermediate",
        title: "Resistance",
        text: "Calculate the combined resistance of two or three resistors in series and/ or parallel. Resistors of different values may be used in series or parallel or combined series parallel circuits. The prefixes milli and kilo may be involved for some of these calculations."
    },
    {
        key: "2c.2",
        level: "foundation",
        title: "Resistance",
        text: "Understand that the sum of the voltages across a number of resistors in series equals the supply voltage."
    },
    {
        key: "2c.2",
        level: "intermediate",
        title: "Resistance",
        text: "Understand that two or three resistors can be arranged to act as a potential divider and apply the formula. The prefixes milli and kilo may be involved for some of these calculations."
    },
    {
        key: "2c.3",
        level: "intermediate",
        title: "Resistance",
        text: "Understand the difference between potential difference (PD) and electromotive force (EMF)."
    },
    {
        key: "2c.2",
        level: "intermediate",
        title: "Resistance",
        text: "Understand the concept of source resistance (impedance) and voltage drop due to current flow."
    },
    {
        key: "2c.4",
        level: "foundation",
        title: "Resistance",
        text: "Recall that polarity must be correct for electronic circuits to function correctly, or damage may be caused."
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
        key: "2d.1",
        level: "full",
        title: "Reactive components",
        text: "Understand the factors influencing the capacitance of a capacitor; area and separation of the plates, permittivity of dielectrics and formula C=k×A/ d."
    },
    {
        key: "2d.1",
        level: "full",
        title: "Reactive components",
        text: "Recall that the Coulomb is the quantity of electricity, Q, given by current × time and that the charge on a capacitor is given by Q = V×C."
    },
    {
        key: "2d.2",
        level: "intermediate",
        title: "Reactive components",
        text: "Understand and apply the formulae for calculating the combined values of two or three capacitors in series and in parallel."
    },
    {
        key: "2d.2",
        level: "full",
        title: "Reactive components",
        text: "Recall that different dielectrics are used for different purposes, e.g. air, ceramic, mica and polyester; and that with some dielectrics, losses increase with increasing frequency."
    },
    {
        key: "2d.3",
        level: "intermediate",
        title: "Reactive components",
        text: "Recall that some capacitors e.g. electrolytic are polarised and must be correctly connected to avoid injury, damage or destruction."
    },
    {
        key: "2d.3",
        level: "full",
        title: "Reactive components",
        text: "Understand that capacitors have a breakdown voltage and that they need to be used within that voltage."
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
        key: "2d.4",
        level: "full",
        title: "Reactive components",
        text: "Understand the term ‘self-inductance’ and recall that a ‘back EMF’ is produced as current flow changes in an inductor."
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
        key: "2d.7",
        level: "full",
        title: "Reactive components",
        text: "Understand the rise and fall of current in an LR circuit and that the time constant t = L / R."
    },
    {
        key: "2d.7",
        level: "full",
        title: "Reactive components",
        text: "Understand the rise and fall of voltage in a CR circuit and that the time constant t = C×R."
    },
    {
        key: "2e.1",
        level: "foundation",
        title: "AC theory",
        text: "Understand what is meant by Direct Current (DC) and Alternating Current (AC)."
    },
    {
        key: "2e.1",
        level: "intermediate",
        title: "AC theory",
        text: "Understand that by repeatedly charging and discharging in alternate directions, a capacitor can pass alternating currents but cannot pass a direct current."
    },
    {
        key: "2e.2",
        level: "foundation",
        title: "AC theory",
        text: "Identify the sine wave as a graphical representation of the rise and fall of an alternating current or voltage over time."
    },
    {
        key: "2e.2",
        level: "foundation",
        title: "AC theory",
        text: "Recall the frequency of the mains supply – 50Hz."
    },
    {
        key: "2e.2",
        level: "foundation",
        title: "AC theory",
        text: "Recall the range of frequencies for normal hearing – 20Hz - 15kHz."
    },
    {
        key: "2e.2",
        level: "foundation",
        title: "AC theory",
        text: "Recall the range of frequencies for audio communication – 300Hz - 3kHz."
    },
    {
        key: "2e.2",
        level: "foundation",
        title: "AC theory",
        text: "Recall that radio frequencies can range from below 30kHz to beyond 3000MHz."
    },
    {
        key: "2e.2",
        level: "foundation",
        title: "AC theory",
        text: "Recall the frequency bands for HF, VHF and UHF radio signals."
    },
    {
        key: "2e.2",
        level: "foundation",
        title: "AC theory",
        text: "Understand the meaning of the abbreviations RF and AF."
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
        key: "2e.3",
        level: "full",
        title: "AC theory",
        text: "Understand that current lags potential difference by 90° in an inductor and that current leads by 90° in a capacitor."
    },
    {
        key: "2e.3",
        level: "full",
        title: "AC theory",
        text: "Understand the formulae for the reactance of a capacitor or inductor in terms of the frequency and component value."
    },
    {
        key: "2e.3",
        level: "full",
        title: "AC theory",
        text: "Calculate the unknown term given the other two."
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
        key: "2e.4",
        level: "full",
        title: "AC theory",
        text: "Understand the use of capacitors for AC coupling(DC blocking) and decoupling AC signals(including RF bypass) to ground."
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
        key: "2e.5",
        level: "full",
        title: "AC theory",
        text: "Understand the use of inductors for DC decoupling (AC blocking)."
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
        key: "2e.6",
        level: "full",
        title: "AC theory",
        text: "Understand that impedance is a combination of resistance and reactance and apply the formula for impedance and current in a series CR or LR circuit."
    },
    {
        key: "2e.7",
        level: "foundation",
        title: "AC theory",
        text: "Understand the relationship between frequency (f) and wavelength(λ). Recall the units for frequency(Hz) and wavelength(m). Both the f λ graph and the velocity of radio waves will be given in the Reference Booklet."
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
        level: "foundation",
        title: "Digital signals",
        text: "Recall that analogue signals are constantly changing in amplitude, frequency or both."
    },
    {
        key: "2f.1",
        level: "foundation",
        title: "Digital signals",
        text: "Recall that digital signals are a stream of finite values at a specific sampling interval."
    },
    {
        key: "2f.1",
        level: "foundation",
        title: "Digital signals",
        text: "Recall that digital signals can be processed by a computing device with suitable software."
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
        key: "2f.1",
        level: "full",
        title: "Digital signals",
        text: "Understand that analogue to digital conversion can generate a false image of the signal if frequencies are present above the frequency which is half the sampling (Nyquist) rate."
    },
    {
        key: "2f.1",
        level: "full",
        title: "Digital signals",
        text: "Recall that these false images are known as aliases."
    },
    {
        key: "2f.1",
        level: "full",
        title: "Digital signals",
        text: "Understand that anti-aliasing filters are used to avoid this occurring."
    },
    {
        key: "2f.2",
        level: "foundation",
        title: "Digital signals",
        text: "Recall that an Analogue to Digital Convertor (ADC) is a device used to sample an analogue signal and produce a digital representation of it."
    },
    {
        key: "2f.2",
        level: "foundation",
        title: "Digital signals",
        text: "Recall the meaning of the term ADC."
    },
    {
        key: "2f.2",
        level: "foundation",
        title: "Digital signals",
        text: "Recall that a computing device is required to process digital signals."
    },
    {
        key: "2f.2",
        level: "foundation",
        title: "Digital signals",
        text: "Recall that a Digital to Analogue Convertor (DAC) is a device used to represent a digital signal in analogue format."
    },
    {
        key: "2f.2",
        level: "foundation",
        title: "Digital signals",
        text: "Recall the meaning of the term DAC."
    },
    {
        key: "2f.2",
        level: "full",
        title: "Digital signals",
        text: "Recall that digital signals in the time domain can be depicted in the frequency domain by using a mathematical operation known as a Fourier Transform (FT)."
    },
    {
        key: "2f.2",
        level: "full",
        title: "Digital signals",
        text: "Recall that a Fourier Transform takes digital signals in the time domain and calculates the amplitudes and the frequencies which comprised the original signal."
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
        key: "2g.1",
        level: "full",
        title: "Transformers",
        text: "Understand the concept of mutual inductance."
    },
    {
        key: "2g.1",
        level: "full",
        title: "Transformers",
        text: "Understand and apply the formulae relating transformer primary and secondary turns to primary and secondary potential differences and currents."
    },
    {
        key: "2g.1",
        level: "full",
        title: "Transformers",
        text: "Understand the impedance change in a transformer and apply the formula relating transformer primary and secondary terms to primary and secondary impedances."
    },
    {
        key: "2g.1",
        level: "full",
        title: "Transformers",
        text: "Recall that different magnetic materials used as cores for inductors and transformers perform best over different frequency ranges and affect their efficiency."
    },
    {
        key: "2g.1",
        level: "full",
        title: "Transformers",
        text: "Recall that losses in the material will cause heating which affects power handling and the required physical size of the core for the power concerned."
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
        key: "2h.1",
        level: "full",
        title: "Tuned circuits and resonance",
        text: "Apply the formula for the resonant frequency of a tuned circuit to find values of f, L or C from given data."
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
        key: "2h.2",
        level: "full",
        title: "Tuned circuits and resonance",
        text: "Recall the equivalent circuit of a crystal and that it exhibits series and parallel resonance."
    },
    {
        key: "2h.2",
        level: "full",
        title: "Tuned circuits and resonance",
        text: "Recall that crystals are manufactured for either series or parallel operation and will only be stable and correct on the marked frequency when used in the intended manner."
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
        key: "2h.4",
        level: "full",
        title: "Tuned circuits and resonance",
        text: "Understand the concept of the magnification factor Q as applied to the voltages and currents in a resonant circuit."
    },
    {
        key: "2h.4",
        level: "full",
        title: "Tuned circuits and resonance",
        text: "Recall that voltages and circulating currents in tuned circuits can be very high and understand the implications for component rating."
    },
    {
        key: "2h.4",
        level: "full",
        title: "Tuned circuits and resonance",
        text: "Apply the formula for Q factor given circuit component values."
    },
    {
        key: "2h.4",
        level: "full",
        title: "Tuned circuits and resonance",
        text: "Recall the definition of the half power point of resonance curves."
    },
    {
        key: "2h.4",
        level: "full",
        title: "Tuned circuits and resonance",
        text: "Apply the equation for Q given the resonant frequency and the half power points on the resonance curve."
    },
    {
        key: "2h.5",
        level: "intermediate",
        title: "Tuned circuits and resonance",
        text: "Identify the circuits of simple low pass, high pass, band pass and band stop (notch) filters and their response curves."
    },
    {
        key: "2h.5",
        level: "intermediate",
        title: "Tuned circuits and resonance",
        text: "Recall, using graphical methods, the concept of the cut-off frequency."
    },
    {
        key: "2h.5",
        level: "full",
        title: "Tuned circuits and resonance",
        text: "Understand the meaning of dynamic resistance, RD."
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
        key: "2i.1",
        level: "full",
        title: "Semiconductor devices",
        text: "Recall that a Zener diode will conduct when the applied reverse bias potential is above its designed value and identify its V/I characteristic curve."
    },
    {
        key: "2i.2",
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
        key: "2i.3",
        level: "full",
        title: "Semiconductor devices",
        text: "Understand the basics of biasing NPN and PNP bipolar transistors and field effect transistors (FET) (including dual gate devices).Note: In this section circuits shown will be an NPN transistor connected in common emitter / common source mode."
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
        key: "2i.4",
        level: "full",
        title: "Semiconsuctor devices",
        text: "Identify different types of small signal amplifiers (e.g.common emitter(source), emitter follower and common base) and explain their operation in terms of input and output impedances,current gain, voltage gain and phase change."
    },
    {
        key: "2i.4",
        level: "full",
        title: "Semiconsuctor devices",
        text: "Recall the characteristics and typical circuit diagrams of different classes of amplifiers(i.e. A, B, A/B and C)."
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
        key: "2i.5",
        level: "full",
        title: "Semiconductor devices",
        text: "Understand the feedback requirements to sustain oscillations in an oscillator. With reference to gain, phase and feedback losses."
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
        level: "foundation",
        title: "Cells and power supplies",
        text: "Understand that a battery is a combination of cells (usually in series)."
    },
    {
        key: "2j.1",
        level: "foundation",
        title: "Cells and power supplies",
        text: "Recall that a battery provides electrical energy from stored chemical energy and has a Potential Difference across its terminals."
    },
    {
        key: "2j.1",
        level: "foundation",
        title: "Cells and power supplies",
        text: "Recall that any unwanted battery must be properly disposed of."
    },
    {
        key: "2j.1",
        level: "foundation",
        title: "Cells and power supplies",
        text: "Understand that a rechargeable (secondary) battery has a reversible chemical process."
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
        key: "2j.2",
        level: "full",
        title: "Cells and power supplies",
        text: "Understand the function of stabilising circuits and identify different types of stabilising circuits(i.e. Zener diode/ pass transistor and IC). Note: questions on the characteristics of individual components are covered in other parts of this syllabus. This subsection is on complete circuits."
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
        key: "2j.3",
        level: "full",
        title: "Cells and power supplies",
        text: "Understand the need for rectifier diodes to have a sufficient peak inverse voltage (PIV) rating and calculate the PIV in diode/ capacitor circuits."
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
        key: "2j.4",
        level: "full",
        title: "Cells and power supplies",
        text: "Understand the basic principles and operation of a switch mode power supply, at block diagram level."
    },
    {
        key: "3a.1",
        level: "foundation",
        title: "Transmitter concepts",
        text: "Recall that the function of a radio transmitter is to send information from one place to another using electromagnetic radiation/ wireless technology."
    },
    {
        key: "3a.1",
        level: "foundation",
        title: "Transmitter concepts",
        text: "Recall that the process of adding information to a radio frequency carrier is known as modulation."
    },
    {
        key: "3a.2",
        level: "foundation",
        title: "Transmitter concepts",
        text: "Recall that the audio (or data) signal is modulated on to the radio frequency carrier in the modulation stage of the transmitter."
    },
    {
        key: "3a.2",
        level: "foundation",
        title: "Transmitter concepts",
        text: "Recall that modulation is achieved by varying the amplitude or frequency of the carrier, resulting in AM or FM modulation modes."
    },
    {
        key: "3a.2",
        level: "foundation",
        title: "Transmitter concepts",
        text: "Recall that information can be carried by AM, SSB or FM."
    },
    {
        key: "3a.2",
        level: "foundation",
        title: "Transmitter concepts",
        text: "Recall that data may be transmitted by modulating the carrier using suitable audio tones, commonly two or more, generated by an audio interface such as a computer sound card."
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
        key: "3a.2",
        level: "full",
        title: "Transmitter concepts",
        text: "Recall the meaning of Modulation Index and its effect on the number of FM sidebands."
    },
    {
        key: "3a.3",
        level: "foundation",
        title: "Transmitter concepts",
        text: "Recall that when radio frequencies are modulated(mixed) with an audio frequency the new frequencies that are generated are called sidebands."
    },
    {
        key: "3a.3",
        level: "foundation",
        title: "Transmitter concepts",
        text: "Recall that amplitude modulated signals contain two sidebands and the carrier."
    },
    {
        key: "3a.3",
        level: "foundation",
        title: "Transmitter concepts",
        text: "Recall that a SSB modulated signal contains only one sideband."
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
        text: "Recall that: (1) AM uses less bandwidth than FM (2) SSB uses less bandwidth than AM (3) CW uses less bandwidth than SSB. Some digital modes may use less bandwidth than any of the above."
    },
    {
        key: "3a.4",
        level: "foundation",
        title: "Transmitter concepts",
        text: "Identify diagrams representing audio, an RF carrier, amplitude modulated, frequency modulated and CW radio signals."
    },
    {
        key: "3a.4",
        level: "foundation",
        title: "Transmitter concepts",
        text: "Understand the terms carrier, audio waveform and modulated waveform. Note: Table 2 shows appropriate diagrams."
    },
    {
        key: "3b.1",
        level: "foundation",
        title: "Transmitter architecture",
        text: "Identify the items in a simple transmitter block diagram and recall their order of interconnection: Microphone, audio (microphone) amplifier stage, frequency generation stage, modulator stage, RF power amplifier stage, feeder and antenna."
    },
    {
        key: "3b.1",
        level: "Intermediate",
        title: "Transmitter architecture",
        text: "Understand the block diagrams of CW, AM, SSB and FM transmitters."
    },
    {
        key: "3b.1",
        level: "full",
        title: "Transmitter architecture",
        text: "Understand the block diagram of an SSB transmitter employing mixers to generate the final frequency."
    },
    {
        key: "3b.1",
        level: "full",
        title: "Transmitter architecture",
        text: "Understand the block diagram of an FM transmitter employing either frequency multipliers or mixers to generate the final frequency."
    },
    {
        key: "3c.1",
        level: "foundation",
        title: "Oscillators",
        text: "Recall that the oscillator in a simple transmitter sets the frequency on which the transmitter operates."
    },
    {
        key: "3c.1",
        level: "foundation",
        title: "Oscillators",
        text: "Recall that incorrect setting of this stage can result in operation outside the amateur band and interference to other users."
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
        key: "3c.3",
        level: "full",
        title: "Oscillators",
        text: "Recall the block diagram of a Phase Locked Loop (PLL) frequency synthesiser and the functions of the stages i.e.oscillator, fixed divider, phase comparator (detector), Low Pass Filter (LPF), voltage-controlled oscillator and programmable divider."
    },
    {
        key: "3c.3",
        level: "full",
        title: "Oscillators",
        text: "Recall how sinusoidal waves may be produced by direct digital synthesis and the block diagram of a simple synthesiser."
    },
    {
        key: "3c.3",
        level: "full",
        title: "Oscillators",
        text: "Recall that increasing the number of bits in the synthesiser will increase the purity of the signal."
    },
    {
        key: "3c.3",
        level: "full",
        title: "Oscillators",
        text: "Recall the function of the Clock, Lookup Table, DAC and LPF in a DDS block diagram."
    },
    {
        key: "3d.1",
        level: "full",
        title: "Frequency multipliers",
        text: "Understand that frequency multipliers use harmonics to generate frequencies above an oscillator’s fundamental frequency(e.g.in a microwave transmitter)."
    },
    {
        key: "3e.1",
        level: "foundation",
        title: "Microphone amplifiers and modulators",
        text: "Recall that the microphone amplifier amplifies the signal from the microphone to the level required to drive the modulator and limits the audio frequencies to those required for communication."
    },
    {
        key: "3e.1",
        level: "foundation",
        title: "Microphone amplifiers and modulators",
        text: "Recall the need to ensure that the microphone gain control (where fitted) is correctly adjusted."
    },
    {
        key: "3e.1",
        level: "Intermediate",
        title: "Microphone amplifiers and modulators",
        text: "Recall that a Balanced Modulator is used to produce two sidebands whilst suppressing the carrier."
    },
    {
        key: "3e.1",
        level: "full",
        title: "Microphone amplifiers and modulators",
        text: "Understand the operation of AM, SSB and FM modulators."
    },
    {
        key: "3e.1",
        level: "full",
        title: "Microphone amplifiers and modulators",
        text: "Calculate the bandwidth of such transmissions."
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
        key: "3e.2",
        level: "full",
        title: "Microphone amplifiers and modulators",
        text: "Identify typical sideband filter circuits and calculate relevant frequencies."
    },
    {
        key: "3e.3",
        level: "intermediate",
        title: "Microphone amplifiers and modulators",
        text: "Recall that a variable capacitance diode can be used in an oscillator to produce frequency modulation(FM)."
    },
    {
        key: "3f.1",
        level: "foundation",
        title: "RF power amplifiers",
        text: "Recall that the RF power amplifier stage increases the power of the modulated RF signal to the final output level."
    },
    {
        key: "3f.1",
        level: "intermediate",
        title: "RF power amplifiers",
        text: "Understand the concept of the efficiency of an amplifier stage and estimate expected RF output power for a given DC input power, given the stage’s efficiency."
    },
    {
        key: "3f.2",
        level: "full",
        title: "RF power amplifiers",
        text: "Understand the need for linear amplification and identify which forms of modulation require a linear amplifier."
    },
    {
        key: "3f.2",
        level: "full",
        title: "RF power amplifiers",
        text: "Identify simple RF transmitter PA circuits."
    },
    {
        key: "3f.2",
        level: "full",
        title: "RF power amplifiers",
        text: "Understand the meaning of linearity as applied to a circuit or amplifier."
    },
    {
        key: "3f.2",
        level: "full",
        title: "RF power amplifiers",
        text: "Understand how distortion of a single frequency signal can produce harmonics of that frequency."
    },
    {
        key: "3f.2",
        level: "full",
        title: "RF power amplifiers",
        text: "Understand how distortion of two (or more) frequencies can produce harmonics and intermodulation products of the input frequencies."
    },
    {
        key: "3f.3",
        level: "foundation",
        title: "RF power amplifiers",
        text: "Recall that the RF power amplifier output must be connected to a correctly matched load to work properly and that use of the wrong antenna can result in damage to the transmitter."
    },
    {
        key: "3f.3",
        level: "full",
        title: "RF power amplifiers",
        text: "Recall the function of the main components of a PA circuit, i.e.collector load, bias, input circuit, output filter and matching."
    },
    {
        key: "3f.4",
        level: "full",
        title: "RF power amplifiers",
        text: "Understand the implications for PA rating of different types of modulation and the effects of speech processing, with particular regard to peak to average power ratios."
    },
    {
        key: "3f.5",
        level: "full",
        title: "RF power amplifiers",
        text: "Recall the function of automatic level control within the power amplifier circuit and when using an external power amplifier."
    },
    {
        key: "3f.5",
        level: "full",
        title: "RF power amplifiers",
        text: "Recall the function and use of a manual RF power control."
    },
    {
        key: "3g.1",
        level: "foundation",
        title: "Transmitter interference",
        text: "Recall that excessive amplitude modulation causes distorted output and interference to adjacent channels."
    },
    {
        key: "3g.1",
        level: "foundation",
        title: "Transmitter interference",
        text: "Recall that excessive frequency deviation will cause interference to adjacent channels."
    },
    {
        key: "3g.1",
        level: "full",
        title: "Transmitter interference",
        text: "Understand that over-modulation distorts the modulating signal resulting in harmonics of the audio which causes excessive transmitted bandwidth."
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
        key: "3g.2",
        level: "full",
        title: "Transmitter interference",
        text: "Understand that over-drive of the RF power amplifier can also result in excessive transmitted bandwidth."
    },
    {
        key: "3g.2",
        level: "full",
        title: "Transmitter interference",
        text: "Understand the need to drive external power amplifiers with the minimum power required for full output and how overdriving may cause harmonics and/ or spurious intermodulation products."
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
        key: "3g.3",
        level: "full",
        title: "Transmitter interference",
        text: "Understand ways to avoid generating harmonics e.g.use of push-pull amplifiers and avoiding high drive levels."
    },
    {
        key: "3g.3",
        level: "full",
        title: "Transmitter interference",
        text: "Recall that transmitters may radiate unwanted mixer products and identify suitable remedies."
    },
    {
        key: "3g.3",
        level: "full",
        title: "Transmitter interference",
        text: "Understand the use of low pass, band pass and band stop(notch) filters in minimising the radiation of unwanted harmonics and mixer products."
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
        key: "3g.4",
        level: "full",
        title: "Transmitter interference",
        text: "Recall that unwanted emissions may be caused by parasitic oscillation and/or self-oscillation and identify suitable remedies."
    },
    {
        key: "3g.5",
        level: "intermediate",
        title: "Transmitter interference",
        text: "Recall the cause and effect of ‘chirp’ and identify suitable remedies."
    },
    {
        key: "3g.5",
        level: "full",
        title: "Transmitter interference",
        text: "Understand how frequency synthesisers may not produce the intended frequency."
    },
    {
        key: "3g.5",
        level: "full",
        title: "Transmitter interference",
        text: "Identify appropriate measures to prevent off￾frequency transmissions."
    },
    {
        key: "3h.1",
        level: "foundation",
        title: "Receiver concepts",
        text: "Recall that the function of a radio receiver is to recover information sent from one place to another using electromagnetic radiation/ wireless technology."
    },
    {
        key: "3h.1",
        level: "foundation",
        title: "Receiver concepts",
        text: "Recall that the process of recovering information from a modulated radio frequency signal is known as demodulation."
    },
    {
        key: "3h.2",
        level: "foundation",
        title: "Receiver concepts",
        text: "Identify the items in a simple receiver block diagram and recall their order of interconnection: Antenna, feeder, wanted signal selection and RF amplification, demodulation/detection, audio amplification and loudspeaker or headphones. Note: See table 2."
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
        key: "3h.3",
        level: "full",
        title: "Receiver concepts",
        text: "Understand that overloading a receiver causes intermodulation products and that those close to or within the wanted signal bandwidth limit the ability of the receiver to detect weak signals."
    },
    {
        key: "3h.3",
        level: "full",
        title: "Receiver concepts",
        text: "Recall that the dynamic range of a receiver is the difference between the minimum discernible signal and the maximum signal without overload."
    },
    {
        key: "3h.3",
        level: "full",
        title: "Receiver concepts",
        text: "Recall that dynamic range is expressed in decibels."
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
        text: "Understand the limitations of tuned circuits in selecting wanted frequencies and the effect of the Q factor (Q-factor or Quality Factor) of tuned circuits. See also section 2h.4"
    },
    {
        key: "3i.1",
        level: "intermediate",
        title: "Superheterodyne concepts",
        text: "Understand the need for and advantages of the superheterodyne architecture. Note: A diagram of the Single Conversion Superhet diagram is provided in section 4."
    },
    {
        key: "3i.1",
        level: "full",
        title: "Superheterodyne concepts",
        text: "Understand the block diagram of superheterodyne and double superheterodyne receivers and the functions of each block."
    },
    {
        key: "3i.2",
        level: "intermediate",
        title: "Superheterodyne concepts",
        text: "Recall that the intermediate frequency is the sum of or difference between the RF and local oscillator frequencies and is produced by a mixer."
    },
    {
        key: "3i.2",
        level: "full",
        title: "Superheterodyne concepts",
        text: "Understand the function of a mixer, the generation of the Intermediate Frequency(IF) and other mixer products."
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
        key: "3i.3",
        level: "full",
        title: "Superheterodyne concepts",
        text: "Understand the advantages and disadvantages of high and low intermediate frequencies and the rationale for the double and triple superhet."
    },
    {
        key: "3i.3",
        level: "full",
        title: "Superheterodyne concepts",
        text: "Understand that for given RF and IF frequencies, there is a choice of two possible local oscillator (LO) frequencies."
    },
    {
        key: "3i.3",
        level: "full",
        title: "Superheterodyne concepts",
        text: "Understand the reasons for the choice and calculate the frequencies."
    },
    {
        key: "3i.3",
        level: "full",
        title: "Superheterodyne concepts",
        text: "Understand the origin of the image frequency and calculate the frequency from given parameters."
    },
    {
        key: "3i.4",
        level: "full",
        title: "Superheterodyne concepts",
        text: "Understand the operation of an IF amplifier and the IF transformer."
    },
    {
        key: "3i.4",
        level: "full",
        title: "Superheterodyne concepts",
        text: "Understand the concept of two LC tuned circuits utilising transformer coupling."
    },
    {
        key: "3i.4",
        level: "full",
        title: "Superheterodyne concepts",
        text: "Identify critical and over-coupled response curves."
    },
    {
        key: "3i.4",
        level: "full",
        title: "Superheterodyne concepts",
        text: "Understand how the gain of an IF amplifier can be varied, how this may cause distortion and how the effects of the distortion are avoided."
    },
    {
        key: "3i.5",
        level: "full",
        title: "Superheterodyne concepts",
        text: "Recall the source and effects of phase noise."
    },
    {
        key: "3i.5",
        level: "full",
        title: "Superheterodyne concepts",
        text: "Recall the unit of measurement is dBc/Hz."
    },
    {
        key: "3j.1",
        level: "full",
        title: "RF amplifiers and external pre-amplifiers",
        text: "Recall the operation of the RF amplifier."
    },
    {
        key: "3j.1",
        level: "full",
        title: "RF amplifiers and external pre-amplifiers",
        text: "Understand that external RF preamplifiers do not always improve overall performance and will reduce the dynamic range."
    },
    {
        key: "3j.1",
        level: "full",
        title: "RF amplifiers and external pre-amplifiers",
        text: "Understand why, at HF, this loss can be as much as the gain of the preamp but that at VHF and above a low noise pre-amp is beneficial."
    },
    {
        key: "3j.1",
        level: "full",
        title: "RF amplifiers and external pre-amplifiers",
        text: "Understand why most benefit is gained by locating the pre-amp at the antenna."
    },
    {
        key: "3k.1",
        level: "foundation",
        title: "Demodulation",
        text: "Recall that the detector/demodulator stage recovers the original information from the modulated signal."
    },
    {
        key: "3k.1",
        level: "foundation",
        title: "Demodulation",
        text: "Recall that the audio amplifier ensures the recovered modulation is strong enough to drive headphones or a loudspeaker."
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
        key: "3k.1",
        level: "full",
        title: "Demodulation",
        text: "Understand the operation of basic analogue AM, CW, SSB and FM demodulator circuits and the function of the limiter for FM."
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
        key: "3l.1",
        level: "full",
        title: "Automatic gain control (AGC)",
        text: "Understand the source and use of an AGC voltage."
    },
    {
        key: "3l.1",
        level: "full",
        title: "Automatic gain control (AGC)",
        text: "Recall that the speed of the AGC response can be adjusted on both attack and decay."
    },
    {
        key: "3m.1",
        level: "foundation",
        title: "SDR transmitters and receivers",
        text: "Recall that the SDR receiver takes in all electromagnetic signals from the antenna and digitises this input for processing in software."
    },
    {
        key: "3m.1",
        level: "foundation",
        title: "SDR transmitters and receivers",
        text: "Recall that a mathematical operation enables all the signals to be sifted into separate frequency components."
    },
    {
        key: "3m.1",
        level: "foundation",
        title: "SDR transmitters and receivers",
        text: "Recall that the required signal is selected using a filter defined in software."
    },
    {
        key: "3m.1",
        level: "foundation",
        title: "SDR transmitters and receivers",
        text: "Recall that demodulation is carried out in software."
    },
    {
        key: "3m.1",
        level: "foundation",
        title: "SDR transmitters and receivers",
        text: "Recall that Software Defined Radio (SDR) receivers convert incoming signals to digital format and then perform filtering and demodulation on the signal using software and that SDR transmitters generate modulated radio signals using software."
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
        key: "3m.1",
        level: "full",
        title: "SDR transmitters and receivers",
        text: "Recall that analogue and digital signals are transmitted by some form of amplitude and/or frequency/phase modulation."
    },
    {
        key: "3m.1",
        level: "full",
        title: "SDR transmitters and receivers",
        text: "Recall that amplitude and frequency/phase modulation can be portrayed on a phasor diagram."
    },
    {
        key: "3m.1",
        level: "full",
        title: "SDR transmitters and receivers",
        text: "Understand that to fully capture the information contained in the amplitude and phase of the signal that the position of the phasors must be resolved as the values on two axes at right angles."
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
        text: "Identify for some simple harmonic waves, the spectrum obtained using the Fourier transform. (Waves composed of one or two Harmonics will be examined)."
    },
    {
        key: "3m.2",
        level: "full",
        title: "SDR transmitters and receivers",
        text: "Recall that mixing the RF or IF signal with two local oscillator signals 90 degrees different in phase will produce an in-phase(I) and quadrature(Q) component which can be digitised allowing all forms of modulation to be demodulated entirely by mathematical processes in a PC or using dedicated hardware."
    },
    {
        key: "3m.2",
        level: "full",
        title: "SDR transmitters and receivers",
        text: "Recall that this technique is the basis of SDR (software defined radio) receivers."
    },
    {
        key: "3m.2",
        level: "full",
        title: "SDR transmitters and receivers",
        text: "Recall that these techniques can also be used to create complex modulations for use in transmitters."
    },
    {
        key: "3m.2",
        level: "full",
        title: "SDR transmitters and receivers",
        text: "Recall that if sampling is carried out directly on the RF signal the extraction of I and Q components and subsequent demodulation may be carried out entirely by mathematical processes."
    },
    {
        key: "3m.3",
        level: "intermediate",
        title: "SDR transmitters and receivers",
        text: "Recall the different elements that make up the functions of an SDR(block diagram)."
    },
    {
        key: "3n.1",
        level: "full",
        title: "Transceivers",
        text: "Understand that transceivers normally share oscillators between the transmitter and receiver circuits; and they may use common IF filters to limit both the transmitter and receiver bandwidths and that they also use common changeover circuits."
    },
    {
        key: "3n.1",
        level: "full",
        title: "Transceivers",
        text: "Recall the function and use of the RIT control."
    },
    {
        key: "3n.2",
        level: "full",
        title: "Transceivers",
        text: "Understand that using a transverter enables operation on frequency bands not covered by the primary transceiver equipment."
    },
    {
        key: "3n.2",
        level: "full",
        title: "Transceivers",
        text: "Calculate appropriate frequencies used in transverter operation."
    },
    {
        key: "3n.2",
        level: "full",
        title: "Transceivers",
        text: "Recall that transverters generally require low power drive."
    },
    {
        key: "3n.2",
        level: "full",
        title: "Transceivers",
        text: "Understand the need for extra care to avoid transmitting out of band when using a transverter."
    },
    {
        key: "3n.2",
        level: "full",
        title: "Transceivers",
        text: "Recall that transverters require the correct interfacing with the primary equipment to control sequencing and prevent hot switching."
    },
    {
        key: "3n.2",
        level: "full",
        title: "Transceivers",
        text: "Understand the techniques of RF sensing and PTT (push-to-talk) transmit receive switching."
    },
    {
        key: "4a.1",
        level: "foundation",
        title: "Feeders",
        text: "Recall the correct cable types to use for RF signals and that coaxial cable is most widely used because of its screening properties."
    },
    {
        key: "4a.1",
        level: "foundation",
        title: "Feeders",
        text: "Identify Twin Feeder & Coaxial as types of feeder."
    },
    {
        key: "4a.1",
        level: "foundation",
        title: "Feeders",
        text: "Understand that twin feeder is balanced having equal and opposite signals in the two wires."
    },
    {
        key: "4a.1",
        level: "foundation",
        title: "Feeders",
        text: "Understand that coaxial feeder is unbalanced with the signal on the centre conductor surrounded by a screen."
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
        level: "foundation",
        title: "Feeders",
        text: "Recall that some RF energy is converted to heat in feeders so they exhibit loss."
    },
    {
        key: "4a.2",
        level: "foundation",
        title: "Feeders",
        text: "Recall that feeders cause loss of signal strength on both transmit and receive; the longer the cable, the greater the loss."
    },
    {
        key: "4a.2",
        level: "foundation",
        title: "Feeders",
        text: "Recall that feeder loss increases with frequency and that low loss feeders (lowest dB per unit length) should be used at VHF and UHF."
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
        key: "4a.3",
        level: "full",
        title: "Feeders",
        text: "Understand that the velocity factor of a feeder is the ratio of the velocity of radio waves in the feeder to that in free space and that the velocity factor is always less than unity."
    },
    {
        key: "4a.3",
        level: "full",
        title: "Feeders",
        text: "Recall that the velocity factor for coaxial feeder with a solid polythene dielectric is approximately 0.67 or 2/3."
    },
    {
        key: "4a.3",
        level: "full",
        title: "Feeders",
        text: "Perform calculations involving velocity factor, physical length, electrical length and frequency."
    },
    {
        key: "4b.1",
        level: "foundation",
        title: "Baluns",
        text: "Recall the difference between balanced and unbalanced antennas and that a balun should be used when feeding a dipole with coaxial cable (which is unbalanced)."
    },
    {
        key: "4b.1",
        level: "intermediate",
        title: "Baluns",
        text: "Recall the construction and use of choke type baluns."
    },
    {
        key: "4b.1",
        level: "full",
        title: "Baluns",
        text: "Recall the construction and use of transformer, sleeve and choke type baluns."
    },
    {
        key: "4b.1",
        level: "full",
        title: "Baluns",
        text: "Identify the circuits of 1:1 and 4:1 transformer baluns."
    },
    {
        key: "4c.1",
        level: "foundation",
        title: "Antenna concepts",
        text: "Recall that the purpose of an antenna is to convert electrical signals into radio waves (and vice-versa) and that these are polarised according to the orientation of the antenna, e.g. a horizontally oriented antenna will radiate horizontally polarised waves."
    },
    {
        key: "4c.2",
        level: "foundation",
        title: "Antenna concepts",
        text: "Understand the concept of an antenna radiation pattern."
    },
    {
        key: "4c.2",
        level: "foundation",
        title: "Antenna concepts",
        text: "Identify the polar diagrams for the half wave dipole and Yagi antennas and identify the directions of maximum and minimum radiation."
    },
    {
        key: "4c.2",
        level: "foundation",
        title: "Antenna concepts",
        text: "Understand that half-wave dipoles (mounted vertically), λ / 4(quarter wavelength) ground planes and 5 / 8 λ antennas are omni￾directional. Note: only dipole and Yagi antennas will be examined for radiation pattern."
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
        key: "4c.3",
        level: "foundation",
        title: "Antenna concepts",
        text: "Understand that antenna gain is due to its ability to focus radiation in a particular direction."
    },
    {
        key: "4c.3",
        level: "foundation",
        title: "Antenna concepts",
        text: "Recall that a Yagi antenna typically has a higher gain because of its improved focussing ability."
    },
    {
        key: "4c.3",
        level: "foundation",
        title: "Antenna concepts",
        text: "Recall the gain of an antenna is normally expressed relative to a half- wave dipole and measured in dB(Higher dB value is a higher gain)."
    },
    {
        key: "4c.3",
        level: "foundation",
        title: "Antenna concepts",
        text: "Recall that the directional power is expressed as Effective Radiated Power (ERP) and that the apparent power increase is known as gain."
    },
    {
        key: "4c.3",
        level: "foundation",
        title: "Antenna concepts",
        text: "Recall that ERP is calculated by multiplying the power applied to the antenna feed point by the gain of the antenna."
    },
    {
        key: "4c.3",
        level: "foundation",
        title: "Antenna concepts",
        text: "Calculate ERP given antenna input power and antenna gain. Note: dB conversion table(3, 6 & 10) will be provided."
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
        key: "4d.1",
        level: "full",
        title: "Types of antenna",
        text: "Recall the equation for calculating wavelengths and apply an end factor correction when calculating the approximate physical lengths of simple dipoles and end fed antennas."
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
        key: "4d.2",
        level: "full",
        title: "Types of antenna",
        text: "Recall the current and voltage distribution on the centre fed dipole and λ/ 4 ground plane antennas."
    },
    {
        key: "4d.2",
        level: "full",
        title: "Types of antenna",
        text: "Recall the feed point impedances of centre fed half-wave dipoles, quarter-wave and loaded 5 / 8λ verticals, folded dipoles, full - wave loops and end feed λ / 4 and λ / 2 antennas."
    },
    {
        key: "4d.2",
        level: "full",
        title: "Types of antenna",
        text: "Recall the effect of passive antenna elements on feed point impedance and the use of folded dipoles in Yagi antennas."
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
        key: "4e.1",
        level: "full",
        title: "Standing waves",
        text: "Understand that the standing wave ratio (SWR) is a measure of the signal travelling back down the feeder expressed in terms of the standing waves caused by the reflected signal voltage (or current)."
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
        key: "4e.2",
        level: "full",
        title: "Standing waves",
        text: "Recall that return loss is the ratio of the forward signal power to the return signal power normally expressed in dB."
    },
    {
        key: "4e.2",
        level: "full",
        title: "Standing waves",
        text: "Understand that a low SWR equates to a high return loss and a high SWR equates to a low return loss."
    },
    {
        key: "4e.3",
        level: "full",
        title: "Standing waves",
        text: "Understand that the loss in the feeder will reduce the SWR and increase the return loss as measured at the transmitter and that the SWR at the antenna is unaffected."
    },
    {
        key: "4e.3",
        level: "full",
        title: "Standing waves",
        text: "Recall that Return Loss at transmitter = Return Loss at antenna + 2x(feeder loss)."
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
        key: "4f.1",
        level: "full",
        title: "Antenna matching units",
        text: "Understand that Antenna Matching Units (AMUs) can cancel reactive components of the antenna system feed point impedance (before or after the feeder) and can transform impedances to an acceptable resistive value."
    },
    {
        key: "4f.1",
        level: "full",
        title: "Antenna matching units",
        text: "Identify typical AMU circuits i.e. T, Pi and L circuits."
    },
    {
        key: "4f.2",
        level: "full",
        title: "Antenna matching units",
        text: "Understand that a quarter-wave length of feeder can be used as an impedance transformer."
    },
    {
        key: "4f.2",
        level: "full",
        title: "Antenna matching units",
        text: "Apply simple examples of the formula Zo**2 = Zin × Zout"
    },
    {
        key: "4g.1",
        level: "foundation",
        title: "Plugs and sockets",
        text: "Recall that the plugs and sockets for RF should be of the correct type and that the braid of coaxial cable must be correctly connected to minimise RF signals getting into or out of the cable."
    },
    {
        key: "4g.1",
        level: "foundation",
        title: "Plugs and sockets",
        text: "Identify BNC, N, SMA and PL259 plugs as shown in Table 2."
    },
    {
        key: "4g.1",
        level: "intermediate",
        title: "Plugs and sockets",
        text: "Recall that in a correctly connected and terminated coaxial cable the RF field only exists within the cable and is not affected by objects outside the cable. Note that correctly connected means screen and inner conductor continuity through any plug and socket."
    },
    {
        key: "5a.1",
        level: "foundation",
        title: "Radio propagation: key concepts",
        text: "Recall that radio waves normally travel in straight lines."
    },
    {
        key: "5a.1",
        level: "foundation",
        title: "Radio propagation: key concepts",
        text: "Recall that they can be refracted, diffracted and reflected."
    },
    {
        key: "5a.1",
        level: "foundation",
        title: "Radio propagation: key concepts",
        text: "Recall that radio waves get weaker as they spread out."
    },
    {
        key: "5a.1",
        level: "full",
        title: "Radio propagation: key concepts",
        text: "Recall that under free space conditions e-m waves spread out according to an inverse square law of power flux density and that the electric field strength, measured in volts/ metre, drops linearly with distance. Note: Numerical calculations required at item 6E1 only"
    },
    {
        key: "5a.2",
        level: "foundation",
        title: "Radio propagation: key concepts",
        text: "Recall that VHF and UHF signals normally pass through the ionosphere and at these frequencies propagation is within the troposphere situated below the ionosphere."
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
        key: "5a.3",
        level: "full",
        title: "Radio propagation: key concepts",
        text: "Recall that an e-m wave comprises E and H fields in phase, at right angles and at right angles to the direction of travel and the power flux density (watts / Metre squared) is given by the product of E and H."
    },
    {
        key: "5a.3",
        level: "full",
        title: "Radio propagation: key concepts",
        text: "Recall that in circular polarisation, the polarisation of the wave rotates as it propagates, with either a right- handed (clockwise from behind) or left - handed polarisation."
    },
    {
        key: "5a.3",
        level: "full",
        title: "Radio propagation: key concepts",
        text: "Recall that this is often used for satellite communication where the orientation of the satellite is indeterminate."
    },
    {
        key: "5a.3",
        level: "full",
        title: "Radio propagation: key concepts",
        text: "Recall that the transmit and receive antennas should have the same polarisation."
    },
    {
        key: "5b.1",
        level: "foundation",
        title: "Ionosphere",
        text: "Recall that the ionosphere comprises layers of ionised gases at heights between 70 and 400km above the earth."
    },
    {
        key: "5b.1",
        level: "foundation",
        title: "Ionosphere",
        text: "Understand that ionisation is caused mainly by ultraviolet rays from the sun."
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
        key: "5b.1",
        level: "full",
        title: "Ionosphere",
        text: "Understand the effects of Solar flares and sun spots on propagation."
    },
    {
        key: "5b.2",
        level: "foundation",
        title: "Ionosphere",
        text: "Recall that on HF most communication relies on the waves being refracted in the ionosphere."
    },
    {
        key: "5b.2",
        level: "foundation",
        title: "Ionosphere",
        text: "Recall that HF can provide world-wide propagation depending on how well the ionosphere refracts the waves back to the earth."
    },
    {
        key: "5b.2",
        level: "foundation",
        title: "Ionosphere",
        text: "Recall that this varies with frequency, time of day, season and solar activity."
    },
    {
        key: "5b.2",
        level: "foundation",
        title: "Ionosphere",
        text: "Recall that a band is said to be ‘open’ when it supports skywave propagation."
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
        key: "5b.2",
        level: "full",
        title: "Ionosphere",
        text: "Recall that the highest frequency that will be refracted back to the transmitter is known as the Critical Frequency of Vertical Incidence (critical frequency)."
    },
    {
        key: "5b.2",
        level: "full",
        title: "Ionosphere",
        text: "Recall that the maximum usable frequency (MUF) will be higher than the critical frequency."
    },
    {
        key: "5b.2",
        level: "full",
        title: "Ionosphere",
        text: "Recall, in general terms how the MUF varies over the 24 hour cycle and the variation in MUF from summer to winter."
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
        key: "5b.3",
        level: "full",
        title: "Ionosphere",
        text: "Recall that propagation where the signals are reflected vertically back from the ionosphere is known as Near Vertical Incidence Sky wave (NVIS)."
    },
    {
        key: "5b.3",
        level: "full",
        title: "Ionosphere",
        text: "Recall that NVIS is a technique employed on some low frequency bands(e.g. 5MHz) to make contacts over relatively short distances."
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
        key: "5b.4",
        level: "full",
        title: "Ionosphere",
        text: "Recall that the ionosphere can change the polarisation of a radio wave."
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
        key: "5c.1",
        level: "foundation",
        title: "VHF and above",
        text: "Recall that hills cause radio shadows and that signals become weaker as they penetrate buildings."
    },
    {
        key: "5c.1",
        level: "foundation",
        title: "VHF and above",
        text: "Recall that at VHF/UHF, range decreases as frequency increases and that in general VHF/ UHF waves have a range not much beyond line of sight."
    },
    {
        key: "5c.1",
        level: "foundation",
        title: "VHF and above",
        text: "Recall that sporadic E and atmospheric ducting can increase the range of VHF and UHF signals."
    },
    {
        key: "5c.2",
        level: "foundation",
        title: "VHF and above",
        text: "Recall that falling snow, hailstones and heavy rain can attenuate signals at UHF and above."
    },
    {
        key: "5c.3",
        level: "foundation",
        title: "VHF and above",
        text: "Recall that the range achieved at VHF/UHF is dependent on antenna height, antenna gain, a clear path and transmitter power."
    },
    {
        key: "5c.3",
        level: "foundation",
        title: "VHF and above",
        text: "Understand that higher antennas are preferable to higher power as they improve both transmit and receive performance."
    },
    {
        key: "5c.3",
        level: "foundation",
        title: "VHF and above",
        text: "Recall that outdoor antennas will perform better than indoor antennas."
    },
    {
        key: "5c.3",
        level: "intermediate",
        title: "VHF and above",
        text: "Recall that at VHF and above, multipath propagation can occur where signals are reflected off objects(such as a buildings or aircraft) and the reflected signal is received in addition to the direct, un-reflected, signal."
    },
    {
        key: "5c.3",
        level: "full",
        title: "VHF and above",
        text: "Recall that contacts at VHF and above can be made by reflecting signals off the lunar surface and that this is known as Earth- Moon - Earth (EME) propagation."
    },
    {
        key: "5c.3",
        level: "full",
        title: "VHF and above",
        text: "Understand that as the moon is a poor reflector of radio frequency signals and is a long way from earth, EME contacts generally need high power and high gain antennas accurately pointed at the moon, and very sensitive, low noise receivers or the use of special low- signal strength modes to overcome the path loss."
    },
    {
        key: "5c.3",
        level: "full",
        title: "VHF and above",
        text: "Recall that it is possible to make contacts on the VHF bands by reflecting signals off the ionised gases created during an Aurora and that this occurs at high Northerly and Southerly latitudes and that this is known as Auroral propagation."
    },
    {
        key: "5c.3",
        level: "full",
        title: "VHF and above",
        text: "Recall that auroral ionised curtains form vertically in the ionosphere and that movement of these curtains cause rapid flutter on the signals."
    },
    {
        key: "5d.1",
        level: "full",
        title: "Other features",
        text: "Recall the Galactic Noise is random noise originating outside the earth’s atmosphere."
    },
    {
        key: "5d.2",
        level: "full",
        title: "Other features",
        text: "Recall the factors affecting a link budget,transmitter power, feeder losses, antenna gains and path loss."
    },
    {
        key: "5d.2",
        level: "full",
        title: "Other features",
        text: "Recall that path loss includes spreading loss and obstruction losses."
    },
    {
        key: "6a.1",
        level: "foundation",
        title: "EMC concepts",
        text: "Recall that electromagnetic compatibility (EMC) is the avoidance of interference between various pieces of electronic equipment."
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
        level: "foundation",
        title: "EMC concepts",
        text: "Recall that the ability of any piece of electronic or radio equipment to function correctly in the presence of strong RF signals is known as immunity."
    },
    {
        key: "6a.2",
        level: "intermediate",
        title: "EMC concepts",
        text: "Recall that the immunity of a device can often be improved by screening and filtering power, signal and control leads."
    },
    {
        key: "6a.2",
        level: "full",
        title: "EMC concepts",
        text: "Understand that the immunity of a device is affected by the nature of its installation and that poor installation of an otherwise good item of equipment can compromise its safe and compliant operation."
    },
    {
        key: "6a.3",
        level: "foundation",
        title: "EMC concepts",
        text: "Recall that radio transmitters can cause interference to nearby electronic and radio equipment."
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
        level: "foundation",
        title: "EMC concepts",
        text: "Recall that radio receivers can also suffer from interference from local and other sources."
    },
    {
        key: "6a.4",
        level: "intermediate",
        title: "EMC concepts",
        text: "Understand that new electronic equipment should meet the British Standards Institute immunity requirements but that existing equipment and poorly installed equipment may not."
    },
    {
        key: "6a.4",
        level: "full",
        title: "EMC concepts",
        text: "Recall that radio amateurs are not required to demonstrate compliance with EMC standards for equipment they put into service but remain responsible for complying with licence requirements regarding interference."
    },
    {
        key: "6b.1",
        level: "foundation",
        title: "Sources of interference and their effects",
        text: "Recall that the more power a station runs, the more likely it is to cause interference."
    },
    {
        key: "6b.1",
        level: "foundation",
        title: "Sources of interference and their effects",
        text: "Recall that some types of transmission are more likely to cause interference to TV, Radio and telephones than others."
    },
    {
        key: "6b.1",
        level: "foundation",
        title: "Sources of interference and their effects",
        text: "Recall that AM and SSB modes are the most likely to cause problems, FM and some of the HF data modes are least likely to cause problems."
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
        key: "6b.1",
        level: "full",
        title: "Sources of interference and their effects",
        text: "Recall that some imported or home constructed electronic equipment may not meet relevant EMC standards."
    },
    {
        key: "6b.1",
        level: "full",
        title: "Sources of interference and their effects",
        text: "Recall that items containing radio communication facilities such as cordless and mobile telephones and information technology communication equipment may produce sufficiently strong signals to cause short range interference but are otherwise generally satisfactory."
    },
    {
        key: "6b.1",
        level: "full",
        title: "Sources of interference and their effects",
        text: "Recall that imported devices and toys may not be compliant with the relevant regulations."
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
        key: "6b.2",
        level: "full",
        title: "Sources of interference and their effects",
        text: "Understand that Blocking (or desensitisation) is an effect in a radio receiver where a strong, constant level interfering signal e.g.FM either swamps the wanted signal or drives the affected circuits out of their normal operating range such that the received audio or data is severely attenuated or muted."
    },
    {
        key: "6b.2",
        level: "full",
        title: "Sources of interference and their effects",
        text: "Understand that Cross-modulation is an effect in a radio receiver where the interfering signal is varying in strength e.g.AM or SSB such that the modulation on the interfering signal is added to the modulation on the wanted signal such that both may be heard with varying clarity."
    },
    {
        key: "6b.3",
        level: "intermediate",
        title: "Sources of interference and their effects",
        text: "Recall that interference to Digital Audio Broadcasting (DAB) may cause loss of signal (muted audio) and to digital televisions may cause the picture to freeze, appear to pixelate that is break up into larger squares, become jerky or disappear."
    },
    {
        key: "6b.3",
        level: "full",
        title: "Sources of interference and their effects",
        text: "Recall that passive intermodulation products can be caused by corrosion in any metallic junctions in metalwork, including transmitting and receiving antennas, supports and guttering."
    },
    {
        key: "6c.1",
        level: "foundation",
        title: "Routes of entry",
        text: "Recall that interference occurs through local radio transmissions being conveyed to the affected equipment through pick up in house wiring, TV antenna down- leads, telephone wiring etc and particularly at VHF / UHF by direct pick - up in the internal circuits of the affected equipment."
    },
    {
        key: "6c.1",
        level: "intermediate",
        title: "Routes of entry",
        text: "Recall that direct pick up in affected devices tends to be independent of a specific frequency within a band although differences may be noticed between different bands."
    },
    {
        key: "6c.1",
        level: "intermediate",
        title: "Routes of entry",
        text: "Recall that direct pickup is especially an issue in the VHF/UHF bands."
    },
    {
        key: "6c.1",
        level: "full",
        title: "Routes of entry",
        text: "Recall that amateur transmissions can enter audio stages via long speaker leads or other interconnections."
    },
    {
        key: "6c.1",
        level: "full",
        title: "Routes of entry",
        text: "Understand that any semiconductor or diode junction within an electronic device can rectify unwanted RF."
    },
    {
        key: "6c.2",
        level: "intermediate",
        title: "Routes of entry",
        text: "Understand that some masthead and down lead TV amplifiers are broadband, amplifying a wide range of frequencies, including amateur frequencies."
    },
    {
        key: "6c.2",
        level: "intermediate",
        title: "Routes of entry",
        text: "Understand that this can result in overloading of the amplifier and/ or the TV input."
    },
    {
        key: "6c.2",
        level: "full",
        title: "Routes of entry",
        text: "Understand that many TV mast-head amplifiers are wide band devices and can suffer from cross- modulation and overload causing intermodulation, blocking and may also overload the TV."
    },
    {
        key: "6c.3",
        level: "full",
        title: "Routes of entry",
        text: "Understand that amateur transmissions can be picked up by the intermediate frequency stages of TV and radio receivers."
    },
    {
        key: "6c.3",
        level: "full",
        title: "Routes of entry",
        text: "Understand the potential for image frequency interference to analogue and digital radio."
    },
    {
        key: "6c.3",
        level: "full",
        title: "Routes of entry",
        text: "Understand that television receivers and most broadcast radio receivers employ superheterodyne circuits and recall some typical frequencies used in radio and television receivers: (1) Medium Wave radio broadcast 526 - 1606kHz (2) VHF FM radio broadcast 87.5 - 108MHz(3) VHF DAB radio broadcast 174 - 230MHz (4) TV broadcast 470 - 694MHz (5) Radio IFs typically 455 - 500kHz and 10.7MHz. Note: Current design digital TV receivers use a variety of Intermediate frequencies between 4 and 39MHz."
    },
    {
        key: "6d.1",
        level: "foundation",
        title: "Filtering and remedial measures",
        text: "Recall that the immunity of most types of equipment can be increased by fitting suitable external chokes and filters in mains or antenna leads."
    },
    {
        key: "6d.1",
        level: "foundation",
        title: "Filtering and remedial measures",
        text: "Recall that the filters should be fitted as close to the affected device as possible."
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
        key: "6d.1",
        level: "full",
        title: "Filtering and remedial measures",
        text: "Understand the use of high, low, band pass and band stop(notch) filters of L, T and π configuration including coaxial stubs as notch filters or traps, in improving the immunity of affected devices."
    },
    {
        key: "6d.1",
        level: "full",
        title: "Filtering and remedial measures",
        text: "Recall the use of ferrite beads or rings in internal and external filtering."
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
        key: "6d.2",
        level: "full",
        title: "Filtering and remedial measures",
        text: "Understand the construction and use of a typical mains filter."
    },
    {
        key: "6d.2",
        level: "full",
        title: "Filtering and remedial measures",
        text: "Identify a typical circuit of a braid breaking filter and a combined high pass/ braid breaking filter."
    },
    {
        key: "6d.2",
        level: "full",
        title: "Filtering and remedial measures",
        text: "Understand their use."
    },
    {
        key: "6d.2",
        level: "full",
        title: "Filtering and remedial measures",
        text: "Understand why a ferrite ring will attenuate common-mode currents without affecting the differential-mode wanted signal."
    },
    {
        key: "6d.3",
        level: "intermediate",
        title: "Filtering and remedial measures",
        text: "Recall how to use a suitable general coverage receiver to check for spurious and harmonic emissions from the station."
    },
    {
        key: "6d.4",
        level: "foundation",
        title: "Filtering and remedial measures",
        text: "Recall that transmitting into a dummy load is a good test for any unwanted RF being conducted out of the transmitter along its power supply leads and any connected interface leads and into the mains."
    },
    {
        key: "6d.4",
        level: "foundation",
        title: "Filtering and remedial measures",
        text: "Recall that a dummy load is a screened resistor of the correct value and a suitable power rating connected instead of an antenna to allow the transmitter to be operated without radiating a signal."
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
        level: "foundation",
        title: "Station design and antenna placement/general principles",
        text: "Recall that EMC problems can be minimised by siting antennas as far away from houses as possible, as high as possible, and using balanced antennas at HF."
    },
    {
        key: "6e.1",
        level: "foundation",
        title: "Station design and antenna placement/general principles",
        text: "Recall that, at HF, horizontal dipoles are less likely to be a problem and that end- fed wires can present significant EMC problems."
    },
    {
        key: "6e.1",
        level: "foundation",
        title: "Station design and antenna placement/general principles",
        text: "Recall that information on avoiding interference can be obtained from the RSGB's EMC team and experienced local amateur radio club members."
    },
    {
        key: "6e.1",
        level: "intermediate",
        title: "Station design and antenna placement/general principles",
        text: "Recall how to interconnect the transmitter, microphone, power supply, SWR meter and band or low pass filters, using appropriate cables, to minimise EMC problems."
    },
    {
        key: "6e.1",
        level: "full",
        title: "Station design and antenna placement/general principles",
        text: "Recall that reducing field strength to the minimum required for effective communication is good radio housekeeping."
    },
    {
        key: "6e.1",
        level: "full",
        title: "Station design and antenna placement/general principles",
        text: "Apply the formula for the field strength surrounding an antenna given the ERP and distance from it."
    },
    {
        key: "6e.2",
        level: "foundation",
        title: "Station design and antenna placement/general principles",
        text: "Recall that the function of the RF earth connection in an amateur station is to provide a path to ground to minimise RF currents entering the mains earth system and causing interference to other electronic equipment."
    },
    {
        key: "6e.2",
        level: "intermediate",
        title: "Station design and antenna placement/general principles",
        text: "Recall what constitutes a good RF earth, its purpose and use."
    },
    {
        key: "6e.2",
        level: "full",
        title: "Station design and antenna placement/general principles",
        text: "Understand good RF grounding and bonding techniques."
    },
    {
        key: "6e.2",
        level: "full",
        title: "Station design and antenna placement/general principles",
        text: "Understand the effects of inadequate RF grounding and bonding."
    },
    {
        key: "6e.3",
        level: "intermediate",
        title: "Station design and antenna placement/general principles",
        text: "Understand that siting a transmitting antenna close to mains wiring, TV or radio antennas and down-leads is a potential problem exacerbated by the use of a loft or indoor transmitting antenna."
    },
    {
        key: "6e.3",
        level: "full",
        title: "Station design and antenna placement/general principles",
        text: "Recall that balanced antenna systems tend to cause fewer EMC problems than unbalanced antennas."
    },
    {
        key: "6e.3",
        level: "full",
        title: "Station design and antenna placement/general principles",
        text: "Recall that balanced and unbalanced feeders should leave the antenna at right-angles to minimise coupling."
    },
    {
        key: "6f.1",
        level: "foundation",
        title: "Station design and antenna placement/mobile installations ",
        text: "Recall that it is the vehicle owner's responsibility to ensure that any radio installation is compatible with the vehicles electrical and management systems and does not affect vehicle safety."
    },
    {
        key: "6f.1",
        level: "foundation",
        title: "Station design and antenna placement/mobile installations ",
        text: "Recall that the fact of the installation may have to be disclosed to the vehicle insurers."
    },
    {
        key: "6f.1",
        level: "foundation",
        title: "Station design and antenna placement/mobile installations ",
        text: "Recall that professional advice should be sought for all vehicle installations."
    },
    {
        key: "6f.1",
        level: "full",
        title: "Station design and antenna placement/mobile installations ",
        text: "Recall that advice on mobile installations is the Federation of Communication Services UK Code of Practice for the installation of mobile radio and related ancillary equipment in land based vehicles."
    },
    {
        key: "6f.2",
        level: "foundation",
        title: "Station design and antenna placement/mobile installations ",
        text: "Recall that any tests following mobile radio equipment installation should be done with the vehicle stationary with all vehicle electronic systems operating before any on- road tests are carried out."
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
        key: "6f.2",
        level: "full",
        title: "Station design and antenna placement/mobile installations ",
        text: "Understand how to minimise the likelihood of stray RF currents entering the vehicle wiring and electronics."
    },
    {
        key: "6f.3",
        level: "foundation",
        title: "Station design and antenna placement/mobile installations ",
        text: "Recall that vehicle ignition and battery charging systems can cause electrical interference to reception on mobile radio equipment."
    },
    {
        key: "6f.3",
        level: "intermediate",
        title: "Station design and antenna placement/mobile installations ",
        text: "Understand that mobile antenna location can affect the radiation field strength within the vehicle; e.g.wing or boot mounted antennas are likely to produce higher exposures than roof mounted antennas."
    },
    {
        key: "6g.1",
        level: "foundation",
        title: "Social aspects and testing",
        text: "Recall that EMC problems have the potential for causing neighbour disputes."
    },
    {
        key: "6g.1",
        level: "foundation",
        title: "Social aspects and testing",
        text: "Recall that the RSGB produce EMC and Interference information leaflets."
    },
    {
        key: "6g.1",
        level: "foundation",
        title: "Social aspects and testing",
        text: "Recall that advice is available from the RSGB EMC Committee and recall the role Ofcom in dealing with cases of interference."
    },
    {
        key: "6g.1",
        level: "full",
        title: "Social aspects and testing",
        text: "Recall the correct procedures for dealing with complaints of electromagnetic disturbance caused by amateur transmissions."
    },
    {
        key: "6g.2",
        level: "foundation",
        title: "Social aspects and testing",
        text: "Understand that the station log will be of considerable assistance in dealing with complaints of interference, and that this is a good reason to keep a log of all transmissions."
    },
    {
        key: "6g.2",
        level: "foundation",
        title: "Social aspects and testing",
        text: "Understand the merits of both the amateur and the complainant keeping a log of the instances of interference."
    },
    {
        key: "6g.2",
        level: "foundation",
        title: "Social aspects and testing",
        text: "Understand the merit of conducting tests in cooperation with the complainant in instances of interference."
    },
    {
        key: "7a.1",
        level: "foundation",
        title: "Good operating practices and procedures ",
        text: "Understand why one should listen on a frequency before calling and then ask if the frequency is in use."
    },
    {
        key: "7a.1",
        level: "full",
        title: "Good operating practices and procedures ",
        text: "Understand the reasons why some stations may use split Tx and Rx frequencies within a frequency band."
    },
    {
        key: "7a.2",
        level: "foundation",
        title: "Good operating practices and procedures ",
        text: "Recall how to make a CQ call in SSB and FM modes."
    },
    {
        key: "7a.3",
        level: "foundation",
        title: "Good operating practices and procedures ",
        text: "Understand the need to move off the calling channel when on VHF/ UHF once contact is established."
    },
    {
        key: "7a.3",
        level: "foundation",
        title: "Good operating practices and procedures ",
        text: "Understand the meaning of Centre of Activity."
    },
    {
        key: "7a.3",
        level: "intermediate",
        title: "Good operating practices and procedures ",
        text: "Recall common international call sign prefixes; EI(Eire), F(France), I(Italy), JA(Japan), PA(Netherlands), VE(Canada), VK(Australia), W(USA), ZL(New Zealand)."
    },
    {
        key: "7a.4",
        level: "foundation",
        title: "Good operating practices and procedures ",
        text: "Recall the meaning of the optional suffixes /A, /P, /M and /MM."
    },
    {
        key: "7a.5",
        level: "foundation",
        title: "Good operating practices and procedures ",
        text: "Recall the phonetic alphabet. "
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
        key: "7a.6",
        level: "foundation",
        title: "Good operating practices and procedures ",
        text: "Understand the advisability and common practice of keeping a log."
    },
    {
        key: "7a.6",
        level: "foundation",
        title: "Good operating practices and procedures ",
        text: "Understand why UTC is used for logging time. "
    },
    {
        key: "7a.6",
        level: "foundation",
        title: "Good operating practices and procedures ",
        text: "Recall that a log should detail the following information: date, time, mode, call sign of station worked for QSL and contest purposes."
    },
    {
        key: "7a.7",
        level: "foundation",
        title: "Good operating practices and procedures ",
        text: "Understand that the transmission of music and the use of offensive or threatening language whilst on the air are unacceptable in amateur radio."
    },
    {
        key: "7a.7",
        level: "foundation",
        title: "Good operating practices and procedures ",
        text: "Understand how to respond to music or inappropriate language overheard or received from other stations."
    },
    {
        key: "7a.8",
        level: "foundation",
        title: "Good operating practices and procedures ",
        text: "Understand the need to conduct tests from time to time to ensure that the station is not causing Undue Interference to other radio users."
    },
    {
        key: "7a.6",
        level: "full",
        title: "Good operating practices and procedures ",
        text: "Recall the advisability to carry out tests to ensure that the station is not causing undue interference to other radio users."
    },
    {
        key: "7b.1",
        level: "foundation",
        title: "Band plans",
        text: "Recall why band plans are used. "
    },
    {
        key: "7b.1",
        level: "foundation",
        title: "Band plans",
        text: "Identify items on a typical band plan (e.g. calling frequencies and recommended modes)."
    },
    {
        key: "7b.1",
        level: "foundation",
        title: "Band plans",
        text: "Recall that narrow band modes are at the lower end of most bands."
    },
    {
        key: "7b.1",
        level: "foundation",
        title: "Band plans",
        text: "Recall that lower sideband operation normally occurs below 10MHz and upper sideband above 10MHz."
    },
    {
        key: "7b.1",
        level: "foundation",
        title: "Band plans",
        text: "Recall that transmissions on frequencies shown in the band plans for beacons should be avoided. Note: For the purposes of the examination narrow modes are CW and data. A copy of the relevant band plans will be available during the examination but may not be ones in current use. Reference Booklets containing examination band plans are available on the RSGB web site."
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
        key: "7b.1",
        level: "full",
        title: "Band plans",
        text: "Identify items on a typical band-plan (e.g. centre of activity, band width and recommended modes). Note: Questions will be limited to the 5MHz (60m) and 472kHz (600m) bands. A copy of the relevant band plans will be available during the examination but may not be ones in current use. Reference Booklets containing examination band plans are available on the RSGB web site"
    },
    {
        key: "7b.2",
        level: "foundation",
        title: "Band plans",
        text: "Recall that frequency bands are allocated for particular use, e.g.broadcasting, aeronautical, maritime and amateur."
    },
    {
        key: "7b.2",
        level: "foundation",
        title: "Band plans",
        text: "Recall the frequency bands for HF, VHF, and UHF radio signals."
    },
    {
        key: "7b.2",
        level: "foundation",
        title: "Band plans",
        text: "Recall that some amateur bands are shared with or adjacent to other spectrum users."
    },
    {
        key: "7b.2",
        level: "foundation",
        title: "Band plans",
        text: "Identify items on a provided chart of spectrum users."
    },
    {
        key: "7b.2",
        level: "full",
        title: "Band plans",
        text: "Recall that band plans in other countries and IARU regions may not align with the UK band plan."
    },
    {
        key: "7c.1",
        level: "foundation",
        title: "Repeaters",
        text: "Recall that repeaters are mainly intended to extend the range of mobile stations."
    },
    {
        key: "7c.1",
        level: "foundation",
        title: "Repeaters",
        text: "Recall why a frequency offset between transmit and receive is needed."
    },
    {
        key: "7c.1",
        level: "foundation",
        title: "Repeaters",
        text: "Recall why a CTCSS tone is needed to access a repeater and why different repeaters may have different tones."
    },
    {
        key: "7c.1",
        level: "foundation",
        title: "Repeaters",
        text: "Recall why repeaters may have a ‘reset’ tone and a time-out facility."
    },
    {
        key: "7c.1",
        level: "foundation",
        title: "Repeaters",
        text: "Recall that simplex operation on repeater frequencies should not take place. Note: Questions may ask why particular facilities (such as frequency offset) exist, what operational issue they address or how they should be used to establish or maintain a contact."
    },
    {
        key: "7c.2",
        level: "foundation",
        title: "Repeaters",
        text: "Recall that users of analogue FM and Digital Voice(DV) should first check that the channel is not in use by other modes."
    },
    {
        key: "7c.2",
        level: "foundation",
        title: "Repeaters",
        text: "Recall that such checks are not 100% reliable."
    },
    {
        key: "7d.1",
        level: "foundation",
        title: "Connecting input devices to transmitters",
        text: "Recall that connecting anything other than the supplied microphone to the transmitter requires correct operation of the PTT line and that the audio signal levels are correct."
    },
    {
        key: "7e.1",
        level: "intermediate",
        title: "Codes and abbreviations",
        text: "Recall the meaning and the reason for use of the Q codes: QRM, QRN, QRO, QRP, QRT, QSB, QSL, QSO, QSY, QTH."
    },
    {
        key: "7e.2",
        level: "foundation",
        title: "Codes and abbreviations",
        text: "Recall the meaning of the RST code, the number of divisions of each of the three items, and their order of merit"
    },
    {
        key: "7f.1",
        level: "foundation",
        title: "Digital interfaces",
        text: "Recall that there are Digital Voice (DV) and Digital Data(DD) modes available and that different systems may not be compatible."
    },
    {
        key: "7f.1",
        level: "foundation",
        title: "Digital interfaces",
        text: "Recall that appropriate radio equipment is needed for each of these digital systems."
    },
    {
        key: "7f.1",
        level: "foundation",
        title: "Digital interfaces",
        text: "Recall that DV radios may embed the call sign in the transmission and this will need to be adjusted if using borrowed equipment."
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
        level: "foundation",
        title: "Satellites",
        text: "Recall that amateur satellites operate in allocated frequencies within the Amateur bands."
    },
    {
        key: "7g.1",
        level: "foundation",
        title: "Satellites",
        text: "Recall that terrestrial operation on satellite frequencies should not take place."
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
        level: "foundation",
        title: "CEPT and international",
        text: "Recall that other Administrations (foreign countries) do not routinely recognise the Foundation Licence."
    },
    {
        key: "7h.1",
        level: "intermediate",
        title: "CEPT and international",
        text: "Recall that other Administrations (foreign countries) do not routinely recognise the Intermediate Licence."
    },
    {
        key: "7h.1",
        level: "full",
        title: "CEPT and international",
        text: "Understand the requirements for operation by individual UK Licensees abroad under the CEPT Recommendation T/R 61-01 and T/R 61-02."
    },
    {
        key: "7h.1",
        level: "full",
        title: "CEPT and international",
        text: "Understand this facility does not extend to club or reciprocal licences."
    },
    {
        key: "7h.1",
        level: "full",
        title: "CEPT and international",
        text: "Understand the purpose and function of the CEPT Harmonised Amateur Radio Examination Certificate (HAREC)."
    },
    {
        key: "7h.1",
        level: "full",
        title: "CEPT and international",
        text: "Recall that many countries will offer reciprocal licences to UK amateurs with a HAREC Full licence and that operation is in accordance with the host country’s rules."
    },
    {
        key: "7h.2",
        level: "full",
        title: "CEPT and international",
        text: "Identify the 3 ITU regions and recall that the frequencies are given in the ITU Radio Regulations. [[Frequencies allocated to amateur radio differ in each region. Region 1: UK, most of Europe, Russia. Region 2: Americas. Region 3: China, Australia, etc. Not examined, but you must use only those frequencies whivh are both in your licence schedule and allocated internationally in that region.]]",
        location: "page 8",
        notes: "it is 1f.2 in the manual but the syllabus has been changed"
    },
    {
        key: "8a.1",
        level: "foundation",
        title: "Electricity",
        text: "Recall that high voltages carry a risk of electrocution and high currents carry a risk of overheating and fire."
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
        key: "8a.1",
        level: "full",
        title: "Electricity",
        text: "Recall that lethal voltages can exist in equipment and that live circuits may be exposed as soon as the equipment case is removed."
    },
    {
        key: "8a.2",
        level: "foundation",
        title: "Electricity",
        text: "Recall that where a safety earth has been fitted it must not be removed."
    },
    {
        key: "8a.2",
        level: "foundation",
        title: "Electricity",
        text: "Recall that special care is needed with earthing arrangements and that a competent professional must be consulted prior to making any modifications."
    },
    {
        key: "8a.2",
        level: "full",
        title: "Electricity",
        text: "Recall that in PME systems the main earth terminal is connected to the neutral of the electricity service at the consumers’ premises."
    },
    {
        key: "8a.2",
        level: "full",
        title: "Electricity",
        text: "Recall that under severe fault conditions PME systems have the potential to cause fatal electric shocks and/ or fires in amateur radio stations."
    },
    {
        key: "8a.2",
        level: "full",
        title: "Electricity",
        text: "Recall that the RF earth in an amateur station should be connected to the PME bonding point in accordance with the relevant requirements."
    },
    {
        key: "8a.2",
        level: "full",
        title: "Electricity",
        text: "Recall that any cross-bonding must be tested and recorded by a qualified professional. Note: The relevant requirements may vary depending on the UK region and the practice of the Distribution Network Organisation concerned."
    },
    {
        key: "8a.3",
        level: "foundation",
        title: "Electricity",
        text: "Recall the correct way to wire a 3-pin mains plug."
    },
    {
        key: "8a.4",
        level: "foundation",
        title: "Electricity",
        text: "Recall that fuses to be fitted in accordance with manufacturer's instructions. "
    },
    {
        key: "8a.4",
        level: "foundation",
        title: "Electricity",
        text: "Recall that a fuse is a thin wire designed to melt, breaking the circuit, when passing an excessive current."
    },
    {
        key: "8a.4",
        level: "foundation",
        title: "Electricity",
        text: "Recall that the reason for a blown fuse needs to be properly investigated."
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
        key: "8a.5",
        level: "foundation",
        title: "Electricity",
        text: "Understand that a Residual Current Circuit Breaker with Overcurrent protection(RCBO) will give better protection against electric shock than relying solely on a conventional fuse which only protects against excessive current. Note: The candidate should appreciate that an RCBO will detect currents to earth of about 30mA whereas a fuse will only blow at several amps and only when the fault is a short circuit (L-N or L-E). The candidate should also understand that contact with both live and neutral may result in fatal injury. The mechanics of RCBO operation(differential current sensing) is not examinable."
    },
    {
        key: "8a.6",
        level: "foundation",
        title: "Electricity",
        text: "Recall that work inside equipment should only be carried out with the power sources disconnected."
    },
    {
        key: "8a.6",
        level: "foundation",
        title: "Electricity",
        text: "Recall why it is important to follow manufacturer's instructions for servicing equipment."
    },
    {
        key: "8a.6",
        level: "intermediate",
        title: "Electricity",
        text: "Understand that working on live equipment must only be done if it is not practicable to do otherwise and if the risks and appropriate precautions are fully understood."
    },
    {
        key: "8a.6",
        level: "full",
        title: "Electricity",
        text: "Understand that no work should be undertaken on live equipment unless it is not practicable to do otherwise."
    },
    {
        key: "8a.6",
        level: "full",
        title: "Electricity",
        text: "Understand that suitable precautions must be taken to avoid electric shock."
    },
    {
        key: "8a.7",
        level: "foundation",
        title: "Electricity",
        text: "Understand that all equipment should be controlled by a clearly marked master switch, the position of which should be known to others in the house or club."
    },
    {
        key: "8a.7",
        level: "foundation",
        title: "Electricity",
        text: "Recall that, in the event of an accident or fire involving electricity, the first action is to switch off the power."
    },
    {
        key: "8a.7",
        level: "foundation",
        title: "Electricity",
        text: "Recall that the casualty must not be touched unless the power has been switched off."
    },
    {
        key: "8a.8",
        level: "foundation",
        title: "Electricity",
        text: "Recall that some batteries can supply very high currents which can be hazardous if subjected to short circuit."
    },
    {
        key: "8a.8",
        level: "foundation",
        title: "Electricity",
        text: "Recall that battery charging must be in accordance with manufacturer instructions and that lithium batteries in particular can cause fire and explosion if not properly treated."
    },
    {
        key: "8a.8",
        level: "foundation",
        title: "Electricity",
        text: "Understand that different battery technologies require different charging techniques and must use the correct type of charger."
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
        key: "8b.1",
        level: "foundation",
        title: "Using tools",
        text: "Recall that eye protection must be worn when using tools to prevent eye damage from small metal particles(swarf)."
    },
    {
        key: "8b.2",
        level: "foundation",
        title: "Using tools",
        text: "Recall that all tools, including power tools, can be hazardous and should be handled with care and appropriate precautions taken."
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
        key: "8b.7",
        level: "foundation",
        title: "Using tools",
        text: "Recall that eye protection must be worn when soldering to prevent solder or flux from splashing into the eyes."
    },
    {
        key: "8b.7",
        level: "foundation",
        title: "Using tools",
        text: "Recall that a soldering-iron stand must be used to avoid skin contact with the hot bit of the iron when not in use."
    },
    {
        key: "8b.7",
        level: "foundation",
        title: "Using tools",
        text: "Recall that soldering work stations must be well ventilated to avoid inhalation of solder fumes, which can cause breathing problems particularly to asthmatics."
    },
    {
        key: "8c.1",
        level: "foundation",
        title: "Working at height",
        text: "Recall that antenna erection is potentially hazardous and that it is advisable to have someone to help you."
    },
    {
        key: "8c.1",
        level: "foundation",
        title: "Working at height",
        text: "Understand the need for at least one adult to be present."
    },
    {
        key: "8c.2",
        level: "foundation",
        title: "Working at height",
        text: "Recall that a ladder should be used at the correct angle(4:1 height-to-base ratio)."
    },
    {
        key: "8c.2",
        level: "foundation",
        title: "Working at height",
        text: "Understand that ladders must be adequately secured to prevent them slipping."
    },
    {
        key: "8c.2",
        level: "foundation",
        title: "Working at height",
        text: "Understand why it is important not to overreach from a ladder, to prevent falling off."
    },
    {
        key: "8c.3",
        level: "foundation",
        title: "Working at height",
        text: "Understand why, when working at height, a tool belt or similar device to carry tools should be used, and that it will help prevent falling objects."
    },
    {
        key: "8c.3",
        level: "foundation",
        title: "Working at height",
        text: "Understand the need to wear hard hats when working at height or when others are working at height."
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
        key: "8d.1",
        level: "full",
        title: "Working with RF",
        text: "Recall that the International Commission for Non-Ionising Radiation Protection(ICNIRP) produces guidance for exposure to Radio Frequency fields."
    },
    {
        key: "8d.1",
        level: "full",
        title: "Working with RF",
        text: "Understand it is not advisable to exceed the recommended safe exposure levels and that this is particularly applicable at locations open to the public."
    },
    {
        key: "8d.2",
        level: "foundation",
        title: "Working with RF",
        text: "Recall that guidance on safe levels of RF radiation is available from government and international bodies, Health Security Agency and the International Commission on Non Ionizing Radiation Protection (ICNIRP)."
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
        key: "8e.1",
        level: "full",
        title: "Lightning",
        text: "Recall that thunderstorms carry heavy static charges."
    },
    {
        key: "8e.1",
        level: "full",
        title: "Lightning",
        text: "Understand that the static charge from thunderclouds can ionise the air to form a low resistance path to ground, enabling a very high current to flow as a lightning strike."
    },
    {
        key: "8e.1",
        level: "full",
        title: "Lightning",
        text: "Understand the risks to human life, domestic property and electronic equipment associated with a direct strike and/or the build-up of static charges."
    },
    {
        key: "8e.1",
        level: "full",
        title: "Lightning",
        text: "Understand that there is little that can be done to protect an amateur station from a direct lightning strike, but that good static discharge systems can prevent dangerous static charges building up on antenna systems during thunderstorms."
    },
    {
        key: "8e.1",
        level: "full",
        title: "Lightning",
        text: "Understand that disconnecting antenna feeders from radio equipment also reduces the risks."
    },
    {
        key: "8f.1",
        level: "foundation",
        title: "Working mobile and portable",
        text: "Recall that elevated wires, masts and antennas must be suitably located and secured."
    },
    {
        key: "8f.1",
        level: "foundation",
        title: "Working mobile and portable",
        text: "Recall that antennas and feeders must not be sited close to overhead power cables."
    },
    {
        key: "8f.1",
        level: "foundation",
        title: "Working mobile and portable",
        text: "Recall that a lethal electric shock can result from antennas and ladders coming into contact with or attracting arcing from overhead lines."
    },
    {
        key: "8f.2",
        level: "foundation",
        title: "Working mobile and portable",
        text: "Understand the reasons for not having wires trailing across the floor, trip hazards and the risk of frayed insulation."
    },
    {
        key: "8f.3",
        level: "foundation",
        title: "Working mobile and portable",
        text: "Recall that excessive volume when wearing headphones can cause damage to hearing."
    },
    {
        key: "8f.4",
        level: "foundation",
        title: "Working mobile and portable",
        text: "Recall that operating in temporary premises and/or outdoors can introduce new hazards e.g. temporary mains connections, trailing cables, damp ground."
    },
    {
        key: "8f.4",
        level: "foundation",
        title: "Working mobile and portable",
        text: "Recall the additional safety precautions that should be taken whilst operating in temporary premises and/ or outdoors e.g.risk assessment, cable routing, protection, correct fusing, use of RCBO’s, no adjustments or repairs to live equipment."
    },
    {
        key: "8f.4",
        level: "foundation",
        title: "Working mobile and portable",
        text: "Recall that advice should be sought where you are unsure."
    },
    {
        key: "8f.4",
        level: "full",
        title: "Working mobile and portable",
        text: "Understand that operating in temporary premises and/ or outdoors can introduce new hazards i.e. overhead power lines, inadequate electrical supplies, trailing cables, damp ground and excessive field strengths."
    },
    {
        key: "8f.4",
        level: "full",
        title: "Working mobile and portable",
        text: "Recall the additional safety precautions that should be taken whilst operating in temporary premises and/or outdoors i.e. (1) site survey/risk assessment (2) cable routing/protection (3) correct fusing (4) use of Residual Current Devices(RCD's, RCBO's) (5) no adjustments or repairs to live equipment."
    },
    {
        key: "8f.4",
        level: "full",
        title: "Working mobile and portable",
        text: "Recall that mains supplies in other countries may be of a different voltage or frequency; utilise different plugs and sockets and that UK specified equipment may not be suitable or hazardous if connected and used."
    },
    {
        key: "8f.5",
        level: "foundation",
        title: "Working mobile and portable",
        text: "Recall that safety is everybody’s responsibility and that one must be alert to any potentially unsafe circumstance, warn others and report the matter to the appropriate person."
    },
    {
        key: "8f.5",
        level: "foundation",
        title: "Working mobile and portable",
        text: "Recall this equally applies in your own ‘shack’ and when entertaining visitors."
    },
    {
        key: "8f.5",
        level: "full",
        title: "Working mobile and portable",
        text: "Understand that operating when mobile or maritime mobile can introduce new hazards i.e. insecure equipment, long/ flexible antennas,accidental shorts to earth, lack of attention to driving."
    },
    {
        key: "8f.5",
        level: "full",
        title: "Working mobile and portable",
        text: "Recall the additional safety precautions that should be taken whilst operating mobile and/or maritime mobile i.e.secure equipment, cable routing/protection, correct fusing, use of hands free equipment, attention to good radio housekeeping."
    },
    {
        key: "8f.6",
        level: "full",
        title: "Working mobile and portable",
        text: "Understand that a risk assessment should be performed when an activity could present a hazard to yourself or others."
    },
    {
        key: "8f.6",
        level: "full",
        title: "Working mobile and portable",
        text: "Understand that risk assessment involves identification of hazards and the measures to mitigate the risk."
    },
    {
        key: "8f.6",
        level: "full",
        title: "Working mobile and portable",
        text: "Recall a risk assessment needs to consider the likelihood of harm and the severity of that harm. Recall that the significant findings of risk assessments need to be recorded."
    },
    {
        key: "8f.6",
        level: "full",
        title: "Working mobile and portable",
        text: "Recall that risk assessment records are important in law and for insurance purposes. Recall that risks should be expressed in understandable terms."
    },
    {
        key: "8f.6",
        level: "full",
        title: "Working mobile and portable",
        text: "Recall that appropriate insurances should be obtained for all amateur radio activities but in particular where the public could be involved."
    },
    {
        key: "8f.7",
        level: "full",
        title: "Working mobile and portable",
        text: "Understand the risks associated with the use of electrical generators, earthing, fuel stowage, refilling."
    },
    {
        key: "9a.1",
        level: "intermediate",
        title: "Measurements",
        text: "Recall the purpose of a multimeter and understand how to set the meter to the correct range and polarity before connecting to the circuit."
    },
    {
        key: "9a.1",
        level: "full",
        title: "Measurements",
        text: "Understand the use of series multiplier resistors in analogue voltmeters and shunts in ammeters."
    },
    {
        key: "9a.1",
        level: "full",
        title: "Measurements",
        text: "Understand the effect of the test meter on the circuit under test."
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
        key: "9a.3",
        level: "full",
        title: "Measurements",
        text: "Understand the effect of measurement tolerance, calibration accuracy and time related drift on frequency measurements and the allowances to be made for transmission bandwidths."
    },
    {
        key: "9a.4",
        level: "full",
        title: "Measurements",
        text: "Understand that signal generators and similar devices will have a source impedance and the effect on the signal level of attaching different load impedances."
    },
    {
        key: "9a.4",
        level: "full",
        title: "Measurements",
        text: "Recall that not all measuring equipment will have a 50Ω input impedance."
    },
    {
        key: "9a.4",
        level: "full",
        title: "Measurements",
        text: "Understand that the choice of measuring equipment may have an effect on the measurement result and on the object under test."
    },
    {
        key: "9a.5",
        level: "intermediate",
        title: "Measurements",
        text: "Understand the use of voltmeters and ammeters to determine the power applied to a circuit."
    },
    {
        key: "9a.5",
        level: "full",
        title: "Measurements",
        text: "Understand that steady RF power may be determined by measuring the RF potential difference across a dummy load and that a steady audio signal, e.g. from an audio oscillator, will be required for AM and SSB measurements."
    },
    {
        key: "9a.5",
        level: "full",
        title: "Measurements",
        text: "Understand the meaning of peak envelope power(PEP) of an SSB transmission and that it may be determined using a peak reading power meter or an oscilloscope and dummy load."
    },
    {
        key: "9a.6",
        level: "full",
        title: "Measurements",
        text: "Recall the uses and limitations of crystal calibrators, digital frequency counters and standard frequency transmissions."
    },
    {
        key: "9a.7",
        level: "full",
        title: "Measurements",
        text: "Identify the circuit of an SWR meter using either a sense wire between the inner and outer conductors of a coaxial line or a current transformer and capacitive voltage tap."
    },
    {
        key: "9a.7",
        level: "full",
        title: "Measurements",
        text: "Understand in simple terms how this leads to an SWR reading on devices using a single meter, twin meters or cross-needle twin meter."
    },
    {
        key: "9a.8",
        level: "full",
        title: "Measurements",
        text: "Understand the purpose and basic operation of an oscilloscope."
    },
    {
        key: "9a.8",
        level: "full",
        title: "Measurements",
        text: "Calculate the frequency and voltage of a waveform from given data."
    },
    {
        key: "9a.9",
        level: "full",
        title: "Measurements",
        text: "Understand the purpose and basic operation of a spectrum analyser."
    },
    {
        key: "9a.9",
        level: "full",
        title: "Measurements",
        text: "Identify the fundamental and harmonics on a typical spectrum analyser display."
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
        key: "9b.1",
        level: "full",
        title: "Decibels",
        text: "Use the equations for decibel power, dB, dBW, dBm and voltage ratios dBV."
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
        key: "9c.1",
        level: "full",
        title: "Decibels",
        text: "Recall that temperature has an effect on the value of components. Those with negative coefficients will reduce in value as temperature rises whereas those with positive coefficients will increase in value."
    },
    {
        key: "9c.1",
        level: "full",
        title: "Decibels",
        text: "Understand the effect this will have on tuned circuits and remedial measures. Questions may include simple calculations."
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