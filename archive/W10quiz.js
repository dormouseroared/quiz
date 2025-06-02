const W10quiz = [
    {
        source: "BBDL Intermediate Quiz W10 Q1",
        question: "Which part of a crystal diode receiver selects the wanted frequency:",
        options: [
            "RF Amplifier",
            "Tuned circuit",
            "Signal diode",
            "Headphones"
        ],
        correct: 1,
        explanation: "There are no amplifiers in the crystal diode receiver so not ‘a’. However, a tuned circuit consisting of a capacitor and inductor have the property to resonate and enable a specific frequency to be selected. So ‘b’ looks good. The diode is the component which forms the detector/ demodulator so not ‘c’ The headphones are the final component that convert the audio electrical signal into sounds that we can hear, but no selection of the wanted frequency so not ‘d’.",
        lookup: "See page 38-39 of the Intermediate Licence textbook",
        syllabus: "3h.2"
    },
    {
        source: "BBDL Intermediate Quiz W10 Q2",
        question: "A direct conversion receiver is receiving an SSB signal at 7.1Mhz. At what frequency should the local oscillator be running to correctly receive the signal?",
        options: [
            "3kHz",
            "7.1MHz",
            "465kHz",
            "7.565MHz"
        ],
        correct: 1,
        explanation: "In a direct conversion receiver there is no intermediate frequency. The local oscillator operates at the frequency to be received. This signal ismixed with the incoming RF in a mixer the resulting mix includes the wanted audio signal. So in this case the only frequency to fit the bill is ‘b’ 7.1Mhz.",
        lookup: "See page 42 of the Intermediate Licence textbook",
        syllabus: "3h.2"
    },
    {
        source: "BBDL Intermediate Quiz W10 Q3",
        question: "Whilst there are more simple receiver types, the superhet architecture is needed to:",
        options: [
            "Reduce the possibility of receiving interference",
            "Make the best use of digital signal processing",
            "Avoid overloading the RF amplifier",
            "Provide improved selectivity"
        ],
        correct: 3,
        explanation: "Looking at ‘a’, receiving interference is a possibility in any receiver, including a superhet, so not that one. The superhet was designed many years before we had digital signal processing so not ’b’.The RF amplifier is the first device in many types of receiver, we avoid overload by applying AGC or by including an attenuator so not ‘c’.But a key feature of the superhet is that it converts a high RF frequency to a lower one where filters can be much more effective in producing selectivity, so ‘d’ is the one to go for.",
        lookup: "See page 40-42 of the Intermediate Licence textbook",
        syllabus: "3i.1",
        tagged: true
    },
    {
        source: "BBDL Intermediate Quiz W10 Q4",
        question: "When a superhet receiver is tuned to 14 MHz its local oscillator is at 5 MHz. What is its IF?",
        options: [
            "5 MHz",
            "14 MHz",
            "9 MHz",
            "9 MHz or 19 MHz"
        ],
        correct: 3,
        explanation: "This is a question about mixers having outputs at the ‘sum & difference’ for use as Intermediate frequencies. The whole point of mixing is to generate a fixed IF and it will always be either the sum or the difference. In this case we have no other information so, whilst ‘c’ is possible, ‘d’ is the 100% correct answer.",
        lookup: "See page 40-42 of the Intermediate Licence textbook",
        syllabus: "3i.2",
        tagged: true
    },
    {
        source: "BBDL Intermediate Quiz W10 Q5",
        question: "The selectivity in a superhet receiver comes mainly from:",
        options: [
            "A band pass filter in the audio stages",
            "The tuned circuits in the IF amplifier",
            "The use of a very stable local oscillator to generate the IF",
            "Having a high gain, low noise RF amplifier ahead of the mixer"
        ],
        correct: 1,
        explanation: "A band pass filter in the audio stages will certainly limit the audio bandwidth but that is not where the main selectivity comes from, so not ‘a’.The tuned circuits in the IF stage definitely add selectivity, so ‘b’ looks promising. The local oscillator plays no part in selectivity so not ‘c’ and neither do the RF amp’s gain or noise,so not ‘d’.So, ‘b’ is definitely the one to go for.",
        lookup: "See page 39 and 41 of the Intermediate Licence textbook",
        syllabus: "3i.3",
        tagged: true
    },
    {
        source: "BBDL Intermediate Quiz W10 Q6",
        question: "The sensitivity of a radio receiver is a guide to its ability to:",
        options: [
            "Reject unwanted signals on adjacent frequencies",
            "Withstand strong signals without causing reception problems",
            "Demodulate signals, especially SSB, clearly and correctly",
            "Receive weak signals without them being drowned in noise"
        ],
        correct: 3,
        explanation: "The terms sensitivity and selectivity are terms by which a receiver’s quality is measured, but in different ways. Make sure you can understand the difference between these important properties.",
        lookup: "See page 39 of the Intermediate Licence textbook",
        syllabus: "3h.3"
    },
    {
        source: "BBDL Intermediate Quiz W10 Q7",
        question: "A receiver’s ability to reject frequencies outside the wanted signal bandwidth is known as its:",
        options: [
            "Intermodulation performance",
            "Selectivity",
            "Dynamic range",
            "Sensitivity"
        ],
        correct: 1,
        explanation: "This is a simple definition; selectivity is the ability to select the signal you want and reject all others.",
        lookup: "See page 39 of the Intermediate Licence textbook",
        syllabus: "3h.4"
    },
    {
        source: "BBDL Intermediate Quiz W10 Q8",
        question: "To properly resolve FM signals a receiver needs:",
        options: [
            "A diode detector",
            "A frequency discriminator",
            "AGC (Automatic Gain Control)",
            "A BFO (Beat Frequency Oscillator)"
        ],
        correct: 1,
        explanation: "‘a’ would be used for AM, ‘c’ is useful but not required and ‘d’ is for Morse reception, not FM.",
        lookup: "See page 42 of the Intermediate Licence textbook",
        syllabus: "3k.1"
    },
    {
        source: "BBDL Intermediate Quiz W10 Q9",
        question: "A carrier insertion oscillator is intended to demodulate:",
        options: [
            "FM",
            "SSB",
            "AM",
            "CW"
        ],
        correct: 1,
        explanation: "To demodulate SSB, we have first to generate a signal at the same frequency as the “missing” carrier. This is produced in a Carrier Insertion Oscillator (CIO).If this signal is mixed with incoming SSB, an audio signal can be recovered. Whilst you can demodulate CW with a CIO, it is intended for SSB reception, CW specifically using a BFO.",
        lookup: "See page 42 of the Intermediate Licence textbook",
        syllabus: "3k.1"
    },
    {
        source: "BBDL Intermediate Quiz W10 Q10",
        question: "AGC voltage is often derived from the demodulator and applied to:",
        options: [
            "the local oscillator",
            "the IF amplifier",
            "the demodulator itself",
            "the RF power amplifier"
        ],
        correct: 1,
        explanation: "AGC alters the gain of the receiver and feeding back to the local oscillator or the demodulator will not help achieve the aim, ruling out ‘a’ and ‘c’.The RF power amplifier is a transmitter stage, so not relevant to AGC in a receiver. The only one that fits here is ‘b’, which is the correct answer.",
        lookup: "See page 42 of the Intermediate Licence textbook",
        syllabus: "3l.1"
    },
    {
        source: "BBDL Intermediate Quiz W10 Q11",
        question: "An SDR receiver is shown in the diagram. What function is performed in the blank box? <br><br><img src='images/w10-q11.png' alt='test' >",
        options: [
            "Modulation",
            "Anti-Alias Filtering",
            "Digital Signal Processing",
            "Automatic Level Control"
        ],
        correct: 2,
        explanation: "",
        lookup: "See page 43 of the Intermediate Licence textbook",
        syllabus: "3m.3"
    },
    {
        source: "BBDL Intermediate Quiz W10 Q12",
        question: "One advantage of a software defined radio receiver is that:",
        options: [
            "The receiver is inherently much more sensitive",
            "Two RF signals on the same frequency can be separated out",
            "A digital frequency display simplifies tuning to the wanted signal",
            "The digital filters can be much more selective"
        ],
        correct: 3,
        explanation: "The sensitivity of a receiver is mainly determined by losses in the circuitry and how well that is addressed by amplification, so not ‘a’.If two signals are on exactly the same frequency, no receiver can separate them, so not ‘b’.Digital displays are not unique to SDR receivers so not that one. ‘d’ is the only remaining option, and digital filters can indeed be more selective than those made using tuned circuits or crystals – this is one of the key advantages of an SDR receiver.",
        lookup: "See page 44 of the Intermediate Licence textbook",
        syllabus: "3m.1"
    },
    {
        source: "BBDL Intermediate Quiz W10 Q13",
        question: "Which of the following statements is TRUE?",
        options: [
            "Signals displayed in the Time Domain show the component frequencies as separate traces",
            "The Frequency Domain is useful for seeing what harmonics are present on a transmission",
            "Signals displayed in the Frequency Domain show intermodulation well",
            "The Time Domain is useful for seeing the bandwidth of a signal"
        ],
        correct: 1,
        explanation: "The Time Domain is how you might see signals on an oscilloscope screen, the Frequency Domain is like an SDR or spectrum analyser display. ‘a’is wrong because you cannot see the component frequencies in the Time Domain, only the distorted waveforms caused by multiple frequencies being present. ‘b’ looks good, as we use a spectrum analyser to display harmonics. ‘c’ is wrong because we see individual frequencies in the Frequency Domain, but not their interaction(intermodulation).The Time Domain is no good for seeing bandwidth as it only shows the amplitude of the modulated waveform, so not ‘d’.",
        lookup: "See page 43-44 of the Intermediate Licence textbook",
        syllabus: "3m.2"
    },
]

export default W10quiz