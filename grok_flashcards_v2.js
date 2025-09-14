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

// CSS for printable flashcards. Adjust as needed for your printer/paper size.
// This lays out cards in a grid, assuming A4/letter size, with 2x2 cards per page as an example.
// Each card is about 3.5x2 inches (business card size), but scale accordingly.
const cardStyle = `
  @media print {
    body { margin: 0; padding: 0; }
    .page { page-break-after: always; display: grid; grid-template-columns: repeat(2, 1fr); grid-gap: 0.5in; padding: 0.5in; }
    .card { border: 1px solid #000; padding: 0.5in; box-sizing: border-box; font-family: Arial, sans-serif; font-size: 12pt; }
    .card img { max-width: 100%; height: auto; }
  }
`;

// Function to generate HTML for fronts or backs
function generateHTML(isFront) {
  let html = `<html><head><style>${cardStyle}</style></head><body>`;
  let cardCount = 0;

  flashcards.forEach(card => {
    if (cardCount % 4 === 0) { // 4 cards per page (2x2 grid)
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

  if (cardCount % 4 !== 0) html += '</div>';
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
console.log('1. Open fronts.html in your browser and print it (ensure no margins, actual size).');
console.log('2. Take the printed pages, flip them (or reinsert backwards depending on your printer), and print backs.html on the back sides.');
console.log('Note: For double-sided alignment, test with a small number of cards. Adjust CSS grid/padding if needed for your paper size.');
console.log('To run this script in Node.js, save it as a .mjs file or ensure your package.json has "type": "module".');