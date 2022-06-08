import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IconMobile from "./IconMobile";
import MobileNav from "./mobilenav";

const navLinks = ["About", "Services", "Projects", "Contact"];
const selectedCss = "font-bold bg-white text-gray-700";

const Navbar = () => {
  const [selected, setSelected] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navClickHandler = (e, index) => {
    e.preventDefault();
    // set the active nav using the indesx
    setSelected(index);
    // get the event href value from the nav so we can then select the element we want to scroll to using queryselector
    const target = e.target.getAttribute("href");
    const selectedElement = document.querySelector(target);
    const position = selectedElement.offsetTop;

    // use the window method to scroll to the html position - the navbar height
    window.scrollTo({
      left: 0,
      top: position - 84,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="sticky top-0 z-50 flex items-center justify-between p-6 "
      style={{ backgroundColor: "#3EBFFF" }}
    >
      <div className="text-3xl font-bold text-white">Sunnyside</div>
      <nav className="hidden space-x-4 md:inline-block">
        {navLinks.map((link, index) => {
          return (
            <a
              key={link}
              href={"#" + link}
              className={` inline-block text-white rounded-2xl py-2 px-4 ${
                index === selected && selectedCss
              }`}
              onClick={(e) => navClickHandler(e, index)}
            >
              {link}
            </a>
          );
        })}
      </nav>
      <button
        className="relative w-9 h-9 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <IconMobile />
      </button>
      <AnimatePresence exitBeforeEnter>
        {showMobileMenu && <MobileNav showMenu={setShowMobileMenu} />}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

// nav links hidden using css mediaquery, show menu
