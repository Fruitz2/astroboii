"use client";

interface CommunityBoardProps {
  community: {
    title: string;
    body: string;
  };
  tgLink: string;
}

export default function CommunityBoard({ community, tgLink }: CommunityBoardProps) {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent-2/20 to-accent/20 blur-3xl" />
          <div className="relative bg-gradient-to-b from-subtle/80 to-bg/80 rounded-3xl border border-accent/20 p-16">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-gradient">
              {community.title}
            </h2>
            <p className="text-xl mb-10" style={{ color: 'rgb(249 246 240 / 0.8)' }}>
              {community.body}
            </p>
            <a
              href={tgLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-accent to-accent-2 rounded-xl hover:scale-105 transition-all duration-300 text-bg font-bold text-xl shadow-2xl"
              style={{
                boxShadow: "0 10px 40px rgba(54, 231, 255, 0.4), 0 0 80px rgba(54, 231, 255, 0.2)"
              }}
            >
              Join Telegram →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
