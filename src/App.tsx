import { BrowserRouter as Router, Routes, Route } from "react-router";
import { HomePage, SolverPage, RulesPage } from "@/pages";
import { Layout } from "@/components";
import { Provider } from "react-redux";
import { store } from "@/state/store";

export default function App() {
  return (
    <Router>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rules" element={<RulesPage />} />
            <Route path="/solver" element={<SolverPage />} />
          </Routes>
        </Layout>
      </Provider>
    </Router>
  );
}
