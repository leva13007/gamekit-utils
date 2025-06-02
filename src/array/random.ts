/**
 * Returns a random element from an array.
 * Throws an error if the array is empty.
 * 
 * @example
 * random([1, 2, 3]); // → 2
 */
export const random = <T>(arr: T[]): T => {
  if (!Array.isArray(arr)) {
    throw new TypeError("Expected an array");
  }
  if (arr.length === 0) {
    throw new RangeError("Cannot select a random element from an empty array");
  }
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}