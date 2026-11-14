"use client";

import { useEffect, useRef, useState } from "react";

/* Keys we let through to the game and preventDefault on the parent
   (stops arrow-key page scrolling / Tab focus jumping while the
   parent page happens to hold keyboard focus). */
const GAME_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " ", "Tab"];

export default function GameFrame() {
  const frameRef = useRef<HTMLIFrameElement | null>(null);
  const [mode3d, setMode3d] = useState(true);

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
  }, [mode3d]);

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
        key={mode3d ? "3d" : "2d"}
        ref={frameRef}
        src={mode3d ? "/game3d.html" : "/game.html"}
        title="Whispers of Angkor's Shadows — playable game"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
        allow="autoplay"
      />
      <div
        style={{
          position: "absolute",
          top: 14,
          right: 16,
          display: "flex",
          gap: 8,
          zIndex: 10,
        }}
      >
        <button
          onClick={() => setMode3d(true)}
          style={{
            font: "12px Georgia, serif",
            letterSpacing: "1px",
            color: mode3d ? "#0a0f0d" : "#f3ead2",
            background: mode3d ? "rgba(214,169,74,.9)" : "rgba(4,10,9,.72)",
            border: "1px solid rgba(214,169,74,.6)",
            borderRadius: 3,
            padding: "6px 14px",
            cursor: "pointer",
          }}
        >
          3D REMAKE
        </button>
        <button
          onClick={() => setMode3d(false)}
          style={{
            font: "12px Georgia, serif",
            letterSpacing: "1px",
            color: !mode3d ? "#0a0f0d" : "#f3ead2",
            background: !mode3d ? "rgba(112,232,255,.85)" : "rgba(4,10,9,.72)",
            border: "1px solid rgba(112,232,255,.5)",
            borderRadius: 3,
            padding: "6px 14px",
            cursor: "pointer",
          }}
        >
          2D CLASSIC
        </button>
      </div>
    </main>
  );
}
