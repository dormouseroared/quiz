/*
Flashcard PDF generator v15 (ESM version, fixed filtering for flashcards)
- Generates two PDFs: flashcards_front.pdf and flashcards_back.pdf
- A4 portrait, 2 cards per page (top & bottom)
- Filters for items with flashcards arrays and extracts front/back content
- Supports frontImage and backImage (from ./flashcardImages)

Dependencies:
  npm install pdfkit image-size

Usage:
  - Place this script in your project root
  - Provide syllabusItems.js with flashcards arrays (see example at bottom)
  - Optionally create config.json to override defaults
  - Place images in ./flashcardImages
  - Run: node flashcard_generator_v15.mjs

Notes about duplex printing:
  - When printing the two PDFs double-sided, choose duplex printing with "flip on short edge"
  - This script places answers in the same x/y positions as the matching question on the back PDF
*/

import PDFDocument from 'pdfkit'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import sizeOf from 'image-size'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ---------- Load config (or use defaults) ----------
const defaultConfig = {
  page: {
    width_mm: 210,
    height_mm: 297
  },
  dpi: 72,
  cardsPerPage: 2,
  margin_mm: 10,
  cutLineWidth_pt: 0.5,
  textFont: 'Helvetica',
  textFontSize: 14,
  textMaxLines: 10,
  cardSpacing_mm: 4,
  imageFolder: path.join(__dirname, 'flashcardImages'),
  output: {
    front: 'flashcards_front.pdf',
    back: 'flashcards_back.pdf'
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
console.log('🚀 FLASHCARD GENERATOR VERSION 15 STARTING...');

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
    console.log('         back: "Area, separation, permittivity",');
    console.log('         frontImage: "capacitor.jpg",  // optional');
    console.log('         backImage: "capacitor-formula.jpg"  // optional');
    console.log('       }');
    console.log('     ]');
    console.log('   }');
    process.exit(1);
}

// ---------- Unit helpers ----------
const mmToPt = mm => (mm / 25.4) * config.dpi
const A4_WIDTH_PT = mmToPt(config.page.width_mm)
const A4_HEIGHT_PT = mmToPt(config.page.height_mm)

const pageMarginPt = mmToPt(config.margin_mm)
const cardSpacingPt = mmToPt(config.cardSpacing_mm)
const usableWidth = A4_WIDTH_PT - 2 * pageMarginPt
const usableHeight = (A4_HEIGHT_PT - 2 * pageMarginPt - cardSpacingPt) / config.cardsPerPage

function createDoc(filename) {
  const doc = new PDFDocument({ size: [A4_WIDTH_PT, A4_HEIGHT_PT], margin: 0 })
  doc.pipe(fs.createWriteStream(filename))
  return doc
}

function drawCuttingLines(doc) {
  doc.save()
  doc.lineWidth(config.cutLineWidth_pt)
  const y = pageMarginPt + usableHeight + (cardSpacingPt / 2)
  doc.moveTo(pageMarginPt / 2, y).lineTo(A4_WIDTH_PT - pageMarginPt / 2, y).stroke()
  const notchLen = mmToPt(6)
  doc.moveTo(pageMarginPt / 2, y - notchLen / 2).lineTo(pageMarginPt / 2, y + notchLen / 2).stroke()
  doc.moveTo(A4_WIDTH_PT - pageMarginPt / 2, y - notchLen / 2).lineTo(A4_WIDTH_PT - pageMarginPt / 2, y + notchLen / 2).stroke()
  doc.restore()
}

function renderCard(doc, item, cardIndexOnPage, isFront) {
  const cardTop = pageMarginPt + cardIndexOnPage * (usableHeight + cardSpacingPt)
  const left = pageMarginPt
  const width = usableWidth
  const height = usableHeight
  const padding = mmToPt(8)
  const textX = left + padding
  const textY = cardTop + padding
  const textWidth = width - padding * 2

  // Add header with key and card numbering
  const cardIndicator = item.totalCards > 1 ? ` (${item.cardIndex}/${item.totalCards})` : '';
  const header = `${item.key}${cardIndicator} | ${item.title}`;
  
  doc.font(config.textFont).fontSize(10)
  doc.fillColor('#7f8c8d')
  doc.text(header, textX, textY, { width: textWidth, align: 'left' })
  
  // Add separator line
  const headerHeight = doc.heightOfString(header, { width: textWidth })
  const lineY = textY + headerHeight + mmToPt(2)
  doc.moveTo(textX, lineY).lineTo(textX + textWidth, lineY).stroke()
  
  // Reset color and render main content
  doc.fillColor('#000000')
  const contentY = lineY + mmToPt(3)
  
  const text = isFront ? (item.question || item.text || '') : (item.answer || '')

  doc.font(config.textFont).fontSize(config.textFontSize)
  doc.text(text, textX, contentY, { width: textWidth, align: 'left' })

  const imageKey = isFront ? 'frontImage' : 'backImage'
  if (item[imageKey]) {
    const imagePath = path.join(config.imageFolder, item[imageKey])
    if (fs.existsSync(imagePath)) {
      try {
        const dims = sizeOf(imagePath)
        const textHeightEstimate = doc.heightOfString(text, { width: textWidth })
        const imageTop = contentY + textHeightEstimate + mmToPt(6)
        const imageBottom = cardTop + height - padding
        let availHeight = imageBottom - imageTop
        let availWidth = textWidth

        if (availHeight > 20 && availWidth > 20) {
          const wScale = availWidth / dims.width
          const hScale = availHeight / dims.height
          const scale = Math.min(wScale, hScale, 1)
          const drawW = dims.width * scale
          const drawH = dims.height * scale
          const drawX = textX + (availWidth - drawW) / 2
          const drawY = imageTop + (availHeight - drawH) / 2

          doc.image(imagePath, drawX, drawY, { width: drawW, height: drawH })
        }
      } catch (e) {
        console.warn('Could not load image', imagePath, e.message)
      }
    } else {
      console.warn('Image not found:', imagePath)
    }
  }
}

function generateFront(items) {
  const doc = createDoc(config.output.front)
  let page = 0
  for (let i = 0; i < items.length; i += config.cardsPerPage) {
    if (page > 0) doc.addPage()
    const slice = items.slice(i, i + config.cardsPerPage)
    for (let slot = 0; slot < config.cardsPerPage; slot++) {
      const item = slice[slot] || {}
      renderCard(doc, item, slot, true)
    }
    drawCuttingLines(doc)
    page++
  }
  doc.end()
  console.log('Wrote', config.output.front)
}

function generateBack(items) {
  const doc = createDoc(config.output.back)
  let page = 0
  for (let i = 0; i < items.length; i += config.cardsPerPage) {
    if (page > 0) doc.addPage()
    const slice = items.slice(i, i + config.cardsPerPage)
    const swapTopBottomOnBack = false

    for (let slot = 0; slot < config.cardsPerPage; slot++) {
      let slotForBack = slot
      if (swapTopBottomOnBack) {
        slotForBack = (config.cardsPerPage - 1) - slot
      }
      const item = slice[slot] || {}
      renderCard(doc, item, slotForBack, false)
    }
    drawCuttingLines(doc)
    page++
  }
  doc.end()
  console.log('Wrote', config.output.back)
}

// Run with filtered flashcard items
console.log(`\n📄 Generating PDFs with ${flashcardItems.length} flashcards...`);
generateFront(flashcardItems)
generateBack(flashcardItems)

console.log('\n✅ Created PDF flashcard files:');
console.log('📄', config.output.front, '(questions)');
console.log('📄', config.output.back, '(answers)');
console.log(`🎯 Total cards: ${flashcardItems.length}`);
console.log('\n🖨️ Print both PDFs double-sided with "flip on short edge"');
console.log('✂️ Cut along the horizontal line in the middle');
console.log('\n🚀 END OF VERSION 15');

// --------- Example syllabusItems.js structure ---------
// const syllabusItems = [
//   {
//     key: '2d.1',
//     level: 'full',
//     title: 'Reactive components',
//     text: 'Understanding capacitance factors...',
//     flashcards: [
//       {
//         front: 'What factors influence capacitance?',
//         back: 'Permittivity (k), Area (A), Distance (d)\nFormula: C = kA/d',
//         frontImage: 'capacitor.jpg',     // optional
//         backImage: 'capacitor-formula.jpg' // optional
//       },
//       {
//         front: 'What happens if distance doubles?',
//         back: 'Capacitance halves\nInverse relationship: C ∝ 1/d'
//       }
//     ]
//   }
// ];
// export default syllabusItems;