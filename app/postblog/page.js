'use client';

import Title from "@/app/components/Title";
import Navbar from "@/app/components/navbar";
import Divider from "../components/Divider";

import { useState } from "react";
import { useRef } from "react";

export default function BlogPost() {

    const [ signedIn, SetSignedIn ] = useState(false); 

    const userRef = useRef(null);
    const passwordRef = useRef(null);

    function handleClick()
    {
        console.log("Signing in...")

        const username = userRef.current.value; 
        const password = passwordRef.current.value; 

        if (username === "marcie" && password === "moonwitch") console.log("Batman!")
        

        // SetSignedIn(true);
    }

    if (!signedIn) {
        return (
            <div className="relative flex flex-col items-center w-full h-screen">
                <Navbar/>
                <img
                    className="absolute w-full h-full object-cover z-0"
                    src="/image/Space.jpg"
                ></img>

                <div className="flex flex-col items-center w-[80%] h-[70%] mt-35 rounded-md bg-neutral-950 z-10
                shadow-black shadow-2xl p-5 space-y-2">

                    <Title size="text-7xl" >Sign In</Title>
                    <Divider></Divider> 
                    <p className="text-2xl text-white font-bold mt-10 " >Username</p>
                    <input ref={userRef} type="text" className="pl-4 w-[70%] h-[8%] border-2 rounded-md mt-2" ></input>

                    <p className="text-2xl text-white font-bold mt-5 " >Password</p>
                    <input ref={passwordRef} type="password" className="pl-4 w-[70%] h-[8%] border-2 rounded-md mt-2" ></input>

                    <button onClick={handleClick} className="w-[70%] h-[9%] mt-10 bg-white rounded-md text-black font-bold text-2xl" >Sign-In</button>

                </div>
            </div>

        )
    }

}
