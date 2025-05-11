// import W01quiz from "./W01quiz.js"
// import W09quiz from "./W09quiz.js"
// import W09AFTERquiz from "./W09AFTERquiz.js"
// import W10quiz from "./W10quiz.js"
// import W11quiz from "./W11quiz.js"
// import W12quiz from "./W12quiz.js"

import W99quiz from "./W99quiz.js"

const section = [
    { id: 0, name: "dummy", questions: 0 },
    { id: 1, name: "Licensing conditions", questions: 6, weeks: [11] },
    { id: 2, name: "Technical aspects", questions: 14, weeks: [2, 3, 4, 5, 6, 7] },
    { id: 3, name: "Transmitters and receivers", questions: 7, weeks: [8, 9, 10] },
    { id: 4, name: "Feeders and antennas", questions: 4, weeks: [12, 13] },
    { id: 5, name: "Propagation", questions: 3, weeks: [11] },
    { id: 6, name: "Electro magnetic compatibility", questions: 4, weeks: [13] },
    { id: 7, name: "Operating practices and procedures", questions: 2, weeks: [1] },
    { id: 8, name: "Safety", questions: 3, weeks: [1] },
    { id: 9, name: "Measurements and construction", questions: 3, weeks: [1] },
]

const searchForm = document.getElementById("searchForm")
const questionDiv = document.getElementById("question")
const optionsDiv = document.getElementById("options")
const nextQuestionButton = document.getElementById("next-btn")
// const timerElement = document.getElementById("timer")
const resultDiv = document.getElementById("result")

const explanationButton = document.getElementById("explanation-btn")
const explanationDiv = document.getElementById("explanation")

const syllabusDiv = document.getElementById("syllabus")
const syllabusScoreDiv = document.getElementById("syllabusScore")

console.log("syllabusScoreDiv", syllabusScoreDiv)

// let searchType = ""
// let searchValue = ""
// let randomQuestions = shuffleArray([...W01quiz, ...W09quiz, ...W09AFTERquiz, ...W10quiz, ...W11quiz, ...W12quiz])


// console.log("randomQuestions:", randomQuestions.length)

const quizState = {
    currentQuestion: null,
    score: null,
    wrongAnswers: null,
    searchType: null,
    searchValue: null,
    randomQuestions: null,
    questionPack: null,
    syllabusScore: null
}

// quizState.questionPack = []
// quizState.randomQuestions = shuffleArray([...W99quiz])




// let currentQuestion = 0
// let score = 0
// let wrongAnswers = []

nextQuestionButton.style.display = "none"
explanationButton.style.display = "none"
syllabusDiv.style.display = "none"

