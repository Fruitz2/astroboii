# ⚡ Astro Boii - Quick Start

## 🚀 Deploy in 3 Steps

### 1. Push to GitHub

```bash
cd /home/hiroshi/CascadeProjects/astroboii
git branch -M main

# Create new repo on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/astroboii.git
git push -u origin main
```

### 2. Deploy to Vercel (NEW Project!)

Go to: https://vercel.com/new

- Click "Import Project"
- Select your `astroboii` repository
- Framework: **Next.js** (auto-detected)
- Click **Deploy**
- Wait ~2 minutes

⚠️ **IMPORTANT:** This creates a NEW project, separate from Spaghetti Shark!

### 3. Add Domain

In Vercel dashboard:
- Settings → Domains
- Add `astroboii.xyz` and `www.astroboii.xyz`

In Namecheap:
- Advanced DNS → Add CNAME records:
  - `@` → `cname.vercel-dns.com`
  - `www` → `cname.vercel-dns.com`

---

## ✏️ Edit Content Later

All editable content is in `/content/astroboii/`:

### Update Links (Before Launch!)
`content/astroboii/links.json`:
```json
{
  "pump": "https://pump.fun/coin/YOUR_REAL_TOKEN",
  "contract": "YOUR_REAL_CONTRACT_ADDRESS"
}
```

### Update Token Supply
`content/astroboii/tokenomics.md` - replace `REPLACE_LATER`

### Change Any Copy
`content/astroboii/strings.json` - edit any text

After editing:
```bash
git commit -am "Update content"
git push
```
Vercel auto-deploys in 90 seconds! ⚡

---

## 🎨 Customize Theme

Edit `/theme/astroboii.ts`:
```typescript
colors: {
  bg: "#0D101A",     // Deep Navy
  accent: "#36E7FF", // Cyan Glow
  // ... change any color
}
```

Commit + push to apply.

---

## 📱 Test Checklist

After deployment, test:
- [ ] Home page loads with logo
- [ ] Buy button works (links to Pump.fun)
- [ ] All pages work: /lore, /token, /roadmap, /press
- [ ] Mobile responsive
- [ ] Buy dock shows at bottom (mobile)
- [ ] Sticky buy pill shows on right (desktop, after scroll)
- [ ] X and Telegram links work

---

**send it, boii! 🚀**
