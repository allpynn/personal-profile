import React, { useState, useEffect } from "react";
import logo from "../assets/image/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Optional: auto-update active section saat scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience"];
      let current = "home";
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = section;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="w-10 inline-block align-middle"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : "_self"}
                rel={external ? "noopener" : undefined}
                className={`nav-link text-white px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === label.toLowerCase() ? "active" : ""
                }`}
                onClick={() => setActiveSection(label.toLowerCase())}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-200 hover:text-purple-500 focus:outline-none focus:text-purple-500"
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
            {menuItems.map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : "_self"}
                rel={external ? "noopener" : undefined}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors hover:text-purple-500 hover:glass-effect ${
                  activeSection === label.toLowerCase() ? "active" : ""
                }`}
                onClick={() => setActiveSection(label.toLowerCase())}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
