import Title from "./components/Title";
import Divider from "./components/Divider";
import CV from "./components/CV";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Bio from "./components/Bio";

import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center w-full h-screen">
      <img
        className="absolute w-full h-full object-cover z-0"
        src="/image/Space.jpg"
      ></img>
      {/* <div
        className="absolute w-full h-full object-cover bg-[#18263e] z-0"
      ></div> */}

      <div className="flex justify-center items-center min-h-[40%] w-full bg-linear-to-t from-[#111111e0] to-transparent z-10">
        <Link href="/postblog/">
          <Title size="text-7xl lg:text-9xl">Erin Salo</Title>
        </Link>
      </div>
      <div className="flex flex-col space-y-5 items-center pt-5 h-screen w-full bg-[#111111e0] z-10">
        <Bio/>
        <Divider />
        <CV/>
        <Divider />
        <Blog/>
        <Divider />
        <Contact/>
        <Divider />
        <div className="w-full min-h-10"></div>
      </div>
    </div>
  );
}
