"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { APPS, AppId, DESKTOP } from "./apps";
import { BootScreen } from "./BootScreen";
import { Icon } from "./Icon";
import { StartMenu } from "./StartMenu";
import { Taskbar } from "./Taskbar";
import { Window, WinState } from "./Window";
import { profile } from "@/lib/data";

const TASKBAR_H = 48;
const BOOT_KEY = "vos-booted";

export function Desktop() {
  const [booted, setBooted] = useState<boolean | null>(null);
  const [wins, setWins] = useState<WinState[]>([]);
  const [startOpen, setStartOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const zTop = useRef(10);
  const coarse = useRef(false);

  useEffect(() => {
    coarse.current = window.matchMedia("(pointer: coarse)").matches;
    let seen = false;
    try {
      seen = sessionStorage.getItem(BOOT_KEY) === "1";
    } catch {}
    setBooted(seen);
    if (seen) openApp("welcome");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openApp = useCallback((id: AppId) => {
    setStartOpen(false);
    setWins((ws) => {
      const z = ++zTop.current;
      const existing = ws.find((w) => w.id === id);
      if (existing) return ws.map((w) => (w.id === id ? { ...w, minimized: false, z } : w));

      const vw = window.innerWidth;
      const vh = window.innerHeight - TASKBAR_H;
      const small = vw < 768;
      const def = APPS[id];
      const w = Math.min(def.w, vw - 24);
      const h = Math.min(def.h, vh - 24);
      const n = ws.length % 6;
      const x = Math.max(8, Math.min(vw - w - 8, Math.round((vw - w) / 2) + (n - 2) * 28));
      const y = Math.max(8, Math.min(vh - h - 8, Math.round((vh - h) / 2.4) + (n - 2) * 24));
      return [...ws, { id, x, y, w, h, z, minimized: false, maximized: small }];
    });
  }, []);

  const patch = (id: string, p: Partial<WinState>) =>
    setWins((ws) => ws.map((w) => (w.id === id ? { ...w, ...p } : w)));
  const focus = (id: string) => {
    const top = wins.reduce((m, w) => Math.max(m, w.z), 0);
    const me = wins.find((w) => w.id === id);
    if (me && me.z === top && !me.minimized) return;
    patch(id, { z: ++zTop.current, minimized: false });
  };
  const close = (id: string) => setWins((ws) => ws.filter((w) => w.id !== id));

  const visible = wins.filter((w) => !w.minimized);
  const activeId = visible.length ? visible.reduce((a, b) => (a.z > b.z ? a : b)).id : null;

  const onTask = (id: string) => {
    const w = wins.find((x) => x.id === id);
    if (!w) return;
    if (w.minimized) patch(id, { minimized: false, z: ++zTop.current });
    else if (id === activeId) patch(id, { minimized: true });
    else patch(id, { z: ++zTop.current });
  };

  const finishBoot = useCallback(() => {
    try {
      sessionStorage.setItem(BOOT_KEY, "1");
    } catch {}
    setBooted(true);
    openApp("welcome");
  }, [openApp]);

  const closeStart = useCallback(() => setStartOpen(false), []);

  const shutdown = () => {
    setStartOpen(false);
    setWins([]);
    try {
      sessionStorage.removeItem(BOOT_KEY);
    } catch {}
    setBooted(false);
  };

  const activate = (item: AppId | "resume") => {
    if (item === "resume") window.open(profile.resume, "_blank", "noopener");
    else openApp(item);
  };

  if (booted === null) return <div className="boot" />;

  return (
    <div className="desktop" onPointerDown={(e) => e.target === e.currentTarget && setSelected(null)}>
      <div className="desktop__mark pixel" aria-hidden="true">
        <h1>VinayakOS</h1>
        <p>ML · Data · Personal Edition</p>
      </div>

      <nav className="desktop__icons" aria-label="Desktop">
        {DESKTOP.map((item) => {
          const label = item === "resume" ? "Resume.pdf" : APPS[item].label;
          const icon = item === "resume" ? "resume" : APPS[item].icon;
          return (
            <button
              key={item}
              className="desk-icon"
              aria-pressed={selected === item}
              onClick={() => (coarse.current ? activate(item) : setSelected(item))}
              onDoubleClick={() => activate(item)}
              onKeyDown={(e) => e.key === "Enter" && activate(item)}
            >
              <Icon name={icon} size={40} />
              <span className="desk-icon__label">{label}</span>
            </button>
          );
        })}
      </nav>

      <AnimatePresence>
        {wins.map((w) => {
          const def = APPS[w.id as AppId];
          const C = def.Component;
          return (
            <Window
              key={w.id}
              win={w}
              title={def.title}
              icon={def.icon}
              menu={def.menu}
              status={def.status}
              bodyClass={def.bodyClass}
              active={w.id === activeId}
              onFocus={() => focus(w.id)}
              onClose={() => close(w.id)}
              onMinimize={() => patch(w.id, { minimized: true })}
              onToggleMax={() => patch(w.id, { maximized: !w.maximized })}
              onChange={(p) => patch(w.id, p)}
            >
              <C open={openApp} close={() => close(w.id)} active={w.id === activeId} />
            </Window>
          );
        })}
      </AnimatePresence>

      <AnimatePresence>
        {startOpen && (
          <StartMenu onOpen={openApp} onClose={closeStart} onShutdown={shutdown} />
        )}
      </AnimatePresence>

      <Taskbar
        tasks={wins.map((w) => ({
          id: w.id,
          title: APPS[w.id as AppId].label,
          icon: APPS[w.id as AppId].icon,
          active: w.id === activeId,
        }))}
        startOpen={startOpen}
        onStart={() => setStartOpen((s) => !s)}
        onTask={onTask}
      />

      {!booted && <BootScreen onDone={finishBoot} />}
    </div>
  );
}
