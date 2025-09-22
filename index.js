// ====================================
// 1. IMPORTS AND EXTERNAL DEPENDENCIES
// ====================================

import W99quiz from "./fullQuestions/W99quiz_FULL.js"
import syllabusItems from "./syllabusItems.js"

// ====================================
// 2. DOM ELEMENT REFERENCES
// ====================================
// Get all DOM elements at the top - easy to see what we're working with

const searchForm = document.getElementById("searchForm")

const syllabusDiv = document.getElementById("syllabus")
const questionDiv = document.getElementById("question")
const optionsDiv = document.getElementById("options")

const syllabusButton = document.getElementById("syllabus-btn")
const explanationButton = document.getElementById("explanation-btn")
const nextQuestionButton = document.getElementById("next-btn")

const explanationDiv = document.getElementById("explanation")
const syllabusItemsDiv = document.getElementById("syllabusItems")
const resultDiv = document.getElementById("result")
const syllabusScoreDiv = document.getElementById("syllabusScore")

// ====================================
// 3. CONFIGURATION AND DATA STRUCTURES
// ====================================

const section = [
    {
        id: 0,
        name: "dummy",
        questions: 0,
        notes: "58 questions in 2 hours with pass at 35 correct or 60%",
    },
    { id: 1, name: "Licensing conditions", questions: 7, weeks: [] },
    { id: 2, name: "Technical aspects", questions: 11, weeks: [] },
    { id: 3, name: "Transmitters and receivers", questions: 12, weeks: [] },
    { id: 4, name: "Feeders and antennas", questions: 4, weeks: [] },
    { id: 5, name: "Propagation", questions: 3, weeks: [] },
    { id: 6, name: "Electro magnetic compatibility", questions: 10, weeks: [] },
    {
        id: 7,
        name: "Operating practices and procedures",
        questions: 2,
        weeks: [],
    },
    { id: 8, name: "Safety", questions: 4, weeks: [2] },
    { id: 9, name: "Measurements and construction", questions: 5, weeks: [] },
]

const abcd = ["A", "B", "C", "D"] // answer index as alpha

// ====================================
// 4. APPLICATION STATE
// ====================================

const quizState = {
    currentQuestion: 0,
    questionPack: null,
    questionPackLength: 0,
    randomQuestions: null,
    score: 0,
    searchType: null,
    searchValue: null,

    syllabusScore: Array.from({ length: 10 }, (_, i) => ({
        section: i,
        correct: 0,
        incorrect: 0
    })),
    wrongAnswers: [],
}

// ====================================
// 5. UTILITY FUNCTIONS
// ====================================
// Pure functions that don't depend on DOM or state - easiest to test and understand

// Fisher-Yates shuffle produces unbiased results, good for arrays of any size
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1))
        {
            [array[i], array[randomIndex]] = [array[randomIndex], array[i]]
        }
    }
    return array
}


function shuffleQuestion(questionObject) {
    const newQuestion = structuredClone(questionObject)
    const shuffledOptions = shuffleArray([...newQuestion.options])
    const correctOptionText = newQuestion.options[newQuestion.correct]
    const newCorrectIndex = shuffledOptions.indexOf(correctOptionText)
    const originalOrder = shuffledOptions.map((option) =>
        newQuestion.options.indexOf(option),
    )

    newQuestion.options = shuffledOptions
    newQuestion.correct = newCorrectIndex
    newQuestion.originalOrder = originalOrder

    return newQuestion
}

function findSyllabusItems(syllabusItems, key) {
    return syllabusItems.filter((item) => item.key === key)
}

function validateSyllabusKeysExplicit(quizQuestions, syllabusItems) {
    for (const question of quizQuestions) {
        const questionSyllabusPrefix = question.syllabus.slice(0, 4)
        let foundMatchingSyllabusItem = false

        for (const item of syllabusItems) {
            if (item.key === questionSyllabusPrefix) {
                foundMatchingSyllabusItem = true
                break
            }
        }

        if (!foundMatchingSyllabusItem) {
            return false
        }
    }
    return true
}

