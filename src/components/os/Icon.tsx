import React, { useId } from "react";

export type IconName =
  | "logo"
  | "welcome"
  | "about"
  | "folder"
  | "skills"
  | "experience"
  | "mail"
  | "resume"
  | "snake"
  | "terminal"
  | "file-ml"
  | "file-web"
  | "file-data"
  | "file-game"
  | "power";

// Original icons drawn in the Windows XP "Luna" style: soft gradients,
// darker same-hue outlines and a glossy highlight on each object.

type G = (id: string) => React.ReactNode;

const lin = (id: string, stops: [number, string][], x2 = 0, y2 = 1) => (
  <linearGradient id={id} x1="0" y1="0" x2={x2} y2={y2}>
    {stops.map(([o, c]) => (
      <stop key={o} offset={o} stopColor={c} />
    ))}
  </linearGradient>
);
const rad = (id: string, stops: [number, string][], cx = 0.35, cy = 0.3) => (
  <radialGradient id={id} cx={cx} cy={cy} r="0.8">
    {stops.map(([o, c]) => (
      <stop key={o} offset={o} stopColor={c} />
    ))}
  </radialGradient>
);

// A page with a folded corner, reused by the document icons.
const page = (id: string) => (
  <>
    {lin(`${id}pg`, [[0, "#ffffff"], [1, "#dfe6f2"]], 1, 1)}
    <path d="M7 2.5h12.5l6 6v21H7z" fill={`url(#${id}pg)`} stroke="#7d8aa3" />
    <path d="M19.5 2.5v6h6" fill="#eef2f8" stroke="#7d8aa3" strokeLinejoin="round" />
  </>
);

