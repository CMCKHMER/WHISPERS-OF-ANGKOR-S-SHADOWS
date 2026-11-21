"use client";

import { useEffect, useRef } from "react";

/* Keys we let through to the game and preventDefault on the parent
   (stops arrow-key page scrolling / Tab focus jumping while the
   parent page happens to hold keyboard focus). */
const GAME_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " ", "Tab"];

export default function GameFrame() {
  const frameRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    // Forward parent-page keyboard events into the game iframe so the
    // game reacts even before/without the iframe owning keyboard focus.
    const forward = (down: boolean) => (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return; // never hijack browser shortcuts
      if (GAME_KEYS.includes(e.key)) e.preventDefault();
      frameRef.current?.contentWindow?.postMessage(
        { type: "woas_key", key: e.key, down },
        "*"
      );
    };
    const kd = forward(true);
    const ku = forward(false);
    const focusGame = () => {
      try {
        frameRef.current?.contentWindow?.focus();
      } catch {
        /* iframe not ready */
      }
    };
    window.addEventListener("keydown", kd);
    window.addEventListener("keyup", ku);
    window.addEventListener("pointerdown", focusGame);
    const t1 = setTimeout(focusGame, 350);
    const t2 = setTimeout(focusGame, 1200);
    return () => {
      window.removeEventListener("keydown", kd);
      window.removeEventListener("keyup", ku);
      window.removeEventListener("pointerdown", focusGame);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <main
      style={{
        position: "fixed",
        inset: 0,
        background:
          "radial-gradient(circle at 50% 20%, rgba(92,41,125,.25), transparent 40%), linear-gradient(180deg, #020403 0%, #07070b 60%, #020203 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <h1
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        Whispers of Angkor&apos;s Shadows — a dark Khmer folklore RPG
      </h1>
      <iframe
        ref={frameRef}
        src="/game3d.html"
        title="Whispers of Angkor's Shadows — playable game"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
        allow="autoplay"
      />
    </main>
  );
}
