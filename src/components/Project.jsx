import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Github, ChevronDown, ChevronUp } from "lucide-react";
import ScrollReveal from "./Reactbits/ScrollReveal";
import ProjectTahfidz from "../assets/image/tahfidz.png";
import ProjectKalimantan from "../assets/image/kalimantan.png";
import ProjectWorkout from "../assets/image/workout.png";
import ProjectImg1 from "../assets/image/project1.png";
import ProjectImg2 from "../assets/image/project2.png";
import ProjectImg3 from "../assets/image/project3.png";

const PROJECTS = [
  {
    title: "Tahfidz Monitoring System",
    category: "Full-stack (Laravel)",
    description: "A comprehensive web-based platform for Ponpes Al Mujahidin to track and monitor student Quran memorization progress in real-time.",
    image: ProjectTahfidz,
    tags: ["Laravel", "PHP", "Reverb", "MySQL"],
    link: "https://github.com/allpynn/web-monitoring-tahfidz",
    github: "https://github.com/allpynn/web-monitoring-tahfidz"
  },
  {
    title: "Persona Kalimantan",
    category: "Immersive Landing Page",
    description: "An educational platform exploring the rich cultural heritage and tourism potential of the Kalimantan rainforest and its people.",
    image: ProjectKalimantan,
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/allpynn/webdasar-persona-kalimantan",
    github: "https://github.com/allpynn/webdasar-persona-kalimantan"
  },
  {
    title: "Fitness & Workout App",
    category: "Mobile (Android)",
    description: "A native mobile application built for modern fitness enthusiasts to track exercises, manage routines, and visualize physical progress.",
    image: ProjectWorkout,
    tags: ["Kotlin", "Android SDK", "Jetpack"],
    link: "https://github.com/allpynn/aplikasi-workout",
    github: "https://github.com/allpynn/aplikasi-workout"
  },
  {
    title: "Voice Detector Sederhana",
    category: "Experimental (Python)",
    description: "A simple yet effective voice detection program utilizing the SpeechRecognition library for audio analysis.",
    image: ProjectImg1,
    tags: ["Python", "SpeechRecognition"],
    link: "https://github.com/allpynn/voice-detector-sederhana",
    github: "https://github.com/allpynn/voice-detector-sederhana"
  },
  {
    title: "Picture Puzzle Game",
    category: "Game Dev (Java)",
    description: "A classic picture puzzle game built with Java Swing, focusing on logical problem solving and clean UI design.",
    image: ProjectImg2,
    tags: ["Java", "Swing", "OOP"],
    link: "https://github.com/allpynn/picture-puzzle",
    github: "https://github.com/allpynn/picture-puzzle"
  },
  {
    title: "Yoyoknesia Web Profile",
    category: "Company Profile",
    description: "A professional and responsive web profile designed for Yoyoknesia to showcase corporate identity and services.",
    image: ProjectImg3,
    tags: ["PHP", "CSS", "MySQL"],
    link: "https://github.com/allpynn/Web-Profile-yoyoknesia",
    github: "https://github.com/allpynn/Web-Profile-yoyoknesia"
  }
];

const Project = () => {
  const [showAll, setShowAll] = useState(false);
  
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);
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
    <section ref={sectionRef} id="projects" className="relative w-full bg-[#030303] px-6 md:px-12 pt-40 pb-10 overflow-hidden text-white flex flex-col items-center select-none">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.015] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[1000px] h-[1000px] bg-[#0f0122] opacity-40 rounded-full blur-[180px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <motion.div 
        style={{ opacity: sectionOpacity, scale: sectionScale, y: sectionY }}
        className="container max-w-[1400px] mx-auto relative z-10"
      >
        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-12 mb-32 overflow-visible">
          <motion.div style={{ x: headerX }} className="flex-1">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-6 block">04 / SELECTED WORKS</span>
            <h2 className="text-7xl md:text-9xl font-display font-black tracking-tighter text-white uppercase leading-[0.8]">
              FEATURED <br />
              <span className="text-outline italic">PROJECTS.</span>
            </h2>
          </motion.div>
          
          <motion.div style={{ x: descX }} className="max-w-md">
            <ScrollReveal
              text="Directly harvested from my GitHub ecosystem, these projects represent my journey in building scalable and impactful digital solutions."
              className="text-white/80 text-lg font-sans leading-relaxed text-left md:text-right"
              baseOpacity={0.2}
            />
          </motion.div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, idx) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative flex flex-col bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden hover:bg-white/[0.04] transition-all duration-700"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Floating Tags */}
                    <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/80">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-3 block">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-white transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-1">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <div className="flex items-center gap-4">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/40 transition-all">
                          <Github size={18} />
                        </a>
                      </div>
                      <motion.a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-colors"
                      >
                        GITHUB REPO
                        <div className="w-6 h-px bg-white/20 group-hover:w-10 group-hover:bg-white transition-all duration-500" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute -inset-px rounded-[2.5rem] border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Blur Gradient (suggests more content) */}
        {!showAll && (
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />
        )}

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 w-full flex justify-center py-10 relative z-30"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[80px] bg-indigo-500/10 blur-[60px] rounded-full pointer-events-none" />
          <motion.button 
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 rounded-full bg-white text-black font-black uppercase tracking-[0.3em] text-xs hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all flex items-center gap-3 relative overflow-hidden"
          >
            {showAll ? (
              <>VIEW LESS <ChevronUp size={16} /></>
            ) : (
              <>VIEW MORE <ChevronDown size={16} /></>
            )}
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-white/10 to-transparent" />
    </section>
  );
};

export default Project;
