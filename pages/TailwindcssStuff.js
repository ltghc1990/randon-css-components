import React from "react";

const TailwindcssStuff = () => {
  return (
    <main>
      <div className="border-4 border-red-50 w-[478px]">
        <div className="px-6 py-24">
          <p className="text-xl text-slate-700 selection:bg-sky-500 first-letter:text-7xl first-letter:font-black">
            Hey, I&apos;m Derek, a creative director based in south Queensferry.
            When I wake up, I like to start building interfaces{" "}
            <a
              href="#"
              className="font-semibold underline text-slate-900 decoration-sky-500"
            >
              My Company, Inc
            </a>
          </p>
        </div>
      </div>
      <div>
        <button className="px-8 py-3 font-semibold text-white rounded-full shadow-xl bg-cyan-500 shadow-cyan-500/30">
          Submit !
        </button>
      </div>
    </main>
  );
};

export default TailwindcssStuff;

// can specify and size now with brackets w-[478px]
// <div className="border-2 border-red-50 w-[478px] h-10"></div>;

// can change highlighted text color using selection:bg-sky-500
// can change underline color by using decoration-sky-500

// can style the first letter using first-letter:text-7xl

// -------------------------------------------------------------------------------------------
// tailwindcss 3.0  has an extended color palette
// for grays: slate, gray, zinc, neutral,stone

// can now add colored shadows to box-shadow: shadow-xl shadow-cyan-500/30
// opacity is still at 100% so we need to reduce it by 30%
