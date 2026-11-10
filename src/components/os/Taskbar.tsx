"use client";

import React, { useEffect, useState } from "react";
import { Icon, IconName } from "./Icon";

type Task = { id: string; title: string; icon: IconName; active: boolean };

export function Taskbar({
  tasks,
  startOpen,
  onStart,
  onTask,
  onWallpaper,
}: {
  tasks: Task[];
  startOpen: boolean;
  onStart: () => void;
  onTask: (id: string) => void;
  onWallpaper: () => void;
}) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }));
    tick();
    const t = setInterval(tick, 15_000);
    return () => clearInterval(t);
  }, []);

  return (
    <footer className="taskbar">
      <button
        className="taskbar__start"
        aria-expanded={startOpen}
        aria-haspopup="menu"
        onClick={(e) => {
          e.stopPropagation();
          onStart();
        }}
      >
        <Icon name="logo" size={32} />
        <span className="taskbar__start-label">Start</span>
      </button>
      <div className="taskbar__divider" />
      <div className="taskbar__tasks">
        {tasks.map((t) => (
          <button
            key={t.id}
            className={`task ${t.active ? "task--active" : ""}`}
            onClick={() => onTask(t.id)}
            title={t.title}
          >
            <Icon name={t.icon} size={16} />
            <span>{t.title}</span>
          </button>
        ))}
      </div>
      <div className="taskbar__tray">
        <button className="taskbar__tray-btn" onClick={onWallpaper} aria-label="Change wallpaper" title="Change wallpaper">
          <svg width="18" height="18" viewBox="0 0 18 18" shapeRendering="crispEdges" aria-hidden="true">
            <rect x="1" y="3" width="16" height="12" fill="#ffffff" />
            <rect x="2" y="4" width="14" height="10" fill="#3f86e6" />
            <rect x="11" y="5" width="3" height="3" fill="#ffd56a" />
            <path d="M2 14 L7 8 L10 11 L12 9 L16 13 L16 14 Z" fill="#4cb82a" />
          </svg>
        </button>
        <span className="taskbar__light" title="Open to work" />
        <span className="taskbar__clock" suppressHydrationWarning>
          {time}
        </span>
      </div>
    </footer>
  );
}
