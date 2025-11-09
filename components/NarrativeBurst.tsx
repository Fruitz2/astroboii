"use client";

import TextUnderline from "./TextUnderline";

interface NarrativeBurstProps {
  narrativeBurst: {
    title: string;
    body: string;
  };
}

export default function NarrativeBurst({ narrativeBurst }: NarrativeBurstProps) {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-3xl prose-custom">
        <h2 className="text-4xl font-black mb-8 text-center">
          <TextUnderline>{narrativeBurst.title}</TextUnderline>
        </h2>
        <p className="text-xl leading-relaxed text-center">{narrativeBurst.body}</p>
      </div>
    </section>
  );
}
