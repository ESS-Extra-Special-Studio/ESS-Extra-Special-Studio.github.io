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

/** Public list only. Keep empty until a game is meant to be announced. */
export const games: Game[] = [];

export function getGame(id: string): Game | undefined {
  return games.find((g) => g.id === id);
}
