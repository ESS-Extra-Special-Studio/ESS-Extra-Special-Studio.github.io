export type NewsItem = {
  id: string;
  date: string;
  title: string;
  body: string;
  href?: string;
};

export const news: NewsItem[] = [
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
    body: "ESL, ESC, and ESH are the shipped stack layers. ESG is still in development. ESB is planned, not released.",
    href: "/mods",
  },
];