function findMissingSyllabusKeys(quizQuestions, syllabusItems) {
    const syllabusKeys = syllabusItems.map((item) => item.key)
    const missingKeys = quizQuestions
        .map((q) => q.syllabus.slice(0, 4))
        .filter((key) => !syllabusKeys.includes(key))
    return missingKeys
}

// ====================================
// 6. VALIDATION AND SETUP FUNCTIONS
// ====================================

function syllabusCheck() {
    console.group("CHECK EACH QUESTION HAS A VALID SYLLABUS")
    console.info("first object of questions array", W99quiz[0])
    console.info("first object of syllabusItems array", syllabusItems[0])

    const areSyllabusKeysValid = validateSyllabusKeysExplicit(W99quiz, syllabusItems)
    console.log("Have all questions had their syllabus keys validated?", areSyllabusKeysValid)

    const missingKeysArray = findMissingSyllabusKeys(W99quiz, syllabusItems)
    console.log("question syllabus keys missing from syllabusItems", missingKeysArray)
    console.groupEnd("CHECK EACH QUESTION HAS A VALID SYLLABUS")
}

function questionHasValidSyllabus(q) {
    console.log("questionHasValidSyllabus regex checks underway...")
    if (q.syllabus === "") {
        console.log("Syllabus field in question has a problem", q.syllabus)
        throw new Error("Error: syllabus field is empty")
    }

    if (/[0-9]/.test(q.syllabus[0])) {
        console.log("syllabus[0] passes the regex test", q.syllabus)
    } else {
        console.log("syllabus[0] fails the regex test", q.syllabus)
        throw new Error("syllabus[0] fails the regex test")
    }
}

// ====================================
// 7. UI UPDATE FUNCTIONS
// ====================================
// Functions that change what's displayed to the user

function loadQuestion() {
    console.group("loadQuestion")
    myDebug("loadQuestion(): start", quizState)

    const q = quizState.questionPack[quizState.currentQuestion]
    const qLength = quizState.questionPackLength

    questionHasValidSyllabus(q)

    // Update syllabus section
    {
        const syllabusSection = section[q.syllabus[0]]
        const s = syllabusSection

        syllabusDiv.textContent =
            `${s.id}. ${s.name} (${s.questions} exam questions)`
    }

    syllabusDiv.title = q.syllabus

    // Update question display
    let imageDetail = ""
    if (q.image && q.image.trim()) {
        imageDetail = `<br><br><img src="${q.image}" alt="img built from key">`
    }

    questionDiv.innerHTML = `
        <span class='sequence'>
            Q${quizState.currentQuestion + 1}/${qLength}
        </span> 
        ${q.question}
        ${imageDetail}
    `

    questionDiv.title = q.source

    // Create answer buttons
    if (q.options.length !== 4) {
        throw new Error("loadQuestion: should be 4 options")
    }

    optionsDiv.innerHTML = ""

    q.options.forEach((option, index) => {
        if (option === "") {
            throw new Error("loadQuestion: empty option found")
        }

        const btn = document.createElement("button")
        btn.classList.add("option-btn")
        btn.innerHTML = option

        btn.title = `${abcd[q.originalOrder[index]]} [${q.originalOrder[index]}]`

        btn.addEventListener("click", () => {
            console.log("loadQuestion closure as event listener created for index:", index)
            selectAnswer(index)
        })
        optionsDiv.appendChild(btn)

        // Trigger MathJax to typeset the newly injected content
        // if (window.MathJax?.typesetPromise) {
        //     MathJax.typesetPromise([btn]).catch((err) =>
        //         console.error("MathJax typeset error:", err)
        //     )
        // }
    })

    // Update button states
    nextQuestionButton.disabled = true
    explanationButton.disabled = true
    syllabusButton.disabled = false

    // Update explanation button styling
    explanationButton.title = ""
    if (q.tagged) {
        console.log("tagged:", q.tagged)
        explanationButton.classList.add("tagged")
        explanationButton.title = "tagged"
    } else {
        console.log("tagged: false")
        explanationButton.classList.remove("tagged")
        explanationButton.title = "not tagged"
    }

    if (!q.explanation || q.explanation === "") {
        console.info("explanation is blank:", q.explanation)
        explanationButton.classList.add("blankExplanation")
        explanationButton.title = explanationButton.title === ""
            ? "explanation not yet available"
            : explanationButton.title + ", explanation not yet available"
    } else {
        console.info("explanation is not blank:", q.explanation)
        explanationButton.classList.remove("blankExplanation")
        explanationButton.title = explanationButton.title === ""
            ? "explanation available"
            : explanationButton.title + ", explanation available"
    }

    // Setup syllabus items
    syllabusItemsDiv.style.display = "none"
    let matchingItems = findSyllabusItems(syllabusItems, q.syllabus.slice(0, 4))

    console.log("search for matching syllabus items:", q.syllabus, q.syllabus.slice(0, 4), matchingItems)

    if (matchingItems.length === 0) {
        throw new Error("no syllabus items found")
    }

    console.log(q.syllabus, "has", matchingItems.length, "items")
    syllabusItemsDiv.innerHTML = ""
    const ul = document.createElement("ul")

    matchingItems.forEach((item) => {
        const weeks = item.weeks ? `[${item.weeks}]` : ""
        const li = document.createElement("li")
        li.innerHTML = `${item.key} <span class="highlightLevel">${item.level} ${weeks}</span>: ${item.text}`
        ul.appendChild(li)
    })

    syllabusItemsDiv.appendChild(ul)

    // todo: now trigger MathJax on element ul which has the relevant syllabus items

    // Question now loaded with dynamic content, some of which may
    // contain zero to many MathJax $...$ or $$...$$$ sequences, to be
    // displayed right now, or ready at the click of a button
    // So, now we pass the divs to cause MathJax to typeset them.

    mathjaxUpdate([questionDiv, optionsDiv, syllabusItemsDiv])

    console.groupEnd("loadQuestion")
}