const GLYPHS: Record<IconName, G> = {
  logo: (id) => (
    <>
      {rad(`${id}a`, [[0, "#fffbe0"], [0.45, "#ffd23f"], [1, "#e88a0c"]], 0.5, 0.5)}
      <path
        d="M16 1.5 19.2 12.8 30.5 16 19.2 19.2 16 30.5 12.8 19.2 1.5 16 12.8 12.8z"
        fill={`url(#${id}a)`}
        stroke="#b85f08"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="3" fill="#ffffff" opacity="0.9" />
    </>
  ),
  welcome: (id) => (
    <>
      {lin(`${id}b`, [[0, "#6aa5f7"], [1, "#2459c8"]])}
      <rect x="5.5" y="4.5" width="21" height="25" rx="1.5" fill="#fffef6" stroke="#7d8aa3" />
      <rect x="5.5" y="4.5" width="21" height="6" rx="1.5" fill={`url(#${id}b)`} stroke="#1f4ca8" />
      {[8, 12, 16, 20, 24].map((x) => (
        <rect key={x} x={x - 0.75} y="2" width="1.5" height="5" rx="0.75" fill="#9aa4b6" stroke="#5b6478" strokeWidth="0.5" />
      ))}
      {[14, 17.5, 21, 24.5].map((y, i) => (
        <rect key={y} x="9" y={y} width={i % 2 ? 10 : 14} height="1.4" fill="#8592aa" />
      ))}
    </>
  ),
  about: (id) => (
    <>
      {rad(`${id}s`, [[0, "#ffe2c2"], [1, "#e8a874"]])}
      {lin(`${id}c`, [[0, "#6db0ff"], [1, "#1f5fd0"]])}
      {lin(`${id}h`, [[0, "#8a5a32"], [1, "#4a2c14"]])}
      <path d="M5 30c0-7 5-11 11-11s11 4 11 11z" fill={`url(#${id}c)`} stroke="#18449c" />
      <path d="M13 19.5l3 4 3-4" fill="#ffffff" stroke="#18449c" strokeWidth="0.8" />
      <circle cx="16" cy="12" r="7" fill={`url(#${id}s)`} stroke="#b07448" />
      <path d="M9 11c0-5 3.5-7 7-7s7 2 7 7c-2-2-5-3-7-3s-5 1-7 3z" fill={`url(#${id}h)`} stroke="#3a220e" strokeWidth="0.8" />
      <ellipse cx="13" cy="9" rx="2" ry="1" fill="#ffffff" opacity="0.35" />
    </>
  ),
  folder: (id) => (
    <>
      {lin(`${id}k`, [[0, "#f7d774"], [1, "#d9a521"]])}
      {lin(`${id}f`, [[0, "#ffef9e"], [0.5, "#fbd35a"], [1, "#e9ad25"]])}
      <path d="M2.5 7.5a1 1 0 0 1 1-1h8l2.5 2.5h14a1 1 0 0 1 1 1v17h-26.5z" fill={`url(#${id}k)`} stroke="#b07d12" />
      <rect x="5" y="9.5" width="20" height="10" fill="#ffffff" stroke="#c9cfdb" strokeWidth="0.6" />
      <path d="M2.5 27.5 5 13.5h25l-2.5 14z" fill={`url(#${id}f)`} stroke="#b07d12" strokeLinejoin="round" />
      <path d="M6 15h22.5" stroke="#fff6c8" strokeWidth="1" opacity="0.9" />
    </>
  ),
  skills: (id) => (
    <>
      {rad(`${id}g`, [[0, "#e9eef7"], [0.6, "#a9b6cc"], [1, "#6e7d98"]])}
      <g transform="translate(16 16)">
        {Array.from({ length: 8 }).map((_, i) => (
          <rect key={i} x="-2.6" y="-14" width="5.2" height="7" rx="1" fill={`url(#${id}g)`} stroke="#4d5a73" transform={`rotate(${i * 45})`} />
        ))}
        <circle r="10" fill={`url(#${id}g)`} stroke="#4d5a73" />
        <circle r="4" fill="#3a6fe0" stroke="#1d3f9a" />
        <circle cx="-1.3" cy="-1.3" r="1.3" fill="#ffffff" opacity="0.7" />
      </g>
    </>
  ),
  experience: (id) => (
    <>
      {lin(`${id}l`, [[0, "#c98b4f"], [0.5, "#a4642c"], [1, "#7a4519"]])}
      {lin(`${id}m`, [[0, "#ffe680"], [1, "#d4a017"]])}
      <path d="M11.5 9V6.5a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5V9" fill="none" stroke="#5a3210" strokeWidth="2" />
      <rect x="2.5" y="9" width="27" height="18.5" rx="2" fill={`url(#${id}l)`} stroke="#5a3210" />
      <path d="M2.5 16h27" stroke="#5a3210" strokeWidth="1" />
      <path d="M3.5 10.5h25" stroke="#e2a874" strokeWidth="1" opacity="0.8" />
      <rect x="13.5" y="14" width="5" height="5" rx="1" fill={`url(#${id}m)`} stroke="#8a6a0a" />
    </>
  ),
  mail: (id) => (
    <>
      {lin(`${id}e`, [[0, "#ffffff"], [1, "#d8e0ee"]])}
      {lin(`${id}t`, [[0, "#7db5ff"], [1, "#2a63d6"]])}
      <rect x="2.5" y="7.5" width="27" height="19" rx="1.5" fill={`url(#${id}e)`} stroke="#6f7f9c" />
      <path d="M2.8 8 16 18.5 29.2 8" fill="none" stroke="#6f7f9c" strokeLinejoin="round" />
      <path d="M2.8 26 12 17M29.2 26 20 17" stroke="#a5b1c7" />
      <rect x="22" y="9.5" width="5.5" height="6" fill={`url(#${id}t)`} stroke="#1f4ca8" strokeWidth="0.8" />
    </>
  ),
  resume: (id) => (
    <>
      {page(id)}
      {lin(`${id}r`, [[0, "#ff6a55"], [1, "#c51f12"]])}
      {[11, 14, 17].map((y, i) => (
        <rect key={y} x="10" y={y} width={i === 1 ? 9 : 12} height="1.4" fill="#8592aa" />
      ))}
      <rect x="4" y="20" width="17" height="7.5" rx="1.5" fill={`url(#${id}r)`} stroke="#8e140a" />
      <rect x="6" y="21" width="13" height="2" rx="1" fill="#ffffff" opacity="0.35" />
    </>
  ),
  snake: (id) => (
    <>
      {lin(`${id}p`, [[0, "#d9dfea"], [0.55, "#a8b2c5"], [1, "#7c879e"]])}
      <path
        d="M9 9.5h14c4 0 6.5 3 6.5 7.5 0 5-1.6 8.5-4 8.5-2.2 0-3.5-3.5-5.5-3.5h-8c-2 0-3.3 3.5-5.5 3.5-2.4 0-4-3.5-4-8.5C2.5 12.5 5 9.5 9 9.5z"
        fill={`url(#${id}p)`}
        stroke="#4d5a73"
      />
      <path d="M8 13v6M5 16h6" stroke="#2c3446" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="23.5" cy="13.8" r="1.8" fill="#e8402a" stroke="#8e140a" strokeWidth="0.6" />
      <circle cx="26.5" cy="16.8" r="1.8" fill="#3cc43c" stroke="#1d7a2a" strokeWidth="0.6" />
      <circle cx="20.5" cy="16.8" r="1.8" fill="#2f6fe4" stroke="#1c3f9a" strokeWidth="0.6" />
      <circle cx="23.5" cy="19.8" r="1.8" fill="#ffd33d" stroke="#b0820e" strokeWidth="0.6" />
      <path d="M9 11h14" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
    </>
  ),
  terminal: (id) => (
    <>
      {lin(`${id}w`, [[0, "#3d95ff"], [1, "#0042c9"]])}
      <rect x="2.5" y="4.5" width="27" height="23" rx="2" fill="#0b0b0b" stroke="#00309c" />
      <path d="M2.5 6.5a2 2 0 0 1 2-2h23a2 2 0 0 1 2 2v3h-27z" fill={`url(#${id}w)`} stroke="#00309c" />
      <path d="M6.5 14l4 3-4 3" fill="none" stroke="#c0c0c0" strokeWidth="1.8" strokeLinejoin="round" />
      <rect x="12.5" y="19" width="7" height="1.8" fill="#c0c0c0" />
    </>
  ),
  "file-ml": (id) => (
    <>
      {page(id)}
      {rad(`${id}n`, [[0, "#c9ffb0"], [1, "#2fa62f"]])}
      <path d="M11 22.5 16 14.5 21 22.5M11 22.5h10" stroke="#1d7a2a" strokeWidth="1.2" fill="none" />
      {[
        [16, 14.5],
        [11, 22.5],
        [21, 22.5],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" fill={`url(#${id}n)`} stroke="#1d7a2a" />
      ))}
    </>
  ),
  "file-web": (id) => (
    <>
      {page(id)}
      {rad(`${id}o`, [[0, "#c4e6ff"], [0.6, "#3c8df0"], [1, "#1a4fbf"]])}
      <circle cx="16" cy="18.5" r="7" fill={`url(#${id}o)`} stroke="#173f9a" />
      <path d="M12 14.5c2 1 2 3 4 3s1 3 3 3.5M10.5 20c2 0 3 1.5 3 3.5" fill="none" stroke="#3cc43c" strokeWidth="1.6" />
      <ellipse cx="14" cy="15" rx="2.5" ry="1.2" fill="#ffffff" opacity="0.5" />
    </>
  ),
  "file-data": (id) => (
    <>
      {page(id)}
      {lin(`${id}1`, [[0, "#7db5ff"], [1, "#2459c8"]])}
      {lin(`${id}2`, [[0, "#8fe07a"], [1, "#2e9a2a"]])}
      {lin(`${id}3`, [[0, "#ffd36a"], [1, "#e08a10"]])}
      <rect x="10" y="18" width="3.5" height="7" fill={`url(#${id}1)`} stroke="#1c3f9a" strokeWidth="0.6" />
      <rect x="14.5" y="13" width="3.5" height="12" fill={`url(#${id}2)`} stroke="#1d7a2a" strokeWidth="0.6" />
      <rect x="19" y="15.5" width="3.5" height="9.5" fill={`url(#${id}3)`} stroke="#9a5a08" strokeWidth="0.6" />
      <path d="M9 25.5h15" stroke="#5b6478" />
    </>
  ),
  "file-game": (id) => (
    <>
      {page(id)}
      {lin(`${id}q`, [[0, "#ff9bb5"], [1, "#d63a6a"]])}
      <rect x="9.5" y="14" width="13.5" height="9" rx="4" fill={`url(#${id}q)`} stroke="#8e1a40" />
      <path d="M13 16.5v4M11 18.5h4" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="19" cy="17.5" r="1" fill="#ffffff" />
      <circle cx="20.5" cy="19.7" r="1" fill="#ffffff" />
    </>
  ),
  power: (id) => (
    <>
      {lin(`${id}x`, [[0, "#ff8c6b"], [0.5, "#e2401f"], [1, "#a8200c"]])}
      <rect x="3.5" y="3.5" width="25" height="25" rx="5" fill={`url(#${id}x)`} stroke="#7a1606" />
      <path d="M11 10.5a8 8 0 1 0 10 0" fill="none" stroke="#ffffff" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M16 7.5v8" stroke="#ffffff" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M6 6.5h20" stroke="#ffffff" strokeWidth="1.2" opacity="0.45" strokeLinecap="round" />
    </>
  ),
};

export function Icon({ name, size = 32, className }: { name: IconName; size?: number; className?: string }) {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} className={className} aria-hidden="true">
      {GLYPHS[name](id)}
    </svg>
  );
}
