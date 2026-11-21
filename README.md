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
- **Full Khmer language option** — TAB → Settings → Language switches the
  interface, quest panel, chapter cutscenes AND the dialogue to ភាសាខ្មែរ.
  The recorded voices stay English under the Khmer text (they are keyed to
  the original lines); the few untranslated edge lines fall back to English
  gracefully.
- **Side errands** — three optional tasks open after chapter 1: feed Srey
  Noch's dark grave-slabs, fetch Dara's kite from the dead tree east, and
  raise the Warden's three tally-stakes. They pay in riel, items and
  relics, and never gate the six-chapter plot.
- **Combat depth** — hold a strike to pour the swing into a heavy finisher
  (wider arc, knockback, shockwave); dodge *through* an enemy's blow for a
  perfect-dodge riposte — the night slows, the dagger burns, and your next
  strikes hit ~70% harder; from wave 6 the court's ember-crowned HEXERs
  join the endless night (faster than shades, worth honest coin), and from
  wave 10 they bodyguard the warden.
- **AI-painted chapter cutscenes** — each chapter opens on a generated,
  painterly folk-horror illustration.
- **Blood & gore toggle** — arterial spurts, ground pools and a hurt vignette;
  spirits bleed nothing. Toggle under TAB → Settings.
- **Directional jumping** — F jumps along your movement vector with mid-air
  steering; ledges, wall tops and terraces are reachable on purpose.
- **MATURE 17+ gate** — folk horror, blood, strong language, mischief and
  cursed bargains; acknowledged once, remembered in `localStorage`.
- **Living monsters** — foes spawn with per-instance scale/tilt/hue variation,
  tattered cloth, bone ornaments, tendril strands and rim-light halos; no two
  look alike.
- **Touch controls** — on phones and tablets the game shows a virtual
  joystick (edge push = sprint) and an action cluster (strike, dodge, jump,
  talk, blessings); one finger orbits the camera. Hold the strike button for
  the heavy finisher. `?touch=1` forces the layout for desktop testing.
- **Adaptive quality** — if the frame rate sags below 24 fps, the renderer
  steps down gradually (pixel ratio → shadows → fog) instead of stuttering.

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
| LMB / J | Strike (3-hit chain) · **hold for the heavy finisher** |
| E | Talk / search / interact |
| **1–4** | **Blessings (magic):** Moonward Step · Krasue Fire · Neak Coil · Apsara Blessing |
| **H / C / X / G** | **Use items:** Lotus Poultice · Incense · Rice Offering · Luck-Knot Charm |
| Q · R / drag | Camera · wheel zoom |
| V | Curse-vision |
| M | Full map · TAB/P pause |

*On touch devices a joystick + action cluster replace the keyboard;
the layout also force-starts with `?touch=1`.*

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
- **Missions** — the quest panel (top right) tracks every chapter objective
  plus any accepted side errand; the chronicle (TAB) retells the story so far.

## Stack

Next.js 16 + TypeScript + Tailwind 4 shell; the game itself is a
self-contained `public/game3d.html` — three.js (vendored), toon-shaded
procedural models, WebAudio score, no game-engine dependencies.

## Repo notes

The retired 2D build (`public/game.html`) was removed in v0.3.0; the 3D
game is the only entry point.
`tests/` are infra checks for the `.zscripts` runtime harness, not game tests.
Lint scope (`eslint.config.mjs`) intentionally covers `src/**` only —
`public/` holds minified game bundles.
