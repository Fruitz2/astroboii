import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getRoadmap, getStrings, getLinks } from "@/lib/content-loader";

export default function RoadmapPage() {
  const roadmap = getRoadmap();
  const strings = getStrings();
  const links = getLinks();

  return (
    <>
      <Header strings={strings} links={links} />
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-black text-center mb-20 text-gradient">
            ZOOMMAP
          </h1>

          <div
            className="prose prose-invert prose-xl max-w-none space-y-8"
            dangerouslySetInnerHTML={{ __html: roadmap.content.replace(/\n/g, "<br/>") }}
          />

          <div className="mt-16 text-center">
            <p className="text-fg/60 text-sm mb-4">No fake timers. No empty promises.</p>
            <p className="text-accent font-display font-bold text-2xl">
              We build. We send. We vibe.
            </p>
          </div>
        </div>
      </main>
      <Footer strings={strings} />
    </>
  );
}
