import { useSudoku } from "@/contexts/sudoku/useSudoku";
import { formatTime } from "@/utils";
import { Pause, Play } from "lucide-react";

export const GameStats = () => {
  const { moves, time, isPaused, setIsPaused } = useSudoku();

  const handlePauseClick = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="text-sm font-medium text-gray-500">Moves: {moves}</div>
      <div className="flex items-center gap-2">
        <div className="text-sm font-medium tabular-nums text-gray-500">
          {formatTime(time)}
        </div>
        <button
          onClick={handlePauseClick}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-500 transition-colors duration-300 hover:bg-gray-300 hover:text-gray-700"
        >
          {isPaused ? <Play size={16} /> : <Pause size={16} />}
        </button>
      </div>
    </div>
  );
};
