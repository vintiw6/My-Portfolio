# System 26

Vinayak Tiwari's portfolio, reimagined as a Windows XP-style desktop operating system
(Luna-blue windows, green hill wallpaper, taskbar + Start menu, boot screen).

## Run

```bash
npm install
npm run dev   # http://localhost:3000
```

## Where things live

- `src/lib/data.ts` — all content (profile, projects, skills, experience). Edit this to update the site.
- `src/components/os/` — the "OS": `Desktop` (window manager), `Window`, `Taskbar`, `StartMenu`, `BootScreen`, `Icon` (pixel SVG icons), `apps.tsx` (app registry: titles, sizes, desktop order).
- `src/components/apps/` — one component per app: Welcome, About, Projects (file browser), Skills, Experience, Contact (mail composer), Snake, Terminal.
- `src/app/globals.css` — theme tokens and all window/taskbar chrome.

The boot screen shows once per browser session; Start → Shut Down replays it.
