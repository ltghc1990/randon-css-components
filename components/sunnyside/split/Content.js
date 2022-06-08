import React from "react";
import { motion } from "framer-motion";

const Content = ({ ...props }) => {
  return (
    <div className="bg-white md:w-[50%] aspect-square flex items-center justify-center">
      <div className=" w-[80%] lg:w-[60%] text-center lg:text-left">
        <h2 className="my-8 text-2xl font-extrabold text-gray-900 lg:text-3xl">
          {props.title}
        </h2>
        <p className="my-6 font-semibold text-gray-500">{props.text}</p>
        <motion.a
          whileHover={{ scale: 1.2, color: "rgb(17, 24, 39)" }}
          className={`relative inline-block px-2 uppercase hover:cursor-pointer font-black text-gray-800`}
        >
          Learn More
          <div
            className={`absolute inset-0 px-3 rounded-lg top-4 ${props.underlineCss}`}
          ></div>
        </motion.a>
      </div>
    </div>
  );
};

export default Content;
