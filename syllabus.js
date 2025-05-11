const syllabusItems = [
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
        text: "Recall that a person authorised by Ofcom has the right to any or all the following: Inspection of, require the modification of, require the closedown of,restrict the operation of, the Radio Equipment."
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
        level: "foundation",
        title: "Apparatus, inspection and closedown",
        text: "Recall the Licensee must ensure that the station is not causing Undue Interference to other radio users. Recall that a person authorised by Ofcom has the right to any or all the following: • Inspection of, • require the modification of, • require the closedown of,• restrict the operation of, the Radio Equipment."
    },
    {
        key: "1d.2",
        level: "foundation",
        title: "Apparatus, inspection and closedown",
        text: "Recall that a person authorised by Ofcom may require the Licence holder to keep a log of all transmissions made over a specified period of time."
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
        key: "",
        level: "intermediate",
        text: ""
    },
    {
        key: "",
        level: "intermediate",
        text: ""
    },
    {
        key: "",
        level: "intermediate",
        text: ""
    },
    {
        key: "",
        level: "intermediate",
        text: ""
    },
    {
        key: "",
        level: "intermediate",
        text: ""
    },
    {
        key: "",
        level: "intermediate",
        text: ""
    },
    {
        key: "",
        level: "foundation",
        text: ""
    },
]

export default syllabusItems