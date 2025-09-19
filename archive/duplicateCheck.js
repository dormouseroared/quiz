import syllabusItems from "./syllabusItems.js"

console.log("flatMap converts an array of arrays into an array")
const shopping = [["biscuits"], ["bananas", "bread"]]
const flatShopping = shopping.flatMap(item => item)
console.log(flatShopping)

const testSyllabus = [
    {
        key: 1,
        flashcards: [
            {
                id: "first",
                name: "first name"
            },
            {
                id: "second",
                name: "second name"
            },
        ]
    }
]

const getFlashcardArray = testSyllabus.filter(item => item.flashcards)

console.log(getFlashcardArray)

const getFlashcardIdArray = getFlashcardArray.flatMap(item => item.flashcards.map(item => item.id))

console.log(getFlashcardIdArray)






// create an array of flashcard objects
const itemsWithFlashcards = syllabusItems.filter(item => item.flashcards)
console.log(itemsWithFlashcards.length)

// console.log(itemsWithFlashcards)

// 
const output = itemsWithFlashcards.flatMap(item => item.flashcards.map(item => item.id))

console.log(output)

let result = undefined + 1
console.log(result)

const idCount = {}
output.forEach(item => {
    // console.log(item)
    if (idCount[item]) {
        idCount[item]++
    } else {
        idCount[item] = 1
    }
})

console.log(idCount)

console.log(Object.keys(idCount))

const idActionList = Object.keys(idCount).filter(item => idCount[item] > 1)

console.log(idActionList)