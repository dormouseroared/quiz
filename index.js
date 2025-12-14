// ====================================
// 1. IMPORTS AND EXTERNAL DEPENDENCIES
// ====================================

import W99quiz from "./fullQuestions/W99quiz_FULL.js"

import {
  RSGB_FULL_MOCK_1,
  RSGB_FULL_MOCK_2,
  RSGB_FULL_MOCK_3,
  EXAM_SECRETS_FULL_PAPER,
} from "./fullQuestions/W99quiz_FULL.js"

import syllabusItems from "./syllabusItems.js"
import flashcardsWidget from "./flashcards-widget/flashcards_widget_v9.js"

import diagramQuizWidget, {
  version as actualDiagramVersion,
} from "./diagram-quiz-widget-v21.js"
import { diagramQuizCards } from "./diagramQuizCards.js"
import after_Week06_Syllabus_List from "./after-week06-syllabus-list.js"

import showQuestionsBySyllabusCode from "./showQuestionsBySyllabusCode.js"

// alert(RSGB_FULL_MOCK_1.length)

const desiredDiagramVersion = "v21"

if (desiredDiagramVersion !== actualDiagramVersion) {
  console.error(
    `✗ Version mismatch! Expected ${desiredDiagramVersion}, got ${actualDiagramVersion}`,
  )
  throw new Error("Version mismatch - check your import path")
}

console.log(
  `✓ diagram-quiz-widget ${actualDiagramVersion} imported successfully`,
)

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
const flashcardButton = document.getElementById("flashcard-btn")
const nextQuestionButton = document.getElementById("next-btn")

const explanationDiv = document.getElementById("explanation")
const syllabusItemsDiv = document.getElementById("syllabusItems")
const resultDiv = document.getElementById("result")
const syllabusScoreDiv = document.getElementById("syllabusScore")

const flashcardsDiv = document.getElementById("flashcards")
const diagramQuizDiv = document.getElementById("diagramQuiz")

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

// Using Syllabus List and a parameter uses one of these subsets
// Beware duplicate syllabus codes as they will be added in that many times

const RECEIVERS_SYLLABUS_LIST = ["3h", "3i", "3j", "3k", "3l", "3m", "3n"]

const ANTENNAS_SYLLABUS_LIST = [
  "4a.3",
  "4b.1",
  "4d.1",
  "4d.2",
  "4e.1",
  "4e.2",
  "4e.3",
  "4f.1",
  "4f.2",
]

const TRANSMITTERS_01_SYLLABUS_LIST = ["3a.2", "3b.1", "3c.1", "3c.3"]

const TRANSMITTERS_02_SYLLABUS_LIST = [
  "3d.1",
  "3e.1",
  "3e.2",
  "3f.2",
  "3f.3",
  "3f.4",
  "3f.5",
]

const TRANSMITTERS_03_SYLLABUS_LIST = ["3g.1", "3g.2", "3g.3", "3g.4", "3g.5"]

const TRANSMITTERS_04_SYLLABUS_LIST = [
  "3h.3",
  "3i.1",
  "3i.2",
  "3i.3",
  "3i.4",
  "3i.5",
  "3j.1",
]

const TRANSMITTERS_05_SYLLABUS_LIST = [
  "3k.1",
  "3l.1",
  "3m.1",
  "3m.2",
  "3n.1",
  "3n.2",
]

const SAFETY_01_SYLLABUS_LIST = ["8a.1", "8a.2", "8a.6", "8d.1", "8e.1"]

const SAFETY_02_SYLLABUS_LIST = ["8f.4", "8f.5", "8f.6", "8f.7"]

const EMC_01_SYLLABUS_LIST = ["6a.2", "6a.4", "6b.1", "6b.2"]

const EMC_02_SYLLABUS_LIST = ["6b.3", "6c.1", "6c.2", "6c.3"]

const EMC_03_SYLLABUS_LIST = ["6d.1", "6d.2", "6e.1", "6e.2"]

