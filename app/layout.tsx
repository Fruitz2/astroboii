import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Astro Boii",
  description: "Just an astronaut floating through Solana. Fair launch memecoin on Pump.fun.",
  keywords: "Astro Boii, memecoin, Solana, crypto, astronaut, send it, zoomies",
  authors: [{ name: "Astro Boii Team" }],
  creator: "Astro Boii",
  metadataBase: new URL("https://astroboii.xyz"),
  openGraph: {
    title: "Astro Boii",
    description: "Just an astronaut floating through Solana. Fair launch memecoin.",
    url: "https://astroboii.xyz",
    siteName: "Astro Boii",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://astroboii.xyz/logo.png",
        width: 1200,
        height: 630,
        alt: "Astro Boii Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@astroboii",
    creator: "@astroboii",
    title: "Astro Boii — send it, boii.",
    description: "Hyperactive astronaut energy. 3… 2… SEND.",
    images: ["https://astroboii.xyz/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
