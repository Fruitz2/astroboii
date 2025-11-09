import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getTokenomics } from "@/lib/content-loader";

export default function TokenPage() {
  const tokenomics = getTokenomics();

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-black text-center mb-20 text-gradient">
            TOKEN
          </h1>

          <div
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: tokenomics.content.replace(/\n/g, "<br/>") }}
          />

          <div className="mt-16 p-8 rounded-xl neon-border bg-subtle/50 text-center">
            <p className="text-fg/60 text-sm">
              Update contract details in <code className="text-accent">content/astroboii/tokenomics.md</code>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
