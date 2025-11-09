"use client";

import { getStrings, getLinks } from "@/lib/content-loader";
import { ExternalLink } from "lucide-react";
import { hapticFeedback } from "@/lib/a11y";

const strings = getStrings();
const links = getLinks();

export default function MobileBuyDock() {
  if (!strings.buyEnabled || !links.pump) return null;

  const handleLongPress = () => {
    hapticFeedback(20);
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-bg/90 backdrop-blur-md border-t neon-border z-40">
      <a
        href={links.pump}
        target="_blank"
        rel="noopener noreferrer"
        onTouchStart={handleLongPress}
        className="w-full py-4 bg-gradient-to-r from-accent to-accent-2 text-bg font-bold rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2 text-lg"
        aria-label={strings.hero.buyCta}
      >
        <ExternalLink size={20} />
        {strings.hero.buyCta}
      </a>
    </div>
  );
}