const EMC_04_SYLLABUS_LIST = ["6e.3", "6f.1", "6f.2", "6g.1"]

const LICENSING_01_SYLLABUS_LIST = ["1c.1"]
const LICENSING_02_SYLLABUS_LIST = ["1d.1", "1g.1", "1h.1"]

const TECHNICAL_01_SYLLABUS_LIST = ["2a.1", "2b.1"]
const TECHNICAL_02_SYLLABUS_LIST = ["2d.1", "2d.2", "2d.3"]
const TECHNICAL_03_SYLLABUS_LIST = ["2d.4", "2d.7"]
const TECHNICAL_04_SYLLABUS_LIST = ["2e", "2f"]
const TECHNICAL_05_SYLLABUS_LIST = ["2g", "2h"]
const TECHNICAL_06_SYLLABUS_LIST = ["2i", "2j"]

const ANTENNAS_01_SYLLABUS_LIST = ["4a", "4b", "4d"]
const ANTENNAS_02_SYLLABUS_LIST = ["4e", "4f"]

const PROPAGATION_01_SYLLABUS_LIST = ["5a", "5c"]
const PROPAGATION_02_SYLLABUS_LIST = ["5b", "5d"]

const OPERATING_01_SYLLABUS_LIST = ["7a"]
const OPERATING_02_SYLLABUS_LIST = ["7b"]
const OPERATING_03_SYLLABUS_LIST = ["7h"]

const MEASUREMENTS_01_SYLLABUS_LIST = ["9a.1", "9a.3", "9a.4", "9a.5", "9a.6"]
const MEASUREMENTS_02_SYLLABUS_LIST = ["9a.7", "9a.8", "9a.9", "9b.1", "9c.1"]

let findCards = null

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
    incorrect: 0,
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
      ;[array[i], array[randomIndex]] = [array[randomIndex], array[i]]
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
// with a list of target syllabus keys, choose a random question with
// the matching syllabus from those available.
function selectQuestions(targets, MCQ) {
  const output = targets.map((target) => {
    // console.log("target", index, target)
    const matching = MCQ.filter((q) => q.syllabus === target)
    // console.log("matching", index, matching)
    const matchingRandomIndex = Math.floor(Math.random() * matching.length)
    const outputQuestion = matching[matchingRandomIndex]
    return outputQuestion
  })
  return output
}

// get mock exam questions in their original order as per real exam

