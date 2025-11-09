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
    <div className="mb-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/40 to-accent-2/20 blur-3xl scale-150 animate-pulse-slow" />
      <div className="absolute inset-0 bg-gradient-to-t from-accent-2/30 to-transparent blur-2xl scale-125" />
      <Image
        src="/logo.png"
        alt="Astro Boii"
        width={320}
        height={320}
        className={`relative mx-auto rounded-full border-4 border-accent/40 shadow-2xl ${
          reducedMotion ? "" : "animate-float"
        }`}
        style={{
          boxShadow: "0 0 100px rgba(54, 231, 255, 0.6), 0 0 200px rgba(54, 231, 255, 0.3), 0 30px 80px rgba(0, 0, 0, 0.7)"
        }}
        priority
      />
    </div>
  );
}
