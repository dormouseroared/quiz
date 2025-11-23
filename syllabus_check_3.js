// syllabus_check.js
import syllabusItems from "./syllabusItems.js"
import fs from 'fs';

// Parse command line arguments
const args = process.argv.slice(2);
let keysFilter = null;
let outputFile = null;

args.forEach(arg => {
  if (arg.startsWith('--keys=')) {
    keysFilter = arg.split('=')[1];
  }
  if (arg.startsWith('--output=')) {
    outputFile = arg.split('=')[1];
  }
});

// Filter syllabus items for "full" level
let filteredItems = syllabusItems.filter(item => {
  return item.level.toLowerCase() === "full";
});

if (keysFilter) {
  filteredItems = filteredItems.filter(item => {
    return item.key.startsWith(keysFilter);
  });
}

// Collect output in array
const output = [];
const log = (text) => output.push(text);

// Generate markdown report
log('# 📚 Syllabus Items Report\n');

if (keysFilter) {
  log(`## 🎯 Filter: Section ${keysFilter}\n`);
}

log(`**Total items:** ${filteredItems.length} | **Level:** Full Licence\n`);
log('---\n');

// Summary statistics first
const totalFlashcards = filteredItems.reduce((sum, item) => {
  return sum + (item.flashcards ? item.flashcards.length : 0);
}, 0);

const itemsWithFlashcards = filteredItems.filter(item => 
  item.flashcards && item.flashcards.length > 0
).length;

const itemsWithoutFlashcards = filteredItems.length - itemsWithFlashcards;
const coveragePercent = ((itemsWithFlashcards / filteredItems.length) * 100).toFixed(1);

log('## 📊 Summary\n');
log('| Metric | Value |');
log('|--------|------:|');
log(`| Total Flashcards | **${totalFlashcards}** |`);
log(`| Items with Flashcards | ${itemsWithFlashcards} / ${filteredItems.length} |`);
log(`| Items Needing Flashcards | ${itemsWithoutFlashcards} |`);
log(`| Average per Item | ${(totalFlashcards / filteredItems.length).toFixed(2)} |`);
log(`| Coverage | **${coveragePercent}%** |`);
log('\n---\n');

// Detailed table
log('## 📋 Detailed Breakdown\n');
log('| Key | Topic | Cards | Status |');
log('|:---:|:------|------:|:------:|');

filteredItems.forEach(item => {
  const flashcardCount = item.flashcards ? item.flashcards.length : 0;
  const subTitle = item.subTitle || item.title || '*(no title)*';
  const status = flashcardCount > 0 ? '✅ Ready' : '⚠️ TODO';
  const countDisplay = flashcardCount > 0 ? `**${flashcardCount}**` : '0';
  log(`| ${item.key} | ${subTitle} | ${countDisplay} | ${status} |`);
});

log('\n---\n');

// Items without flashcards - formatted as checklist
if (itemsWithoutFlashcards > 0) {
  log('## ⚠️ Items Needing Flashcards\n');
  log(`> **${itemsWithoutFlashcards} items** need flashcard coverage\n`);
  
  filteredItems
    .filter(item => !item.flashcards || item.flashcards.length === 0)
    .forEach(item => {
      const subTitle = item.subTitle || item.title || '*(no title)*';
      log(`- [ ] **${item.key}** — ${subTitle}`);
    });
  log('');
} else {
  log('## 🎉 Complete!\n');
  log('> All items have flashcard coverage.\n');
}

// Items with good coverage
const wellCoveredItems = filteredItems.filter(item => 
  item.flashcards && item.flashcards.length >= 3
);

if (wellCoveredItems.length > 0) {
  log('---\n');
  log('## ✨ Well-Covered Topics\n');
  log(`> **${wellCoveredItems.length} items** with 3+ flashcards\n`);
  
  wellCoveredItems.forEach(item => {
    const subTitle = item.subTitle || item.title;
    const count = item.flashcards.length;
    log(`- ✅ **${item.key}** (${count} cards) — ${subTitle}`);
  });
  log('');
}

// Study priority suggestions
log('---\n');
log('## 🎯 Study Priority Suggestions\n');

if (itemsWithoutFlashcards > 0) {
  log('### 🔴 High Priority (No flashcards yet)\n');
  const noCoverage = filteredItems.filter(item => !item.flashcards || item.flashcards.length === 0);
  noCoverage.slice(0, 5).forEach((item, idx) => {
    const subTitle = item.subTitle || item.title;
    log(`${idx + 1}. **${item.key}** — ${subTitle}`);
  });
  if (noCoverage.length > 5) {
    log(`   *(and ${noCoverage.length - 5} more...)*`);
  }
  log('');
}

const lightCoverage = filteredItems.filter(item => 
  item.flashcards && item.flashcards.length > 0 && item.flashcards.length < 3
);

if (lightCoverage.length > 0) {
  log('### 🟡 Medium Priority (Light coverage: 1-2 flashcards)\n');
  lightCoverage.forEach((item, idx) => {
    const subTitle = item.subTitle || item.title;
    const count = item.flashcards.length;
    log(`${idx + 1}. **${item.key}** (${count} cards) — ${subTitle}`);
  });
  log('');
}

// Exam date reminder
log('---\n');
log('## 📅 Timeline\n');
log('- **Exam Date:** 20 December 2024');
log('- **Course End:** 18 December 2024');
log('- **Days Remaining:** Check your calendar!\n');
log('> 💡 **Tip:** Aim to complete all flashcards by 10 December for adequate revision time.\n');

// Output
const finalOutput = output.join('\n');

if (outputFile) {
  fs.writeFileSync(outputFile, finalOutput, 'utf8');
  console.log(`✅ Report saved to: ${outputFile}`);
} else {
  console.log(finalOutput);
}