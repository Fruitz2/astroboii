"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/a11y";

export default function TextUnderline({ children }: { children: React.ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
  }, []);

  if (reducedMotion) {
    return <span className="border-b-2 border-accent">{children}</span>;
  }

  return (
    <span
      className="relative inline-block cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <svg
        className="absolute left-0 -bottom-2 w-full overflow-visible"
        height="8"
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
      >
        <path
          d="M0,4 Q25,2 50,4 T100,4"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2"
          className={`transition-all duration-300 ${
            isHovered ? "opacity-100 scale-y-100" : "opacity-0 scale-y-50"
          }`}
          style={{ transformOrigin: "center" }}
        />
      </svg>
    </span>
  );
}
