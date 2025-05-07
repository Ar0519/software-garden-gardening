
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Leaf } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "Maintenance Types", path: "/maintenance-types" },
    { name: "Garden Process", path: "/garden-process" },
    { name: "Garden Stories", path: "/garden-stories" },
    { name: "Ask The Gardener", path: "/ask-the-gardener" },
    { name: "Quiz", path: "/quiz" },
    { name: "Tech Debt Game", path: "/tech-debt-game" }
  ];

  // Check if a link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="garden-container">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-garden-green-dark" />
            <span className="text-xl font-serif font-bold text-garden-green-dark">The Software Garden</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "transition-colors font-medium",
                  isActive(link.path) 
                    ? "text-garden-green-dark font-bold" 
                    : "text-gray-600 hover:text-garden-green-mid"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-garden-green-dark p-1 rounded-md hover:bg-garden-sand hover:bg-opacity-20 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="garden-container pb-4">
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "px-2 py-1.5 rounded-md transition-colors",
                  isActive(link.path) 
                    ? "bg-garden-green-light bg-opacity-20 text-garden-green-dark font-medium" 
                    : "text-gray-600 hover:bg-garden-sand hover:bg-opacity-20 hover:text-garden-green-dark"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
