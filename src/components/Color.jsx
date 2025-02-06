import React from "react";
import { motion } from "framer-motion";

function Color({ colorData, setColor }) {
  return (
    <motion.ul
      className="colors ps-0 mb-0"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.li
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setColor(colorData)}
        style={{
          backgroundColor: colorData,
          border: "1px solid #333",
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          cursor: "pointer",
          display: "inline-block",
        }}
      ></motion.li>
    </motion.ul>
  );
}

export default Color;
