"use client";

import Link from "next/link";
import { getStrings, getLinks } from "@/lib/content-loader";
import { ExternalLink } from "lucide-react";

const strings = getStrings();
const links = getLinks();

export default function RoadmapPreview() {
  return (
    <section className="py-20 px-6 bg-subtle">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-gradient">
          {strings.roadmapPreview.title}
        </h2>
        <ul className="space-y-4 mb-12">
          {strings.roadmapPreview.bullets.map((bullet, i) => (
            <li
              key={i}
              className="p-4 rounded-lg bg-bg/50 border-l-4 border-accent text-lg font-mono"
            >
              {bullet}
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/roadmap"
            className="px-6 py-3 neon-border rounded-lg hover:bg-bg transition-colors text-accent font-bold"
          >
            View Full Zoommap →
          </Link>
          {strings.buyEnabled && links.pump && (
            <a
              href={links.pump}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-accent to-accent-2 text-bg font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2"
            >
              <ExternalLink size={18} />
              {strings.hero.buyCta}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
