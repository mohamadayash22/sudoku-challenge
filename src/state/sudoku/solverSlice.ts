import { checkConflicts, fillCell, generateEmptyGrid, solveSudoku } from "@/lib";
import { Cell, Grid } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SolverState = {
  grid: Grid;
  selectedCell: Cell;
  history: Cell[];
};

const initialGrid = generateEmptyGrid();

const initialState: SolverState = {
  grid: initialGrid,
  selectedCell: initialGrid[0][0],
  history: [],
};

const solverSlice = createSlice({
  name: "solver",
  initialState,
  reducers: {
    setGrid(state, action: PayloadAction<Grid>) {
      state.grid = action.payload;
    },
    setSelectedCell(state, action: PayloadAction<Cell>) {
      state.selectedCell = action.payload;
    },
    updateCell(state, action: PayloadAction<number>) {
      const { value } = state.selectedCell;
      if (value !== action.payload) {
        state.grid = fillCell(state.grid, state.selectedCell, action.payload);
        state.history.push(state.selectedCell);
        state.selectedCell.value = action.payload;
        state.grid = checkConflicts(state.grid);
      }
    },
    solve(state) {
      solveSudoku(state.grid);
    },
    erase(state) {
      state.grid = generateEmptyGrid();
      state.history = [];
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
      }
    },
  },
});

export const { setGrid, setSelectedCell, updateCell, solve, erase, undo } =
  solverSlice.actions;

export default solverSlice.reducer;
