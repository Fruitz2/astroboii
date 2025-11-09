"use client";

import { getStrings, getLinks } from "@/lib/content-loader";

const strings = getStrings();
const links = getLinks();

export default function CommunityBoard() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-8 text-gradient">
          {strings.community.title}
        </h2>
        <p className="text-xl leading-relaxed mb-8 text-fg/90">{strings.community.body}</p>
        <a
          href={links.tg}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 neon-border rounded-lg hover:bg-subtle transition-colors text-accent font-bold"
        >
          Submit Loop →
        </a>
      </div>
    </section>
  );
}
