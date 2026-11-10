# System 26

Vinayak Tiwari's portfolio, reimagined as a Windows XP-style desktop operating system
(Luna-blue windows, taskbar + Start menu, boot screen, and pixel-art wallpapers
that change on every visit).

## Run

```bash
npm install
npm run dev   # http://localhost:3000
```

## Where things live

- `src/lib/data.ts` — all content (profile, projects, skills, experience). Edit this to update the site.
- `src/components/os/` — the "OS": `Desktop` (window manager), `Window`, `Taskbar`, `StartMenu`, `BootScreen`, `Icon` (XP-style SVG icons), `apps.tsx` (app registry: titles, sizes, desktop order).
- `src/components/apps/` — one component per app: Welcome, About, Projects (file browser), Skills, Experience, Contact (mail composer), Snake, Terminal.
- `src/app/globals.css` — theme tokens and all window/taskbar chrome.
- `public/wallpaper-*.png` — wallpapers; the list lives in `WALLPAPERS` in `Desktop.tsx`.

The boot screen shows once per browser session; Start → Shut Down replays it.
