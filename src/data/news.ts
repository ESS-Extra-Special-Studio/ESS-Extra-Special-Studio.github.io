export type NewsItem = {
  id: string;
  date: string;
  title: string;
  body: string;
  href?: string;
};

export const news: NewsItem[] = [
  {
    id: "esn-framework",
    date: "2026-09-11",
    title: "Extra Special Network (ESN)",
    body: "ESN joins the Extra Special stack as the reusable multiplayer networking fabric — channels, packets, and fan-out with no feature types. Pair with ESL for sessions. First reference: Radio Towers airdrop lobby.",
    href: "/mods/esn",
  },
  {
    id: "est-launch",
    date: "2026-08-27",
    title: "Extra Special Tracker (EST)",
    body: "New studio software: local Windows app for CurseForge + Modrinth downloads, GitHub issues, and Modrinth inbox. Tokens stay encrypted on your PC.",
    href: "/software/est",
  },
  {
    id: "studio-discord",
    date: "2026-08-27",
    title: "Studio Discord",
    body: "Extra Special Studio has a public Discord — modpack chat, mod help, and announcements. Same invite on CurseForge and Modrinth.",
    href: "https://discord.gg/dhnAuhNMQH",
  },
  {
    id: "dead-letters-1.0.4",
    date: "2026-08-27",
    title: "Dead Letters 1.0.4",
    body: "Forge 1.20.1 rebuild for Extra Special Core 2.x, plus NeoForge 1.21.1 port. Download on CurseForge or Modrinth.",
    href: "/mods/dead-letters",
  },
  {
    id: "modpacks",
    date: "2026-08-25",
    title: "Modpacks on the studio site",
    body: "Creatopia Unbound and C.ideas are listed under Modpacks, with CurseForge as the download page.",
    href: "/modpacks",
  },
  {
    id: "site-live",
    date: "2026-08-24",
    title: "Studio site is live",
    body: "extraspecialstudio.co.uk is the public home for Extra Special Studio — games, mods, music, and the people behind them.",
    href: "/studio",
  },
  {
    id: "github-org",
    date: "2026-08-24",
    title: "Source on GitHub",
    body: "Minecraft mods ship from the Extra Special Studio GitHub organisation. Radio Towers is a companion to Dead Air, not an Extra Special Studio mod.",
    href: "https://github.com/ESS-Extra-Special-Studio",
  },
  {
    id: "stack-wave",
    date: "2026-08-20",
    title: "Extra Special hub stack",
    body: "ESL, ESC, and ESH are the shipped hub layers. ESN is the networking fabric in development. ESG is still in development. ESB is planned, not released.",
    href: "/mods",
  },
];
