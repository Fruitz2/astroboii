"use client";

import { getStrings } from "@/lib/content-loader";
import TextUnderline from "./TextUnderline";

const strings = getStrings();

export default function NarrativeBurst() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-3xl prose-custom">
        <h2 className="text-4xl font-black mb-8 text-center">
          <TextUnderline>{strings.narrativeBurst.title}</TextUnderline>
        </h2>
        <p className="text-xl leading-relaxed text-center">{strings.narrativeBurst.body}</p>
      </div>
    </section>
  );
}
