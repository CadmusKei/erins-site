import Title from "./Title";
import Divider from "./Divider";

export default function Blogpost({title, content}){
    return(
            <div className="w-[100%] flex flex-col space-y-5 items-center">  
                <Divider/>
                <h1 className="text-xl font-bold">{title}</h1>
                <p>{content}...</p>
                <a className="underline text-violet-500">Read More</a>
            </div>
    )   
}