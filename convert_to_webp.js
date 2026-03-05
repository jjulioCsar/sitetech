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
        } else if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
            const ext = path.extname(file);
            let webpPath = fullPath.replace(ext, '.webp');

            // If it's already a webp, we'll write to a temp file and then replace
            const isWebp = ext.toLowerCase() === '.webp';
            const tempPath = fullPath + '.tmp.webp';
            const targetPath = isWebp ? tempPath : webpPath;

            try {
                const image = sharp(fullPath);
                await image
                    .resize({ width: 1200, withoutEnlargement: true })
                    .webp({ quality: 75 })
                    .toFile(targetPath);

                // Ensure Sharp releases the file handle
                await image.destroy();

                if (isWebp) {
                    fs.unlinkSync(fullPath);
                    fs.renameSync(tempPath, fullPath);
                } else {
                    fs.unlinkSync(fullPath);
                }
                console.log(`Processed: ${fullPath}`);

            } catch (err) {
                console.error(`Error processing ${fullPath}:`, err);
            }
        }
    }
}

processDirectory(directoryPath).then(() => {
    console.log('Conversion complete.');
});
