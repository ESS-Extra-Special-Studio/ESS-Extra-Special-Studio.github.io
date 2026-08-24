export const studio = {
  name: "Extra Special Studio",
  tagline: "Independent development across games, mods, music and technology.",
  intro:
    "Extra Special Studio is an independent creative studio. Minecraft mods are one pillar. Music (Parallel Horizons) and games (DeepRealms and related Unity work) sit beside them. Technology — shared libraries, hubs, and tools — is how those pieces talk to each other.",
  about:
    "We ship Extra Special Minecraft mods from the Extra Special Studio GitHub organisation. We do not list store, Discord, or streaming links until they are real. Radio Towers is a companion to Dead Air and is not Extra Special GitHub.",
  githubOrg: "https://github.com/ESS-Extra-Special-Studio",
  canonical: "https://extraspecialstudio.co.uk",
};

export type TimelineItem = {
  year: string;
  title: string;
  body: string;
};

export const timeline: TimelineItem[] = [
  {
    year: "Now",
    title: "Public studio site",
    body: "This site is the canonical Extra Special Studio URL. Content is data-driven so new mods, releases, and games can be added in files rather than new page templates.",
  },
  {
    year: "2026",
    title: "Extra Special stack",
    body: "ESL, ESC, and ESH shipped as the hub stack. ESG remains in development. ESB is planned.",
  },
];
