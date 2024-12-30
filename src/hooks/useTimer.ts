import { useEffect } from "react";

type Props = {
  callback: () => void;
  isPaused: boolean;
  interval?: number;
};

export const useTimer = ({ callback, isPaused, interval = 1000 }: Props) => {
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      callback();
    }, interval);

    return () => clearInterval(timer);
  }, [isPaused, callback, interval]);
};
