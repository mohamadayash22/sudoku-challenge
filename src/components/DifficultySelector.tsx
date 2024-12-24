import { useSudoku } from "@/contexts/sudoku/useSudoku";
import { generateSudokuPuzzle } from "@/lib";
import { Difficulty } from "@/types";
import clsx from "clsx";

const levels = ["easy", "medium", "hard"];

export const DifficultySelector = () => {
  const { difficulty, setDifficulty, setGrid, setMoves } = useSudoku();

  const handleDifficultyChange = (level: string) => {
    const diff = level as Difficulty;
    const newGrid = generateSudokuPuzzle(diff);
    setGrid(newGrid);
    setDifficulty(diff);
    setMoves(0);
  };

  return (
    <div className="flex items-center gap-4">
      <p className="font-medium text-gray-700">Difficulty:</p>
      <div className="flex gap-2">
        {levels.map((level) => (
          <button
            key={level}
            onClick={() => handleDifficultyChange(level)}
            className={clsx(
              "rounded-lg px-3 py-1 text-sm font-medium transition-colors",
              difficulty === level
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300",
            )}
          >
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};