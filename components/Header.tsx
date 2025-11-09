"use client";

import Link from "next/link";
import Image from "next/image";
import { getStrings, getLinks } from "@/lib/content-loader";
import { ExternalLink, Twitter, Send } from "lucide-react";

const strings = getStrings();
const links = getLinks();

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b neon-border">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image src="/logo.png" alt="Astro Boii" width={40} height={40} className="rounded-lg" />
          <span className="font-display font-bold text-xl text-gradient">ASTRO BOII</span>
        </Link>

        {/* Center Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-fg/80 hover:text-accent transition-colors">
            {strings.menu.home}
          </Link>
          <Link href="/lore" className="text-fg/80 hover:text-accent transition-colors">
            {strings.menu.lore}
          </Link>
          <Link href="/token" className="text-fg/80 hover:text-accent transition-colors">
            {strings.menu.token}
          </Link>
          <Link href="/roadmap" className="text-fg/80 hover:text-accent transition-colors">
            {strings.menu.roadmap}
          </Link>
          <Link href="/press" className="text-fg/80 hover:text-accent transition-colors">
            {strings.menu.press}
          </Link>
        </div>

        {/* Right CTAs */}
        <div className="flex items-center gap-4">
          {strings.buyEnabled && links.pump && (
            <a
              href={links.pump}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-accent to-accent-2 text-bg font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2"
              aria-label={strings.menu.buy}
            >
              <ExternalLink size={16} />
              {strings.menu.buy}
            </a>
          )}
          <a
            href={links.x}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-subtle rounded-lg transition-colors"
            aria-label="Follow on X"
          >
            <Twitter size={20} className="text-accent" />
          </a>
          <a
            href={links.tg}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-subtle rounded-lg transition-colors"
            aria-label="Join Telegram"
          >
            <Send size={20} className="text-accent" />
          </a>
        </div>
      </nav>
    </header>
  );
}
