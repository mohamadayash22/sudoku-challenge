import { useCallback, useEffect, useState } from "react";
import { SudokuGrid, NumberPad, Controls, Button, GameStats } from "@/components";
import { useSudoku } from "@/contexts/sudoku/useSudoku";
import { fillCell, generateSudokuPuzzle } from "@/lib";
import { Cell } from "@/types";
import { RefreshCcw } from "lucide-react";
import { DifficultySelector } from "@/components/DifficultySelector";
import { useKeyPress } from "@/hooks";

export const Sudoku = () => {
  const { grid, setGrid, difficulty, setMoves } = useSudoku();
  const [selectedCell, setSelectedCell] = useState<Cell>(grid[0][0]);
  const key = useKeyPress();

  const handleFillCell = useCallback(
    (value: number) => {
      if (selectedCell.isFixed || selectedCell.value === value) return;
      const newGrid = fillCell(grid, selectedCell, value);
      setGrid(newGrid);
      setMoves((prevMoves) => prevMoves + 1);
    },
    [grid, selectedCell, setGrid, setMoves],
  );

  useEffect(() => {
    if (key) {
      handleFillCell(key);
    }
  }, [key, handleFillCell]);

  const handleCellClick = (cell: Cell) => {
    setSelectedCell(cell);
  };

  const handleNewGameClick = () => {
    const newGrid = generateSudokuPuzzle(difficulty);
    setGrid(newGrid);
    setMoves(0);
  };

  return (
    <div className="container">
      <div className="mx-auto mb-5 flex gap-12">
        <div className="flex flex-col gap-5">
          <DifficultySelector />
          <SudokuGrid
            grid={grid}
            handleCellClick={handleCellClick}
            selectedCell={selectedCell}
          />
        </div>
        <div>
          <GameStats />
          <Controls />
          <NumberPad fillCell={handleFillCell} />
          <Button
            title="New Game"
            onClick={handleNewGameClick}
            icon={RefreshCcw}
            className="bg-blue-500 hover:bg-blue-600"
          />
        </div>
      </div>
    </div>
  );
};
