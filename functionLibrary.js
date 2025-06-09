import syllabusItems from "./syllabusItems.js"

const questionDiv = document.getElementById("question")
const searchForm = document.getElementById("searchForm")
const optionsDiv = document.getElementById("options")
const resultDiv = document.getElementById("result")
const syllabusScoreDiv = document.getElementById("syllabusScore")
const syllabusItemsDiv = document.getElementById("syllabusItems")

export const nextQuestionButton = document.getElementById("next-btn")
export const explanationButton = document.getElementById("explanation-btn")
export const explanationDiv = document.getElementById("explanation")
export const syllabusDiv = document.getElementById("syllabus")




export const section = [
    { id: 0, name: "dummy", questions: 0, notes: "58 questions in 2 hours with pass at 35 correct or 60%" },
    { id: 1, name: "Licensing conditions", questions: 7, weeks: [] },
    { id: 2, name: "Technical aspects", questions: 11, weeks: [] },
    { id: 3, name: "Transmitters and receivers", questions: 12, weeks: [] },
    { id: 4, name: "Feeders and antennas", questions: 4, weeks: [] },
    { id: 5, name: "Propagation", questions: 3, weeks: [] },
    { id: 6, name: "Electro magnetic compatibility", questions: 10, weeks: [] },
    { id: 7, name: "Operating practices and procedures", questions: 2, weeks: [] },
    { id: 8, name: "Safety", questions: 4, weeks: [] },
    { id: 9, name: "Measurements and construction", questions: 5, weeks: [] },
]


export const quizState = {
    currentQuestion: 0,
    questionPack: null,
    randomQuestions: null,
    score: 0,
    searchType: null,
    searchValue: null,
    syllabusScore: [
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
    ],
    wrongAnswers: [],
}
/**
 * Validates that every quiz question is associated with at least one matching syllabus item.
 *
 * This version uses explicit loops to make the validation logic step-by-step clearer.
 *
 * @param {Array<Object>} quizQuestions - An array of quiz question objects.
 * Each question object is expected to have a `syllabus` string property (e.g., { syllabus: "1g.1 & 3f.7", ... }).
 * @param {Array<Object>} syllabusItems - An array of syllabus item objects.
 * Each syllabus item object is expected to have a `key` string property (e.g., { key: "1g.1", ... }).
 * @returns {boolean} - `true` if all quiz questions have a matching syllabus key; otherwise, `false`.
 */
export function validateSyllabusKeysExplicit(quizQuestions, syllabusItems) {
    // Loop through each quiz question
    for (const question of quizQuestions) {
        // Extract the first 4 characters of the syllabus tag for the current question
        const questionSyllabusPrefix = question.syllabus.slice(0, 4)

        // Assume for now that this question's syllabus prefix does NOT match any syllabus item
        let foundMatchingSyllabusItem = false

        // Now, loop through each syllabus item to see if there's a match
        for (const item of syllabusItems) {
            // If the syllabus item's key matches the question's syllabus prefix
            if (item.key === questionSyllabusPrefix) {
                foundMatchingSyllabusItem = true // Mark that a match was found
                break // No need to check other syllabus items for this question, we found one!
            }
        }

        // If, after checking all syllabus items, we still haven't found a match for this question,
        // then the overall validation fails immediately.
        if (!foundMatchingSyllabusItem) {
            return false // One question failed, so the whole validation fails
        }
    }

    // If we've gone through ALL quiz questions and none of them failed the check,
    // then all questions are valid.
    return true
}



/**
 * Shuffles the options of a question object, and updates the correct answer index.
 *
 * @param {Object} questionObject - The question object containing options and a correct answer index.
 * @param {Array} questionObject.options - An array of answer choices.
 * @param {number} questionObject.correct - The index of the correct answer in the original options array.
 * @returns {Object} A new question object with shuffled options and an updated correct answer index.
 */
