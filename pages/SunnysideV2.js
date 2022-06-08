import React from "react";
import Navbar from "../components/sunnyside/navbar";
import Header from "../components/sunnyside/Header";
import Content from "../components/sunnyside/split/Content";
import BgContent from "../components/sunnyside/split/BgContent";
import Testimonial from "../components/sunnyside/Testimonial";
import Fruit from "../components/sunnyside/split/Fruit";
import Footer from "../components/sunnyside/Footer";
import Gallery from "../components/sunnyside/Gallery";

// using the desktop bg images
import egg from "../public/sunnyside/images/desktop/image-transform.jpg";
import standout from "../public/sunnyside/images/desktop/image-stand-out.jpg";
import cherry from "../public/sunnyside/images/desktop/image-graphic-design.jpg";
import orange from "../public/sunnyside/images/desktop/image-photography.jpg";

const SunnysideV2 = () => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <Navbar />
      <Header />

      <div id="About" className="md:flex">
        <Content
          title="Transform your brand"
          text=" We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you."
          underlineCss="bg-yellow-400/40"
        />
        <BgContent bg={egg} />
      </div>

      <div className="md:flex-row-reverse md:flex">
        <Content
          title="Stand out to the right audience"
          text="Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places."
          underlineCss="bg-red-300/40"
        />
        <BgContent bg={standout} />
      </div>

      <div id="Projects" className="md:flex">
        <Fruit
          bg={cherry}
          title="Graphic Design"
          text="Great design makes you memorable. We deliver artwork that
    underscores your brand message and captures potential clients’ attention."
        />
        <Fruit
          bg={orange}
          title="Photography"
          text="Increase your credibility by getting the most stunning,
    high-quality photos that improve your business image."
        />
      </div>

      <Testimonial />
      <Gallery />
      <Footer />
    </div>
  );
};

export default SunnysideV2;
