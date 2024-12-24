import { useSudoku } from "@/contexts/sudoku/useSudoku";
import { formatTime } from "@/utils";
import { Pause } from "lucide-react";

export const GameStats = () => {
  const { moves, time } = useSudoku();

  return (
    <div className="mb-4 flex justify-between">
      <div className="text-sm font-medium text-gray-700">Moves: {moves}</div>
      <div className="flex items-center gap-2">
        <div className="text-sm font-medium text-gray-700">{formatTime(time)}</div>
        <button
          onClick={() => {}}
          className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-gray-500 transition-colors duration-300 hover:bg-gray-300 hover:text-gray-700"
        >
          <Pause size={16} />
        </button>
      </div>{" "}
    </div>
  );
};
