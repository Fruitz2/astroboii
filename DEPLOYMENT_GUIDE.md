# 🚀 Astro Boii - Deployment Guide

## ⚠️ CRITICAL: This is a NEW PROJECT

**DO NOT** deploy to the Spaghetti Shark Vercel project!  
**CREATE A BRAND NEW** Vercel project for Astro Boii.

---

## Step 1: Push to GitHub

```bash
cd /home/hiroshi/CascadeProjects/astroboii

# Set branch to main (if needed)
git branch -M main

# Add your GitHub remote (create new repo first on GitHub)
git remote add origin https://github.com/YOUR_USERNAME/astroboii.git

# Push
git push -u origin main
```

---

## Step 2: Deploy to Vercel (NEW Project)

### Option A: Via Vercel Dashboard (Recommended)

1. Go to https://vercel.com/new
2. Click "Add New..." → "Project"
3. Import your `astroboii` GitHub repository
4. **Project Settings:**
   - Framework Preset: **Next.js** (auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)
5. Click **Deploy**
6. Wait ~2-3 minutes for build

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI if needed
npm i -g vercel

# Deploy (creates NEW project)
cd /home/hiroshi/CascadeProjects/astroboii
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? NO (important!)
# - Project name? astroboii
# - Directory? ./ 
# - Override settings? No

# Production deploy
vercel --prod
```

---

## Step 3: Configure Domain (astroboii.xyz)

### In Vercel Dashboard:

1. Go to your **new** Astro Boii project
2. Click "Settings" → "Domains"
3. Add domain: `astroboii.xyz`
4. Add domain: `www.astroboii.xyz`

### In Namecheap (or your DNS provider):

**Option A: Use Vercel Nameservers (Simplest)**
1. Vercel → Settings → Domains → Click on `astroboii.xyz`
2. Copy the nameservers (e.g., ns1.vercel-dns.com, ns2.vercel-dns.com)
3. Namecheap → Domain List → `astroboii.xyz` → "Manage"
4. Nameservers → Custom DNS
5. Paste Vercel nameservers
6. Save (propagation: 24-48 hours, usually faster)

**Option B: Keep Namecheap DNS (CNAME)**
1. Namecheap → Advanced DNS
2. Delete any existing A or CNAME records for @ and www
3. Add new records:
   - Type: CNAME | Host: @ | Value: `cname.vercel-dns.com` | TTL: Automatic
   - Type: CNAME | Host: www | Value: `cname.vercel-dns.com` | TTL: Automatic
4. Save (propagation: 5-30 minutes)

---

## Step 4: Verify Deployment

1. Check build logs in Vercel dashboard
2. Visit your Vercel preview URL (e.g., `astroboii.vercel.app`)
3. Test all pages:
   - `/` (home)
   - `/lore`
   - `/token`
   - `/roadmap`
   - `/press`
4. Test Buy CTAs (should link to Pump.fun)
5. Test mobile responsive design
6. Test reduced motion (browser settings)

---

## Step 5: Update Links & Content

Before launch, update these files:

### `/content/astroboii/links.json`
```json
{
  "pump": "https://pump.fun/coin/YOUR_ACTUAL_TOKEN",
  "x": "https://x.com/astroboii",
  "tg": "https://t.me/astroboii",
  "contract": "YOUR_ACTUAL_CONTRACT_ADDRESS"
}
```

### `/content/astroboii/tokenomics.md`
Replace `REPLACE_LATER` with actual supply, etc.

After updating, commit and push:
```bash
git add -A
git commit -m "Update token links and supply"
git push origin main
```

Vercel auto-deploys on push! ⚡

---

## Quality Checklist

Before going live, verify:

### Content
- [ ] All copy reads human (no robotic phrasing)
- [ ] Humor is confident, not cringe
- [ ] No ROI promises or investment advice language

### Conversion
- [ ] Buy CTA visible above fold
- [ ] Buy appears after Reasons, BullishMenu, RoadmapPreview
- [ ] Mobile dock present
- [ ] X and Telegram links work

### Motion & A11y
- [ ] `prefers-reduced-motion` disables all animations
- [ ] Focus rings visible on all interactive elements
- [ ] Keyboard navigation works
- [ ] Skip-to-content link works
- [ ] Color contrast ≥ 4.5:1

### Performance
- [ ] Images optimized (WebP/AVIF)
- [ ] No layout shifts on load
- [ ] Fast LCP (< 2.0s)

### SEO
- [ ] Meta title and description set
- [ ] Open Graph image shows on social
- [ ] robots.txt present
- [ ] All pages indexable

---

## Troubleshooting

### Build fails on Vercel
- Check Vercel build logs
- Ensure all dependencies in `package.json`
- Try deploying a simple test first

### Domain not working
- Wait 10-30 minutes for DNS propagation
- Check DNS records in Namecheap
- Verify domain added in Vercel settings
- Try `dig astroboii.xyz` to check DNS

### npm install errors
- Don't worry! Vercel runs `npm install` automatically
- Your local system doesn't need npm to work
- All dependencies install during Vercel build

---

## Post-Launch

### Monitoring
- Check Vercel Analytics (free tier)
- Monitor Core Web Vitals
- Watch error logs in Vercel dashboard

### Editing Content
All content is in `/content/astroboii/`:
1. Edit JSON or MD files locally
2. Commit: `git commit -am "Update content"`
3. Push: `git push origin main`
4. Vercel auto-deploys in ~90 seconds

### Theme Changes
Edit colors in `/theme/astroboii.ts`, commit, push.

---

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: Create in your repo

---

**Ready to send it, boii! 🚀**
