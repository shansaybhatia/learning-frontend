# 🔷 Chai Shop & Counter (React + TypeScript + Vite)

![React](https://img.shields.io/badge/React_19-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)

A hands-on React application written in TypeScript and bundled with Vite. This project demonstrates strictly-typed component interfaces, typed props, event handlers, and state management.

---

## ✨ Features & Components

- **☕ ChaiCard (`components/ChaiCard.tsx`):** Demonstrates strictly typed props (`name: string`, `price: number`) rendering menu items.
- **🔢 Counter (`components/Counter.tsx`):** Demonstrates interactive typed state using `useState<number>` with increment/decrement handlers.
- **📋 ChaiList (`components/ChaiList.tsx`):** Demonstrates rendering array collections typed by the `Chai` data model (`Chai[]`).
- **📝 OrderForm (`components/OrderForm.tsx`):** Demonstrates typed form submission callbacks `(order: { name: string; cups: number }) => void`.
- **🎴 Card (`components/Card.tsx`):** Demonstrates generic container components accepting typed `ReactNode` slots.
- **📐 Shared Types (`types.ts`):** Centralized TypeScript interfaces for consistent data contracts across the application.

---

## 📁 Project Structure

```
reactTS/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Card.tsx        # Reusable slot card component
│   │   ├── ChaiCard.tsx    # Single chai presentation card
│   │   ├── ChaiList.tsx    # Typed list of chai menu items
│   │   ├── Counter.tsx     # Stateful counter component
│   │   └── OrderForm.tsx   # Typed ordering form
│   ├── App.css
│   ├── App.tsx             # Main dashboard integrating all components
│   ├── index.css
│   ├── main.tsx            # Application entry point
│   └── types.ts            # Data models and interfaces
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Running the Project

```bash
# 1. Install dependencies
npm install

# 2. Run the Vite development server
npm run dev

# 3. Typecheck and build
npm run build
```

---

<p align="center">
  📂 <strong><a href="../README.md">← Back to TypeScript Overview</a></strong> | <strong><a href="../../README.md">← Repository Home</a></strong>
</p>
