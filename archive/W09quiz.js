const W09quiz = [
    {
        source: "BBDL Intermediate Quiz W09 Q1",
        question: "What kind of transmitter is shown in the diagram?<br><br><img src='images/w09-q1.png' alt='test'  >",
        options: [
            "CW",
            "AM",
            "FM",
            "SSB"
        ],
        correct: 2,
        explanation: "A CW transmitter would not require a microphone so not ‘a’. An AM transmitter would need a mixer type modulator(2 inputs, 1 output), which is not in the diagram, so not ‘b’. However, to transmit FM we need a microphone that passes a signal to the RF oscillator to “deviate” the carrier so ‘c’ looks good. Similar to the AM case, a SSB transmitter would require a balanced mixer and sideband filter, all absent from the diagram, so ‘c’ is the most likely answer.",
        lookup: "See page 36-37 of the Intermediate Licence textbook",
        syllabus: "3b.1"
    },
    {
        source: "BBDL Intermediate Quiz W09 Q2",
        question: "What type of modulation would this circuit be used for?<br><br><img src='images/w09-q2.png' alt='test'  >",
        options: [
            "CW",
            "AM",
            "FM",
            "SSB"
        ],
        correct: 2,
        explanation: "There is a lot in this circuit. To the right we have a Colpitts oscillator. The variable capacitor and variable inductor determine its nominal frequency. To the left we have a variable capacitance diode that can change the capacitance in the tuned circuit together with its DC biasing circuit and a connection for an audio signal input. These are the components of a frequency modulated (FM) master oscillator based on an LC tuned circuit.",
        lookup: "See page 37 of the Intermediate Licence textbook",
        syllabus: "3e.3"
    },
    {
        source: "BBDL Intermediate Quiz W09 Q3",
        question: "Narrow band frequency modulation for voice transmissions requires a peak deviation of:",
        options: [
            "less than 3 kHz",
            "more than 3 kHz",
            "exactly 12.5 kHz",
            "more than 12.5 kHz"
        ],
        correct: 0,
        explanation: " No formula on the sheet to fall back on this time. You need to recall that the definition of NBFM is when the modulation index is less than 1 and modulation index is peak deviation divided by the maximum audio frequency. So, assuming the typical human voice communication signal is up to 3kHz, the peak deviation needs to be less than 3kHz, making ‘a’ the correct answer.",
        lookup: "See page 37 of the Intermediate Licence textbook",
        syllabus: "3a.2"
    },
    {
        source: "BBDL Intermediate Quiz W09 Q4",
        question: "An efficient RF power amplifier with a DC input of 100 Watts will have an RF output power of around:",
        options: [
            "10 Watts",
            "30 Watts",
            "60 Watts",
            "100 Watts"
        ],
        correct: 2,
        explanation: "Remember that the DC input is the power supplied to make the amplifier do its work, not the RF input. So, ‘d’ is impossible; no amplifier is 100% efficient. ‘a’ would be dreadfully inefficient at 10%, so not a good option. 30% is not unheard of for Class A ‘linear’ amplifiers, but is hardly an efficient amplifier, whereas 60% is quite good and a commonly quoted figure, making ‘c’ the one to go for.",
        lookup: "See page 38 of the Intermediate Licence textbook",
        syllabus: "3f.1"
    },
    {
        source: "BBDL Intermediate Quiz W09 Q5",
        question: "Which of the following transmit modes will have the narrowest bandwidth?",
        options: [
            "Morse Code (CW)",
            "Single Side Band (SSB)",
            "Amplitude Modulation (AM)",
            "Narrow Band Frequency Modulation (NBFM)"
        ],
        correct: 0,
        explanation: "A simple memory test; the answers here happen to be in ascending order of bandwidth. Remember the irony of Narrow Band FM being the widest of the amateur signals in the syllabus? AM has two sidebands so is twice as wide as SSB, which only has the one. CW is the narrowest of the modes we cover.",
        lookup: "See page 37 of the Intermediate Licence textbook",
        syllabus: "3a.3"
    },
    {
        source: "BBDL Intermediate Quiz W09 Q6",
        question: "Harmonics from a transmitter are normally described as:",
        options: [
            "Reflections from aurora",
            "Spurious emissions from a transmitter",
            "Interference from man-made sources",
            "Multiples of the fundamental frequency"
        ],
        correct: 3,
        explanation: "Harmonics are produced by the non-linearities in active devices such as transistors. The important fact is that the frequency of the harmonics is always mathematically related to the fundamental, 2 times, 3 times, 4 times, or more.",
        lookup: "See page 39 of the Intermediate Licence textbook",
        syllabus: "3g.2"
    },
    {
        source: "BBDL Intermediate Quiz W09 Q7",
        question: "If you were carrying out tests on the harmonic content of your transmissions, which of the following pieces of test equipment would be most useful?",
        options: [
            "A frequency counter capable of measuring to at least five times the frequency you are operating on",
            "A receiver capable of tuning to at least three times the frequency you are operating on",
            "A general purpose analogue multimeter capable of measuring high frequency AC",
            "A general purpose digital multimeter with at least a 5 digit display"
        ],
        correct: 1,
        explanation: "Harmonics are always mathematically related to the fundamental, 2 times, 3 times, 4 times, or more, so to detect them you need something that can receive signals at those higher frequencies. A receiver or scanner that will go to the 3rd harmonic is generally taken to be a reasonable piece of test equipment. A general purpose multimeter, analogue or digital, will not measure harmonics, only volts, amps and ohms. A frequency counter cannot separate out the various frequencies in any transmission and with harmonics being weaker than the fundamental, it is highly unlikely that they would measure them in any case.",
        lookup: "See page 48-49 of the Intermediate Licence textbook",
        syllabus: "6d.3"
    },
    {
        source: "BBDL Intermediate Quiz W09 Q8",
        question: "Which of these responses would be produced by a band pass filter?<br><br><img src='images/w09-q8.png' alt='test'  >",
        options: [
            "a",
            "b",
            "c",
            "d"
        ],
        correct: 1,
        explanation: "Each of these graphs shows us the voltage coming out of the filter as the input frequency is raised. ‘a’ shows a filter which passes low frequencies and(above a knee) rejects high frequencies. This is the low pass filter so not this one. ‘b’ shows a graph where a band of frequencies is passed but frequencies above and below are rejected, the band pass filter, correct, but check the rest... ‘c’ shows a filter that is the opposite to ‘a’; the low frequencies are blocked and, above the knee the high frequencies are passed, not what we are looking for. ‘d’ shows a graph where a small band of frequencies is blocked, whilst frequencies below and above of the “stop band” are passed, the notch or stop band filter; opposite of what we are looking for.",
        lookup: "See page 34-35 of the Intermediate Licence textbook",
        syllabus: "3g.3"
    },
    {
        source: "BBDL Intermediate Quiz W09 Q9",
        question: "Key clicks can be cured by:",
        options: [
            "Reducing the power amplifier gain",
            "Using a low pass filter after the power amplifier",
            "Shaping the rise and fall of the transmissions",
            "Fitting a smoothing capacitor across the microphone PTT switch"
        ],
        correct: 2,
        explanation: "Key clicks cause interference from CW (Morse) transmissions if the rise and fall in the waveform as it is keyed is too steep. ‘a’ would only reduce the power of the interference. ‘b’ would only remove any interference above the cut off frequency and key clicks can be close in frequency to the intended frequency of transmission. ‘d’ should be ruled out as you don’t normally use the microphone PTT when sending Morse.",
        lookup: "See page 35 of the Intermediate Licence textbook",
        syllabus: "3g.4"
    },
    {
        source: "BBDL Intermediate Quiz W09 Q10",
        question: "Which one of the following is a cause of ‘Chirp’?",
        options: [
            "Poor temperature regulation in the PA",
            "Poor mechanical stability in the VFO",
            "Poor power supply regulation to the carrier oscillator",
            "Use of TV coax for the antenna feeder"
        ],
        correct: 2,
        explanation: "Chirp is related to rapid changes in oscillator frequency. ‘a’ might cause drift due to thermal effects, but not chirp. ‘b’ could cause sudden changes in frequency but once shifted they would not repeat to cause chirp. ‘c’ looks like a good candidate as a poorly regulated DC supply to the VFO can cause small but annoying shifts in the carrier frequency. These changes occur as the transmitter supply voltage drops when keying the transmitter. ‘d’ has little to do with chirp, so ‘c’ is the one to go for. To avoid causing chirp on a CW(or an SSB) rig that employs a VFO, excellent VFO voltage supply stability is essential.",
        lookup: "See page 35 of the Intermediate Licence textbook",
        syllabus: "3g.5"
    },
    {
        source: "BBDL Intermediate Quiz W09 Q11",
        question: "In order to minimise the risk of unwanted radiation from RF circuits:",
        options: [
            "Each stage should be well screened",
            "Screening should not be used between stages",
            "Stages should not be connected with screened cable",
            "Every other stage should be screened"
        ],
        correct: 0,
        explanation: "Screening is a good way of preventing feedback from one stage to another so ‘b’ and ‘c’ look wrong. Screening every other stage would still leave scope for some feedback, making ‘d’wrong. ‘a’ is the best answer.",
        lookup: "See page 33 of the Intermediate Licence textbook",
        syllabus: "9d.1"
    },
    {
        source: "BBDL Intermediate Quiz W09 Q12",
        question: "What is the Nyquist frequency?",
        options: [
            "Four times the frequency being transformed",
            "Any frequency produced using direct digital synthesis",
            "The frequency that the DDS computing device runs at",
            "The minimum sampling frequency needed for an accurate digital representation"
        ],
        correct: 3,
        explanation: "This is a straightforward definition and ‘d’ covers it. ‘a’ is wrong as the Nyquist frequency is twice that being sampled. ‘b’ and ‘c’ are just plain wrong.",
        lookup: "See page 43-44 of the Intermediate Licence textbook",
        syllabus: "2f.1"
    },
]

export default W09quiz