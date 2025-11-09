export function getVariant(variants: string[][], urlParam?: string | null): string[] {
  // Check URL param first
  if (urlParam) {
    const index = ["a", "b", "c"].indexOf(urlParam.toLowerCase());
    if (index >= 0 && index < variants.length) {
      return variants[index];
    }
  }

  // Check session storage
  if (typeof sessionStorage !== "undefined") {
    const stored = sessionStorage.getItem("hero-variant");
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        // Fall through to random
      }
    }
  }

  // Random pick
  const randomIndex = Math.floor(Math.random() * variants.length);
  const selected = variants[randomIndex];

  // Store in session
  if (typeof sessionStorage !== "undefined") {
    sessionStorage.setItem("hero-variant", JSON.stringify(selected));
  }

  return selected;
}
