"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface RoadmapPreviewProps {
  roadmapPreview: {
    title: string;
    bullets: string[];
  };
  buyCta: string;
  buyEnabled: boolean;
  pumpLink: string;
}

export default function RoadmapPreview({ roadmapPreview, buyCta, buyEnabled, pumpLink }: RoadmapPreviewProps) {
  return (
    <section className="py-20 px-6 bg-subtle">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-gradient">
          {roadmapPreview.title}
        </h2>
        <div className="space-y-6 mb-10">
          {roadmapPreview.bullets.map((item, i) => (
            <div key={i} className="group">
              <div className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-bg/80 to-subtle border border-accent/20 hover:border-accent/40 transition-all duration-300 transform hover:translate-x-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-accent-2 flex items-center justify-center text-2xl shrink-0">
                  {item.startsWith('✓') ? '✓' : '→'}
                </div>
                <p className="text-lg font-semibold">{item.replace('✓ ', '').replace('→ ', '')}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          {buyEnabled && pumpLink && (
            <a
              href={pumpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-accent to-accent-2 text-bg font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2"
            >
              <ExternalLink size={18} />
              {buyCta}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
