// Splits generated "sheet" images into individual cells (inset to hide hairlines).
// Run after optimize-images.mjs:  node scripts/split-sheets.mjs
import sharp from 'sharp'

const sheets = [
  { src: '_src_img/portraits.jpg', prefix: 'portrait', cols: 2, rows: 2, inset: 0.0, w: 720 },
  { src: '_src_img/worksheet.jpg', prefix: 'case', cols: 2, rows: 2, inset: 0.003, w: 1200 },
]

for (const s of sheets) {
  const meta = await sharp(s.src).metadata()
  const cw = Math.floor(meta.width / s.cols)
  const ch = Math.floor(meta.height / s.rows)
  let n = 1
  for (let r = 0; r < s.rows; r++) {
    for (let c = 0; c < s.cols; c++) {
      const ix = Math.round(cw * s.inset)
      const iy = Math.round(ch * s.inset)
      await sharp(s.src)
        .extract({ left: c * cw + ix, top: r * ch + iy, width: cw - ix * 2, height: ch - iy * 2 })
        .resize({ width: s.w, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(`public/img/${s.prefix}-${n}.webp`)
      n++
    }
  }
}
console.log('sheets split')
