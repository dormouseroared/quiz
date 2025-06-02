/**
 * Validates that every quiz question is associated with at least one matching syllabus item.
 *
 * This version uses explicit loops to make the validation logic step-by-step clearer.
 *
 * @param {Array<Object>} quizQuestions - An array of quiz question objects.
 * Each question object is expected to have a `syllabus` string property (e.g., { syllabus: "1g.1 & 3f.7", ... }).
 * @param {Array<Object>} syllabusItems - An array of syllabus item objects.
 * Each syllabus item object is expected to have a `key` string property (e.g., { key: "1g.1", ... }).
 * @returns {boolean} - `true` if all quiz questions have a matching syllabus key; otherwise, `false`.
 */
export function validateSyllabusKeysExplicit(quizQuestions, syllabusItems) {
    // Loop through each quiz question
    for (const question of quizQuestions) {
        // Extract the first 4 characters of the syllabus tag for the current question
        const questionSyllabusPrefix = question.syllabus.slice(0, 4)

        // Assume for now that this question's syllabus prefix does NOT match any syllabus item
        let foundMatchingSyllabusItem = false

        // Now, loop through each syllabus item to see if there's a match
        for (const item of syllabusItems) {
            // If the syllabus item's key matches the question's syllabus prefix
            if (item.key === questionSyllabusPrefix) {
                foundMatchingSyllabusItem = true // Mark that a match was found
                break // No need to check other syllabus items for this question, we found one!
            }
        }

        // If, after checking all syllabus items, we still haven't found a match for this question,
        // then the overall validation fails immediately.
        if (!foundMatchingSyllabusItem) {
            return false // One question failed, so the whole validation fails
        }
    }

    // If we've gone through ALL quiz questions and none of them failed the check,
    // then all questions are valid.
    return true
}