function selectQuestionsForMockExam() {
  // alert(
  //   `selectQuestionsForMockExam: ${quizState.searchType} ${quizState.searchValue}`,
  // )

  if (quizState.searchValue === "RSGB_1") {
    return RSGB_FULL_MOCK_1
  } else if (quizState.searchValue === "RSGB_2") {
    return RSGB_FULL_MOCK_2
  } else if (quizState.searchValue === "RSGB_3") {
    return RSGB_FULL_MOCK_3
  } else if (quizState.searchValue === "SECRETS_1") {
    return EXAM_SECRETS_FULL_PAPER
  }
}
// select all questions where the syllabus key starts with one of the keys
// in a named list
function selectQuestionsForSyllabusList(list, MCQ) {
  console.warn("selectQuestionsForSyllabusList:", list)
  let targetList = null
  if (list === "RECEIVERS") {
    targetList = RECEIVERS_SYLLABUS_LIST
    console.log("targetList", targetList)
  } else if (list === "ANTENNAS") {
    targetList = ANTENNAS_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 3. TRANSMITTERS_01
  } else if (list === "TRANSMITTERS_01") {
    targetList = TRANSMITTERS_01_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 3. TRANSMITTERS_02
  } else if (list === "TRANSMITTERS_02") {
    targetList = TRANSMITTERS_02_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 3. TRANSMITTERS_03
  } else if (list === "TRANSMITTERS_03") {
    targetList = TRANSMITTERS_03_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 3. TRANSMITTERS_04
  } else if (list === "TRANSMITTERS_04") {
    targetList = TRANSMITTERS_04_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 3. TRANSMITTERS_05
  } else if (list === "TRANSMITTERS_05") {
    targetList = TRANSMITTERS_05_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 6. EMC_01
  } else if (list === "EMC_01") {
    targetList = EMC_01_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 6. EMC_02
  } else if (list === "EMC_02") {
    targetList = EMC_02_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 6. EMC_03
  } else if (list === "EMC_03") {
    targetList = EMC_02_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 6. EMC_04
  } else if (list === "EMC_04") {
    targetList = EMC_02_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 8. SAFETY_01
  } else if (list === "SAFETY_01") {
    targetList = SAFETY_01_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 8. SAFETY_02
  } else if (list === "SAFETY_02") {
    targetList = SAFETY_02_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 1. LICENSING_01
  } else if (list === "LICENSING_01") {
    targetList = LICENSING_01_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 1. LICENSING_02
  } else if (list === "LICENSING_02") {
    targetList = LICENSING_02_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 2. TECHNICAL_01
  } else if (list === "TECHNICAL_01") {
    targetList = TECHNICAL_01_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 2. TECHNICAL_02
  } else if (list === "TECHNICAL_02") {
    targetList = TECHNICAL_02_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 2. TECHNICAL_03
  } else if (list === "TECHNICAL_03") {
    targetList = TECHNICAL_03_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 2. TECHNICAL_04
  } else if (list === "TECHNICAL_04") {
    targetList = TECHNICAL_04_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 2. TECHNICAL_05
  } else if (list === "TECHNICAL_05") {
    targetList = TECHNICAL_05_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 2. TECHNICAL_06
  } else if (list === "TECHNICAL_06") {
    targetList = TECHNICAL_06_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 3. ANTENNAS_01
  } else if (list === "ANTENNAS_01") {
    targetList = ANTENNAS_01_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 3. ANTENNAS_02
  } else if (list === "ANTENNAS_02") {
    targetList = ANTENNAS_02_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 5. PROPAGATION_01
  } else if (list === "PROPAGATION_01") {
    targetList = PROPAGATION_01_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 5. PROPAGATION_02
  } else if (list === "PROPAGATION_02") {
    targetList = PROPAGATION_02_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 7. OPERATING_01
  } else if (list === "OPERATING_01") {
    targetList = OPERATING_01_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 7. OPERATING_02
  } else if (list === "OPERATING_02") {
    targetList = OPERATING_02_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 7. OPERATING_03
  } else if (list === "OPERATING_03") {
    targetList = OPERATING_03_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 9. MEASUREMENTS_01
  } else if (list === "MEASUREMENTS_01") {
    targetList = MEASUREMENTS_01_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // 9.MEASUREMENTS_02
  } else if (list === "MEASUREMENTS_02") {
    targetList = MEASUREMENTS_02_SYLLABUS_LIST
    console.warn("targetList", targetList)
    // NOTHING FOUND
  } else {
    console.warn("list is not supported")
  }

  // without flatMap the result is an array of arrays
  const bigResult = targetList.flatMap((target) => {
    const result2 = MCQ.filter((q) => q.syllabus.startsWith(target))
    return result2
  })

  console.warn("targetList:", bigResult.length)

  return bigResult
}
//
// ====================================
// 6. VALIDATION AND SETUP FUNCTIONS
// ====================================

