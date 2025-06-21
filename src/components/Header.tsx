import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-white font-space">
              LiquidOS
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
              >
                Products
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isProductsOpen && (
                <div className="absolute top-full mt-2 w-48 bg-black/90 backdrop-blur-xl border border-gray-800 rounded-lg shadow-xl py-2">
                  <Link
                    to="/corty"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    Corty
                  </Link>
                  <a
                    href="https://github.com/liquidos-ai/AutoAgents"
                    target="_blank"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    AutoAgents
                  </a>
                </div>
              )}
            </div>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800/50">
            <nav className="flex flex-col space-y-4">
              <div>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors w-full text-left"
                >
                  Products
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isProductsOpen && (
                  <div className="ml-4 mt-2">
                    <Link
                      to="/corty"
                      className="block py-2 text-gray-300 hover:text-white transition-colors"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsProductsOpen(false);
                      }}
                    >
                      Corty
                    </Link>
                    <Link
                      to="/autoagents"
                      className="block py-2 text-gray-300 hover:text-white transition-colors"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsProductsOpen(false);
                      }}
                    >
                      AutoAgents
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
