import { useCallback, useEffect } from "react";
import { SudokuGrid, NumberPad, Controls, Button, GameStats } from "@/components";
import { RefreshCcw } from "lucide-react";
import { DifficultySelector } from "@/components/DifficultySelector";
import { useKeyPress } from "@/hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  reset,
  setIsPaused,
  setSelectedCell,
  updateCell,
} from "@/state/sudoku/sudokuSlice";
import { RootState } from "@/state/store";
import { Cell } from "@/types";

export const Sudoku = () => {
  const { grid, selectedCell, isPaused } = useSelector(
    (state: RootState) => state.sudoku,
  );

  const dispatch = useDispatch();
  const key = useKeyPress();

  const handleFillClick = useCallback(
    (value: number) => {
      dispatch(updateCell(value));
    },
    [dispatch],
  );

  useEffect(() => {
    if (key) {
      handleFillClick(key);
    }
  }, [key, handleFillClick]);

  const handleNumberClick = (value: number) => {
    dispatch(updateCell(value));
  };

  const handleCellClick = (cell: Cell) => {
    dispatch(setSelectedCell(cell));
  };

  const handleNewGameClick = () => {
    const userConfirmed = window.confirm("Are you sure you want to start a new game?");
    if (userConfirmed) {
      dispatch(reset());
    }
  };

  const handleResumeClick = () => {
    dispatch(setIsPaused(false));
  };

  return (
    <div className="mx-auto mb-5 flex gap-12">
      <div className="flex flex-col gap-5">
        <DifficultySelector />
        <SudokuGrid
          grid={grid}
          selectedCell={selectedCell}
          isPaused={isPaused}
          handleCellClick={handleCellClick}
          handleResumeClick={handleResumeClick}
        />
      </div>
      <div>
        <GameStats />
        <Controls />
        <NumberPad handleNumberClick={handleNumberClick} />
        <Button
          title="New Game"
          onClick={handleNewGameClick}
          icon={RefreshCcw}
          className="bg-blue-500 hover:bg-blue-600"
        />
      </div>
    </div>
  );
};
