# 📋 Task Flow — Accessible To-Do List Application

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript_ES6-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)
![Accessibility](https://img.shields.io/badge/a11y-WCAG_AA-green?style=flat)

An accessible, mobile-first task management web application built with **Vanilla JavaScript (Object-Oriented Programming)** and **modular Sass**. Designed with a focus on usability, screen reader support, seamless local data persistence, and clean UI micro-interactions.

---

<h2 align="center">
  🔗 <a href="https://shansay-todo-list.netlify.app/">View Live Application →</a>
</h2>

---

## ✨ Features & Highlights

- **📱 Mobile-First & Responsive:** Crafted from the ground up for mobile devices, scaling fluidly across phone screens, tablets, and desktops using CSS custom properties and `clamp()`.
- **💾 Persistent Data Storage:** Tasks are automatically saved to `localStorage` under `myTodoList`, preserving your to-do items across browser sessions and page reloads.
- **♿ Screen Reader & a11y First:**
  - Dedicated `aria-live="polite"` feedback region announcing item creation, completion status changes, and deletion events.
  - Descriptive `aria-label` tags on all interactive buttons and inputs.
  - Keyboard-accessible focus states (`:focus-visible`) with high-visibility focus rings.
  - Standard touch target sizes (minimum 44×44px) for touch devices.
- **🌓 Dark & Light Theme Modes:** One-click theme switcher that automatically detects and honors user system color preferences (`prefers-color-scheme`) while remembering manual overrides.
- **📊 Real-Time Progress Bar:** Visual completion meter dynamically calculating progress (`0%` to `100%`) with accessible `role="progressbar"` attributes.
- **🔍 Filter Views:** Instant filtering by **All**, **Active**, and **Completed** tasks with individual count badges.
- **⚡ Instant Deletion & Completion:**
  - Check off items with custom animated checkboxes.
  - Dedicated delete action on each task item for direct removal.
  - "Clear All" with confirmation safeguard.
- **🧩 OOP Architecture:** Clean separation of concerns using ES6 classes (`ToDoList` and `ToDoItem`).

---

## 🛠️ Tech Stack & Architecture

- **Semantic HTML5:** `<header>`, `<main>`, `<section>`, `<form>`, `<nav>`, `<input>`, `<button>`, and ARIA attributes (`aria-live`, `aria-label`, `aria-pressed`, `role="progressbar"`).
- **Modern Sass (SCSS):**
  - Modular partials: `_base.scss` (tokens & theme maps), `_sharedclass.scss` (buttons, progress, brand), `_newItemEntry.scss` (glassmorphic sticky input bar), and `_listContainer.scss` (card & item animations).
  - Built using Dart Sass with clean compiled output in `css/style.css`.
- **Vanilla JavaScript (ES6 Modules):**
  - `todoitem.js` — Class model defining task data, completion state, and timestamps.
  - `todolist.js` — Class model encapsulating task collection operations, state changes, and metrics calculations.
  - `main.js` — Controller coordinating DOM interactions, persistent storage sync, filter views, and assistive announcements.

---

## 📁 Project Structure

```
to-do-list/
├── css/
│   ├── style.css           # Compiled production CSS
│   └── style.css.map
├── js/
│   ├── main.js             # Application controller & DOM event handling
│   ├── todoitem.js         # ToDoItem class definition
│   └── todolist.js         # ToDoList collection model class
├── sass/
│   ├── _base.scss          # Design tokens, variables & dark theme definitions
│   ├── _listContainer.scss # Task list, items, filters & empty state styles
│   ├── _newItemEntry.scss  # Task input form styling
│   ├── _sharedclass.scss   # Buttons, headers, progress bar & shared utilities
│   └── style.scss          # Primary Sass manifest
├── index.html              # Main application markup
├── package.json            # Sass build scripts
└── readme.md               # Project documentation
```

---

## 🚀 Getting Started & Local Setup

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine (to compile Sass).

### Local Execution

```bash
# 1. Navigate to the project directory
cd projects/to-do-list

# 2. Install dependencies (Sass compiler)
npm install

# 3. Compile Sass to CSS (one-time build)
npm run build:sass

# Or run in watch mode during development:
npm run compile:sass

# 4. Open in browser
# Open index.html directly in your web browser (or use VS Code Live Server)
```

---

## 📚 Key Concepts Practiced

1. **Object-Oriented JavaScript:** Designing state models with getters, setters, and encapsulated array manipulation.
2. **Local Storage Synchronization:** Writing safe JSON serialization and deserialization routines with backward-compatibility fallbacks.
3. **Inclusive Web Design:** Structuring dynamic web applications so screen readers receive real-time status updates without confusing focus shifts.
4. **Component-Based CSS Architecture:** Leveraging modern Sass features (`@use`, CSS custom properties, responsive mixins) to maintain design consistency across light and dark modes.

---

<p align="center">
  📂 <strong><a href="../readme.md">← Back to Projects Hub</a></strong> | <strong><a href="../../README.md">← Repository Home</a></strong>
</p>
