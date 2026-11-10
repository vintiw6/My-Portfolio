"use client";

import React, { useEffect, useState } from "react";

const LOG = [
  "VT-BIOS v2.6  (c) 2026 Tiwari Systems",
  "Memory test ........ 640K OK",
  "Detecting GPU ...... CUDA cores online",
  "Loading torch.sys",
  "Loading pandas.drv",
  "Mounting C:\\PROJECTS",
];

export function BootScreen({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0);
  const ready = pct >= 100;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setInterval(() => {
      setPct((p) => {
        const next = reduce ? 100 : Math.min(100, p + 3 + Math.floor(Math.random() * 7));
        if (next >= 100) clearInterval(t);
        return next;
      });
    }, 70);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const go = (e: KeyboardEvent) => {
      if (e.key === "Tab") return;
      onDone();
    };
    window.addEventListener("keydown", go);
    return () => window.removeEventListener("keydown", go);
  }, [ready, onDone]);

  const lines = LOG.slice(0, Math.ceil((pct / 100) * LOG.length));

  return (
    <div
      className="boot"
      onClick={() => ready && onDone()}
      role="button"
      tabIndex={0}
      aria-label={ready ? "Start VinayakOS" : "Booting VinayakOS"}
    >
      <div style={{ width: "100%", maxWidth: "48rem" }}>
        <div className="boot__log" aria-hidden="true">
          {lines.join("\n")}
        </div>
        <h1 className="boot__title">VinayakOS 26</h1>
        <p className="boot__edition">MACHINE LEARNING EDITION</p>
        <div className="boot__loading">
          <div className="boot__progress">
            <div className="boot__fill" style={{ width: `${pct}%` }} />
          </div>
          <span className="boot__pct">{pct}%</span>
        </div>
        <p className="boot__prompt" style={{ visibility: ready ? "visible" : "hidden" }}>
          Press any key to start<span className="boot__cursor">_</span>
        </p>
      </div>
    </div>
  );
}
