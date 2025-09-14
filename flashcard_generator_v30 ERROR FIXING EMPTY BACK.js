/*
Flashcard PDF generator v27 (ENHANCED VERSION)
Filename: flashcard_generator_v27.mjs
- Generates two PDFs: flashcards_front.pdf and flashcards_back.pdf
- A4 portrait, 2 cards per page (top & bottom)
- LARGE FONTS: Configurable sizes (default 24px content, 18px headers)
- Supports HTML formatting and MathJax rendering
- NEW: Selective printing with filters
- NEW: Optimized list spacing for <ul><li> elements
- NEW: Enhanced configuration options
- NEW: Command line arguments support

Dependencies:
  npm install puppeteer

Usage:
  - Basic: node flashcard_generator_v27.mjs
  - With filters: node flashcard_generator_v27.mjs --keys=2d.1,3a.2
  - Debug mode: node flashcard_generator_v27.mjs --debug

File Extensions:
  - Use .mjs for ES modules (import/export syntax) - recommended
  - This script uses ES modules so .mjs is required
*/

import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ---------- Parse command line arguments ----------
const args = process.argv.slice(2)
const cliOptions = {
  debug: args.includes('--debug'),
  keys: args.find(arg => arg.startsWith('--keys='))?.split('=')[1]?.split(',') || null,
  levels: args.find(arg => arg.startsWith('--levels='))?.split('=')[1]?.split(',') || null,
  interactive: args.includes('--interactive'),
  help: args.includes('--help') || args.includes('-h')
}

if (cliOptions.help) {
  console.log(`
🃏 Flashcard PDF Generator v27

Usage:
  node flashcard_generator_v27.mjs [options]

Options:
  --keys=2d.1,3a.2    Generate only specified keys
  --levels=full,basic Generate only specified levels  
  --debug             Enable debug logging
  --help, -h          Show this help

Examples:
  node flashcard_generator_v27.mjs
  node flashcard_generator_v27.mjs --keys=2d.1,2d.2 --debug
  node flashcard_generator_v27.mjs --levels=full
`);
  process.exit(0);
}

// ---------- Enhanced config with new options ----------
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
  fontSize: {
    content: 24,
    header: 18,
    math: 26
  },
  colors: {
    header: '#7f8c8d',
    content: '#000000',
    border: '#e0e0e0'
  },
  lists: {
    lineHeight: 1.4,
    itemSpacing: '0.2em',
    indent: '1.5em'
  },
  printing: {
    includeIncomplete: false,
    debugMode: false,
    filters: {
      keys: [], // Empty = all, or ['2d.1', '3a.2']
      levels: ['full'], // Default to full level only
      excludeKeys: []
    }
  }
}

// Utility function for deep merging configs
function mergeDeep(target, source) {
  const result = { ...target }
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = mergeDeep(target[key] || {}, source[key])
    } else {
      result[key] = source[key]
    }
  }
  return result
}

// Load and merge config
let config = defaultConfig
const configPath = path.join(__dirname, 'config.json')
if (fs.existsSync(configPath)) {
  try {
    const userConf = JSON.parse(fs.readFileSync(configPath, 'utf8'))
    config = mergeDeep(defaultConfig, userConf)
    if (cliOptions.debug) console.log('✅ Loaded config.json')
  } catch (e) {
    console.warn('⚠️ Could not parse config.json, using defaults:', e.message)
  }
}

// Apply CLI overrides
if (cliOptions.debug) config.printing.debugMode = true
if (cliOptions.keys) config.printing.filters.keys = cliOptions.keys
if (cliOptions.levels) config.printing.filters.levels = cliOptions.levels

// Debug logging function
function debugLog(...args) {
  if (config.printing.debugMode) {
    console.log('🔍 DEBUG:', ...args)
  }
}

// ---------- Load syllabus items ----------
import syllabusItems from "./syllabusItems.js"

// ---------- Enhanced flashcard extraction with filtering ----------
console.log('🚀 FLASHCARD GENERATOR VERSION 27 STARTING...');
debugLog('CLI options:', cliOptions)
debugLog('Config filters:', config.printing.filters)

