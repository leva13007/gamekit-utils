// tests/math/lerp.test.ts
import { describe, it, expect } from "vitest";
import { lerp } from "../../src/math/lerp";

describe("lerp", () => {
  it("returns start when t = 0", () => {
    expect(lerp(10, 20, 0)).toBe(10);
  });

  it("returns end when t = 1", () => {
    expect(lerp(10, 20, 1)).toBe(20);
  });

  it("returns midpoint when t = 0.5", () => {
    expect(lerp(10, 20, 0.5)).toBe(15);
  });

  it("works with negative values", () => {
    expect(lerp(-10, 10, 0.75)).toBe(5);
  });

  it("works with t < 0 and t > 1", () => {
    expect(lerp(10, 20, -0.5)).toBe(5);
    expect(lerp(10, 20, 1.5)).toBe(25);
  });
});