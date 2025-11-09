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

export default function HomePage() {
  const strings = getStrings();
  const links = getLinks();
  return (
    <>
      <BoostBar />
      <AmbientWordmark />
      <Header strings={strings} links={links} />
      <UrgencyRibbon 
        showUrgencyRibbon={strings.showUrgencyRibbon} 
        urgencyMessages={strings.urgencyMessages} 
      />
      
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

            <KineticType h1Variants={strings.hero.h1Variants} />

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

        <ReasonRow reasons={strings.reasons} />
        <RollingStrip strip={strings.strip} />
        <NarrativeBurst narrativeBurst={strings.narrativeBurst} />
        <BullishMenu 
          bullishMenu={strings.bullishMenu} 
          buyCta={strings.hero.buyCta} 
          buyEnabled={strings.buyEnabled} 
          pumpLink={links.pump} 
        />
        <CommunityBoard community={strings.community} tgLink={links.tg} />
        <RoadmapPreview 
          roadmapPreview={strings.roadmapPreview} 
          buyCta={strings.hero.buyCta} 
          buyEnabled={strings.buyEnabled} 
          pumpLink={links.pump} 
        />
      </main>

      <Footer strings={strings} />
      <MobileBuyDock 
        buyCta={strings.hero.buyCta} 
        buyEnabled={strings.buyEnabled} 
        pumpLink={links.pump} 
      />
      <StickySideBuy 
        buyLabel={strings.menu.buy} 
        buyEnabled={strings.buyEnabled} 
        pumpLink={links.pump} 
      />
    </>
  );
}
