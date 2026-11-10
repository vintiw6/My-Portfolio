import React from "react";
import { profile } from "@/lib/data";
import type { AppCtx } from "../os/apps";

export function About({ open }: AppCtx) {
  return (
    <div className="p-4">
      <div className="flex flex-wrap items-center gap-4 border-b border-[var(--face-3)] pb-4">
        <div className="sunken grid h-[88px] w-[88px] flex-none place-items-center bg-[linear-gradient(#d4e3af,#8ca568)]">
          <span className="pixel text-[52px] leading-none text-ink">VT</span>
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="pixel m-0 text-[40px] font-normal leading-none">{profile.name}</h2>
          <p className="m-0 mt-1 text-ink-soft">{profile.role}</p>
          <span className="mt-2 inline-flex items-center gap-1.5 border border-[var(--accent-ink)] bg-[#e6f5df] px-2 py-0.5 text-[12px] font-bold text-accent-ink">
            <span className="inline-block h-2 w-2 rounded-full bg-[#5fb75a]" /> Open to Work
          </span>
        </div>
      </div>

      <div className="mt-4 grid gap-5 md:grid-cols-[1fr_200px]">
        <div className="space-y-3 leading-relaxed">
          {profile.bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="flex flex-wrap gap-2 pt-1">
            <button className="btn btn--primary" onClick={() => open("projects")}>
              View Projects
            </button>
            <a className="btn" href={profile.resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>

        <div>
          <table className="sunken w-full border-collapse bg-[var(--paper-2)] text-[12px]">
            <tbody>
              {profile.stats.map((s) => (
                <tr key={s.label} className="border-b border-[var(--face-2)] last:border-0">
                  <td className="px-2 py-1.5 text-ink-mute">{s.label}</td>
                  <td className="px-2 py-1.5 text-right font-bold">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="m-0 mt-3 text-[12px] text-ink-mute">Inventory</p>
          <div className="mt-1 flex flex-wrap gap-1">
            {profile.inventory.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
