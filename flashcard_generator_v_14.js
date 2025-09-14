/*
Flashcard PDF generator v14
- Generates two PDFs: flashcards_front.pdf and flashcards_back.pdf
- A4 portrait, 2 cards per page (top & bottom)
- Minimal cutting lines (thin straight lines)
- Uses the same font size for all text (configured in config.json)
- Supports frontImage and backImage (from ./flashcardImages)

Dependencies:
  npm install pdfkit image-size

Usage:
  - Place this script in your project root
  - Provide syllabusItems.js exporting an array named `syllabusItems` (example below)
  - Optionally create config.json to override defaults
  - Place images in ./flashcardImages
  - Run: node flashcard_generator_v14.js

Notes about duplex printing:
  - When printing the two PDFs double-sided, choose duplex printing with "flip on short edge" (sometimes called "flip on top").
  - This script places answers in the same x/y positions as the matching question on the back PDF. Printers vary; if alignment looks off you can try printing back PDF with either 1) page order reversed, or 2) swap top/bottom answers (see code comments at the end for a quick toggle).
*/

const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size');

// ---------- Load config (or use defaults) ----------
const defaultConfig = {
  page: {
    width_mm: 210, // A4 width in mm
    height_mm: 297 // A4 height in mm
  },
  dpi: 72, // PDF points per inch (PDFKit uses points where 72pt = 1in)
  cardsPerPage: 2,
  margin_mm: 10,
  cutLineWidth_pt: 0.5,
  textFont: 'Helvetica',
  textFontSize: 14,
  textMaxLines: 10,
  cardSpacing_mm: 4, // tiny spacing to make cutting easy
  imageFolder: path.join(__dirname, 'flashcardImages'),
  output: {
    front: 'flashcards_front.pdf',
    back: 'flashcards_back.pdf'
  }
};

let config = defaultConfig;
const configPath = path.join(__dirname, 'config.json');
if (fs.existsSync(configPath)) {
  try {
    const userConf = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    config = {...config, ...userConf};
    // shallow merge is fine for our simple config
  } catch (e) {
    console.warn('Could not parse config.json, using defaults:', e.message);
  }
}

// ---------- Load syllabus items ----------
// Expect syllabusItems.js to export an array `syllabusItems` via module.exports
const syllabusPath = path.join(__dirname, 'syllabusItems.js');
if (!fs.existsSync(syllabusPath)) {
  console.error('ERROR: syllabusItems.js not found in project root. Create it (see example below).');
  process.exit(1);
}
const { syllabusItems } = require(syllabusPath);
if (!Array.isArray(syllabusItems)) {
  console.error('ERROR: syllabusItems.js must export an array named syllabusItems');
  process.exit(1);
}

// ---------- Unit helpers ----------
const mmToPt = mm => (mm / 25.4) * config.dpi; // mm to points
const A4_WIDTH_PT = mmToPt(config.page.width_mm);
const A4_HEIGHT_PT = mmToPt(config.page.height_mm);

// Card geometry: split page into two equal vertical halves (top / bottom)
const pageMarginPt = mmToPt(config.margin_mm);
const cardSpacingPt = mmToPt(config.cardSpacing_mm);
const usableWidth = A4_WIDTH_PT - 2 * pageMarginPt;
const usableHeight = (A4_HEIGHT_PT - 2 * pageMarginPt - cardSpacingPt) / config.cardsPerPage;

// ---------- PDF creation helpers ----------
function createDoc(filename) {
  const doc = new PDFDocument({ size: [A4_WIDTH_PT, A4_HEIGHT_PT], margin: 0 });
  doc.pipe(fs.createWriteStream(filename));
  return doc;
}

function drawCuttingLines(doc) {
  doc.save();
  doc.lineWidth(config.cutLineWidth_pt);
  // center horizontal cut between top and bottom
  const y = pageMarginPt + usableHeight + (cardSpacingPt / 2);
  doc.moveTo(pageMarginPt / 2, y).lineTo(A4_WIDTH_PT - pageMarginPt / 2, y).stroke();
  // tiny edge crop lines at the center for easier cutting - minimal so they "disappear" after cut
  const notchLen = mmToPt(6);
  // left and right notches on center line only
  doc.moveTo(pageMarginPt / 2, y - notchLen / 2).lineTo(pageMarginPt / 2, y + notchLen / 2).stroke();
  doc.moveTo(A4_WIDTH_PT - pageMarginPt / 2, y - notchLen / 2).lineTo(A4_WIDTH_PT - pageMarginPt / 2, y + notchLen / 2).stroke();
  doc.restore();
}

