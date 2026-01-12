'use client';

import Title from "@/app/components/Title";
import Navbar from "@/app/components/navbar";
import Divider from "../components/Divider";

import { useState } from "react";

export default function BlogPost() {

    const [ signedIn, SetSignedIn ] = useState(false); 

    if (!signedIn) {
        return (
            <div className="relative flex flex-col items-center w-full h-screen">
                <Navbar/>
                <img
                    className="absolute w-full h-full object-cover z-0"
                    src="/image/Space.jpg"
                ></img>


                <div className="flex flex-col items-center w-[80%] h-[75%] mt-40 rounded-md bg-neutral-950 z-10
                shadow-black shadow-2xl p-5 space-y-2">

                    <Title size="text-7xl" >Sign In</Title>
                    <Divider></Divider>

                </div>
        </div>

        )
    }

}
