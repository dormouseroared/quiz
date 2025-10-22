// this routine runs in node
// it takes the array of syllabus keys in the first six weeks of the course
// and filters the question bank for one source

import after_week06_syllabus_list from "./after-week06-syllabus-list.js"
import W99quiz from "./fullQuestions/W99quiz_FULL.js"

console.log("Syllabus keys in After Week06:", after_week06_syllabus_list.length)
console.log("FULL Question bank question total:", W99quiz.length)

const result = W99quiz.filter((q) => q.source.includes("RSGB Full Mock 1"))

console.log(result.length)

const result2 = result.filter((q) =>
  after_week06_syllabus_list.includes(q.syllabus),
)

console.log(result2.length)

const test1 = W99quiz.filter((q) =>
  q.source.includes("RSGB Full Mock 1"),
).filter((q) => after_week06_syllabus_list.includes(q.syllabus))

console.log(test1.length)
