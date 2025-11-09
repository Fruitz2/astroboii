"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/a11y";

export default function AmbientWordmark() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-accent/5 select-none whitespace-nowrap ${
          reducedMotion ? "" : "animate-pulse-slow"
        }`}
        style={{
          WebkitTextStroke: "2px rgba(54, 231, 255, 0.1)",
          paintOrder: "stroke fill",
        } as React.CSSProperties}
      >
        ASTRO BOII
      </div>
    </div>
  );
}
