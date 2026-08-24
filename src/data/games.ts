export type GameStatus = "concept" | "development" | "released";

export type Game = {
  id: string;
  name: string;
  status: GameStatus;
  short: string;
  long: string;
  engine?: string;
  links: { steam?: string; itch?: string; github?: string };
};

export const games: Game[] = [
  {
    id: "deeprealms",
    name: "DeepRealms",
    status: "development",
    short: "Unity world / kingdom project. In development — not a released game.",
    long: "DeepRealms is Extra Special Studio’s long-horizon game work: dimensions, kingdoms, and the content sets that will sit on Extra Special runtime contracts. It is in development. There is no store page yet.",
    engine: "Unity",
    links: {},
  },
  {
    id: "deepharth",
    name: "DeepHearth",
    status: "concept",
    short: "First gameplay consumer planned for DeepRealms content. Concept.",
    long: "DeepHearth is the first intended gameplay consumer of DeepRealms / Extra Special blueprint runtime. It is concept-stage, not a shippable title.",
    engine: "Unity",
    links: {},
  },
];

export function getGame(id: string): Game | undefined {
  return games.find((g) => g.id === id);
}
