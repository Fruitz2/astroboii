import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoreContent from "@/components/LoreContent";
import { getStrings, getLinks } from "@/lib/content-loader";

export default function LorePage() {
  const strings = getStrings();
  const links = getLinks();

  return (
    <>
      <Header strings={strings} links={links} />
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-black text-center mb-20 text-gradient">
            THE LORE
          </h1>
          <LoreContent />
        </div>
      </main>
      <Footer strings={strings} />
    </>
  );
}
