import { generateSudokuPuzzle } from "@/lib";
import { Grid } from "@/types";
import { ReactNode, useEffect, useState } from "react";
import { SudokuContext } from "./SudokuContext";

export const SudokuContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const initialGrid = generateSudokuPuzzle("easy");
  const [grid, setGrid] = useState<Grid>(initialGrid);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const contextValue = { grid, time, setGrid, setTime };

  return (
    <SudokuContext.Provider value={contextValue}> {children}</SudokuContext.Provider>
  );
};
