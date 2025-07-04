# 📦 CHANGELOG

## 0.1.1 – [2025-07-04]
### Added
- `create2D(rows, cols, fn)` — create a 2D array filled with a default value
- Unit tests for `create2D`

## 0.1.0 – [2025-06-25]
### Added
- `normalize(a, b, t)` — normalize a value to a 0–1 range
- Unit tests for `normalize`

## 0.0.9 – [2025-06-19]
### Added
- `lerp(a, b, t)` — linear interpolation between two values
- Unit tests for `lerp`

## 0.0.8 – [2025-06-10]
### Added
- `clamp(val, min, max)` — clamp a number within bounds
- Unit tests for `clamp`

## 0.0.7 – [2025-06-07]
### Added
- `chance(percent)` — return true with given probability (0–100)
- Unit tests for `chance`

## 0.0.6 – [2025-06-04]
### Added
- `pickN(arr, n)` — return N unique random elements (non-mutating)
- Unit tests for `pickN`

---

## 0.0.5 – [2025-06-04]
### Added
- `shuffle(arr)` — returns a shuffled copy of the array using Fisher–Yates
- Unit tests for `shuffle(arr)`

---

## 0.0.4 – [2025-06-04]
### Added
- Full Rollup-based build system for dual output (CJS + ESM)

---

## 0.0.1 – [2025-06-03]
### Added
- `random(arr)` – pick a random element from array
- Unit test for `random(arr)`
- Project scaffold: TypeScript, Vitest, ESM, zero deps