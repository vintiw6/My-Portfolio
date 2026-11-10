"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Icon, IconName } from "./Icon";

export type WinState = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  z: number;
  minimized: boolean;
  maximized: boolean;
};

type Props = {
  win: WinState;
  title: string;
  icon: IconName;
  active: boolean;
  menu?: string[];
  status?: React.ReactNode;
  bodyClass?: string;
  onFocus: () => void;
  onClose: () => void;
  onMinimize: () => void;
  onToggleMax: () => void;
  onChange: (patch: Partial<WinState>) => void;
  children: React.ReactNode;
};

const MIN_W = 260;
const MIN_H = 180;

export function Window({
  win,
  title,
  icon,
  active,
  menu = ["File", "Edit", "View", "Help"],
  status,
  bodyClass = "",
  onFocus,
  onClose,
  onMinimize,
  onToggleMax,
  onChange,
  children,
}: Props) {
  const drag = useRef<{ px: number; py: number; x: number; y: number; w: number; h: number; mode: "move" | "size" } | null>(null);

  const start = (mode: "move" | "size") => (e: React.PointerEvent) => {
    if (e.button !== 0 || win.maximized) return;
    if ((e.target as HTMLElement).closest("button")) return;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    drag.current = { px: e.clientX, py: e.clientY, x: win.x, y: win.y, w: win.w, h: win.h, mode };
    onFocus();
  };

  const move = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.px;
    const dy = e.clientY - d.py;
    const vw = window.innerWidth;
    const vh = window.innerHeight - 40;
    if (d.mode === "move") {
      onChange({
        x: Math.min(Math.max(d.x + dx, 80 - d.w), vw - 80),
        y: Math.min(Math.max(d.y + dy, 0), vh - 32),
      });
    } else {
      onChange({
        w: Math.min(Math.max(d.w + dx, MIN_W), vw - d.x),
        h: Math.min(Math.max(d.h + dy, MIN_H), vh - d.y),
      });
    }
  };

  const end = () => {
    drag.current = null;
  };

  const style: React.CSSProperties = win.maximized
    ? { left: 0, top: 0, width: "100%", height: "calc(100% - var(--taskbar-h))", zIndex: win.z }
    : { left: win.x, top: win.y, width: win.w, height: win.h, zIndex: win.z };

  return (
    <motion.section
      role="dialog"
      aria-label={title}
      className={`window ${active ? "window--active" : ""} ${win.maximized ? "window--max" : ""}`}
      style={{ ...style, display: win.minimized ? "none" : undefined }}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.14, ease: "easeOut" }}
      onPointerDown={onFocus}
    >
      <div
        className="titlebar"
        onPointerDown={start("move")}
        onPointerMove={move}
        onPointerUp={end}
        onPointerCancel={end}
        onDoubleClick={onToggleMax}
      >
        <Icon name={icon} size={16} />
        <div className="titlebar__title">{title}</div>
        <button className="titlebar__btn" aria-label="Minimize" onClick={onMinimize}>
          <svg width="10" height="10" viewBox="0 0 10 10" shapeRendering="crispEdges"><rect x="1" y="7" width="7" height="2" fill="currentColor" /></svg>
        </button>
        <button className="titlebar__btn" aria-label={win.maximized ? "Restore" : "Maximize"} onClick={onToggleMax}>
          {win.maximized ? (
            <svg width="10" height="10" viewBox="0 0 10 10" shapeRendering="crispEdges" fill="none" stroke="currentColor"><rect x="3.5" y="0.5" width="6" height="5" /><rect x="0.5" y="3.5" width="6" height="6" fill="var(--face)" /><rect x="0.5" y="3.5" width="6" height="1.5" fill="currentColor" /></svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 10 10" shapeRendering="crispEdges" fill="none" stroke="currentColor"><rect x="0.5" y="0.5" width="9" height="9" /><rect x="0.5" y="0.5" width="9" height="1.5" fill="currentColor" /></svg>
          )}
        </button>
        <button className="titlebar__btn titlebar__btn--close" aria-label="Close" onClick={onClose}>
          <svg width="10" height="10" viewBox="0 0 10 10" stroke="currentColor" strokeWidth="1.8"><path d="M1.5 1.5l7 7M8.5 1.5l-7 7" /></svg>
        </button>
      </div>

      {menu.length > 0 && (
        <div className="menubar" aria-hidden="true">
          {menu.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      )}

      <div className={`window__body ${bodyClass}`}>{children}</div>

      {status && <div className="statusbar">{status}</div>}

      {!win.maximized && (
        <div
          className="resize-handle"
          aria-hidden="true"
          onPointerDown={start("size")}
          onPointerMove={move}
          onPointerUp={end}
          onPointerCancel={end}
        />
      )}
    </motion.section>
  );
}
