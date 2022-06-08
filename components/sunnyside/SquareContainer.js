import React from "react";
// design calls for two perfect squares so use aspect-square
const SquareContainer = (props) => {
  console.log(props.reverse);
  return (
    <div
      className={` ${
        props.reverse ? "md:flex-row-reverse" : "md:flex-row"
      } flex flex-col mx-auto md:flex-row max-w-screen-2xl md:max-h-[600px] `}
    >
      {props.children}
    </div>
  );
};

export default SquareContainer;
