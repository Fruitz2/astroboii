"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/a11y";

interface UrgencyRibbonProps {
  showUrgencyRibbon: boolean;
  urgencyMessages: string[];
}

export default function UrgencyRibbon({ showUrgencyRibbon, urgencyMessages }: UrgencyRibbonProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
  }, []);

  useEffect(() => {
    if (!showUrgencyRibbon) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % urgencyMessages.length);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  if (!showUrgencyRibbon) return null;

  return (
    <div className="bg-gradient-to-r from-accent/20 to-accent-2/20 border-b neon-border py-2">
      <div className="container mx-auto px-6 text-center">
        <p
          className={`text-sm font-mono text-accent ${
            reducedMotion ? "" : "transition-opacity duration-300"
          }`}
          key={currentIndex}
        >
          {urgencyMessages[currentIndex]}
        </p>
      </div>
    </div>
  );
}
