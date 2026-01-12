import Title from "../components/Title";
import Link from "next/link";

export default function Navbar()
{

  return (
    <div className="flex fixed w-full h-[10%] bg-linear-to-br from-[rgba(17,17,17,0.49)] to-[#111111b9] z-50 pl-5 
    items-center shadow-xl shadow-black">

        <div className="absolute right-5 flex items-center justify-center w-12 aspect-square rounded-full
         bg-[#4d4d4d42] shadow-2xl shadow-black border-2 border-[#b3b3b34a] ">
            <Link href={"/"} className="flex items-center justify-center w-full h-full" >
            <img  src="/svg/Back.svg" className="aspect-square h-[55%] mr-1 " ></img>
            </Link>
         </div>

        <Title size="text-4xl">Erin Salo</Title>
    </div>
  );
}