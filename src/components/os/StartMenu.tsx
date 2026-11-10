"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Icon } from "./Icon";
import { APPS, AppId } from "./apps";
import { profile } from "@/lib/data";

const ITEMS: AppId[] = ["about", "projects", "skills", "experience", "contact", "snake", "terminal"];

export function StartMenu({
  onOpen,
  onClose,
  onShutdown,
}: {
  onOpen: (id: AppId) => void;
  onClose: () => void;
  onShutdown: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.querySelector<HTMLElement>(".start-menu__item")?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node) && !(e.target as HTMLElement).closest(".taskbar__start"))
        onClose();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [onClose]);

  return (
    <motion.div
      ref={ref}
      role="menu"
      className="start-menu"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.12 }}
    >
      <div className="start-menu__rail" aria-hidden="true">
        <span>
          Vinayak<b>OS</b> 26
        </span>
      </div>
      <div className="start-menu__main">
        <div className="start-menu__head">
          <div className="avatar">VT</div>
          <div className="min-w-0">
            <div className="font-bold">{profile.name}</div>
            <div className="text-[12px] text-ink-soft">{profile.role}</div>
          </div>
        </div>
        <div className="start-menu__items">
          {ITEMS.map((id) => (
            <button key={id} role="menuitem" className="start-menu__item" onClick={() => onOpen(id)}>
              <Icon name={APPS[id].icon} size={28} />
              {APPS[id].label}
            </button>
          ))}
          <a
            role="menuitem"
            className="start-menu__item"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            onClick={onClose}
          >
            <Icon name="resume" size={28} /> Resume.pdf
          </a>
          <div className="start-menu__sep" />
          <button role="menuitem" className="start-menu__item" onClick={onShutdown}>
            <Icon name="power" size={28} /> Shut Down...
          </button>
        </div>
        <div className="start-menu__footer">PERSONAL EDITION</div>
      </div>
    </motion.div>
  );
}
