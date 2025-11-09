"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/a11y";

export default function AmbientWordmark() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
  }, []);

  // Disable entirely on reduced motion
  if (reducedMotion) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black select-none whitespace-nowrap animate-pulse-slow"
        style={{
          WebkitTextStroke: "2px rgba(54, 231, 255, 0.08)",
          paintOrder: "stroke fill",
          color: "rgba(54, 231, 255, 0.06)",
          maskImage: "radial-gradient(circle at center, transparent 20%, black 60%)",
          WebkitMaskImage: "radial-gradient(circle at center, transparent 20%, black 60%)",
        } as React.CSSProperties}
      >
        ASTRO BOII
      </div>
    </div>
  );
}
