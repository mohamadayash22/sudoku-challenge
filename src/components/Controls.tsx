import { useSudoku } from "@/contexts/sudoku/useSudoku";
import { generateEmptyGrid } from "@/lib";
import { Check, Eraser, RefreshCcw, Wand2 } from "lucide-react";

export const Controls = () => {
  const { grid, setGrid } = useSudoku();

  const handleNewGameClick = () => {};

  const handleCheckClick = () => {};

  const handleSolveClick = () => {};

  const handleEraseClick = () => {
    setGrid(generateEmptyGrid());
  };

  return (
    <div className="mx-auto flex w-3/4 flex-wrap justify-center gap-3 rounded-lg py-8">
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
    </div>
  );
};
