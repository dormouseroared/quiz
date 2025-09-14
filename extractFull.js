import syllabusItems from "./syllabusItems.js"
import fs from 'fs'

const fullLevelItems = syllabusItems.filter(item => item.level === "full")

// console.log(fullLevelItems)

// import { syllabusItems } from './syllabusItems.js'

// Filter for 'full' level items
// const fullLevelItems = syllabusItems.filter(item => item.level === 'full')

// Group items by title
const groupedByTitle = {}
fullLevelItems.forEach(item => {
    if (!groupedByTitle[item.title]) {
        groupedByTitle[item.title] = []
    }
    groupedByTitle[item.title].push(item)
})

// Generate markdown content
let markdownContent = '# Full Level Syllabus Items\n\n'

Object.keys(groupedByTitle).forEach(title => {
    const items = groupedByTitle[title]

    // Add subtitle heading
    markdownContent += `## ${title}\n\n`

    // Add table header
    markdownContent += '| Key | Text |\n'
    markdownContent += '|-----|------|\n'

    // Add table rows
    items.forEach(item => {
        // Escape pipe characters in text to avoid breaking the table
        const escapedText = item.text.replace(/\|/g, '\\|')
        markdownContent += `| ${item.key} | ${escapedText} |\n`
    })

    // Add spacing between sections
    markdownContent += '\n'
})

// Write to file
fs.writeFileSync('syllabus-full.md', markdownContent, 'utf8')
console.log('Markdown file created: syllabus-full.md')
console.log(`Processed ${fullLevelItems.length} items across ${Object.keys(groupedByTitle).length} sections`)