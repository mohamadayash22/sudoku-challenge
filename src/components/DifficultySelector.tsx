import { RootState } from "@/state/store";
import { setDifficulty } from "@/state/sudoku/sudokuSlice";
import { Difficulty } from "@/types";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

const levels = ["easy", "medium", "hard"];

export const DifficultySelector = () => {
  const dispatch = useDispatch();
  const { difficulty } = useSelector((state: RootState) => state.sudoku);

  const handleDifficultyChange = (level: string) => {
    const diff = level as Difficulty;
    dispatch(setDifficulty(diff));
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
