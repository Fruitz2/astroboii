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
        <h2 className="text-4xl md:text-5xl font-black mb-8 text-gradient">
          {community.title}
        </h2>
        <p className="text-xl leading-relaxed mb-8" style={{ color: 'rgb(249 246 240 / 0.9)' }}>{community.body}</p>
        <a
          href={tgLink}
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
