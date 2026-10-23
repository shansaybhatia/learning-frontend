# 🔷 TypeScript

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

Learning TypeScript from the ground up — type basics, interfaces, generics, OOP, and building a React app with full type safety.

---

## 📚 Learning Files (`src/`)

### Basics
| File | Topics |
|------|--------|
| `types.ts` | Type fundamentals |
| `union_any.ts` | Union types and `any` |
| `arrayEnum.ts` | Arrays and enums |

### Object-Oriented
| File | Topics |
|------|--------|
| `objects.ts` | Object types |
| `interface.ts`, `interface2.ts` | Interfaces |
| `oops.ts` | Classes, inheritance, OOP patterns |

### Functions & Advanced
| File | Topics |
|------|--------|
| `function.ts` | Function types and signatures |
| `moreTypes.ts` | Additional type concepts |
| `typeNarrowing.ts` | Type narrowing and type guards |
| `generics.ts` | Generics |

### API & Web
| File | Topics |
|------|--------|
| `fetchReq.ts` | Fetch/HTTP requests (with axios) |
| `webReq.ts` | Web request handling |

---

## ⚛️ React + TypeScript Project (`reactTS/`)

A Vite-powered React app written entirely in TypeScript.

- **Stack:** React 19.2.8, Vite 8.3.0, TypeScript 6.0.2
- **Components:** `Card.tsx`, `ChaiCard.tsx`, `ChaiList.tsx`, `Counter.tsx`, `OrderForm.tsx`
- **Types:** shared type definitions in `types.ts`

---

## ▶️ How to Run

**TypeScript learning files:**

```bash
npm install
npx tsx src/filename.ts
```

**React + TypeScript project:**

```bash
cd reactTS
npm install
npm run dev
```
