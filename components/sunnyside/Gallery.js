import React from "react";
import Image from "next/image";

import milk from "../../public/sunnyside/images/desktop//image-gallery-milkbottles.jpg";
import orange from "../../public/sunnyside/images/desktop//image-gallery-orange.jpg";
import cone from "../../public/sunnyside/images/desktop//image-gallery-cone.jpg";
import sugarcubes from "../../public/sunnyside/images/desktop//image-gallery-sugarcubes.jpg";

const images = [milk, orange, cone, sugarcubes];

const Gallery = () => {
  return (
    <div className="flex flex-wrap">
      {images.map((image, index) => {
        return (
          <div
            key={index}
            className="relative aspect-square w-[50%] md:w-[25%] md:aspect-[9/11]"
          >
            <Image
              src={image.src}
              alt="Gallery Image"
              objectFit="cover"
              layout="fill"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
