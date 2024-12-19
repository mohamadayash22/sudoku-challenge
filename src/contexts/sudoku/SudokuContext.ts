import { createContext } from "react";
import { ContextProps } from "./types";

export const SudokuContext = createContext<ContextProps | undefined>(undefined);
