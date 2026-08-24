# Extra Special Studio website

Canonical URL: **https://extraspecialstudio.co.uk**

This is a static [Astro](https://astro.build) site. GitHub Pages hosts it from this organisation repository (`ESS-Extra-Special-Studio.github.io`). Do not present `*.github.io` as the studio address.

## Local

Requires Node 22+. From this folder:

```
npm install
npm run dev
npm run build
```

## Add a Minecraft mod

Edit `src/data/mods.ts`. Do not invent CurseForge, Modrinth, Discord, or other URLs. Omit the field until a real link exists. Missing icons use a placeholder tile — do not invent logos.

Music: `src/data/music.ts`. Games: `src/data/games.ts`. Home news: `src/data/news.ts`. Featured ids: `src/data/featured.ts`. Studio copy: `src/data/studio.ts`.

## DNS (apex)

At the registrar for `extraspecialstudio.co.uk`:

| Type | Host | Value |
|------|------|--------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `ess-extra-special-studio.github.io` |

Optional AAAA records: GitHub’s published IPv6 set for Pages.

In the GitHub repo: **Settings → Pages** → source **GitHub Actions**, custom domain `extraspecialstudio.co.uk`, enforce HTTPS after DNS propagates. Redirect `www` to the apex (or the reverse) so there is one canonical URL.

Minecraft file uploads to CurseForge / Modrinth are a separate process (`PUBLISH_FROM_GITHUB.md` on the studio Desktop docs). This repo is the website only.
