"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { prefersReducedMotion } from "@/lib/a11y";
import { getStrings, getLinks } from "@/lib/content-loader";

const acts = [
  {
    title: "ACT I — THE SNEEZE",
    content:
      "Mission log, sort of: Low-Earth orbit Wi-Fi sneezed mid-pump. Zero-G coffee collided with dopamine packets. From the router hatch, a helmet gremlin crawled out yelling SEND IT.",
  },
  {
    title: "ACT II — THE BOII",
    content:
      "Name: Boii. Occupation: zoomies. Utility: dopamine. Roadmap: Zoommap. Advice: hydrate. He doesn't trade—he drifts. He headbutts red candles, moonwalks on green ones, and heckles gravity.",
  },
  {
    title: "ACT III — THE PHILOSOPHY",
    content:
      "He steals oxygen from FUD and builds launchpads out of keyboard caps. No promises. No roadmap PowerPoints. Just velocity. Pure meme energy.",
  },
  {
    title: "ACT IV — THE PERMISSION",
    content:
      "If you were waiting for permission, this is it: 3… 2… SEND. Letters over pictures. Motion over noise. Confidence over cope. No gravity, only send.",
  },
];

export default function LorePage() {
  const strings = getStrings();
  const links = getLinks();
  const [visibleActs, setVisibleActs] = useState<number[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
    
    if (prefersReducedMotion()) {
      setVisibleActs(acts.map((_, i) => i));
      return;
    }

    acts.forEach((_, i) => {
      setTimeout(() => {
        setVisibleActs((prev) => [...prev, i]);
      }, i * 800);
    });
  }, []);

  return (
    <>
      <Header strings={strings} links={links} />
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-black text-center mb-20 text-gradient">
            THE LORE
          </h1>

          <div className="space-y-16">
            {acts.map((act, i) => (
              <section
                key={i}
                className={`transition-all duration-700 ${
                  visibleActs.includes(i)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h2 className="text-2xl font-bold text-accent mb-4 font-mono">{act.title}</h2>
                <p className="text-xl leading-relaxed text-fg/90">{act.content}</p>
              </section>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-accent font-display font-bold text-3xl">
              3… 2… SEND.
            </p>
          </div>
        </div>
      </main>
      <Footer strings={strings} />
    </>
  );
}
