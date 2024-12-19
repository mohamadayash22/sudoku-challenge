import { Grid } from "@/types";

export type ContextProps = {
  grid: Grid;
  setGrid: (grid: Grid) => void;
};
