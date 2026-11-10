"use client";

import React, { useEffect, useState } from "react";
import { Icon, IconName } from "./Icon";

type Task = { id: string; title: string; icon: IconName; active: boolean };

export function Taskbar({
  tasks,
  startOpen,
  onStart,
  onTask,
}: {
  tasks: Task[];
  startOpen: boolean;
  onStart: () => void;
  onTask: (id: string) => void;
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
        <Icon name="logo" size={24} />
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
            <Icon name={t.icon} size={20} />
            <span>{t.title}</span>
          </button>
        ))}
      </div>
      <div className="taskbar__tray">
        <span className="taskbar__light" title="Open to work" />
        <span className="taskbar__clock" suppressHydrationWarning>
          {time}
        </span>
      </div>
    </footer>
  );
}
