import { Header, Controls, SudokuGrid, NumberPad } from "@/components";
import { useSudoku } from "@/contexts/sudoku/useSudoku";
import { getConflicts } from "@/lib";
import { Cell, Grid } from "@/types";
import { useState } from "react";

export const Sudoku = () => {
  const [selectedCell, setSelectedCell] = useState<Cell>([0, 0]);
  const [conflicts, setConflicts] = useState<Set<string>>(new Set());
  const { grid, setGrid } = useSudoku();

  const fillCell = (value: number) => {
    const [r, c] = selectedCell;
    const newGrid = grid.map((row, rowIdx) =>
      row.map((cell, colIdx) => (rowIdx === r && colIdx === c ? value : cell)),
    );
    setGrid(newGrid);
    highlightConflics(newGrid, selectedCell);
  };

  const highlightConflics = (grid: Grid, cell: Cell) => {
    const conf = getConflicts(grid, cell);
    setConflicts(new Set([...conflicts.values(), ...conf.values()]));
  };

  const handleCellClick = (row: number, col: number) => {
    setSelectedCell([row, col]);
  };

  return (
    <div className="container w-full overflow-hidden rounded-xl bg-white shadow-lg md:w-2/3">
      <Header />
      <Controls />
      <div className="mx-auto mb-5 flex items-center gap-5 px-12">
        <SudokuGrid
          grid={grid}
          handleCellClick={handleCellClick}
          selectedCell={selectedCell}
          conflicts={conflicts}
        />
        <NumberPad fillCell={fillCell} />
      </div>
    </div>
  );
};
