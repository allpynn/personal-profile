import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./Reactbits/ScrollReveal";
import useReducedMotion from "../utils/useReducedMotion";

const experiences = [
  {
    title: "Information Technology Intern",
    org: "PT. Kilang Pertamina Internasional",
    desc: "PT. Kilang Pertamina Internasional internship program for 2025/2026, focusing on computer vision and machine learning projects.",
    tag: "INTERNSHIP",
    year: "2025 - 2026"
  },
  {
    title: "Staff Minat Dan Bakat",
    org: "HMIF UAD",
    desc: "Himpunan Mahasiswa Informatika 2024/2025",
    tag: "ORGANIZATION",
    year: "2024 - 2025"
  },
  {
    title: "Manager",
    org: "UKM Basket UAD",
    desc: "Universitas Ahmad Dahlan 2023/2025",
    tag: "ORGANIZATION",
    year: "2023 - 2025"
  },
  {
    title: "Juara 2 Lomba Videografi",
    org: "SMAIT AL-Auliya",
    desc: "Tingkat SMA Se-Balikpapan",
    tag: "COMPETITION",
    year: "2022"
  }
];

const Experience = () => {
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], reduced ? [1, 1, 1, 1] : [0, 1, 1, 0]);
  const sectionScale  = useTransform(scrollYProgress, [0, 0.2, 0.8, 1],   reduced ? [1, 1, 1, 1] : [0.98, 1, 1, 0.98]);
  const sectionY      = useTransform(scrollYProgress, [0, 0.2, 0.8, 1],   reduced ? [0, 0, 0, 0] : [50, 0, 0, -50]);
  const headerX       = useTransform(scrollYProgress, [0, 0.3, 0.7, 1],   reduced ? [0, 0, 0, 0] : [-50, 0, 0, 50]);
  const descX         = useTransform(scrollYProgress, [0, 0.3, 0.7, 1],   reduced ? [0, 0, 0, 0] : [50, 0, 0, -50]);

  return (
    <section ref={sectionRef} id="experience" className="bg-black pt-10 pb-24 md:pb-40 relative overflow-hidden flex flex-col items-center">

      {/* Background Decor — lighter on mobile */}
      <div className="absolute top-0 right-0 w-[250px] md:w-[800px] h-[250px] md:h-[800px] bg-[#0f0122] opacity-30 md:opacity-40 rounded-full blur-[60px] md:blur-[150px] pointer-events-none" />

      <motion.div
        style={{ opacity: sectionOpacity, scale: sectionScale, y: sectionY }}
        className="container max-w-[1400px] mx-auto px-6 relative z-10"
      >
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-24 md:mb-32 overflow-visible">
          <motion.div style={{ x: headerX }} className="flex-1 w-full">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-6 block">03 / CAREER PATH</span>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-tighter text-white uppercase leading-[0.8]">
              <div className="flex items-center gap-4">
                JOURNEY <span className="text-outline italic">&</span>
              </div>
              <span className="text-outline italic">HISTORY.</span>
            </h2>
          </motion.div>

          <motion.div style={{ x: descX }} className="max-w-md w-full">
            <ScrollReveal
              text="A curated timeline of professional contributions and academic achievements."
              className="text-white/80 text-lg font-sans leading-relaxed text-left md:text-right"
            />
          </motion.div>
        </div>

        <div className="space-y-1">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 py-8 md:py-10 border-t border-white/5 hover:bg-white/[0.02] transition-colors duration-500 px-4 md:px-8 rounded-2xl"
            >
              <div className="w-full md:w-32 text-zinc-600 font-mono text-sm tracking-widest pt-1">
                [{exp.year}]
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-3">
                  <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight md:group-hover:translate-x-4 md:transition-transform md:duration-700">
                    {exp.title}
                  </h3>
                  <span className="px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-white group-hover:border-white/40 transition-all">
                    {exp.tag}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-400 font-medium capitalize text-base md:text-lg">{exp.org}</span>
                  <p className="text-zinc-600 text-sm max-w-2xl leading-relaxed">{exp.desc}</p>
                </div>
              </div>

              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-0 bg-white group-hover:h-12 transition-all duration-700 rounded-full hidden md:block" />
            </div>
          ))}
        </div>
      </motion.div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-white/10 to-transparent" />
    </section>
  );
};

export default Experience;
