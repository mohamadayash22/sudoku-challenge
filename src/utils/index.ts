export const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? `0${secs}` : secs}`;
};

export const generateRandomNumber = (min: number = 1, max: number = 9) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
