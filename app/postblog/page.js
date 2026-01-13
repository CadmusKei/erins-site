"use client";

import Title from "@/app/components/Title";
import Navbar from "@/app/components/navbar";
import Divider from "../components/Divider";

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import { useState, useRef, useEffect } from "react";

export default function BlogPost() {
  const [mounted, setMounted] = useState(false);

  const [signedIn, SetSignedIn] = useState(false);
  const [blogHTML, setBlogHTML] = useState('');

  const userRef = useRef(null);
  const passwordRef = useRef(null);

  const titleRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);


    const editor = useEditor({
        extensions: [StarterKit],
        content: '',
        onUpdate({ editor }) {
            setBlogHTML(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: 'focus:outline-none',
            },
        },
        immediatelyRender: false,
    });

    function handleClick() {
        console.log("Signing in...");

        const username = userRef.current.value;
        const password = passwordRef.current.value;

        userRef.current.value = ""; 

        if (username === "marcie" && password === "moonwitch") SetSignedIn(true);

    };

    function pushBlog() {
        console.log("Posting!");
        console.log("Title:", titleRef.current.value);
        console.log("Blog content HTML:", blogHTML);
        
        // TODO: save blogHTML & title somewhere
    }

  if (!mounted) return null;

  if (!signedIn) {
    return (
      <div className="relative flex flex-col items-center w-full h-screen">
        <Navbar />
        <img
          className="absolute w-full h-full object-cover z-0"
          src="/image/Space.jpg"
        ></img>

        <div
          className="flex flex-col items-center w-[80%] h-[70%] mt-35 rounded-md bg-neutral-950 z-10
                shadow-black shadow-2xl p-5 space-y-2"
        >
          <Title size="text-7xl">Sign In</Title>
          <Divider></Divider>
          <p className="text-2xl text-white font-bold mt-10 ">Username</p>
          <input
            ref={userRef}
            type="text"
            className="pl-4 w-[70%] h-[8%] border-2 rounded-md mt-2"
          ></input>

          <p className="text-2xl text-white font-bold mt-5 ">Password</p>
          <input
            ref={passwordRef}
            type="password"
            className="pl-4 w-[70%] h-[8%] border-2 rounded-md mt-2"
          ></input>

          <button
            onClick={handleClick}
            className="w-[70%] h-[9%] mt-10 bg-white rounded-md text-black font-bold text-2xl  shadow-2xl shadow-neutral-600"
          >
            Sign-In
          </button>
        </div>
      </div>
    );
  } else {
    
    return (

      <div className="relative flex flex-col items-center w-full h-screen">
        <Navbar />
        <img
          className="absolute w-full h-full object-cover z-0"
          src="/image/Space.jpg"
        ></img>

        <div
          className="flex flex-col items-center w-[80%] h-[70%] mt-35 rounded-md bg-neutral-950 z-10
                shadow-black shadow-2xl p-5 space-y-2"
        >
          <Title size="text-7xl">Upload</Title>
          <Divider></Divider>
          <p className="text-2xl text-white font-bold mt-5 ">Title</p>
          <input
            ref={titleRef}
            type="text"
            placeholder="Spit some bars!"
            className="pl-4 w-[70%] h-[8%] border-2 font-bold rounded-md mt-2"
          ></input>

          <p className="text-2xl text-white font-bold mt-5 ">
            Upload your blog
          </p>
          <div className="w-[70%] h-[28%] border-2 rounded-lg mt-2 p-3 overflow-auto bg-white text-black">
            <EditorContent editor={editor} />
          </div>

          <button
            onClick={pushBlog}
            className="w-[70%] h-[9%] mt-10 bg-white rounded-md text-black font-bold text-2xl shadow-2xl shadow-neutral-600"
          >
            Upload
          </button>
        </div>
      </div>
    );
  }
}