function selectAnswer(index) {
    console.group("selectAnswer")
    myDebug("selectAnswer(index): start", quizState)

    const q = quizState.questionPack[quizState.currentQuestion]
    const buttons = document.querySelectorAll(".option-btn")

    buttons.forEach((btn) => (btn.disabled = true))

    if (!/[0-3]/.test(q.correct)) {
        throw new Error("selectAnswer: correct not in range 0-3")
    }

    if (index === q.correct) {
        myDebug("selectAnswer: correct", quizState)
        buttons[index].classList.add("correct")
        quizState.score++
        quizState.syllabusScore[q.syllabus[0]].correct++
    } else {
        quizState.syllabusScore[q.syllabus[0]].incorrect++
        myDebug("selectAnswer: wrong", quizState)
        buttons[index].classList.add("wrong")
        buttons[q.correct].classList.add("correct")
        logWrongAnswer(index, q)
    }

    nextQuestionButton.disabled = false
    explanationButton.disabled = false

    myDebug("selectAnswer(index): end", quizState)
    console.groupEnd("selectAnswer")
}

function showResult() {
    myDebug("showResult(): start", quizState)

    // Hide quiz interface
    searchForm.style.display = "none"
    syllabusDiv.style.display = "none"
    questionDiv.style.display = "none"
    optionsDiv.style.display = "none"

    syllabusButton.style.display = "none"
    explanationButton.style.display = "none"
    nextQuestionButton.style.display = "none"

    explanationDiv.style.display = "none"
    syllabusItemsDiv.style.display = "none"

    const highScore = localStorage.getItem("quizHighScore") || 0

    if (quizState.score > highScore) {
        localStorage.setItem("quizHighScore", quizState.score)
    }

    const scorePercent = (quizState.score * 100) / quizState.questionPackLength
    const scoreFixed = scorePercent.toFixed(1)

    resultDiv.innerHTML = `
        <h2>Full Licence: Quiz Completed</h2>
        <p>Score: ${quizState.score}/${quizState.questionPack.length} (${scoreFixed}%)</p>
        <p>Highest Score: ${Math.max(quizState.score, highScore)}</p>
        ${quizState.score > highScore ? "<p>Hey, New High Score!</p>" : ""}
        <p>Total number of Questions available: ${quizState.randomQuestions.length} </p>
        <button class="reloadButton" onclick="location.reload()">Restart Quiz</button>
    `

    if (quizState.wrongAnswers.length > 0) {
        saveWrongAnswers()
    }

    displaySyllabusScoresFlex(quizState.syllabusScore)
}

