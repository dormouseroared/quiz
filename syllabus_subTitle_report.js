import W99quiz from "./fullQuestions/W99quiz_FULL.js"
import syllabusItems from "./syllabusItems.js"

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

const prop = syllabusItems.filter((item) => {
  return item.key.startsWith("5") && item.level.toLowerCase() === "full"
})
console.log(prop.length, prop[0])

// const output = prop.map((item) => {
//     return {

//         item.key,
//         item.subTitle,
//     }
// })
