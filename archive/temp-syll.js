import syllabusItems from './syllabusItems.js'

const fullLevelItems = syllabusItems.filter(item => item.level === 'full')

console.log("Have filtered:",fullLevelItems.length, "full objects from syllabus")

console.log("Here is the test from the first one:", fullLevelItems[0].text)

const flashcardFullItems = fullLevelItems.filter(item => item.flashcards)

console.log("we have this many objects with a flashcards property", flashcardFullItems.length)

console.log(flashcardFullItems[0].flashcards[0].front)
console.log(flashcardFullItems[0].flashcards[0].back)

const test1 = flashcardFullItems.filter(item => item.flashcards.front)
console.log(test1.length)

