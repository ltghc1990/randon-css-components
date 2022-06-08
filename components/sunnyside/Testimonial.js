import React from "react";
import Image from "next/image";

import profile1 from "../../public/sunnyside/images/image-emily.jpg";
import profile2 from "../../public/sunnyside/images/image-thomas.jpg";
import profile3 from "../../public/sunnyside/images/image-jennie.jpg";

const profiles = [
  {
    name: "Emily R.",
    picture: profile1.src,
    testimony: `We
    put our trust in Sunnyside and they delivered, making sure our needs were
    met and deadlines were always hit.`,
    job: "Marketing Director",
  },
  {
    name: "Thomas S.",
    picture: profile2.src,
    testimony: `Sunnyside’s
    enthusiasm coupled with their keen interest in our brand’s success made it a
    satisfying and enjoyable experience.`,
    job: "Chief Operating Officer",
  },
  {
    name: "Jennie F.",
    picture: profile3.src,
    testimony: `Incredible end result! Our sales increased over 400% when we worked with
    Sunnyside. Highly recommended!`,
    job: "Business Owner ",
  },
];

const Testimonial = () => {
  return (
    <div id="Services" className="py-12 lg:py-20 xl:py-24">
      <h3 className="my-12 text-xl font-extrabold tracking-widest text-center text-gray-400 uppercase">
        Client testimonials
      </h3>
      <Card />
    </div>
  );
};

export default Testimonial;

const Card = () => {
  return (
    <div className="lg:flex lg:space-x-4">
      {profiles.map((profile) => {
        return (
          <div
            key={profile.name}
            className="text-center w-[80%] mx-auto my-6 py-4 px-4"
          >
            <div className="relative w-16 h-16 mx-auto my-6 overflow-hidden rounded-full">
              <Image
                src={profile.picture}
                layout="fill"
                objectFit="cover"
                alt="profile"
              />
            </div>
            <p className="max-w-sm mx-auto my-6 font-semibold text-gray-700">
              {profile.testimony}
            </p>
            <p className="my-2 font-black">{profile.name}</p>
            <spam className="text-sm font-semibold text-gray-400">
              {profile.job}
            </spam>
          </div>
        );
      })}
    </div>
  );
};

// try doing one with grid
