import { describe, it, expect } from 'vitest';
import { normalize } from '../../src/math/normalize';

describe('normalize', () => {
  it('normalizes value in the middle of the range', () => {
    expect(normalize(10, 20, 15)).toBe(0.5);
  });

  it('normalizes value at the start of the range', () => {
    expect(normalize(0, 100, 0)).toBe(0);
  });

  it('normalizes value at the end of the range', () => {
    expect(normalize(0, 100, 100)).toBe(1);
  });

  it('normalizes value below the range', () => {
    expect(normalize(0, 100, -50)).toBe(-0.5);
  });

  it('normalizes value above the range', () => {
    expect(normalize(0, 100, 150)).toBe(1.5);
  });

  it('throws if a and b are equal', () => {
    expect(() => normalize(5, 5, 5)).toThrow(RangeError);
  });
}); 