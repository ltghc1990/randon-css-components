import React, { useState, useRef } from "react";
import { Box, Flex, Text, useDimensions } from "@chakra-ui/react";
import Header from "../components/Carousel/Header";
import { pictureData } from "../components/Carousel/pictureData";

import { LeftButton, RightButton } from "../components/Carousel/Buttons";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = () => {
  // we want the width of our element
  const elementRef = useRef();
  const { borderBox } = useDimensions(elementRef) || {};
  const { width } = borderBox || { width: 0 };

  const [count, setCount] = useState(1);
  const prev = usePrevious(count);

  // we can make direction 1 or -1 instead of increasing / decreasing so we dont have to do ternary operators.
  // initial: (direction)=>({x: direction * 100}) instead of this: initial: (direction)=>({x: direction === "increasing" ? 100 : -100})
  const direction = prev < count ? 1 : -1;

  console.log(prev, direction, width);

  return (
    <Box>
      <Header />

      <Flex maxW={"5xl"} justify={"space-between"} margin={"auto"}>
        <LeftButton setCount={() => setCount(count - 1)} />
        <RightButton setCount={() => setCount(count + 1)} />
      </Flex>

      <Flex justify={"center"} maxW={"5xl"} mx={"auto"} my={6}>
        {/* our gray background canavas where things enter and exit */}
        <Flex
          ref={elementRef}
          justify={"center"}
          align={"center"}
          h={"44"}
          w="container.sm"
          position="relative"
          backgroundColor="blackAlpha.600"
          // we dont want the child to overflow out when transition happens
          overflow={"hidden"}
        >
          <AnimatePresence custom={{ direction, width }}>
            {/* inorder to make this div unmount and remount we need to give it a key that changes */}
            {/* element has to be absolute or else it'll be bumping into other elements/}
            {/* the issue with direction is that it is using the previous value of direction; The element is unmouting before it can get the latest direction prop. the trick is to use variants */}
            {/* need to cycle thru images even tho the images end in 4, the trick is to use the indice of division with math.abs which returns the absolute difference  */}
            <motion.div
              key={count}
              custom={{ direction, width }}
              // initial={{ x: direction === 1 ? 200 : -200 }}
              // animate={{ x: 0 }}
              // exit={{ x: direction === 1 ? -200 : 200 }}
              variants={motionVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className={` absolute w-32 h-32 flex items-center justify-center ${
                pictureData[Math.abs(count % 4)]
              }`}
            >
              {count}
            </motion.div>
          </AnimatePresence>
        </Flex>
      </Flex>

      <Text>Link to tutorial</Text>
      <Text>https://www.youtube.com/watch?v=aV2YJuxQ2vo&t=986s</Text>
    </Box>
  );
};

export default Carousel;

// the motion can now take in a variable and decide the direction of the animation
// in order for the motion varaint to take in the direction variable, we have to pass in a custom prop with the direction. its still not going to work unless we add the custom prop to animate presense as well. Animate presence doesnt rerender so it takes the latest custom prop direction and passes it to our children. essentially the children are umounted and therefore cant get the latest props and thats why it has to be passed in from animate presense which never gets unmounted

//we want the animation to enter thru the container and then exit thru the container, for that,  we need the width of the container (value from ref).
// if this was hardcoded; if we change the container size the animation wont scale to the changed width and will always enter and exit by it hardcoded value, 150 pixels for example
// just like the direction, we pass in the width into our custom prop in animatepresense and our child motion div

let motionVariant = {
  initial: ({ direction, width }) => ({ x: direction * width }),
  animate: { x: 0 },
  exit: ({ direction, width }) => ({ x: direction * -width }),
};

export const usePrevious = (state) => {
  // store previous count without using ref + useEffect
  const [prev, setPrev] = useState([null, state]);

  // a continious loop where we move the previousCount to our starting position so our previous will always be 0 index and our current in 1
  if (state !== prev[1]) {
    setPrev([prev[1], state]);
  }

  return prev[0];
};
