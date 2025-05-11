function displaySyllabusScores(scores) {
    const syllabusScoreDiv = document.getElementById("syllabusScores") // Assuming you have an element with this ID
    syllabusScoreDiv.innerHTML = ""

    // Define consistent column widths
    const nameWidth = 40
    const scoreWidth = 5 // Adjust as needed
    const percentageWidth = 7 // Adjust as needed

    // Create a header row for better readability (optional)
    const headerText = `${"Syllabus Name".padEnd(nameWidth)} ${"Score".padStart(scoreWidth)} (Percentage)`
    const headerElement = document.createElement("pre")
    headerElement.textContent = headerText
    syllabusScoreDiv.appendChild(headerElement)

    scores.forEach((score, index) => {
        const totalAttempts = score.correct + score.incorrect
        const percentage = totalAttempts > 0 ? ((score.correct / totalAttempts) * 100).toFixed(1) : 0

        // Ensure 'section' array is defined and has the correct index
        const syllabusName = section && section[index] && section[index].name ? section[index].name : `Syllabus ${index + 1}`

        const resultText = `${syllabusName.padEnd(nameWidth, " ")} ${String(score.correct).padStart(scoreWidth, " ")} (${percentage.padStart(percentageWidth, " ")}%)`

        const scoreElement = document.createElement("pre")
        scoreElement.textContent = resultText
        syllabusScoreDiv.appendChild(scoreElement)
    })
}

// Assuming you have a 'section' array defined somewhere like this:
const section = [
    { name: "Introduction to Programming" },
    { name: "Data Structures and Algorithms" },
    { name: "Web Development Fundamentals" },
    { name: "Advanced Backend Concepts" },
    { name: "Mobile Application Development" },
    // ... more sections
]

// Example usage (assuming you have a syllabusScoreDiv in your HTML):
const sampleScores = [
    { correct: 15, incorrect: 5 },
    { correct: 20, incorrect: 2 },
    { correct: 10, incorrect: 10 },
    { correct: 25, incorrect: 1 },
    { correct: 8, incorrect: 7 },
]

// Make sure you have an HTML element with the ID "syllabusScores"
const syllabusScoreDiv = document.createElement('div')
syllabusScoreDiv.id = 'syllabusScores'
document.body.appendChild(syllabusScoreDiv)

displaySyllabusScores(sampleScores)