export function shuffleQuestion(questionObject) {
    // Create a copy to avoid modifying the original object directly
    // as this parameter id passed by reference so still refers 
    // to the object in the original array

    // spread operator is only for shallow copies

    // const newQuestion = { ...questionObject }
    const newQuestion = structuredClone(questionObject)

    // Shuffle the options array
    const shuffledOptions = shuffleArray2([...newQuestion.options])

    // Find the new index of the correct answer
    const correctOptionText = newQuestion.options[newQuestion.correct]
    const newCorrectIndex = shuffledOptions.indexOf(correctOptionText)

    const originalOrder = shuffledOptions.map(option => newQuestion.options.indexOf(option))

    // Update the question object with the shuffled options and new correct index
    newQuestion.options = shuffledOptions
    newQuestion.correct = newCorrectIndex
    newQuestion.originalOrder = originalOrder

    return newQuestion
}

export function findSyllabusItems(syllabusItems, key) {
    return syllabusItems.filter(item => item.key === key)
}

function shuffleArray2(array) {
    let currentIndex = array.length
    let randomIndex
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]]
    }
    return array
}


// Fisher-Yates shuffle produces unbiased results, good for arrays of any size
export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1)); // Random index
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]] // Swap elements
    }
    return array
}

/**
 * Loads and displays the current quiz question.
 * 
 * This includes rendering the question text, options, and related syllabus details.
 * Also performs validation checks on the question object (e.g., syllabus format, options count).
 *
 * Throws errors if:
 * - The syllabus field is empty or incorrectly formatted
 * - There are not exactly four options
 * 
 * UI elements updated:
 * - questionDiv
 * - optionsDiv
 * - syllabusDiv
 * - syllabusItemsDiv
 *
 * Called when advancing to a new question in the quiz:
 * for the first time at the conclusion of pressing the Search button
 * and then when Next Question button is clicked (if more questions)
 */
export function loadQuestion() {

    console.group("loadQuestion")

    myDebug("loadQuestion(): start", quizState)

    // 
    // Section: SETUP
    // 

    const q = quizState.questionPack[quizState.currentQuestion]
    const qLength = quizState.questionPackLength

    // 
    // Section: SYLLABUS HEADING
    // 1. Licensing Conditions (7 exam questions)
    // 

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

    syllabusDiv.textContent = `${section[q.syllabus[0]].id}. ${section[q.syllabus[0]].name} (${section[q.syllabus[0]].questions} exam questions)`
    syllabusDiv.title = q.syllabus

    // 
    // Section: QUESTION
    // Q1/58. How many beans make five?
    // 

    questionDiv.innerHTML = `Q${quizState.currentQuestion + 1}/${qLength}. ${q.question}`
    questionDiv.title = q.source


    // 
    // Section: CREATE A BUTTON FOR EACH ANSWER OPTION
    // 

    if (q.options.length !== 4) {
        throw new Error("loadQuestion: should be 4 options")
    }

    optionsDiv.innerHTML = ""

    //  C L O S U R E         I N          A C T I O N
    // each iteration is a new scope (execution context) in which
    // option and index are defined for that specific iteration
    // an anonymous function is created, but does not run until
    // an answer button is clicked much later. The anon function
    // closes over (remembers) the value of index, even though the forEach
    // is long completed.
    q.options.forEach((option, index) => {

        if (option === "") {
            throw new Error("loadQuestion: empty option found")
        }

        const btn = document.createElement("button")
        btn.classList.add("option-btn")
        btn.textContent = option
        btn.title = q.originalOrder[index]
        btn.addEventListener("click", () => {
            console.log("loadQuestion closure as event listener created for index:", index)
            selectAnswer(index)
        })
        optionsDiv.appendChild(btn)

    })

    //
    // Section: EXPLANATION AND NEXT QUESTION BUTTONS
    // 

    nextQuestionButton.disabled = true
    explanationButton.disabled = true

    if (q.tagged) {
        console.log("tagged:", q.tagged)
        explanationButton.classList.add("tagged")
    } else {
        console.log("tagged: false")
        explanationButton.classList.remove("tagged")
    }

    if (q.explanation === "") {
        console.info("explanation is blank:", q.explanation)
        explanationButton.classList.add("blankExplanation")
    } else {
        console.info("explanation is not blank:", q.explanation)
        explanationButton.classList.remove("blankExplanation")
    }

    // 
    // Section: SYLLABUS ITEMS
    // 

    let matchingItems = findSyllabusItems(syllabusItems, q.syllabus.slice(0, 4))
    console.log("search for matching syllabus items:", q.syllabus, q.syllabus.slice(0, 4), matchingItems)

    if (matchingItems.length === 0) {
        throw new Error("no syllabus items found")
    }

    // syllabusItemsDiv.innerHTML = ""

    // matchingItems.forEach(item => {
    //     let p = document.createElement("p")
    //     p.textContent = `${item.level}: ${item.text}` // Add syllabus text
    //     syllabusItemsDiv.appendChild(p)
    // })

    // TODO: replace p with ul and li

    console.log(q.syllabus, "has", matchingItems.length, "items")

    syllabusItemsDiv.innerHTML = ""

    const ul = document.createElement("ul")

    matchingItems.forEach(item => {
        const li = document.createElement("li")
        li.innerHTML = `${item.key} <span class="highlightLevel">${item.level}</span>: ${item.text}` // Add syllabus text
        ul.appendChild(li)
    })

    syllabusItemsDiv.appendChild(ul)

    // 
    // Section: CLOSE DOWN
    // 

    console.groupEnd("loadQuestion")
}

