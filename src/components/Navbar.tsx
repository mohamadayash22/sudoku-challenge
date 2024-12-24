import { Link, useLocation } from "react-router";
import { Brain, BookOpen, Wand2, Grid2X2 } from "lucide-react";

const links = [
  { name: "Play", href: "/", icon: Grid2X2 },
  { name: "Solver", href: "/solver", icon: Wand2 },
  { name: "Rules", href: "/rules", icon: BookOpen },
];

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="border-b bg-white">
      <div className="container">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <Link to="/" className="flex">
              <div className="flex flex-shrink-0 items-center">
                <Brain className="h-8 w-8 text-blue-500" />
                <span className="ml-2 text-xl font-bold text-gray-900">Sudoku Game</span>
              </div>
            </Link>

            <div className="ml-8 flex space-x-8">
              {links.map(({ name, href, icon: Icon }) => (
                <Link
                  key={name}
                  to={href}
                  className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ${
                    location.pathname === href
                      ? "border-blue-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                >
                  <Icon className="mr-2 h-5 w-5" />
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
