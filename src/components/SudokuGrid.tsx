import { isConflict } from "@/lib";
import { Grid } from "@/types";
import clsx from "clsx";

type Props = {
  grid: Grid;
  conflicts: Set<string>;
  selectedCell: [number, number];
  handleCellClick: (i: number, j: number) => void;
};

export const SudokuGrid = ({
  grid,
  conflicts,
  selectedCell,
  handleCellClick,
}: Props) => {
  return (
    <div className="grid h-[26rem] w-[26rem] grid-cols-9 grid-rows-9 border-2 border-slate-900">
      {grid.map((row, i) =>
        row.map((cell, j) => (
          <div
            key={`${i}-${j}`}
            onClick={() => handleCellClick(i, j)}
            className={clsx(
              "flex w-full items-center justify-center border border-[#c2c9d6] text-3xl",
              selectedCell[0] === i && selectedCell[1] === j && "bg-blue-200",
              j % 3 === 2 && "border-r-2 border-r-slate-900",
              i % 3 === 2 && "border-b-2 border-b-slate-900",
              isConflict(conflicts, [i, j]) && "text-red-600",
            )}
          >
            {cell ? cell : ""}
          </div>
        )),
      )}
    </div>
  );
};
