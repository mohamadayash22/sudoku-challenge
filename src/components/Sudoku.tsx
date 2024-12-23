import { Header, Controls, SudokuGrid, NumberPad } from "@/components";
import { useSudoku } from "@/contexts/sudoku/useSudoku";
import { getConflicts } from "@/lib";
import { Cell, Grid } from "@/types";
import { useState } from "react";

export const Sudoku = () => {
  const { grid, setGrid } = useSudoku();
  const [conflicts, setConflicts] = useState<Set<string>>(new Set());
  const [selectedCell, setSelectedCell] = useState<Cell>(grid[0][0]);

  const fillCell = (value: number) => {
    const { row, col, isFixed } = selectedCell;
    console.log(selectedCell);
    if (isFixed) return;
    const newGrid = grid.map((cells) =>
      cells.map((cell) =>
        cell.col === col && cell.row === row ? { ...cell, value } : cell,
      ),
    );
    setGrid(newGrid);
    highlightConflicts(newGrid, selectedCell);
  };

  const highlightConflicts = (grid: Grid, cell: Cell) => {
    const conf = getConflicts(grid, cell);
    setConflicts(new Set([...conflicts.values(), ...conf.values()]));
  };

  const handleCellClick = (cell: Cell) => {
    setSelectedCell(cell);
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