// Apply level filtering first
let filteredItems = syllabusItems.filter(item => 
  config.printing.filters.levels.includes(item.level)
);
debugLog(`Filtered by levels [${config.printing.filters.levels.join(', ')}]: ${filteredItems.length} items`)

// Apply key filtering
if (config.printing.filters.keys.length > 0) {
  filteredItems = filteredItems.filter(item => 
    config.printing.filters.keys.includes(item.key)
  )
  debugLog(`Filtered by keys [${config.printing.filters.keys.join(', ')}]: ${filteredItems.length} items`)
}

// Apply exclusion filtering
if (config.printing.filters.excludeKeys.length > 0) {
  filteredItems = filteredItems.filter(item => 
    !config.printing.filters.excludeKeys.includes(item.key)
  )
  debugLog(`Excluded keys [${config.printing.filters.excludeKeys.join(', ')}]: ${filteredItems.length} items`)
}

console.log(`📚 Processing ${filteredItems.length} syllabus items after filtering`)

// Extract flashcards with enhanced validation
const flashcardItems = []
let incompleteCards = 0

filteredItems.forEach((item, itemIndex) => {
  debugLog(`Item ${itemIndex + 1} - Key: ${item.key}, has flashcards: ${!!item.flashcards}`)
  
  if (item.flashcards && Array.isArray(item.flashcards)) {
    debugLog(`Processing ${item.flashcards.length} flashcards for ${item.key}`)
    
    item.flashcards.forEach((card, index) => {
      const hasFront = !!(card.front && card.front.trim())
      const hasBack = !!(card.back && card.back.trim())
      
      debugLog(`Card ${index + 1} - has front: ${hasFront}, has back: ${hasBack}`)
      
      if (hasFront && hasBack) {
        flashcardItems.push({
          key: item.key,
          level: item.level,
          title: item.title,
          question: card.front,
          answer: card.back,
          frontImage: card.frontImage,
          backImage: card.backImage,
          cardIndex: index + 1,
          totalCards: item.flashcards.length
        })
        debugLog(`✅ Added flashcard ${item.key} (${index + 1}/${item.flashcards.length})`)
      } else if (config.printing.includeIncomplete) {
        // Add incomplete card with placeholders
        flashcardItems.push({
          key: item.key,
          level: item.level,
          title: item.title,
          question: card.front || '<em>No question provided</em>',
          answer: card.back || '<em>No answer provided</em>',
          frontImage: card.frontImage,
          backImage: card.backImage,
          cardIndex: index + 1,
          totalCards: item.flashcards.length,
          incomplete: true
        })
        incompleteCards++
        console.log(`⚠️ Added incomplete flashcard ${item.key} (${index + 1}/${item.flashcards.length})`)
      } else {
        incompleteCards++
        console.log(`⚠️ Skipped incomplete flashcard ${item.key} (${index + 1}/${item.flashcards.length})`)
      }
    })
  }
  // Legacy front/back support
  else if (item.front && item.back) {
    debugLog(`Processing legacy front/back for ${item.key}`)
    flashcardItems.push({
      key: item.key,
      level: item.level,
      title: item.title,
      question: item.front,
      answer: item.back,
      frontImage: item.frontImage,
      backImage: item.backImage,
      cardIndex: 1,
      totalCards: 1
    })
  }
})

console.log(`📋 Found ${flashcardItems.length} complete flashcards`)
if (incompleteCards > 0) {
  console.log(`⚠️ Found ${incompleteCards} incomplete flashcards ${config.printing.includeIncomplete ? '(included)' : '(skipped)'}`)
}

if (flashcardItems.length === 0) {
  console.log('\n❌ No flashcards found with current filters')
  console.log('💡 Try adjusting your filters or add flashcards to syllabus items:')
  console.log('   {')
  console.log('     key: "2d.1",')
  console.log('     level: "full",')
  console.log('     title: "Reactive components",')
  console.log('     flashcards: [')
  console.log('       {')
  console.log('         front: "What factors influence <strong>capacitance</strong>?",')
  console.log('         back: "Area, separation, permittivity with formula: $$C = \\\\frac{\\\\varepsilon A}{d}$$"')
  console.log('       }')
  console.log('     ]')
  console.log('   }')
  process.exit(1)
}

