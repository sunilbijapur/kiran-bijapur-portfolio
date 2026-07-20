"""
Generates raster brand assets (apple-touch-icon.png, og-cover.jpg) matching
the site's navy / emerald / gold palette, since these need to be raster
images for OpenGraph/Twitter Card and iOS home-screen icons (SVG support is
inconsistent for these use cases).

Run with: python3 scripts/generate_brand_images.py
"""
import os
from PIL import Image, ImageDraw, ImageFont

BASE = os.path.join(os.path.dirname(__file__), '..', 'public')
os.makedirs(BASE, exist_ok=True)
os.makedirs(os.path.join(BASE, 'images'), exist_ok=True)

NAVY = (10, 31, 44)
NAVY2 = (19, 50, 74)
EMERALD = (14, 110, 78)
GOLD = (198, 161, 91)
WHITE = (248, 249, 247)


def get_font(size, bold=False):
    candidates = [
        '/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf' if bold else '/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf',
        '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf' if bold else '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',
    ]
    for c in candidates:
        if os.path.exists(c):
            return ImageFont.truetype(c, size)
    return ImageFont.load_default()


# ---- Apple touch icon (180x180) ----
def make_touch_icon():
    size = 180
    img = Image.new('RGB', (size, size), NAVY)
    draw = ImageDraw.Draw(img)
    # simple diagonal gradient approximation via blended rectangles
    for y in range(size):
        t = y / size
        r = int(NAVY[0] + (EMERALD[0] - NAVY[0]) * t)
        g = int(NAVY[1] + (EMERALD[1] - NAVY[1]) * t)
        b = int(NAVY[2] + (EMERALD[2] - NAVY[2]) * t)
        draw.line([(0, y), (size, y)], fill=(r, g, b))
    font = get_font(76, bold=True)
    text = 'KB'
    bbox = draw.textbbox((0, 0), text, font=font)
    w, h = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text(((size - w) / 2 - bbox[0], (size - h) / 2 - bbox[1]), text, font=font, fill=WHITE)
    img.save(os.path.join(BASE, 'apple-touch-icon.png'))
    # also produce standard favicon sizes
    for s in (16, 32, 192, 512):
        img.resize((s, s), Image.LANCZOS).save(os.path.join(BASE, f'icon-{s}.png'))
    print('Wrote apple-touch-icon.png and icon-*.png')


# ---- OpenGraph cover (1200x630) ----
def make_og_cover():
    w, h = 1200, 630
    img = Image.new('RGB', (w, h), NAVY)
    draw = ImageDraw.Draw(img)
    for y in range(h):
        t = y / h
        r = int(NAVY[0] + (NAVY2[0] - NAVY[0]) * t)
        g = int(NAVY[1] + (NAVY2[1] - NAVY[1]) * t)
        b = int(NAVY[2] + (NAVY2[2] - NAVY[2]) * t)
        draw.line([(0, y), (w, y)], fill=(r, g, b))

    # subtle hex lattice motif, bottom-right
    import math
    hex_r = 34
    for row in range(10):
        for col in range(14):
            cx = 700 + col * (hex_r * 1.7) + (hex_r * 0.85 if row % 2 else 0)
            cy = 120 + row * (hex_r * 1.5)
            if cx > w + 40 or cy > h + 40:
                continue
            pts = [
                (cx + hex_r * math.cos(math.radians(a)), cy + hex_r * math.sin(math.radians(a)))
                for a in range(0, 360, 60)
            ]
            draw.polygon(pts, outline=(*EMERALD, ) if False else EMERALD)

    eyebrow_font = get_font(24, bold=True)
    title_font = get_font(58, bold=True)
    role_font = get_font(30)
    tagline_font = get_font(26)

    draw.text((90, 110), 'DEPARTMENT OF SCIENCE AND TECHNOLOGY · GOVERNMENT OF INDIA', font=eyebrow_font, fill=GOLD)
    draw.text((90, 170), 'Dr. Kiran Bijapur, MRSC', font=title_font, fill=WHITE)
    draw.text((90, 260), 'Materials Chemist  ·  Green Hydrogen Researcher', font=role_font, fill=(198, 226, 214))
    draw.text((90, 310), 'Sustainable Energy Scientist', font=role_font, fill=(198, 226, 214))
    draw.text((90, 400), 'Advancing Sustainable Materials for a Greener Future', font=tagline_font, fill=(230, 230, 225))

    # monogram badge
    badge_r = 46
    bx, by = 1080, 90
    draw.ellipse((bx - badge_r, by - badge_r, bx + badge_r, by + badge_r), fill=EMERALD)
    mono_font = get_font(36, bold=True)
    text = 'KB'
    bbox = draw.textbbox((0, 0), text, font=mono_font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text((bx - tw / 2 - bbox[0], by - th / 2 - bbox[1]), text, font=mono_font, fill=WHITE)

    img.save(os.path.join(BASE, 'images', 'og-cover.jpg'), quality=90)
    print('Wrote images/og-cover.jpg')


make_touch_icon()
make_og_cover()
