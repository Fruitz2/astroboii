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
  const [currentIndex, setCurrentIndex] = useState(0);
  const variantParam = searchParams.get("variant");

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
    const selected = getVariant(h1Variants, variantParam);
    setVariant(selected);

    // Get initial index
    const initialIndex = h1Variants.findIndex((v) => v === selected);
    setCurrentIndex(initialIndex >= 0 ? initialIndex : 0);
  }, [searchParams, h1Variants, variantParam]);

  // Cycle headlines if not locked and not reduced-motion
  useEffect(() => {
    if (reducedMotion || variantParam || h1Variants.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % h1Variants.length);
    }, 7000); // 7 seconds

    return () => clearInterval(interval);
  }, [reducedMotion, variantParam, h1Variants.length]);

  // Update variant when index changes
  useEffect(() => {
    if (!variantParam && h1Variants[currentIndex]) {
      setVariant(h1Variants[currentIndex]);
    }
  }, [currentIndex, h1Variants, variantParam]);

  if (variant.length === 0) return null;

  return (
    <div className="relative">
      <h1
        key={currentIndex}
        className={`text-6xl md:text-8xl lg:text-9xl font-black text-center leading-tight ${
          reducedMotion ? "" : "animate-fade-in"
        }`}
        style={{
          animation: reducedMotion ? "none" : "fadeIn 0.8s ease-in-out",
        }}
      >
        <span className="block text-gradient">{variant[0]}</span>
        <span className="block text-gradient mt-2">{variant[1]}</span>
      </h1>
    </div>
  );
}
