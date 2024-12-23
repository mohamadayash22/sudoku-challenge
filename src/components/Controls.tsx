import { useSudoku } from "@/contexts/sudoku/useSudoku";
import { generateSudokuPuzzle, solveSudoku } from "@/lib";
import { Difficulty } from "@/types";
import { Check, Eraser, Lightbulb, Pause, RefreshCcw, Wand2 } from "lucide-react";
import { useState } from "react";

export const Controls = () => {
  const { grid, setGrid, setTime } = useSudoku();
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");

  const handleNewGameClick = () => {
    const newGrid = generateSudokuPuzzle(difficulty);
    setGrid(newGrid);
    setTime(0);
  };

  const handleCheckClick = () => {};

  const handleSolveClick = () => {
    const gridCopy = grid.map((row) => [...row]);
    solveSudoku(gridCopy);
    console.log(gridCopy);
    setGrid(gridCopy);
  };

  const handleEraseClick = () => {
    setGrid((prevGrid) =>
      prevGrid.map((cells) =>
        cells.map((cell) => (cell.isFixed ? cell : { ...cell, value: 0 })),
      ),
    );
  };

  const handleHintClick = () => {};

  const handlePauseClick = () => {};

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const diff = e.target.value as Difficulty;
    setDifficulty(diff);
  };

  return (
    <div className="mx-auto flex w-3/4 flex-wrap justify-center gap-3 rounded-lg py-6">
      <select
        value={difficulty}
        onChange={handleDifficultyChange}
        className="cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm outline-none"
      >
        <option
          value="easy"
          className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
        >
          Easy
        </option>
        <option
          value="medium"
          className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
        >
          Medium
        </option>
        <option
          value="hard"
          className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
        >
          Hard
        </option>
      </select>
      <button
        onClick={handleNewGameClick}
        className="flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 font-medium text-white transition-colors hover:bg-indigo-600"
      >
        <RefreshCcw /> New Game
      </button>
      <button
        onClick={handleCheckClick}
        className="flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 font-medium text-white transition-colors hover:bg-green-600"
      >
        <Check /> Check
      </button>
      <button
        onClick={handleSolveClick}
        className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-600"
      >
        <Wand2 /> Solve
      </button>
      <button
        onClick={handleEraseClick}
        className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 font-medium text-white transition-colors hover:bg-red-600"
      >
        <Eraser /> Erase
      </button>
      <button
        onClick={handleHintClick}
        className="flex items-center gap-2 rounded-lg bg-yellow-500 px-4 py-2 font-medium text-white transition-colors hover:bg-yellow-600"
      >
        <Lightbulb /> Hint
      </button>
      <button
        onClick={handlePauseClick}
        className="flex items-center gap-2 rounded-lg bg-gray-500 px-4 py-2 font-medium text-white transition-colors hover:bg-gray-600"
      >
        <Pause /> Pause
      </button>
    </div>
  );
};
