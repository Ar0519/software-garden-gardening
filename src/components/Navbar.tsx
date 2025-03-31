
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Leaf } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "Maintenance Types", path: "/maintenance-types" },
    { name: "Garden Process", path: "/garden-process" },
    { name: "Garden Stories", path: "/garden-stories" },
    { name: "Ask The Gardener", path: "/ask-the-gardener" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="garden-container">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-garden-green-dark" />
            <span className="text-xl font-serif font-bold text-garden-green-dark">The Software Garden</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-garden-green-dark hover:text-garden-green-mid transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-garden-green-dark"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-64" : "max-h-0"
        )}
      >
        <div className="garden-container pb-4">
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-garden-green-dark hover:text-garden-green-mid transition-colors px-2 py-1 rounded"
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
