# Mobile Responsiveness - Quick Testing Guide

## 🚀 Quick Start

### Test Locally
```bash
npm run dev
# Open http://localhost:3000
```

### Test Production Build
```bash
npm run build
npm start
# Open http://localhost:3000
```

---

## 📱 Chrome DevTools Testing

### 1. Open DevTools
- Press `F12` or `Ctrl+Shift+I` (Windows/Linux)
- Press `Cmd+Option+I` (Mac)

### 2. Enable Device Toolbar
- Press `Ctrl+Shift+M` (Windows/Linux)
- Press `Cmd+Shift+M` (Mac)
- Or click the phone/tablet icon in DevTools

### 3. Test These Viewports

#### Mobile Phones
```
iPhone SE       - 375 x 667    ✅ Smallest common phone
iPhone 12 Pro   - 390 x 844    ✅ Standard iPhone
iPhone 14 Pro Max - 430 x 932  ✅ Large iPhone
Pixel 7         - 412 x 915    ✅ Android standard
Galaxy S23      - 360 x 800    ✅ Compact Android
```

#### Tablets
```
iPad Mini       - 768 x 1024   ✅ Small tablet portrait
iPad Air        - 820 x 1180   ✅ Standard tablet
iPad Pro 12.9"  - 1024 x 1366  ✅ Large tablet
```

#### Desktop
```
Laptop          - 1280 x 720   ✅ Small laptop
Desktop         - 1920 x 1080  ✅ Full HD
Large Desktop   - 2560 x 1440  ✅ QHD
```

---

## ✅ Feature Testing Checklist

### Header Navigation

#### Desktop (1024px+)
- [ ] Logo displays correctly (h-10)
- [ ] All menu items visible horizontally
- [ ] **Services menu shows dropdown on hover**
- [ ] Dropdown contains: NDT Inspection, Rope Access, Welding & Fabrication, IRATA Training
- [ ] ChevronDown icon rotates on hover
- [ ] "Get Started" CTA button visible
- [ ] Smooth transitions on hover

#### Mobile (< 1024px)
- [ ] Logo displays correctly (h-8)
- [ ] Hamburger menu icon (☰) visible on right
- [ ] **Tap hamburger - menu slides in from right**
- [ ] Backdrop overlay appears with blur
- [ ] **Services menu has expandable arrow**
- [ ] **Tap Services - accordion expands to show submenu**
- [ ] All submenu items visible (4 items)
- [ ] Tap submenu item - navigates and closes menu
- [ ] Tap backdrop - closes menu
- [ ] Tap X button - closes menu
- [ ] No scrolling behind open menu
- [ ] "Get Started" CTA at bottom of menu
- [ ] Smooth spring animations

### Homepage Hero Section

#### All Devices
- [ ] Background gradient visible
- [ ] Grid pattern overlay visible
- [ ] Badge: "Petroleum Commission PC 2025 Registered"

#### Desktop (1024px+)
- [ ] Two-column layout (text left, stats right)
- [ ] Heading: "Powering Africa's Energy Excellence"
- [ ] Heading text size: 5xl to 7xl
- [ ] Two CTAs side by side
- [ ] Stats grid: 2x2 layout
- [ ] Scroll indicator visible at bottom

#### Mobile (< 768px)
- [ ] Single column layout (text stacked, then stats)
- [ ] Heading readable (text-3xl minimum)
- [ ] **CTAs stack vertically (full width)**
- [ ] **Each CTA is at least 44px tall** (touch target)
- [ ] Stats grid: 2x2 with smaller gap (gap-3)
- [ ] Scroll indicator hidden
- [ ] Badge has smaller padding

#### Tablet (768-1024px)
- [ ] Two-column layout
- [ ] Heading: 4xl to 5xl
- [ ] CTAs side by side
- [ ] Stats grid: 2x2

### Why Choose Us Section

#### Desktop (1024px+)
- [ ] 4 cards in a row
- [ ] Card padding: p-8
- [ ] Icon size: w-16 h-16
- [ ] Cards animate on scroll
- [ ] Hover effects work (lift, glow, bottom line)

#### Tablet (768-1024px)
- [ ] 2 cards per row (2x2 grid)
- [ ] Card padding maintained
- [ ] Hover effects work

