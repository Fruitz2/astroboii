import { getStrings } from "./content-loader";

const strings = getStrings();

export const defaultSEO = {
  title: strings.metaTitle,
  description: strings.metaDescription,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://astroboii.xyz",
    siteName: "Astro Boii",
    title: strings.metaTitle,
    description: strings.metaDescription,
    images: [
      {
        url: "https://astroboii.xyz/api/og",
        width: 1200,
        height: 630,
        alt: "Astro Boii",
      },
    ],
  },
  twitter: {
    handle: "@astroboii",
    site: "@astroboii",
    cardType: "summary_large_image",
  },
};
