import { useSudoku } from "@/contexts/sudoku/useSudoku";
import { Cell, Grid } from "@/types";
import clsx from "clsx";
import { Play } from "lucide-react";

type Props = {
  grid: Grid;
  selectedCell: Cell;
  handleCellClick: (cell: Cell) => void;
};

const getCellClass = (cell: Cell, selectedCell: Cell) => {
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
    cell.isConflict && "bg-red-300",
  );
};

export const SudokuGrid = ({ grid, selectedCell, handleCellClick }: Props) => {
  const { isPaused, setIsPaused } = useSudoku();

  const handleResumeClick = () => {
    setIsPaused(false);
  };

  return (
    <div className="relative">
      {isPaused && (
        <div className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center">
          <button
            onClick={handleResumeClick}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600"
          >
            <Play size={30} color="white" />
          </button>
        </div>
      )}
      <div
        className={clsx(
          "grid h-[26rem] w-[26rem] grid-cols-9 grid-rows-9 border-2 border-slate-900",
          isPaused && "opacity-50",
        )}
      >
        {grid.map((row) =>
          row.map((cell) => (
            <div
              key={`${cell.row}-${cell.col}`}
              onClick={() => !isPaused && handleCellClick(cell)}
              className={getCellClass(cell, selectedCell)}
            >
              {cell.value && !isPaused ? cell.value : ""}
            </div>
          )),
        )}
      </div>
    </div>
  );
};
