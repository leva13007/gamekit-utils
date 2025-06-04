/**
 * Returns a new array with the same elements in random order (Fisher–Yates).
 * 
 * Note: Only the array structure is copied. Objects inside are not cloned.
 *
 * @example
 * shuffle([1, 2, 3]); // → [2, 3, 1]
 */
export const shuffle = <T>(arr: T[]): T[] => {
  const result = [...arr]; // shallow copy
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}