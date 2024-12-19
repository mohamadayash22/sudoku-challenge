import { Sudoku } from "@/components";
import { SudokuContextProvider } from "@/contexts/sudoku/SudokuContextProvider";

export default function App() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-gray-100 to-gray-200 px-4 py-5">
      <SudokuContextProvider>
        <Sudoku />
      </SudokuContextProvider>
    </main>
  );
}
