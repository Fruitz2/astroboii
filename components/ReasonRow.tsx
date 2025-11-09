"use client";

interface ReasonRowProps {
  reasons: {
    title: string;
    items: Array<{ h: string; p: string }>;
  };
}

export default function ReasonRow({ reasons }: ReasonRowProps) {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-gradient">
          {reasons.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reasons.items.map((item, i) => (
            <div
              key={i}
              className="relative group p-8 rounded-xl neon-border bg-subtle/50 hover:bg-subtle transition-all hover:scale-105 duration-300 glow"
            >
              <h3 className="text-2xl font-bold mb-3 text-accent">{item.h}</h3>
              <p className="text-fg/80 leading-relaxed">{item.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
