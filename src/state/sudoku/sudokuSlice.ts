import {
  checkConflicts,
  fillCell,
  generateSudokuPuzzle,
  isValidSudoku,
  provideHint,
} from "@/lib";
import { Cell, Difficulty, Grid } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SudokuState = {
  grid: Grid;
  soluton: Grid;
  moves: number;
  difficulty: Difficulty;
  isPaused: boolean;
  time: number;
  history: Cell[];
  selectedCell: Cell;
};

const { grid: initialGrid, solution } = generateSudokuPuzzle("easy");

const initialState: SudokuState = {
  grid: initialGrid,
  soluton: solution,
  moves: 0,
  difficulty: "easy",
  isPaused: false,
  time: 0,
  history: [],
  selectedCell: initialGrid[0][0],
};

const sudokuSlice = createSlice({
  name: "sudoku",
  initialState,
  reducers: {
    setIsPaused(state, action: PayloadAction<boolean>) {
      state.isPaused = action.payload;
    },
    setTime(state, action: PayloadAction<number>) {
      state.time = action.payload;
    },
    incrementTime(state) {
      state.time++;
    },
    setDifficulty(state, action: PayloadAction<Difficulty>) {
      state.difficulty = action.payload;
    },
    setSelectedCell(state, action: PayloadAction<Cell>) {
      state.selectedCell = action.payload;
    },
    updateCell(state, action: PayloadAction<number>) {
      if (!state.isPaused) {
        const { value, isFixed } = state.selectedCell;
        if (!isFixed && action.payload !== value) {
          state.grid = fillCell(state.grid, state.selectedCell, action.payload);
          state.history.push(state.selectedCell);
          state.moves++;
          state.selectedCell.value = action.payload;
          state.grid = checkConflicts(state.grid);
        }
      }
    },
    erase(state) {
      state.grid = state.grid.map((row) =>
        row.map((cell) => {
          if (!cell.isFixed) return { ...cell, value: 0, isConflict: false };
          else return { ...cell, isConflict: false };
        }),
      );
      state.moves = 0;
      state.history = [];
      state.isPaused = false;
    },
    reset(state) {
      const { grid, solution } = generateSudokuPuzzle(state.difficulty);
      state.grid = grid;
      state.soluton = solution;
      state.time = 0;
      state.moves = 0;
      state.isPaused = false;
      state.history = [];
      state.isPaused = false;
    },
    undo(state) {
      if (state.history.length >= 1) {
        const lastPlayedCell = state.history.pop()!;
        const { row, col } = lastPlayedCell;
        const previous = state.history.at(-1);
        if (previous && previous.row === row && previous.col === col) {
          state.grid[row][col].value = previous.value;
        } else {
          state.grid[row][col].value = 0;
        }
        state.grid = checkConflicts(state.grid);
        state.moves--;
        state.isPaused = false;
      }
    },
    hint(state) {
      const playedCell = provideHint(state.grid, state.soluton);
      if (playedCell) {
        state.history.push(playedCell);
        state.moves++;
        state.isPaused = false;
      }
    },
    isValid(state, action: PayloadAction<boolean>) {
      const isCompleted = isValidSudoku(state.grid);
      action.payload = isCompleted;
    },
  },
});

export const {
  setTime,
  incrementTime,
  setIsPaused,
  setDifficulty,
  setSelectedCell,
  updateCell,
  erase,
  reset,
  undo,
  hint,
  isValid,
} = sudokuSlice.actions;

export default sudokuSlice.reducer;
