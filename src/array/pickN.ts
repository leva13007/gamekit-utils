import { shuffle } from "./shuffle";

/**
 * Picks `n` unique random elements from the array.
 * 
 * @throws if n > arr.length
 */
export function pickN<T>(arr: T[], n: number): T[] {
  if (!Array.isArray(arr)) {
    throw new TypeError("Expected an array");
  }
  if (n > arr.length) {
    throw new RangeError("Cannot pick more elements than array contains");
  }
  return shuffle(arr).slice(0, n);
}