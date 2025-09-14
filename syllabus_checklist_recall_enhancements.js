import syllabusItems from './syllabusItems.js'
import fs from 'fs'

// Filter for 'full' level items
const fullLevelItems = syllabusItems.filter(item => item.level === 'full')

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

// Add example/test section
markdownContent += `## 📚 How to Use This Study Guide

This syllabus has been enhanced for Obsidian with progress tracking and note linking capabilities.

### Progress Symbols
- ✅ **Mastered** - Confident, can teach others
- 🔄 **Learning** - Understanding but need practice  
- ❌ **Todo** - Haven't started or struggling
- 🧪 **Practice** - Need hands-on experience
- 📖 **Review** - Need to revisit

### Example Section

| Key | Text | Progress | Notes | Tags |
|-----|------|----------|-------|------|
| EX.1 | Example: Understand Ohm's Law relationships | ✅ | [[Ohms Law Formulas]] | #basic-theory #calculations |
| EX.2 | Example: Calculate antenna impedance matching | 🔄 | [[Smith Chart Guide]] | #antennas #impedance |
| EX.3 | Example: Identify band plan restrictions | ❌ |  | #regulations #band-plans |

---

`

// Add tags based on content analysis
function generateTags(title, text) {
    const tags = []
    const lowerTitle = title.toLowerCase()
    const lowerText = text.toLowerCase()

    // Common topic tags
    if (lowerTitle.includes('antenna') || lowerText.includes('antenna')) tags.push('#antennas')
    if (lowerTitle.includes('frequency') || lowerText.includes('frequency')) tags.push('#frequency')
    if (lowerTitle.includes('power') || lowerText.includes('power')) tags.push('#power')
    if (lowerTitle.includes('regulation') || lowerText.includes('regulation')) tags.push('#regulations')
    if (lowerTitle.includes('licence') || lowerText.includes('licence')) tags.push('#licensing')
    if (lowerTitle.includes('circuit') || lowerText.includes('circuit')) tags.push('#circuits')
    if (lowerTitle.includes('propagation') || lowerText.includes('propagation')) tags.push('#propagation')
    if (lowerTitle.includes('modulation') || lowerText.includes('modulation')) tags.push('#modulation')
    if (lowerTitle.includes('safety') || lowerText.includes('safety')) tags.push('#safety')
    if (lowerText.includes('calculate') || lowerText.includes('formula')) tags.push('#calculations')
    if (lowerText.includes('recall') || lowerText.includes('identify')) tags.push('#theory')

    return tags.length > 0 ? tags.join(' ') : '#general'
}

Object.keys(groupedByTitle).forEach(title => {
    const items = groupedByTitle[title]

    // Add subtitle heading with emoji based on content
    let emoji = '📋'
    const lowerTitle = title.toLowerCase()
    if (lowerTitle.includes('antenna')) emoji = '📡'
    else if (lowerTitle.includes('frequency') || lowerTitle.includes('band')) emoji = '📻'
    else if (lowerTitle.includes('power') || lowerTitle.includes('voltage')) emoji = '⚡'
    else if (lowerTitle.includes('safety')) emoji = '⚠️'
    else if (lowerTitle.includes('licence') || lowerTitle.includes('regulation')) emoji = '📄'
    else if (lowerTitle.includes('circuit') || lowerTitle.includes('component')) emoji = '🔧'
    else if (lowerTitle.includes('propagation') || lowerTitle.includes('wave')) emoji = '🌊'

    markdownContent += `## ${emoji} ${title}\n\n`

    // Add table header with enhanced columns
    markdownContent += '| Key | Text | Type | Priority | Progress | Notes | Tags |\n'
    markdownContent += '|-----|------|------|----------|----------|-------|------|\n'

    // Add table rows with comprehensive analysis
    items.forEach(item => {
        // Escape pipe characters in text to avoid breaking the table
        const escapedText = item.text.replace(/\|/g, '\\|')
        const type = determineType(item.text)
        const priority = determinePriority(type, item.text, item.title)
        const tags = generateTags(item.title, item.text)

        // Add type-specific tags
        const typeTag = type === 'RECALL' ? '#recall' : '#understand'
        const finalTags = `${tags} ${typeTag}`

        markdownContent += `| ${item.key} | ${escapedText} | ${type} | ${priority} | ❌ |  | ${finalTags} |\n`
    })

    // Add spacing between sections
    markdownContent += '\n'
})

// Write to file
fs.writeFileSync('syllabus-full.md', markdownContent, 'utf8')
console.log('Markdown file created: syllabus-full.md')
console.log(`Processed ${fullLevelItems.length} items across ${Object.keys(groupedByTitle).length} sections`)
