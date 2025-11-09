"use client";

interface FooterProps {
  strings: any;
}

export default function Footer({ strings }: FooterProps) {
  return (
    <footer className="py-12 px-6 bg-subtle border-t neon-border">
      <div className="container mx-auto max-w-4xl text-center space-y-4">
        <p className="text-fg/60 text-sm">{strings.footer.legal}</p>
        <p className="text-fg/30 text-xs mt-6">
          © {new Date().getFullYear()} Astro Boii
        </p>
      </div>
    </footer>
  );
}
