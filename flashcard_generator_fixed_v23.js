/*
Flashcard PDF generator v16 (Fixed HTML & MathJax support)
- Generates two PDFs: flashcards_front.pdf and flashcards_back.pdf
- A4 portrait, 2 cards per page (top & bottom)
- Supports HTML formatting and MathJax rendering
- Filters for items with flashcards arrays and extracts front/back content
- Supports frontImage and backImage (from ./flashcardImages)

Dependencies:
  npm install puppeteer

Usage:
  - Place this script in your project root
  - Provide syllabusItems.js with flashcards arrays (see example at bottom)
  - Optionally create config.json to override defaults
  - Place images in ./flashcardImages
  - Run: node flashcard_generator_v16.mjs

Notes about duplex printing:
  - When printing the two PDFs double-sided, choose duplex printing with "flip on short edge"
  - This script places answers in the same x/y positions as the matching question on the back PDF
*/

import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ---------- Load config (or use defaults) ----------
const defaultConfig = {
  page: {
    width_mm: 210,
    height_mm: 297
  },
  cardsPerPage: 2,
  margin_mm: 10,
  cardSpacing_mm: 4,
  imageFolder: path.join(__dirname, 'flashcardImages'),
  output: {
    front: 'flashcards_front.pdf',
    back: 'flashcards_back.pdf'
  },
  fonts: {
    header: 'Arial, sans-serif',
    content: 'Times New Roman, serif'
  },
  colors: {
    header: '#7f8c8d',
    content: '#000000',
    border: '#e0e0e0'
  }
}

let config = defaultConfig
const configPath = path.join(__dirname, 'config.json')
if (fs.existsSync(configPath)) {
  try {
    const userConf = JSON.parse(fs.readFileSync(configPath, 'utf8'))
    config = { ...config, ...userConf }
  } catch (e) {
    console.warn('Could not parse config.json, using defaults:', e.message)
  }
}

// ---------- Load syllabus items ----------
import syllabusItems from "./syllabusItems.js"

// ---------- Extract flashcards from syllabus items ----------
console.log('🚀 FLASHCARD GENERATOR VERSION 16 STARTING...');

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
                    question: card.front,  // Map front to question for PDF generator
                    answer: card.back,     // Map back to answer for PDF generator
                    frontImage: card.frontImage,
                    backImage: card.backImage,
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
            question: item.front,  // Map front to question for PDF generator
            answer: item.back,     // Map back to answer for PDF generator
            frontImage: item.frontImage,
            backImage: item.backImage,
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
    console.log('     flashcards: [');
    console.log('       {');
    console.log('         front: "What factors influence capacitance?",');
    console.log('         back: "Area, separation, permittivity with formula: $$C = \\\\frac{\\\\varepsilon A}{d}$$",');
    console.log('         frontImage: "capacitor.jpg",  // optional');
    console.log('         backImage: "capacitor-formula.jpg"  // optional');
    console.log('       }');
    console.log('     ]');
    console.log('   }');
    process.exit(1);
}

