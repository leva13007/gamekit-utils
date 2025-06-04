import { describe, it, expect } from "vitest";
import { pickN } from "@/array/pickN";

describe("pickN", () => {
  it("returns n unique random elements", () => {
    const input = [1, 2, 3, 4, 5];
    const picked = pickN(input, 3);
    expect(picked).toHaveLength(3);
    picked.forEach((item) => {
      expect(input).toContain(item);
    });
    const unique = new Set(picked);
    expect(unique.size).toBe(3);
  });

  it("returns the full array if n === arr.length", () => {
    const input = [10, 20, 30];
    const picked = pickN(input, 3);
    expect(picked.sort()).toEqual(input.sort());
  });

  it("throws if n > arr.length", () => {
    expect(() => pickN([1, 2], 3)).toThrow(RangeError);
  });

  it("returns empty array if n = 0", () => {
    expect(pickN([1, 2, 3], 0)).toEqual([]);
  });

  it("throws if input is not array", () => {
    // @ts-expect-error
    expect(() => pickN(null, 2)).toThrow(TypeError);
  });
});