import React from "react";
import Image from "next/image";

const BgContent = ({ bg }) => {
  return (
    <div className="relative aspect-square md:w-[50%]">
      <Image src={bg.src} layout="fill" alt="Image" objectFit="cover" />
    </div>
  );
};

export default BgContent;