// ---------- HTML Template Functions ----------
function generateHTMLTemplate(items, isFront) {
    const title = isFront ? 'Flashcards - Questions' : 'Flashcards - Answers';
    
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    
    <!-- MathJax Configuration -->
    <script type="text/javascript" async
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js">
    </script>
    <script type="text/javascript">
        window.MathJax = {
            tex: {
                inlineMath: [['$', '$']],
                displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']],
                processEscapes: true,
                processEnvironments: true
            },
            options: {
                skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
                ignoreHtmlClass: 'tex2jax_ignore'
            }
        };
    </script>
    
    <style>
        @page {
            size: A4 portrait;
            margin: ${config.margin_mm}mm;
        }
        
        body {
            font-family: ${config.fonts.content};
            margin: 0;
            padding: 0;
            font-size: 14px;
            line-height: 1.4;
        }
        
        .page {
            width: 100%;
            height: 277mm; /* A4 height minus margins */
            page-break-after: always;
            position: relative;
        }
        
        .page:last-child {
            page-break-after: avoid;
        }
        
        .card {
            width: 100%;
            height: calc((100% - ${config.cardSpacing_mm}mm) / ${config.cardsPerPage});
            border: 1px solid ${config.colors.border};
            box-sizing: border-box;
            padding: 8mm;
            margin-bottom: ${config.cardSpacing_mm}mm;
            position: relative;
            break-inside: avoid;
        }
        
        .card:last-child {
            margin-bottom: 0;
        }
        
        .card-header {
            font-family: ${config.fonts.header};
            font-size: 10px;
            color: ${config.colors.header};
            border-bottom: 1px solid ${config.colors.border};
            padding-bottom: 3mm;
            margin-bottom: 3mm;
        }
        
        .card-content {
            color: ${config.colors.content};
            overflow: hidden;
            height: calc(100% - 25px);
        }
        
        .card-image {
            max-width: 100%;
            max-height: 40%;
            object-fit: contain;
            margin-top: 6mm;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        
        .cutting-line {
            position: absolute;
            width: calc(100% + 20mm);
            height: 0.5px;
            background-color: #ccc;
            left: -10mm;
            top: calc(50% - 0.25px);
        }
        
        /* MathJax styling */
        .MathJax {
            font-size: 1.1em !important;
        }
        
        /* Handle empty cards */
        .empty-card {
            visibility: hidden;
        }
    </style>
</head>
<body>
    ${generateCardsHTML(items, isFront)}
</body>
</html>`;
}

function generateCardsHTML(items, isFront) {
    let html = '';
    
    for (let i = 0; i < items.length; i += config.cardsPerPage) {
        html += '<div class="page">';
        
        // Add cutting line for pages with multiple cards
        if (config.cardsPerPage > 1) {
            html += '<div class="cutting-line"></div>';
        }
        
        for (let slot = 0; slot < config.cardsPerPage; slot++) {
            const itemIndex = i + slot;
            const item = items[itemIndex];
            
            if (item) {
                html += generateSingleCardHTML(item, isFront);
            } else {
                // Empty card to maintain layout
                html += '<div class="card empty-card"></div>';
            }
        }
        
        html += '</div>';
    }
    
    return html;
}

function generateSingleCardHTML(item, isFront) {
    const cardIndicator = item.totalCards > 1 ? ` (${item.cardIndex}/${item.totalCards})` : '';
    const header = `${item.key}${cardIndicator} | ${item.title}`;
    
    const content = isFront ? (item.question || '') : (item.answer || '');
    const imageKey = isFront ? 'frontImage' : 'backImage';
    const imagePath = item[imageKey];
    
    let imageHTML = '';
    if (imagePath) {
        const fullImagePath = path.join(config.imageFolder, imagePath);
        if (fs.existsSync(fullImagePath)) {
            // Convert image to base64 for embedding
            const imageBuffer = fs.readFileSync(fullImagePath);
            const imageExt = path.extname(imagePath).toLowerCase();
            let mimeType = 'image/jpeg';
            if (imageExt === '.png') mimeType = 'image/png';
            if (imageExt === '.gif') mimeType = 'image/gif';
            if (imageExt === '.svg') mimeType = 'image/svg+xml';
            
            const base64Image = imageBuffer.toString('base64');
            imageHTML = `
                <div class="card-image-container">
                    <img src="data:${mimeType};base64,${base64Image}" alt="Card image" class="card-image">
                </div>`;
        }
    }
    
    return `
        <div class="card">
            <div class="card-header">${header}</div>
            <div class="card-content">
                <div class="card-text">${content}</div>
                ${imageHTML}
            </div>
        </div>`;
}

// ---------- PDF Generation Functions ----------
async function generatePDF(items, isFront, outputPath) {
    console.log(`🔍 DEBUGGING PDF Generation for ${isFront ? 'FRONT' : 'BACK'}`);
    
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
    });
    
    try {
        const page = await browser.newPage();
        
        // Set the HTML content
        const htmlContent = generateHTMLTemplate(items, isFront);
        
        // Debug: Show first 500 characters of HTML to verify it contains our styles
        console.log('🔍 HTML Preview (first 500 chars):');
        console.log(htmlContent.substring(0, 500) + '...');
        
        await page.setContent(htmlContent, { 
            waitUntil: 'networkidle0',
            timeout: 30000 
        });
        
        // Debug: Check if our styles are actually applied
        const actualFontSize = await page.evaluate(() => {
            const bodyElement = document.querySelector('body');
            const cardText = document.querySelector('.card-text');
            const cardHeader = document.querySelector('.card-header');
            const cardContent = document.querySelector('.card-content');
            
            console.log('Elements found:', {
                body: !!bodyElement,
                cardText: !!cardText,
                cardHeader: !!cardHeader,
                cardContent: !!cardContent
            });
            
            return {
                bodyFontSize: bodyElement ? window.getComputedStyle(bodyElement).fontSize : 'body not found',
                cardTextFontSize: cardText ? window.getComputedStyle(cardText).fontSize : 'card-text not found',
                cardHeaderFontSize: cardHeader ? window.getComputedStyle(cardHeader).fontSize : 'card-header not found',
                cardContentFontSize: cardContent ? window.getComputedStyle(cardContent).fontSize : 'card-content not found',
                htmlContent: document.documentElement.innerHTML.substring(0, 200)
            };
        });
        
        console.log('🔍 CRITICAL: Computed font sizes from browser:', actualFontSize);
        console.log('🔍 CRITICAL: Expected body font: 24px, actual:', actualFontSize.bodyFontSize);
        console.log('🔍 CRITICAL: Expected card text font: 24px, actual:', actualFontSize.cardTextFontSize);
        
        // Wait for MathJax to finish rendering
        await page.evaluate(() => {
            return new Promise((resolve) => {
                if (window.MathJax && window.MathJax.startup) {
                    window.MathJax.startup.promise.then(resolve);
                } else {
                    setTimeout(resolve, 3000); // Increased timeout for larger content
                }
            });
        });
        
        // Additional wait to ensure images are properly sized
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Generate PDF
        await page.pdf({
            path: outputPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: `${config.margin_mm}mm`,
                right: `${config.margin_mm}mm`,
                bottom: `${config.margin_mm}mm`,
                left: `${config.margin_mm}mm`
            },
            preferCSSPageSize: true
        });
        
        console.log(`Generated: ${outputPath}`);
        
    } finally {
        await browser.close();
    }
}

// ---------- Main execution ----------
async function main() {
    try {
        console.log(`\n📄 Generating PDFs with ${flashcardItems.length} flashcards...`);
        
        // Generate front PDF
        await generatePDF(flashcardItems, true, config.output.front);
        
        // Generate back PDF  
        await generatePDF(flashcardItems, false, config.output.back);
        
        console.log('\n✅ Created PDF flashcard files:');
        console.log('📄', config.output.front, '(questions)');
        console.log('📄', config.output.back, '(answers)');
        console.log(`🎯 Total cards: ${flashcardItems.length}`);
        console.log('\n🖨️ Print both PDFs double-sided with "flip on short edge"');
        console.log('✂️ Cut along the horizontal line in the middle');
        console.log('\n🚀 END OF VERSION 16');
        
    } catch (error) {
        console.error('❌ Error generating PDFs:', error);
        process.exit(1);
    }
}

// Run the generator
main();

// --------- Example syllabusItems.js structure ---------
// const syllabusItems = [
//   {
//     key: '2d.1',
//     level: 'full',
//     title: 'Reactive components',
//     text: 'Understanding capacitance factors...',
//     flashcards: [
//       {
//         front: 'What factors influence <strong>capacitance</strong>?',
//         back: 'Permittivity (k), Area (A), Distance (d)<br><br>Formula: $$C = \\frac{\\varepsilon A}{d}$$<br><br>Where $\\varepsilon = k \\varepsilon_0$',
//         frontImage: 'capacitor.jpg',     // optional
//         backImage: 'capacitor-formula.jpg' // optional
//       },
//       {
//         front: 'What happens if distance <em>doubles</em>?',
//         back: 'Capacitance <strong>halves</strong><br><br>Inverse relationship: $C \\propto \\frac{1}{d}$'
//       }
//     ]
//   }
// ];
// export default syllabusItems;