"use client";

import { ExternalLink } from "lucide-react";
import { hapticFeedback } from "@/lib/a11y";

interface MobileBuyDockProps {
  buyCta: string;
  buyEnabled: boolean;
  pumpLink: string;
}

export default function MobileBuyDock({ buyCta, buyEnabled, pumpLink }: MobileBuyDockProps) {
  if (!buyEnabled || !pumpLink) return null;

  const handleLongPress = () => {
    hapticFeedback(20);
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-bg/90 backdrop-blur-md border-t neon-border z-40">
      <a
        href={pumpLink}
        target="_blank"
        rel="noopener noreferrer"
        onTouchStart={handleLongPress}
        className="w-full py-4 bg-gradient-to-r from-accent to-accent-2 text-bg font-bold rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2 text-lg"
        aria-label={buyCta}
      >
        <ExternalLink size={20} />
        {buyCta}
      </a>
    </div>
  );
}
