import { formatTime } from "@/utils";
import { Brain, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export const Header = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-blue-500 p-5 text-white">
      <h1 className="mb-4 text-center text-4xl font-bold">Sudoku</h1>
      <div className="flex justify-center gap-8">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          <span className="font-mono text-xl">{formatTime(time)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5" />
          <span className="text-xl">10 moves</span>
        </div>
      </div>
    </div>
  );
};
