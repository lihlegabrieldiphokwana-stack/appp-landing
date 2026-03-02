# Banner Image Assets

Place your banner images in the `/public` folder with these exact filenames:

## Required Images

### 1. Desktop Banner (PC/Mac)
- **Filename:** `hero-banner-desktop.jpg`
- **Dimensions:** 2560 × 1120 pixels (or any 16:7 ratio)
- **Display Size:** Full viewport width × 70vh
- **Format:** JPG or PNG
- **File Size:** Under 500KB
- **Color Profile:** sRGB

### 2. Tablet Banner (iPad)
- **Filename:** `hero-banner-tablet.jpg`
- **Dimensions:** 2048 × 960 pixels (or any 16:7 ratio)
- **Display Size:** Full viewport width × 60vh
- **Format:** JPG or PNG
- **File Size:** Under 400KB
- **Color Profile:** sRGB

### 3. Mobile Banner (Phone)
- **Filename:** `hero-banner-mobile.jpg`
- **Dimensions:** 1200 × 1200 pixels (1:1 square)
- **Display Size:** Full viewport width × 80vh
- **Format:** JPG or PNG
- **File Size:** Under 300KB
- **Color Profile:** sRGB

---

## Design Guidelines (Apple-Style)

- **Clean & Minimal:** Lots of negative space
- **Focus on Product:** Show the app interface clearly
- **High Contrast:** Works on both light and dark backgrounds
- **No Text Overlay:** Add text in post-production if needed
- **Consistent Lighting:** Match across all three sizes

---

## Example Layout

```\nappp-landing/\n└── public/\n    ├── hero-banner-desktop.jpg    (2560 × 1400px)\n    ├── hero-banner-tablet.jpg     (2048 × 1120px)\n    └── hero-banner-mobile.jpg     (1200 × 1600px)\n```\n\n---

## Testing

After adding images:
1. Run `npm run dev`
2. Test on different screen sizes (use browser dev tools)
3. Check loading speed (should be instant)
4. Verify images look sharp on Retina displays
