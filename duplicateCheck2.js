import syllabusItems from "./syllabusItems.js"

const getFlashcards = syllabusItems.slice(0, 5).map(obj => obj.flashcards || [])

console.log("before:", syllabusItems.length, "after", getFlashcards.length)

console.log(getFlashcards)

// with flatMap, the array of arrays of objects becomes an array of objects
// aka flattened

// const getFlashCards2 = syllabusItems.slice(0, 5).flatMap(obj => obj.flashcards || [])
const getFlashCards2 = syllabusItems.flatMap(obj => obj.flashcards || [])

console.log(getFlashCards2)

const getFlashCards3 = getFlashCards2.map(obj => obj.id)

console.log("getFlashcards3:", getFlashCards3.length, getFlashCards3)

const idCount = {}
getFlashCards3.forEach(item => {
    // console.log(item)
    if (idCount[item]) {
        idCount[item]++
    } else {
        idCount[item] = 1
    }
})

console.log(idCount)

const idActionList = Object.keys(idCount).filter(item => idCount[item] > 1)

console.log("The action list of duplicate ids contains:", idActionList.length)
console.log("The action list of duplicate ids contains:", idActionList)