import syllabusItems from "./syllabusItems.js"

// The term you want to search for
const searchTerm = "reactance"

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
// Use JSON.stringify() with formatting to display the full objects
console.log(JSON.stringify(filteredItems, null, 2))

// You can copy the code below to use in the console
/* filteredItems.forEach(item => {
    console.log(`- Key: ${item.key}, Title: ${item.title}`);
});
*/