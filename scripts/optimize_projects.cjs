const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const projectsDir = path.join(__dirname, '..', 'public', 'projects');
const files = fs.readdirSync(projectsDir).filter(f => f.endsWith('.jpg') && !f.endsWith('.webp'));

async function optimizeProjects() {
  console.log(`Optimizing ${files.length} project images...`);
  let origTotal = 0;
  let webpTotal = 0;
  let jpgTotal = 0;

  for (const file of files) {
    const fullPath = path.join(projectsDir, file);
    const origBuffer = fs.readFileSync(fullPath);
    origTotal += origBuffer.length;

    const baseName = file.replace(/\.jpg$/, '');
    const webpPath = path.join(projectsDir, `${baseName}.webp`);

    // 1. Generate crisp WebP (max width 960px, quality 82)
    const webpBuffer = await sharp(origBuffer)
      .resize(960, null, { withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toBuffer();

    fs.writeFileSync(webpPath, webpBuffer);
    webpTotal += webpBuffer.length;

    // 2. Also re-compress the fallback JPEG (max width 960px, quality 80)
    const compressedJpg = await sharp(origBuffer)
      .resize(960, null, { withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toBuffer();

    fs.writeFileSync(fullPath, compressedJpg);
    jpgTotal += compressedJpg.length;

    console.log(`${file}: ${(origBuffer.length / 1024).toFixed(1)} KB -> WebP: ${(webpBuffer.length / 1024).toFixed(1)} KB | Compressed JPG: ${(compressedJpg.length / 1024).toFixed(1)} KB`);
  }

  console.log('\n=== PROJECT IMAGES SUMMARY ===');
  console.log(`Original: ${(origTotal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`New WebP: ${(webpTotal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Compressed JPG: ${(jpgTotal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`WebP Savings: ${((1 - webpTotal / origTotal) * 100).toFixed(1)}%`);
}

optimizeProjects().catch(console.error);
