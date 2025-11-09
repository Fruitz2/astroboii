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
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {bullishMenu.items.map((item, i) => {
            const [label, value] = item.split(':');
            return (
              <div key={i} className="group relative transform hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-2 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative p-10 rounded-3xl bg-gradient-to-br from-bg via-subtle to-bg border-2 border-accent/30 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <p className="text-accent-2 text-sm uppercase tracking-widest mb-2 font-mono">{label}</p>
                    <p className="text-3xl font-black text-fg">{value || label}</p>
                  </div>
                </div>
              </div>
            );
          })}
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
