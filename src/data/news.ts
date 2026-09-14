export type NewsItem = {
  id: string;
  date: string;
  title: string;
  body: string;
  href?: string;
};

export const news: NewsItem[] = [
  {
    id: "studio-prints-shop",
    date: "2026-09-15",
    title: "Studio prints on the site",
    body: "The Extra Special Studio shop is live on the site: quiet prints, pillows, throws, and small goods, printed to order. Browse by theme — vintage geometric, calm home, under £10 — then pay on the till.",
    href: "/shop",
  },
  {
    id: "airdrop-lobby",
    date: "2026-09-13",
    title: "Airdrop lobby",
    body: "Radio Towers 1.2.4 adds an optional shared-server lobby: invite, ready, countdown, then Go. Solo lever calls are unchanged. Lobbied crates are members-only. ESL 1.1.0 holds the session. ESN carries the packets and is optional — without it, solo still works.",
    href: "/mods/radio-towers",
  },
  {
    id: "esl-1.1.0",
    date: "2026-09-13",
    title: "ESL 1.1.0",
    body: "Lobby sessions are now part of Extra Special Lib: reusable server-side parties with no packets or GUI. Forge 1.20.1 and NeoForge 1.21.1. First consumer is the Radio Towers airdrop lobby.",
    href: "/mods/esl",
  },
  {
    id: "esn-1.0.1",
    date: "2026-09-13",
    title: "ESN 1.0.1",
    body: "Extra Special Network is public on CurseForge for Forge 1.20.1 and NeoForge 1.21.1. 1.0.1 does not change the packet API. Lobby sessions stay in ESL.",
    href: "/mods/esn",
  },
  {
    id: "dead-air-2.1.5",
    date: "2026-09-13",
    title: "Dead Air 2.1.5",
    body: "Forge 1.20.1 no longer fails to launch from an unused item mixin. NeoForge 1.21.1 is version-matched. Both are on CurseForge and GitHub.",
    href: "/mods/dead-air",
  },
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
