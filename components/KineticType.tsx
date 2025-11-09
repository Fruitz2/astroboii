"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getVariant } from "@/lib/ab";
import { prefersReducedMotion } from "@/lib/a11y";

interface KineticTypeProps {
  h1Variants: string[][];
}

export default function KineticType({ h1Variants }: KineticTypeProps) {
  const searchParams = useSearchParams();
  const [variant, setVariant] = useState<string[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
    const variantParam = searchParams.get("variant");
    const selected = getVariant(h1Variants, variantParam);
    setVariant(selected);
  }, [searchParams, h1Variants]);

  if (variant.length === 0) return null;

  return (
    <div className="relative">
      <h1
        className={`text-6xl md:text-8xl lg:text-9xl font-black text-center leading-tight ${
          reducedMotion ? "animate-fade-in" : "animate-jitter"
        }`}
      >
        <span className="block text-gradient">{variant[0]}</span>
        <span className="block text-gradient mt-2">{variant[1]}</span>
      </h1>
    </div>
  );
}
