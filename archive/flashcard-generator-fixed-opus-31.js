/*
Flashcard PDF Generator v30 - FIXED ALIGNMENT
Generates two PDFs for double-sided printing with perfect center-cut alignment
- A4 portrait, 2 cards per page (exactly top & bottom halves)
- Single horizontal cut at page center (148.5mm)
- No borders needed when alignment is correct

Dependencies:
  npm install puppeteer

Usage:
  node flashcard_generator_v30.mjs
  node flashcard_generator_v30.mjs --keys=2d.1,3a.2
  node flashcard_generator_v30.mjs --debug
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
  help: args.includes('--help') || args.includes('-h')
}

if (cliOptions.help) {
  console.log(`
📃 Flashcard PDF Generator v30 - Fixed Alignment

Usage:
  node flashcard_generator_v30.mjs [options]

Options:
  --keys=2d.1,3a.2    Generate only specified keys
  --levels=full,basic Generate only specified levels  
  --debug             Enable debug logging
  --help, -h          Show this help

Examples:
  node flashcard_generator_v30.mjs
  node flashcard_generator_v30.mjs --keys=2d.1,2d.2 --debug
  node flashcard_generator_v30.mjs --levels=full
`)
  process.exit(0)
}

// ---------- Configuration ----------
const config = {
  page: {
    width_mm: 210,
    height_mm: 297,
    printableHeight_mm: 297, // Full A4 height
    halfHeight_mm: 148.5     // Exact half for cutting
  },
  margin_mm: 0,  // No margins - we handle spacing internally
  cardPadding_mm: 10, // Internal padding within each card
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
    border: '#e0e0e0',
    cutLine: '#ff0000'  // Red for visibility in debug mode
  },
  lists: {
    lineHeight: 1.4,
    itemSpacing: '0.2em',
    indent: '1.5em'
  },
  printing: {
    showCutLine: true,  // Visual guide for cutting
    showBorders: false, // Set to true for debug, false for production
    filters: {
      keys: [],
      levels: ['full'],
      excludeKeys: []
    }
  },
  debug: false
}

// Load user config if exists
const configPath = path.join(__dirname, 'config.json')
if (fs.existsSync(configPath)) {
  try {
    const userConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'))
    Object.assign(config, userConfig)
    if (cliOptions.debug) console.log('✅ Loaded config.json')
  } catch (e) {
    console.warn('⚠️ Could not parse config.json, using defaults:', e.message)
  }
}

// Apply CLI overrides
if (cliOptions.debug) config.debug = true
if (cliOptions.keys) config.printing.filters.keys = cliOptions.keys
if (cliOptions.levels) config.printing.filters.levels = cliOptions.levels

// Debug logging
function debugLog(...args) {
  if (config.debug) {
    console.log('🔍 DEBUG:', ...args)
  }
}

// ---------- Load syllabus items ----------
import syllabusItems from "./syllabusItems.js"

// ---------- Extract and filter flashcards ----------
console.log('🚀 FLASHCARD GENERATOR V30 - FIXED ALIGNMENT')
debugLog('Config:', JSON.stringify(config.printing.filters, null, 2))

// Apply filters
let filteredItems = syllabusItems.filter(item => 
  config.printing.filters.levels.includes(item.level)
)

if (config.printing.filters.keys.length > 0) {
  filteredItems = filteredItems.filter(item => 
    config.printing.filters.keys.includes(item.key)
  )
}

if (config.printing.filters.excludeKeys.length > 0) {
  filteredItems = filteredItems.filter(item => 
    !config.printing.filters.excludeKeys.includes(item.key)
  )
}

console.log(`📚 Processing ${filteredItems.length} syllabus items after filtering`)

// Extract flashcards
const flashcardItems = []
let incompleteCards = 0

filteredItems.forEach((item) => {
  if (item.flashcards && Array.isArray(item.flashcards)) {
    item.flashcards.forEach((card, index) => {
      if (card.front?.trim() && card.back?.trim()) {
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
      } else {
        incompleteCards++
        console.log(`⚠️ Skipped incomplete flashcard ${item.key} (${index + 1}/${item.flashcards.length})`)
      }
    })
  }
  // Legacy support
  else if (item.front && item.back) {
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
  console.log(`⚠️ Skipped ${incompleteCards} incomplete flashcards`)
}

if (flashcardItems.length === 0) {
  console.log('\n❌ No flashcards found!')
  process.exit(1)
}

// ---------- HTML Template Generation ----------
function generateHTMLTemplate(items, isFront) {
  const title = isFront ? 'Flashcards - Questions' : 'Flashcards - Answers'
  
  // Calculate exact positioning
  const pageHeight = config.page.height_mm
  const halfHeight = config.page.halfHeight_mm
  
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
                skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
            }
        };
    </script>
    
    <style>
        @page {
            size: A4 portrait;
            margin: 0;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        html, body {
            width: ${config.page.width_mm}mm;
            height: ${pageHeight}mm;
            margin: 0;
            padding: 0;
            font-family: ${config.fonts.content};
            font-size: ${config.fontSize.content}px;
        }
        
        .page {
            width: ${config.page.width_mm}mm;
            height: ${pageHeight}mm;
            position: relative;
            page-break-after: always;
            page-break-inside: avoid;
            margin: 0;
            padding: 0;
        }
        
        .page:last-child {
            page-break-after: avoid;
        }
        
        /* Card containers - exactly half page each */
        .card-container {
            position: absolute;
            width: ${config.page.width_mm}mm;
            height: ${halfHeight}mm;
            left: 0;
            overflow: hidden;
        }
        
        .card-container.top {
            top: 0;
        }
        
        .card-container.bottom {
            top: ${halfHeight}mm;
        }
        
        /* Actual card content with padding */
        .card {
            width: 100%;
            height: 100%;
            padding: ${config.cardPadding_mm}mm;
            display: flex;
            flex-direction: column;
            ${config.printing.showBorders ? `border: 1px solid ${config.colors.border};` : ''}
        }
        
        .card-header {
            font-family: ${config.fonts.header};
            font-size: ${config.fontSize.header}px;
            font-weight: bold;
            color: ${config.colors.header};
            border-bottom: 2px solid ${config.colors.border};
            padding-bottom: 2mm;
            margin-bottom: 3mm;
            flex-shrink: 0;
        }
        
        .card-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }
        
        .card-text {
            color: ${config.colors.content};
            font-size: ${config.fontSize.content}px;
            line-height: 1.7;
            margin-bottom: 3mm;
        }
        
        .card-image-container {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background-color: #f9f9f9;
            min-height: 20mm;
        }
        
        .card-image {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }
        
        /* Cutting guide line - exactly at half page */
        .cutting-line {
            position: absolute;
            width: ${config.page.width_mm}mm;
            height: 0;
            left: 0;
            top: ${halfHeight}mm;
            border-top: ${config.printing.showCutLine ? '1px dashed ' + config.colors.cutLine : 'none'};
            opacity: ${config.debug ? '1' : '0.3'};
            z-index: 1000;
            pointer-events: none;
        }
        
        /* Empty card placeholder */
        .empty-card {
            visibility: hidden;
        }
        
        /* Math formatting */
        .MathJax {
            font-size: ${config.fontSize.math}px !important;
        }
        
        /* List formatting */
        ul, ol {
            margin: 0.5em 0;
            padding-left: ${config.lists.indent};
        }
        
        li {
            line-height: ${config.lists.lineHeight};
            margin: ${config.lists.itemSpacing} 0;
        }
        
        /* Debug helpers */
        ${config.debug ? `
        .debug-info {
            position: absolute;
            top: 2mm;
            right: 2mm;
            font-size: 10px;
            color: red;
            z-index: 1001;
        }
        ` : ''}
    </style>
