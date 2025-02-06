import React from "react";
import { motion } from "framer-motion";

function Container({ class1, children }) {
  return (
    <motion.section
      className={class1}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container-xxl">{children}</div>
    </motion.section>
  );
}

export default Container;
