"use client";

import { useEffect, useState } from "react";
import { getStrings, getLinks } from "@/lib/content-loader";
import { ExternalLink } from "lucide-react";

const strings = getStrings();
const links = getLinks();

export default function StickySideBuy() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight * 0.6;
      setIsVisible(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!strings.buyEnabled || !links.pump) return null;

  return (
    <div
      className={`hidden md:block fixed right-6 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
      }`}
    >
      <a
        href={links.pump}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-2 px-4 py-6 bg-gradient-to-b from-accent to-accent-2 text-bg font-bold rounded-xl hover:scale-105 transition-transform shadow-lg"
        style={{ writingMode: "vertical-rl" }}
        aria-label={strings.hero.buyCta}
      >
        <ExternalLink size={20} />
        <span className="text-sm tracking-wider">{strings.menu.buy.toUpperCase()}</span>
      </a>
    </div>
  );
}
