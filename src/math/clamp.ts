/**
 * Clamps a number between min and max bounds.
 *
 * @example
 * clamp(5, 1, 10)   // → 5
 * clamp(-2, 0, 10)  // → 0
 * clamp(12, 0, 10)  // → 10
 */
export function clamp(val: number, min: number, max: number): number {
  if (min > max) {
    throw new RangeError("clamp: min cannot be greater than max");
  }
  return Math.min(Math.max(val, min), max);
}