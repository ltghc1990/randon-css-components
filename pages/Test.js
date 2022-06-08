import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

const Test = () => {
  const dotRef = useRef();
  const barRef = useRef();

  const [percentage, setPercentage] = useState(0);
  const handleX = useMotionValue(0);
  // move the dot postion when i click on the bar

  const barHandler = (e) => {
    // e.pageX is the x spot in which i click
    const { width, x } = barRef.current.getBoundingClientRect();
    // 8 is the radius of the dot
    const removedMarginDot = e.pageX - x - 8;
    const fraction = removedMarginDot / width;
    const pixel = fraction * width;
    handleX.set(pixel);

    console.log(handleX.current);
  };

  return (
    <div className="flex p-6 py-12">
      <div
        ref={barRef}
        onClick={barHandler}
        className="relative w-full h-6 bg-gray-400"
      ></div>
      <motion.div
        drag="x"
        dragConstraints={barRef}
        dragMomentum={false}
        dragElastic={0}
        ref={dotRef}
        className="absolute w-4 h-4 bg-red-600 rounded-full "
        style={{ x: handleX }}
      ></motion.div>

      <div className="mt-12">Percentage: {percentage} </div>
    </div>
  );
};

export default Test;

function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}
