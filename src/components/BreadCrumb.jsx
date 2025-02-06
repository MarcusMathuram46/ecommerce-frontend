import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function BreadCrumb({ title }) {
  return (
    <motion.div
      className="breadcrumb mb-0 py-3"
      style={{ marginTop: "64px" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <motion.p
              className="text-center mb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.span
                whileHover={{ scale: 1.1, color: "#007bff" }} // Scale up and change color on hover
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to="/" className="text-dark">
                  Home &nbsp;
                </Link>
              </motion.span>
              / {title}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default BreadCrumb;
