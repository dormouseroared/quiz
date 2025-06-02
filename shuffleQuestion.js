
/**
 * Shuffles the options of a question object while maintaining the correct answer reference.
 *
 * @param {Object} questionObject - The question object containing options and a correct answer index.
 * @param {Array} questionObject.options - An array of answer choices.
 * @param {number} questionObject.correct - The index of the correct answer in the original options array.
 * @returns {Object} A new question object with shuffled options and an updated correct answer index.
 */
export function shuffleQuestion(questionObject) {
    // Create a copy to avoid modifying the original object directly
    const newQuestion = { ...questionObject }

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
    let currentIndex = array.length, randomIndex
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]]
    }
    return array
}
