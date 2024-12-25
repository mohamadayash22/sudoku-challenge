import { Difficulty, Grid } from "@/types";
import { createContext } from "react";

type ContextProps = {
  grid: Grid;
  setGrid: React.Dispatch<React.SetStateAction<Grid>>;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  difficulty: Difficulty;
  setDifficulty: React.Dispatch<React.SetStateAction<Difficulty>>;
  moves: number;
  setMoves: React.Dispatch<React.SetStateAction<number>>;
  isPaused: boolean;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SudokuContext = createContext<ContextProps | undefined>(undefined);