function syllabusCheck() {
  console.group("CHECK EACH QUESTION HAS A VALID SYLLABUS")
  console.info("first object of questions array", W99quiz[0])
  console.info("first object of syllabusItems array", syllabusItems[0])

  const areSyllabusKeysValid = validateSyllabusKeysExplicit(
    W99quiz,
    syllabusItems,
  )
  console.warn(
    "Have all questions had their syllabus keys validated?",
    areSyllabusKeysValid,
  )

  const missingKeysArray = findMissingSyllabusKeys(W99quiz, syllabusItems)
  console.log(
    "question syllabus keys missing from syllabusItems",
    missingKeysArray,
  )
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

  // experimental display of approach to this question
  showExamStrategy(q)

  questionHasValidSyllabus(q)

  // Update syllabus section
  {
    const syllabusSection = section[q.syllabus[0]]
    const s = syllabusSection

    syllabusDiv.textContent = `${s.id}. ${s.name} (${s.questions} exam questions)`
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
      console.log(
        "loadQuestion closure as event listener created for index:",
        index,
      )
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
  syllabusButton.disabled = false
  explanationButton.disabled = true
  flashcardButton.disabled = true
  nextQuestionButton.disabled = true

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
    explanationButton.title =
      explanationButton.title === ""
        ? "explanation not yet available"
        : explanationButton.title + ", explanation not yet available"
  } else {
    console.info("explanation is not blank:", q.explanation)
    explanationButton.classList.remove("blankExplanation")
    explanationButton.title =
      explanationButton.title === ""
        ? "explanation available"
        : explanationButton.title + ", explanation available"
  }

  // Setup syllabus items
  syllabusItemsDiv.style.display = "none"
  let matchingItems = findSyllabusItems(syllabusItems, q.syllabus.slice(0, 4))

  console.log(
    "search for matching syllabus items:",
    q.syllabus,
    q.syllabus.slice(0, 4),
    matchingItems,
  )

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

  mathjaxUpdate(
    [
      questionDiv,
      optionsDiv,
      syllabusItemsDiv,
      document.getElementById("strategy"),
    ],
    "loadQuestion: questionDiv, optionsDiv,syllabusItemsDiv, strategy",
  )

  // todo: show flashcards available for this question

  showFlashcards(q.syllabus, syllabusItems)

  console.groupEnd("loadQuestion")
}

