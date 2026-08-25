export type SoftwareStatus = "development" | "planned" | "released";

export type SoftwareProduct = {
  id: string;
  name: string;
  status: SoftwareStatus;
  short: string;
  long: string;
  kind: string;
  links: { github?: string; docs?: string };
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
];

export function getSoftware(id: string): SoftwareProduct | undefined {
  return software.find((s) => s.id === id);
}
