"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { prefersReducedMotion } from "@/lib/a11y";

export default function HeroLogoFloat() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
  }, []);

  return (
    <div className="mb-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-transparent blur-3xl scale-150" />
      <Image
        src="/logo.png"
        alt="Astro Boii"
        width={240}
        height={240}
        className={`relative mx-auto rounded-full border-2 border-accent/30 shadow-2xl ${
          reducedMotion ? "" : "animate-float animate-pulse-slow"
        }`}
        style={{
          boxShadow: "0 0 80px rgba(54, 231, 255, 0.5), 0 20px 60px rgba(0, 0, 0, 0.6)"
        }}
        priority
      />
    </div>
  );
}
