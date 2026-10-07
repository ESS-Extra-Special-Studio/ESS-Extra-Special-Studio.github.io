export type GameId = "minecraft" | "dragonwilds";
export type Ecosystem = "ess" | "pantheon" | "dead-air" | "other" | "ashenfall";
export type ModStatus = "shipped" | "development" | "planned" | "companion";

export type ExternalLinks = {
  github?: string;
  curseforge?: string;
  modrinth?: string;
  docs?: string;
};

export type Mod = {
  id: string;
  name: string;
  short: string;
  long: string;
  game?: GameId;
  ecosystem: Ecosystem;
  status: ModStatus;
  mcVersions: string[];
  loaders: string[];
  links: ExternalLinks;
  icon?: string;
  pixelIcon?: boolean;
  stackNote?: string;
  details?: string[];
  screenshots?: { src: string; alt: string }[];
};

/**
 * TODO: CurseForge URLs for the Dragonwilds mods. The project pages were not public yet when these mods were added.
 * Paste each real URL here once confirmed. Empty values are not shown on the site.
 */
const dragonwildsCurseForge = {
  "esl-dragonwilds": "",
  historian: "",
  horticulture: "",
};

export const mods: Mod[] = [
  {
    id: "esl",
    name: "Extra Special Lib (ESL)",
    short: "Shared runtime contracts for the Extra Special stack.",
    long: "ESL is the foundation library: registries, config helpers, Wave and Lobby session APIs, and other backend contracts Extra Special mods depend on. No GUI and no packets — session machinery lives here; networking is ESN.",
    ecosystem: "ess",
    status: "shipped",
    mcVersions: ["1.20.1", "1.21.1"],
    loaders: ["Forge", "NeoForge"],
    links: { github: "https://github.com/ESS-Extra-Special-Studio/ESL", curseforge: "https://www.curseforge.com/minecraft/mc-mods/esl-extra-special-lib", modrinth: "https://modrinth.com/mod/esl-extra-special-lib" },
    icon: "/images/mods/esl.png",
    stackNote: "Session/runtime half of ESL + ESN. Base of ESL → ESC → ESH / ESG / ESB.",
  },
  {
    id: "esn",
    name: "Extra Special Network (ESN)",
    short: "Reusable multiplayer networking fabric for Extra Special mods.",
    long: "ESN is the networking half of Extra Special’s multiplayer framework: channels, packets, targeted delivery, and group fan-out. It has no lobby, wave, airdrop, or HUD types — consumer mods supply meaning. Pair with ESL for sessions. First reference consumer: Radio Towers airdrop lobby.",
    ecosystem: "ess",
    status: "shipped",
    mcVersions: ["1.20.1", "1.21.1"],
    loaders: ["Forge", "NeoForge"],
    links: {
      github: "https://github.com/ESS-Extra-Special-Studio/ESN",
      curseforge: "https://www.curseforge.com/minecraft/mc-mods/esn-extra-special-network",
    },
    icon: "/images/mods/esn.png",
    stackNote: "Networking half of ESL + ESN. Optional for features that do not need multiplayer fan-out.",
  },
  {
    id: "esc",
    name: "Extra Special Core (ESC)",
    short: "UI chrome, themes, and screen primitives.",
    long: "ESC supplies Extra Special screens, theme tokens, and sound helpers. Hub and GUI tools sit on top of it. Requires ESL.",
    ecosystem: "ess",
    status: "shipped",
    mcVersions: ["1.20.1", "1.21.1"],
    loaders: ["Forge", "NeoForge"],
    links: { github: "https://github.com/ESS-Extra-Special-Studio/ESC", curseforge: "https://www.curseforge.com/minecraft/mc-mods/esc-extra-special-core", modrinth: "https://modrinth.com/mod/esc-extra-special-core" },
    icon: "/images/mods/esc.png",
  },
  {
    id: "esh",
    name: "Extra Special Hub (ESH)",
    short: "In-game hub (F9) for Extra Special and partner mods.",
    long: "ESH is the player-facing hub: sections, windows, and layout. Calm The Leaks, WhatLIB, and Pantheon open from here.",
    ecosystem: "ess",
    status: "shipped",
    mcVersions: ["1.20.1", "1.21.1"],
    loaders: ["Forge", "NeoForge"],
    links: { github: "https://github.com/ESS-Extra-Special-Studio/ESH", curseforge: "https://www.curseforge.com/minecraft/mc-mods/esh-extra-special-hub", modrinth: "https://modrinth.com/mod/esh-extra-special-hub" },
    icon: "/images/mods/esh.png",
  },
  {
    id: "esg",
    name: "Extra Special GUI (ESG)",
    short: "GUI builder tools. In development; not in the public CurseForge wave.",
    long: "ESG is the screen-builder companion to the stack. It is in active development and is not treated as a public release yet.",
    ecosystem: "ess",
    status: "development",
    mcVersions: ["1.20.1", "1.21.1"],
    loaders: ["Forge", "NeoForge"],
    links: {},
    icon: "/images/mods/esg.png",
    stackNote: "Dev/test only until a public ship.",
  },
  {
    id: "esb",
    name: "Extra Special Blueprints (ESB)",
    short: "In-game blueprint authoring. Planned — not built yet.",
    long: "ESB is the planned authoring app for structure/blueprint work. Runtime assembly will live in ESL; ESB is the editor. No public repo yet.",
    ecosystem: "ess",
    status: "planned",
    mcVersions: [],
    loaders: [],
    links: {},
    stackNote: "Planned. Claims of a live ESB product would be incorrect.",
  },
  {
    id: "whatlib",
    name: "WhatLIB?",
    short: "Utility library surfaced through Extra Special Hub.",
    long: "WhatLIB is an Extra Special utility module. It is not part of the ESL→ESC stack chain; it consumes the hub.",
    ecosystem: "other",
    status: "shipped",
    mcVersions: ["1.20.1", "1.21.1"],
    loaders: ["Forge", "NeoForge"],
    links: { github: "https://github.com/ESS-Extra-Special-Studio/WhatLIB", curseforge: "https://www.curseforge.com/minecraft/mc-mods/whatlib", modrinth: "https://modrinth.com/mod/whatlib" },
    icon: "/images/mods/whatlib.png",
    stackNote: "Off-stack consumer (hub utility), not a stack layer.",
  },
  {
    id: "pantheonapi",
    name: "PantheonAPI",
    short: "Pantheon hub and shared APIs for Hermes and Aegis.",
    long: "PantheonAPI is the shared surface for the Pantheon family. Hermes and Aegis dock into Pantheon Hub rather than as separate hub leaves.",
    ecosystem: "pantheon",
    status: "shipped",
    mcVersions: ["1.20.1", "1.21.1"],
    loaders: ["Forge", "NeoForge"],
    links: { github: "https://github.com/ESS-Extra-Special-Studio/PantheonAPI", curseforge: "https://www.curseforge.com/minecraft/mc-mods/pantheonapi", modrinth: "https://modrinth.com/mod/pantheonapi" },
    icon: "/images/mods/pantheonapi.png",
  },
  {
    id: "aegis",
    name: "Aegis Accord",
    short: "Pantheon dock: Aegis.",
    long: "Aegis Accord is reached from Extra Special Hub → Pantheon → Pantheon Hub → Aegis. There is no separate ESH leaf.",
    ecosystem: "pantheon",
    status: "shipped",
    mcVersions: ["1.20.1", "1.21.1"],
    loaders: ["Forge", "NeoForge"],
    links: { github: "https://github.com/ESS-Extra-Special-Studio/Aegis-Accord", curseforge: "https://www.curseforge.com/minecraft/mc-mods/aegis-accord", modrinth: "https://modrinth.com/mod/aegis-accord" },
    icon: "/images/mods/aegis.png",
  },
  {
    id: "hermes",
    name: "Hermes",
    short: "Pantheon dock: Hermes.",
    long: "Hermes is reached from Extra Special Hub → Pantheon → Pantheon Hub → Hermes. There is no separate ESH leaf.",
    ecosystem: "pantheon",
    status: "shipped",
    mcVersions: ["1.20.1", "1.21.1"],
    loaders: ["Forge", "NeoForge"],
    links: { github: "https://github.com/ESS-Extra-Special-Studio/Hermes", curseforge: "https://www.curseforge.com/minecraft/mc-mods/hermes", modrinth: "https://modrinth.com/mod/ess-hermes" },
    icon: "/images/mods/hermes.png",
  },
  {
    id: "dead-air",
    name: "Dead Air",
    short: "Apocalypse radio: towers, stations, walkie, music, and airdrops.",
    long: "Dead Air is Extra Special Studio’s radio survival layer for Minecraft. It works with Radio Towers as the world companion (towers and airdrops). Radio Towers is not an Extra Special Studio mod.",
    ecosystem: "dead-air",
    status: "shipped",
    mcVersions: ["1.20.1", "1.21.1"],
    loaders: ["Forge", "NeoForge"],
    links: { github: "https://github.com/ESS-Extra-Special-Studio/Dead-Air", curseforge: "https://www.curseforge.com/minecraft/mc-mods/dead-air", modrinth: "https://modrinth.com/mod/dead-air" },
    icon: "/images/mods/dead-air.png",
  },
  {
    id: "radio-towers",
    name: "Radio Towers",
    short: "Companion world content for Dead Air. Not an Extra Special Studio mod.",
    long: "Radio Towers supplies towers, airdrops, and related world pieces Dead Air talks to. Optional airdrop lobby (invite, ready, then Go) uses ESL sessions and ESN packets; solo lever calls stay as they were. It is a companion, not an Extra Special Studio mod.",
    ecosystem: "dead-air",
    status: "companion",
    mcVersions: ["1.20.1", "1.21.1"],
    loaders: ["Forge", "NeoForge"],
    links: { curseforge: "https://www.curseforge.com/minecraft/mc-mods/apocalypse-structures-radio-towers-and-airdrops" },
    icon: "/images/mods/radio-towers.png",
    stackNote: "Companion to Dead Air, not an Extra Special Studio mod.",
  },
  {
    id: "pip-boy-radio",
    name: "Dead Air: Pip-Boy Radio Conversion",
    short: "Dead Air walkie on a Pip-Boy-style radio.",
    long: "Conversion layer so Dead Air radio can sit in a Pip-Boy-style device instead of the default walkie.",
    ecosystem: "dead-air",
    status: "shipped",
    mcVersions: ["1.20.1"],
    loaders: ["Forge"],
    links: {
      github: "https://github.com/ESS-Extra-Special-Studio/Dead-Air-Pip-Boy-Radio-Conversion",
      curseforge: "https://www.curseforge.com/minecraft/mc-mods/dead-air-pip-boy-radio-conversion",
      modrinth: "https://modrinth.com/mod/dead-air-pip-boy-radio-conversion",
    },
    icon: "/images/mods/pip-boy-radio.png",
  },
  {
    id: "dead-letters",
    name: "Dead Letters",
    short: "Mail and letters Minecraft mod.",
    long: "Dead Letters is an Extra Special Studio Minecraft mod.",
    ecosystem: "other",
    status: "shipped",
    mcVersions: ["1.20.1", "1.21.1"],
    loaders: ["Forge", "NeoForge"],
    links: { github: "https://github.com/ESS-Extra-Special-Studio/Dead-Letters", curseforge: "https://www.curseforge.com/minecraft/mc-mods/dead-letters", modrinth: "https://modrinth.com/mod/dead-letters" },
    icon: "/images/mods/dead-letters.png",
  },
  {
    id: "nag",
    name: "NAG",
    short: "Not Another Guide Book.",
    long: "NAG (Not Another Guide Book) is Extra Special Studio’s guidebook-style Minecraft mod.",
    ecosystem: "other",
    status: "shipped",
    mcVersions: ["1.20.1"],
    loaders: ["Forge"],
    links: { github: "https://github.com/ESS-Extra-Special-Studio/NAG", curseforge: "https://www.curseforge.com/minecraft/mc-mods/nag-not-another-guidebook", modrinth: "https://modrinth.com/mod/nag-not-another-guidebook" },
    icon: "/images/mods/nag.png",
  },
  {
    id: "after-hours-fm",
    name: "Dead Air: After Hours FM",
    short: "Dead Air station expansion.",
    long: "Music expansion pack for Dead Air.",
    ecosystem: "dead-air",
    status: "shipped",
    mcVersions: ["1.20.1"],
    loaders: ["Forge"],
    links: {
      github: "https://github.com/ESS-Extra-Special-Studio/Dead-Air-After-Hours-FM",
      curseforge: "https://www.curseforge.com/minecraft/mc-mods/dead-air-after-hours-fm",
      modrinth: "https://modrinth.com/mod/dead-air-after-hours-fm",
    },
    icon: "/images/mods/after-hours-fm.png",
  },
  {
    id: "beat-blocks",
    name: "Dead Air: Block Beats FM",
    short: "Dead Air station expansion.",
    long: "Music expansion pack for Dead Air.",
    ecosystem: "dead-air",
    status: "shipped",
    mcVersions: ["1.20.1"],
    loaders: ["Forge"],
    links: {
      github: "https://github.com/ESS-Extra-Special-Studio/Dead-Air-Beat-Blocks",
      curseforge: "https://www.curseforge.com/minecraft/mc-mods/dead-air-block-beats",
      modrinth: "https://modrinth.com/mod/dead-air-block-beats",
    },
    icon: "/images/mods/beat-blocks.png",
  },
  {
    id: "broken-youth-radio",
    name: "Dead Air: Broken Youth Radio",
    short: "Dead Air station expansion.",
    long: "Music expansion pack for Dead Air.",
    ecosystem: "dead-air",
    status: "shipped",
    mcVersions: ["1.20.1"],
    loaders: ["Forge"],
    links: {
      github: "https://github.com/ESS-Extra-Special-Studio/Dead-Air-Broken-Youth-Radio",
      curseforge: "https://www.curseforge.com/minecraft/mc-mods/dead-air-broken-youth-radio",
      modrinth: "https://modrinth.com/mod/dead-air-broken-youth-radio",
    },
    icon: "/images/mods/broken-youth-radio.png",
  },
  {
    id: "frontline-fm",
    name: "Dead Air: Frontline FM",
    short: "Dead Air station expansion.",
    long: "Music expansion pack for Dead Air.",
    ecosystem: "dead-air",
    status: "shipped",
    mcVersions: ["1.20.1"],
    loaders: ["Forge"],
    links: {
      github: "https://github.com/ESS-Extra-Special-Studio/Dead-Air-Frontline-FM",
      curseforge: "https://www.curseforge.com/minecraft/mc-mods/dead-air-frontline-fm",
      modrinth: "https://modrinth.com/mod/dead-air-frontline-fm",
    },
    icon: "/images/mods/frontline-fm.png",
  },
  {
    id: "iron-rain-fm",
    name: "Dead Air: Iron Rain FM",
    short: "Dead Air station expansion.",
    long: "Music expansion pack for Dead Air.",
    ecosystem: "dead-air",
    status: "shipped",
    mcVersions: ["1.20.1"],
    loaders: ["Forge"],
    links: {
      github: "https://github.com/ESS-Extra-Special-Studio/Dead-Air-Iron-Rain-FM",
      curseforge: "https://www.curseforge.com/minecraft/mc-mods/dead-air-iron-rain-fm",
      modrinth: "https://modrinth.com/mod/dead-air-iron-rain-fm",
    },
    icon: "/images/mods/iron-rain-fm.png",
  },
  {
    id: "wayfarer-radio",
    name: "Dead Air: Wayfarer Radio",
    short: "Dead Air station expansion.",
    long: "Music expansion pack for Dead Air.",
    ecosystem: "dead-air",
    status: "shipped",
    mcVersions: ["1.20.1"],
    loaders: ["Forge"],
    links: {
      github: "https://github.com/ESS-Extra-Special-Studio/Dead-Air-Wayfarer-Radio",
      curseforge: "https://www.curseforge.com/minecraft/mc-mods/dead-air-wayfarer-radio",
      modrinth: "https://modrinth.com/mod/dead-air-wayfarer-radio",
    },
    icon: "/images/mods/wayfarer-radio.png",
  },
  {
    id: "zero-gravity",
    name: "Dead Air: Zero Gravity",
    short: "Dead Air expansion.",
    long: "Dead Air expansion pack.",
    ecosystem: "dead-air",
    status: "shipped",
    mcVersions: ["1.20.1"],
    loaders: ["Forge"],
    links: {
      github: "https://github.com/ESS-Extra-Special-Studio/Dead-Air-Zero-Gravity",
      curseforge: "https://www.curseforge.com/minecraft/mc-mods/dead-air-zero-gravity",
      modrinth: "https://modrinth.com/mod/dead-air-zero-gravity",
    },
    icon: "/images/mods/zero-gravity.png",
  },
  {
    id: "ctl",
    name: "Calm The Leaks",
    short: "Utility: leak / debug calm. Opens from Extra Special Hub.",
    long: "Calm The Leaks is an Extra Special utility. Open via Extra Special Hub (UTILITY) or /ctl panel.",
    ecosystem: "other",
    status: "shipped",
    mcVersions: ["1.20.1", "1.21.1"],
    loaders: ["Forge", "NeoForge"],
    links: { github: "https://github.com/ESS-Extra-Special-Studio/CTL", curseforge: "https://www.curseforge.com/minecraft/mc-mods/ctl-calm-the-leaks", modrinth: "https://modrinth.com/mod/ctl-calm-the-leaks" },
    icon: "/images/mods/ctl.png",
  },
  {
    id: "lootr-liaison",
    name: "Lootr Liaison",
    short: "Standalone Lootr companion.",
    long: "Lootr Liaison is a standalone Extra Special mod. It does not consume Extra Special Hub.",
    ecosystem: "other",
    status: "shipped",
    mcVersions: ["1.20.1", "1.21.1"],
    loaders: ["Forge", "NeoForge"],
    links: { github: "https://github.com/ESS-Extra-Special-Studio/Lootr-Liaison", curseforge: "https://www.curseforge.com/minecraft/mc-mods/lootr-liaison", modrinth: "https://modrinth.com/mod/lootr-liason" },
    icon: "/images/mods/lootr-liaison.png",
  },
  {
    id: "death-detangler",
    name: "Death-Detangler",
    short: "Standalone death / inventory helper.",
    long: "Death-Detangler is a standalone Extra Special mod. It does not consume Extra Special Hub.",
    ecosystem: "other",
    status: "shipped",
    mcVersions: ["1.20.1"],
    loaders: ["Forge"],
    links: { github: "https://github.com/ESS-Extra-Special-Studio/Death-Detangler", curseforge: "https://www.curseforge.com/minecraft/mc-mods/death-detangler", modrinth: "https://modrinth.com/mod/death-detangler" },
    icon: "/images/mods/death-detangler.png",
  },
  {
    id: "explainium",
    name: "Explainium",
    short: "Explanation / tooltip helper.",
    long: "Explainium is an Extra Special Minecraft mod.",
    ecosystem: "other",
    status: "shipped",
    mcVersions: ["1.20.1"],
    loaders: ["Forge"],
    links: { github: "https://github.com/ESS-Extra-Special-Studio/Explainium", curseforge: "https://www.curseforge.com/minecraft/mc-mods/explainium", modrinth: "https://modrinth.com/mod/explainium" },
    icon: "/images/mods/explainium.png",
  },
  {
    id: "evil-eye",
    name: "Evil Eye",
    short: "EvilCraft addon.",
    long: "Evil Eye is Extra Special Studio’s EvilCraft addon.",
    ecosystem: "other",
    status: "shipped",
    mcVersions: ["1.20.1", "1.21.1"],
    loaders: ["Forge", "NeoForge"],
    links: { github: "https://github.com/ESS-Extra-Special-Studio/Evil-Eye", curseforge: "https://www.curseforge.com/minecraft/mc-mods/evil-eye-evilcraft-addon", modrinth: "https://modrinth.com/mod/evil-eye-evilcraft-addon" },
    icon: "/images/mods/evil-eye.png",
  },
  {
    id: "supplefix",
    name: "SuppleFix",
    short: "Small Extra Special fix/utility mod.",
    long: "SuppleFix is an Extra Special Minecraft mod.",
    ecosystem: "other",
    status: "shipped",
    mcVersions: ["1.20.1"],
    loaders: ["Forge"],
    links: { github: "https://github.com/ESS-Extra-Special-Studio/SuppleFix", curseforge: "https://www.curseforge.com/minecraft/mc-mods/supplefix", modrinth: "https://modrinth.com/mod/supplefix" },
    icon: "/images/mods/supplefix.png",
  },
  {
    id: "not-actually-afk",
    name: "Not Actually AFK",
    short: "AFK-adjacent Extra Special mod.",
    long: "Not Actually AFK is an Extra Special Minecraft mod.",
    ecosystem: "other",
    status: "shipped",
    mcVersions: ["1.20.1"],
    loaders: ["Forge"],
    links: { github: "https://github.com/ESS-Extra-Special-Studio/Not-Actually-AFK", curseforge: "https://www.curseforge.com/minecraft/mc-mods/not-actually-afk", modrinth: "https://modrinth.com/mod/not-actually-afk" },
    icon: "/images/mods/not-actually-afk.png",
  },
  {
    id: "esl-dragonwilds",
    name: "ESL:DragonWilds",
    short: "The library our Dragonwilds skill mods run on, plus one Action Wheel for every mod.",
    long: "ESL:DragonWilds is what lets a modded skill sit in Dragonwilds like it was always there: on the character select grid, in the skills menu with its own panel and perks, and in your total level. On its own it doesn't do much apart from the Action Wheel. If one of our skill mods lists it, you need it.",
    game: "dragonwilds",
    ecosystem: "ashenfall",
    status: "shipped",
    mcVersions: [],
    loaders: ["UE4SS"],
    links: { curseforge: dragonwildsCurseForge["esl-dragonwilds"] },
    icon: "/images/mods/esl-dragonwilds.png",
    stackNote: "Needs UE4SS 3.0.1 for Dragonwilds. Not the same mod as ESL for Minecraft.",
    details: [
      "Look at something and hold Z. Any actions mods have for it show up on one wheel, so you're not juggling a pile of keybinds. Greyed-out actions tell you why, like \"Needs Farming 15\". You can change the key, size and colours, or switch the wheel off, in its config file.",
      "Skill progress is saved per character in its own folder, so updating a mod won't wipe it. ESL only reads vanilla levels from your save and never writes to the game's own save files.",
      "Making your own mod? ESL has a Lua API for registering skills, giving XP, adding perks and putting your own options on the wheel.",
    ],
  },
  {
    id: "historian",
    name: "Skills of Ashenfall: Historian",
    short: "The first original custom skill in Dragonwilds. Levels 1 to 25, trained by finding the history Ashenfall's people left lying around.",
    long: "You've been picking up lore scraps the whole time. Now they count. Historian is a new skill, levels 1 to 25, and every lore scrap, journal and place record your journal files pays Historian XP. It shows up like any vanilla skill: on character select, in your total level, and with its own tile, panel and perks in the skills menu.",
    game: "dragonwilds",
    ecosystem: "ashenfall",
    status: "shipped",
    mcVersions: [],
    loaders: ["UE4SS"],
    links: {
      github: "https://github.com/ESS-Extra-Special-Studio/Skills-of-Ashenfall-Historian",
      curseforge: dragonwildsCurseForge.historian,
    },
    icon: "/images/mods/historian.png",
    stackNote: "Needs UE4SS 3.0.1 for Dragonwilds and ESL:DragonWilds 1.0.0 or later.",
    details: [
      "Bramblemead Valley has 20 history entries, and each one pays once, in whatever order you find them. There are four sets to finish and four pairs of pages that answer each other, and both pay a bonus. Once you've got 18 of the 20, a card sends you to the ruins of Bramblemead village to piece it all together, which takes you to level 25.",
      "There's a perk at every level from 2 to 25. Most are a small bump to Historian XP. A few named ones, like Footnotes and He Said, She Said, help you work out what you're still missing.",
      "Press F7 for the ledger: your level and XP, what you've filed, how each set is going and what to look for next. Already got a character? Historian credits you for everything your journal already holds.",
      "It stops at 25 for now, with the starting valley done. Later versions take it further as more of Ashenfall opens up.",
    ],
    screenshots: [
      { src: "/images/mods/screens/historian-skills-detail.jpg", alt: "Historian at level 12 in the skills menu, with its panel and perk list" },
      { src: "/images/mods/screens/historian-ledger-f7.jpg", alt: "The F7 Historian ledger showing records filed, sets and what to find next" },
      { src: "/images/mods/screens/historian-character-select.jpg", alt: "Historian 12 of 25 on the character select skill grid" },
    ],
  },
  {
    id: "horticulture",
    name: "Skills of Ashenfall: Horticulture",
    short: "The second Skills of Ashenfall skill. Graft cuttings onto your crops and trees and see what's there at dawn.",
    long: "Take a cutting from one plant, graft it onto something you grew, and see what's there at dawn. Maybe an ash tree full of potatoes. Maybe an oak with cabbages in it. Horticulture is a new skill, levels 1 to 25, and you have to earn it first.",
    game: "dragonwilds",
    ecosystem: "ashenfall",
    status: "shipped",
    mcVersions: [],
    loaders: ["UE4SS"],
    links: { curseforge: dragonwildsCurseForge.horticulture },
    icon: "/images/mods/horticulture.png",
    stackNote: "Needs UE4SS 3.0.1 for Dragonwilds, ESL:DragonWilds 1.0.0 and Skills of Ashenfall: Historian 1.0.0 or later.",
    details: [
      "To unlock it you need Historian 25 and Farming 25. Then find the Annotated Hymnal in Bramblemead Valley and read it. Below Historian 25 you can't make out the older writing between the hymns.",
      "Aim at a plant and press G to take a cutting, then press G on a crop, sapling or tree you planted to graft it. At dawn the graft either takes or it doesn't. A graft that takes changes how the plant looks, and the first of each pairing goes in your Discovery Catalogue.",
      "There are five named hybrids, like Tuberwood Ash (potatoes from an ash tree) and Weeping Oak, plus a lot of other pairings, each with its own look. A crop growing on a tree can be picked once a day.",
      "Very rarely, a cabbage grafted onto a cabbage grows a Brassica Primelet instead. Look after it for five days and it turns into a Mini Brassica Prime, with its own name, a personality and opinions on your cooking. Raise as many as you like.",
      "Hold Z on a plant to use the Action Wheel from ESL:DragonWilds, or just stick to the keys.",
    ],
    screenshots: [
      { src: "/images/mods/screens/horticulture-mini-primes.jpg", alt: "Six potted Mini Brassica Primes in a row" },
      { src: "/images/mods/screens/horticulture-hymnal.jpg", alt: "The Annotated Hymnal on the grass with its Historian 25 prompt" },
      { src: "/images/mods/screens/horticulture-level-up.jpg", alt: "The game's level-up banner with the Horticulture badge" },
    ],
  },
];

export const gameLabels: Record<GameId, string> = {
  minecraft: "Minecraft",
  dragonwilds: "RuneScape: Dragonwilds",
};

/** Add a new GameId + label here when we ship mods for another game. */
export const gameOrder: GameId[] = ["minecraft", "dragonwilds"];

export const gameNotes: Partial<Record<GameId, string>> = {
  dragonwilds:
    "Fan-made mods. Not affiliated with, endorsed by or sponsored by Jagex Ltd. RuneScape and RuneScape: Dragonwilds are trademarks of Jagex Ltd.",
};

export const ecosystemLabels: Record<Ecosystem, string> = {
  ess: "Extra Special stack",
  pantheon: "Pantheon",
  "dead-air": "Dead Air",
  other: "Standalone & utility",
  ashenfall: "Skills of Ashenfall",
};

export function modGame(mod: Mod): GameId {
  return mod.game ?? "minecraft";
}

export function getMod(id: string): Mod | undefined {
  return mods.find((m) => m.id === id);
}

export function modsByEcosystem(eco: Ecosystem, game: GameId = "minecraft"): Mod[] {
  return mods.filter((m) => modGame(m) === game && m.ecosystem === eco);
}
