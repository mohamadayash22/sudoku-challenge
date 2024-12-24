import { useSudoku } from "@/contexts/sudoku/useSudoku";
import { showModal } from "@/utils";
import { Undo2, Eraser, Lightbulb, CheckCircle } from "lucide-react";

export const Controls = () => {
  const { setGrid } = useSudoku();

  const handleUndoClick = () => {};

  const handleEraseClick = () => {
    setGrid((prevGrid) =>
      prevGrid.map((cells) =>
        cells.map((cell) => {
          cell.isConflict = false;
          return cell.isFixed ? cell : { ...cell, value: 0 };
        }),
      ),
    );
  };

  const handleHintClick = () => {};

  const handleCheckClick = () => {
    showModal("test");
  };

  return (
    <div className="mb-4 flex gap-6">
      <div className="flex flex-col items-center gap-1 text-center">
        <button
          onClick={handleUndoClick}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white transition-colors hover:bg-blue-600"
        >
          <Undo2 className="h-6 w-6" />
        </button>
        <span className="text-sm font-medium text-gray-700">Undo</span>
      </div>

      <div className="flex flex-col items-center gap-1 text-center">
        <button
          onClick={handleCheckClick}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white transition-colors hover:bg-green-600"
        >
          <CheckCircle className="h-6 w-6" />
        </button>
        <span className="text-sm font-medium text-gray-700">Check</span>
      </div>

      <div className="flex flex-col items-center gap-1 text-center">
        <button
          onClick={handleEraseClick}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white transition-colors hover:bg-red-600"
        >
          <Eraser className="h-6 w-6" />
        </button>
        <span className="text-sm font-medium text-gray-700">Erase</span>
      </div>

      <div className="flex flex-col items-center gap-1 text-center">
        <button
          onClick={handleHintClick}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 text-white transition-colors hover:bg-yellow-600"
        >
          <Lightbulb className="h-6 w-6" />
        </button>
        <span className="text-sm font-medium text-gray-700">Hint</span>
      </div>
    </div>
  );
};
