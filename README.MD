# ✈️ PurrfectPlanner

A to-do list reimagined as a little travel gate. Every task is a boarding pass, every day you clear is a punch on a ticket stub, and every streak is a journey. No accounts, no servers — everything lives right in your browser.

![status](https://img.shields.io/badge/status-active-3A67D8) ![type](https://img.shields.io/badge/type-single--page%20app-1E2126) ![storage](https://img.shields.io/badge/storage-localStorage-479456)

## ✨ Features

- **Boarding-pass tasks** — every task is its own ticket with subject, time, and status, stamped "boarded" when it's done
- **Ticket-stub calendar & streaks** — punch a hole for every day you clear your tasks and keep the streak alive
- **Departure board** — a split-flap style counter that tracks remaining tasks and your streak at a glance
- **Sticky notes** — free-form "Note Pass" tickets you can drag around and tilt to taste
- **Cat Nap Focus timer** — a pomodoro-style timer (15/25/45/60 min presets) with automatic breaks every 15 minutes
- **Zen mode** — hide the whole sidebar for a clean, distraction-free view
- **Instant search** — filter your tickets by title or subject as you type
- **Subtasks & progress** — break a task into steps and track an x/y progress badge
- **Recurring tasks & class schedule** — set tasks to repeat, or generate a week of tickets straight from your class schedule (with an optional vision-based schedule import)
- **Share your streak card** — turn your streak and open tasks into a downloadable/shareable gradient card
- **Reminders & notifications** — get notified when a task's time is up, with sound + vibration
- **Background music mini player** — play a Spotify/YouTube link while you work, minimized to a floating widget
- **Dark mode & backups** — full dark theme, plus export/import your data as JSON, or clear it entirely

## 🗂 Project structure

```
.
├── index.html      # the main app (tasks, calendar, timer, notes, etc.)
└── welcome.html     # first-run welcome / feature tour page
```

## 🚀 Getting started

No build step, no dependencies to install — it's a static single-page app.

1. Clone the repo
   ```bash
   git clone https://github.com/<your-username>/purrfectplanner.git
   cd purrfectplanner
   ```
2. Open `index.html` directly in your browser, **or** serve it locally:
   ```bash
   npx serve .
   ```
3. First run redirects you to `welcome.html` for a quick tour of the features — click "Open PurrfectPlanner" to jump into the app.

## 💾 Data & privacy

Everything is stored in your browser's `localStorage` — there's no backend and no account system. That means:

- Your tasks, notes, streaks, and preferences stay on your device
- Clearing your browser data or switching browsers/devices will reset the app
- Use **Export data** from the profile menu to back up your data as a JSON file, and **Import** to restore it

## 🛠 Built with

- Plain HTML, CSS, and vanilla JavaScript — no framework
- [Tailwind CSS](https://tailwindcss.com/) (via CDN) for styling
- [Inter](https://fonts.google.com/specimen/Inter) and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts
- Web Audio API for the notification "ping" sound
- `Notification` API + `navigator.vibrate` for task reminders

## 🗺 Roadmap ideas

- [ ] Cloud sync / optional account so streaks survive a device switch
- [ ] More sticky note themes
- [ ] iCal export for class schedules

## 🤝 Contributing

This is a personal side project, but suggestions and pull requests are welcome — open an issue first for anything bigger than a small fix.

## 📄 License

Add your preferred license here (e.g. MIT).

---

<p align="center">Made with 🐾 by <a href="https://github.com/jhoncarlnayao">fuujin</a></p>