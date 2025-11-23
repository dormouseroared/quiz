// report.js
import syllabusItems from "./syllabusItems.js"

// Parse command line arguments
const args = process.argv.slice(2)
let keysFilter = null

args.forEach((arg) => {
  if (arg.startsWith("--keys=")) {
    keysFilter = arg.split("=")[1]
  }
})

// Filter syllabus items
let filteredItems = syllabusItems

if (keysFilter) {
  filteredItems = syllabusItems.filter((item) => {
    return item.key.startsWith(keysFilter) && item.level === "full"
  })
}

// Generate markdown report
console.log("# Syllabus Items Report\n")

if (keysFilter) {
  console.log(`**Filter:** Keys starting with \`${keysFilter}\`\n`)
}

console.log(`**Total items:** ${filteredItems.length}\n`)
console.log("| Key | Sub Title | Flashcards | Status |")
console.log("|-----|-----------|------------|--------|")

filteredItems.forEach((item) => {
  const flashcardCount = item.flashcards ? item.flashcards.length : 0
  const subTitle = item.subTitle || "*(no subtitle)*"
  const status = flashcardCount > 0 ? "✅" : "❌"
  console.log(`| ${item.key} | ${subTitle} | ${flashcardCount} | ${status} |`)
})

// Summary statistics
const totalFlashcards = filteredItems.reduce((sum, item) => {
  return sum + (item.flashcards ? item.flashcards.length : 0)
}, 0)

const itemsWithFlashcards = filteredItems.filter(
  (item) => item.flashcards && item.flashcards.length > 0,
).length

const itemsWithoutFlashcards = filteredItems.length - itemsWithFlashcards

console.log("\n## Summary\n")
console.log(`- **Total flashcards:** ${totalFlashcards}`)
console.log(`- **Items with flashcards:** ${itemsWithFlashcards}`)
console.log(`- **Items needing flashcards:** ${itemsWithoutFlashcards}`)

if (filteredItems.length > 0) {
  console.log(
    `- **Average flashcards per item:** ${(totalFlashcards / filteredItems.length).toFixed(2)}`,
  )
  console.log(
    `- **Coverage:** ${((itemsWithFlashcards / filteredItems.length) * 100).toFixed(1)}%`,
  )
}

// List items without flashcards
if (itemsWithoutFlashcards > 0) {
  console.log("\n## Items Needing Flashcards\n")
  filteredItems
    .filter((item) => !item.flashcards || item.flashcards.length === 0)
    .forEach((item) => {
      console.log(`- **${item.key}** - ${item.subTitle || item.title}`)
    })
}
