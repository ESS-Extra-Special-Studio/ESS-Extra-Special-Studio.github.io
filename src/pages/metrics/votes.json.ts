import type { APIRoute } from "astro";
import { getClosedPolls, getOpenPolls } from "../../data/polls";

export const prerender = true;

/** Public counts only. No visitor number — this site does not run a counter. */
export const GET: APIRoute = () => {
  const open = getOpenPolls();
  const closed = getClosedPolls();
  const body = {
    source: "extraspecialstudio.co.uk",
    visitors: null,
    visitorsNote: "Unavailable. This site does not run a visitor counter.",
    votes: {
      open: open.length,
      closed: closed.length,
      polls: [...open, ...closed].map((poll) => ({
        id: poll.id,
        title: poll.title,
        status: poll.status,
      })),
    },
  };
  return new Response(`${JSON.stringify(body, null, 2)}\n`, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
