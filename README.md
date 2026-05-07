# Astroboii — Website

Static site. No build step. Deploys to Vercel as-is.

## Deploy to Vercel

1. Push this folder to a GitHub repo (or drag the folder into Vercel's "Add New Project").
2. In Vercel, **Framework Preset** = "Other" (it's a static site).
3. Build Command: leave empty.
4. Output Directory: `./` (root).
5. Click Deploy.

`vercel.json` already sets the right Content-Type header for `.jsx` files so Babel can transpile them in the browser.

## Local preview

Open `index.html` directly, or:

```bash
npx serve .
```

## Editing the launch state

Open `app1.jsx`. Top of file:

```js
const ASTRO_CONFIG = {
  isLaunched: false,
  ticker: "ASTRO",
  contractAddress: "",   // paste your CA when launched
  pumpFunUrl: "https://pump.fun/...",
  telegramUrl: "https://t.me/...",
  xUrl: "https://x.com/...",
  ...
};
```

Set `isLaunched: true` and the CTAs swap automatically across hero, navbar, and final section.

## Files

- `index.html` — entry
- `styles.css` — all styling
- `app1.jsx` / `app2.jsx` — React components
- `tweaks-panel.jsx` — preview-only tweaks UI (safe to leave)
- `assets/astroboii-logo.png` — mascot

## Notes

- This is a memecoin site. Nothing on it is financial advice.
- Helmet stays on.
