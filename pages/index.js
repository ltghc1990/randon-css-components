import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="max-w-[95%] border-2 border-red-400 mx-auto">
        <h3>Links to other parts of the page</h3>
        <Link href="/TailwindcssStuff">
          <a className="inline-block px-6 py-2 m-2 text-white bg-slate-500 rounded-3xl">
            Tailwindcss 3.0 stuff
          </a>
        </Link>
        <Link href="/AspectRatio">
          <a className="inline-block px-6 py-2 m-2 text-white bg-red-500 rounded-3xl">
            aspectRatio
          </a>
        </Link>
        <Link href="/Sunnyside">
          <a className="inline-block px-6 py-2 m-2 text-white bg-red-500 rounded-3xl">
            Sunnyside
          </a>
        </Link>
        <Link href="/SlideInMenu">
          <a className="inline-block px-6 py-2 m-2 text-white bg-red-500 rounded-3xl">
            Slide In Menu
          </a>
        </Link>
      </div>
    </main>
  );
}
