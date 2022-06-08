import React from "react";
import { motion } from "framer-motion";
const navLinks = ["About", "Services", "Projects", "Contact"];

// sorta like a modal where the outer div has a onclick which removes it and the inner div has e.stopPropagation() to prevent it from being removed.

const MobileNav = ({ showMenu }) => {
  // outer div covers the entire page so that we can center the card into the middle
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=" w-[100%] h-[100vh] absolute inset-0 md:hidden bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm flex items-center"
      onClick={() => showMenu(false)}
    >
      <div
        className="flex flex-col items-center justify-center bg-white w-[80%] h-[80%] mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {navLinks.map((link) => {
          return (
            <motion.a
              whileHover={{ scale: 1.2 }}
              key={link}
              href={"#" + link}
              className="inline-block w-full py-3 text-xl font-semibold text-center text-gray-600"
              onClick={() => showMenu(false)}
            >
              {link}
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
};

export default MobileNav;
