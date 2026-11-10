import React from "react";
import { profile } from "@/lib/data";
import type { AppCtx } from "../os/apps";

export function Welcome({ open }: AppCtx) {
  return (
    <div className="p-4 font-['Lucida_Console','Courier_New',monospace] text-[13px] leading-[1.5] text-ink">
      <p className="m-0">WELCOME.TXT</p>
      <p className="m-0 text-ink-mute">==========================================</p>
      <p className="mt-3">
        Hi! You&apos;ve booted into <b className="font-normal text-accent-ink">System 26</b>, the personal
        workstation of {profile.name}.
      </p>
      <p className="mt-3">I&apos;m an {profile.role.replace(" | ", " and ")}. {profile.tagline}</p>
      <p className="mt-3">Things to try:</p>
      <ul className="m-0 list-none p-0">
        <li>
          {"  "}*{" "}
          <button className="link border-0 bg-transparent p-0 font-[inherit] text-[13px] cursor-pointer" onClick={() => open("about")}>
            About_Me.exe
          </button>{" "}
          - who I am
        </li>
        <li>
          {"  "}*{" "}
          <button className="link border-0 bg-transparent p-0 font-[inherit] text-[13px] cursor-pointer" onClick={() => open("projects")}>
            C:\Projects
          </button>{" "}
          - the stuff I&apos;ve built
        </li>
        <li>
          {"  "}*{" "}
          <button className="link border-0 bg-transparent p-0 font-[inherit] text-[13px] cursor-pointer" onClick={() => open("contact")}>
            Mail
          </button>{" "}
          - say hello
        </li>
        <li>
          {"  "}*{" "}
          <button className="link border-0 bg-transparent p-0 font-[inherit] text-[13px] cursor-pointer" onClick={() => open("snake")}>
            Snake.exe
          </button>{" "}
          - take a break
        </li>
      </ul>
      <p className="mt-3 text-ink-mute">
        Tip: double-click desktop icons, drag windows by their title bar, and try the Terminal.
      </p>
    </div>
  );
}
