// One-off generator for the 1200x630 social share image (public/og-image.png).
// Run with: npm i --no-save sharp && node scripts/gen-og.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const W = 1200;
const H = 630;
const PHOTO_W = 450;
const EMBLEM = 104;

// Left panel: ivory background, gold accent, emblem + typographic identity.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#FBFAF6"/>
  <rect x="0" y="0" width="12" height="${H}" fill="#8C6E40"/>
  <text x="68" y="214" font-family="Georgia, 'Times New Roman', serif" font-size="22" letter-spacing="3" fill="#8C6E40">ADVOCATE · SUPREME COURT OF BANGLADESH</text>
  <text x="64" y="308" font-family="Georgia, 'Times New Roman', serif" font-size="62" font-weight="600" fill="#1A1A1C">MD. Rabiul Islam</text>
  <text x="64" y="380" font-family="Georgia, 'Times New Roman', serif" font-size="62" font-weight="600" fill="#1A1A1C">&amp; Associates</text>
  <line x1="68" y1="430" x2="178" y2="430" stroke="#8C6E40" stroke-width="2"/>
  <text x="68" y="484" font-family="Helvetica, Arial, sans-serif" font-size="27" fill="#6E6C66">Strategic legal counsel for complex matters.</text>
  <text x="68" y="556" font-family="Georgia, 'Times New Roman', serif" font-size="29" font-style="italic" fill="#1A1A1C">MD. Rabiul Islam</text>
  <line x1="${W - PHOTO_W - 1}" y1="0" x2="${W - PHOTO_W - 1}" y2="${H}" stroke="#E2DFD6" stroke-width="2"/>
</svg>`;

const emblem = await sharp(path.join(root, "src/assets/logo.png"))
  .resize(EMBLEM, EMBLEM, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer();

const photo = await sharp(path.join(root, "src/assets/rabiul-islam.jpg"))
  .resize(PHOTO_W, H, { fit: "cover", position: "top" })
  .toBuffer();

await sharp(Buffer.from(svg))
  .composite([
    { input: emblem, left: 60, top: 54 },
    { input: photo, left: W - PHOTO_W, top: 0 },
  ])
  .png()
  .toFile(path.join(root, "public/og-image.png"));

console.log("Wrote public/og-image.png");
