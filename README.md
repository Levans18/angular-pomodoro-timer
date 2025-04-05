# ⏳ Angular Pomodoro Timer

A stylish and customizable Pomodoro Timer built with Angular. Includes support for multiple themes (Pixel & Clean), task tracking, auto-switching between focus/break sessions, and history saved to `localStorage`.

---

## 🚀 Features

- ⏱️ Start, pause, and reset the timer
- 🎯 Custom task names for each session (coming soon)
- 🔁 Automatic switching between focus and break cycles (coming soon)
- 🎨 Theme support (Pixel Retro & Clean Light) (coming soon)
- 💾 Saves session history and settings to localStorage (coming soon)
- 🔔 Optional sound alerts and visual feedback (coming soon)

## 📁 Project Structure

```
src/app/
├── components/
│   ├── timer/            # Timer UI and logic
│   ├── settings/         # Theme and duration settings *To Do*
│   └── history/          # Completed Pomodoro history *To Do*
├── services/
│   ├── timer.service.ts  # Timer state and logic
│   └── theme.service.ts  # Theme switching logic
├── models/
│   └── pomodoro-session.ts *To Do*
├── app.component.ts
├── app.module.ts
```

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/angular-pomodoro-timer.git
cd angular-pomodoro-timer
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
ng serve
```

Open `http://localhost:4200` in your browser.

---

## 🎨 Themes

You can switch between:
- 🎮 **Pixel Theme**: Retro, arcade-inspired look with 8-bit font and colors
- 🧼 **Clean Theme**: Minimal light theme inspired by modern apps

Your selected theme is saved to localStorage and persists across sessions.

---

## ✅ Roadmap

- [x] Timer control (start/pause/reset)
- [ ] Add Home Page
- [ ] Task naming
- [ ] History log
- [ ] Theme switching
- [ ] Sound and visual alerts
- [ ] PWA support
- [ ] Daily/weekly progress charts

---
