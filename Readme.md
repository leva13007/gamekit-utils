# 🎮 gamekit-utils

Minimal, fast and useful utilities for randomness, array manipulation and math — built for games, UI logic and generative design.

> Lightweight toolkit for game developers, creative coders, and UI experimenters.

---

## ✅ What's the promise?

We're building a tiny, powerful toolkit for developers who create:
- 🎲 casual games
- 🧠 game logic systems
- ✨ creative procedural content
- 🧩 UI components with randomized behavior

Everything will be:
- [x] 🟢 Written in TypeScript
- [x] 🌳 Fully tree-shakable (ESM only)
- [x] 📦 Zero-dependency
- [ ] 📘 Documented with practical examples
- [ ] 🔬 Covered with unit tests (Vitest)
- [ ] 🧪 100% test coverage
- [ ] 🧠 Typed from day one
- [ ] 🔄 Publish-ready as v1.0.0

---

## 🧪 Core Modules (v0.1)

| Status | Function                 | Description                                |
|--------|--------------------------|--------------------------------------------|
| ✅     | `random(arr)`           | Pick a random element from a non-empty array |
| ⏳     | `shuffle(arr)`          | Shuffle an array using Fisher–Yates        |
| ⏳     | `pickN(arr, n)`         | Pick N unique random elements              |
| ⏳     | `chance(percent)`       | Return true with a probability             |
| ⏳     | `clamp(val, min, max)`  | Clamp number within bounds                 |
| ⏳     | `lerp(a, b, t)`         | Linear interpolation                       |

---

## ⚡ Usage Example

```ts
import { random } from "gamekit-utils";

const enemies = ["orc", "troll", "goblin"];
const chosen = random(enemies);

console.log(chosen); // → e.g., "troll"
```

---

## 📦 Installation

```bash
npm install gamekit-utils
# or
yarn add gamekit-utils
```

---

## 🧪 Core Modules (roadmap)

| Function            | Since   | Tested | Docs | Status  |
|---------------------|---------|--------|------|---------|
| `random(arr)`       | 0.0.1   | ✅     | 🔜   | ✅ Done |
| `shuffle(arr)`      | —       | ❌     | ❌   | ⏳ Planned |
| `pickN(arr, n)`     | —       | ❌     | ❌   | ⏳ Planned |
| `chance(percent)`   | —       | ❌     | ❌   | ⏳ Planned |
| `clamp(val, min, max)` | —    | ❌     | ❌   | ⏳ Planned |
| `lerp(a, b, t)`     | —       | ❌     | ❌   | ⏳ Planned |

---

## 💡 Author

**Oleh Levchenko**  
GitHub: [@leva13007](https://github.com/leva13007)  
Support: [buymeacoffee.com/zloyleva](https://buymeacoffee.com/zloyleva)

---

## 📄 License

MIT © Oleh Levchenko
