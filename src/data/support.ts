/** Canonical studio Discord — same invite on site, CurseForge, Modrinth. */
export const studioDiscord = "https://discord.gg/dhnAuhNMQH";

export type SupportLinks = {
  githubOrg: string;
  email?: string;
  discord?: string;
};

export type DonateLinks = {
  buymeacoffee?: string;
  patreon?: string;
  kofi?: string;
};

export const support: SupportLinks = {
  githubOrg: "https://github.com/ESS-Extra-Special-Studio",
  discord: studioDiscord,
};

export const donate: DonateLinks = {};
