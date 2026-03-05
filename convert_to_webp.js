import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directoryPath = './src/assets/arquivos';

async function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            await processDirectory(fullPath);
        } else if (file.match(/\.(jpg|jpeg|png)$/i)) {
            const ext = path.extname(file);
            const webpPath = fullPath.replace(ext, '.webp');
            try {
                await sharp(fullPath)
                    .webp({ quality: 80 })
                    .toFile(webpPath);
                console.log(`Converted: ${fullPath} -> ${webpPath}`);
                // Delete original after conversion
                fs.unlinkSync(fullPath);
            } catch (err) {
                console.error(`Error processing ${fullPath}:`, err);
            }
        }
    }
}

processDirectory(directoryPath).then(() => {
    console.log('Conversion complete.');
});
