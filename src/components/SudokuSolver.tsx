import { SudokuGrid, SolverControls, NumberPad, Button } from "@/components";
import { useKeyPress } from "@/hooks";
import { RootState } from "@/state/store";
import { setSelectedCell, solve, updateCell } from "@/state/sudoku/solverSlice";
import { Cell } from "@/types";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const SudokuSolver = () => {
  const dispatch = useDispatch();
  const { grid, selectedCell } = useSelector((state: RootState) => state.solver);

  const key = useKeyPress();

  const handleNumberClick = (value: number) => {
    dispatch(updateCell(value));
  };

  const handleCellClick = (cell: Cell) => {
    dispatch(setSelectedCell(cell));
  };

  const handleSolveClick = () => {
    dispatch(solve());
  };

  useEffect(() => {
    if (key) handleNumberClick(key);
  }, [key]);

  return (
    <div className="container">
      <div className="mx-auto mb-5 flex gap-12">
        <div className="flex flex-col gap-5">
          <SudokuGrid
            grid={grid}
            selectedCell={selectedCell}
            handleCellClick={handleCellClick}
          />
        </div>
        <div>
          <SolverControls />
          <NumberPad handleNumberClick={handleNumberClick} />
          <Button
            title="Solve Sudoku"
            onClick={handleSolveClick}
            icon={CheckCircle}
            className="bg-blue-500 hover:bg-blue-600"
            disabled={false}
          />
        </div>
        <div className="w-1/4"></div>
      </div>
    </div>
  );
};