// ====================================
// 8. HELPER AND UTILITY UI FUNCTIONS  
// ====================================

function logWrongAnswer(index, q) {
    console.group("LOGWRONGANSWER")
    console.log("logging wrong answer", index, q, typeof q)
    q.wrong = index
    quizState.wrongAnswers.push(q)
    console.table("wrongAnswers", quizState.wrongAnswers)
    myDebug("logWrongAnswer(index, q)", quizState)
    console.groupEnd("LOGWRONGANSWER")
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

function displaySyllabusScoresFlex(scores) {
    syllabusScoreDiv.innerHTML = ""

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

    scores.forEach((score, index) => {
        const total = score.correct + score.incorrect
        const percentage = total > 0 ? ((score.correct / total) * 100).toFixed(1) : 0
        const syllabusName = section && section[index] && section[index].name
            ? `${section[index].id}. ${section[index].name}`
            : `Syllabus ${index}`

        const row = document.createElement("div")
        row.className = "score-row"

        const nameDiv = document.createElement("div")
        nameDiv.className = "score-name"
        nameDiv.textContent = syllabusName

        const valueDiv = document.createElement("div")
        valueDiv.className = "score-value"
        valueDiv.textContent = total > 0 ? score.correct : ``

        const value2Div = document.createElement("div")
        value2Div.className = "score-value"
        value2Div.textContent = total > 0 ? score.incorrect : ``

        const percentageDiv = document.createElement("div")
        percentageDiv.className = "score-percentage"
        percentageDiv.textContent = total > 0 ? `${percentage}%` : ` `

        row.append(nameDiv, valueDiv, value2Div, percentageDiv)
        syllabusScoreDiv.appendChild(row)
    })
}

function myDebug(whereami, quizState) {
    console.log("-----quizState-----", whereami, quizState)
}

/**
 * Triggers MathJax to re-render a specific element or a collection of elements.
 * @param {HTMLElement|NodeListOf<HTMLElement>} elements - The element(s) to process.
 */
function mathjaxUpdate(elements) {
    // Ensure the input is an array-like object, then convert it to an array.
    const elementsToProcess = Array.isArray(elements) ? elements : [elements]

    const mathRegex = /[$]{1,2}.*?[$]{1,2}/g

    const typesetArray = elementsToProcess.map(item => {
        return item.textContent.match(mathRegex)
    })
    console.log("mathjaxUpdate any math matches?", typesetArray)

    const elementsWithMath = elementsToProcess.filter(element => {
        const hasMatch = mathRegex.test(element.textContent)
        mathRegex.lastIndex = 0
        console.log("mathjaxupdate regex test result:", element, hasMatch)
        return hasMatch
    })

    if (elementsWithMath.length > 0 && window.MathJax?.typesetPromise) {
        // Pass the array of elements to MathJax for efficient processing.
        MathJax.typesetPromise(elementsToProcess).catch((err) =>
            console.error("mathjaxUpdate MathJax typesetting error:", err)
        )
    } else if (elementsWithMath.length === 0) {
        console.log("mathjaxUpdate No elements with maths delimiters found")
    } else {
        console.warn("mathjaxUpdate MathJax is not loaded or ready.")
    }
}



// ====================================
// 9. EVENT LISTENERS
// ====================================
// All the interactive behavior in one place

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
        <p>${q.explanation ? q.explanation : ""}</p>
        <p>Source: ${q.source}</p>
        <p>Reference: ${q.lookup}</p>
        <p>Syllabus: ${q.syllabus}</p>
        `

    // Trigger MathJax to typeset the newly injected content
    // if (window.MathJax?.typesetPromise) {
    //     MathJax.typesetPromise([explanationDiv]).catch((err) =>
    //         console.error("MathJax typeset error:", err)
    //     )
    // }
    // todo: could create explanation contents ready for use in loadQuestion
    // and handle mathjax there

    mathjaxUpdate(explanationDiv)
})

syllabusButton.addEventListener("click", () => {
    console.log("EVENT LISTENER FOR SYLLABUS ITEMS BEFORE CHANGE:", syllabusItemsDiv.style.display)
    if (syllabusItemsDiv.style.display === "none") {
        syllabusItemsDiv.style.display = "inline-block"
    } else {
        syllabusItemsDiv.style.display = "none"
    }
    console.log("EVENT LISTENER FOR SYLLABUS ITEMS AFTER CHANGE:", syllabusItemsDiv.style.display)
})

searchForm.addEventListener("submit", function (event) {
    console.log("Search Button clicked! Event triggered by:", event.currentTarget.id)

    event.preventDefault()

    // Clear previous state
    explanationDiv.innerHTML = ""

    // Get search parameters
    quizState.searchType = document.getElementById("searchType").value
    quizState.searchValue = document.getElementById("searchValue").value
    quizState.randomQuestions = shuffleArray([...W99quiz])

    // Apply filtering
    if (quizState.searchType === "") {
        quizState.questionPack = [...quizState.randomQuestions]
    } else if (quizState.searchType === "syllabus") {
        quizState.questionPack = quizState.randomQuestions.filter(q =>
            q.syllabus && q.syllabus.startsWith(String(quizState.searchValue)))
    } else if (quizState.searchType === "46questions") {
        quizState.questionPack = quizState.randomQuestions.slice(0, 46)
    } else if (quizState.searchType === "58questions") {
        quizState.questionPack = quizState.randomQuestions.slice(0, 58)
    } else if (quizState.searchType === "10questions") {
        quizState.questionPack = quizState.randomQuestions.slice(0, 10)
    } else if (quizState.searchType === "tagged") {
        quizState.questionPack = quizState.randomQuestions.filter(q => q.tagged === true)
    } else if (quizState.searchType === "source") {
        quizState.questionPack = quizState.randomQuestions.filter(q =>
            q.source.includes(quizState.searchValue))
    } else if (quizState.searchType === "question") {
        quizState.questionPack = quizState.randomQuestions.filter(q =>
            q.question.toLowerCase().includes(quizState.searchValue.toLowerCase()))
    } else {
        throw new Error("Search used is not yet available")
    }

    if (quizState.questionPack.length === 0) {
        throw new Error("Search found no data matching the filter provided")
    }

    // Shuffle answers and prepare questions
    const shuffledQuestionsArray = quizState.questionPack.map(shuffleQuestion)
    quizState.questionPack = [...shuffledQuestionsArray]
    quizState.questionPackLength = quizState.questionPack.length

    // Reset quiz state
    myDebug("SEARCH BEFORE INIT", quizState)

    quizState.score = 0
    quizState.currentQuestion = 0
    quizState.wrongAnswers = []
    quizState.syllabusScore = Array.from({ length: 10 }, (_, i) => {
        return {
            section: i,
            correct: 0,
            incorrect: 0
        }
    })

    myDebug("SEARCH AFTER INIT", quizState)

    // Show quiz interface
    nextQuestionButton.style.display = "inline-block"
    explanationButton.style.display = "inline-block"
    syllabusButton.style.display = "inline-block"
    syllabusDiv.style.display = "inline-block"

    loadQuestion()
})

// ====================================
// 10. APP INITIALIZATION
// ====================================
// Set up initial state and run startup checks
// This is only done once during the program's life
// multiple quiz sessions can run through the SEARCH button

// Initial UI state
syllabusButton.style.display = "none"
explanationButton.style.display = "none"
nextQuestionButton.style.display = "none"
syllabusDiv.style.display = "none"

// Run validation checks
syllabusCheck()

// Final debug
myDebug("startup completed: now waiting for Search to be clicked", quizState)

