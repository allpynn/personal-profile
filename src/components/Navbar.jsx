import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import logoImg from "../assets/image/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const lastScrollY = useRef(0);

  // Constants
  const PREMIUM_EASE = [0.16, 1, 0.3, 1];

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
        setIsScrolled(false);
      } else if (currentScrollY > lastScrollY.current + 5) {
        // Scrolling down
        if (!isOpen) setIsVisible(false);
        setIsScrolled(true);
      } else if (currentScrollY < lastScrollY.current - 5) {
        // Scrolling up
        setIsVisible(true);
        setIsScrolled(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsVisible(true);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const secondaryLinks = [
    { name: "GitHub", href: "https://github.com/allpynn" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/alvinkhoirul" },
    { name: "Instagram", href: "https://www.instagram.com/alviin.riz" },
    { name: "Discord", href: "https://discord.gg/vREhBBzyGa" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Use", href: "#" },
    { name: "Safety Policy", href: "#" },
  ];

  const scrollToTop = (e) => {
    e?.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const curtainLayers = [
    { color: "#ffffffff" },
    { color: "#adadadff" },
    { color: "#000000" },
    { color: "#0f0122ff" },
  ];

  const layerVariants = {
    initial: { y: "-100%" },
    animate: (i) => ({
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: PREMIUM_EASE
      }
    }),
    exit: (i) => ({
      y: "-100%",
      transition: {
        duration: 0.65,
        delay: (curtainLayers.length - 1 - i) * 0.05,
        ease: PREMIUM_EASE
      }
    })
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: PREMIUM_EASE }}
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 py-6 transition-all duration-300 ${isScrolled && !isOpen
          ? "bg-[#0f0122]/30 backdrop-blur-md border-b border-white/5 shadow-2xl"
          : "bg-transparent"
          }`}
      >
        {/* Left Container (Hamburger on Desktop, Logo on Mobile) */}
        <div className="flex items-center gap-4 z-[110] order-first md:order-none">
          {/* Logo Monogram — Mobile Left */}
          <div className="md:hidden">
            <button onClick={scrollToTop} className="flex items-center focus:outline-none">
              <img src={logoImg} alt="Logo" className="w-9 h-9 object-contain drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]" />
            </button>
          </div>

          {/* Hamburger — Desktop Left Position */}
          <div className="hidden md:block">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group flex items-center gap-3 focus:outline-none text-white font-bold tracking-widest text-sm uppercase"
            >
              <div className="flex flex-col gap-1.5 pointer-events-none">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  className="w-6 h-[2.5px] bg-white block"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  className="w-6 h-[2.5px] bg-white block"
                />
              </div>
              <span className="hidden md:block">
                {isOpen ? "Close" : "Menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Center Container (Desktop Logo Only) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 overflow-visible">
          <div
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
            onClick={scrollToTop}
            className="flex items-center justify-center p-2 relative group cursor-pointer"
          >
            <motion.div
              animate={{ x: isLogoHovered ? -100 : 0 }}
              transition={{ duration: 0.6, ease: PREMIUM_EASE }}
              className="relative z-10"
            >
              <img src={logoImg} alt="Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(168,85,247,0.3)] hover:scale-105 transition-transform" />
            </motion.div>

            <AnimatePresence>
              {isLogoHovered && (
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: -40 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.5, ease: PREMIUM_EASE }}
                  className="absolute left-[100%] text-2xl font-bold tracking-tighter text-white whitespace-nowrap drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                >
                  ALVIN <span className="italic font-light opacity-80 uppercase">KHOIRUL</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Container (Hamburger on Mobile, GitHub on Desktop) */}
        <div className="flex items-center gap-6 z-[110] order-last md:order-none">
          {/* Hamburger — Mobile Right Position */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group flex flex-col gap-1.5 focus:outline-none p-2"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="w-6 h-[2.5px] bg-white block transition-colors duration-300"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className="w-6 h-[2.5px] bg-white block transition-colors duration-300"
              />
            </button>
          </div>

          {/* GitHub — Desktop Only */}
          <div className="hidden md:block">
            <a
              href="https://github.com/allpynn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-bold tracking-widest uppercase hover:text-purple-400 transition-colors text-white"
            >
              GitHub <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay-container"
            exit={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="fixed inset-0 z-[90] overflow-hidden"
          >
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm pointer-events-auto"
            />

            {/* Curtain layers */}
            {curtainLayers.map((layer, i) => (
              <motion.div
                key={`layer-${i}`}
                custom={i}
                variants={layerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                style={{ backgroundColor: layer.color, zIndex: 91 + i }}
                className="absolute inset-0 h-[calc(100vh-140px)] rounded-b-[40px] shadow-2xl border-b border-white/5"
              />
            ))}

            <motion.div
              key="menu-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                y: "-100%",
                opacity: 0,
                transition: { duration: 0.65, delay: 0, ease: PREMIUM_EASE }
              }}
              transition={{ duration: 0.6, delay: 0.5, ease: PREMIUM_EASE }}
              style={{ zIndex: 100 }}
              className="relative h-[calc(100vh-140px)] w-full flex items-start px-8 md:px-24 overflow-y-auto pt-24 md:pt-32 pb-12 pointer-events-auto"
            >
              <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
                <div className="flex flex-col gap-1 md:gap-2">
                  {menuItems.map((item, i) => (
                    <motion.div key={item.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + (i * 0.05) }} className="overflow-hidden">
                      <a href={item.href} onClick={() => setIsOpen(false)} className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-[-0.04em] hover:text-[#4f46e5] transition-colors block leading-[1.0] uppercase">
                        {item.name}
                      </a>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col gap-10 md:text-right pt-6 md:pt-10">
                  <div>
                    <div className="flex flex-col md:items-end gap-2">
                      {secondaryLinks.map((link, i) => (
                        <motion.a 
                          key={link.name} 
                          href={link.href} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 + (i * 0.05) }}
                          className="text-white/40 hover:text-white transition-colors text-xs md:text-lg font-bold flex items-center gap-2 group uppercase tracking-widest"
                        >
                          <span className="md:order-last">{link.name}</span>
                          <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap md:justify-end gap-4 border-t border-white/5 pt-6">
                    {legalLinks.map((link) => (
                      <a key={link.name} href={link.href} className="text-[8px] font-black tracking-[0.2em] text-white/10 hover:text-white uppercase transition-colors">
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
