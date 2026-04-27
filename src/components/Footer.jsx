import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, ArrowUp, Send } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0]);
  const sectionScale = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.95, 1, 1, 0.95]);
  const sectionY = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [50, 0, 0, -50]);
  
  const headerX = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [-100, 0, 0, 100]);
  const formY = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [100, 0, 0, -100]);

  const socialLinks = [
    { icon: Github, href: "https://github.com/allpynn", label: "GitHub", handle: "@allpynn" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/alvinkhoirul", label: "LinkedIn", handle: "Alvin Khoirul" },
    { icon: Instagram, href: "https://www.instagram.com/alviin.riz", label: "Instagram", handle: "@alviin.riz" },
    { icon: Mail, href: "mailto:choirulnarizky89@gmail.com", label: "Email", handle: "Send Mail" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={sectionRef} id="contact" className="relative w-full bg-[#030303] pt-40 pb-10 overflow-hidden text-white flex flex-col items-center">

      {/* Kinetic Marquee Top */}
      <div className="absolute top-0 w-full overflow-hidden border-y border-white/5 py-4 bg-[#0f0122] opacity-30">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-20"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">
              GET IN TOUCH • AVAILABLE FOR HIRE • COLLABORATE • LET'S BUILD SOMETHING •
            </span>
          ))}
        </motion.div>
      </div>

      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.02] overflow-hidden whitespace-nowrap">
        <h2 className="text-[30vw] font-black leading-none">CONTACT</h2>
      </div>

      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.01] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#0f0122] opacity-40 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        style={{ opacity: sectionOpacity, scale: sectionScale, y: sectionY }}
        className="container max-w-[1400px] mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start mb-40 overflow-visible">

          {/* Left Column: Heading & Status */}
          <div className="lg:col-span-6 overflow-visible">
            <motion.div style={{ x: headerX }}>

              <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter text-white uppercase leading-[0.9] mb-12">
                LET'S MAKE <br />
                <span className="text-outline italic">IT HAPPEN.</span>
              </h2>

              <p className="text-white/40 text-lg font-sans leading-relaxed max-w-sm mb-16">
                Currently exploring new opportunities and interesting projects. My inbox is always open.
              </p>

              <div className="flex flex-wrap gap-4 mb-16">
                {socialLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all font-black uppercase text-[10px] flex items-center gap-2"
                  >
                    <link.icon size={16} />
                    <span className="hidden md:inline">{link.label}</span>
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="mailto:choirulnarizky89@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-4 group p-1 bg-white/[0.05] border border-white/10 rounded-full pr-8 hover:bg-white hover:text-black transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black">
                  <Send size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 Transition-opacity">Direct Email</span>
                  <span className="text-sm font-bold tracking-tight">choirulnarizky89@gmail.com</span>
                </div>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6 overflow-visible">
            <motion.div
              style={{ y: formY }}
              className="bg-white/[0.02] border border-white/5 p-6 md:p-10 rounded-[2rem] backdrop-blur-sm max-w-2xl mx-auto lg:mx-0"
            >
              <div className="mb-12 text-right">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/30 block mb-2">GOT A QUESTION, IDEA, OR PROJECT?</span>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white uppercase">
                  WE'D LOVE TO HEAR FROM YOU AND <br className="hidden md:block" />
                  DISCUSS <span className="text-outline italic">FURTHER!</span>
                </h3>
              </div>

              <form
                action="https://formspree.io/f/mqakevve"
                method="POST"
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/20">FIRST NAME</label>
                    <input name="first_name" type="text" required placeholder="Your first name" className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder:text-white/10 focus:outline-none focus:border-white transition-colors font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/20">LAST NAME</label>
                    <input name="last_name" type="text" required placeholder="Your last name" className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder:text-white/10 focus:outline-none focus:border-white transition-colors font-medium" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/20">E-MAIL</label>
                  <input name="email" type="email" required placeholder="your@email.com" className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder:text-white/10 focus:outline-none focus:border-white transition-colors font-medium" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/20">PHONE</label>
                  <input name="phone" type="text" placeholder="+62..." className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder:text-white/10 focus:outline-none focus:border-white transition-colors font-medium" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/20">MESSAGE</label>
                  <textarea name="message" required placeholder="Tell me about your project..." rows={4} className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder:text-white/10 focus:outline-none focus:border-white transition-colors font-medium resize-none" />
                </div>

                <div className="pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-12 py-5 rounded-full bg-white text-black font-black uppercase tracking-[0.3em] text-xs hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all"
                  >
                    SEND MESSAGE
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Footer Bottom bar restores */}
        <div className="pt-8 pb-4 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="text-zinc-400 text-sm font-medium tracking-wide">
              © {currentYear} Alvin Khoirul. All rights reserved.
            </span>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center gap-4 group"
          >
            <div className="p-4 rounded-full border border-white/5 group-hover:border-white/20 transition-all">
              <ArrowUp size={20} className="text-white/20 group-hover:text-white transition-colors" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/10 group-hover:text-white transition-colors">TOP</span>
          </motion.button>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
