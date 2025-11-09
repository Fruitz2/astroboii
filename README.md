# Astro Boii — send it, boii.

A logo-only, kinetic memecoin landing page with hyperactive astronaut energy.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (motion)
- **Zod** (validation)

## Quick Start

Since npm install doesn't work on this system, deploy directly to Vercel:

1. Push to GitHub
2. Import to Vercel as NEW project
3. Deploy
4. Add domain `astroboii.xyz`

## Editing Content

All editable content lives in `/content/astroboii/`:

- `strings.json` - All UI copy, CTAs, menu labels
- `links.json` - External links (Pump.fun, X, Telegram, contract)
- `tokenomics.md` - Token details
- `roadmap.md` - Roadmap phases
- `press-kit.md` - Press information

## Theme Colors

Edit `/theme/astroboii.ts` to change colors:

- Primary Cyan: `#36E7FF`
- Deep Navy: `#0D101A`
- Sky Blue: `#81D5FF`
- Cream: `#F9F6F0`
- Yellow: `#FFF0B3`
- Shadow: `#1B1F2A`

## Features

- ✅ A/B headline testing (`?variant=a|b|c`)
- ✅ Reduced motion support
- ✅ Mobile buy dock + desktop sticky CTA
- ✅ Scroll progress bar
- ✅ Haptic feedback on mobile
- ✅ SEO optimized with Open Graph
- ✅ Accessibility (focus rings, skip links, keyboard nav)

## Deployment

**IMPORTANT:** This is a SEPARATE project from Spaghetti Shark!

1. Initialize Git: `git init`
2. Commit: `git add -A && git commit -m "Initial commit"`
3. Push to GitHub
4. Create NEW Vercel project (not existing one!)
5. Configure domain: `astroboii.xyz`

## Performance

- Client JS target: ≤ 180 KB
- LCP target: ≤ 2.0s
- CLS target: < 0.05
- All motion respects `prefers-reduced-motion`

---

**send it, boii. 🚀**
