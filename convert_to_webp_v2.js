import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const sourceDir = './src/assets/arquivos';
const targetDir = './src/assets/arquivos_optimized';

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

async function processDirectory(currentDir, targetBaseDir) {
    const files = fs.readdirSync(currentDir);
    for (const file of files) {
        const fullPath = path.join(currentDir, file);
        const relativePath = path.relative(sourceDir, fullPath);
        const targetPathFull = path.join(targetBaseDir, relativePath);

        if (fs.statSync(fullPath).isDirectory()) {
            if (!fs.existsSync(targetPathFull)) {
                fs.mkdirSync(targetPathFull, { recursive: true });
            }
            await processDirectory(fullPath, targetBaseDir);
        } else if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
            const ext = path.extname(file);
            const webpName = file.replace(ext, '.webp');
            const targetWebpPath = path.join(path.dirname(targetPathFull), webpName);

            try {
                // Resize and compress
                await sharp(fullPath)
                    .resize({ width: 1000, withoutEnlargement: true })
                    .webp({ quality: 70 })
                    .toFile(targetWebpPath);

                console.log(`Optimized: ${relativePath} -> ${webpName}`);
            } catch (err) {
                console.error(`Error processing ${fullPath}:`, err);
            }
        }
    }
}

processDirectory(sourceDir, targetDir).then(() => {
    console.log('Optimization complete. Move files from arquivos_optimized to arquivos manually or via script.');
});
