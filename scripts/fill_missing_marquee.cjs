const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'marquee');
const available = [];
for (let i = 1; i <= 21; i++) {
  const num = String(i).padStart(2, '0');
  const file = path.join(dir, `preview-${num}.webp`);
  if (fs.existsSync(file)) {
    available.push(file);
  }
}

console.log('Available count:', available.length);

// Fill any missing 1..21
for (let i = 1; i <= 21; i++) {
  const num = String(i).padStart(2, '0');
  const file = path.join(dir, `preview-${num}.webp`);
  if (!fs.existsSync(file)) {
    // Pick an available file (cycled)
    const src = available[(i * 3) % available.length];
    fs.copyFileSync(src, file);
    console.log(`Filled preview-${num}.webp from ${path.basename(src)}`);
  }
}

console.log('All 21 previews ready!');
