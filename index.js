
import { validateSyllabusKeysExplicit } from "./functionLibrary.js"
import { shuffleQuestion, myDebug, quizState, findMissingSyllabusKeys, shuffleArray, loadQuestion } from "./functionLibrary.js"
import { nextQuestionButton, explanationButton, syllabusDiv, explanationDiv, showResult } from "./functionLibrary.js"

import W99quiz from "./fullQuestions/W99quiz_FULL.js"

import syllabusItems from "./syllabusItems.js"

nextQuestionButton.style.display = "none"
explanationButton.style.display = "none"
syllabusDiv.style.display = "none"

nextQuestionButton.addEventListener("click", (event) => {
    console.log("Next Question clicked! Event triggered by:", event.currentTarget.id)
    myDebug("Next Question clicked", quizState)
    explanationDiv.innerHTML = ""
    quizState.currentQuestion++
    if (quizState.currentQuestion < quizState.questionPackLength) {
        loadQuestion()
    } else {
        showResult()
    }
})

explanationButton.addEventListener("click", () => {
    const q = quizState.questionPack[quizState.currentQuestion]
    explanationDiv.innerHTML = `
        <p>${q.explanation}</p>
        <p>Source: ${q.source}</p>
        <p>Reference: ${q.lookup}</p>
        <p>Syllabus: ${q.syllabus}</p>
        `
})


document.getElementById("searchForm").addEventListener("submit", function (event) {
    console.log("Search Button clicked! Event triggered by:", event.currentTarget.id)
    event.preventDefault()
    // myDebug("Search before clearQuizState()")
    // clearQuizState()
    // myDebug("Search after clearQuizState()")

    quizState.searchType = document.getElementById("searchType").value
    quizState.searchValue = document.getElementById("searchValue").value

    // console.log("searchType and searchValue:", searchType, searchValue)

    // let questions = [...W11quiz, ...W12quiz].sort(() => Math.random() - 0.5)


    // console.log("randomQuestions:", randomQuestions.length, randomQuestions)


    // check that each question has a valid syllabus
    // note that some questions have syllabus items like '1a.1 & 2a.2' but only the first 4 characters are used
    // the STOP is commented out when things are OK 
    console.group("CHECK EACH QUESTION HAS A VALID SYLLABUS")
    console.info("first object of questions array", W99quiz[0])
    console.info("first object of syllabusItems array", syllabusItems[0])

    // try this version instead of validateSyllabusKeys to avoid use of every and some
    const areSyllabusKeysValid = validateSyllabusKeysExplicit(W99quiz, syllabusItems)

    console.log("Have all questions had their syllabus keys validated?", areSyllabusKeysValid) // true if all syllabus keys match, false otherwise

    const missingKeysArray = findMissingSyllabusKeys(W99quiz, syllabusItems)

    console.log("question syllabus keys missing from syllabusItems", missingKeysArray) // Output: ["3c.4"]
    console.groupEnd("CHECK EACH QUESTION HAS A VALID SYLLABUS")

    quizState.randomQuestions = shuffleArray([...W99quiz])

    if (quizState.searchType === "") {
        console.log("searchType: No Filter (Show All)")
        quizState.questionPack = [...quizState.randomQuestions]

    } else if (quizState.searchType === "syllabus") {
        // debug for about 3 lines
        // console.log("searchType: syllabus", typeof (searchValue))
        // if (!Array.isArray(randomQuestions)) {
        //     throw new Error("randomQuestions is not a valid array")
        // }
        // randomQuestions.forEach(q => console.log(q.source, q.syllabus))

        // this is the real code to filter for first bit of the syllabus

        quizState.questionPack = quizState.randomQuestions.filter(q => q.syllabus && q.syllabus.startsWith(String(quizState.searchValue)))

    } else if (quizState.searchType === "46questions") {
        quizState.questionPack = quizState.randomQuestions.slice(0, 46)

    } else if (quizState.searchType === "58questions") {
        quizState.questionPack = quizState.randomQuestions.slice(0, 58)

    } else if (quizState.searchType === "10questions") {
        quizState.questionPack = quizState.randomQuestions.slice(0, 10)

    } else if (quizState.searchType === "tagged") {
        quizState.questionPack = quizState.randomQuestions.filter(q => q.tagged === true)

    } else if (quizState.searchType === "source") {
        quizState.questionPack = quizState.randomQuestions.filter(q => q.source.includes(quizState.searchValue))

    } else if (quizState.searchType === "question") {
        quizState.questionPack = quizState.randomQuestions.filter(q => q.question.toLowerCase().includes(quizState.searchValue.toLowerCase()))

    } else {
        throw new Error("Search used is not yet available")
    }

    if (quizState.questionPack.length === 0) {
        throw new Error("Search found no data matching the filter provided")
    }

    const shuffledQuestionsArray = quizState.questionPack.map(shuffleQuestion)

    quizState.questionPack = [...shuffledQuestionsArray]

    nextQuestionButton.style.display = "inline-block"
    explanationButton.style.display = "inline-block"
    syllabusDiv.style.display = "inline-block"

    quizState.currentQuestion = 0
    quizState.score = 0
    quizState.wrongAnswers = []
    quizState.questionPackLength = quizState.questionPack.length

    // quizState.syllabusScore = [
    //     { correct: 0, incorrect: 0 },
    //     { correct: 0, incorrect: 0 },
    //     { correct: 0, incorrect: 0 },
    //     { correct: 0, incorrect: 0 },
    //     { correct: 0, incorrect: 0 },
    //     { correct: 0, incorrect: 0 },
    //     { correct: 0, incorrect: 0 },
    //     { correct: 0, incorrect: 0 },
    //     { correct: 0, incorrect: 0 },
    //     { correct: 0, incorrect: 0 },
    // ]


    loadQuestion()

})

myDebug("startup completed: now waiting for Search to be clicked", quizState)

// functions start here



