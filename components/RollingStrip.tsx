"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/a11y";

interface RollingStripProps {
  strip: string[];
}

export default function RollingStrip({ strip }: RollingStripProps) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [shuffled, setShuffled] = useState<string[]>([]);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
    const items = [...strip].sort(() => Math.random() - 0.5).slice(0, 3);
    setShuffled(items);
  }, [strip]);

  if (reducedMotion) {
    return (
      <div className="py-8 overflow-hidden bg-subtle">
        <div className={`flex gap-12 ${reducedMotion ? "" : "animate-marquee"}`}>
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              {shuffled.map((text, j) => (
                <span key={j} className="text-accent font-display font-bold text-lg whitespace-nowrap">
                  {text}
                </span>
              ))}
              <span className="text-accent/40">•</span>
            </div>
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
