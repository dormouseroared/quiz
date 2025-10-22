// this routine runs in node
// it takes the array of syllabus keys in the first six weeks of the course
// and filters the FULL question bank for each key, to
// display a total number of questions for each key

import after_week06_syllabus_list from "./after-week06-syllabus-list.js"
import W99quiz from "./fullQuestions/W99quiz_FULL.js"

console.log("Syllabus keys in After Week06:", after_week06_syllabus_list.length)
console.log("FULL Question bank question total:", W99quiz.length)

const result = after_week06_syllabus_list.map((key) => {
  const found = W99quiz.filter((q) => q.syllabus === key)
  console.log(key, found.length)
})
// console.log(result, result.length)
