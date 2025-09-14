// ===== FLASHCARD GENERATOR VERSION 13 =====
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
            padding: 5mm;
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
            font-size: 9px;
            color: #7f8c8d;
            font-weight: bold;
            text-align: left;
            margin-bottom: 3mm;
            border-bottom: 1px solid #bdc3c7;
            padding-bottom: 1.5mm;
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
            color: #2c3e50;
            font-size: 13px;
            text-align: left;
            display: block;
            align-items: flex-start;
            overflow-y: auto;
            padding: 0;
            line-height: 1.3;
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
        
        /* HTML formatting support for answers */
        .answer ul {
            text-align: left;
            margin: 6px 0;
            padding-left: 12px;
            font-size: 12px;
            line-height: 1.2;
        }
        
        .answer li {
            margin: 2px 0;
        }
        
        .answer p {
            margin: 3px 0;
            font-size: 13px;
            line-height: 1.3;
        }
        
        /* Compact spacing for better space utilization */
        .answer p:first-child {
            margin-top: 0;
        }
        
        .answer p:last-child {
            margin-bottom: 0;
        }
        
        .answer ul:last-child {
            margin-bottom: 0;
        }
        
        /* Keep general ul/li for any other use */
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
            font-size: 115% !important;
        }
        
        /* Make strong text more prominent */
        .answer strong {
            font-weight: bold;
            color: #1a252f;
        }
        
        /* Smaller margins for better space usage */
        .answer br + * {
            margin-top: 2px;
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

console.log('🚀 FLASHCARD GENERATOR VERSION 13 STARTING...');

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
    console.log('         back: "$$C = \\\\\\\\frac{k \\\\\\\\times A}{d}$$<br>Area, separation, permittivity"');
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
    console.log('     front: "What is Ohms Law?", back: "$$V = I \\\\\\\\times R$$"');
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
    <title>Enhanced Flashcard Questions (FRONT) - V13</title>
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
    <title>Enhanced Flashcard Answers (BACK) - V13</title>
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
            color: #2c3e50;
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

console.log('\n🎨 V13 Improvements:');
console.log('• Answer text color changed to match questions (dark blue-gray)');
console.log('• Answer font size increased from 12px to 13px');
console.log('• Optimized spacing and margins for maximum content space');
console.log('• Reduced header size and padding for more content area');
console.log('• Tighter line spacing (1.3 vs 1.4) fits more text');

console.log('\n📦 Space Optimization Tips:');
console.log('• Use <p> tags sparingly - line breaks with <br> save space');
console.log('• Combine related points in single bullet items');
console.log('• Use abbreviations where appropriate (e.g., "freq" vs "frequency")');
console.log('• Keep MathJax formulas concise - they render larger');
console.log('• Use <strong> for emphasis instead of separate lines');

console.log('\n📝 MathJax Reminder:');
console.log('• Always use double backslashes: \\\\frac{1}{2} not \\frac{1}{2}');
console.log('• Inline math: $f = \\\\frac{1}{2\\\\pi}$ ');
console.log('• Display math: $$C = \\\\frac{\\\\varepsilon A}{d}$$');

console.log('\n📋 Example optimized answer format:');
console.log(`"$$C = \\\\\\\\frac{k \\\\\\\\times A}{d}$$<p><strong>Factors:</strong> Permittivity (k), Area (A), Distance (d)<br><strong>Effect:</strong> C ∝ A, C ∝ 1/d"`);

console.log('\n💡 Card numbering: Cards from the same syllabus item show as (1/3), (2/3), (3/3)');
console.log('🔄 Backwards compatibility: Single front:/back: fields still work');
console.log('\n🚀 END OF VERSION 13');