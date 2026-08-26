export type PollCategory =
  | "dead-air-expansion"
  | "mod-feature"
  | "game-dev"
  | "music"
  | "studio-general";

export type PollStatus =
  | "OPEN"
  | "CLOSED"
  | "IMPLEMENTED"
  | "PLANNED"
  | "NOT_SELECTED";

export type PollOption = {
  id: string;
  label: string;
  voteCount?: number;
  votePercent?: number;
};

export type PollOutcome = {
  winnerOptionId?: string;
  status: PollStatus;
  summary?: string;
};

export type Poll = {
  id: string;
  title: string;
  description: string;
  category: PollCategory;
  options: PollOption[];
  startDate: string;
  endDate: string;
  status: PollStatus;
  outcome?: PollOutcome;
  relatedModIds?: string[];
};

/** Add polls here when opening a community vote. Empty = /vote shows empty state. */
export const polls: Poll[] = [];

export function getPoll(id: string): Poll | undefined {
  return polls.find((p) => p.id === id);
}

export function getOpenPolls(): Poll[] {
  return polls.filter((p) => p.status === "OPEN");
}

export function getClosedPolls(): Poll[] {
  return polls.filter((p) => p.status === "CLOSED" || p.outcome?.status === "IMPLEMENTED" || p.outcome?.status === "PLANNED" || p.outcome?.status === "NOT_SELECTED");
}

export const pollCategoryLabels: Record<PollCategory, string> = {
  "dead-air-expansion": "Dead Air expansion",
  "mod-feature": "Mod feature",
  "game-dev": "Game development",
  music: "Music",
  "studio-general": "Studio",
};

export const pollStatusLabels: Record<PollStatus, string> = {
  OPEN: "Open for voting",
  CLOSED: "Closed",
  IMPLEMENTED: "Implemented",
  PLANNED: "Planned",
  NOT_SELECTED: "Not selected",
};
