# ⚡ Vite + React Starter

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)

A lightweight, modern React exploration project built with [Vite](https://vite.dev/) to compare modern ESM-based tooling with traditional bundlers.

---

## 📚 What I Practiced

- **Vite Tooling:** Lightning-fast local development server, instant Hot Module Replacement (HMR), and streamlined project footprint.
- **JSX Architecture:** Using `.jsx` extensions, functional component declarations, and fragment composition.
- **Component Separation:** Modular component structure with `welcome.jsx` imported into `App.jsx`.

---

## 📁 Key Files

```
01viteReact/
├── public/
├── src/
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # ReactDOM.createRoot entry point
│   └── welcome.jsx     # Reusable welcome component
├── index.html          # Native ESM entry HTML
├── vite.config.js      # Vite configuration with @vitejs/plugin-react
└── package.json
```

---

## 🚀 Running the App

```bash
# 1. Install dependencies
npm install

# 2. Launch Vite dev server
npm run dev
```

Visit the local URL shown in your terminal (typically `http://localhost:5173`).

---

<p align="center">
  📂 <strong><a href="../readme.md">← Back to React Overview</a></strong> | <strong><a href="../../README.md">← Repository Home</a></strong>
</p>
