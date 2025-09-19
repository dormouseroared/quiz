// ===== FLASHCARD GENERATOR VERSION 11 =====
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
            background: #ffffff;
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
            font-size: 14px;
            line-height: 1.4;
            text-align: left;
            flex-grow: 1;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            overflow: hidden;
            word-wrap: break-word;
            hyphens: auto;
        }
        
        .question {
            font-weight: bold;
            color: #2c3e50;
            text-align: center;
            justify-content: center;
        }
        
        .answer {
            color: #27ae60;
            font-size: 12px;
            text-align: left;
            justify-content: flex-start;
        }
        
        .formula {
            font-family: 'Courier New', monospace;
            background-color: #ecf0f1;
            padding: 4px 8px;
            border-radius: 4px;
            margin: 2px 0;
            font-size: 16px;
        }
        
        .page-break {
            page-break-before: always;
        }
        
        /* HTML formatting support */
        ul {
            text-align: left;
            margin: 0;
            padding-left: 15px;
            font-size: 11px;
            line-height: 1.3;
        }
        
        li {
            margin: 2px 0;
        }
        
        /* MathJax formulas should stay larger */
        .MathJax {
            font-size: 110% !important;
        }
        
        @media print {
            * {
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
            }
        }
    </style>
    
    <script>
        MathJax = {
            tex: {
                inlineMath: [['$', '$'], ['\\(', '\\)']],
                displayMath: [['$$', '$$'], ['\\[', '\\]']],
                processEscapes: true
            },
            options: {
                skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
                ignoreHtmlClass: 'no-mathjax'
            }
        };
    </script>
    
    <script defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>`;
}

console.log('🚀 FLASHCARD GENERATOR VERSION 11 STARTING...');

// Filter for items that have flashcard arrays or legacy front/back
const fullLevelItems = syllabusItems.filter(item => item.level === 'full');
console.log(`Debug: Found ${fullLevelItems.length} full level items`);

const flashcardItems = [];

// Extract all flashcards from items
fullLevelItems.forEach((item, itemIndex) => {
    console.log(`Debug: Item ${itemIndex + 1} - Key: ${item.key}, has flashcards: ${!!item.flashcards}, is array: ${Array.isArray(item.flashcards)}`);
    
    if (item.flashcards && Array.isArray(item.flashcards)) {
        console.log(`Debug: Processing ${item.flashcards.length} flashcards for ${item.key}`);
        // Process flashcards array
        item.flashcards.forEach((card, index) => {
            console.log(`Debug: Card ${index + 1} - has front: ${!!card.front}, has back: ${!!card.back}`);
            if (card.front && card.back) {
                flashcardItems.push({
                    key: item.key,
                    level: item.level,
                    title: item.title,
                    text: item.text,
                    front: card.front,
                    back: card.back,
                    cardIndex: index + 1,
                    totalCards: item.flashcards.length
                });
                console.log(`Debug: Added flashcard ${item.key} (${index + 1}/${item.flashcards.length})`);
            }
        });
    }
    // Also support legacy front/back fields for backwards compatibility
    else if (item.front && item.back) {
        console.log(`Debug: Processing legacy front/back for ${item.key}`);
        flashcardItems.push({
            key: item.key,
            level: item.level,
            title: item.title,
            text: item.text,
            front: item.front,
            back: item.back,
            cardIndex: 1,
            totalCards: 1
        });
    }
});

console.log(`Found ${flashcardItems.length} flashcards from ${fullLevelItems.length} syllabus items`);

if (flashcardItems.length === 0) {
    console.log('\n⚠️ No flashcards found');
    console.log('💡 Add flashcards array to syllabus items, like:');
    console.log('   {');
    console.log('     key: "2d.1",');
    console.log('     level: "full",');
    console.log('     title: "Reactive components",');
    console.log('     text: "Understand the factors...",');
    console.log('     flashcards: [');
    console.log('       {');
    console.log('         front: "What factors influence capacitance?",');
    console.log('         back: "$$C = \\\\frac{k \\\\times A}{d}$$<br>Area, separation, permittivity"');
    console.log('       },');
    console.log('       {');
    console.log('         front: "What happens to capacitance if distance doubles?",');
    console.log('         back: "Capacitance <strong>halves</strong><br>C ∝ 1/d (inverse relationship)"');
    console.log('       }');
    console.log('     ]');
    console.log('   }');
    console.log('\n🔄 OR use legacy single flashcard format:');
    console.log('   {');
    console.log('     key: "1.1", level: "full", title: "Basic Electronics",');
    console.log('     front: "What is Ohms Law?", back: "$$V = I \\\\times R$$"');
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
    <title>Enhanced Flashcard Questions (FRONT) - V11</title>
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
        const cardIndicator = item.totalCards > 1 ? ` (${item.cardIndex}/${item.totalCards})` : '';
        questionsHTML += `
            <div class="card">
                <div class="card-header">
                    ${item.key}${cardIndicator} | ${item.title}
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
    <title>Enhanced Flashcard Answers (BACK) - V11</title>
    <meta charset="UTF-8">
    ${generateCSS()}
    <style>
        /* Mirror the grid horizontally for back-side printing */
        .card-grid {
            transform: scaleX(-1);
        }
        .card {
            transform: scaleX(-1); /* Un-mirror the content */
            background: #ffffff;
            border-color: #3498db;
        }
        .card-content {
            color: #27ae60;
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
        const cardIndicator = item.totalCards > 1 ? ` (${item.cardIndex}/${item.totalCards})` : '';
        answersHTML += `
            <div class="card">
                <div class="card-header">
                    ${item.key}${cardIndicator} | ${item.title}
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
console.log('📄 flashcards-questions.html (questions)');
console.log('📄 flashcards-answers.html (answers)');
console.log(`🎯 Total cards: ${flashcardItems.length} (${pages.length} pages)`);

console.log('\n🎨 Enhanced Features:');
console.log('• Improved text sizing for better readability');
console.log('• Fixed text alignment and overflow issues');  
console.log('• Key + Title headers for easy reference');
console.log('• MathJax support for formulas (use $ or $$)');
console.log('• HTML support (<br>, <ul>, <li>, etc.)');
console.log('• Better cutting guides and rounded corners');

console.log('\n📝 Formula Examples for front:/back: fields:');
console.log('Simple: f = 1/(2⋅π⋅√(LC))');
console.log('MathJax: $$f = \\frac{1}{2\\pi\\sqrt{LC}}$$');
console.log('HTML: f = 1/(2⋅π⋅√(LC))<br><small>Where L=inductance, C=capacitance</small>');

console.log('\n📋 Example syllabus entry with multiple flashcards:');
console.log(`{
    key: "2d.1", 
    level: "full",
    title: "Reactive components",
    text: "Understand the factors influencing capacitance...",
    flashcards: [
        {
            front: "What factors influence capacitance and what is the formula?",
            back: "$$C = \\\\frac{k \\\\times A}{d}$$<br><ul><li>k = Permittivity</li><li>A = Plate area</li><li>d = Distance between plates</li></ul>"
        },
        {
            front: "What happens to capacitance if distance between plates doubles?",
            back: "Capacitance <strong>halves</strong><br>$$C \\\\propto \\\\frac{1}{d}$$<br>Inverse relationship with distance"
        },
        {
            front: "What happens to capacitance if plate area doubles?",
            back: "Capacitance <strong>doubles</strong><br>$$C \\\\propto A$$<br>Direct relationship with area"
        }
    ]
}`);

console.log('\n💡 Card numbering: Cards from the same syllabus item show as (1/3), (2/3), (3/3)');
console.log('🔄 Backwards compatibility: Single front:/back: fields still work');
console.log('\n🚀 END OF VERSION 11');