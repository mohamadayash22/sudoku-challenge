import { Cell, Grid } from "@/types";

export const generateEmptyGrid = (): Grid => {
  return Array.from({ length: 9 }).map(() => Array(9).fill(0));
};

export const isValidSudoku = (grid: Grid): boolean => {
  const rows = Array.from({ length: 9 }, () => new Set<number>());
  const cols = Array.from({ length: 9 }, () => new Set<number>());
  const subGrids = Array.from({ length: 9 }, () => new Set<number>());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!grid[i][j]) continue;
      const subGridIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (
        rows[i].has(grid[i][j]) ||
        cols[j].has(grid[i][j]) ||
        subGrids[subGridIndex].has(grid[i][j])
      ) {
        return false;
      }

      rows[i].add(grid[i][j]);
      cols[j].add(grid[i][j]);
      subGrids[subGridIndex].add(grid[i][j]);
    }
  }

  return true;
};

export const getConflicts = (grid: Grid, cell: Cell): Set<string> => {
  const [row, col] = cell;
  const cellValue = grid[row][col];
  const res = new Set<string>();

  for (let i = 0; i < 9; i++) {
    if (!grid[row][i]) continue;
    if (col != i && grid[row][i] === cellValue) {
      res.add(`${row},${i}`);
    }
  }

  for (let i = 0; i < 9; i++) {
    if (!grid[i][col]) continue;
    if (row != i && grid[i][col] === cellValue) {
      res.add(`${i},${col}`);
    }
  }

  const rowStart = Math.floor(row / 3) * 3;
  const colStart = Math.floor(col / 3) * 3;

  for (let i = rowStart; i < rowStart + 3; i++) {
    for (let j = colStart; j < colStart + 3; j++) {
      if ((i !== row || j !== col) && grid[i][j] === cellValue) {
        res.add(`${i},${j}`);
      }
    }
  }

  return res;
};

export const isConflict = (conflicts: Set<string>, cell: Cell) => {
  const [row, col] = cell;
  return conflicts.has(`${row},${col}`);
};
