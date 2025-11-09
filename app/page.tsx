import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KineticType from "@/components/KineticType";
import RollingStrip from "@/components/RollingStrip";
import ReasonRow from "@/components/ReasonRow";
import NarrativeBurst from "@/components/NarrativeBurst";
import BullishMenu from "@/components/BullishMenu";
import CommunityBoard from "@/components/CommunityBoard";
import RoadmapPreview from "@/components/RoadmapPreview";
import MobileBuyDock from "@/components/MobileBuyDock";
import StickySideBuy from "@/components/StickySideBuy";
import BoostBar from "@/components/BoostBar";
import AmbientWordmark from "@/components/AmbientWordmark";
import UrgencyRibbon from "@/components/UrgencyRibbon";
import { getStrings, getLinks } from "@/lib/content-loader";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const strings = getStrings();
const links = getLinks();

export default function HomePage() {
  return (
    <>
      <BoostBar />
      <AmbientWordmark />
      <Header />
      <UrgencyRibbon />
      
      <main id="main-content" className="relative pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
          <div className="container mx-auto max-w-5xl text-center space-y-8">
            <p className="text-accent font-display font-bold text-sm tracking-widest uppercase">
              {strings.hero.eyebrow}
            </p>
            
            <div className="mb-8">
              <Image
                src="/logo.png"
                alt="Astro Boii"
                width={200}
                height={200}
                className="mx-auto rounded-2xl glow"
                priority
              />
            </div>

            <KineticType />

            <p className="text-xl md:text-2xl text-fg/80 max-w-2xl mx-auto leading-relaxed">
              {strings.hero.sub}
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-8">
              {strings.buyEnabled && links.pump && (
                <a
                  href={links.pump}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-accent to-accent-2 text-bg font-bold rounded-xl hover:scale-105 transition-transform flex items-center gap-2 text-lg"
                >
                  <ExternalLink size={20} />
                  {strings.hero.buyCta}
                </a>
              )}
              <a
                href={links.tg}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 neon-border rounded-xl hover:bg-subtle transition-colors text-accent font-bold text-lg"
              >
                {strings.hero.secondaryCtas[0]}
              </a>
              <a
                href={links.x}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 neon-border rounded-xl hover:bg-subtle transition-colors text-accent font-bold text-lg"
              >
                {strings.hero.secondaryCtas[1]}
              </a>
            </div>
          </div>
        </section>

        <ReasonRow />
        <RollingStrip />
        <NarrativeBurst />
        <BullishMenu />
        <CommunityBoard />
        <RoadmapPreview />
      </main>

      <Footer />
      <MobileBuyDock />
      <StickySideBuy />
    </>
  );
}
