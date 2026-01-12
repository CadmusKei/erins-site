"use client";

import Title from "./Title";
import Blogpost from "./Blogpost";
import { blogposts } from "@/app/data/blogposts"; 

export default function Blog() {
  return (
    <>
      <Title size="text-6xl">Blog</Title>
      <div className="w-[90%] p-5 space-y-3 flex flex-col items-center border-2 border-neutral-600 rounded-2xl shadow-2xl shadow-black">
        {blogposts.map((blogpost) => (
          <Blogpost
            key={blogpost.id}
            title={blogpost.title}
            content={blogpost.excerpt}
            link={blogpost.link}
          />
        ))}
      </div>
    </>
  );
}
