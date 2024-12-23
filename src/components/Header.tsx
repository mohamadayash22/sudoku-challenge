import { useSudoku } from "@/contexts/sudoku/useSudoku";
import { formatTime } from "@/utils";
import { Clock } from "lucide-react";

export const Header = () => {
  const { time } = useSudoku();

  return (
    <div className="w-full bg-blue-500 p-5 text-white">
      <h1 className="mb-4 text-center text-4xl font-bold">Sudoku</h1>
      <div className="flex justify-center gap-8">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          <span className="font-mono text-xl">{formatTime(time)}</span>
        </div>
      </div>
    </div>
  );
};
