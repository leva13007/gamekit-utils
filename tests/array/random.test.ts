import { describe, expect, it } from "vitest";
import { random } from "@/array/random";

describe("random", () => {
  it("returns one of the elements from the array", () => {
    const values = ["a", "b", "c"];
    const result = random(values);
    expect(values).toContain(result);
  });

  it("throws on empty array", () => {
    expect(() => random([])).toThrow(RangeError);
  });

  it("throws if input is not an array", () => {
    // @ts-expect-error intentionally wrong
    expect(() => random(null)).toThrow(TypeError);
  });
});