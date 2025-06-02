const W06quiz = [
    {
        source: "BBDL Intermediate Quiz W06 Q1",
        question: "A tuned circuit is normally formed by a combination of which types of components?",
        options: [
            "Crystals and diodes",
            "Resistors and transistors",
            "Capacitors and inductors",
            "Integrated circuits and voltage regulators"
        ],
        correct: 2,
        explanation: " A quartz crystal can be seen as a kind of tuned circuit, but it is more usual for the term ‘tuned circuit’ to refer to an ‘LC’ or Inductor/ Capacitor combination.",
        lookup: "See page 25 of the Intermediate Licence textbook",
        syllabus: "2h.1"
    },
    {
        source: "BBDL Intermediate Quiz W06 Q2",
        question: "If a tuned circuit is resonant at 3.7MHz and the value of the capacitor is increased the resonant frequency will:",
        options: [
            "Remain the same",
            "Increase",
            "Decrease",
            "Oscillate"
        ],
        correct: 2,
        explanation: "Larger values are required at lower frequencies so logic suggests that increasing the value of either of the inductor or capacitor will reduce the resonant frequency.",
        lookup: "See page 25 of the Intermediate Licence textbook",
        syllabus: "2h.3",
        tagged: true
    },
    {
        source: "BBDL Intermediate Quiz W06 Q3",
        question: "When the Capacitive Reactance is equal to the Inductive Reactance:",
        options: [
            "The circuit will pass only high frequency signals",
            "The circuit has a very high Q",
            "The circuit is displaying resonance",
            "The circuit will pass only low frequency signals"
        ],
        correct: 2,
        explanation: "Tuned circuits, where the Capacitive and Inductive reactances are equal are said to be resonant. This a very special result that enables us to select and separate frequencies",
        lookup: "See page 25 of the Intermediate Licence textbook",
        syllabus: "2h.1"
    },
    {
        source: "BBDL Intermediate Quiz W06 Q4",
        question: "Resonance is BEST described as the frequency at which a tuned circuit:",
        options: [
            "Stores energy",
            "Allows energy transfer ",
            "Prevents energy transfer ",
            "Transfers energy back and forth between its components"
        ],
        correct: 3,
        explanation: "Tuned circuits do not store energy, so not ‘a’. Not all tuned circuits allow energy transfer (e.g. a rejector circuit), so not ‘b’, and not all prevent energy transfer (e.g. an acceptor circuit), so not ‘c’.",
        lookup: "See page 25 of the Intermediate Licence textbook",
        syllabus: "2h.3"
    },
    {
        source: "BBDL Intermediate Quiz W06 Q5",
        question: "At resonance, a series tuned circuit has:",
        options: [
            "a low impedance",
            "a high impedance",
            "A low resonant frequency",
            "A high resonant frequency"
        ],
        correct: 0,
        explanation: "A series tuned circuit is also known as an acceptor circuit which has a low impedance at resonance.This allows the resonant frequency to pass whilst blocking all others.",
        lookup: "See page 25-26 of the Intermediate Licence textbook",
        syllabus: "2h.2"
    },
    {
        source: "BBDL Intermediate Quiz W06 Q6",
        question: "The impedance-frequency curve shown in the figure is characteristic of:  <br><br><img src='images/w06-q6.png' alt='test'  >",
        options: [
            "A perfect capacitor",
            "A parallel tuned circuit",
            "A perfect inductor",
            "A series tuned circuit"
        ],
        correct: 1,
        explanation: "‘a’ and ‘c’ cannot be correct as they would only have reactance. A parallel tuned circuit rejects signals at its resonant frequency, so ‘b’ looks sensible. A series tuned circuit is also known as an ‘acceptor’ circuit, because it has a low impedance,so ‘d’ is wrong.The diagram shows a high impedance at the centre frequency, which would cause it to be rejected, so ‘b’ is the correct answer.",
        lookup: "See page 25-26 of the Intermediate Licence textbook",
        syllabus: "2h.2"
    },
    {
        source: "BBDL Intermediate Quiz W06 Q7",
        question: "If a tuned circuit is used to filter out a specific frequency, and the power reduces from 100mW to 5mW, how much is the power reduction when expressed in decibels?",
        options: [
            "-10dB",
            "-13dB",
            "-26dB",
            "-95dB"
        ],
        correct: 1,
        explanation: "Two rules of thumb apply to dB losses; -3dB is half power, and -10dB is one tenth power. To get from 100mW to 5mW you need to reduce to one tenth, so - 10dB gives 10mW, and then halve that(another - 3dB) so - 13dB = 5mW. You could arrive at that same answer using only the - 3dB rule if you prefer; 100 - 3dB = 50mW, 50 - 3dB = 25mW, 25mW - 3dB = 12mW, 12mW - 3dB = 6mW and 6mW - 3dB = 3mW. So adding the dB together, -12dB is not quite 5mW, but - 15dB is less than 5mW, so the answer has to be somewhere between - 12 and - 15dB, and only ‘b’ meets that requirement.",
        lookup: "See page 56-57 of the Intermediate Licence textbook",
        syllabus: "9b.1",
        tagged: true
    },
    {
        source: "BBDL Intermediate Quiz W06 Q8",
        question: "When describing a tuned circuit, the Q value is the ratio of:",
        options: [
            "The reactance of the capacitor and the reactance of the inductor",
            "The input frequency and the output frequency",
            "The resonant frequency to the -3dB bandwidth",
            "The capacitance and the inductance"
        ],
        correct: 2,
        explanation: "The Q value (quality) is a measure of the selectivity of a tuned circuit (or a band-pass) to pass the required signal and reject all others. It can be calculated by dividing the centre(or resonant) frequency by the - 3dB bandwidth.",
        lookup: "See page 39 of the Intermediate Licence textbook",
        syllabus: "2h.4",
        tagged: true
    },
    {
        source: "BBDL Intermediate Quiz W06 Q9",
        question: "A 7.10 MHz tuned circuit is inserted into the feed from a 50W transmitter to a 50Ω dummy load. At 7.10 MHz the voltage across the dummy load is 50V RMS. At 7.07MHz and 7.13 MHz the voltage across the dummy load is 35.35V RMS. What is the Q of the tuned circuit?",
        options: [
            "1.183",
            "11.83",
            "118.3",
            "1183"
        ],
        correct: 2,
        explanation: "To work out Q you need the centre frequency and the bandwidth of the tuned circuit’s response. The question tells us the centre frequency is 7.10 MHz but we need to work out the bandwidth, that is the difference between the two points where the power is halved, or the voltage is reduced to 70.7%. We are told that the voltage reduces from 50 to 35.5V RMS at points 30kHz above and below the centre frequency. If you multiply 50V by 70.7 and divide by 100, you get 35.35 V.So, the half- power points are 60kHz apart.The calculation, in MHz, is then 7.1 ÷ 0.06 = 118. ",
        lookup: "See page 39 of the Intermediate Licence textbook",
        syllabus: "2h.4",
        tagged: true
    },
    {
        source: "BBDL Intermediate Quiz W06 Q10",
        question: " In a high pass filter, the cut off frequency is where the power of the signal is attenuated by 3dB:",
        options: [
            "Throughout the pass band of the filter",
            "About 10% above the operating frequency of the filter",
            "About 10% below the operating frequency of the filter",
            "Both about 10% above and about 10% below the pass band of the filter "
        ],
        correct: 2,
        explanation: "A high pass filter allows signals higher than the cut off frequency to pass so the cut off frequency must be below the operating frequency. The - 3dB or ‘half power’ point defines the cut off frequency and that is normally about 10% lower than the operating frequency.",
        lookup: "See page 26 of the Intermediate Licence textbook",
        syllabus: "2h.5",
        tagged: true
    },
    {
        source: "BBDL Intermediate Quiz W06 Q11",
        question: "Which of the following is the best definition of a filter?",
        options: [
            "Something that allows good signals to pass and blocks all interfering signals",
            "Something that only allows the wanted signals to pass and blocks all other signals",
            "Something that allows some frequencies to pass and blocks some other frequencies",
            "Something that only allows one frequency to pass and blocks all others"
        ],
        correct: 2,
        explanation: "This is a ‘best’ question, so it is likely that all answers may have a grain of truth in them, but one will be correct in all circumstances. ‘a’ is not the one to go for because you can have interfering signals on the same frequency as the wanted signals and not all filters are able to sort that out. ‘b’ is true for a very narrow band pass filter, but not for all filters. ‘c’ is quite generic and can be used to describe any filter, so looks like a good choice. ‘d’ is much the same as ‘b’ but referring to ‘frequencies’ rather than ‘signals’, again it is correct for a band pass filter, but not all filters. ‘c’ is therefore the ‘best’ answers.",
        lookup: "See page 25-26 of the Intermediate Licence textbook",
        syllabus: "3g.3"
    },
    {
        source: "BBDL Intermediate Quiz W06 Q12",
        question: "Which of the circuits shown below is a high pass filter suitable for HF signals?  <br><br><img src='images/w06-q12.png' alt='test'  >",
        options: [
            "a",
            "b",
            "c",
            "d"
        ],
        correct: 1,
        explanation: "‘b’ has the capacitor ‘high’ so it is a high-pass filter, which is the correct answer.Generally speaking, for RF filters you need some inductance and some capacitance, so you could rule out ‘a’ and ‘d’, which only have R & C. Such circuits do have filtering characteristics at audio frequencies, but that is not in the syllabus. ‘c’ has a mix of low and high capacitors so is a more complex beast; it is actually a low pass filter with an additional notch filter added, not the one to go for.",
        lookup: "See page 26 of the Intermediate Licence textbook",
        syllabus: "2h.5",
        tagged: true
    },

]

export default W06quiz