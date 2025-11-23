// syllabus_check.js
import syllabusItems from "./syllabusItems.js"

// Parse command line arguments
const args = process.argv.slice(2)
let keysFilter = null

args.forEach((arg) => {
  if (arg.startsWith("--keys=")) {
    keysFilter = arg.split("=")[1]
  }
})

// Filter syllabus items for "full" level
let filteredItems = syllabusItems.filter((item) => {
  return item.level.toLowerCase() === "full"
})

if (keysFilter) {
  filteredItems = filteredItems.filter((item) => {
    return item.key.startsWith(keysFilter)
  })
}

// Generate markdown report
console.log("# 📚 Syllabus Items Report\n")

if (keysFilter) {
  console.log(`## 🎯 Filter: Section ${keysFilter}\n`)
}

console.log(
  `**Total items:** ${filteredItems.length} | **Level:** Full Licence\n`,
)
console.log("---\n")

// Summary statistics first
const totalFlashcards = filteredItems.reduce((sum, item) => {
  return sum + (item.flashcards ? item.flashcards.length : 0)
}, 0)

const itemsWithFlashcards = filteredItems.filter(
  (item) => item.flashcards && item.flashcards.length > 0,
).length

const itemsWithoutFlashcards = filteredItems.length - itemsWithFlashcards
const coveragePercent = (
  (itemsWithFlashcards / filteredItems.length) *
  100
).toFixed(1)

console.log("## 📊 Summary\n")
console.log("| Metric | Value |")
console.log("|--------|------:|")
console.log(`| Total Flashcards | **${totalFlashcards}** |`)
console.log(
  `| Items with Flashcards | ${itemsWithFlashcards} / ${filteredItems.length} |`,
)
console.log(`| Items Needing Flashcards | ${itemsWithoutFlashcards} |`)
console.log(
  `| Average per Item | ${(totalFlashcards / filteredItems.length).toFixed(2)} |`,
)
console.log(`| Coverage | **${coveragePercent}%** |`)
console.log("\n---\n")

// Detailed table
console.log("## 📋 Detailed Breakdown\n")
console.log("| Key | Topic | Cards | Status |")
console.log("|:---:|:------|------:|:------:|")

filteredItems.forEach((item) => {
  const flashcardCount = item.flashcards ? item.flashcards.length : 0
  const subTitle = item.subTitle || item.title || "*(no title)*"
  const status = flashcardCount > 0 ? "✅ Ready" : "⚠️ TODO"
  const countDisplay = flashcardCount > 0 ? `**${flashcardCount}**` : "0"
  console.log(`| ${item.key} | ${subTitle} | ${countDisplay} | ${status} |`)
})

console.log("\n---\n")

// Items without flashcards - formatted as checklist
if (itemsWithoutFlashcards > 0) {
  console.log("## ⚠️ Items Needing Flashcards\n")
  console.log(`> **${itemsWithoutFlashcards} items** need flashcard coverage\n`)

  filteredItems
    .filter((item) => !item.flashcards || item.flashcards.length === 0)
    .forEach((item) => {
      const subTitle = item.subTitle || item.title || "*(no title)*"
      console.log(`- [ ] **${item.key}** — ${subTitle}`)
    })
  console.log("")
} else {
  console.log("## 🎉 Complete!\n")
  console.log("> All items have flashcard coverage.\n")
}

// Items with good coverage
const wellCoveredItems = filteredItems.filter(
  (item) => item.flashcards && item.flashcards.length >= 3,
)

if (wellCoveredItems.length > 0) {
  console.log("---\n")
  console.log("## ✨ Well-Covered Topics\n")
  console.log(`> **${wellCoveredItems.length} items** with 3+ flashcards\n`)

  wellCoveredItems.forEach((item) => {
    const subTitle = item.subTitle || item.title
    const count = item.flashcards.length
    console.log(`- ✅ **${item.key}** (${count} cards) — ${subTitle}`)
  })
  console.log("")
}

// Study priority suggestions
console.log("---\n")
console.log("## 🎯 Study Priority Suggestions\n")

if (itemsWithoutFlashcards > 0) {
  console.log("### 🔴 High Priority (No flashcards yet)\n")
  const noCoverage = filteredItems.filter(
    (item) => !item.flashcards || item.flashcards.length === 0,
  )
  noCoverage.slice(0, 5).forEach((item, idx) => {
    const subTitle = item.subTitle || item.title
    console.log(`${idx + 1}. **${item.key}** — ${subTitle}`)
  })
  if (noCoverage.length > 5) {
    console.log(`   *(and ${noCoverage.length - 5} more...)*`)
  }
  console.log("")
}

const lightCoverage = filteredItems.filter(
  (item) =>
    item.flashcards && item.flashcards.length > 0 && item.flashcards.length < 3,
)

if (lightCoverage.length > 0) {
  console.log("### 🟡 Medium Priority (Light coverage: 1-2 flashcards)\n")
  lightCoverage.forEach((item, idx) => {
    const subTitle = item.subTitle || item.title
    const count = item.flashcards.length
    console.log(`${idx + 1}. **${item.key}** (${count} cards) — ${subTitle}`)
  })
  console.log("")
}

// Exam date reminder
console.log("---\n")
console.log("## 📅 Timeline\n")
console.log("- **Exam Date:** 20 December 2024")
console.log("- **Course End:** 18 December 2024")
console.log("- **Days Remaining:** Check your calendar!\n")
console.log(
  "> 💡 **Tip:** Aim to complete all flashcards by 10 December for adequate revision time.\n",
)