#### Mobile (< 768px)
- [ ] 1 card per row (stacked)
- [ ] Card padding: p-6 (reduced for mobile)
- [ ] Icon size: w-14 h-14 (smaller)
- [ ] **All text readable without zooming**
- [ ] **Entire card is tappable** (min 44px height)
- [ ] Tap shows active state (scale down)

### Services Preview

#### Desktop (1024px+)
- [ ] Two-column intro (text left, feature card right)
- [ ] Service cards: 4 across
- [ ] Card padding: p-6
- [ ] Hover effects: lift, glow, learn more arrow

#### Tablet (768-1024px)
- [ ] Two-column intro maintained
- [ ] Service cards: 2 per row
- [ ] Spacing maintained

#### Mobile (< 768px)
- [ ] Single column intro (stacked)
- [ ] Service cards: 1 per row
- [ ] Card padding: p-5 (reduced)
- [ ] Icon size smaller (w-12 h-12)
- [ ] Text sizes reduced appropriately
- [ ] Feature card full width
- [ ] **All buttons at least 44px tall**

### CTA Section

#### Desktop (1024px+)
- [ ] Two-column layout
- [ ] CTAs side by side
- [ ] Contact info: 2 columns
- [ ] Feature cards: 2x2 grid

#### Mobile (< 768px)
- [ ] Single column layout
- [ ] **CTAs stack vertically (full width)**
- [ ] Contact info: 1 column on very small, 2 on larger
- [ ] Feature cards: 2 columns maintained
- [ ] Card padding reduced (p-4)
- [ ] All text readable

---

## 🎯 Touch Target Testing

### Minimum Size: 44x44px (WCAG 2.1 Level AAA)

#### Measure Touch Targets in DevTools
1. Right-click element → Inspect
2. Check computed styles
3. Verify `min-height: 44px` and `min-width: 44px`

#### Elements to Check
- [ ] All navigation links (desktop + mobile)
- [ ] All CTA buttons (Hero, Services, CTA section)
- [ ] Mobile menu items (including submenu)
- [ ] Contact links (phone, email)
- [ ] Service cards (entire card tappable)
- [ ] Why Choose Us cards (entire card tappable)

---

## 🎨 Animation Testing

### With Animations (Default)
1. Open site in normal mode
2. Check animations:
   - [ ] Hero text slides in from left
   - [ ] Stats cards slide in from right
   - [ ] Sections fade in on scroll
   - [ ] Cards lift on hover (desktop)
   - [ ] Mobile menu slides in from right
   - [ ] Smooth accordion expansion
   - [ ] Scroll indicator bounces

### With Reduced Motion
1. Open DevTools → More Tools → Rendering
2. Check "Emulate CSS media feature prefers-reduced-motion"
3. Reload page
4. Verify:
   - [ ] No slide-in animations
   - [ ] No fade-in animations
   - [ ] Instant transitions only
   - [ ] Mobile menu still functional (no slide)
   - [ ] Scroll indicator hidden

---

## 🌐 Cross-Browser Testing

### Chrome/Edge (Chromium)
- [ ] All features work
- [ ] Animations smooth
- [ ] Touch targets work

### Safari (Desktop)
- [ ] All features work
- [ ] Backdrop blur works
- [ ] Hover states work

### Safari (iOS)
- [ ] Touch interactions work
- [ ] No 300ms tap delay
- [ ] Scroll prevention works
- [ ] Safe area padding (notch)

### Firefox
- [ ] All features work
- [ ] Grid layouts correct
- [ ] Animations smooth

---

## 🐛 Common Issues & Fixes

### Issue: Horizontal scroll appears
**Check**: Look for elements with fixed widths > viewport
**Fix**: Use `max-w-full` and `overflow-x-hidden`

### Issue: Touch targets too small
**Check**: Button/link height in DevTools
**Fix**: Add `${responsiveClasses.touchButton}` class

### Issue: Text too small on mobile
**Check**: Font size at 375px width
**Fix**: Use responsive text classes (text-sm sm:text-base)

### Issue: Menu doesn't close on backdrop click
**Check**: Console for JavaScript errors
**Fix**: Verify onClick handler on backdrop div

### Issue: Animations too intense on mobile
**Check**: User preferences in DevTools
**Fix**: Wrap animations with `!prefersReducedMotion &&`

### Issue: Content cut off on small screens
**Check**: Padding and margins at 375px
**Fix**: Reduce padding on mobile (p-6 → p-4 sm:p-6)

---

