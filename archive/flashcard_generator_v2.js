import syllabusItems from './syllabusItems.js';
import fs from 'fs';

// Determine if item is RECALL based on text
function isRecallItem(text) {
    const lowerText = text.toLowerCase();
    return lowerText.startsWith('recall') || 
           lowerText.includes('formula') || 
           lowerText.includes('identify') || 
           lowerText.includes('state') || 
           lowerText.includes('list');
}

// Convert syllabus text into a question
function createQuestion(syllabusText, key) {
    let question = syllabusText;
    
    // Remove "Recall" from the beginning and rephrase as question
    question = question.replace(/^Recall\s+/i, '');
    
    // Common question transformations
    if (question.includes('formula')) {
        question = question.replace(/the formula/, 'What is the formula for');
        if (!question.endsWith('?')) question += '?';
    } else if (question.includes('that')) {
        question = question.replace(/that/, 'What');
        question = 'What ' + question.charAt(0).toLowerCase() + question.slice(1);
        if (!question.endsWith('?')) question += '?';
    } else if (question.includes('state')) {
        question = question.replace(/^state\s+/i, 'What ');
        if (!question.endsWith('?')) question += '?';
    } else {
        // Generic conversion - just add "What" if not already a question
        if (!question.includes('?') && !question.toLowerCase().startsWith('what')) {
            question = 'What: ' + question;
        }
        if (!question.endsWith('?')) question += '?';
    }
    
    return question.charAt(0).toUpperCase() + question.slice(1);
}

// Generate CSS for print layout
function generateCSS() {
    return `
    <style>
        @page {
            size: A4;
            margin: 0.5cm;
        }
        
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        
        .card-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat(4, 1fr);
            gap: 2mm;
            height: 100vh;
            padding: 5mm;
            box-sizing: border-box;
        }
        
        .card {
            border: 1px dashed #ccc;
            padding: 8mm;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            page-break-inside: avoid;
            box-sizing: border-box;
            min-height: 60mm;
        }
        
        .card-key {
            font-size: 10px;
            color: #666;
            position: absolute;
            top: 2mm;
            left: 2mm;
        }
        
        .card-content {
            font-size: 12px;
            line-height: 1.3;
            word-wrap: break-word;
            hyphens: auto;
        }
        
        .question {
            font-weight: bold;
            color: #2c3e50;
        }
        
        .answer {
            color: #34495e;
        }
        
        .page-break {
            page-break-before: always;
        }
        
        .cut-guide {
            position: fixed;
            color: #ddd;
            font-size: 8px;
            z-index: -1;
        }
        
        @media print {
            .cut-guide {
                display: block;
            }
        }
    </style>`;
}

// Filter for RECALL items only
const fullLevelItems = syllabusItems.filter(item => item.level === 'full');
const recallItems = fullLevelItems.filter(item => isRecallItem(item.text));

console.log(`Found ${recallItems.length} RECALL items to convert to flashcards`);

// Group into chunks of 8 cards per page (4x2 grid)
const cardsPerPage = 8;
const pages = [];
for (let i = 0; i < recallItems.length; i += cardsPerPage) {
    pages.push(recallItems.slice(i, i + cardsPerPage));
}

// Generate HTML for question cards (fronts)
let questionsHTML = `<!DOCTYPE html>
<html>
<head>
    <title>Flashcard Questions (FRONT)</title>
    ${generateCSS()}
</head>
<body>
    <div class="cut-guide" style="top: 0; left: 50%;">✂️ Cut along dashed lines</div>
`;

pages.forEach((pageCards, pageIndex) => {
    if (pageIndex > 0) questionsHTML += '<div class="page-break"></div>';
    questionsHTML += '<div class="card-grid">';
    
    pageCards.forEach(item => {
        const question = createQuestion(item.text, item.key);
        questionsHTML += `
            <div class="card">
                <div class="card-key">${item.key}</div>
                <div class="card-content question">${question}</div>
            </div>
        `;
    });
    
    // Fill remaining slots with empty cards
    for (let i = pageCards.length; i < cardsPerPage; i++) {
        questionsHTML += '<div class="card"></div>';
    }
    
    questionsHTML += '</div>';
});

questionsHTML += '</body></html>';

// Generate HTML for answer cards (backs) - MIRRORED for proper alignment
let answersHTML = `<!DOCTYPE html>
<html>
<head>
    <title>Flashcard Answers (BACK) - Print on reverse side</title>
    ${generateCSS()}
    <style>
        /* Mirror the grid horizontally for back-side printing */
        .card-grid {
            transform: scaleX(-1);
        }
        .card {
            transform: scaleX(-1); /* Un-mirror the text */
        }
    </style>
</head>
<body>
    <div class="cut-guide" style="top: 0; left: 50%;">✂️ Print this on the BACK of question sheets</div>
`;

pages.forEach((pageCards, pageIndex) => {
    if (pageIndex > 0) answersHTML += '<div class="page-break"></div>';
    answersHTML += '<div class="card-grid">';
    
    pageCards.forEach(item => {
        answersHTML += `
            <div class="card">
                <div class="card-key">${item.key}</div>
                <div class="card-content answer">${item.text}</div>
            </div>
        `;
    });
    
    // Fill remaining slots with empty cards
    for (let i = pageCards.length; i < cardsPerPage; i++) {
        answersHTML += '<div class="card"></div>';
    }
    
    answersHTML += '</div>';
});

answersHTML += '</body></html>';

// Write only questions file for now (blank backs for manual filling)
fs.writeFileSync('flashcards-questions.html', questionsHTML, 'utf8');

console.log('✅ Created flashcard file:');
console.log('📄 flashcards-questions.html (questions only - blank backs for you to fill)');
console.log(`🎯 Total cards: ${recallItems.length} (${pages.length} pages)`);
console.log('\n📋 Printing Instructions:');
console.log('1. Open flashcards-questions.html in browser');
console.log('2. Print double-sided or single-sided with blank backs');
console.log('3. Fill in answers manually on the blank sides');
console.log('4. Cut along the internal dashed lines only');
console.log('\n💡 Better Answer Ideas:');
console.log('- Extract just the formula/fact (e.g., "P = V × I")');
console.log('- Add what letters mean (e.g., "Power = Voltage × Current")');
console.log('- Include units where relevant (e.g., "Watts = Volts × Amps")');
console.log('- Add memory tricks or real-world examples');
