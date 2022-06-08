import React from "react";

const Fruit = ({ title, text, bg }) => {
  const bgCss = {
    background: `url(${bg.src})`,
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div style={bgCss} className="aspect-square md:w-[50%] flex items-end">
      <div className="max-w-sm mx-auto text-center">
        <h4 className="my-4 text-2xl font-extrabold text-gray-700">{title}</h4>
        <p className="my-4 mb-12 font-semibold text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export default Fruit;
