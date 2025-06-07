import { describe, it, expect } from "vitest";
import { chance } from "@/math/chance";

describe("chance", () => {
  it("returns boolean", () => {
    const result = chance(50);
    expect(typeof result).toBe("boolean");
  });

  it("returns true only ~25% of time (statistical)", () => {
    let trues = 0;
    for (let i = 0; i < 1000; i++) {
      if (chance(25)) trues++;
    }
    expect(trues).toBeGreaterThan(150); // ~15% мінімум
    expect(trues).toBeLessThan(350);    // ~35% максимум
  });

  it("throws on negative percent", () => {
    expect(() => chance(-1)).toThrow(RangeError);
  });

  it("throws on percent > 100", () => {
    expect(() => chance(150)).toThrow(RangeError);
  });

  it("throws on non-number input", () => {
    // @ts-expect-error
    expect(() => chance("50")).toThrow(TypeError);
  });
});