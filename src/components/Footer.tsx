import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
        <div>
          <h1 className="mb-2 text-2xl font-bold">Sudoku Game</h1>
          <p className="mb-4 text-sm">
            © {new Date().getFullYear()} Sudoku Game. All rights reserved.
          </p>
          <p className="text-sm">
            Sudoku Game is your go-to platform for playing and solving Sudoku puzzles.
            Enjoy a variety of difficulty levels and improve your skills.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-xl font-bold">Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/solver" className="hover:text-gray-400">
                Solver
              </Link>
            </li>
            <li>
              <Link to="/rules" className="hover:text-gray-400">
                Rules
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-2 text-xl font-bold">Resources</h2>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="hover:text-gray-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-400">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-400">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
