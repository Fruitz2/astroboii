"use client";

import { ExternalLink } from "lucide-react";

interface BullishMenuProps {
  bullishMenu: {
    title: string;
    items: string[];
    disclaimer: string;
  };
  buyCta: string;
  buyEnabled: boolean;
  pumpLink: string;
}

export default function BullishMenu({ bullishMenu, buyCta, buyEnabled, pumpLink }: BullishMenuProps) {
  return (
    <section className="py-20 px-6 bg-subtle">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-gradient">
          {bullishMenu.title}
        </h2>
        <div className="grid gap-4 mb-8">
          {bullishMenu.items.map((item, i) => (
            <div key={i} className="p-6 rounded-xl neon-border bg-bg/50 glow">
              <p className="text-lg font-mono text-accent">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm mb-8" style={{ color: 'rgb(249 246 240 / 0.6)' }}>{bullishMenu.disclaimer}</p>
        {buyEnabled && pumpLink && (
          <div className="flex justify-center">
            <a
              href={pumpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-accent to-accent-2 text-bg font-bold rounded-xl hover:scale-105 transition-transform flex items-center gap-2 text-lg"
            >
              <ExternalLink size={20} />
              {buyCta}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
