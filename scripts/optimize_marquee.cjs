const sharp = require('sharp');
const https = require('https');
const fs = require('fs');
const path = require('path');

const allGifs = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

const outDir = path.join(__dirname, '..', 'public', 'marquee');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with status ${res.statusCode}`));
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function processAll() {
  console.log(`Processing ${allGifs.length} marquee items...`);
  let totalOrigBytes = 0;
  let totalWebpBytes = 0;

  for (let i = 0; i < allGifs.length; i++) {
    const url = allGifs[i];
    const num = String(i + 1).padStart(2, '0');
    const outFile = path.join(outDir, `preview-${num}.webp`);
    
    try {
      process.stdout.write(`Downloading item ${num}... `);
      const gifBuffer = await download(url);
      totalOrigBytes += gifBuffer.length;

      const webpBuffer = await sharp(gifBuffer, { pages: 1 })
        .resize(400, 255, { fit: 'cover' })
        .webp({ quality: 80, effort: 6 })
        .toBuffer();

      fs.writeFileSync(outFile, webpBuffer);
      totalWebpBytes += webpBuffer.length;
      console.log(`done! (${(gifBuffer.length / 1024 / 1024).toFixed(2)} MB -> ${(webpBuffer.length / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`Error processing item ${num}:`, err.message);
    }
  }

  console.log('\n=== SUMMARY ===');
  console.log(`Original total: ${(totalOrigBytes / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Optimized total: ${(totalWebpBytes / 1024 / 1024).toFixed(2)} MB (${(totalWebpBytes / 1024).toFixed(1)} KB)`);
  console.log(`Savings: ${((1 - totalWebpBytes / totalOrigBytes) * 100).toFixed(1)}% reduction!`);
}

processAll();
