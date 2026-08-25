export type EswNavItem = { href: string; label: string };

export type EswProjectCard = {
  href: string;
  title: string;
  description: string;
  status?: string;
  icon?: string;
  pixelIcon?: boolean;
};

export type EswNewsItem = {
  date: string;
  title: string;
  body: string;
  href?: string;
};

export type EswExternalLinks = {
  github?: string;
  curseforge?: string;
  modrinth?: string;
  docs?: string;
  spotify?: string;
  bandcamp?: string;
  youtube?: string;
  steam?: string;
  itch?: string;
  patreon?: string;
  buymeacoffee?: string;
  kofi?: string;
  discord?: string;
  email?: string;
};
