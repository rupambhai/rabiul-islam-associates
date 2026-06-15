// One-off: turn the white-background logo into a transparent-background PNG
// (luminance key on near-white pixels, preserving anti-aliased edges), then
// emit a web-sized logo plus favicon assets.
// Run: npm i --no-save sharp && node scripts/process-logo.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const SRC = path.join(root, "src/assets/logo-source.png");

// Read RGBA pixels and derive alpha from "non-whiteness".
const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const HI = 246; // >= this min-channel => fully transparent (white)
const LO = 208; // <= this min-channel => fully opaque (gold)
for (let i = 0; i < data.length; i += 4) {
  const minc = Math.min(data[i], data[i + 1], data[i + 2]);
  let a = 255;
  if (minc >= HI) a = 0;
  else if (minc > LO) a = Math.round((255 * (HI - minc)) / (HI - LO));
  data[i + 3] = a;
}

const transparent = sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
});

// Trim transparent margin, then export web + favicon sizes (square, padded).
const base = transparent.png().trim();

await base
  .clone()
  .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toFile(path.join(root, "src/assets/logo.png"));

await base
  .clone()
  .resize(180, 180, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toFile(path.join(root, "public/apple-touch-icon.png"));

await base
  .clone()
  .resize(48, 48, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toFile(path.join(root, "public/favicon.png"));

console.log("Wrote src/assets/logo.png, public/apple-touch-icon.png, public/favicon.png");
