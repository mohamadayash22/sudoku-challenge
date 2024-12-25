import { useState, useEffect } from "react";

export const useTimer = (isPaused: boolean) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return [time, setTime] as const;
};
