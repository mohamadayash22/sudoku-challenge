import { generateEmptyGrid } from "@/lib";
import { Grid } from "@/types";
import { ReactNode, useState } from "react";
import { SudokuContext } from "./SudokuContext";

export const SudokuContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const initialGrid = generateEmptyGrid();
  const [grid, setGrid] = useState<Grid>(initialGrid);
  const contextValue = { grid, setGrid };
  return (
    <SudokuContext.Provider value={contextValue}> {children}</SudokuContext.Provider>
  );
};
