import { theme } from "@/theme/astroboii";

export function injectThemeVars() {
  if (typeof document === "undefined") return;
  
  const root = document.documentElement;
  
  root.style.setProperty("--color-bg", theme.colors.bg);
  root.style.setProperty("--color-fg", theme.colors.fg);
  root.style.setProperty("--color-accent", theme.colors.accent);
  root.style.setProperty("--color-accent-2", theme.colors.accent2);
  root.style.setProperty("--color-sky-blue", theme.colors.skyBlue);
  root.style.setProperty("--color-subtle", theme.colors.subtle);
  
  root.style.setProperty("--font-display", theme.fonts.display);
  root.style.setProperty("--font-body", theme.fonts.body);
  root.style.setProperty("--font-mono", theme.fonts.mono);
  
  root.style.setProperty("--radius-xl", theme.radius.xl);
  root.style.setProperty("--shadow-glow", theme.shadows.glow);
  root.style.setProperty("--border-neon", theme.borders.neon);
}

export { theme };
