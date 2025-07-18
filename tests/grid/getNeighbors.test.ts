import { describe, it, expect } from "vitest";
import { getNeighbors } from "@/grid/getNeighbors";

const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

describe("create2D", () => {
  it("get orthogonal neighbors", () => {
    const result = getNeighbors(1, 1, grid);
    expect(result).toEqual([
      { row: 0, col: 1, value: 2 }, // up
      { row: 2, col: 1, value: 8 }, // down
      { row: 1, col: 0, value: 4 }, // left
      { row: 1, col: 2, value: 6 }, // right
    ]);
  });

  it("get diagonal neighbors too", () => {
    const result = getNeighbors(1, 1, grid, true);
    expect(result).toContainEqual({ row: 0, col: 0, value: 1 });
    expect(result).toContainEqual({ row: 0, col: 2, value: 3 });
    expect(result).toContainEqual({ row: 2, col: 0, value: 7 });
    expect(result).toContainEqual({ row: 2, col: 2, value: 9 });
  });

  it("get neighbors on edge", () => {
    const result = getNeighbors(0, 0, grid);
    expect(result).toEqual([
      { row: 1, col: 0, value: 4 },
      { row: 0, col: 1, value: 2 },
    ]);
  });
});