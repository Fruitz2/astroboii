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
    <div className="mb-8">
      <Image
        src="/logo.png"
        alt="Astro Boii"
        width={200}
        height={200}
        className={`mx-auto rounded-2xl glow ${
          reducedMotion ? "" : "animate-float"
        }`}
        priority
      />
    </div>
  );
}
