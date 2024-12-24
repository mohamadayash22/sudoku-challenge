import { SudokuContextProvider } from "@/contexts/sudoku/SudokuContextProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { HomePage, SolverPage, RulesPage } from "@/pages";
import { Layout } from "@/components";

export default function App() {
  return (
    <Router>
      <SudokuContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rules" element={<RulesPage />} />
            <Route path="/solver" element={<SolverPage />} />
          </Routes>
        </Layout>
      </SudokuContextProvider>
    </Router>
  );
}
