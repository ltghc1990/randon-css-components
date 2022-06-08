import React from "react";
import bgDesktop from "../../public/sunnyside/images/desktop/image-header.jpg";

import { motion } from "framer-motion";

const bgCss = {
  backgroundImage: `url(${bgDesktop.src})`,
  width: "100%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

const Header = () => {
  const scrollHandler = (e) => {
    e.preventDefault();
    const position = document.querySelector("#About").offsetTop;
    console.log(position);
    window.scrollTo({
      top: position - 84,
      behavior: "smooth",
    });
  };
  return (
    <div style={bgCss} className="aspect-[3/4] md:aspect-video">
      <div className="pt-16 text-center">
        <h1 className="text-3xl font-bold tracking-widest text-white uppercase lg:text-6xl md:text-4xl">
          We are creatives
        </h1>
        <motion.a
          href="#About"
          whileHover={{ y: "+30px", cursor: "pointer" }}
          className="inline-block p-2 mt-16"
          onClick={scrollHandler}
        >
          <IconDown />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;

const IconDown = () => {
  return (
    <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
      <g
        stroke="#FFF"
        strokeWidth="6"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 3v100M3 95.484l15 15 15-15" />
      </g>
    </svg>
  );
};
