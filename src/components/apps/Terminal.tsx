"use client";

import React, { useEffect, useRef, useState } from "react";
import { profile, projects, skillCategories, experience } from "@/lib/data";
import type { AppCtx, AppId } from "../os/apps";

const OPENABLE: AppId[] = ["welcome", "about", "projects", "skills", "experience", "contact", "snake"];

export function Terminal({ open, close, active }: AppCtx) {
  const [lines, setLines] = useState<string[]>([
    "VinayakOS 26 [Version 26.0.1]",
    "Type 'help' for a list of commands.",
    "",
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [hIdx, setHIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active) inputRef.current?.focus({ preventScroll: true });
  }, [active]);
  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [lines]);

  const run = (raw: string) => {
    const cmd = raw.trim();
    const [name, ...args] = cmd.split(/\s+/);
    const out: string[] = [];
    switch (name?.toLowerCase()) {
      case "":
        break;
      case "help":
        out.push(
          "  whoami        who is this?",
          "  ls            list projects",
          "  skills        list installed skills",
          "  experience    work history",
          "  open <app>    " + OPENABLE.join(", "),
          "  resume        open resume",
          "  contact       how to reach me",
          "  date          current date",
          "  clear         clear screen",
          "  exit          close terminal"
        );
        break;
      case "whoami":
        out.push(`${profile.name} — ${profile.role}`, profile.tagline);
        break;
      case "ls":
      case "dir":
        projects.forEach((p) => out.push(`  ${p.kind.toUpperCase().padEnd(5)} ${p.title}`));
        out.push(`  ${projects.length} item(s)`);
        break;
      case "skills":
        skillCategories.forEach((c) => out.push(`  [${c.title}] ${c.skills.join(", ")}`));
        break;
      case "experience":
        experience.forEach((e) => out.push(`  ${e.role} @ ${e.org} (${e.period})`));
        break;
      case "open": {
        const app = args[0]?.toLowerCase() as AppId;
        if (OPENABLE.includes(app)) {
          open(app);
          out.push(`Opening ${app}...`);
        } else out.push(`Unknown app '${args[0] ?? ""}'. Try: ${OPENABLE.join(", ")}`);
        break;
      }
      case "resume":
        window.open(profile.resume, "_blank", "noopener");
        out.push("Opening resume in a new tab...");
        break;
      case "contact":
        out.push(`  email     ${profile.email}`, `  github    ${profile.github}`, `  linkedin  ${profile.linkedin}`);
        break;
      case "date":
        out.push(new Date().toString());
        break;
      case "clear":
      case "cls":
        setLines([]);
        return;
      case "exit":
        close();
        return;
      case "sudo":
        out.push(cmd.toLowerCase().includes("hire") ? "Permission granted. Opening Mail..." : "Nice try.");
        if (cmd.toLowerCase().includes("hire")) open("contact");
        break;
      default:
        out.push(`'${name}' is not recognized as a command. Type 'help'.`);
    }
    setLines((l) => [...l, `C:\\Users\\Vinayak> ${raw}`, ...out, ""]);
  };

  return (
    <div
      className="pixel min-h-full cursor-text p-3 text-[19px] leading-[1.2] text-[#8ccf88]"
      onClick={() => inputRef.current?.focus()}
    >
      {lines.map((l, i) => (
        <div key={i} className="whitespace-pre-wrap break-words">
          {l || "\u00a0"}
        </div>
      ))}
      <form
        className="flex"
        onSubmit={(e) => {
          e.preventDefault();
          run(input);
          if (input.trim()) setHistory((h) => [input, ...h]);
          setHIdx(-1);
          setInput("");
        }}
      >
        <span className="whitespace-pre">C:\Users\Vinayak&gt; </span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "ArrowUp" && history.length) {
              e.preventDefault();
              const i = Math.min(hIdx + 1, history.length - 1);
              setHIdx(i);
              setInput(history[i]);
            } else if (e.key === "ArrowDown") {
              e.preventDefault();
              const i = Math.max(hIdx - 1, -1);
              setHIdx(i);
              setInput(i < 0 ? "" : history[i]);
            }
          }}
          className="pixel min-w-0 flex-1 border-0 bg-transparent p-0 text-[19px] text-[#c9f0c5] caret-[#8ccf88] outline-none"
          aria-label="Terminal input"
          autoComplete="off"
          spellCheck={false}
        />
      </form>
      <div ref={endRef} />
    </div>
  );
}
