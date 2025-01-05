import { ControlButton } from "@/components";
import { eraseAll, undo } from "@/state/sudoku/solverSlice";
import { Eraser, Undo2 } from "lucide-react";
import { useDispatch } from "react-redux";

export const SolverControls = () => {
  const dispatch = useDispatch();

  const handleUndoClick = () => {
    dispatch(undo());
  };

  const handleEraseClick = () => {
    dispatch(eraseAll());
  };

  return (
    <div className="mb-4 flex justify-center gap-6">
      <ControlButton
        onClick={handleUndoClick}
        icon={Undo2}
        label="Undo"
        className="bg-blue-500 hover:bg-blue-600"
      />
      <ControlButton
        onClick={handleEraseClick}
        icon={Eraser}
        label="Erase All"
        className="bg-red-500 hover:bg-red-600"
      />
    </div>
  );
};
