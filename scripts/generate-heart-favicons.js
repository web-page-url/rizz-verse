const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const FAVICON_DIR = path.join(__dirname, '../public/favicons');

const heartSvg = `
<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0000" d="M16 28.5L14.1 26.8C7.4 20.7 3 16.7 3 11.8C3 7.8 6.2 4.5 10.2 4.5C12.5 4.5 14.7 5.5 16.2 7.2C17.7 5.5 19.9 4.5 22.2 4.5C26.2 4.5 29.4 7.8 29.4 11.8C29.4 16.7 25 20.7 18.3 26.8L16.4 28.5H16Z"/>
</svg>
`;

const generateHeartFavicons = async () => {
    console.log('❤️ Generating Red Heart Favicons...');

    const sizes = [16, 32, 48, 96, 180, 192, 512];

    for (const size of sizes) {
        const name = size === 180 ? 'apple-touch-icon.png' :
            size === 192 ? 'android-chrome-192x192.png' :
                size === 512 ? 'android-chrome-512x512.png' :
                    `favicon-${size}x${size}.png`;

        await sharp(Buffer.from(heartSvg))
            .resize(size, size)
            .png()
            .toFile(path.join(FAVICON_DIR, name));

        console.log(`✅ Generated: ${name}`);
    }

    // Generate favicon.ico
    await sharp(Buffer.from(heartSvg))
        .resize(32, 32)
        .toFile(path.join(FAVICON_DIR, 'favicon.ico'));

    console.log('✨ Red Heart Favicon suite updated!');
};

generateHeartFavicons().catch(console.error);