nextQuestionButton.addEventListener("click", (event) => {
    console.log("Next Question clicked! Event triggered by:", event.currentTarget.id)
    myDebug("Next Question clicked")
    explanationDiv.innerHTML = ""
    quizState.currentQuestion++
    if (quizState.currentQuestion < quizState.questionPack.length) {
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
    myDebug("Search before clearQuizState()")
    clearQuizState()
    myDebug("Search after clearQuizState()")

    quizState.searchType = document.getElementById("searchType").value
    quizState.searchValue = document.getElementById("searchValue").value

    // console.log("searchType and searchValue:", searchType, searchValue)

    // let questions = [...W11quiz, ...W12quiz].sort(() => Math.random() - 0.5)


    // console.log("randomQuestions:", randomQuestions.length, randomQuestions)

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
    } else if (quizState.searchType === "tagged") {
        quizState.questionPack = quizState.randomQuestions.filter(q => q.tagged === true)
    } else if (quizState.searchType === "week") {
        quizState.questionPack = quizState.randomQuestions.filter(q => q.source.includes(quizState.searchValue))
    } else if (quizState.searchType === "question") {
        quizState.questionPack = quizState.randomQuestions.filter(q => q.question.toLowerCase().includes(quizState.searchValue.toLowerCase()))
    } else {
        throw new Error("Search used is not yet available")
    }

    // console.log("questionPack should contain something:", questionPack.length)
    // const questions = [...filteredQuestions]

    if (quizState.questionPack.length === 0) {
        throw new Error("Search found no data matching the filter provided")
    }

    // let brandNew = quizState.questionPack.map(shuffleArrayWithCorrectIndex)

    // console.log(brandNew)



    // this is the new code to shuffle the options and update the correct index
    // const shuffledQuestionsArray = quizState.questionPack.map(question => shuffleQuestion(question))
    const shuffledQuestionsArray = quizState.questionPack.map(shuffleQuestion)

    console.log("Shuffled Array of Questions:", shuffledQuestionsArray)

    quizState.questionPack = [...shuffledQuestionsArray]


    // try the new shuffled data

    // console.log("at this point we have some data to work with so we can continue with the setup")
    nextQuestionButton.style.display = "inline-block"
    explanationButton.style.display = "inline-block"
    syllabusDiv.style.display = "inline-block"

    quizState.currentQuestion = 0
    quizState.score = 0
    quizState.wrongAnswers = []
    quizState.questionPackLength = quizState.questionPack.length
    quizState.syllabusScore = [
        { correct: 0, incorrect: 0 },
        { correct: 0, incorrect: 0 },
        { correct: 0, incorrect: 0 },
        { correct: 0, incorrect: 0 },
        { correct: 0, incorrect: 0 },
        { correct: 0, incorrect: 0 },
        { correct: 0, incorrect: 0 },
        { correct: 0, incorrect: 0 },
        { correct: 0, incorrect: 0 },
        { correct: 0, incorrect: 0 },
    ]


    // syllabusDiv.textContent = `${section[syllabusFilter].name} (${section[syllabusFilter].questions} questions)`

    // two addEventListener setup were here



    myDebug("search: before loadQuestion()")

    loadQuestion()

    myDebug("search: after loadQuestion()")



})

myDebug("startup completed: now waiting for Search to be clicked")

// functions start here



// Fisher-Yates shuffle produces unbiased results, good for arrays of any size
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1)); // Random index
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]] // Swap elements
    }
    return array
}
function loadQuestion() {
    myDebug("loadQuestion(): start")
    const q = quizState.questionPack[quizState.currentQuestion]
    const qLength = quizState.questionPack.length
    questionDiv.innerHTML = `Q${quizState.currentQuestion + 1}/${qLength}. ${q.question}`
    optionsDiv.innerHTML = ""
    questionDiv.title = q.source

    if (q.syllabus === "") {
        console.log("Error: syllabus field is empty")
    }

    console.log("syllabus", q.syllabus)

    if (q.syllabus === "") {
        throw new Error("Error: syllabus field is empty")
    }

    if (/[0-9]/.test(q.syllabus[0])) {
        console.log("syllabus[0] passes the regex test")
    } else {
        console.log("syllabus[0] fails the regex test")
        throw new Error("syllabus[0] fails the regex test")
    }


    syllabusDiv.textContent = `${section[q.syllabus[0]].id}. ${section[q.syllabus[0]].name} (${section[q.syllabus[0]].questions} exam questions)`

    if (q.options.length !== 4) {
        throw new Error("loadQuestion: should be 4 options")
    }

    q.options.forEach((option, index) => {

        if (option === "") {
            throw new Error("loadQuestion: empty option found")
        }

        const btn = document.createElement("button")
        btn.classList.add("option-btn")
        btn.textContent = option
        btn.addEventListener("click", () => selectAnswer(index))
        optionsDiv.appendChild(btn)

    })

    nextQuestionButton.disabled = true
    explanationButton.disabled = true

    if (q.tagged) {
        console.log("tagged:", q.tagged)
        explanationButton.classList.add("tagged")
    } else {
        console.log("tagged: false")
        explanationButton.classList.remove("tagged")
    }
}

