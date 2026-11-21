import type { Metadata } from "next";
import GameFrame from "./GameFrame";

export const metadata: Metadata = {
  title: "Whispers of Angkor's Shadows — Play",
  description:
    "A dark Khmer folklore action-RPG: six chapters across the drowned village of Sambok Chas — wraiths, the krasue court, the sunken temple and the Whisperer. Plays free in the browser (three.js).",
};

export default function Home() {
  return <GameFrame />;
}
