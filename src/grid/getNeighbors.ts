export function getNeighbors<T>(
  row: number,
  col: number,
  grid: T[][],
  diagonals = false
): { row: number; col: number; value: T }[] {
  const directions = diagonals
    ? [
      [-1, 0], // up
      [1, 0],  // down
      [0, -1], // left
      [0, 1],  // right
      [-1, -1], // up-left
      [-1, 1],  // up-right
      [1, -1],  // down-left
      [1, 1],   // down-right
    ]
    : [
      [-1, 0], // up
      [1, 0],  // down
      [0, -1], // left
      [0, 1],  // right
    ];

  const neighbors = [];

  for (const [dr, dc] of directions) {
    const r = row + dr;
    const c = col + dc;
    if (grid[r]?.[c] !== undefined) {
      neighbors.push({ row: r, col: c, value: grid[r][c] });
    }
  }

  return neighbors;
}