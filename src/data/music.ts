export type Track = { title: string; duration?: string };

export type Release = {
  id: string;
  title: string;
  kind: "album" | "single" | "ep";
  year?: number;
  artwork?: string;
  tracks: Track[];
  links: { spotify?: string; bandcamp?: string; youtube?: string };
};

export type Artist = {
  id: string;
  name: string;
  blurb: string;
  long: string;
  releases: Release[];
};

export const artists: Artist[] = [
  {
    id: "parallel-horizons",
    name: "Parallel Horizons",
    blurb: "Studio music project. Releases will be listed here as they are ready.",
    long: "Parallel Horizons is Extra Special Studio’s music identity. Album and single pages exist so artwork and streaming links can be added without rebuilding the site. Until real store or stream URLs are supplied, those buttons stay off.",
    releases: [],
  },
];

export function getArtist(id: string): Artist | undefined {
  return artists.find((a) => a.id === id);
}

export function getRelease(artistId: string, releaseId: string): Release | undefined {
  return getArtist(artistId)?.releases.find((r) => r.id === releaseId);
}
