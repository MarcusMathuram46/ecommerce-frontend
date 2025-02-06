import React from 'react';
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

function Meta(props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
      </Helmet>
    </motion.div>
  );
}

export default Meta;
