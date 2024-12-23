export type Cell = {
  row: number;
  col: number;
  value: number;
  isFixed: boolean;
};

export type Grid = Cell[][];

export type Difficulty = "easy" | "medium" | "hard";
