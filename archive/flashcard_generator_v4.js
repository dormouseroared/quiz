import syllabusItems from './syllabusItems.js';
import fs from 'fs';

// Generate CSS for enhanced print layout
function generateCSS() {
    return `
    <style>
        @page {
            size: A4;
            margin: 0.5cm;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
        }
        
        .card-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat(4, 1fr);
            gap: 3mm;
            height: 100vh;
            padding: 8mm;
            box-sizing: border-box;
        }
        
        .card {
            border: 2px solid #3498db;
            border-radius: 8px;
            padding: 6mm;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            page-break-inside: avoid;
            box-sizing: border-box;
            min-height: 65mm;
            position: relative;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        /* Only show cutting lines between cards */
        .card:nth-child(odd) {
            border-right: 2px dashed #95a5a6;
            margin-right: -3mm;
        }
        
        .card:nth-child(n+3) {
            border-top: 2px dashed #95a5a6;
            margin-top: -3mm;
        }
        
        .card-header {
            font-size: 10px;
            color: #7f8c8d;
            font-weight: bold;
            text-align: left;
            margin-bottom: 4mm;
            border-bottom: 1px solid #bdc3c7;
            padding-bottom: 2mm;
        }
        
        .card-content {
            font-size: 16px;
            line-height: 1.4;
            text-align: center;
            flex-grow: 1;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .question {
            font-weight: bold;
            color: #2c3e50;
        }
        
        .answer {
            color: #27ae60;
        }
        
        .formula {
            font-family: 'Courier New', monospace;
            background-color: #ecf0f1;
            padding: 4px 8px;
            border-radius: 4px;
            margin: 2px 0;
            font-size: 18px;
        }
        
        .page-break {
            page-break-before: always;
        }
        
        /* MathJax support */
        .math {
            font-size: 120%;
        }
        
        /* HTML formatting support */
        ul {
            text-align: left;
            margin: 0;
            padding-left: 15px;
        }
        
        li {
            margin: 3px 0;
        }
        
        @media print {
            * {
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
            }
        }
    </style>
    
    <!-- MathJax CDN -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.min.js"></script>
    <script>
        window.MathJax = {
            tex: {
                inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
                displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']]
            }
        };
    </script>`;
}

// Filter for items that have 'front:' and 'back:' keys
const fullLevelItems = syllabusItems.filter(item => item.level === 'full');
const flashcardItems = fullLevelItems.filter(item => 
    (item.front && item.front.trim()) || (item.back && item.back.trim()) ||
    (item.hasOwnProperty('front') && item.hasOwnProperty('back'))
);

console.log(`Found ${flashcardItems.length} items with front/back fields for flashcards`);

if (flashcardItems.length === 0) {
    console.log('\n❌ No items found with front: and back: fields');
    console.log('💡 Add front: and back: properties to syllabus items, like:');
    console.log('   {');
    console.log('     key: "1.1",');
    console.log('     level: "full",');
    console.log('     title: "Basic Electronics",');
    console.log('     text: "Recall Ohm\'s Law...",');
    console.log('     front: "What is Ohm\'s Law formula?",');
    console.log('     back: "$$V = I \\\\times R$$<br>Where:<ul><li>V = Voltage (Volts)</li><li>I = Current (Amps)</li><li>R = Resistance (Ohms)</li></ul>"');
    console.log('   }');
    process.exit(1);
}

// Group into chunks of 8 cards per page (4x2 grid)
const cardsPerPage = 8;
const pages = [];
for (let i = 0; i < flashcardItems.length; i += cardsPerPage) {
    pages.push(flashcardItems.slice(i, i + cardsPerPage));
}

// Generate HTML for question cards (fronts)
let questionsHTML = `<!DOCTYPE html>
<html>
<head>
    <title>Enhanced Flashcard Questions (FRONT)</title>
    <meta charset="UTF-8">
    ${generateCSS()}
</head>
<body>
`;

