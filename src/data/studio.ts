import { studioDiscord } from "./support";

export const studio = {
  name: "Extra Special Studio",
  tagline: "Independent development across games, mods, modpacks, music and technology.",
  intro:
    "Extra Special Studio is an independent creative studio. Minecraft mods and modpacks are one pillar. Music (Parallel Horizons) sits beside them. Software — Extra Special Web and other tools — is how we reuse what we build. Technology in Minecraft (ESL, ESC, ESH) stays on Mods.",
  about:
    "We ship Extra Special Minecraft mods from the Extra Special Studio GitHub organisation, and modpacks (Creatopia Unbound, C.ideas) on CurseForge. Extra Special Web (ESW) is software, not a Minecraft mod. Community chat lives on our public Discord; Radio Towers is a companion to Dead Air, not an Extra Special Studio mod.",
  githubOrg: "https://github.com/ESS-Extra-Special-Studio",
  discord: studioDiscord,
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
