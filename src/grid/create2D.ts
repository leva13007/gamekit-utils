/**
 * Creates a 2D array.
 * @param rows The number of rows.
 * @param cols The number of columns.
 * @param value The initial value or a function to generate values.
 * @returns A 2D array filled with the specified value.
 */
export function create2D<T>(
  rows: number,
  cols: number,
  value: T | ((r: number, c: number) => T)
): T[][] {
  const isFn = typeof value === "function";

  return Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) =>
      isFn ? (value as (r: number, c: number) => T)(r, c) : value
    )
  );
}