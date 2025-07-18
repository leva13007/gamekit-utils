/**
 * Normalizes a value t from the range [a, b] to [0, 1].
 *
 * @param a The start of the range.
 * @param b The end of the range.
 * @param t The value to normalize.
 * @returns The normalized value in [0, 1].
 *
 * @example
 * normalize(10, 20, 15) // → 0.5
 * normalize(0, 100, 25) // → 0.25
 */
export function normalize(a: number, b: number, t: number): number {
  if (a === b) throw new RangeError('normalize: a and b cannot be equal');
  return (t - a) / (b - a);
} 