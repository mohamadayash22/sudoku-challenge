import { showModal } from "@/utils";
import { Undo2, Eraser, Lightbulb, CheckCircle } from "lucide-react";
import { ControlButton } from "@/components";
import ReactConfetti from "react-confetti";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { undo, erase, isValid, hint } from "@/state/sudoku/sudokuSlice";

export const Controls = () => {
  const dispatch = useDispatch();
  const [showConfetti, setShowConfetti] = useState(false);

  const handleUndoClick = () => {
    dispatch(undo());
  };

  const handleEraseClick = () => {
    dispatch(erase());
  };

  const handleHintClick = () => {
    dispatch(hint());
  };

  const handleCheckClick = () => {
    const isCompleted = dispatch(isValid(false)).payload;
    if (isCompleted) {
      showModal(
        "Congratulations! You have successfully completed the Sudoku puzzle. Great job!",
        true,
      );
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    } else {
      showModal(
        "The solution is incorrect. Please review the puzzle and try again. Make sure there are no conflicts or empty cells.",
      );
    }
  };

  return (
    <div className="mb-4 flex gap-6">
      {showConfetti && <ReactConfetti />}
      <ControlButton
        onClick={handleUndoClick}
        icon={Undo2}
        label="Undo"
        className="bg-blue-500 hover:bg-blue-600"
      />
      <ControlButton
        onClick={handleCheckClick}
        icon={CheckCircle}
        label="Check"
        className="bg-green-500 hover:bg-green-600"
      />
      <ControlButton
        onClick={handleEraseClick}
        icon={Eraser}
        label="Erase"
        className="bg-red-500 hover:bg-red-600"
      />
      <ControlButton
        onClick={handleHintClick}
        icon={Lightbulb}
        label="Hint"
        className="bg-yellow-500 hover:bg-yellow-600"
      />
    </div>
  );
};
