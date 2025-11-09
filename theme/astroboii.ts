export const theme = {
  name: "Astro Boii",
  colors: {
    bg: "#0D101A",          // Deep Navy Suit
    fg: "#F9F6F0",          // Cream White
    accent: "#36E7FF",      // Primary Cyan Glow
    accent2: "#FFF0B3",     // Pastel Yellow Stars
    skyBlue: "#81D5FF",     // Soft Sky Blue
    subtle: "#1B1F2A",      // Shadow Blue
    gradient: ["#36E7FF", "#FFF0B3", "#F9F6F0"]
  },
  fonts: {
    display: "var(--font-display)", // Space Grotesk
    body: "var(--font-body)",       // Inter
    mono: "var(--font-mono)"        // JetBrains Mono
  },
  radius: { xl: "1.25rem" },
  shadows: {
    glow: "0 0 48px color-mix(in srgb, var(--accent) 35%, transparent)"
  },
  borders: {
    neon: "1.5px solid color-mix(in srgb, var(--accent) 60%, transparent)"
  }
};
