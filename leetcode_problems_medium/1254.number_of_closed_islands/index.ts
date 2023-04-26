function closedIsland(grid: number[][]): number {
  const row: number = grid.length - 1;
  const column: number = grid[0].length - 1;

  let flood = (r: number, c: number) => {
    if (grid[r][c] === 1) return;

    grid[r][c] = 1;

    if (r > 0) flood(r - 1, c);
    if (c > 0) flood(r, c - 1);
    if (r < row) flood(r + 1, c);
    if (c < column) flood(r, c + 1);
  };

  for (let i = 0; i <= row; i++) {
    flood(i, 0);
    flood(i, column);
  }

  for (let j = 0; j <= column; j++) {
    flood(0, j);
    flood(row, j);
  }

  let count: number = 0;
  for (let k = 1; k < row; k++) {
    for (let l = 1; l < column; l++) {
      if (grid[k][l] === 0) {
        count++;
        flood(k, l);
      }
    }
  }

  return count;
}
