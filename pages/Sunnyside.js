import React from "react";
import Image from "next/image";
import SquareContainer from "../components/sunnyside/SquareContainer";
// images...
import eggDesktop from "../public/sunnyside/images/desktop/image-transform.jpg";
import eggMobile from "../public/sunnyside/images/mobile/image-transform.jpg";
import standMobile from "../public/sunnyside/images/mobile/image-stand-out.jpg";
import standDesktop from "../public/sunnyside/images/desktop/image-stand-out.jpg";

import photographyMobile from "../public/sunnyside/images/mobile/image-photography.jpg";
import photographyDesktop from "../public/sunnyside/images/desktop/image-photography.jpg";

import graphicMobile from "../public/sunnyside/images/mobile/image-graphic-design.jpg";
import graphicDesktop from "../public/sunnyside/images/desktop/image-graphic-design.jpg";

import useCurrentWidthHook from "../hooks/breakpoint";

const Sunnyside = () => {
  const { breakpoint } = useCurrentWidthHook();
  console.log(breakpoint);
  console.log(graphicDesktop);
  return (
    <div className="">
      <SquareContainer reverse>
        <div className="relative aspect-square md:w-[50%]">
          <Image
            src={breakpoint === "mobile" ? eggMobile : eggDesktop}
            layout="fill"
            objectFit="cover"
            alt="Egg"
          ></Image>
        </div>
        <div className=" aspect-square md:w-[50%] p-[8%] flex items-center">
          <div>
            <h2 className="my-2 text-2xl font-black lg:text-4xl lg:my-6">
              Transform your brand
            </h2>
            <p className="my-2 lg:my-6 ">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <button className="my-2 lg:my-6">Learn More</button>
          </div>
        </div>
      </SquareContainer>
      <SquareContainer>
        <div className="relative aspect-square md:w-[50%]">
          <Image
            src={breakpoint === "mobile" ? standMobile : standDesktop}
            layout="fill"
            objectFit="cover"
            alt="stand out"
          ></Image>
        </div>
        <div className=" aspect-square md:w-[50%] p-[8%] flex items-center">
          <div>
            <h2 className="my-2 text-2xl font-black lg:text-4xl lg:my-6">
              Stand out to the right audience
            </h2>
            <p className="my-2 lg:my-6 ">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <button className="my-2 lg:my-6">Learn More</button>
          </div>
        </div>
      </SquareContainer>
      <SquareContainer>
        <div className="relative aspect-square md:w-[50%]">
          <Image
            src={breakpoint === "mobile" ? graphicMobile : graphicDesktop}
            layout="fill"
            objectFit="cover"
            alt="Graphic design"
          ></Image>
          <h3>Grpahic Design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
        <div className="relative aspect-square md:w-[50%]">
          <Image
            src={
              breakpoint === "mobile" ? photographyMobile : photographyDesktop
            }
            layout="fill"
            objectFit="cover"
            alt="photography"
          ></Image>
          <div className="absolute flex px-[10%] border-4 border-red-500 top-1/2  ">
            <div>
              <h3>Photography</h3>
              <p>
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
          </div>
        </div>
      </SquareContainer>
    </div>
  );
};

export default Sunnyside;

// both the items in the flex container have aspect-square and w-50 to maintain ratio. for padding inside box have to do flex; text-center doesnt scale vertically

// w-100% need when mobile
