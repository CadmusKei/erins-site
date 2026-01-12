import Blog from "../components/Blog";
import Navbar from "../components/navbar";

export default function Bloglist()
{
  return (
    <div className="relative flex flex-col items-center w-full h-screen">
        <Navbar/>
        <img
        className="absolute w-full h-full object-cover z-0"
        src="/image/Space.jpg"
      ></img>
      <div className="flex justify-center items-center min-h-[20%] w-full bg-linear-to-t from-[#111111e0] to-transparent z-10">
      </div>
      <div className="flex flex-col space-y-5 items-center pt-5 h-screen w-full bg-[#111111e0] z-10">
        <Blog/>
      </div>
    </div>
  );
}