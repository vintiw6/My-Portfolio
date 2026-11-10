import React from "react";

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

// Shared palette for every icon so the set reads as one family.
const C = {
  ink: "#233c29",
  dark: "#304b35",
  mid: "#687a58",
  sage: "#95ab7a",
  leaf: "#8ccf88",
  pale: "#dce4cb",
  paper: "#fffef2",
  cream: "#f3e9b8",
  gold: "#d9b44a",
  goldDark: "#a4822b",
  sky: "#9cc9c2",
  rose: "#d9826b",
  black: "#0e1a11",
};

function Glyph({ name }: { name: IconName }) {
  switch (name) {
    case "logo":
      return (
        <>
          <line x1="8" y1="9" x2="16" y2="22" stroke={C.dark} strokeWidth="2" />
          <line x1="24" y1="9" x2="16" y2="22" stroke={C.dark} strokeWidth="2" />
          <line x1="8" y1="9" x2="24" y2="9" stroke={C.dark} strokeWidth="2" />
          <rect x="4" y="5" width="8" height="8" fill={C.leaf} stroke={C.ink} strokeWidth="1.5" />
          <rect x="20" y="5" width="8" height="8" fill={C.gold} stroke={C.ink} strokeWidth="1.5" />
          <rect x="12" y="19" width="8" height="8" fill={C.sky} stroke={C.ink} strokeWidth="1.5" />
        </>
      );
    case "welcome":
    case "resume":
      return (
        <>
          <path d="M7 3h13l6 6v20H7z" fill={C.paper} stroke={C.ink} strokeWidth="1.5" />
          <path d="M20 3v6h6" fill={C.pale} stroke={C.ink} strokeWidth="1.5" />
          {name === "resume" ? (
            <>
              <rect x="7" y="20" width="19" height="7" fill={C.rose} />
              <rect x="10" y="22" width="2" height="3" fill={C.paper} />
              <rect x="13" y="22" width="2" height="3" fill={C.paper} />
              <rect x="16" y="22" width="2" height="3" fill={C.paper} />
              <rect x="10" y="11" width="9" height="2" fill={C.mid} />
              <rect x="10" y="15" width="12" height="2" fill={C.mid} />
            </>
          ) : (
            <>
              <rect x="10" y="12" width="12" height="2" fill={C.mid} />
              <rect x="10" y="16" width="12" height="2" fill={C.mid} />
              <rect x="10" y="20" width="8" height="2" fill={C.mid} />
            </>
          )}
        </>
      );
    case "about":
      return (
        <>
          <rect x="3" y="7" width="26" height="19" fill={C.cream} stroke={C.ink} strokeWidth="1.5" />
          <rect x="3" y="7" width="26" height="4" fill={C.sage} stroke={C.ink} strokeWidth="1.5" />
          <rect x="6" y="14" width="8" height="9" fill={C.sky} stroke={C.ink} />
          <rect x="8" y="15" width="4" height="4" fill={C.paper} />
          <rect x="7" y="20" width="6" height="3" fill={C.dark} />
          <rect x="16" y="15" width="10" height="2" fill={C.dark} />
          <rect x="16" y="19" width="8" height="2" fill={C.mid} />
        </>
      );
    case "folder":
      return (
        <>
          <path d="M3 8h10l3 3h13v16H3z" fill={C.goldDark} stroke={C.ink} strokeWidth="1.5" />
          <path d="M3 13h26v14H3z" fill={C.gold} stroke={C.ink} strokeWidth="1.5" />
          <rect x="5" y="15" width="22" height="2" fill={C.cream} opacity=".7" />
        </>
      );
    case "skills":
      return (
        <>
          {[9, 14, 19].map((p) => (
            <g key={p}>
              <rect x={p} y="3" width="2" height="4" fill={C.mid} />
              <rect x={p} y="25" width="2" height="4" fill={C.mid} />
              <rect x="3" y={p} width="4" height="2" fill={C.mid} />
              <rect x="25" y={p} width="4" height="2" fill={C.mid} />
            </g>
          ))}
          <rect x="7" y="7" width="18" height="18" fill={C.dark} stroke={C.ink} strokeWidth="1.5" />
          <rect x="11" y="11" width="10" height="10" fill={C.leaf} />
          <rect x="13" y="13" width="6" height="6" fill={C.dark} />
        </>
      );
    case "experience":
      return (
        <>
          <rect x="11" y="5" width="10" height="5" fill="none" stroke={C.ink} strokeWidth="2" />
          <rect x="3" y="9" width="26" height="18" fill={C.rose} stroke={C.ink} strokeWidth="1.5" />
          <rect x="3" y="15" width="26" height="2" fill={C.ink} opacity=".5" />
          <rect x="14" y="14" width="4" height="5" fill={C.gold} stroke={C.ink} />
        </>
      );
    case "mail":
      return (
        <>
          <rect x="3" y="8" width="26" height="18" fill={C.paper} stroke={C.ink} strokeWidth="1.5" />
          <path d="M3 8l13 10L29 8" fill="none" stroke={C.ink} strokeWidth="1.5" />
          <rect x="22" y="10" width="5" height="5" fill={C.rose} />
        </>
      );
    case "snake":
      return (
        <>
          <rect x="3" y="4" width="26" height="24" fill={C.black} stroke={C.ink} strokeWidth="1.5" />
          <rect x="6" y="20" width="12" height="3" fill={C.leaf} />
          <rect x="15" y="12" width="3" height="11" fill={C.leaf} />
          <rect x="15" y="10" width="8" height="3" fill={C.leaf} />
          <rect x="21" y="10" width="2" height="1" fill={C.black} />
          <rect x="24" y="19" width="3" height="3" fill={C.rose} />
        </>
      );
    case "terminal":
      return (
        <>
          <rect x="3" y="5" width="26" height="22" fill={C.black} stroke={C.ink} strokeWidth="1.5" />
          <rect x="3" y="5" width="26" height="4" fill={C.sage} stroke={C.ink} strokeWidth="1.5" />
          <path d="M7 13l4 3-4 3" fill="none" stroke={C.leaf} strokeWidth="2" />
          <rect x="13" y="19" width="7" height="2" fill={C.leaf} />
        </>
      );
    case "file-ml":
    case "file-web":
    case "file-data":
    case "file-game": {
      const band = { "file-ml": C.leaf, "file-web": C.sky, "file-data": C.gold, "file-game": C.rose }[name];
      return (
        <>
          <path d="M7 3h13l6 6v20H7z" fill={C.paper} stroke={C.ink} strokeWidth="1.5" />
          <path d="M20 3v6h6" fill={C.pale} stroke={C.ink} strokeWidth="1.5" />
          <rect x="10" y="13" width="13" height="10" fill={band} stroke={C.ink} />
          {name === "file-ml" && (
            <>
              <rect x="12" y="15" width="2" height="2" fill={C.ink} />
              <rect x="19" y="15" width="2" height="2" fill={C.ink} />
              <rect x="15" y="19" width="3" height="2" fill={C.ink} />
            </>
          )}
          {name === "file-web" && <path d="M13 16l-2 2 2 2M20 16l2 2-2 2" fill="none" stroke={C.ink} strokeWidth="1.5" />}
          {name === "file-data" && (
            <>
              <rect x="12" y="18" width="2" height="4" fill={C.ink} />
              <rect x="15" y="16" width="2" height="6" fill={C.ink} />
              <rect x="18" y="14" width="2" height="8" fill={C.ink} />
            </>
          )}
          {name === "file-game" && (
            <>
              <rect x="13" y="17" width="5" height="2" fill={C.ink} />
              <rect x="14.5" y="15.5" width="2" height="5" fill={C.ink} />
              <rect x="19" y="16" width="2" height="2" fill={C.ink} />
            </>
          )}
        </>
      );
    }
    case "power":
      return (
        <>
          <rect x="4" y="4" width="24" height="24" rx="3" fill={C.rose} stroke={C.ink} strokeWidth="1.5" />
          <path d="M11 11a8 8 0 1 0 10 0" fill="none" stroke={C.paper} strokeWidth="2.5" />
          <rect x="15" y="7" width="2.5" height="9" fill={C.paper} />
        </>
      );
  }
}

export function Icon({ name, size = 32, className }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      shapeRendering="crispEdges"
      className={className}
      aria-hidden="true"
    >
      <Glyph name={name} />
    </svg>
  );
}
