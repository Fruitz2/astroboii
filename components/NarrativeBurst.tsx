"use client";

import TextUnderline from "./TextUnderline";

interface NarrativeBurstProps {
  narrativeBurst: {
    title: string;
    body: string;
  };
  buyCta: string;
  buyEnabled: boolean;
  pumpLink: string;
}

export default function NarrativeBurst({ narrativeBurst, buyCta, buyEnabled, pumpLink }: NarrativeBurstProps) {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-3xl prose-custom">
        <h2 className="text-4xl font-black mb-8 text-center">
          <TextUnderline>{narrativeBurst.title}</TextUnderline>
        </h2>
        <p className="text-xl leading-relaxed text-center mb-10">{narrativeBurst.body}</p>
        
        {buyEnabled && pumpLink && (
          <div className="flex justify-center">
            <a
              href={pumpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-buy flex items-center gap-2"
            >
              {buyCta}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
