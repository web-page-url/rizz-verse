const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_IMAGE = path.join(__dirname, '../public/img/rizz-verse-2.0.jpg');
const OUTPUT_DIR = path.join(__dirname, '../public/seo');
const FAVICON_DIR = path.join(__dirname, '../public/favicons');

// Shared metadata defaults
const siteUrl = 'https://rizz-verse.vercel.app/';

// Ensure directories exist
[OUTPUT_DIR, FAVICON_DIR].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const generateVariants = async () => {
    console.log('🚀 Generating SEO and Social Sharing Assets...');

    const variants = [
        { name: 'og-image', width: 1200, height: 630, fit: 'cover' },
        { name: 'og-square', width: 1080, height: 1080, fit: 'cover' },
        { name: 'og-hd', width: 1920, height: 1080, fit: 'cover' },
        { name: 'og-medium', width: 800, height: 600, fit: 'cover' },
        { name: 'og-small-sq', width: 640, height: 640, fit: 'cover' },
        { name: 'og-thumbnail', width: 400, height: 400, fit: 'cover' },
        { name: 'og-micro', width: 300, height: 157, fit: 'cover' },
    ];

    for (const variant of variants) {
        // Generate WebP
        await sharp(INPUT_IMAGE)
            .resize(variant.width, variant.height, { fit: variant.fit })
            .webp({ quality: 85 })
            .toFile(path.join(OUTPUT_DIR, `${variant.name}.webp`));

        // Generate Optimized JPEG
        await sharp(INPUT_IMAGE)
            .resize(variant.width, variant.height, { fit: variant.fit })
            .jpeg({ quality: 85, progressive: true })
            .toFile(path.join(OUTPUT_DIR, `${variant.name}.jpg`));
        
        console.log(`✅ Generated ${variant.name} (WebP & JPG)`);
    }

    // Favicon generation
    const faviconSizes = [16, 32, 48, 96, 180, 192, 512];
    for (const size of faviconSizes) {
        const name = size === 180 ? 'apple-touch-icon.png' :
                     size === 192 ? 'android-chrome-192x192.png' :
                     size === 512 ? 'android-chrome-512x512.png' :
                     `favicon-${size}x${size}.png`;
        
        await sharp(INPUT_IMAGE)
            .resize(size, size, { fit: 'cover' })
            .png()
            .toFile(path.join(FAVICON_DIR, name));
        
        console.log(`✅ Generated favicon: ${name}`);
    }

    // Special case for favicon.ico (using 32x32 for simplicity)
    await sharp(INPUT_IMAGE)
        .resize(32, 32)
        .toFile(path.join(FAVICON_DIR, 'favicon.ico'));

    console.log('✨ SEO Assets Generated Successfully!');
};

// Generate site.webmanifest
const generateManifest = () => {
    const manifest = {
        name: "RizzVerse",
        short_name: "RizzVerse",
        icons: [
            {
                src: "/favicons/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png"
            },
            {
                src: "/favicons/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png"
            }
        ],
        theme_color: "#FF69B4",
        background_color: "#05010a",
        display: "standalone",
        start_url: "/"
    };

    fs.writeFileSync(
        path.join(__dirname, '../public/site.webmanifest'),
        JSON.stringify(manifest, null, 2)
    );
    console.log('✅ Created site.webmanifest');
};

generateVariants().then(generateManifest).catch(err => {
    console.error('❌ Error generating assets:', err);
});
