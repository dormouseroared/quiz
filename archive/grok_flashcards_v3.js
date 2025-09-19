import fs from 'fs';
import path from 'path';
import syllabus from './syllabusItems.js';

// Collect all flashcards from the syllabus
const flashcards = [];
syllabus.forEach(item => {
  if (item.flashcards && Array.isArray(item.flashcards)) {
    item.flashcards.forEach(fc => {
      flashcards.push({
        front: fc.front || '',
        back: fc.back || '',
        frontImage: fc.frontImage || null,
        backImage: fc.backImage || null
      });
    });
  }
});

// CSS for printable flashcards. Adjusted for A4 portrait, 2 columns x 4 rows = 8 cards per page.
// No outer margins, no grid gaps, treating paper edges as card edges.
// Thin borders as minimal cutting guides (0.5pt solid black). Remove border if no guides desired.
// Reduced internal padding for smaller card size.
const cardStyle = `
  @page {
    size: A4 portrait;
    margin: 0;
  }
  @media print {
    body { margin: 0; padding: 0; }
    .page { width: 210mm; height: 297mm; display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(4, 1fr); grid-gap: 0; page-break-after: always; }
    .card { border: 0.5pt solid #000; padding: 5mm; box-sizing: border-box; font-family: Arial, sans-serif; font-size: 10pt; }
    .card img { max-width: 100%; height: auto; }
  }
`;

// Function to generate HTML for fronts or backs
function generateHTML(isFront) {
  let html = `<html><head><style>${cardStyle}</style></head><body>`;
  let cardCount = 0;

  flashcards.forEach(card => {
    if (cardCount % 8 === 0) { // 8 cards per page (2x4 grid)
      if (cardCount > 0) html += '</div>';
      html += '<div class="page">';
    }

    html += '<div class="card">';
    if (isFront) {
      html += `<p>${card.front}</p>`;
      if (card.frontImage) {
        html += `<img src="${card.frontImage}" alt="Front Image">`;
      }
    } else {
      html += card.back; // back is already HTML string
      if (card.backImage) {
        html += `<img src="${card.backImage}" alt="Back Image">`;
      }
    }
    html += '</div>';

    cardCount++;
  });

  if (cardCount % 8 !== 0) html += '</div>';
  html += '</body></html>';

  return html;
}

// Generate and write front HTML
const frontHTML = generateHTML(true);
fs.writeFileSync('fronts.html', frontHTML);

// Generate and write back HTML (in the same order for alignment when flipping paper)
const backHTML = generateHTML(false);
fs.writeFileSync('backs.html', backHTML);

console.log('Generated fronts.html and backs.html for printing.');
console.log('To print:');
console.log('1. Open fronts.html in your browser and print it (ensure no margins, actual size, disable headers/footers).');
console.log('2. Take the printed pages, flip them appropriately for your printer (test alignment), and print backs.html on the back sides.');
console.log('Note: For double-sided alignment, test with a small number of cards. You may need to reverse card order per page in backs.html for some printers (e.g., mirror columns). Adjust CSS if needed for your setup.');
console.log('To run this script in Node.js, save it as a .mjs file or ensure your package.json has "type": "module".');