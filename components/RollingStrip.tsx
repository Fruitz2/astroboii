"use client";

import { useEffect, useState } from "react";
import { getStrings } from "@/lib/content-loader";
import { prefersReducedMotion } from "@/lib/a11y";

const strings = getStrings();

export default function RollingStrip() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [shuffled, setShuffled] = useState<string[]>([]);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
    const items = [...strings.strip].sort(() => Math.random() - 0.5).slice(0, 3);
    setShuffled(items);
  }, []);

  if (reducedMotion) {
    return (
      <div className="py-8 bg-subtle">
        <div className="container mx-auto px-6 flex justify-center gap-8">
          {shuffled.map((text, i) => (
            <span key={i} className="text-accent font-display font-bold text-lg">
              {text}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 bg-subtle overflow-hidden group">
      <div className="flex gap-12 animate-marquee group-hover:pause">
        {[...shuffled, ...shuffled].map((text, i) => (
          <span
            key={i}
            className="text-accent font-display font-bold text-2xl whitespace-nowrap"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
