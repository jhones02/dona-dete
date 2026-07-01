const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const input = path.join(__dirname, "../public/images/logo-dona-dete.png");
const outputDir = path.join(__dirname, "../public");

const sizes = [
    { name: "favicon-16x16.png", size: 16 },
    { name: "favicon-32x32.png", size: 32 },
    { name: "favicon-48x48.png", size: 48 },
    { name: "apple-touch-icon.png", size: 180 },
    { name: "icon-192x192.png", size: 192 },
    { name: "icon-512x512.png", size: 512 },
];

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

async function generateFavicons() {
    for (const item of sizes) {
        await sharp(input)
            .resize(item.size, item.size, {
                fit: "contain",
                background: {
                    r: 255,
                    g: 255,
                    b: 255,
                    alpha: 0,
                },
            })
            .png()
            .toFile(path.join(outputDir, item.name));

        console.log(`Gerado: ${item.name}`);
    }
}

generateFavicons();
