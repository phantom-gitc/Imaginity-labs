// Converts source images in /_src_img to resized WebP in /public/img.
// Run: node scripts/optimize-images.mjs
import sharp from 'sharp'
import { readdirSync, mkdirSync } from 'node:fs'
import { join, parse } from 'node:path'

const SRC = '_src_img'
const OUT = 'public/img'
mkdirSync(OUT, { recursive: true })

const widths = { objects: 1800, portraits: 1400, hero: 1400 }

for (const f of readdirSync(SRC)) {
  const { name } = parse(f)
  if (name === 'hero' || name === 'objects') continue // Handled by remove-backgrounds.py
  const w = widths[name] ?? 1600
  const slug = name.replace(/_/g, '-')
  const info = await sharp(join(SRC, f))
    .resize({ width: w, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(join(OUT, `${slug}.webp`))
  console.log(slug, info.width + 'x' + info.height, Math.round(info.size / 1024) + 'KB')
}
