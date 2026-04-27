import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Download, ExternalLink, MapPin } from "lucide-react";
import profileImg from "../assets/image/fotoprofile.png";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.98,
      filter: "blur(10px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full bg-black px-6 md:px-12 py-12 md:py-20 overflow-hidden text-white"
    >
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        {/* --- WATERMARK TEXT --- */}
        <div className="absolute -top-20 -left-10 opacity-5 pointer-events-none select-none">
          <h2 className="font-display font-black text-[12rem] md:text-[20rem] leading-none uppercase tracking-tighter">
            ABOUT
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15, margin: "0px 0px -100px 0px" }}
          className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32 relative mt-6 md:mt-12"
        >
          {/* --- LEFT CONTENT --- */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 md:gap-12 relative z-10">
            <motion.div variants={itemVariants}>
              <h1 className="font-display font-black text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.85] uppercase tracking-tighter mb-4">
                <span className="text-gradient">ALVIN</span><br />
                <span className="bg-white text-black px-4 sm:px-8 inline-block mt-3 transform -rotate-1 hover:rotate-0 transition-transform duration-500 shadow-[0_10px_30px_rgba(79,70,229,0.15)] border-l-4 border-indigo-500">
                  KHOIRUL
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-8">
              <div className="space-y-6">
                <p className="font-sans text-white/70 text-lg md:text-xl max-w-xl leading-relaxed">
                  Creative and solution-oriented individual with dual expertise as a
                  <span className="text-white font-bold decoration-indigo-500/50 underline underline-offset-4"> Fullstack Developer</span> and
                  <span className="text-white font-bold decoration-purple-500/50 underline underline-offset-4"> Graphic Designer</span>.
                </p>
                <p className="font-sans text-white/50 text-base md:text-lg max-w-xl leading-relaxed">
                  Proficient in building robust and responsive web applications, as well as crafting
                  captivating and user-friendly visuals. Adept at translating business
                  needs into innovative digital solutions.
                </p>
              </div>

              <div className="flex items-center gap-4 bg-white/5 w-fit px-5 py-3 rounded-full border border-white/10 backdrop-blur-sm">
                <div className="relative flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                  <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping" />
                </div>
                <span className="text-white/80 font-sans text-sm md:text-base font-medium">Available for new opportunities 🚀</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-8 md:gap-12 mt-4">
              {/* SOCIAL ICONS */}
              <div className="flex gap-8">
                {[
                  { icon: Github, href: "https://github.com/allpynn", label: "Github" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/alvinkhoirul", label: "Linkedin" },
                  { icon: Instagram, href: "https://www.instagram.com/alviin.riz", label: "Instagram" }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white transition-all transform hover:scale-110 hover:-translate-y-1"
                    title={social.label}
                  >
                    <social.icon size={26} strokeWidth={1.5} />
                  </a>
                ))}
              </div>

              {/* DOWNLOAD CV BUTTON */}
              <a
                href="#"
                className="group relative inline-flex items-center gap-3 bg-white text-black px-8 md:px-10 py-4 md:py-5 rounded-2xl font-sans font-black text-xs md:text-sm uppercase tracking-widest overflow-hidden transition-all hover:bg-indigo-50 active:scale-95 shadow-[0_15px_30px_rgba(255,255,255,0.1)] border-b-4 border-indigo-500/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Download CV <Download size={18} className="transition-transform group-hover:translate-y-1" />
                </span>
                <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <ExternalLink size={18} />
                </span>
              </a>
            </motion.div>
          </div>

          {/* --- RIGHT CONTENT (PHOTO) --- */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end items-center mt-12 lg:mt-0">
            <motion.div
              variants={itemVariants}
              className="relative w-full max-w-[450px] aspect-[4/5] md:aspect-[4/5] rounded-[3rem] overflow-hidden group mx-4 md:mx-0"
            >
              <img
                src={profileImg}
                alt="Alvin Khoirul"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

              {/* HIGH-END DASHBOARD OVERLAY */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-0 left-0 right-4 sm:right-6 p-5 sm:p-7 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] flex flex-col gap-5 sm:gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group/card hover:bg-white/[0.05] transition-colors duration-500"
              >
                {/* TOP ROW: ROLE & STATUS */}
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Active_Status</span>
                    </div>
                    <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl text-white leading-[0.9] uppercase tracking-tighter">
                      FULLSTACK<br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/20">DEVELOPER</span>
                    </h3>
                  </div>
                </div>

                {/* BOTTOM ROW: METRICS */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20">Location_ID</span>
                    <div className="flex items-center gap-2">
                      <MapPin size={12} className="text-white/40" />
                      <span className="text-xs font-bold tracking-tight text-white/80 uppercase">YOGYAKARTA</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 text-right border-l border-white/5 pl-4">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20">Core_Version</span>
                    <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">2022_OP.01</span>
                  </div>
                </div>

                {/* DECORATIVE CORNER ELEMENT */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-indigo-500/20 to-transparent pointer-events-none rounded-tr-[2.5rem]" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
