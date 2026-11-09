const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeAvatar() {
  const avatarPath = path.join(__dirname, '..', 'src', 'assets', 'avatar.png');
  const metadata = await sharp(avatarPath).metadata();
  console.log('Original avatar metadata:', metadata.width, 'x', metadata.height, metadata.format, metadata.size, 'bytes');

  // Generate 520x520 WebP (desktop maximum display size)
  const webpDesktop = await sharp(avatarPath)
    .resize(520, 520, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 85, effort: 6 })
    .toBuffer();

  console.log('520x520 WebP size:', webpDesktop.length, 'bytes', `(${(webpDesktop.length / 1024).toFixed(1)} KB)`);

  // Generate 320x320 WebP (mobile display size)
  const webpMobile = await sharp(avatarPath)
    .resize(320, 320, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 85, effort: 6 })
    .toBuffer();

  console.log('320x320 WebP size:', webpMobile.length, 'bytes', `(${(webpMobile.length / 1024).toFixed(1)} KB)`);

  // Save to src/assets and public/
  fs.writeFileSync(path.join(__dirname, '..', 'src', 'assets', 'avatar.webp'), webpDesktop);
  fs.writeFileSync(path.join(__dirname, '..', 'src', 'assets', 'avatar-sm.webp'), webpMobile);
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'avatar.webp'), webpDesktop);
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'avatar-sm.webp'), webpMobile);

  console.log('Avatar optimization complete!');
}

optimizeAvatar().catch(console.error);
