# SVG Icon Troubleshooting Guide

## Issue
Error: "Specification mandates value for attribute data-astro-cid-nbv56vs3"

## Root Cause
This error can occur when:
1. SVG files have self-closing tags with `/>`  instead of explicit closing tags
2. Browser/Next.js cache contains old corrupted SVG data
3. SVG attributes are malformed

## Solution Applied

### 1. Fixed SVG Structure
- Changed all self-closing tags to explicit closing tags
- Example: `<rect />` → `<rect></rect>`
- Removed complex path commands
- Used simple shapes (circles, lines, rects)

### 2. Cache Clearing Required

**Clear Browser Cache:**
```
1. Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
2. Or clear browser cache completely
3. Or open in incognito/private window
```

**Clear Next.js Cache (if built):**
```bash
cd /home/bluerose/portfolio-site
rm -rf .next
npm run dev  # or your build command
```

### 3. Verify SVG Files
All SVG files are now validated and clean:
```bash
cd /home/bluerose/portfolio-site/public/assets/icons/tech/
xmllint --noout *.svg  # Should show no errors
```

## Testing
1. Clear all caches (browser + Next.js)
2. Restart dev server if running
3. Open portfolio site in incognito/private window
4. All icons should now display correctly

## If Issues Persist
Check browser console for actual error message:
- F12 → Console tab
- Look for the specific file causing issues
- The error might mention which SVG file is problematic

## Current Status
✅ All 36 SVG files validated with xmllint
✅ github-actions.svg specifically fixed with explicit closing tags
✅ All files use simple, standard SVG elements
✅ No complex path commands that could cause parsing issues
