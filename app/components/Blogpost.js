import Link from "next/link";
import Divider from "./Divider";

export default function Blogpost({title, content, link}){
    return(
            <div className="w-full flex flex-col space-y-5 items-center pt-5">  
                <h1 className="text-xl font-bold">{title}</h1>
                <p>{content}...</p>
                <Link href={`/blog/${link}`} className="underline text-violet-500">Read More</Link>
                <Divider/>
            </div>
    )   
}