function selectAnswer(index) {
    myDebug("selectAnswer(index): start")
    const q = quizState.questionPack[quizState.currentQuestion]
    const buttons = document.querySelectorAll(".option-btn")

    buttons.forEach((btn) => btn.disabled = true)

    if (/[0-3]/.test(q.correct)) {

    } else {
        throw new Error("selectAnswer: correct not in range 0-3")
    }

    if (index === q.correct) {
        myDebug("selectAnswer: correct")
        buttons[index].classList.add("correct")
        quizState.score++

        quizState.syllabusScore[q.syllabus[0]].correct++

    } else {

        quizState.syllabusScore[q.syllabus[0]].incorrect++

        myDebug("selectAnswer: wrong")
        buttons[index].classList.add("wrong")
        buttons[q.correct].classList.add("correct")
        logWrongAnswer(index, q)
    }

    nextQuestionButton.disabled = false
    explanationButton.disabled = false

    myDebug("selectAnswer(index): end")
}



function showResult() {

    myDebug("showResult(): start")

    nextQuestionButton.style.display = "none"
    explanationButton.style.display = "none"
    explanationDiv.style.display = "none"
    searchForm.style.display = "none"
    syllabusDiv.style.display = "none"
    questionDiv.style.display = "none"
    optionsDiv.style.display = "none"


    const highScore = localStorage.getItem("quizHighScore") || 0

    if (quizState.score > highScore) {
        localStorage.setItem("quizHighScore", quizState.score)
    }

    resultDiv.innerHTML = `
        <h2>Hurray!! Quiz Completed</h2>
        <p>Score: ${quizState.score} out of ${quizState.questionPack.length} questions</p>
        <p>Highest Score: ${Math.max(quizState.score, highScore)}</p>
        ${quizState.score > highScore ? "<p>Hey, New High Score!</p>" : ""}
        <p>Total number of Questions available: ${quizState.randomQuestions.length} </p>
        <button class="reloadButton" onclick="location.reload()">Restart Quiz</button>
`

    if (quizState.wrongAnswers.length > 0) {
        saveWrongAnswers()
    }

    displaySyllabusScoresFlex(quizState.syllabusScore)

    // const stack = new Error().stack.split("\n").slice(2)
    // console.log("Call stack depth:", stack.length)
    // console.log("Call stack:", stack.join("\n"))
}

function logWrongAnswer(index, q) {
    console.log("logging wrong answer", index, q, typeof (q))
    q.wrong = index
    quizState.wrongAnswers.push(q)
    myDebug("logWrongAnswer(index, q)")

}

