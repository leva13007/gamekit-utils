import { describe, it, expect } from "vitest";
import { create2D } from "@/grid/create2D";

describe("create2D", () => {
  it("creates 2D array with static value", () => {
    const grid = create2D(2, 3, 7);
    expect(grid).toEqual([
      [7, 7, 7],
      [7, 7, 7],
    ]);
  });

  it("creates 2D array with generator function", () => {
    const grid = create2D(2, 2, (r, c) => `${r},${c}`);
    expect(grid).toEqual([
      ["0,0", "0,1"],
      ["1,0", "1,1"],
    ]);
  });

  it("handles 0 rows", () => {
    const grid = create2D(0, 5, 1);
    expect(grid).toEqual([]);
  });

  it("handles 0 cols", () => {
    const grid = create2D(3, 0, 1);
    expect(grid).toEqual([[], [], []]);
  });
});