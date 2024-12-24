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
  const [time, setTime] = useTimer();
  const [moves, setMoves] = useState(0);
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");

  const contextValue = {
    grid,
    time,
    difficulty,
    moves,
    setGrid,
    setTime,
    setDifficulty,
    setMoves,
  };

  return (
    <SudokuContext.Provider value={contextValue}> {children}</SudokuContext.Provider>
  );
};
