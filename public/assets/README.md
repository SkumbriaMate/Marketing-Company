# Assets Folder

## How to Add Your Hero Image

1. Add your hero image to this folder (e.g., `hero-image.jpg` or `hero-image.png`)
2. Go to `app/page.tsx`
3. Uncomment the line:
   ```tsx
   // heroImage="/assets/hero-image.jpg"
   ```
4. Update the filename to match your image

## Image Recommendations

- **Format**: JPG or PNG
- **Size**: Minimum 1920x1080px (Full HD)
- **Aspect Ratio**: 16:9 or wider
- **File Size**: Keep under 500KB for performance (use compression tools)
- **Content**: The image will be displayed with 10% opacity behind the hero text

## Example:
```tsx
<Hero
  headline={homeContent.hero.headline}
  subheadline={homeContent.hero.subheadline}
  cta={homeContent.hero.cta}
  heroImage="/assets/hero-image.jpg"
/>
```
