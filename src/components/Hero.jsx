import React, { useState, useEffect } from "react";
import fotoProfile2 from "../assets/image/fotoprofile2.png";
import { Github, Linkedin, Mail, ArrowDown, Instagram } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Software Developer & UI/UX Enthusiast";

  useEffect(() => {
    setIsVisible(true);

    // Typewriter effect
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/allpynn",
      target: "_blank",
      rel: "noopener",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/alvinkhoirul",
      target: "_blank",
      rel: "noopener",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/alviin.riz",
      target: "_blank",
      rel: "noopener",
      label: "Instagram",
    },
    {
      icon: Mail,
      href: "mailto:choirulnarizky89@gmail.com",
      target: "_blank",
      rel: "noopener",
      label: "Email",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-r from-gray-900 to-purple-800 overflow-hidden"
    >
      {/* Geometric Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-900 via-purple-700 to-purple-500 transform skew-x-12 translate-x-2/4"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-900 via-purple-700 to-purple-500 transform -skew-x-12 translate-x-2/4"></div>
        <div className="absolute inset-0 opacity-50">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, #0f172a 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="w-full h-full relative z-10">
        {/* Mobile Layout */}
        <div className="lg:hidden relative flex items-center justify-center min-h-screen px-4 py-8">
          {/* Foto Background di kanan */}
          <div
            className={`absolute top-0 right-0 bottom-0 h-full z-0 overflow-hidden transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-20 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <img
              src={fotoProfile2}
              alt="Alvin Khoirul"
              className="w-full h-full object-cover object-left"
            />
          </div>

          {/* Text Content Center */}
          <div
            className={`relative z-10 text-center space-y-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-purple-500 text-sm font-medium tracking-wide">
              HELLO, I'M
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              <span className="text-white">Alvin</span>{" "}
              <span className="text-white">Khoirul</span>
            </h1>

            <h2 className="text-lg sm:text-xl text-purple-500 font-medium min-h-[2rem]">
              {text}
              <span className="animate-pulse">|</span>
            </h2>

            <div className="flex justify-center space-x-4 pt-4">
              {socialLinks.map(({ icon: Icon, href, target, rel, label }) => (
                <a
                  key={label}
                  href={href}
                  target={target}
                  rel={rel}
                  className="text-gray-400 hover:text-purple-500 transition-all transform hover:scale-125 hover:-translate-y-1"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex h-full">
          {/* Left: Text Content */}
          <div className="flex-1 flex items-center px-8 xl:px-12">
            <div className="max-w-2xl ml-20">
              <div
                className={`space-y-6 transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <p className="text-purple-500 text-lg font-medium tracking-wide">
                  HELLO, I'M
                </p>

                <h1 className="text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="text-white">Alvin</span>{" "}
                  <span className="text-white">Khoirul</span>
                </h1>

                <h2 className="text-3xl text-purple-500 font-medium min-h-[3rem]">
                  {text}
                  <span className="animate-pulse">|</span>
                </h2>

                <div className="flex space-x-6 pt-4">
                  {socialLinks.map(
                    ({ icon: Icon, href, target, rel, label }) => (
                      <a
                        key={label}
                        href={href}
                        target={target}
                        rel={rel}
                        className="text-gray-400 hover:text-purple-500 transition-all transform hover:scale-125 hover:-translate-y-1"
                        aria-label={label}
                      >
                        <Icon size={24} />
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Profile Image - Mentok ke tepi kanan */}
          <div className="relative">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              {/* Container foto yang mentok ke kanan */}
              <div className="relative h-screen flex items-center">
                <img
                  src={fotoProfile2}
                  alt="Alvin Khoirul"
                  className="w-full h-full xl:max-w-lg object-cover object-center rounded-2xl"
                />

                {/* Decorative circle - Desktop */}
                <div className="absolute -bottom-8 -left-8 w-56 xl:w-64 h-56 xl:h-64 border-4 border-dashed border-purple-500 rounded-full opacity-80 animate-spin-slow"></div>

                {/* Additional decorative element */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <button
          onClick={() => scrollToSection("about")}
          className="text-gray-400 hover:text-pink-500 transition-colors p-2"
        >
          <ArrowDown size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
