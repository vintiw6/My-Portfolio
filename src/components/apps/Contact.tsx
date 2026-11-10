"use client";

import React, { useState } from "react";
import { profile } from "@/lib/data";

export function Contact() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const q = new URLSearchParams();
    if (subject) q.set("subject", subject);
    if (body) q.set("body", body);
    window.location.href = `mailto:${profile.email}?${q.toString().replace(/\+/g, "%20")}`;
  };

  return (
    <form onSubmit={send} className="flex h-full flex-col gap-2 p-3">
      <div className="flex flex-wrap gap-2 border-b border-[var(--face-3)] pb-2">
        <button type="submit" className="btn btn--primary">
          Send
        </button>
        <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="btn" href={profile.resume} target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
      <label className="grid grid-cols-[64px_1fr] items-center gap-2">
        <span>To:</span>
        <input className="field" value={profile.email} readOnly />
      </label>
      <label className="grid grid-cols-[64px_1fr] items-center gap-2">
        <span>Subject:</span>
        <input
          className="field"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Let's build something"
        />
      </label>
      <textarea
        className="field min-h-[140px] flex-1 resize-none"
        aria-label="Message"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Ready to collaborate on the next big project? Write your message here — Send opens your mail client."
      />
    </form>
  );
}
