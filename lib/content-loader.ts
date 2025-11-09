import { z } from "zod";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const LinksSchema = z.object({
  pump: z.string(),
  x: z.string(),
  tg: z.string(),
  contract: z.string(),
});

const StringsSchema = z.object({
  buyEnabled: z.boolean(),
  plausibleDomain: z.string(),
  showUrgencyRibbon: z.boolean(),
  urgencyMessages: z.array(z.string()),
  metaTitle: z.string(),
  metaDescription: z.string(),
  menu: z.record(z.string()),
  hero: z.object({
    eyebrow: z.string(),
    h1Variants: z.array(z.array(z.string())),
    sub: z.string(),
    buyCta: z.string(),
    secondaryCtas: z.array(z.string()),
  }),
  reasons: z.object({
    title: z.string(),
    items: z.array(
      z.object({
        h: z.string(),
        p: z.string(),
      })
    ),
  }),
  strip: z.array(z.string()),
  narrativeBurst: z.object({
    title: z.string(),
    body: z.string(),
  }),
  bullishMenu: z.object({
    title: z.string(),
    items: z.array(z.string()),
    disclaimer: z.string(),
  }),
  community: z.object({
    title: z.string(),
    body: z.string(),
  }),
  roadmapPreview: z.object({
    title: z.string(),
    bullets: z.array(z.string()),
  }),
  footer: z.object({
    legal: z.string(),
    region: z.string(),
  }),
  toggleTips: z.object({
    reduceMotionOn: z.string(),
    reduceMotionOff: z.string(),
  }),
});

export type Links = z.infer<typeof LinksSchema>;
export type Strings = z.infer<typeof StringsSchema>;

function loadJSON<T>(filename: string, schema: z.ZodType<T>): T {
  const filePath = path.join(process.cwd(), "content", "astroboii", filename);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents);
  return schema.parse(data);
}

function loadMarkdown(filename: string): { content: string; data: Record<string, unknown> } {
  const filePath = path.join(process.cwd(), "content", "astroboii", filename);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);
  return { content, data };
}

export function getLinks(): Links {
  return loadJSON("links.json", LinksSchema);
}

export function getStrings(): Strings {
  return loadJSON("strings.json", StringsSchema);
}

export function getTokenomics() {
  return loadMarkdown("tokenomics.md");
}

export function getRoadmap() {
  return loadMarkdown("roadmap.md");
}

export function getPressKit() {
  return loadMarkdown("press-kit.md");
}
