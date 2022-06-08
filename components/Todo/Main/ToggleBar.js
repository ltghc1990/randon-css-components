import React from "react";
import { motion } from "framer-motion";

const ToggleBar = ({ onToggle }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        backgroundColor: "#B5B7BF",
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.8 }}
      className="px-2 py-6 bg-gray-300 rounded-md cursor-pointer "
      onClick={onToggle}
    ></motion.div>
  );
};

export default ToggleBar;
