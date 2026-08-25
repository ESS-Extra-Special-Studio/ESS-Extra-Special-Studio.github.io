export type ModpackStatus = "shipped" | "development" | "planned";

export type Modpack = {
  id: string;
  name: string;
  status: ModpackStatus;
  short: string;
  long: string;
  links: { curseforge: string; github?: string };
};

export const modpacks: Modpack[] = [
  {
    id: "creatopia-unbound",
    name: "Creatopia Unbound",
    status: "shipped",
    short: "Studio Minecraft modpack on CurseForge.",
    long: "Creatopia Unbound is an Extra Special Studio Minecraft modpack. Download it from CurseForge — we do not invent extra storefronts here.",
    links: {
      curseforge: "https://www.curseforge.com/minecraft/modpacks/creatopia-unbound",
    },
  },
  {
    id: "c-ideas",
    name: "C.ideas",
    status: "shipped",
    short: "Studio Minecraft modpack on CurseForge.",
    long: "C.ideas is an Extra Special Studio Minecraft modpack. Download it from CurseForge.",
    links: {
      curseforge: "https://www.curseforge.com/minecraft/modpacks/c-ideas",
    },
  },
];

export function getModpack(id: string): Modpack | undefined {
  return modpacks.find((p) => p.id === id);
}