## 📊 Performance Testing

### Lighthouse Mobile Audit
1. Open DevTools
2. Go to Lighthouse tab
3. Select "Mobile" device
4. Run audit

#### Target Scores
- **Performance**: 90+ 🎯
- **Accessibility**: 100 ✅
- **Best Practices**: 100 ✅
- **SEO**: 100 ✅

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

---

## 🔍 Accessibility Testing

### Keyboard Navigation
1. Don't use mouse
2. Press `Tab` to navigate
3. Check:
   - [ ] All interactive elements reachable
   - [ ] Focus indicators visible
   - [ ] Logical tab order
   - [ ] Menu opens/closes with keyboard
   - [ ] Submenu expands with Enter/Space

### Screen Reader Testing
1. Enable screen reader:
   - Windows: NVDA (free) or JAWS
   - Mac: VoiceOver (Cmd+F5)
   - Chrome: ChromeVox extension

2. Navigate and verify:
   - [ ] All text is announced
   - [ ] Buttons have proper labels
   - [ ] Links describe destination
   - [ ] Headings in logical order
   - [ ] Images have alt text

### Color Contrast
1. Open DevTools → Lighthouse
2. Run accessibility audit
3. Check for contrast failures
4. Verify:
   - [ ] All text meets WCAG AA (4.5:1)
   - [ ] Large text meets WCAG AA (3:1)

---

## ✨ Interactive Testing Script

### 1. First Visit (Mobile 375px)
```
✓ Open homepage
✓ Verify no horizontal scroll
✓ Read hero heading - is it readable?
✓ Tap "Explore Services" - does it feel responsive?
✓ Scroll to Why Choose Us - cards fade in?
✓ Tap a card - does it navigate?
✓ Tap hamburger menu - smooth slide-in?
✓ Tap "Services" - submenu expands?
✓ Tap "NDT Inspection" - navigates?
✓ Tap backdrop - menu closes?
```

### 2. Tablet Testing (iPad 768px)
```
✓ Verify two-column layouts
✓ Check card grids (2 columns)
✓ Test navigation menu
✓ Verify spacing looks good
✓ Test hover states (if available)
```

### 3. Desktop Testing (1920px)
```
✓ Verify four-column layouts
✓ Test all hover effects
✓ Check dropdown menus
✓ Verify animations smooth
✓ Test all interactive elements
```

---

## 🎉 Acceptance Criteria

### ✅ PASS if all true:
- [ ] No horizontal scroll on any viewport (375px - 1920px)
- [ ] All text readable without zooming
- [ ] All touch targets ≥ 44x44px
- [ ] Mobile menu functions correctly (slide-in, backdrop, accordion)
- [ ] Animations respect reduced motion preference
- [ ] All CTAs visible and tappable
- [ ] Page loads in < 3 seconds on 3G
- [ ] Lighthouse mobile score > 90
- [ ] No console errors
- [ ] Works in Chrome, Safari, Firefox

### ❌ FAIL if any true:
- [ ] Horizontal scroll appears
- [ ] Text too small to read
- [ ] Touch targets < 44px
- [ ] Menu doesn't work on mobile
- [ ] Animations forced (ignores reduced motion)
- [ ] Content cut off
- [ ] Poor performance (Lighthouse < 80)
- [ ] Console errors present

---

## 📝 Report Issues

If you find issues during testing:

1. **Take screenshot** of the problem
2. **Note viewport size** (e.g., 375px width)
3. **Browser** and version
4. **Steps to reproduce**
5. **Expected vs actual behavior**

Example:
```
Issue: CTA button too small on iPhone SE
Viewport: 375px x 667px
Browser: Chrome 120 (mobile)
Steps: Open homepage, scroll to CTA section
Expected: Button height ≥ 44px
Actual: Button height = 36px
Screenshot: [attach]
```

---

## 🚀 Deployment Testing

### After Render Deploy
1. Visit production URL
2. Test with real mobile device if possible
3. Run Lighthouse on production
4. Test on slow 3G connection
5. Verify all features work

### Production URL
Check Render dashboard for live URL:
- Format: `https://ricks-energy-website.onrender.com` (or custom domain)
- Region: Frankfurt (EU)
- Branch: `main` (auto-deploy)

---

**Happy Testing! 🎉**

For issues or questions, refer to `MOBILE_RESPONSIVENESS.md` for detailed implementation documentation.
