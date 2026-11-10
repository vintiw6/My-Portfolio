"use client";

import React, { useState } from "react";
import { skillCategories } from "@/lib/data";

export function Skills() {
  const [tab, setTab] = useState(0);
  const cat = skillCategories[tab];

  return (
    <div className="p-3">
      <div className="tabs overflow-x-auto" role="tablist">
        {skillCategories.map((c, i) => (
          <button
            key={c.title}
            role="tab"
            aria-selected={tab === i}
            className="tab"
            onClick={() => setTab(i)}
          >
            {c.title}
          </button>
        ))}
      </div>
      <div className="tab-panel" role="tabpanel">
        <p className="m-0 mb-3 text-ink-soft">
          Installed components for <b>{cat.title}</b>. All modules loaded and in daily use.
        </p>
        <div className="sunken bg-[var(--paper)]">
          {cat.skills.map((s, i) => (
            <div
              key={s}
              className={`flex items-center gap-3 px-3 py-2 ${i % 2 ? "bg-[var(--paper-2)]" : ""}`}
            >
              <span className="sunken grid h-[15px] w-[15px] flex-none place-items-center bg-white">
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" stroke="var(--ink)" strokeWidth="2">
                  <path d="M1 4.5l2.2 2.2L8 1.5" />
                </svg>
              </span>
              <span className="flex-1">{s}</span>
              <span className="pixel text-[18px] text-accent-ink">READY</span>
            </div>
          ))}
        </div>
        <div className="groupbox mt-5">
          <span className="groupbox__label">Total</span>
          <p className="m-0">
            {skillCategories.reduce((n, c) => n + c.skills.length, 0)} components across{" "}
            {skillCategories.length} categories.
          </p>
        </div>
      </div>
    </div>
  );
}
