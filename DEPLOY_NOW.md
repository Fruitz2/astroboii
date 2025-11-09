# 🚀 DEPLOY ASTRO BOII NOW - 2 SIMPLE STEPS

## ✅ Step 1: GitHub (DONE!)

Your code is already on GitHub:
**https://github.com/Fruitz2/astroboii**

---

## Step 2: Deploy to Vercel (2 minutes)

### Go to Vercel and Import:

1. **Open:** https://vercel.com/new

2. **Click "Import Git Repository"**

3. **Select Repository:**
   - Look for: `Fruitz2/astroboii`
   - Click "Import"

4. **Project Settings:**
   - **Project Name:** `astroboii` (auto-filled)
   - **Framework:** Next.js (auto-detected)
   - **Root Directory:** `./` (leave default)
   - **Build Command:** `npm run build` (leave default)
   - **Output Directory:** `.next` (leave default)
   - ⚠️ **DO NOT** select your existing Spaghetti Shark project!

5. **Click "Deploy"** (big button)

6. **Wait 2-3 minutes...**

7. **DONE!** 🎉

---

## What You Get:

✅ Live URL: `https://astroboii-xxxx.vercel.app`  
✅ Auto-deploys on every git push  
✅ SSL certificate included  
✅ Global CDN  
✅ Analytics dashboard  

---

## Step 3: Add Custom Domain

In Vercel Dashboard (after deployment):

1. Go to your **Astro Boii** project
2. Click **Settings** → **Domains**
3. Add domain: `astroboii.xyz`
4. Add domain: `www.astroboii.xyz`

### Update DNS in Namecheap:

**Option A: Vercel Nameservers (Easiest)**
1. Vercel will show you nameservers (e.g., ns1.vercel-dns.com)
2. Namecheap → Domain List → astroboii.xyz → Manage
3. Nameservers → Custom DNS
4. Paste Vercel nameservers
5. Save (wait 10-30 min)

**Option B: CNAME Records**
1. Namecheap → Advanced DNS
2. Delete existing A and CNAME records for @ and www
3. Add new records:
   - Type: `CNAME` | Host: `@` | Value: `cname.vercel-dns.com`
   - Type: `CNAME` | Host: `www` | Value: `cname.vercel-dns.com`
4. Save (wait 5-30 min)

---

## Test Your Live Site:

Once deployed, test:
- ✅ Home: Kinetic type, logo, floating orbs
- ✅ `/lore` - Staged narrative reveals
- ✅ `/token` - Token details
- ✅ `/roadmap` - Zoommap
- ✅ `/press` - Press kit
- ✅ Buy buttons work (all 6 locations)
- ✅ Mobile buy dock (bottom)
- ✅ Desktop sticky buy (right edge)
- ✅ Add `?variant=a` or `?variant=b` for A/B testing

---

## Update Content Later:

Edit files in `/content/astroboii/`:

```bash
cd /home/hiroshi/CascadeProjects/astroboii

# Update links (IMPORTANT - do this before launch!)
nano content/astroboii/links.json
# Change pump link and contract address

# Push changes
git add .
git commit -m "Update links"
git push

# Auto-deploys in 90 seconds! ⚡
```

---

## Important Reminders:

⚠️ **Before Launch:**
- Update `content/astroboii/links.json` with real Pump.fun link
- Update contract address
- Update token supply in `tokenomics.md`

⚠️ **This is a NEW project:**
- Separate from Spaghetti Shark
- Different GitHub repo: `Fruitz2/astroboii`
- Different Vercel project: `astroboii`
- Different domain: `astroboii.xyz`

---

**READY TO DEPLOY!** Just go to https://vercel.com/new and import! 🚀

**send it, boii!**
