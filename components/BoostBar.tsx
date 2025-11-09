"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/a11y";

export default function BoostBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
    
    if (prefersReducedMotion()) return;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (reducedMotion) return null;

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-subtle z-50">
      <div
        className="h-full bg-gradient-to-r from-accent to-accent-2 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
