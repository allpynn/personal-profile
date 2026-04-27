import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./Reactbits/ScrollReveal";
import HMIF from "../assets/image/HMIF.jpg";
import SMAIT from "../assets/image/AULIYA-VIDEO.jpg";
import UKM from "../assets/image/UKM-BASKET.jpg";

const Experience = () => {
  const experiences = [
    {
      title: "Juara 2 Lomba Videografi",
      org: "SMAIT AL-Auliya",
      desc: "Tingkat SMA Se-Balikpapan",
      image: SMAIT,
      tag: "VIDEOGRAFI",
      year: "2023"
    },
    {
      title: "Manager",
      org: "UKM Basket UAD",
      desc: "Universitas Ahmad Dahlan 2023/2025",
      image: UKM,
      tag: "ORGANIZATION",
      year: "2024"
    },
    {
      title: "Staff Minat Dan Bakat",
      org: "HMIF UAD",
      desc: "Himpunan Mahasiswa Informatika 2024/2025",
      image: HMIF,
      tag: "DEVELOPMENT",
      year: "2024"
    }
  ];

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const sectionScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  const sectionY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  
  const headerX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-100, 0, 0, 100]);
  const descX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  return (
    <section ref={sectionRef} id="experience" className="bg-black pt-10 pb-40 relative overflow-hidden flex flex-col items-center">

      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.02] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0f0122] opacity-40 rounded-full blur-[150px] pointer-events-none" />

      <motion.div 
        style={{ opacity: sectionOpacity, scale: sectionScale, y: sectionY }}
        className="container max-w-[1400px] mx-auto px-6 relative z-10"
      >
        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-8 mb-32 overflow-visible">
          <motion.div style={{ x: headerX }} className="flex-1">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-6 block">03 / CAREER PATH</span>
            <h2 className="text-7xl md:text-8xl font-display font-black tracking-tighter text-white uppercase leading-[0.8]">
              <div className="flex items-center gap-4">
                JOURNEY <span className="text-outline italic">&</span>
              </div>
              <span className="text-outline italic">HISTORY.</span>
            </h2>
          </motion.div>

          <motion.div style={{ x: descX }} className="max-w-md">
            <ScrollReveal
              text="A curated timeline of professional contributions and academic achievements."
              className="text-white/80 text-lg font-sans leading-relaxed text-left md:text-right"
              baseOpacity={0.2}
            />
          </motion.div>
        </div>

        <div className="space-y-1">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col md:flex-row items-center gap-8 py-10 border-t border-white/5 hover:bg-white/[0.02] transition-all duration-700 px-8 rounded-2xl"
            >
              <div className="w-full md:w-32 text-zinc-600 font-mono text-sm tracking-widest pt-2">
                [{exp.year}]
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:translate-x-4 transition-transform duration-700">
                    {exp.title}
                  </h3>
                  <span className="px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-white group-hover:border-white/40 transition-all">
                    {exp.tag}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-400 font-medium capitalize text-lg">{exp.org}</span>
                  <p className="text-zinc-600 text-sm max-w-2xl leading-relaxed">{exp.desc}</p>
                </div>
              </div>

              <div className="relative w-full md:w-48 aspect-video md:aspect-square rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 border border-white/5">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
              </div>

              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-0 bg-white group-hover:h-12 transition-all duration-700 rounded-full" />
            </div>
          ))}
        </div>
      </motion.div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-white/10 to-transparent" />
    </section>
  );
};

export default Experience;