function renderCard(doc, item, cardIndexOnPage, isFront) {
  // cardIndexOnPage: 0 => top, 1 => bottom
  const cardTop = pageMarginPt + cardIndexOnPage * (usableHeight + cardSpacingPt);
  const left = pageMarginPt;
  const right = A4_WIDTH_PT - pageMarginPt;
  const width = usableWidth;
  const height = usableHeight;

  // Draw nothing except content and minimal cut lines (cut lines drawn separately)
  // Text area at top of the card with some padding
  const padding = mmToPt(8);
  const textX = left + padding;
  const textY = cardTop + padding;
  const textWidth = width - padding * 2;

  const text = isFront ? (item.question || '') : (item.answer || '');

  doc.font(config.textFont).fontSize(config.textFontSize);

  // Simple text wrapping - use PDFKit's text() which wraps automatically
  doc.text(text, textX, textY, { width: textWidth, align: 'left' });

  // After text, place image if present. Images are drawn below the text.
  const imageKey = isFront ? 'frontImage' : 'backImage';
  if (item[imageKey]) {
    const imagePath = path.join(config.imageFolder, item[imageKey]);
    if (fs.existsSync(imagePath)) {
      try {
        const dims = sizeOf(imagePath);
        // compute area available for image: from current text bottom to bottom padding
        const textHeightEstimate = doc.heightOfString(text, { width: textWidth });
        const imageTop = textY + textHeightEstimate + mmToPt(6);
        const imageBottom = cardTop + height - padding;
        let availHeight = imageBottom - imageTop;
        let availWidth = textWidth;

        if (availHeight > 20 && availWidth > 20) {
          // scale image to fit into availWidth x availHeight
          const wScale = availWidth / dims.width;
          const hScale = availHeight / dims.height;
          const scale = Math.min(wScale, hScale, 1); // don't upscale
          const drawW = dims.width * scale;
          const drawH = dims.height * scale;
          const drawX = textX + (availWidth - drawW) / 2;
          const drawY = imageTop + (availHeight - drawH) / 2; // center vertically in available area

          doc.image(imagePath, drawX, drawY, { width: drawW, height: drawH });
        }
      } catch (e) {
        console.warn('Could not load image', imagePath, e.message);
      }
    } else {
      console.warn('Image not found:', imagePath);
    }
  }
}

// ---------- Generate front PDF ----------
function generateFront(items) {
  const doc = createDoc(config.output.front);
  let page = 0;
  for (let i = 0; i < items.length; i += config.cardsPerPage) {
    if (page > 0) doc.addPage();
    const slice = items.slice(i, i + config.cardsPerPage);
    // ensure we always render exactly cardsPerPage spots per page (empty if needed)
    for (let slot = 0; slot < config.cardsPerPage; slot++) {
      const item = slice[slot] || {};
      renderCard(doc, item, slot, true);
    }
    drawCuttingLines(doc);
    page++;
  }
  doc.end();
  console.log('Wrote', config.output.front);
}

// ---------- Generate back PDF ----------
function generateBack(items) {
  const doc = createDoc(config.output.back);
  let page = 0;
  for (let i = 0; i < items.length; i += config.cardsPerPage) {
    if (page > 0) doc.addPage();
    const slice = items.slice(i, i + config.cardsPerPage);

    // IMPORTANT: For duplex printing "flip on short edge" many printers expect the back content to be
    // in the same positions as the front. This implementation places answers in the same slots.
    // If your printer requires the top/bottom order swapped, set `swapTopBottomOnBack` to true below.
    const swapTopBottomOnBack = false; // toggle if you discover top/bottom mismatch when testing

    for (let slot = 0; slot < config.cardsPerPage; slot++) {
      const itemIndex = i + slot;
      let slotForBack = slot;
      if (swapTopBottomOnBack) {
        slotForBack = (config.cardsPerPage - 1) - slot; // flip top/bottom
      }
      const item = slice[slot] || {};
      renderCard(doc, item, slotForBack, false);
    }
    drawCuttingLines(doc);
    page++;
  }
  doc.end();
  console.log('Wrote', config.output.back);
}

// Run
generateFront(syllabusItems);
generateBack(syllabusItems);

// --------- Example syllabusItems.js ---------
// Save in project root as syllabusItems.js
// module.exports.syllabusItems = [
//   {
//     id: 'card1',
//     question: 'What is the capital of France?',
//     answer: 'Paris',
//     frontImage: 'paris.jpg',
//     backImage: 'eiffel.jpg'
//   },
//   {
//     id: 'card2',
//     question: 'What is 2+2?',
//     answer: '4'
//   }
// ];

// --------- Example config.json ---------
// {
//   "textFontSize": 16,
//   "margin_mm": 12
// }

// If you want the back PDF to swap top/bottom positions (some printers require this),
// edit the `swapTopBottomOnBack` variable inside generateBack() above and set it to true.
// You can also implement a runtime CLI toggle if you'd like; I kept it simple for now.
