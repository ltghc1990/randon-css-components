import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// icons
import facebook from "../../public/sunnyside/images/icon-facebook.svg";
import instagram from "../../public/sunnyside/images/icon-instagram.svg";
import pinterest from "../../public/sunnyside/images/icon-pinterest.svg";
import twitter from "../../public/sunnyside/images/icon-twitter.svg";

const icons = [facebook, instagram, pinterest, twitter];

const bgCss = "#90D4C5";
const darkTextColor = "#266D5D";
const lightTextColor = "#63A798";
const Footer = () => {
  const smoothScrollHandler = (e, id) => {
    e.preventDefault();
    const position = document.querySelector(`#${id}`).offsetTop;

    window.scrollTo({
      top: position - 84,
      behavior: "smooth",
    });
  };
  return (
    <footer
      id="Contact"
      className="flex flex-col items-center "
      style={{ backgroundColor: bgCss }}
    >
      <div
        className="my-20 text-3xl font-black tracking-wide lg:text-5xl"
        style={{ color: darkTextColor }}
      >
        sunnyside
      </div>
      <div
        className="flex-wrap space-x-10 text-xl font-bold mb-28 lg:text-2xl"
        style={{ color: lightTextColor }}
      >
        <motion.a
          whileHover={{ color: darkTextColor }}
          href="#About"
          onClick={(e) => smoothScrollHandler(e, "About")}
        >
          About
        </motion.a>
        <motion.a
          whileHover={{ color: darkTextColor }}
          href="#Services"
          onClick={(e) => smoothScrollHandler(e, "Services")}
        >
          Services
        </motion.a>
        <motion.a
          whileHover={{ color: darkTextColor }}
          href="#Projects"
          onClick={(e) => smoothScrollHandler(e, "Projects")}
        >
          Projects
        </motion.a>
      </div>

      <section>
        <div className="flex w-full mb-8 space-x-8">
          {icons.map((icon, index) => {
            return (
              <a href="#" className="relative w-6 h-6" key={index}>
                <Image
                  key={index}
                  src={icon.src}
                  layout="fill"
                  className="w-6 h-6"
                  alt="social media"
                  objectFit="cover"
                />
              </a>
            );
          })}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
