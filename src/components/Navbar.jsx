import React, { useState } from "react";
import logo from "../assets/image/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center justify-center">
              <img
                src={logo}
                alt="logo"
                className="w-10 inline-block align-middle"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="nav-link text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="nav-link text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="nav-link text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="nav-link text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="nav-link text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Message Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-200 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-label="Toggle mobile menu"
              title="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden glass-effect text-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className="block px-3 py-2 text-base font-medium text-white hover:text-blue-600 hover:bg-gray-800 rounded-md"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-base font-medium text-white hover:text-blue-600 hover:bg-gray-800 rounded-md"
            >
              About
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 text-base font-medium text-white hover:text-blue-600 hover:bg-gray-800 rounded-md"
            >
              Skills
            </a>
            <a
              href="#portfolio"
              className="block px-3 py-2 text-base font-medium text-white hover:text-blue-600 hover:bg-gray-800 rounded-md"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-white hover:text-blue-600 hover:bg-gray-800 rounded-md"
            >
              Message Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
