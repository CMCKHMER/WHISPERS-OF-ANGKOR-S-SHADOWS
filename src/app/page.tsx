import type { Metadata } from "next";
import GameFrame from "./GameFrame";

export const metadata: Metadata = {
  title: "Whispers of Angkor's Shadows — Play",
  description:
    "A dark Khmer folklore action-RPG: explore five haunted zones, forge weapons, bind a Whisper Battalion, and decide the fate of the Shadow King.",
};

export default function Home() {
  return <GameFrame />;
}
