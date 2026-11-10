"use client";

import React, { useState } from "react";
import { projects, Project } from "@/lib/data";
import { Icon, IconName } from "../os/Icon";

const kindIcon: Record<Project["kind"], IconName> = {
  ml: "file-ml",
  web: "file-web",
  data: "file-data",
  game: "file-game",
};
const kindLabel: Record<Project["kind"], string> = {
  ml: "ML Model",
  web: "Web App",
  data: "Data Analysis",
  game: "Game",
};

export function Projects() {
  const [selected, setSelected] = useState<string | null>(null);
  const [opened, setOpened] = useState<Project | null>(null);
  const coarse = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

  const openProject = (p: Project) => {
    setOpened(p);
    setSelected(p.slug);
  };

  const sel = projects.find((p) => p.slug === selected);
  const path = opened ? `C:\\Projects\\${opened.title}` : "C:\\Projects";

  return (
    <div className="flex h-full flex-col">
      {/* toolbar */}
      <div className="flex flex-none items-center gap-2 border-b border-[var(--face-3)] bg-face p-1.5">
        <button className="btn !min-h-[26px] !px-2.5 !py-0.5" disabled={!opened} onClick={() => setOpened(null)}>
          ← Back
        </button>
        <span className="text-ink-soft">Address</span>
        <div className="field !py-1 flex min-w-0 flex-1 items-center gap-1.5 overflow-hidden whitespace-nowrap">
          <Icon name="folder" size={16} /> <span className="truncate">{path}</span>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-auto">
        {opened ? (
          <ProjectDetail p={opened} />
        ) : (
          <div
            className="flex flex-wrap content-start gap-2 p-4"
            onClick={(e) => e.target === e.currentTarget && setSelected(null)}
          >
            {projects.map((p) => (
              <button
                key={p.slug}
                className="file-item"
                aria-pressed={selected === p.slug}
                onClick={() => (coarse ? openProject(p) : setSelected(p.slug))}
                onDoubleClick={() => openProject(p)}
                onKeyDown={(e) => e.key === "Enter" && openProject(p)}
              >
                <Icon name={kindIcon[p.kind]} size={48} />
                <span className="px-0.5">{p.title}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="statusbar !m-0 flex-none bg-face p-[3px]">
        <span>
          {opened
            ? `${opened.tags.length} tag(s)`
            : sel
            ? `${sel.title} — ${kindLabel[sel.kind]}`
            : `${projects.length} object(s)`}
        </span>
        <span>{opened ? kindLabel[opened.kind] : coarse ? "Tap to open" : "Double-click to open"}</span>
      </div>
    </div>
  );
}

function ProjectDetail({ p }: { p: Project }) {
  return (
    <div className="p-5">
      <div className="flex items-start gap-4">
        <Icon name={kindIcon[p.kind]} size={64} className="flex-none" />
        <div className="min-w-0">
          <h2 className="pixel m-0 text-[34px] font-normal leading-none">{p.title}</h2>
          <p className="m-0 mt-1 text-ink-mute">Type: {kindLabel[p.kind]}</p>
        </div>
      </div>
      <p className="mt-4 max-w-[60ch] leading-relaxed">{p.description}</p>
      <div className="mt-3 flex flex-wrap gap-1">
        {p.tags.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <a className="btn btn--primary" href={p.demo} target="_blank" rel="noreferrer">
          ▶ Run Demo
        </a>
        <a className="btn" href={p.github} target="_blank" rel="noreferrer">
          View Source
        </a>
      </div>
    </div>
  );
}
