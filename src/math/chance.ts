/**
 * Returns true with the given percentage chance (0–100).
 *
 * @example
 * chance(25) // ~25% chance to return true
 */
export function chance(percent: number): boolean {
  if (typeof percent !== "number" || isNaN(percent)) {
    throw new TypeError("Chance percent must be a valid number");
  }

  if (percent < 0 || percent > 100) {
    throw new RangeError("Chance percent must be between 0 and 100");
  }

  return Math.random() < percent / 100;
}