function selectAnswer(index) {
    console.group("selectAnswer")
    myDebug("selectAnswer(index): start", quizState)
    const q = quizState.questionPack[quizState.currentQuestion]
    const buttons = document.querySelectorAll(".option-btn")

    buttons.forEach((btn) => btn.disabled = true)

    if (/[0-3]/.test(q.correct)) {

    } else {
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



export function showResult() {

    myDebug("showResult(): start", quizState)

    // TODO: using searchForm means the whole form is set to display="none" so do we need what comes next?
    // TODO: Yes, we do!
    searchForm.style.display = "none"

    nextQuestionButton.style.display = "none"
    explanationButton.style.display = "none"
    explanationDiv.style.display = "none"
    syllabusDiv.style.display = "none"
    questionDiv.style.display = "none"
    optionsDiv.style.display = "none"
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

    // TODO: This commented out code is for extra debug
    // const stack = new Error().stack.split("\n").slice(2)
    // console.log("Call stack depth:", stack.length)
    // console.log("Call stack:", stack.join("\n"))
}

function logWrongAnswer(index, q) {
    console.group("LOGWRONGANSWER")
    console.log("logging wrong answer", index, q, typeof (q))
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

export function myDebug(location, quizState) {
    console.log("-----quizState-----", location, quizState)
}

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
        percentageDiv.textContent = total > 0 ? (`${percentage}%`) : ` `

        row.append(nameDiv, valueDiv, value2Div, percentageDiv)
        syllabusScoreDiv.appendChild(row)
    })
}





/**
 * Validates that every quiz question is associated with at least one matching syllabus item.
 *
 * This function iterates through each quiz question and checks if the first four characters
 * of its `syllabus` property match the `key` property of any syllabus item.
 *
 * @param {Array<Object>} quizQuestions - An array of quiz question objects.
 * Each question object is expected to have a `syllabus` string property (e.g., { syllabus: "2g.1 & 4g.2", ... }).
 * @param {Array<Object>} syllabusItems - An array of syllabus item objects.
 * Each syllabus item object is expected to have a `key` string property (e.g., { key: "RSGB", ... }).
 * @returns {boolean} - `true` if all quiz questions have a matching syllabus key; otherwise, `false`.
 */
function validateSyllabusKeys(quizQuestions, syllabusItems) {
    return quizQuestions.every(question =>
        syllabusItems.some(item => item.key === question.syllabus.slice(0, 4))
    )
}



export function findMissingSyllabusKeys(quizQuestions, syllabusItems) {
    const syllabusKeys = syllabusItems.map(item => item.key) // Extract all valid syllabus keys
    const missingKeys = quizQuestions
        .map(q => q.syllabus.slice(0, 4))
        .filter(key => !syllabusKeys.includes(key)) // Find missing keys

    return missingKeys
}
