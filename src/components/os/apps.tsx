import React from "react";
import type { IconName } from "./Icon";
import { Welcome } from "../apps/Welcome";
import { About } from "../apps/About";
import { Projects } from "../apps/Projects";
import { Skills } from "../apps/Skills";
import { Experience } from "../apps/Experience";
import { Contact } from "../apps/Contact";
import { Snake } from "../apps/Snake";
import { Terminal } from "../apps/Terminal";
import { projects } from "@/lib/data";

export type AppId =
  | "welcome"
  | "about"
  | "projects"
  | "skills"
  | "experience"
  | "contact"
  | "snake"
  | "terminal";

export type AppCtx = {
  open: (id: AppId) => void;
  close: () => void;
  active: boolean;
};

type AppDef = {
  title: string;
  label: string; // desktop icon label
  icon: IconName;
  w: number;
  h: number;
  menu?: string[];
  bodyClass?: string;
  status?: React.ReactNode;
  Component: React.ComponentType<AppCtx>;
};

export const APPS: Record<AppId, AppDef> = {
  welcome: {
    title: "Welcome.txt - Notepad",
    label: "Welcome.txt",
    icon: "welcome",
    w: 560,
    h: 470,
    menu: ["File", "Edit", "Search", "Help"],
    Component: Welcome,
  },
  about: {
    title: "About Me",
    label: "About Me",
    icon: "about",
    w: 680,
    h: 520,
    status: (
      <>
        <span>Profile loaded</span>
        <span>Open to work</span>
      </>
    ),
    Component: About,
  },
  projects: {
    title: "C:\\Projects",
    label: "Projects",
    icon: "folder",
    w: 640,
    h: 460,
    menu: ["File", "Edit", "View", "Go", "Help"],
    bodyClass: "!overflow-hidden",
    Component: Projects,
  },
  skills: {
    title: "System Properties - Skills",
    label: "Skills",
    icon: "skills",
    w: 480,
    h: 580,
    menu: [],
    bodyClass: "window__body--face",
    Component: Skills,
  },
  experience: {
    title: "Experience Log",
    label: "Experience",
    icon: "experience",
    w: 600,
    h: 320,
    bodyClass: "window__body--face",
    Component: Experience,
  },
  contact: {
    title: "New Message - Mail",
    label: "Contact",
    icon: "mail",
    w: 560,
    h: 440,
    menu: ["File", "Edit", "Insert", "Help"],
    bodyClass: "window__body--face",
    Component: Contact,
  },
  snake: {
    title: "Snake.exe",
    label: "Snake.exe",
    icon: "snake",
    w: 440,
    h: 560,
    menu: ["Game", "Help"],
    bodyClass: "window__body--dark",
    Component: Snake,
  },
  terminal: {
    title: "Command Prompt",
    label: "Terminal",
    icon: "terminal",
    w: 620,
    h: 400,
    menu: [],
    bodyClass: "window__body--dark",
    status: (
      <>
        <span>{projects.length} projects indexed</span>
        <span>Type &apos;help&apos;</span>
      </>
    ),
    Component: Terminal,
  },
};

export const DESKTOP: (AppId | "resume")[] = [
  "welcome",
  "about",
  "projects",
  "skills",
  "experience",
  "contact",
  "resume",
  "snake",
  "terminal",
];
