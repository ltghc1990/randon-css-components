import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const Fun = () => {
  const min = 0;
  const max = 100;
  const dotRef = useRef();
  const barRef = useRef();
  const progressBarRef = useRef();

  // this is used to update the width of the progress bar
  const handleX = useMotionValue(70);

  const dotSize = 32;

  const [dotValue, setDotValue] = useState(0);

  useEffect(() => {
    // we want to take the percentage, turn it to a decimal, *  by the barRef width to get the width in pixels
    const decimal = dotValue / max;
    // get bar width
    const barWidth = barRef.current.getBoundingClientRect().width;
    const value = barWidth * decimal;
    console.log(dotValue);
    // handleX is an object from motion with a bunch of functions
    handleX.set(value);

    // set the dot position using handdleX
    // x position in pixels
    const xPosition = barWidth * decimal;
    console.log("pixels", xPosition);
  }, [dotValue, handleX]);

  const handleDrag = () => {
    // get info like x position and element width from getBoundingClientRect
    const dotPosition = dotRef.current.getBoundingClientRect();
    // add half the dot size to get the center of dot
    const center = dotPosition.x + dotPosition.width / 2;
    // now that we have the center of the dot we can apply that to the progressbars width

    const barPosition = barRef.current.getBoundingClientRect();
    // does not matter where center is, we are always going to subract the barPosition.x since thats where our progress starts
    const progress = center - barPosition.x;
    const percentage = progress / barPosition.width;
    // console.log(percentage);

    setDotValue(percentage * (max - min));
  };

  return (
    <div className="p-12">
      <div className="relative flex flex-col justify-center ">
        <div ref={barRef} className="w-full h-4 bg-gray-400 rounded-full " />
        {/* PROGRESS BAR */}
        <div
          ref={progressBarRef}
          className="absolute h-2 bg-blue-400 opacity-50"
          style={{ left: dotSize / 2, right: dotSize / 2 }}
          // style={{ width: handleX.current, backgroundColor: "100%" }}
        />

        <motion.div
          ref={dotRef}
          drag="x"
          // dragElastic is the movement when it hits a contraint. 0 = no movement 1 = fullmovement
          dragElastic={0}
          // allows you to limit the area to which it is bound to. accepts a object of top/right/bottem/left
          // can also pass in a ref to a element so its bound to the limits of that ref element
          dragConstraints={barRef}
          // a boolean; the momentum when you let go of drag
          dragMomentum={false}
          whileDrag={{ scale: 1.2 }}
          onDrag={
            handleDrag
            // this function whill run everytime we drag.
          }
          className="absolute z-40 bg-red-600 rounded-full hover:cursor-pointer"
          style={{ width: dotSize, height: dotSize, x: handleX.current }}
        />
      </div>

      <div className="my-6">dot value: {dotValue}</div>
    </div>
  );
};

export default Fun;

// NOTES

// progressbar in blue is the dotSize /2 and subracted from the left and right,
// its so that 0 starts in the center of the dotSize

// we need to use a ref because we need clientside information once the element is rendered. In this case we need the getBoundingClientRect() which is the position of a div relative to the viewport

// need a way to update the dot when viewport changes, currently its value when loaded is set to 0
// maybe instead of turing it to a decmial we keep the percent * bar width
