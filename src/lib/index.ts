import { Cell, Difficulty, Grid } from "@/types";
import { generateRandomNumber } from "@/utils";

export const generateEmptyGrid = (): Grid => {
  return Array.from({ length: 9 }).map((_, row) =>
    Array.from({ length: 9 }).map((_, col) => ({ row, col, value: 0 })),
  );
};

export const fillCell = (grid: Grid, selectedCell: Cell, value: number) => {
  return grid.map((cells) =>
    cells.map((cell) =>
      cell.row === selectedCell.row && cell.col === selectedCell.col
        ? { ...cell, value: value }
        : cell,
    ),
  );
};

export const checkConflicts = (grid: Grid) => {
  grid.forEach((row) => row.forEach((cell) => (cell.isConflict = false)));

  const rows = Array.from({ length: 9 }, () => new Map<number, Cell[]>());
  const cols = Array.from({ length: 9 }, () => new Map<number, Cell[]>());
  const boxes = Array.from({ length: 9 }, () => new Map<number, Cell[]>());

  grid.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell.value !== 0) {
        const boxIndex = Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3);

        if (!rows[rowIndex].has(cell.value)) rows[rowIndex].set(cell.value, []);
        if (!cols[colIndex].has(cell.value)) cols[colIndex].set(cell.value, []);
        if (!boxes[boxIndex].has(cell.value)) boxes[boxIndex].set(cell.value, []);

        rows[rowIndex].get(cell.value)!.push(cell);
        cols[colIndex].get(cell.value)!.push(cell);
        boxes[boxIndex].get(cell.value)!.push(cell);
      }
    });
  });

  rows.forEach(markConflicts);
  cols.forEach(markConflicts);
  boxes.forEach(markConflicts);

  return grid;
};

const markConflicts = (map: Map<number, Cell[]>) => {
  map.forEach((cells) => {
    if (cells.length > 1) {
      cells.forEach((cell) => (cell.isConflict = true));
    }
  });
};

export const isValidSudoku = (grid: Grid): boolean => {
  const rows = Array.from({ length: 9 }, () => new Set<number>());
  const cols = Array.from({ length: 9 }, () => new Set<number>());
  const subGrids = Array.from({ length: 9 }, () => new Set<number>());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = grid[i][j];
      if (!cell.value) return false;

      const subGridIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (
        rows[i].has(cell.value) ||
        cols[j].has(cell.value) ||
        subGrids[subGridIndex].has(cell.value)
      ) {
        return false;
      }

      rows[i].add(cell.value);
      cols[j].add(cell.value);
      subGrids[subGridIndex].add(cell.value);
    }
  }

  return true;
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
      if (!grid[row][col].value) {
        const numbers = Array.from({ length: 9 }, (_, i) => i + 1).sort(
          () => Math.random() - 0.5,
        );
        for (const num of numbers) {
          if (
            isSafeToPlace(
              grid,
              { row, col, value: num, isFixed: false, isConflict: false },
              num,
            )
          ) {
            grid[row][col] = { row, col, value: num, isFixed: true, isConflict: false };
            if (fillGrid(grid)) {
              return true;
            }
            grid[row][col] = { row, col, value: 0, isFixed: false, isConflict: false };
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

export const generateSudokuPuzzle = (difficulty: Difficulty) => {
  const completeGrid = generateSudoku();
  const solution = structuredClone(completeGrid);

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

  const grid = removeNumbers(completeGrid, numToRemove);
  return { grid, solution };
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

export const provideHint = (grid: Grid, solution: Grid): Cell | null => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (!grid[row][col].value) {
        grid[row][col].value = solution[row][col].value;
        return grid[row][col];
      }
    }
  }

  return null;
};
