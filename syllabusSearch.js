import syllabusItems from "./syllabusItems-2025-09-18.js"

// The term you want to search for
const searchTerm = "AC theory"

// The level you want to filter by
const searchLevel = "full"

const filteredItems = []

// Iterate through the syllabus items and find matching objects
syllabusItems.forEach(item => {
    // A robust way to search across all object properties for the term.
    // JSON.stringify() converts the entire object to a single string.
    const itemAsString = JSON.stringify(item)

    // Check if the item meets both criteria
    if (item.level === searchLevel && itemAsString.includes(searchTerm)) {
        filteredItems.push(item)
    }
})

// Log the results to the console
console.log(`Found ${filteredItems.length} items with level "${searchLevel}" and term "${searchTerm}":`)
console.log(filteredItems)

// You can copy the code below to use in the console
/* filteredItems.forEach(item => {
    console.log(`- Key: ${item.key}, Title: ${item.title}`);
});
*/
