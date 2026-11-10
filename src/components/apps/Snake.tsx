"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import type { AppCtx } from "../os/apps";

const N = 20;
const TICK = 110;
type P = { x: number; y: number };
type Phase = "idle" | "playing" | "paused" | "over";

const DIRS: Record<string, P> = {
  ArrowUp: { x: 0, y: -1 }, w: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 }, s: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 }, a: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }, d: { x: 1, y: 0 },
};

function readBest() {
  try {
    return Number(localStorage.getItem("vos-snake-best") || 0);
  } catch {
    return 0;
  }
}

export function Snake({ active }: AppCtx) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const snake = useRef<P[]>([{ x: 10, y: 10 }]);
  const dir = useRef<P>({ x: 1, y: 0 });
  const queued = useRef<P>({ x: 1, y: 0 });
  const food = useRef<P>({ x: 15, y: 10 });
  const [phase, setPhase] = useState<Phase>("idle");
  const [score, setScore] = useState(0);
  const scoreRef = useRef(0);
  const [best, setBest] = useState(0);

  useEffect(() => {
    setBest(readBest());
  }, []);

  const draw = useCallback(() => {
    const c = canvas.current;
    if (!c) return;
    const ctx = c.getContext("2d")!;
    const s = c.width / N;
    ctx.fillStyle = "#0b1a0e";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#12261a";
    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) if ((i + j) % 2) ctx.fillRect(i * s, j * s, s, s);
    ctx.fillStyle = "#d9826b";
    ctx.fillRect(food.current.x * s + 2, food.current.y * s + 2, s - 4, s - 4);
    snake.current.forEach((p, i) => {
      ctx.fillStyle = i === 0 ? "#c9f0c5" : "#8ccf88";
      ctx.fillRect(p.x * s + 1, p.y * s + 1, s - 2, s - 2);
    });
  }, []);

  const placeFood = () => {
    let f: P;
    do f = { x: Math.floor(Math.random() * N), y: Math.floor(Math.random() * N) };
    while (snake.current.some((p) => p.x === f.x && p.y === f.y));
    food.current = f;
  };

  const reset = () => {
    snake.current = [{ x: 8, y: 10 }, { x: 7, y: 10 }, { x: 6, y: 10 }];
    dir.current = queued.current = { x: 1, y: 0 };
    placeFood();
    scoreRef.current = 0;
    setScore(0);
    setPhase("playing");
  };

  const steer = useCallback((d: P) => {
    if (d.x === -dir.current.x && d.y === -dir.current.y) return;
    queued.current = d;
  }, []);

  // game loop
  useEffect(() => {
    draw();
    if (phase !== "playing") return;
    const t = setInterval(() => {
      dir.current = queued.current;
      const h = snake.current[0];
      const nh = { x: h.x + dir.current.x, y: h.y + dir.current.y };
      const hit =
        nh.x < 0 || nh.y < 0 || nh.x >= N || nh.y >= N ||
        snake.current.some((p) => p.x === nh.x && p.y === nh.y);
      if (hit) {
        setPhase("over");
        const sc = scoreRef.current;
        if (sc > readBest()) {
          try { localStorage.setItem("vos-snake-best", String(sc)); } catch {}
          setBest(sc);
        }
        return;
      }
      snake.current = [nh, ...snake.current];
      if (nh.x === food.current.x && nh.y === food.current.y) {
        scoreRef.current += 10;
        setScore(scoreRef.current);
        placeFood();
      } else snake.current.pop();
      draw();
    }, TICK);
    return () => clearInterval(t);
  }, [phase, draw]);

  // keyboard (only while this window is focused)
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (DIRS[k]) {
        e.preventDefault();
        if (phase === "idle" || phase === "over") reset();
        steer(DIRS[k]);
      } else if (k === " ") {
        e.preventDefault();
        if (phase === "playing") setPhase("paused");
        else if (phase === "paused") setPhase("playing");
        else reset();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, phase, steer]);

  // swipe
  const touch = useRef<P | null>(null);

  const message =
    phase === "idle" ? "Press SPACE or tap to start" :
    phase === "paused" ? "Paused — SPACE to resume" :
    phase === "over" ? `Game over — ${score} pts. Tap to retry` : "";

  return (
    <div className="flex h-full flex-col items-center gap-2 p-3">
      <div className="pixel flex w-full max-w-[400px] justify-between text-[22px] text-[#8ccf88]">
        <span>SCORE {String(score).padStart(4, "0")}</span>
        <span>HI {String(best).padStart(4, "0")}</span>
      </div>
      <div
        className="relative aspect-square w-full max-w-[400px] min-h-0"
        style={{ touchAction: "none" }}
        onClick={() => (phase === "idle" || phase === "over") && reset()}
        onTouchStart={(e) => (touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY })}
        onTouchEnd={(e) => {
          if (!touch.current) return;
          const dx = e.changedTouches[0].clientX - touch.current.x;
          const dy = e.changedTouches[0].clientY - touch.current.y;
          if (Math.max(Math.abs(dx), Math.abs(dy)) > 20)
            steer(Math.abs(dx) > Math.abs(dy) ? { x: Math.sign(dx), y: 0 } : { x: 0, y: Math.sign(dy) });
          touch.current = null;
        }}
      >
        <canvas ref={canvas} width={400} height={400} className="block h-full w-full border border-[#548b59]" style={{ imageRendering: "pixelated" }} />
        {message && (
          <div className="pixel absolute inset-0 grid place-items-center bg-[rgba(5,12,7,0.55)] p-4 text-center text-[24px] text-[#c9f0c5]">
            {message}
          </div>
        )}
      </div>
      <p className="pixel m-0 text-[18px] text-[#5f9a5c]">Arrows / WASD to move · swipe on touch</p>
    </div>
  );
}
