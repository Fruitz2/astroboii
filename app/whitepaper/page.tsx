import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getStrings, getLinks } from "@/lib/content-loader";
import fs from "fs";
import path from "path";

function getWhitepaper() {
  const filePath = path.join(process.cwd(), "content/astroboii/whitepaper.md");
  const content = fs.readFileSync(filePath, "utf8");
  return { content };
}

export default function WhitepaperPage() {
  const whitepaper = getWhitepaper();
  const strings = getStrings();
  const links = getLinks();

  return (
    <>
      <Header strings={strings} links={links} />
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-black text-center mb-20 text-gradient">
            WHITEPAPER
          </h1>

          <div
            className="prose prose-invert prose-lg max-w-none space-y-6"
            dangerouslySetInnerHTML={{ __html: whitepaper.content.replace(/\n/g, "<br/>") }}
          />

          <div className="mt-16 text-center">
            <p className="text-fg/60 text-sm mb-4">This is not financial advice.</p>
            <p className="text-accent font-display font-bold text-2xl">
              Just vibes and velocity.
            </p>
          </div>
        </div>
      </main>
      <Footer strings={strings} />
    </>
  );
}
