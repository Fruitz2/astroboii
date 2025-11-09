import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPressKit, getLinks, getStrings } from "@/lib/content-loader";
import { Download, Copy } from "lucide-react";

export default function PressPage() {
  const pressKit = getPressKit();
  const links = getLinks();
  const strings = getStrings();

  return (
    <>
      <Header strings={strings} links={links} />
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-black text-center mb-20 text-gradient">
            PRESS KIT
          </h1>

          <div
            className="prose prose-invert prose-lg max-w-none mb-16"
            dangerouslySetInnerHTML={{ __html: pressKit.content.replace(/\n/g, "<br/>") }}
          />

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="p-6 rounded-xl neon-border bg-subtle/50">
              <h3 className="text-xl font-bold mb-4 text-accent flex items-center gap-2">
                <Download size={20} />
                Assets
              </h3>
              <ul className="space-y-2 text-fg/80">
                <li>
                  <a href="/logo.png" download className="hover:text-accent transition-colors">
                    Logo PNG (Download)
                  </a>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl neon-border bg-subtle/50">
              <h3 className="text-xl font-bold mb-4 text-accent flex items-center gap-2">
                <Copy size={20} />
                Quick Links
              </h3>
              <ul className="space-y-2 text-fg/80">
                <li>
                  <a
                    href={links.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    X / Twitter
                  </a>
                </li>
                <li>
                  <a
                    href={links.tg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <span className="text-fg/60 text-sm font-mono break-all">
                    Contract: {links.contract}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center text-fg/60 text-sm">
            <p>For media inquiries, reach out via Telegram or X.</p>
          </div>
        </div>
      </main>
      <Footer strings={strings} />
    </>
  );
}
