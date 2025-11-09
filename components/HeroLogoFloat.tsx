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
    <div className="mb-12">
      <Image
        src="/logo.png"
        alt="Astro Boii"
        width={320}
        height={320}
        className={`mx-auto rounded-full ${
          reducedMotion ? "" : "animate-float"
        }`}
        priority
      />
    </div>
  );
}
