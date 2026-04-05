import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { imageConfigs } from "./img-config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, "../src/assets/originals");
const outputDir = path.join(__dirname, "../public/images");

async function ensureDir(dirPath) {
	await fs.promises.mkdir(dirPath, { recursive: true });
}

async function processImage(filename, config) {
	const inputPath = path.join(inputDir, filename);

	if (!fs.existsSync(inputPath)) {
		console.log(`File not found: ${filename}`);
		return;
	}

	const ext = path.extname(filename).toLowerCase();
	const name = path.basename(filename, ext);
	const { outputFolder, variants } = config;

	const metadata = await sharp(inputPath).metadata();
	const originalWidth = metadata.width;

	for (const [variantName, sizes] of Object.entries(variants)) {
		for (const size of sizes) {
			if (originalWidth && size > originalWidth) {
				console.log(
					`Skipped ${filename} -> ${variantName}-${size}px (larger than original ${originalWidth}px)`
				);
				continue;
			}

			const outputFileName = `${name}-${variantName}-${size}.webp`;
			const outputPath = path.join(
				outputDir,
				outputFolder,
				outputFileName
			);

			await ensureDir(path.dirname(outputPath));

			await sharp(inputPath)
				.resize({ width: size })
				.webp({ quality: 80 })
				.toFile(outputPath);

			console.log(
				`Created: public/images/${outputFolder}/${outputFileName}`
			);
		}
	}
}

async function main() {
	try {
		await ensureDir(outputDir);

		for (const [filename, config] of Object.entries(imageConfigs)) {
			await processImage(filename, config);
		}

		console.log("Image resizing complete.");
	} catch (error) {
		console.error("Error resizing images:", error);
	}
}

main();
