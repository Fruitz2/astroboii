import { Suspense } from "react";
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
import HeroLogoFloat from "@/components/HeroLogoFloat";
import { getStrings, getLinks } from "@/lib/content-loader";
import { ExternalLink } from "lucide-react";

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
            
            <HeroLogoFloat />

            <Suspense fallback={
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-center leading-tight">
                {strings.hero.h1Variants[0].map((line, i) => (
                  <span key={i} className="block text-gradient">{line}</span>
                ))}
              </h1>
            }>
              <KineticType h1Variants={strings.hero.h1Variants} />
            </Suspense>

            <p className="text-xl md:text-2xl text-fg/80 max-w-2xl mx-auto leading-relaxed">
              {strings.hero.sub}
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-8">
              {strings.buyEnabled && links.pump && (
                <a
                  href={links.pump}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-gradient-to-r from-accent via-accent-2 to-accent text-bg font-black rounded-2xl hover:scale-110 transition-all duration-300 flex items-center gap-3 text-xl shadow-2xl transform hover:rotate-1"
                  style={{
                    boxShadow: "0 20px 60px rgba(54, 231, 255, 0.5), 0 0 120px rgba(255, 240, 179, 0.3)"
                  }}
                >
                  <ExternalLink size={24} />
                  {strings.hero.buyCta}
                </a>
              )}
              <a
                href={links.tg}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 border-2 border-accent rounded-2xl hover:bg-accent/10 transition-all duration-300 text-accent font-bold text-xl backdrop-blur-sm"
              >
                {strings.hero.secondaryCtas[0]}
              </a>
              <a
                href={links.x}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 border-2 border-accent-2 rounded-2xl hover:bg-accent-2/10 transition-all duration-300 text-accent-2 font-bold text-xl backdrop-blur-sm"
              >
                {strings.hero.secondaryCtas[1]}
              </a>
            </div>
          </div>
        </section>

        <div className="orbital-separator" />
        <ReasonRow reasons={strings.reasons} />
        <div className="orbital-separator" />
        <div className="section-even">
          <RollingStrip strip={strings.strip} />
        </div>
        <div className="orbital-separator" />
        <NarrativeBurst 
          narrativeBurst={strings.narrativeBurst}
          buyCta={strings.hero.buyCta}
          buyEnabled={strings.buyEnabled}
          pumpLink={links.pump}
        />
        <div className="orbital-separator" />
        <div className="section-even">
          <BullishMenu 
            bullishMenu={strings.bullishMenu} 
            buyCta={strings.hero.buyCta} 
            buyEnabled={strings.buyEnabled} 
            pumpLink={links.pump} 
          />
        </div>
        <div className="orbital-separator" />
        <CommunityBoard community={strings.community} tgLink={links.tg} />
        <div className="orbital-separator" />
        <div className="section-even">
          <RoadmapPreview 
          roadmapPreview={strings.roadmapPreview} 
          buyCta={strings.hero.buyCta} 
          buyEnabled={strings.buyEnabled} 
          pumpLink={links.pump} 
        />
        </div>
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
