import { useState, useEffect } from "react";

export const useKeyPress = () => {
  const [keyPressed, setKeyPressed] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyPressed = (e: KeyboardEvent) => {
      const key = parseInt(e.key, 10);
      if (!isNaN(key)) {
        setKeyPressed(key);
      }
    };

    window.addEventListener("keydown", handleKeyPressed);
    return () => window.removeEventListener("keydown", handleKeyPressed);
  }, []);

  return keyPressed;
};