pages.forEach((pageCards, pageIndex) => {
    if (pageIndex > 0) questionsHTML += '<div class="page-break"></div>';
    questionsHTML += '<div class="card-grid">';
    
    pageCards.forEach(item => {
        const frontContent = item.front || 'Question not defined';
        questionsHTML += `
            <div class="card">
                <div class="card-header">
                    ${item.key} | ${item.title}
                </div>
                <div class="card-content question">
                    ${frontContent}
                </div>
            </div>
        `;
    });
    
    // Fill remaining slots with empty cards
    for (let i = pageCards.length; i < cardsPerPage; i++) {
        questionsHTML += '<div class="card"><div class="card-header">—</div><div class="card-content">—</div></div>';
    }
    
    questionsHTML += '</div>';
});

questionsHTML += '</body></html>';

// Generate HTML for answer cards (backs) - MIRRORED for proper alignment
let answersHTML = `<!DOCTYPE html>
<html>
<head>
    <title>Enhanced Flashcard Answers (BACK)</title>
    <meta charset="UTF-8">
    ${generateCSS()}
    <style>
        /* Mirror the grid horizontally for back-side printing */
        .card-grid {
            transform: scaleX(-1);
        }
        .card {
            transform: scaleX(-1); /* Un-mirror the content */
            background: linear-gradient(135deg, #e8f5e8 0%, #d4edda 100%);
            border-color: #28a745;
        }
        .card-content {
            color: #155724;
        }
    </style>
</head>
<body>
`;

pages.forEach((pageCards, pageIndex) => {
    if (pageIndex > 0) answersHTML += '<div class="page-break"></div>';
    answersHTML += '<div class="card-grid">';
    
    pageCards.forEach(item => {
        const backContent = item.back || item.text || 'Answer not defined';
        answersHTML += `
            <div class="card">
                <div class="card-header">
                    ${item.key} | ${item.title}
                </div>
                <div class="card-content answer">
                    ${backContent}
                </div>
            </div>
        `;
    });
    
    // Fill remaining slots with empty cards
    for (let i = pageCards.length; i < cardsPerPage; i++) {
        answersHTML += '<div class="card"><div class="card-header">—</div><div class="card-content">—</div></div>';
    }
    
    answersHTML += '</div>';
});

answersHTML += '</body></html>';

// Write files
fs.writeFileSync('flashcards-questions.html', questionsHTML, 'utf8');
fs.writeFileSync('flashcards-answers.html', answersHTML, 'utf8');

console.log('✅ Created enhanced flashcard files:');
console.log('📄 flashcards-questions.html (blue cards - questions)');
console.log('📄 flashcards-answers.html (green cards - answers)');
console.log(`🎯 Total cards: ${flashcardItems.length} (${pages.length} pages)`);

console.log('\n🎨 Enhanced Features:');
console.log('• Larger text (16px) with better fonts');
console.log('• Color coding: Blue (questions), Green (answers)');  
console.log('• Key + Title headers for easy reference');
console.log('• MathJax support for formulas (use $ or $$)');
console.log('• HTML support (<br>, <ul>, <li>, etc.)');
console.log('• Better cutting guides and rounded corners');

console.log('\n📐 Formula Examples for front:/back: fields:');
console.log('Simple: f = 1/(2⋅π⋅√(LC))');
console.log('MathJax: $$f = \\frac{1}{2\\pi\\sqrt{LC}}$$');
console.log('HTML: f = 1/(2⋅π⋅√(LC))<br><small>Where L=inductance, C=capacitance</small>');

console.log('\n📋 Example syllabus entry:');
console.log(`{
    key: "2.1", 
    level: "full",
    title: "Resonant Circuits",
    text: "Recall the resonant frequency formula...",
    front: "What is the resonant frequency formula?",
    back: "$$f = \\\\frac{1}{2\\\\pi\\\\sqrt{LC}}$$<br>Where:<ul><li>f = frequency (Hz)</li><li>L = inductance (H)</li><li>C = capacitance (F)</li></ul>"
}`);
