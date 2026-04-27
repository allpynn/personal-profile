import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollReveal = ({
  text,
  className = "",
  baseOpacity = 0.2,
  offset = ["start 85%", "end 50%"],
  wordGap = "0.25em"
}) => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset,
  });

  const words = text.split(" ");

  return (
    <div
      ref={containerRef}
      className={`flex flex-wrap ${className}`}
      style={{ gap: "0", rowGap: "0.2em" }}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [baseOpacity, 1]);

        return (
          <span key={i} className="relative inline-block" style={{ marginRight: wordGap }}>
            <span className="absolute left-0 top-0 pointer-events-none" style={{ opacity: baseOpacity }}>
              {word}
            </span>
            <motion.span style={{ opacity }} className="relative z-10 text-white">
              {word}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
};

export default ScrollReveal;
