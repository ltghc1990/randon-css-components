import React from "react";
import { motion } from "framer-motion";

const IconMobile = () => {
  return (
    <div className="absolute inset-0">
      <motion.svg
        whileHover={{ scale: 1.2 }}
        xmlns="http://www.w3.org/2000/svg"
        className="w-full text-gray-100"
        fill="currentColor"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </motion.svg>
    </div>
  );
};

export default IconMobile;
