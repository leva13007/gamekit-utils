import { describe, it, expect } from "vitest";
import { clamp } from "@/math/clamp";

describe("clamp", () => {
  it("returns value when within bounds", () => {
    expect(clamp(5, 1, 10)).toBe(5);
  });

  it("returns min when value is below min", () => {
    expect(clamp(-2, 0, 10)).toBe(0);
  });

  it("returns max when value is above max", () => {
    expect(clamp(12, 0, 10)).toBe(10);
  });

  it("works when value equals min or max", () => {
    expect(clamp(0, 0, 10)).toBe(0);
    expect(clamp(10, 0, 10)).toBe(10);
  });

  it("throws when min > max", () => {
    expect(() => clamp(5, 10, 1)).toThrow(RangeError);
  });
});