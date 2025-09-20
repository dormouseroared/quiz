import { nanoid } from 'nanoid'
import fs from 'fs'

function addMissingIds(syllabusItems) {
    let addedCount = 0

    syllabusItems.forEach(item => {
        if (item.flashcards && Array.isArray(item.flashcards)) {
            item.flashcards.forEach(flashcard => {
                if (!flashcard.id) {
                    console.log("About to add nanoid id to:", flashcard)
                    flashcard.id = nanoid(8)
                    addedCount++
                }
            })
        }
    })

    console.log(`Added IDs to ${addedCount} flashcards`)
    return syllabusItems
}

// Main execution
try {
    console.log('Attempting to import syllabusItems.js...')
    const { default: syllabusItems } = await import('./syllabusItems.js')
    console.log('Import successful!')
    console.log('Processing', syllabusItems.length, 'items...')

    // Add missing IDs
    const updatedItems = addMissingIds(syllabusItems)

    // Format the output as a proper ES module with unquoted keys
    let jsonString = JSON.stringify(updatedItems, null, 4)

    // Remove quotes from common property keys to match original format
    const keysToUnquote = ['key', 'level', 'title', 'text', 'weeks', 'flashcards', 'front', 'frontImage', 'back', 'backImage', 'status', 'reference', 'source', 'id']
    keysToUnquote.forEach(key => {
        const quotedKey = `"${key}":`
        const unquotedKey = `${key}:`
        jsonString = jsonString.replaceAll(quotedKey, unquotedKey)
    })

    const outputContent = `const syllabusItems = ${jsonString};

export default syllabusItems;`

    // Write to a new file (keeps your original safe)
    fs.writeFileSync('./syllabusItems-updated.js', outputContent)

    console.log('Successfully created syllabusItems-updated.js')
    console.log('If everything looks good, you can rename it to replace your original file')

} catch (error) {
    console.error('Error processing file:', error.message)
    console.error('Full error:', error)
}