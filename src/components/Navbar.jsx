import React, { useState, useEffect } from "react";
import logo from "../assets/image/logo.png";
import { Menu, Home, Code, X, User, Briefcase, Mail } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skill", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? "py-2" : "py-4"
      }`}
    >
      {/* Main Navbar Container with Glassmorphism */}
      <div className="max-w-7xl mx-auto px-5">
        <div
          className={`relative overflow-hidden rounded-2xl transition-all duration-500 backdrop-blur-xl ${
            scrollY > 50
              ? "bg-black/40 border border-purple-400/40 shadow-lg shadow-purple-500/30"
              : "bg-transparent border border-purple-400"
          }`}
        >
          {/* Multi-layered Animated Background Effects */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            {/* Primary Energy Orbs */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-purple-700/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-tr from-purple-600/20 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

            {/* Secondary Floating Particles */}
            <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-purple-400/40 rounded-full blur-sm animate-ping delay-300" />
            <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-purple-300/50 rounded-full blur-sm animate-ping delay-700" />
            <div className="absolute bottom-1/3 left-2/3 w-3 h-3 bg-purple-500/30 rounded-full blur-sm animate-ping delay-1500" />

            {/* Energy Flow Lines */}
            <div className="absolute inset-0">
              <div className="absolute top-4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-pulse" />
              <div className="absolute bottom-4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse delay-500" />
            </div>

            {/* Rotating Energy Ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10">
              <div
                className="w-full h-full border border-purple-500/30 rounded-full animate-spin"
                style={{ animationDuration: "20s" }}
              />
            </div>
          </div>
          <div className="relative flex items-center justify-between px-8 py-4">
            {/* Ultra Futuristic Logo with Matrix Effect */}
            <div className="flex-shrink-0 group cursor-pointer">
              <div className="relative">
                {/* Multiple Glow Layers */}
                <div className="absolute -inset-3 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse" />
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-purple-400 rounded-lg blur opacity-30 group-hover:opacity-60 transition-all duration-300" />

                {/* Logo Container with Matrix Grid */}
                <div className="col-span-3 md:col-span-2 flex items-center">
                  <div className="relative items-center justify-center overflow-hidden">
                    <img
                      src={logo}
                      alt="Logo"
                      className="w-13 h-12 object-contain"
                    />
                  </div>
                </div>

                {/* Floating Status Indicator */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-ping" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
              </div>
            </div>

            {/* Advanced Futuristic Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="group relative"
                  >
                    {/* Advanced Button Container */}
                    <div
                      className={`relative px-8 py-4 transition-all duration-500 ${
                        activeSection === item.id
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {/* Multi-layer Active Background */}
                      <div
                        className={`absolute inset-0 transition-all duration-500 ${
                          activeSection === item.id
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      >
                        {/* Main Background */}
                        <div
                          className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                            activeSection === item.id
                              ? "bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 shadow-xl shadow-purple-500/50 scale-100"
                              : "bg-gradient-to-r from-purple-500/20 via-purple-400/10 to-purple-500/20 backdrop-blur-sm border border-purple-500/30 scale-95 group-hover:scale-100 group-hover:bg-gradient-to-r group-hover:from-purple-500/30 group-hover:via-purple-400/20 group-hover:to-purple-500/30"
                          }`}
                        />

                        {/* Energy Glow */}
                        <div
                          className={`absolute -inset-1 rounded-2xl blur-md transition-all duration-500 ${
                            activeSection === item.id
                              ? "bg-gradient-to-r from-purple-500/50 to-purple-400/50"
                              : "bg-gradient-to-r from-purple-500/20 to-purple-400/20 group-hover:from-purple-500/30 group-hover:to-purple-400/30"
                          }`}
                        />
                      </div>

                      {/* Holographic Scanning Effect */}
                      <div
                        className={`absolute inset-0 overflow-hidden rounded-2xl ${
                          activeSection === item.id
                            ? "block"
                            : "hidden group-hover:block"
                        }`}
                      >
                        {/* Top Scan Line */}
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/90 to-transparent animate-pulse" />
                        {/* Bottom Scan Line */}
                        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-300/80 to-transparent animate-pulse delay-300" />
                        {/* Side Scan Lines */}
                        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400/60 to-transparent animate-pulse delay-150" />
                        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400/60 to-transparent animate-pulse delay-450" />
                      </div>

                      {/* Content with Advanced Effects */}
                      <div className="relative flex items-center space-x-3 text-sm font-medium">
                        {/* Icon with Particle Effect */}
                        <div className="relative">
                          <Icon
                            size={18}
                            className={`transition-all duration-300 ${
                              activeSection === item.id
                                ? "scale-110 rotate-0"
                                : "group-hover:scale-110 group-hover:rotate-12"
                            }`}
                          />

                          {/* Icon Glow */}
                          {activeSection === item.id && (
                            <>
                              <div className="absolute -inset-2 border border-white/30 rounded-full animate-ping" />
                              <div className="absolute -inset-1 border border-purple-300/50 rounded-full animate-pulse" />
                            </>
                          )}
                        </div>

                        {/* Text with Typewriter Effect */}
                        <span className="font-mono tracking-wide">
                          {item.label}
                        </span>

                        {/* Status LEDs */}
                        <div className="flex space-x-1">
                          {[1, 2, 3].map((led) => (
                            <div
                              key={led}
                              className={`w-1 h-1 rounded-full transition-all duration-300 ${
                                activeSection === item.id
                                  ? "bg-white animate-pulse"
                                  : "bg-purple-400/30 group-hover:bg-purple-400 group-hover:animate-pulse"
                              }`}
                              style={{ animationDelay: `${led * 150}ms` }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Advanced Holographic Underline */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex items-center space-x-1">
                        <div
                          className={`h-px bg-gradient-to-r from-purple-500 via-purple-300 to-purple-500 transition-all duration-500 ${
                            activeSection === item.id
                              ? "w-full opacity-100"
                              : "w-0 opacity-0 group-hover:w-full group-hover:opacity-70"
                          }`}
                        />
                      </div>

                      {/* Corner Brackets */}
                      {activeSection === item.id && (
                        <>
                          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/50 rounded-tl-lg" />
                          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/50 rounded-tr-lg" />
                          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/50 rounded-bl-lg" />
                          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/50 rounded-br-lg" />
                        </>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Cyber Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="group relative p-3 bg-black/50 rounded-xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-purple-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  {isMenuOpen ? (
                    <X
                      size={20}
                      className="text-purple-400 transition-transform duration-300 rotate-180"
                    />
                  ) : (
                    <Menu
                      size={20}
                      className="text-purple-400 transition-transform duration-300"
                    />
                  )}
                </div>
              </button>
            </div>
          </div>
          {/* Cyber Grid Pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, purple 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Futuristic Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 mt-4">
          <div className="bg-black/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 overflow-hidden">
            {/* Mobile Menu Header */}
            <div className="px-6 py-4 bg-gradient-to-r from-purple-500/20 to-transparent border-b border-purple-500/20">
              <h3 className="text-purple-400 font-mono text-sm">
                NAVIGATION_MENU
              </h3>
            </div>

            {/* Mobile Menu Items */}
            <div className="p-4 space-y-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="group w-full"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={`relative p-4 rounded-xl transition-all duration-300 ${
                        activeSection === item.id
                          ? "bg-gradient-to-r from-purple-500/30 to-purple-400/20 border-l-4 border-purple-400"
                          : "bg-black/30 hover:bg-purple-500/10 border-l-4 border-transparent hover:border-purple-500/50"
                      }`}
                    >
                      {/* Scanning Animation */}
                      <div className="absolute inset-0 overflow-hidden rounded-xl">
                        <div
                          className={`absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-purple-500 to-transparent transition-all duration-500 ${
                            activeSection === item.id
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-70"
                          }`}
                        />
                      </div>

                      <div className="relative flex items-center space-x-4">
                        <div className="relative">
                          <Icon
                            size={20}
                            className={`transition-all duration-300 ${
                              activeSection === item.id
                                ? "text-purple-400 scale-110"
                                : "text-gray-400 group-hover:text-purple-400 group-hover:scale-110"
                            }`}
                          />

                          {/* Digital Pulse */}
                          {activeSection === item.id && (
                            <div className="absolute -inset-2 border border-purple-400/50 rounded-full animate-ping" />
                          )}
                        </div>

                        <div className="flex-1 text-left">
                          <span
                            className={`font-mono font-medium transition-colors duration-300 ${
                              activeSection === item.id
                                ? "text-purple-400"
                                : "text-gray-300 group-hover:text-white"
                            }`}
                          >
                            {item.label}
                          </span>
                          {activeSection === item.id && (
                            <div className="text-xs text-purple-400/70 font-mono">
                              ACTIVE_MODULE
                            </div>
                          )}
                        </div>

                        {/* Status Indicator */}
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                              activeSection === item.id
                                ? "bg-purple-400 animate-pulse"
                                : "bg-gray-600 group-hover:bg-purple-500"
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Footer */}
            <div className="px-6 py-3 bg-gradient-to-r from-transparent to-purple-500/10 border-t border-purple-500/20">
              <div className="flex items-center justify-between">
                <span className="text-xs text-green-400/70 font-mono">
                  STATUS: ONLINE
                </span>
                <div className="flex space-x-1">
                  {[1, 2, 3].map((dot) => (
                    <div
                      key={dot}
                      className="w-1 h-1 bg-purple-400 rounded-full animate-pulse"
                      style={{ animationDelay: `${dot * 200}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
