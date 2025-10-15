import W99quiz from "./fullQuestions/W99quiz_FULL.js"
console.log("total", W99quiz.length)

const matching = W99quiz.filter((q) => q.syllabus === "2a.1")
console.log("matching", matching.length)

const targets = ["2a.1", "2b.1"]

const found = targets.map((target) => {
  const matching = W99quiz.filter((q) => q.syllabus === target)
  return {
    syllabusMatch: target,
    syllabusCount: matching.length,
  }
})

console.log(found)

// for one target check for zero questions

const zeroTargets = W99quiz.filter((q) => q.syllabus === "impossible")
console.log("zeroTargets", zeroTargets.length)

const zeroTargetsLength = W99quiz.filter(
  (q) => q.syllabus === "impossible",
).length
console.log("zeroTargetsLength", zeroTargetsLength)

const impossibleTargets = ["first", "second", "2a.1"]
const output = impossibleTargets.map((target) => {
  const result = W99quiz.filter((q) => q.syllabus === target).length
  return {
    syllabus: target,
    result: result,
  }
})
console.log("output", output)

//

const test2 = impossibleTargets.filter((target) => target === W99quiz.syllabus)
console.log(test2)

// now with gemini: extract all syllabus values
// then turn it into an array
// of unique unsorted syllabus

const allSyllabus = W99quiz.map((q) => q.syllabus)
console.log(allSyllabus.length)
console.log(allSyllabus[0])

const uniqueSyllabus = [...new Set(allSyllabus)]
console.log("uniqueSyllabus", uniqueSyllabus)

const missing1 = impossibleTargets.filter((target) => {
  return uniqueSyllabus.includes(target)
})

console.log("missing1", missing1)

const missing2 = impossibleTargets.filter((target) => {
  return !uniqueSyllabus.includes(target)
})

console.log("missing2 negate the includes test", missing2)

const products = [
  { name: "hammer", price: 12.3, rating: 3.4 },
  { name: "chisel", price: 4.99, rating: 8.1 },
  { name: "bradawl", price: 2.5, rating: 5.2 },
]

const names = products.map((prod) => prod.name)
console.log(names)

const ratings = products.map((prod) => prod.rating > 5)
console.log("ratings", ratings)

const sales = products.map((prod) => {
  return {
    saleProduct: prod.name,
    onSale: prod.rating > 5,
  }
})

console.log("sales", sales)

// claude

function getRandomQuestionForKey(key, MCQ) {
  const matching = MCQ.filter((q) => q.syllabus === key)
  const index = Math.floor(Math.random() * matching.length)
  return matching[index]
}

const q1 = getRandomQuestionForKey("2b.1", W99quiz)
console.log("q1", q1)

const q2 = getRandomQuestionForKey("impossible", W99quiz)
console.log("q2", q2)

// const questions5 = ["2b.1", "2b.2", "impossible", "2j.2", "3f.2"].map(
//   getRandomQuestionForKey,
// )

// console.log(questions5)
const questions6 = ["2b.1", "2b.2", "impossible", "2j.2", "3f.2"].map(
  (target) => getRandomQuestionForKey(target, W99quiz),
)

console.log("question6", questions6)

const questions5 = ["2b.1", "2b.2"].map((key) => {
  console.log("Processing key:", key)
  const result = getRandomQuestionForKey(key, W99quiz)
  console.log("Got question:", result?.syllabus)
  return result
})
console.log("again another way -------")
const newQuestions = ["2b.1"].map((key) => {
  return getRandomQuestionForKey(key, W99quiz)
})
console.log(newQuestions)

function getRandomQuestionForKey2(
  key,
  MCQ,
  maxExamStrategy = 5,
  maxExamCalculation = 5,
  exam_NOT_default = false,
) {
  const matching = MCQ.filter(
    (q) =>
      q.syllabus === key &&
      q.examStrategy <= maxExamStrategy &&
      q.examCalculation <= maxExamCalculation &&
      q.exam_NOT === exam_NOT_default,
  )
  const index = Math.floor(Math.random() * matching.length)
  return matching[index]
}

const questions7 = ["2b.1"].map((target) =>
  getRandomQuestionForKey2(target, W99quiz, 3),
)
console.log("questions7", questions7)
