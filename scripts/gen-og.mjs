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

// Left panel: ivory background, gold accent, typographic identity.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#FBFAF6"/>
  <rect x="0" y="0" width="12" height="${H}" fill="#8C6E40"/>
  <text x="70" y="168" font-family="Georgia, 'Times New Roman', serif" font-size="22" letter-spacing="3" fill="#8C6E40">ADVOCATE · SUPREME COURT OF BANGLADESH</text>
  <text x="66" y="288" font-family="Georgia, 'Times New Roman', serif" font-size="76" font-weight="600" fill="#1A1A1C">Rabiul Islam</text>
  <text x="66" y="372" font-family="Georgia, 'Times New Roman', serif" font-size="76" font-weight="600" fill="#1A1A1C">&amp; Associates</text>
  <line x1="70" y1="424" x2="180" y2="424" stroke="#8C6E40" stroke-width="2"/>
  <text x="70" y="478" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="#6E6C66">Strategic legal counsel for complex matters.</text>
  <text x="70" y="556" font-family="Georgia, 'Times New Roman', serif" font-size="30" font-style="italic" fill="#1A1A1C">Md. Rabiul Islam</text>
  <line x1="${W - PHOTO_W - 1}" y1="0" x2="${W - PHOTO_W - 1}" y2="${H}" stroke="#E2DFD6" stroke-width="2"/>
</svg>`;

const photo = await sharp(path.join(root, "src/assets/rabiul-islam.jpg"))
  .resize(PHOTO_W, H, { fit: "cover", position: "top" })
  .toBuffer();

await sharp(Buffer.from(svg))
  .composite([{ input: photo, left: W - PHOTO_W, top: 0 }])
  .png()
  .toFile(path.join(root, "public/og-image.png"));

console.log("Wrote public/og-image.png");
