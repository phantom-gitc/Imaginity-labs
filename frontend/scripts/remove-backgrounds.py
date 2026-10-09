"""
Background removal and 3D asset generation script for Nexora.
Processes hero.jpg and objects.jpg into transparent PNG and WebP assets.
Run: python scripts/remove-backgrounds.py
"""
import os
from PIL import Image
import numpy as np
from rembg import remove, new_session

def main():
    session = new_session('u2net')
    os.makedirs('public/img', exist_ok=True)

    # 1. Process Hero image
    print('Processing hero.jpg...')
    hero_src = Image.open('_src_img/hero.jpg')
    hero_clean = remove(hero_src, session=session)
    arr = np.array(hero_clean)
    arr[:, :, 3] = np.where(arr[:, :, 3] < 12, 0, arr[:, :, 3])
    hero_final = Image.fromarray(arr)
    hero_final.save('public/img/hero.png', format='PNG')
    hero_final.save('public/img/hero.webp', format='WEBP', quality=95)
    print('Saved public/img/hero.png and hero.webp (transparent)')

    # 2. Process 6 Objects sheet
    print('Processing objects.jpg (6 objects)...')
    obj_src = Image.open('_src_img/objects.jpg')
    w, h = obj_src.size
    cols, rows = 3, 2
    cw = w // cols
    ch = h // rows

    for idx, (r, c) in enumerate([(r, c) for r in range(rows) for c in range(cols)], start=1):
        left = c * cw + 4
        top = r * ch + 4
        right = (c + 1) * cw - 4
        bottom = (r + 1) * ch - 4
        cell = obj_src.crop((left, top, right, bottom))
        clean = remove(cell, session=session)
        arr = np.array(clean)

        # zero out low alpha noise
        arr[:, :, 3] = np.where(arr[:, :, 3] < 15, 0, arr[:, :, 3])

        # obj-2 (torus ring): clear center hole haze
        if idx == 2:
            cy, cx = arr.shape[0] // 2, arr.shape[1] // 2
            Y, X = np.ogrid[:arr.shape[0], :arr.shape[1]]
            dist = np.sqrt((X - cx)**2 + (Y - cy)**2)
            hole_mask = (dist < 48) & (arr[:, :, 3] < 60)
            arr[:, :, 3] = np.where(hole_mask, 0, arr[:, :, 3])

        obj_final = Image.fromarray(arr)
        obj_final.save(f'public/img/obj-{idx}.png', format='PNG')
        obj_final.save(f'public/img/obj-{idx}.webp', format='WEBP', quality=95)
        print(f'Saved obj-{idx}.png and obj-{idx}.webp (transparent)')

    print('Background removal complete for all assets!')

if __name__ == '__main__':
    main()