// ---------- Enhanced HTML Template Functions ----------
function generateHTMLTemplate(items, isFront) {
  const title = isFront ? 'Flashcards - Questions' : 'Flashcards - Answers'
  
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
        
        html {
            font-size: ${config.fontSize.content}px !important;
        }
        
        body {
            font-family: ${config.fonts.content};
            margin: 0;
            padding: 0;
            font-size: ${config.fontSize.content}px !important;
            line-height: 1.7;
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
            border: 2px solid ${config.colors.border};
            box-sizing: border-box;
            padding: 4mm;
            margin-bottom: ${config.cardSpacing_mm}mm;
            position: relative;
            break-inside: avoid;
            background-color: white;
        }
        
        .card.incomplete {
            border-color: #f39c12;
            background-color: #fef9e7;
        }
        
        .card:last-child {
            margin-bottom: 0;
        }
        
        .card-header {
            font-family: ${config.fonts.header};
            font-size: ${config.fontSize.header}px !important;
            font-weight: bold;
            color: ${config.colors.header};
            border-bottom: 2px solid ${config.colors.border};
            padding-bottom: 2mm;
            margin-bottom: 3mm;
            flex-shrink: 0;
        }
        
        .card-content {
            color: ${config.colors.content};
            display: flex;
            flex-direction: column;
            height: calc(100% - 40px);
            overflow: hidden;
            font-size: ${config.fontSize.content}px !important;
        }
        
        .card-text {
            flex-shrink: 0;
            margin-bottom: 2mm;
            font-size: ${config.fontSize.content}px !important;
            line-height: 1.7;
            font-weight: normal;
        }
        
        .card-image-container {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 5mm;
            overflow: hidden;
            background-color: #f9f9f9;
        }
        
        .card-image {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            display: block;
        }
        
        .cutting-line {
            position: absolute;
            width: calc(100% + 20mm);
            height: 0.5px;
            background-color: #ccc;
            left: -10mm;
            top: calc(50% - 0.25px);
        }
        
        /* Enhanced MathJax styling */
        .MathJax {
            font-size: ${config.fontSize.math}px !important;
        }
        
        .MathJax_Display {
            font-size: ${config.fontSize.math}px !important;
            overflow-x: auto;
            overflow-y: hidden;
        }
        
        /* Optimized list styling - MAJOR IMPROVEMENT */
        ul, ol {
            margin: 0.5em 0 !important;
            padding-left: ${config.lists.indent} !important;
            font-size: ${config.fontSize.content}px !important;
        }
        
        li {
            font-size: ${config.fontSize.content}px !important;
            line-height: ${config.lists.lineHeight} !important;
            margin: ${config.lists.itemSpacing} 0 !important;
        }
        
        ul li {
            list-style-type: disc !important;
        }
        
        ol li {
            list-style-type: decimal !important;
        }
        
        /* Force consistent font sizing */
        p, div, span, strong, em, b, i {
            font-size: ${config.fontSize.content}px !important;
            line-height: 1.7 !important;
        }
        
        h1, h2, h3, h4, h5, h6 {
            font-size: ${config.fontSize.content + 2}px !important;
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
</html>`
}

function generateCardsHTML(items, isFront) {
  let html = ''
  
  for (let i = 0; i < items.length; i += config.cardsPerPage) {
    html += '<div class="page">'
    
    // Add cutting line for pages with multiple cards
    if (config.cardsPerPage > 1) {
      html += '<div class="cutting-line"></div>'
    }
    
    for (let slot = 0; slot < config.cardsPerPage; slot++) {
      const itemIndex = i + slot
      const item = items[itemIndex]
      
      if (item) {
        html += generateSingleCardHTML(item, isFront)
      } else {
        // Empty card to maintain layout
        html += '<div class="card empty-card"></div>'
      }
    }
    
    html += '</div>'
  }
  
  return html
}

function generateSingleCardHTML(item, isFront) {
  const cardIndicator = item.totalCards > 1 ? ` (${item.cardIndex}/${item.totalCards})` : ''
  const header = `${item.key}${cardIndicator} | ${item.title}`
  
  const content = isFront ? (item.question || '') : (item.answer || '')
  const imageKey = isFront ? 'frontImage' : 'backImage'
  const imagePath = item[imageKey]
  
  let imageHTML = ''
  if (imagePath) {
    const fullImagePath = path.join(config.imageFolder, imagePath)
    if (fs.existsSync(fullImagePath)) {
      try {
        const imageBuffer = fs.readFileSync(fullImagePath)
        const imageExt = path.extname(imagePath).toLowerCase()
        let mimeType = 'image/jpeg'
        if (imageExt === '.png') mimeType = 'image/png'
        if (imageExt === '.gif') mimeType = 'image/gif'
        if (imageExt === '.svg') mimeType = 'image/svg+xml'
        
        const base64Image = imageBuffer.toString('base64')
        imageHTML = `
                <div class="card-image-container">
                    <img src="data:${mimeType};base64,${base64Image}" alt="Card image" class="card-image">
                </div>`
        debugLog(`✅ Loaded image: ${imagePath}`)
      } catch (error) {
        console.warn(`⚠️ Could not load image ${imagePath}:`, error.message)
      }
    } else {
      console.warn(`⚠️ Image not found: ${fullImagePath}`)
    }
  }
  
  const cardClass = item.incomplete ? 'card incomplete' : 'card'
  
  return `
        <div class="${cardClass}">
            <div class="card-header">${header}</div>
            <div class="card-content">
                <div class="card-text">${displayContent}</div>
                ${imageHTML}
            </div>
        </div>`
}

// ---------- Enhanced PDF Generation ----------
async function generatePDF(items, isFront, outputPath) {
  const type = isFront ? 'FRONT' : 'BACK'
  console.log(`📄 Generating ${type} PDF with ${items.length} cards...`)
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
  })
  
  try {
    const page = await browser.newPage()
    
    const htmlContent = generateHTMLTemplate(items, isFront)
    
    // Debug font verification
    if (config.printing.debugMode) {
      const hasCorrectFonts = htmlContent.includes(`font-size: ${config.fontSize.content}px !important`)
      debugLog(`Font size check - Using ${config.fontSize.content}px:`, hasCorrectFonts)
    }
    
    await page.setContent(htmlContent, { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    })
    
    // Wait for MathJax rendering
    await page.evaluate(() => {
      return new Promise((resolve) => {
        if (window.MathJax && window.MathJax.startup) {
          window.MathJax.startup.promise.then(resolve)
        } else {
          setTimeout(resolve, 3000)
        }
      })
    })
    
    // Additional wait for images
    await new Promise(resolve => setTimeout(resolve, 1000))
    
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
    })
    
    console.log(`✅ Generated: ${outputPath}`)
    
  } finally {
    await browser.close()
  }
}

// ---------- Enhanced error handling and validation ----------
function validateSyllabusItems() {
  if (!Array.isArray(syllabusItems)) {
    throw new Error('syllabusItems must be an array')
  }
  
  let validItems = 0
  let invalidItems = 0
  
  syllabusItems.forEach((item, index) => {
    if (!item.key || !item.level) {
      console.warn(`⚠️ Item ${index}: Missing required fields (key, level)`)
      invalidItems++
    } else {
      validItems++
    }
  })
  
  debugLog(`Validation: ${validItems} valid items, ${invalidItems} invalid items`)
  return validItems > 0
}

// ---------- Main execution with enhanced reporting ----------
async function main() {
  try {
    console.log(`\n📄 Generating PDFs with ${flashcardItems.length} flashcards...`)
    console.log(`🎯 Font sizes: Content ${config.fontSize.content}px, Headers ${config.fontSize.header}px`)
    
    // Show card layout calculations in debug mode
    if (config.printing.debugMode) {
      const contentHeight = 297 - (config.margin_mm * 2) // A4 height minus margins
      const cardSpacing = config.cardSpacing_mm
      const availableCardSpace = contentHeight - cardSpacing
      const cardHeight = availableCardSpace / config.cardsPerPage
      const cuttingLinePosition = availableCardSpace / 2
      
      debugLog('Card Layout Calculations:')
      debugLog(`- A4 height: 297mm`)
      debugLog(`- Margins: ${config.margin_mm}mm top + ${config.margin_mm}mm bottom = ${config.margin_mm * 2}mm total`)
      debugLog(`- Content height: ${contentHeight}mm`)
      debugLog(`- Card spacing: ${cardSpacing}mm`)
      debugLog(`- Available card space: ${availableCardSpace}mm`)
      debugLog(`- Each card height: ${cardHeight}mm`)
      debugLog(`- Cutting line position: ${cuttingLinePosition}mm from content top`)
      debugLog(`- Distance from paper top: ${cuttingLinePosition + config.margin_mm}mm`)
      debugLog(`- Distance from paper bottom: ${297 - (cuttingLinePosition + config.margin_mm)}mm`)
    }
    if (config.printing.filters.keys.length > 0) {
      console.log(`🔍 Filtered by keys: [${config.printing.filters.keys.join(', ')}]`)
    }
    if (config.printing.filters.levels.length > 0 && !config.printing.filters.levels.includes('full')) {
      console.log(`🔍 Filtered by levels: [${config.printing.filters.levels.join(', ')}]`)
    }
    
    const startTime = Date.now()
    
    // Generate both PDFs
    await generatePDF(flashcardItems, true, config.output.front)
    await generatePDF(flashcardItems, false, config.output.back)
    
    const duration = Math.round((Date.now() - startTime) / 1000)
    
    console.log('\n🎉 SUCCESS! Created flashcard files:')
    console.log(`📄 ${config.output.front} (questions)`)
    console.log(`📄 ${config.output.back} (answers)`)
    console.log(`📊 Stats: ${flashcardItems.length} cards, ${duration}s generation time`)
    console.log(`📋 Pages: ${Math.ceil(flashcardItems.length / config.cardsPerPage)} pages per PDF`)
    
    if (incompleteCards > 0) {
      console.log(`⚠️  Note: ${incompleteCards} incomplete cards ${config.printing.includeIncomplete ? 'included with placeholders' : 'were skipped'}`)
    }
    
    console.log('\n🖨️ Printing Instructions:')
    console.log('  1. Print both PDFs double-sided with "flip on short edge"')
    console.log('  2. Cut along the horizontal cutting lines')
    console.log('  3. Stack front and back cards - they should align perfectly')
    console.log('\n🚀 Flashcard Generator v27 Complete!')
    
  } catch (error) {
    console.error('❌ Error generating PDFs:', error)
    if (config.printing.debugMode) {
      console.error('Stack trace:', error.stack)
    }
    process.exit(1)
  }
}

// ---------- Run generator with validation ----------
try {
  if (!validateSyllabusItems()) {
    throw new Error('No valid syllabus items found')
  }
  await main()
} catch (error) {
  console.error('❌ Fatal error:', error.message)
  if (config.printing.debugMode) {
    console.error('Stack trace:', error.stack)
  }
  process.exit(1)
}

// --------- Example syllabusItems.js structure ---------
/*
const syllabusItems = [
  {
    key: '2d.1',
    level: 'full',
    title: 'Reactive components',
    text: 'Understanding capacitance factors...',
    flashcards: [
      {
        front: 'What factors influence <strong>capacitance</strong>?',
        back: `Permittivity (k), Area (A), Distance (d)<br><br>
               Formula: $$C = \\frac{\\varepsilon A}{d}$$<br><br>
               Where $\\varepsilon = k \\varepsilon_0$`,
        frontImage: 'capacitor.jpg',     // optional
        backImage: 'capacitor-formula.jpg' // optional
      },
      {
        front: 'What happens if distance <em>doubles</em>?',
        back: `Capacitance <strong>halves</strong><br><br>
               <ul>
                 <li>Inverse relationship: $C \\propto \\frac{1}{d}$</li>
                 <li>Double distance = half capacitance</li>
                 <li>Physical separation affects field strength</li>
               </ul>`
      }
    ]
  }
];
export default syllabusItems;

// Enhanced config.json example:
{
  "fontSize": {
    "content": 24,
    "header": 18,
    "math": 26
  },
  "lists": {
    "lineHeight": 1.4,
    "itemSpacing": "0.2em",
    "indent": "1.5em"
  },
  "printing": {
    "includeIncomplete": false,
    "filters": {
      "keys": ["2d.1", "2d.2"],
      "levels": ["full"],
      "excludeKeys": []
    }
  }
}
*/