import { syllabusButton, syllabusCheck, syllabusItemsDiv } from "./functionLibrary.js"
import { shuffleQuestion, myDebug, quizState, shuffleArray, loadQuestion } from "./functionLibrary.js"
import { nextQuestionButton, explanationButton, syllabusDiv, explanationDiv, showResult } from "./functionLibrary.js"

import W99quiz from "./fullQuestions/W99quiz_FULL.js"

nextQuestionButton.style.display = "none"
explanationButton.style.display = "none"
syllabusButton.style.display = "none"
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

syllabusButton.addEventListener("click", () => {
    console.log("EVENT LISTENER FOR SYLLABUS ITEMS", syllabusItemsDiv.style.display)
    if (syllabusItemsDiv.style.display === "none") {
        syllabusItemsDiv.style.display = "inline-block"
    } else {
        syllabusItemsDiv.style.display = "none"
    }
    console.log("EVENT LISTENER FOR SYLLABUS ITEMS", syllabusItemsDiv.style.display)
})

// KEY: syllabusCheck can done as part of initialisation as it checks all questions
syllabusCheck()

searchForm.addEventListener("submit", function (event) {
    console.log("Search Button clicked! Event triggered by:", event.currentTarget.id)

    event.preventDefault()

    quizState.searchType = document.getElementById("searchType").value
    quizState.searchValue = document.getElementById("searchValue").value

    quizState.randomQuestions = shuffleArray([...W99quiz])

    // KEY: convert searchType into selected questions
    if (quizState.searchType === "") {
        quizState.questionPack = [...quizState.randomQuestions]

    } else if (quizState.searchType === "syllabus") {
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
    quizState.questionPackLength = quizState.questionPack.length

    nextQuestionButton.style.display = "inline-block"
    explanationButton.style.display = "inline-block"
    syllabusButton.style.display = "inline-block"
    syllabusDiv.style.display = "inline-block"

    loadQuestion()

})

myDebug("startup completed: now waiting for Search to be clicked", quizState)
