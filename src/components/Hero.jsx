import React, { Suspense, lazy } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useIsMobile from "../utils/useIsMobile";

const LightRays = lazy(() => import("./LightRays"));

const Hero = () => {
  const { scrollY } = useScroll();
  const isMobile = useIsMobile(768);

  const moveLeft1 = useTransform(scrollY, [0, 800], isMobile ? [0, 0] : [0, -350]);
  const moveRight = useTransform(scrollY, [0, 800], isMobile ? [0, 0] : [0, 350]);
  const moveLeft2 = useTransform(scrollY, [0, 800], isMobile ? [0, 0] : [0, -400]);

  // Fade hero content as user scrolls away
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] w-full overflow-hidden bg-black flex flex-col justify-center items-center pt-24 pb-8 px-4 sm:px-6 md:px-12 select-none"
    >
      {/* LIGHT RAYS: Desktop WebGL / Mobile Pure CSS Glow (0ms startup) */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        {isMobile ? (
          <div className="w-full h-full relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-80"
              style={{
                background: 'radial-gradient(ellipse 90% 70% at 50% -10%, rgba(99, 102, 241, 0.4) 0%, rgba(42, 27, 77, 0.5) 45%, transparent 80%)'
              }}
            />
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: 'conic-gradient(from 180deg at 50% 0%, transparent 40%, rgba(168, 85, 247, 0.25) 48%, rgba(129, 140, 248, 0.35) 50%, rgba(168, 85, 247, 0.25) 52%, transparent 60%)'
              }}
            />
          </div>
        ) : (
          <Suspense fallback={null}>
            <LightRays
              raysOrigin="top-center"
              raysColor="#2a1b4d"
              raysSpeed={0.5}
              lightSpread={0.8}
              rayLength={1.5}
              fadeDistance={0.8}
              saturation={0.8}
              followMouse={true}
              mouseInfluence={0.08}
              noiseAmount={0.05}
              distortion={0.05}
              className="w-full h-full"
            />
          </Suspense>
        )}
      </div>

      {/* --- BACKGROUND ELEMENTS (Optimized for Mobile GPU) --- */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.03] pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-[320px] sm:w-[500px] md:w-[900px] h-[320px] sm:h-[500px] md:h-[900px] bg-[#0f0122] opacity-60 rounded-full blur-[80px] md:blur-[160px] pointer-events-none z-[1]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[320px] sm:w-[500px] md:w-[900px] h-[320px] sm:h-[500px] md:h-[900px] bg-[#1a0b3d] opacity-40 rounded-full blur-[80px] md:blur-[160px] pointer-events-none z-[1]" />

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/50 z-[2] pointer-events-none" />

      {/* TYPOGRAPHY — fades out as user scrolls away */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 w-full max-w-[1600px] mx-auto text-center"
      >
        <div className="w-full flex flex-col gap-1 md:gap-2">

          {/* I BUILD — slide left on scroll */}
          <div className="overflow-visible">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              style={{ x: moveLeft1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-[#F5F5F5] leading-[0.85] tracking-tighter text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6.5vw] uppercase whitespace-nowrap drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              I BUILD
            </motion.h1>
          </div>

          {/* IMPRESSIVE — slide right + star in center */}
          <div className="overflow-visible relative flex justify-center items-center">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              style={{ x: moveRight, WebkitTextStroke: "1px rgba(99, 102, 241, 0.8)" }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-black text-transparent leading-[0.85] tracking-tighter text-[12vw] sm:text-[11vw] md:text-[9vw] lg:text-[7.5vw] uppercase py-2 drop-shadow-[0_0_50px_rgba(99,102,241,0.3)] whitespace-nowrap"
            >
              IMPRESSIVE
            </motion.h1>

            {/* Single star, centered over the text — ikut gerak ke kanan */}
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              style={{ x: moveRight }}
              transition={{ duration: 1.5, delay: 0.8, type: "spring", bounce: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            >
              <motion.svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-indigo-400 drop-shadow-[0_0_25px_rgba(129,140,248,0.8)] w-8 h-8 md:w-14 md:h-14 lg:w-16 lg:h-16"
              >
                <path
                  d="M12 0L13.8447 8.15533L22 10L13.8447 11.8447L12 20L10.1553 11.8447L2 10L10.1553 8.15533L12 0Z"
                  fill="currentColor"
                />
              </motion.svg>
            </motion.div>
          </div>

          {/* EXPERIENCES — slide left on scroll */}
          <div className="overflow-visible">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              style={{ x: moveLeft2 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-300 via-indigo-100 to-purple-500 leading-[0.85] tracking-tighter text-[11vw] sm:text-[10vw] md:text-[8.5vw] lg:text-[7vw] uppercase pb-4 whitespace-nowrap"
            >
              EXPERIENCES.
            </motion.h1>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
