import { configureStore } from "@reduxjs/toolkit";
import sudokuReducer from "@/state/sudoku/sudokuSlice";
import solverReducer from "@/state/sudoku/solverSlice";

export const store = configureStore({
  reducer: {
    sudoku: sudokuReducer,
    solver: solverReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