</head>
<body>
    ${generateCardsHTML(items, isFront)}
</body>
</html>`
}

function generateCardsHTML(items, isFront) {
  let html = ''
  
  // Process items in pairs (2 per page)
  for (let i = 0; i < items.length; i += 2) {
    html += '<div class="page">'
    
    // Add cutting line
    if (config.printing.showCutLine) {
      html += '<div class="cutting-line"></div>'
    }
    
    // Debug info
    if (config.debug) {
      html += `<div class="debug-info">Page ${Math.floor(i/2) + 1}</div>`
    }
    
    // Top card
    const topItem = items[i]
    if (topItem) {
      html += `
        <div class="card-container top">
          ${generateSingleCardHTML(topItem, isFront)}
        </div>`
    } else {
      html += '<div class="card-container top"><div class="card empty-card"></div></div>'
    }
    
    // Bottom card
    const bottomItem = items[i + 1]
    if (bottomItem) {
      html += `
        <div class="card-container bottom">
          ${generateSingleCardHTML(bottomItem, isFront)}
        </div>`
    } else {
      html += '<div class="card-container bottom"><div class="card empty-card"></div></div>'
    }
    
    html += '</div>'
  }
  
  return html
}

function generateSingleCardHTML(item, isFront) {
  const cardIndicator = item.totalCards > 1 ? ` (${item.cardIndex}/${item.totalCards})` : ''
  const header = `${item.key}${cardIndicator} | ${item.title}`
  
  const content = isFront ? item.question : item.answer
  const imagePath = isFront ? item.frontImage : item.backImage
  
  let imageHTML = ''
  if (imagePath && config.imageFolder) {
    const fullImagePath = path.join(config.imageFolder, imagePath)
    if (fs.existsSync(fullImagePath)) {
      try {
        const imageBuffer = fs.readFileSync(fullImagePath)
        const ext = path.extname(imagePath).toLowerCase()
        const mimeTypes = {
          '.jpg': 'image/jpeg',
          '.jpeg': 'image/jpeg',
          '.png': 'image/png',
          '.gif': 'image/gif',
          '.svg': 'image/svg+xml'
        }
        const mimeType = mimeTypes[ext] || 'image/jpeg'
        const base64 = imageBuffer.toString('base64')
        imageHTML = `
          <div class="card-image-container">
            <img src="data:${mimeType};base64,${base64}" alt="Card image" class="card-image">
          </div>`
        debugLog(`✅ Loaded image: ${imagePath}`)
      } catch (e) {
        console.warn(`⚠️ Could not load image ${imagePath}:`, e.message)
      }
    }
  }
  
  return `
    <div class="card">
      <div class="card-header">${header}</div>
      <div class="card-content">
        <div class="card-text">${content}</div>
        ${imageHTML}
      </div>
    </div>`
}

// ---------- PDF Generation ----------
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
    
    // Save HTML for debugging if needed
    if (config.debug) {
      const debugFile = `debug_${isFront ? 'front' : 'back'}.html`
      fs.writeFileSync(debugFile, htmlContent)
      console.log(`  📝 Debug HTML saved to ${debugFile}`)
    }
    
    await page.setContent(htmlContent, { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    })
    
    // Wait for MathJax
    await page.evaluate(() => {
      return new Promise((resolve) => {
        if (window.MathJax && window.MathJax.startup) {
          window.MathJax.startup.promise.then(resolve)
        } else {
          setTimeout(resolve, 2000)
        }
      })
    })
    
    // Generate PDF with exact A4 dimensions
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0mm',
        right: '0mm',
        bottom: '0mm',
        left: '0mm'
      },
      preferCSSPageSize: false
    })
    
    console.log(`✅ Generated: ${outputPath}`)
    
  } finally {
    await browser.close()
  }
}

// ---------- Main execution ----------
async function main() {
  try {
    console.log(`\n📄 Generating PDFs with ${flashcardItems.length} flashcards...`)
    console.log(`🎯 Card alignment: Exact center cut at ${config.page.halfHeight_mm}mm`)
    console.log(`📏 Borders: ${config.printing.showBorders ? 'Visible' : 'Hidden (production mode)'}`)
    console.log(`✂️ Cut line: ${config.printing.showCutLine ? 'Visible' : 'Hidden'}`)
    
    const startTime = Date.now()
    
    // Generate both PDFs
    await generatePDF(flashcardItems, true, config.output.front)
    await generatePDF(flashcardItems, false, config.output.back)
    
    const duration = Math.round((Date.now() - startTime) / 1000)
    
    console.log('\n🎉 SUCCESS! Created flashcard files:')
    console.log(`📄 ${config.output.front} (questions)`)
    console.log(`📄 ${config.output.back} (answers)`)
    console.log(`📊 Stats: ${flashcardItems.length} cards, ${Math.ceil(flashcardItems.length / 2)} pages, ${duration}s`)
    
    console.log('\n🖨️ Printing Instructions:')
    console.log('  1. Print front PDF on one side')
    console.log('  2. Flip paper on SHORT edge')
    console.log('  3. Print back PDF on reverse')
    console.log(`  4. Cut horizontally at center (${config.page.halfHeight_mm}mm from top)`)
    console.log('  5. Cards will be perfectly aligned!')
    
    if (config.debug) {
      console.log('\n🔍 Debug Mode Active:')
      console.log('  - HTML files saved for inspection')
      console.log('  - Cut lines shown in red')
      console.log('  - Page numbers visible')
    }
    
  } catch (error) {
    console.error('❌ Error generating PDFs:', error)
    if (config.debug) {
      console.error('Stack trace:', error.stack)
    }
    process.exit(1)
  }
}

// Run the generator
main().catch(error => {
  console.error('❌ Fatal error:', error.message)
  process.exit(1)
})