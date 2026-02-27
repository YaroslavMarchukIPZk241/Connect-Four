
# React Connect Four

A modern browser implementation of the classic **Connect Four** strategy game built with **React**.
The project demonstrates component‑oriented architecture, reusable UI patterns, custom hooks, and state‑driven application logic.

---

## 🎯 Project Overview

**React Connect Four** is an academic frontend project created to practice:

- Component‑Oriented Programming
- React Hooks & Context API
- State management patterns
- Modular architecture
- UI interaction design
- Documentation practices

Players compete by dropping tokens into a dynamic grid and attempting to connect four in a row vertically, horizontally, or diagonally.

---

## 🧱 Architecture

The application follows a clean layered structure:

```
src/
 ├── components/     Reusable UI components
 ├── pages/          Application screens
 ├── hooks/          Custom React hooks
 ├── context/        Global settings management
 ├── utils/          Helper & storage logic
 └── main/           App bootstrap
```

### Key Technical Concepts

- Component-based UI structure
- Custom hooks (`useGameLogic`, `usePageState`)
- Global settings via Context API
- LocalStorage persistence
- Modal-driven interaction flow
- Separation of logic and presentation

---

## 🚀 Getting Started

### 1. Clone repository

```bash
git clone https://github.com/YaroslavMarchukIPZk241/Connect-Four.git
```

### 2. Open project folder

```bash
cd connect-four
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run development server

```bash
npm run dev
```

Application will start locally in your browser.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run storybook` | Open component showcase |
| `npm run docs` | Generate technical documentation |

---

## 🎮 Features

The current implementation includes:

- Dynamic game board rendering
- Automatic win detection logic
- Interactive player turns
- End‑game result modal
- Configurable game settings
- Persistent user preferences (LocalStorage)
- Page navigation flow
- Reusable UI components

---

## ⚙️ Game Logic

Game behavior is handled through custom hooks:

- **useGameLogic** — token placement, turn control, win calculation
- **usePageState** — application navigation state
- **SettingsContext** — global configuration storage

This separation ensures maintainable and scalable architecture.

---

## 📚 Documentation

Technical documentation can be generated automatically from source comments:

```bash
npm run docs
```

After generation, open:

```
/docs/index.html
```

in your browser.

---

## 🧪 Educational Goals

This project demonstrates:

- Practical React application structure
- Clean code organization
- Reusable component design
- State-driven UI development
- Frontend documentation workflow

---

## ⚖️ License

This project is licensed under the Apache License 2.0 — see the LICENSE file for details.

---

## 👨‍🎓 Author

**Student:** Yaroslav Marchuk 
**Course:** Software standardization and documentation
**Year:** 2026

---

## 💡 Future Improvements

Possible extensions:

- AI opponent
- Multiplayer mode
- Animations & sound effects
- Score history system
- Mobile UI optimization

---
## Privacy Policy
See PRIVACY_POLICY.md for GDPR compliance and usage terms.

⭐ Academic demonstration project.
