import { Grid } from "@/types";

export type ContextProps = {
  grid: Grid;
  setGrid: React.Dispatch<React.SetStateAction<Grid>>;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
};
