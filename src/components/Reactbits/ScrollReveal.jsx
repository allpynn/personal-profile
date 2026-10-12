import React from "react";
import { motion } from "framer-motion";

const ScrollReveal = ({
  text,
  className = "",
}) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {text}
    </motion.p>
  );
};

export default ScrollReveal;
