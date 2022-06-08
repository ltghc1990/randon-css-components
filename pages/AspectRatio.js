import React from "react";
import Image from "next/image";

const AspectRatio = () => {
  return (
    <main className="min-h-screen py-8 bg-slate-100">
      <div>
        <div className="w-full max-w-4xl p-8 mx-auto">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/mSC6GwizOag"
            title="youtube video"
            frameBorder={1}
          ></iframe>
        </div>
      </div>

      <div className="max-w-xl mx-auto overflow-hidden shadow-xl rounded-xl shadow-slate-600">
        <div className="aspect-[3/1.4] relative">
          {/* instead of having h-48 and w-full which is a fixed height, we use the aspect-video, the picture will always be 16/9 */}
          {/* layout fill gives a prop of absolute so we need to add a class of relative on our parent div. The parent div will be responsible for the width and height. objectFit cover states that the image should crop until it fills everything */}
          {/* {also it's the parent div that decides how big it is. here we have it so that the max width is xl. if its too large, we can add a max-w or a max-h} */}
          <Image
            src="/aspectRatio/keyboard.jpg"
            alt="Keyboard"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
        <div className="px-8 py-8">
          <span className="my-4 font-semibold text-indigo-500">Case Study</span>
          <h2 className="my-4 text-3xl font-bold">
            Improve your customer experience
          </h2>
          <p className="font-medium text-slate-600 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint neque
            voluptatibus ut dolorem accusantium quibusdam odit eius aliquam
            laboriosam animi! Libero voluptatem magnam sequi minima suscipit,
            recusandae quasi hic nobis numquam. Quas beatae, praesentium enim,
            minima eos quae sint natus, architecto odio obcaecati doloribus
            animi!
          </p>
        </div>
      </div>
    </main>
  );
};

export default AspectRatio;

// retain native aspect ratio
// cannot just copypaste link of video as the src for your iframe. src="https://www.youtube.com/embed/mSC6GwizOag" will not work. https://www.youtube.com/embed/video_id
// Frameborder: This is a useful attribute that allows you to show border or not to show border to the frame. Value 1 is to show border & 0 to not showing border to the frame.
// applying aspect-video will make the video 16/9 no matter the size

// can appy any custom ratio by using brackets aspect-[3/1.4]