function selectAnswer(index) {
  console.group("selectAnswer")
  myDebug("selectAnswer(index): start", quizState)

  const q = quizState.questionPack[quizState.currentQuestion]
  const buttons = document.querySelectorAll(".option-btn")

  buttons.forEach((btn) => (btn.disabled = true))

  // todo: why was it erroring here?
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
  flashcardButton.style.display = "none"
  nextQuestionButton.style.display = "none"

  explanationDiv.style.display = "none"
  syllabusItemsDiv.style.display = "none"

  document.getElementById("strategy").style.display = "none"

  const highScore = localStorage.getItem("quizHighScore") || 0

  if (quizState.score > highScore) {
    localStorage.setItem("quizHighScore", quizState.score)
  }

  const scorePercent = (quizState.score * 100) / quizState.questionPackLength
  const scoreFixed = scorePercent.toFixed(1)

  resultDiv.innerHTML = `
        <h2>Full Licence: Quiz Completed</h2>
        <div>Score: ${quizState.score}/${quizState.questionPack.length} (${scoreFixed}%)</div>
        <div>Highest Score: ${Math.max(quizState.score, highScore)}</div>
        ${quizState.score > highScore ? "<div>Hey, New High Score!</div>" : ""}
        <div>Total number of Questions available: ${quizState.randomQuestions.length} </div>
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

function getStrategyEmoji(level) {
  const patterns = {
    1: "🟢",
    2: "🟢🟢",
    3: "🟡🟡🟡",
    4: "🟡🟡🟡🟡",
    5: "🔴🔴🔴🔴🔴",
  }
  return patterns[level] || ""
}

function showExamStrategy(q) {
  const strategy = document.getElementById("strategy")

  console.warn("showExamStrategy:", {
    examStrategy: q.examStrategy,
    examCalculation: q.examCalculation,
    exam_NOT: q.exam_NOT,
    examStrategyNotes: q.examStrategyNotes,
  })

  strategy.innerHTML = ""
  strategy.style.border = ""

  strategy.style.fontSize = "12px"

  if (q.examStrategy) {
    const emojiBar = getStrategyEmoji(q.examStrategy)

    // Build the display conditionally
    let display = `<span style="font-size: 26px; letter-spacing: -4px;" title="strategy">${emojiBar}</span>`

    if (q.examCalculation && q.examCalculation > 0) {
      display += `<span style="font-size: 26px; letter-spacing: -4px; background-color: #456;" title="calculation">${getStrategyEmoji(q.examCalculation)}</span>`
    }

    if (q.exam_NOT) {
      display += ` NOT: ${q.exam_NOT}`
    }

    // the window open is used so that a new browser tab is not created and left behind
    // note that this could also be done with href and some extras
    if (q.obsidianURL) {
      display += ` <span onclick="window.location.href='${q.obsidianURL}'; return false;" 
                  style="text-decoration: none; cursor: pointer; font-size: 26px; " 
                  title="Open analysis guide in Obsidian">&nbsp;&nbsp;🎯</span>`
    }

    // New video clip link
    if (q.clipId) {
      display += ` <span onclick="window.open('video-clips/video-clip-navigator.html?clip=${q.clipId}', '_blank'); return false;" 
                  style="text-decoration: none; cursor: pointer; font-size: 26px;" 
                  title="View related video clip ${q.clipId}">&nbsp;&nbsp;▶️</span>`
    }

    if (q.examStrategyNotes) {
      display += `
        <br><span style="filter: blur(2px); cursor: pointer; transition: filter 0.5s ease;" 
        title="Click to reveal exam strategy notes"
        onclick="this.style.filter='none'">
          ${q.examStrategyNotes}
        </span>`
    }

    strategy.innerHTML = display
  }

  if (q.exam_NOT) {
    strategy.style.color = "#00FF00"
  } else {
    strategy.style.color = "#fff"
  }

  if (q.examStrategy > 3 || q.exam_NOT) {
    strategy.style.border = "red 4px dotted"
  }

  console.warn(
    "showExamStrategy | strategy.style.cssText:",
    strategy.style.cssText,
  )
}
// THIS FUNCTION IS AN EARLY VERSION AND IS NOT USED
function showExamStrategy2(q) {
  const strategy = document.getElementById("strategy")
  strategy.style.fontSize = "12px"
  if (q.examStrategy) {
    strategy.innerHTML = `
      exam strategy: ${q.examStrategy}
      calculation: ${q?.examCalculation}
      NOT: ${q?.exam_NOT ? q.exam_NOT : ""}
      <br>
      ${q?.examStrategyNotes}
    `
  }
  if (q.exam_NOT) {
    strategy.style.color = "#00FF00"
  } else {
    strategy.style.color = "white"
  }
}

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
    const percentage =
      total > 0 ? ((score.correct / total) * 100).toFixed(1) : 0
    const syllabusName =
      section && section[index] && section[index].name
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
  // console.log("-----quizState-----", whereami, quizState)

  console.info("QUIZSTATE DEBUG")
  console.info("whereami:", whereami)
  console.info("currentQuestion", quizState.currentQuestion)
  // todo: show display and disable values
}

/**
 * mathjaxUpdate - Renders mathematical notation in HTML elements
 *
 * Summary: This function searches through HTML elements looking for math notation
 * (text between $ or $$), then uses the MathJax library to render it beautifully.
 *
 * @param {Element|Element[]} elements - One element or an array of elements to check
 * @param {string} whocalledme - Optional label for debugging (default: "unknown")
 *
 * Process:
 * 1. Converts input to an array (if it isn't already)
 * 2. Filters to find which elements contain math notation ($...$ or $$...$$)
 * 3. If math is found and MathJax is ready, renders it
 * 4. Logs helpful messages about what happened
 */
function mathjaxUpdate(elements, whocalledme = "unknown") {
  console.info("mathjaxUpdate called by:", whocalledme)

  // Step 1: Make sure we have an array of elements to work with
  const elementArray = Array.isArray(elements) ? elements : [elements]

  // Step 2: Create a pattern to find math notation like $x^2$ or $$\frac{1}{2}$$
  const mathPattern = /[$]{1,2}.*?[$]{1,2}/g

  // Step 3: Filter to find which elements contain math notation
  const elementsContainingMath = elementArray.filter((element) => {
    const containsMath = mathPattern.test(element.textContent)
    mathPattern.lastIndex = 0 // Reset regex for next check
    console.info(
      "Checking element for math:",
      element,
      "Contains math:",
      containsMath,
    )
    return containsMath
  })

  // Step 4: Render the math if found and MathJax is available
  if (elementsContainingMath.length > 0 && window.MathJax?.typesetPromise) {
    MathJax.typesetPromise(elementArray).catch((error) =>
      console.warn("MathJax had trouble rendering:", error),
    )
  } else if (elementsContainingMath.length === 0) {
    console.info("No math notation found in the elements")
  } else {
    console.info("MathJax library is not loaded yet")
  }
}
function showFlashcards(targetSyllabus, syllabusArray) {
  // trying out this layout...
  const findSyllabus = syllabusArray.filter(
    (item) =>
      // only use the first four characters to eliminate a & b
      item.key.slice(0, 4) === targetSyllabus &&
      // we only want syllabus items for the full level
      item.level === "full",
  )

  // any syllabus items without a flashcards property
  // return an empty array which flatMap deals with
  const tempCards = findSyllabus.flatMap((item) => item.flashcards || [])

  // now add the syllabus key to the flashcard object
  findCards = tempCards.map((flashcard) => {
    return { ...flashcard, key: targetSyllabus }
  })

  console.log("findCards with key?", findCards)

  console.log(
    "showFlashcards:",
    targetSyllabus,
    syllabusArray.length,
    findSyllabus.length,
    findCards.length,
  )

  flashcardButton.title = `Flashcards for syllabus item ${targetSyllabus}: ${findCards.length} `

  if (findCards.length === 0) {
    flashcardButton.disabled = true
  } else {
    flashcardButton.disabled = false
  }

  console.log(
    "showFlashcards: flashcardButton style.display and disabled",
    flashcardButton.style.display,
    flashcardButton.disabled,
  )

  // const widget = flashcardsWidget(findCards, flashcardsDiv)
  // widget.start()
}

// ====================================
// 9. EVENT LISTENERS
// ====================================
// All the interactive behavior in one place

nextQuestionButton.addEventListener("click", (event) => {
  console.log(
    "Next Question clicked! Event triggered by:",
    event.currentTarget.id,
  )
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

  const ref = q.reference && q.reference.trim() ? q.reference : ""

  explanationDiv.innerHTML = `
        <p>${q.explanation ? q.explanation : ""}</p>
        <p>Source: ${q.source}</p>
        <p>Lookup: ${q.lookup}</p>
        <p>Reference: ${ref}</p>
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

  mathjaxUpdate(
    explanationDiv,
    "explanation button handler with explanationDiv DOM object",
  )
})

