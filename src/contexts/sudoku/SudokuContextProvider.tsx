import { ReactNode, useState } from "react";
import { generateSudokuPuzzle } from "@/lib";
import { Difficulty, Grid } from "@/types";
import { SudokuContext } from "./SudokuContext";
import { useTimer } from "@/hooks";

export const SudokuContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const initialGrid = generateSudokuPuzzle("easy");
  const [grid, setGrid] = useState<Grid>(initialGrid);
  const [moves, setMoves] = useState(0);
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useTimer(isPaused);

  const contextValue = {
    grid,
    time,
    difficulty,
    moves,
    isPaused,
    setGrid,
    setTime,
    setDifficulty,
    setMoves,
    setIsPaused,
  };

  return (
    <SudokuContext.Provider value={contextValue}> {children}</SudokuContext.Provider>
  );
};
