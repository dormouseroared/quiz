export default function showQuestionsBySyllabusCode(
  questionBank,
  searchType,
  searchValue,
) {
  // Count questions by syllabus code
  const syllabusCount = {}

  questionBank.forEach((q) => {
    const code = q.syllabus
    syllabusCount[code] = (syllabusCount[code] || 0) + 1
  })

  // Sort codes alphabetically
  const sortedCodes = Object.keys(syllabusCount).sort()

  // Build markdown content
  let markdown = "# Question Bank Summary\n\n"
  markdown += `SEARCHTYPE: ${searchType} SEARCHVALUE: ${searchValue}\n\n`
  markdown += `**Total Questions:** ${questionBank.length}\n\n`
  markdown += "## Questions by Syllabus Code\n\n"

  sortedCodes.forEach((code) => {
    markdown += `- ${code}: ${syllabusCount[code]} question${syllabusCount[code] > 1 ? "s" : ""}\n`
  })

  // Generate filename with date and random suffix
  const today = new Date().toISOString().split("T")[0] // YYYY-MM-DD
  const randomSuffix = Math.random().toString(36).substring(2, 6) // 4 random chars
  const filename = `syllabus_summary_${today}_${randomSuffix}.md`

  // Create and trigger download
  const blob = new Blob([markdown], { type: "text/markdown" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = filename
  link.click()

  // Cleanup
  URL.revokeObjectURL(url)

  console.log(`Downloaded: ${filename}`)
}
