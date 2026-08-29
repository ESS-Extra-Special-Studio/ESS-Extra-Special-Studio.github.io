export type SoftwareStatus = "development" | "planned" | "released";

export type SoftwareProduct = {
  id: string;
  name: string;
  status: SoftwareStatus;
  short: string;
  long: string;
  kind: string;
  price?: string;
  links: {
    github?: string;
    docs?: string;
    privacy?: string;
    terms?: string;
    /** Lemon Squeezy (or other MoR) checkout URL */
    buy?: string;
    itch?: string;
    download?: string;
  };
};

export const software: SoftwareProduct[] = [
  {
    id: "esw",
    name: "Extra Special Web (ESW)",
    status: "development",
    kind: "Web UI toolkit",
    short: "Reusable website chrome harvested from extraspecialstudio.co.uk. Not a Minecraft mod.",
    long: "ESW is Extra Special Studio software: layout, navigation, cards, news, and theme tokens used by this site first. It is V0.1, not a visual editor, and not a paid product. New pieces are added only when the studio site needs them twice. A separate GitHub repo comes later if ESW outgrows the website tree.",
    links: {
      github: "https://github.com/ESS-Extra-Special-Studio/ESS-Extra-Special-Studio.github.io",
    },
  },
  {
    id: "est",
    name: "Extra Special Tracker (EST)",
    status: "released",
    kind: "Desktop studio analytics",
    price: "Free",
    short:
      "Local Windows app for CurseForge + Modrinth downloads, GitHub issues, and Modrinth creator inbox. Your API tokens stay encrypted on your PC.",
    long:
      "EST (Extra Special Tracker) is Extra Special Studio’s free desktop tool for mod authors and small studios. Track CurseForge and Modrinth download totals over time, sync GitHub issues, and pull Modrinth notifications into one Inbox. CurseForge private messages are opened via the official Authors console (no public PM API). Tokens are stored with OS encryption (Windows DPAPI). Download from GitHub Releases — no license key required.",
    links: {
      github: "https://github.com/ESS-Extra-Special-Studio/est",
      docs: "https://extraspecialstudio.co.uk/software/est",
      privacy: "https://extraspecialstudio.co.uk/software/est/privacy",
      terms: "https://extraspecialstudio.co.uk/software/est/terms",
      download: "https://github.com/ESS-Extra-Special-Studio/est/releases",
    },
  },
];

export function getSoftware(id: string): SoftwareProduct | undefined {
  return software.find((s) => s.id === id);
}
