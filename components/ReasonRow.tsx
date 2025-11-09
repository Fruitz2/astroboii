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
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gradient">
          {reasons.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.items.map((item, i) => (
            <div key={i} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-2/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 rounded-2xl bg-gradient-to-b from-subtle/50 to-bg border border-accent/10 hover:border-accent/30 transition-all duration-300 h-full">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-accent to-accent-2 p-0.5">
                    <div className="w-full h-full rounded-full bg-bg flex items-center justify-center text-2xl font-bold">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-accent">{item.h}</h3>
                  <p className="text-fg/80 leading-relaxed">{item.p}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
