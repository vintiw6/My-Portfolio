import React from "react";
import { experience } from "@/lib/data";
import { Icon } from "../os/Icon";

export function Experience() {
  return (
    <div className="p-3">
      <div className="sunken overflow-x-auto bg-[var(--paper)]">
        <table className="w-full min-w-[420px] border-collapse text-left">
          <thead>
            <tr>
              {["Role", "Organisation", "Period", "Status"].map((h) => (
                <th
                  key={h}
                  className="bg-face px-2 py-1 font-normal"
                  style={{
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "var(--bevel-hi) var(--bevel-lo) var(--bevel-lo) var(--bevel-hi)",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {experience.map((e) => (
              <tr key={e.role + e.org} className="border-b border-[var(--face-2)]">
                <td className="px-2 py-2.5">
                  <span className="flex items-center gap-2 font-bold">
                    <Icon name="experience" size={16} /> {e.role}
                  </span>
                </td>
                <td className="px-2 py-2.5">{e.org}</td>
                <td className="px-2 py-2.5 whitespace-nowrap">{e.period}</td>
                <td className="px-2 py-2.5">
                  <span
                    className={`chip ${
                      e.status === "Active" ? "!border-[var(--accent-ink)] !bg-[#e3eefc] !text-accent-ink" : ""
                    }`}
                  >
                    {e.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="m-0 mt-3 text-ink-mute">
        {experience.length} entries. Most recently: research internship at IIIT Naya Raipur (completed June 2026).
      </p>
    </div>
  );
}
