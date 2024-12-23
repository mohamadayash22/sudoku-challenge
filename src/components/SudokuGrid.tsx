import { Cell, Grid } from "@/types";
import clsx from "clsx";
import { isConflict } from "@/lib";

type Props = {
  grid: Grid;
  conflicts: Set<string>;
  selectedCell: Cell;
  handleCellClick: (cell: Cell) => void;
};

const getCellClass = (cell: Cell, selectedCell: Cell, conflicts: Set<string>) => {
  const { row, col } = cell;
  const isSelected = selectedCell.row === row && selectedCell.col === col;
  const isSameRowOrCol = selectedCell.row === row || selectedCell.col === col;
  const isSameSubgrid =
    Math.floor(row / 3) === Math.floor(selectedCell.row / 3) &&
    Math.floor(col / 3) === Math.floor(selectedCell.col / 3);

  return clsx(
    "flex w-full items-center justify-center border border-slate-800 text-3xl",
    isSelected && "bg-[#bbdefb]",
    cell.isFixed ? "font-semibold" : "",
    !isSelected && isSameRowOrCol && "bg-[#e2ebf3]",
    !isSelected && isSameSubgrid && "bg-[#e2ebf3]",
    col % 3 === 2 && col !== 8 && "border-r-2 border-r-slate-900",
    row % 3 === 2 && row !== 8 && "border-b-2 border-b-slate-900",
    isConflict(conflicts, selectedCell.row, selectedCell.col) && "text-red-600",
  );
};

export const SudokuGrid = ({ grid, conflicts, selectedCell, handleCellClick }: Props) => {
  return (
    <div className="grid h-[26rem] w-[26rem] grid-cols-9 grid-rows-9 border-2 border-slate-900">
      {grid.map((row) =>
        row.map((cell) => (
          <div
            key={`${cell.row}-${cell.col}`}
            onClick={() => handleCellClick(cell)}
            className={getCellClass(cell, selectedCell, conflicts)}
          >
            {cell.value ? cell.value : ""}
          </div>
        )),
      )}
    </div>
  );
};