function saveWrongAnswers() {
    const data = JSON.stringify(quizState.wrongAnswers)
    const blob = new Blob([data], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "quizProgress.json"
    a.click()
    URL.revokeObjectURL(url)
}

function myDebug(location) {
    console.log("-----quizState-----", location, quizState)
}

function clearQuizState() {
    quizState.currentQuestion = null
    quizState.score = null
    quizState.wrongAnswers = null
    quizState.searchType = null
    quizState.searchValue = null
    quizState.randomQuestions = null
    quizState.questionPack = null
    quizState.syllabusScore = null
}

// function displaySyllabusScores(scores) {

//     syllabusScoreDiv.innerHTML = ""

//     scores.forEach((score, index) => {
//         const totalAttempts = score.correct + score.incorrect

//         const percentage = totalAttempts > 0 ? ((score.correct / totalAttempts) * 100).toFixed(1) : 0

//         // const resultText = `Syllabus ${index} Score: ${score.correct} (${percentage}%)`
//         const resultText = `${section[index].name.padEnd(40, " ")} ${String(score.correct).padStart(3, " ")} (${percentage}%)`

//         const scoreElement = document.createElement("pre")
//         scoreElement.textContent = resultText

//         syllabusScoreDiv.appendChild(scoreElement)

//     })
// }

// function displaySyllabusScores2(scores) {
//     // const syllabusScoreDiv = document.getElementById("syllabusScores") // Assuming you have an element with this ID
//     syllabusScoreDiv.innerHTML = ""

//     // Define consistent column widths
//     const nameWidth = 55
//     const scoreWidth = 7 // Adjust as needed
//     const percentageWidth = 10 // Adjust as needed

//     // Create a header row for better readability (optional)
//     const headerText = `${"Syllabus Name".padEnd(nameWidth)} ${"Score".padStart(scoreWidth)} (Percentage)`.trimEnd()
//     const headerElement = document.createElement("pre")
//     headerElement.textContent = headerText
//     syllabusScoreDiv.appendChild(headerElement)

//     scores.forEach((score, index) => {
//         const totalAttempts = score.correct + score.incorrect
//         const percentage = totalAttempts > 0 ? ((score.correct / totalAttempts) * 100).toFixed(1) : 0

//         // Ensure 'section' array is defined and has the correct index
//         const syllabusName = section && section[index] && section[index].name ? section[index].name : `Syllabus ${index}`

//         const resultText = `${syllabusName.padEnd(nameWidth, " ")} ${String(score.correct).padStart(scoreWidth, " ")} (${String(percentage).padStart(percentageWidth, " ")}%)`.trimEnd()

//         const scoreElement = document.createElement("pre")
//         scoreElement.textContent = resultText
//         syllabusScoreDiv.appendChild(scoreElement)
//     })
// }

function displaySyllabusScoresFlex(scores) {
    // const syllabusScoreDiv = document.getElementById("syllabusScores")
    syllabusScoreDiv.innerHTML = ""

    // Add a header row

    const header = document.createElement("div")
    header.className = "score-row score-header"

    const headName = document.createElement("div")
    headName.className = "score-name"
    headName.textContent = "Syllabus Area"

    const headCorrect = document.createElement("div")
    headCorrect.className = "score-value"
    headCorrect.textContent = "Correct"

    const headIncorrect = document.createElement("div")
    headIncorrect.className = "score-value"
    headIncorrect.textContent = "Incorrect"

    const headPercentage = document.createElement("div")
    headPercentage.className = "score-percentage"
    headPercentage.textContent = "Percentage"

    header.append(headName, headCorrect, headIncorrect, headPercentage)
    syllabusScoreDiv.appendChild(header)

    // Add data rows

    scores.forEach((score, index) => {
        const total = score.correct + score.incorrect
        const percentage = total > 0 ? ((score.correct / total) * 100).toFixed(1) : 0
        const syllabusName = section && section[index] && section[index].name
            ? section[index].name
            : `Syllabus ${index}`

        const row = document.createElement("div")
        row.className = "score-row"

        const nameDiv = document.createElement("div")
        nameDiv.className = "score-name"
        nameDiv.textContent = syllabusName

        const valueDiv = document.createElement("div")
        valueDiv.className = "score-value"
        valueDiv.textContent = score.correct

        const value2Div = document.createElement("div")
        value2Div.className = "score-value"
        value2Div.textContent = score.incorrect

        const percentageDiv = document.createElement("div")
        percentageDiv.className = "score-percentage"
        percentageDiv.textContent = percentage > 0 ? (`${percentage}%`) : ` `

        row.append(nameDiv, valueDiv, value2Div, percentageDiv)
        syllabusScoreDiv.appendChild(row)
    })
}

// function shuffleOptions(question) {
//     let options = question.options.map((option, index) => ({ option, index }))
//     console.log("options:", options, "correct:", question.correct)

//     for (let i = options.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1))
//         [options[i], options[j]] = [options[j], options[i]]
//     }

//     const newCorrectIndex = options.findIndex(item => item.index === question.correct)

//     question.options = options.map(item => item.option)
//     question.correct = newCorrectIndex

//     return question

// }

function shuffleArray2(array) {
    let currentIndex = array.length, randomIndex
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]]
    }
    return array
}

function shuffleQuestion(questionObject) {
    // Create a copy to avoid modifying the original object directly
    const newQuestion = { ...questionObject }

    // Shuffle the options array
    const shuffledOptions = shuffleArray2([...newQuestion.options])

    // Find the new index of the correct answer
    const correctOptionText = newQuestion.options[newQuestion.correct]
    const newCorrectIndex = shuffledOptions.indexOf(correctOptionText)

    // Update the question object with the shuffled options and new correct index
    newQuestion.options = shuffledOptions
    newQuestion.correct = newCorrectIndex

    return newQuestion
}