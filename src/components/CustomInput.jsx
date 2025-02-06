import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

function CustomInput({
  type,
  name,
  placeholder = "",
  className = "",
  value,
  onChange,
  onBlur,
  disabled = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${className}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        whileFocus={{ scale: 1.05, borderColor: "#007bff" }} // Slight zoom-in effect on focus
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}

CustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
};

export default CustomInput;
