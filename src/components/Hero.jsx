import React, { useState, useEffect } from "react";
import fotoProfile2 from "../assets/image/fotoprofile2.png";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  ArrowDown,
  Instagram,
} from "lucide-react";

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
      label: "Twitter",
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
      className="relative min-h-screen flex items-center justify-center py-10 bg-gradient-to-r from-gray-900 via-gray-900 to-purple-900 overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-pink-500 text-lg font-medium tracking-wide">
              HELLO, I'M
            </p>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Alvin</span>{" "}
              <span className="text-white">Khoirul</span>
            </h1>

            <h2 className="text-2xl lg:text-3xl text-purple-400 font-medium min-h-[3rem]">
              {text}
              <span className="animate-pulse">|</span>
            </h2>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              {socialLinks.map(({ icon: Icon, href, target, rel, label }) => (
                <a
                  key={label}
                  href={href}
                  target={target}
                  rel={rel}
                  className="text-gray-400 hover:text-pink-500 transition-all transform hover:scale-125 hover:-translate-y-1"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Profile Image di luar grid biar nempel pojok kanan */}
      <div
        className={`absolute bottom-0 right-0 z-10 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <img
          src={fotoProfile2}
          alt="Alvin Khoirul"
          className="max-h-screen object-contain"
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <button
          onClick={() => scrollToSection("about")}
          className="text-gray-400 hover:text-pink-500 transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
