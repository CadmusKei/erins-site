import { Imperial_Script } from "next/font/google";

const imperialScript = Imperial_Script({
  subsets: ["latin"],
  weight: "400",
});

export default function Title({size, children}){
    return(<h1 className={`${imperialScript.className} ${size} text-shadow-lg text-shadow-black`}>{children}</h1>)
}