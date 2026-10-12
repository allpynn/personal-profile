import React, { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LogoLoop from "./Reactbits/LogoLoop";
import ScrollReveal from "./Reactbits/ScrollReveal";
import useIsMobile from "../utils/useIsMobile";

import reactIcon from "../assets/icons/react.svg";
import typescriptIcon from "../assets/icons/typescript.svg";
import nextjsIcon from "../assets/icons/nextjs.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import nodejsIcon from "../assets/icons/nodejs.svg";
import laravelIcon from "../assets/icons/laravel.svg";
import phpIcon from "../assets/icons/php.svg";
import mysqlIcon from "../assets/icons/mysql.svg";
import mongodbIcon from "../assets/icons/mongodb.svg";
import pythonIcon from "../assets/icons/python.svg";
import cplusplusIcon from "../assets/icons/cplusplus.svg";
import tailwindcssIcon from "../assets/icons/tailwindcss.svg";
import bootstrapIcon from "../assets/icons/bootstrap.svg";
import gitIcon from "../assets/icons/git.svg";
import dockerIcon from "../assets/icons/docker.svg";
import jupyterIcon from "../assets/icons/jupyter.svg";
import vscodeIcon from "../assets/icons/vscode.svg";
import githubIcon from "../assets/icons/github.svg";
import figmaIcon from "../assets/icons/figma.svg";
import androidstudioIcon from "../assets/icons/androidstudio.svg";
import coreldrawIcon from "../assets/icons/coreldraw.svg";
import laragonIcon from "../assets/icons/laragon.svg";

const LOCAL_ICONS = {
  react: reactIcon,
  typescript: typescriptIcon,
  nextjs: nextjsIcon,
  javascript: javascriptIcon,
  nodejs: nodejsIcon,
  laravel: laravelIcon,
  php: phpIcon,
  mysql: mysqlIcon,
  mongodb: mongodbIcon,
  python: pythonIcon,
  cplusplus: cplusplusIcon,
  tailwindcss: tailwindcssIcon,
  bootstrap: bootstrapIcon,
  git: gitIcon,
  docker: dockerIcon,
  jupyter: jupyterIcon,
  visualstudiocode: vscodeIcon,
  vscode: vscodeIcon,
  github: githubIcon,
  figma: figmaIcon,
  androidstudio: androidstudioIcon,
  coreldraw: coreldrawIcon,
  laragon: laragonIcon,
};

const TECH_STACK = [
  { name: "React", icon: "react", color: "#61DAFB" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6" },
  { name: "Next.js", icon: "nextjs", color: "#FFFFFF" },
  { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
  { name: "Node.js", icon: "nodejs", color: "#339933" },
  { name: "Laravel", icon: "laravel", color: "#FF2D20" },
  { name: "PHP", icon: "php", color: "#777BB4" },
  { name: "MySQL", icon: "mysql", color: "#4479A1" },
  { name: "MongoDB", icon: "mongodb", color: "#47A248" },
  { name: "Python", icon: "python", color: "#3776AB" },
  { name: "C++", icon: "cplusplus", color: "#00599C" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
  { name: "Bootstrap", icon: "bootstrap", color: "#7952B3" },
  { name: "Git", icon: "git", color: "#F05032" },
  { name: "Docker", icon: "docker", color: "#2496ED" },
  { name: "Jupyter", icon: "jupyter", color: "#F37626" },
];

const TOOLS = [
  { name: "VS Code", icon: "visualstudiocode" },
  { name: "GitHub", icon: "github" },
  { name: "Figma", icon: "figma" },
  { name: "Android Studio", icon: "androidstudio" },
  { name: "Git", icon: "git" },
  { name: "CorelDraw", icon: "coreldraw" },
  { name: "Laragon", icon: "laragon" },
];

const Skill = () => {
  const sectionRef = useRef(null);
  const isMobile = useIsMobile(768);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const sectionScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], isMobile ? [1, 1, 1, 1] : [0.98, 1, 1, 0.98]);
  const sectionY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], isMobile ? [0, 0, 0, 0] : [50, 0, 0, -50]);
  
  const headerX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], isMobile ? [0, 0, 0, 0] : [-50, 0, 0, 50]);
  const descX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], isMobile ? [0, 0, 0, 0] : [50, 0, 0, -50]);

  const getIconUrl = (slug) => LOCAL_ICONS[slug] || '';

  const toolItems = useMemo(() => TOOLS.map(tool => ({
    logo: getIconUrl(tool.icon),
    name: tool.name,
    link: "#"
  })), []);

  return (
    <section ref={sectionRef} id="skills" className="relative w-full bg-black px-6 md:px-12 py-20 md:py-32 overflow-hidden text-white flex flex-col items-center select-none">

      <div className="absolute inset-0 bg-grid-white opacity-[0.02] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[350px] md:w-[800px] h-[350px] md:h-[800px] bg-[#0f0122] opacity-40 rounded-full blur-[70px] md:blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] md:w-[800px] h-[350px] md:h-[800px] bg-[#0f0122] opacity-30 rounded-full blur-[70px] md:blur-[150px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <motion.div
        style={{ opacity: sectionOpacity, scale: sectionScale, y: sectionY }}
        className="container max-w-[1400px] mx-auto relative z-10"
      >
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-24 overflow-visible">
          <motion.div style={{ x: headerX }} className="flex-1 w-full">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-6 block">02 / COMPETENCIES</span>
            <h2 className="text-5xl sm:text-7xl md:text-9xl font-display font-black tracking-tighter text-white uppercase leading-[0.8]">
              CORE <br />
              <span className="text-outline italic">STACK.</span>
            </h2>
          </motion.div>

          <motion.div style={{ x: descX }} className="max-w-md w-full">
            <ScrollReveal
              text="Architecting digital products with a robust ecosystem of modern technologies and professional creative tools."
              className="text-white/80 text-lg font-sans leading-relaxed text-left md:text-right"
              baseOpacity={0.2}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-0 border-white/5 border-[0.5px] rounded-[2rem] overflow-hidden shadow-2xl">
          {TECH_STACK.map((tech, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center justify-center aspect-square bg-[#050505] hover:bg-white/[0.04] transition-all duration-500 group p-4 border-white/5 border-[0.5px]"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${tech.color || 'white'} 0%, transparent 70%)` }}
              />

              <div className="relative z-10 mb-5 transition-all duration-500 group-hover:scale-125 group-hover:-rotate-6 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <img
                  src={getIconUrl(tech.icon)}
                  alt={tech.name}
                  loading="lazy"
                  decoding="async"
                  width="48"
                  height="48"
                  className="w-10 h-10 md:w-12 md:h-12 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              <span className="relative z-10 text-[9px] font-black uppercase tracking-widest text-white/20 group-hover:text-white transition-colors duration-500 text-center px-1">
                {tech.name}
              </span>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-40 transition-opacity">
                <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-40 w-full relative"
        >
          <div className="flex justify-center mb-16 px-4">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/10 flex items-center gap-6 w-full max-w-lg">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
              PRODUCTION SUITE
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
            </span>
          </div>

          <div className="w-full relative py-12">
            <LogoLoop
              items={toolItems}
              direction="left"
              speed={60}
              fade={true}
              fadeColor="black"
              gap="4rem"
            />
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-white/10 to-transparent" />
    </section>
  );
};

export default Skill;
