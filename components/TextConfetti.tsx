"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/a11y";

const glyphs = ["*", "+", "~", "!", "✦"];

interface Confetto {
  id: number;
  glyph: string;
  x: number;
  y: number;
}

export default function TextConfetti({ trigger }: { trigger: boolean }) {
  const [confetti, setConfetti] = useState<Confetto[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
  }, []);

  useEffect(() => {
    if (reducedMotion || !trigger) return;

    const newConfetti: Confetto[] = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      glyph: glyphs[Math.floor(Math.random() * glyphs.length)],
      x: Math.random() * 100 - 50,
      y: -20,
    }));

    setConfetti((prev) => [...prev, ...newConfetti]);

    const timer = setTimeout(() => {
      setConfetti((prev) => prev.filter((c) => !newConfetti.includes(c)));
    }, 1000);

    return () => clearTimeout(timer);
  }, [trigger, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confetti.map((c) => (
        <span
          key={c.id}
          className="absolute text-accent text-2xl font-bold animate-fade-in"
          style={{
            left: `calc(50% + ${c.x}px)`,
            top: `calc(50% + ${c.y}px)`,
            animation: "fadeOut 1s ease-out forwards",
          }}
        >
          {c.glyph}
        </span>
      ))}
    </div>
  );
}
