import React, { useState } from "react";
import { motion } from "framer-motion";

import { useElementWidth } from "../hooks/useElementWidth";

import Link from "next/link";

const navigation = [
  { title: "Home", link: "/Home" },
  { title: "About", link: "/About" },
  { title: "Contact", link: "/Contact" },
  { title: "Shop", link: "/Shop" },
];

const SlideInMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <div className="flex items-center justify-between px-6 py-8 lg:px-12 bg-stone-600">
        <div onClick={toggleHandler} className="z-50 cursor-pointer">
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
        <div className="text-4xl font-bold text-gray-100">Site Title</div>
      </div>
      <Sidebar isOpen={isOpen} />
      <main>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          inventore ducimus eius eum. Praesentium suscipit omnis, officia minus,
          esse minima tenetur distinctio et quidem sequi beatae repellendus
          velit atque sapiente natus mollitia temporibus inventore. Deleniti,
          dicta exercitationem placeat doloribus nulla magnam? Voluptatibus
          ducimus minus itaque.
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          inventore ducimus eius eum. Praesentium suscipit omnis, officia minus,
          esse minima tenetur distinctio et quidem sequi beatae repellendus
          velit atque sapiente natus mollitia temporibus inventore. Deleniti,
          dicta exercitationem placeat doloribus nulla magnam? Voluptatibus
          ducimus minus itaque.
        </div>
      </main>
    </div>
  );
};

const Sidebar = ({ isOpen }) => {
  const [elementRef, width] = useElementWidth();
  const menuSetting = isOpen
    ? { opacity: 1, left: "0px", transition: { duration: 0.3 } }
    : { opacity: 0, left: -width, transition: { duration: 0.3 } };
  console.log(menuSetting);

  return (
    <motion.ul
      ref={elementRef}
      initial={false}
      animate={menuSetting}
      className={
        " absolute top-0 z-40 h-screen w-[200px] bg-gray-300 border boder-red-400 pt-20"
      }
    >
      {navigation.map((item) => {
        return (
          <li key={item.title} className="px-6 py-2">
            <Link href={item.link}>{item.title}</Link>
          </li>
        );
      })}
    </motion.ul>
  );
};

export default SlideInMenu;
