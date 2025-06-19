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
| ✅     | `shuffle(arr)`          | Shuffle an array using Fisher–Yates        |
| ✅     | `pickN(arr, n)`         | Pick N unique random elements              |
| ✅     | `chance(percent)`       | Return true with a probability             |
| ✅     | `clamp(val, min, max)`  | Clamp number within bounds                 |
| ✅     | `lerp(a, b, t)`         | Linear interpolation                       |
| ⏳     | `normalize(a, b, t)`    | Normalize a value to a 0-1 range          |

---

## ⚡ Usage Examples

### 🎲 random

Picks a random element from a non-empty array.

```ts
import { random } from "gamekit-utils";

const enemies = ["orc", "troll", "goblin"];
const chosen: string = random(enemies);

console.log(chosen); // → e.g., "troll"
```

### 🔀 shuffle

Returns a shuffled copy of the original array (non-mutating).

```ts
import { shuffle } from "gamekit-utils";

const deck = [1, 2, 3, 4, 5];
const shuffled: number[] = shuffle(deck);

console.log(shuffled); // → e.g., [4, 1, 5, 3, 2]
console.log(deck);     // → original remains: [1, 2, 3, 4, 5]
```

### 🎯 pickN

Returns N unique random elements from the array (non-mutating).

```ts
import { pickN } from "gamekit-utils";

const names = ["Alice", "Bob", "Charlie", "Dave"];
const group = pickN(names, 2); // → e.g., ["Charlie", "Alice"]
```

### 🎰 chance

Returns true with a given probability (0–100%).

```ts
import { chance } from "gamekit-utils";

if (chance(30)) {
  console.log("You got lucky!"); // ~30% chance
}
```

### 📉 clamp

Clamps a number between min and max bounds.

```ts
import { clamp } from "gamekit-utils";

const hp = clamp(player.hp, 0, 100);
console.log(hp); // → between 0 and 100
```

### 📏 lerp

Returns a value interpolated between two numbers based on a ratio.

```ts
import { lerp } from "gamekit-utils";

const value = lerp(10, 20, 0.5);
console.log(value); // → 15
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
| `random(arr)`           | 0.0.1   | ✅     | ✅    | ✅ Done |
| `shuffle(arr)`          | 0.0.5   | ✅     | ✅    | ✅ Done |
| `pickN(arr, n)`         | 0.0.6   | ✅     | ✅    | ✅ Done |
| `chance(percent)`       | 0.0.7   | ✅     | ✅    | ✅ Done |
| `clamp(val, min, max)`  | 0.0.8   | ✅     | ✅    | ✅ Done |
| `lerp(a, b, t)`         | 0.0.9   | ✅     | ✅    | ✅ Done |
| `normalize(a, b, t)`    | —       | ❌     | ❌   | ⏳ Planned |

---

## 💡 Author

**Oleh Levchenko**  
GitHub: [@leva13007](https://github.com/leva13007)  
Support: [buymeacoffee.com/zloyleva](https://buymeacoffee.com/zloyleva)

---

## 📄 License

MIT © Oleh Levchenko
