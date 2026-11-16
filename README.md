# Whispers of Angkor's Shadows

*A dark Khmer folklore action RPG — 3D.*

Bopha, a ward-orphan of the drowned rice village **Sambok Chas**, carries her
mother's ritual dagger — the one that hears whispers. Three seasons ago the
village's guardian nāga fell silent when the spirit-medium **Kru Vossandei**
stole its **ward-song**, and the restless dead began walking the flooded
paddies. By night, Chantria's moon-ward dance holds the stone wall; by day,
nothing holds the grief.

Play through six chapters of missions rooted in Cambodian folklore: the
**Neak Ta** of the fields, the **Ahp/Krasue** court and its gold-crowned
Queen, **Sovanna Maccha** the golden mermaid, **Krong Pali** — the giant
ghost soldier who still marches his post — and the Whisperer that wears a
drowned nāga's stolen face. The ward-song itself turns out to be the oldest
wedding song of the Khmer: Preah Thong's procession to **Neang Neak**.

## Play online — no install

The game is hosted on GitHub Pages:

- **[3D Remake](https://cmckhmer.github.io/WHISPERS-OF-ANGKOR-S-SHADOWS/public/game3d.html)** — the full six-chapter story. **This is the actively developed version and the only listed entry point.**

A landing page lives at the
[root of this site](https://cmckhmer.github.io/WHISPERS-OF-ANGKOR-S-SHADOWS/).

## Features

- **Voiced dialogue** — every story conversation is spoken in a human TTS
  voice, cast per character (female voices for the women of Sambok Chas,
  male voices for the smith, the warden, the elder and the things that
  whisper). Toggle under TAB → Settings.
- **AI-painted chapter cutscenes** — each chapter opens on a generated,
  painterly folk-horror illustration.
- **Khmer language option** — TAB → Settings → Language switches the interface
  (menus, vitals, quest headers, chronicle) to ភាសាខ្មែរ; dialogue lines stay
  English for now.
- **Blood & gore toggle** — arterial spurts, ground pools and a hurt vignette;
  spirits bleed nothing. Toggle under TAB → Settings.
- **Directional jumping** — F jumps along your movement vector with mid-air
  steering; ledges, wall tops and terraces are reachable on purpose.
- **MATURE 17+ gate** — folk horror, blood, strong language, mischief and
  cursed bargains; acknowledged once, remembered in `localStorage`.
- **Living monsters** — foes spawn with per-instance scale/tilt/hue variation,
  tattered cloth, bone ornaments, tendril strands and rim-light halos; no two
  look alike.

## Play locally

```bash
npm install
npm run dev        # http://localhost:3000/game3d.html
```

Production: `npm run build`, then `npm start` (serves the standalone build).

## Controls

| Key | Action |
| --- | --- |
| WASD / Arrows | Move · SHIFT sprint · SPACE dodge · F jump |
| LMB / J | Strike (3-hit chain) |
| E | Talk / search / interact |
| **1–4** | **Blessings (magic):** Moonward Step · Krasue Fire · Neak Coil · Apsara Blessing |
| **H / C / X / G** | **Use items:** Lotus Poultice · Incense · Rice Offering · Luck-Knot Charm |
| Q · R / drag | Camera · wheel zoom |
| V | Curse-vision |
| M | Full map · TAB/P pause |

## Systems

- **Gold** — the fallen drop coins, bosses drop caches, loot shrines and the
  temple reliquaries pay well. Srey the rice merchant quietly buys relics;
  Veasna's forge and the stalls take riel.
- **Stalls** — Tevy sells rice offerings and luck-knot charms; Kru Sokha sells
  lotus poultices and incense. Talk to them after chapter 1.
- **Blessings** — spirit (mana) regenerates inside the ward wall, fastest at
  the Neak Ta shrine. Each blessing is taught by the story as chapters
  advance; cooldowns and costs live in the spell slots bottom-left.
- **Items** — the belt bottom-right: heal, curse-sight, pacify the hungry
  dead, halve incoming damage.
- **Missions** — the quest panel (top right) tracks every chapter objective;
  the chronicle (TAB) retells the story so far.

## Stack

Next.js 16 + TypeScript + Tailwind 4 shell; the game itself is a
self-contained `public/game3d.html` — three.js (vendored), toon-shaded
procedural models, WebAudio score, no game-engine dependencies.

## Repo notes

`tests/` are infra checks for the `.zscripts` runtime harness, not game tests.
Lint scope (`eslint.config.mjs`) intentionally covers `src/**` only —
`public/` holds minified game bundles.
