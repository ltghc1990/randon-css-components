import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

//  use percentages instead of pixels because of scaling
// the dot position will not update even in a useEffect ior in a function

const Test2 = () => {
  const dotRef = useRef();
  const barRef = useRef();
  const progressBarRef = useRef();

  const dotSize = 32;

  // percentage relative to the bar
  const [dotPercentage, setDotPercentage] = useState(0);
  // pixels relative to the bar. center would be where x starts for the dot, also the width for the progressbar, need for useEffect since we need to measure their screen for pixels. also needs to me a motion value, for reasons unknown will not trigger with useState
  const [center, setCenter] = useState(0);

  useEffect(() => {
    // make sure the progressbar updates
    // make sure the red dot is in the correct place

    // lets move the progressbar first
    const progressPos = progressBarRef.current.getBoundingClientRect();
    //  81% of progressBarwidth = amount of pixil to the center of dot
    const progressWidth = (dotPercentage / 100) * progressPos.width;
    console.log(progressWidth);
    setCenter(progressWidth);
  }, [dotPercentage, center]);

  const handleDrag = () => {
    const dotPosition = dotRef.current.getBoundingClientRect();
    const dotXPixel = dotPosition.x + dotPosition.width / 2;
    // if we compare it to the bar position we get a percentage
    const barPosition = barRef.current.getBoundingClientRect();

    // difference in pixels, so if the dot was in the middle of the screen, it'll be around 50 pixels
    // subtract the barwidth with the barwidthstarting position since that space is margin

    const differ = dotXPixel - barPosition.x;

    const percentage = (differ / barPosition.width) * 100;
    setDotPercentage(percentage);
  };

  return (
    <div className="p-6 py-12">
      <div
        ref={barRef}
        className="relative flex items-center bg-gray-400 rounded-full"
        style={{ width: "100%", height: "16px" }}
      >
        {/* cant be one div due to issues,  */}
        <div
          ref={progressBarRef}
          className="absolute "
          style={{ left: dotSize / 2, right: dotSize / 2 }}
        >
          <div
            className="bg-blue-400 opacity-50"
            style={{
              height: "16px",
              width: center,
            }}
          ></div>
        </div>
        {/* DOT */}
        <motion.div
          ref={dotRef}
          drag="x"
          dragElastic="false"
          dragConstraints={barRef}
          dragMomentum={0}
          onDrag={handleDrag}
          className="absolute z-50 bg-red-600 rounded-full opacity-50 hover:cursor-pointer"
          style={{ width: dotSize, height: dotSize, x: center }}
        ></motion.div>

        {/* {CLICKABLE AREA TO SET CENTER} */}
        <div
          onClick={(e) => {
            // can get the postion of our click and compare it with thr bar ref
            console.log(e.pageX);
            const { x, width } = barRef.current.getBoundingClientRect();
            const decimal = (e.pageX - x) / width;
            setDotPercentage(decimal * 100);
          }}
          className="absolute opacity-50 bg-amber-400"
          style={{
            width: "100%",
            height: "30px",
          }}
        ></div>
      </div>

      <div className="mt-12 ">dot percentage: {dotPercentage}</div>
    </div>
  );
};

export default Test2;

// with the dragable we want to constraint the movement to the progressbar so we need a ref to that div to get its width from the client
