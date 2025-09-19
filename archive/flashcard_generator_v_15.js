/*
Flashcard PDF generator v14 (ESM version, default export for syllabusItems)
- Generates two PDFs: flashcards_front.pdf and flashcards_back.pdf
- A4 portrait, 2 cards per page (top & bottom)
- Minimal cutting lines (thin straight lines)
- Uses the same font size for all text (configured in config.json)
- Supports frontImage and backImage (from ./flashcardImages)

Dependencies:
  npm install pdfkit image-size

Usage:
  - Place this script in your project root
  - Provide syllabusItems.js exporting default (example below)
  - Optionally create config.json to override defaults
  - Place images in ./flashcardImages
  - Run: node flashcard_generator_v14.mjs

Notes about duplex printing:
  - When printing the two PDFs double-sided, choose duplex printing with "flip on short edge" (sometimes called "flip on top").
  - This script places answers in the same x/y positions as the matching question on the back PDF. Printers vary; if alignment looks off you can try printing back PDF with either 1) page order reversed, or 2) swap top/bottom answers (see code comments at the end for a quick toggle).
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
// const syllabusPath = path.join(__dirname, 'syllabusItems.js')
// console.log(syllabusPath)
// if (!fs.existsSync(syllabusPath)) {
//   console.error('ERROR: syllabusItems.js not found in project root.')
//   process.exit(1)
// }

// let syllabusItems
// try {
//   ({ default: syllabusItems } = await import(syllabusPath))
// } catch (err) {
//   console.error('ERROR: syllabusItems.js must export default array', err)
//   process.exit(1)
// }
// if (!Array.isArray(syllabusItems)) {
//   console.error('ERROR: syllabusItems.js must export default array')
//   process.exit(1)
// }

import syllabusItems from "./syllabusItems.js"

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

  const text = isFront ? (item.question || item.text || '') : (item.answer || '')

  doc.font(config.textFont).fontSize(config.textFontSize)
  doc.text(text, textX, textY, { width: textWidth, align: 'left' })

  const imageKey = isFront ? 'frontImage' : 'backImage'
  if (item[imageKey]) {
    const imagePath = path.join(config.imageFolder, item[imageKey])
    if (fs.existsSync(imagePath)) {
      try {
        const dims = sizeOf(imagePath)
        const textHeightEstimate = doc.heightOfString(text, { width: textWidth })
        const imageTop = textY + textHeightEstimate + mmToPt(6)
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

// Run
generateFront(syllabusItems)
generateBack(syllabusItems)

// --------- Example syllabusItems.js ---------
// const syllabusItems = [
//   {
//     key: 'card1',
//     question: 'What is the capital of France?',
//     answer: 'Paris',
//     frontImage: 'paris.jpg',
//     backImage: 'eiffel.jpg'
//   },
//   {
//     key: 'card2',
//     text: 'What is 2+2?',
//     answer: '4'
//   }
// ];
// export default syllabusItems;

// --------- Example config.json ---------
// {
//   "textFontSize": 16,
//   "margin_mm": 12
// }

// If you want the back PDF to swap top/bottom positions (some printers require this),
// edit the `swapTopBottomOnBack` variable inside generateBack() above and set it to true.