flashcardButton.addEventListener("click", () => {
  console.log("flashcards button click event")
  const widget = flashcardsWidget(findCards, flashcardsDiv)
  widget.start()
})

syllabusButton.addEventListener("click", () => {
  console.log(
    "EVENT LISTENER FOR SYLLABUS ITEMS BEFORE CHANGE:",
    syllabusItemsDiv.style.display,
  )
  if (syllabusItemsDiv.style.display === "none") {
    syllabusItemsDiv.style.display = "inline-block"
  } else {
    syllabusItemsDiv.style.display = "none"
  }
  console.log(
    "EVENT LISTENER FOR SYLLABUS ITEMS AFTER CHANGE:",
    syllabusItemsDiv.style.display,
  )
})

searchForm.addEventListener("submit", function (event) {
  console.log(
    "Search Button clicked! Event triggered by:",
    event.currentTarget.id,
  )

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
    quizState.questionPack = quizState.randomQuestions.filter(
      (q) => q.syllabus && q.syllabus.startsWith(String(quizState.searchValue)),
    )
  } else if (quizState.searchType === "46questions") {
    quizState.questionPack = quizState.randomQuestions.slice(0, 46)
  } else if (quizState.searchType === "58questions") {
    quizState.questionPack = quizState.randomQuestions.slice(0, 58)
  } else if (quizState.searchType === "10questions") {
    quizState.questionPack = quizState.randomQuestions.slice(0, 10)
  } else if (quizState.searchType === "tagged") {
    quizState.questionPack = quizState.randomQuestions.filter(
      (q) => q.tagged === true,
    )
  } else if (quizState.searchType === "source") {
    quizState.questionPack = quizState.randomQuestions.filter((q) =>
      q.source.includes(quizState.searchValue),
    )
  } else if (quizState.searchType === "question") {
    quizState.questionPack = quizState.randomQuestions.filter((q) =>
      q.question.toLowerCase().includes(quizState.searchValue.toLowerCase()),
    )
  } else if (quizState.searchType === "afterweek06") {
    console.warn("afterweek06")
    quizState.questionPack = selectQuestions(
      after_Week06_Syllabus_List,
      quizState.randomQuestions,
    )
  } else if (quizState.searchType === "afterWeek06Drill") {
    console.warn("afterWeek06Drill First 20...")
    quizState.questionPack = quizState.randomQuestions
      .filter((q) => {
        return (
          q.examStrategy <= 2 && after_Week06_Syllabus_List.includes(q.syllabus)
        )
      })
      .slice(0, 20)
    // after week 06 syllabus list for a given source
  } else if (quizState.searchType === "afterWeek06Source") {
    console.warn("afterWeek06 Source")
    quizState.questionPack = W99quiz.filter((q) =>
      q.source.includes(quizState.searchValue),
    ).filter((q) => after_Week06_Syllabus_List.includes(q.syllabus))
    // syllabusList
  } else if (quizState.searchType === "syllabusList") {
    quizState.questionPack = selectQuestionsForSyllabusList(
      quizState.searchValue,
      quizState.randomQuestions,
    )
  } else if (quizState.searchType === "mockExam") {
    quizState.questionPack = selectQuestionsForMockExam()
    // could not find the selected searchType
  } else {
    throw new Error("Search used is not yet available")
  }

  if (quizState.questionPack.length === 0) {
    throw new Error("Search found no data matching the filter provided")
  }

  // Shuffle answers and prepare questions
  // if (!quizState.searchType === "mockExam") {
  const shuffledQuestionsArray = quizState.questionPack.map(shuffleQuestion)
  quizState.questionPack = [...shuffledQuestionsArray]
  // }

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
      incorrect: 0,
    }
  })

  // new: create a quick report in downloads of the
  // number of questions by syllabus

  console.log("showQuestionsBySyllabusCode:", quizState.questionPackLength)

  showQuestionsBySyllabusCode(
    quizState.questionPack,
    quizState.searchType,
    quizState.searchValue,
  )

  myDebug("SEARCH AFTER INIT", quizState)

  // Show quiz interface
  syllabusButton.style.display = "inline-block"
  explanationButton.style.display = "inline-block"
  flashcardButton.style.display = "inline-block"
  nextQuestionButton.style.display = "inline-block"

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
flashcardButton.style.display = "none"
nextQuestionButton.style.display = "none"

syllabusDiv.style.display = "none"

// Run validation checks
syllabusCheck()

// Final debug
myDebug("startup completed: now waiting for Search to be clicked", quizState)

console.log(`diagramQuiz starting with: ${diagramQuizCards.length} cards`)
const diagramWidget = diagramQuizWidget(diagramQuizCards, diagramQuizDiv)
diagramWidget.start()
