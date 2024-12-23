import { Cell, Difficulty, Grid } from "@/types";
import { generateRandomNumber } from "@/utils";

export const generateEmptyGrid = (): Grid => {
  return Array.from({ length: 9 }).map((_, row) =>
    Array.from({ length: 9 }).map((_, col) => ({
      row,
      col,
      value: 0,
      isFixed: false,
    })),
  );
};
export const isValidSudoku = (grid: Grid): boolean => {
  const rows = Array.from({ length: 9 }, () => new Set<Cell>());
  const cols = Array.from({ length: 9 }, () => new Set<Cell>());
  const subGrids = Array.from({ length: 9 }, () => new Set<Cell>());

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
  const { row, col } = cell;
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

export const isConflict = (conflicts: Set<string>, row: number, col: number) => {
  return conflicts.has(`${row},${col}`);
};

const isRowSafe = (grid: Grid, cell: Cell, value: number) => {
  const { row } = cell;
  return grid[row].filter((c: Cell) => c.value === value).length === 0;
};

const isColSafe = (grid: Grid, cell: Cell, value: number) => {
  const { col } = cell;
  return !grid.some((row) => row[col].value === value);
};

const isSubgridSafe = (grid: Grid, cell: Cell, value: number) => {
  const { row, col } = cell;
  const subGridRowStart = Math.floor(row / 3) * 3;
  const subGridColStart = Math.floor(col / 3) * 3;
  for (let i = subGridRowStart; i < subGridRowStart + 3; i++) {
    for (let j = subGridColStart; j < subGridColStart + 3; j++) {
      if (grid[i][j].value === value) return false;
    }
  }
  return true;
};

export const isSafeToPlace = (grid: Grid, cell: Cell, value: number) => {
  return (
    isRowSafe(grid, cell, value) &&
    isColSafe(grid, cell, value) &&
    isSubgridSafe(grid, cell, value)
  );
};

const fillGrid = (grid: Grid): boolean => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col].value === 0) {
        const numbers = Array.from({ length: 9 }, (_, i) => i + 1).sort(
          () => Math.random() - 0.5,
        );
        for (const num of numbers) {
          if (isSafeToPlace(grid, { row, col, value: num, isFixed: false }, num)) {
            grid[row][col] = { row, col, value: num, isFixed: true };
            if (fillGrid(grid)) {
              return true;
            }
            grid[row][col] = { row, col, value: 0, isFixed: false };
          }
        }
        return false;
      }
    }
  }
  return true;
};

export const generateSudoku = (): Grid => {
  const grid = generateEmptyGrid();
  fillGrid(grid);
  return grid;
};

const removeNumbers = (grid: Grid, numToRemove: number): Grid => {
  const puzzle = grid.map((row) => [...row]);
  let count = numToRemove;

  while (count > 0) {
    const row = generateRandomNumber(0, 8);
    const col = generateRandomNumber(0, 8);

    if (puzzle[row][col].value !== 0) {
      puzzle[row][col].value = 0;
      puzzle[row][col].isFixed = false;
      count--;
    }
  }

  return puzzle;
};

export const generateSudokuPuzzle = (difficulty: Difficulty): Grid => {
  const completeGrid = generateSudoku();
  let numToRemove: number;

  switch (difficulty) {
    case "easy":
      numToRemove = 30;
      break;
    case "medium":
      numToRemove = 40;
      break;
    case "hard":
      numToRemove = 50;
      break;
    default:
      numToRemove = 30;
  }

  return removeNumbers(completeGrid, numToRemove);
};

export const solveSudoku = (grid: Grid, row: number = 0, col: number = 0): boolean => {
  if (row === 9) return true;
  else if (col === 9) return solveSudoku(grid, row + 1, 0);
  else if (grid[row][col].value != 0) return solveSudoku(grid, row, col + 1);
  else {
    for (let n = 1; n <= 9; n++) {
      if (isSafeToPlace(grid, { row, col, value: n, isFixed: false }, n)) {
        grid[row][col].value = n;
        if (solveSudoku(grid, row, col + 1)) return true;
        grid[row][col].value = 0;
      }
    }
    return false;
  }
};
