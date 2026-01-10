"use client";

import Title from "./Title";
import Blogpost from "./Blogpost";
import { useState } from "react";

export default function Blog() {
  const [blogposts, setBlogPost] = useState([
    {
      id: 1,
      title: "Dark Matter as an Art",
      excerpt:
        "Dark matter is one of the most mysterious substances in the universe. While invisible and undetectable by conventional means, its presence can be inferred from its gravitational effects on galaxies. Artists and scientists alike have found inspiration in dark matter, translating complex astrophysics into stunning visual interpretations that capture both the unknown and the imagination.",
      link: "/blog/dark-matter-as-an-art",
    },
    {
      id: 2,
      title: "How Women in Science are Fixing Academia",
      excerpt:
        "For decades, academia has struggled with gender inequality, often making it difficult for women to thrive in STEM fields. Recent initiatives, mentorship programs, and policy changes have begun to shift the landscape. Women in science are now not only participating at higher rates but are also actively reshaping research culture, promoting inclusivity, and challenging long-standing biases.",
      link: "/blog/women-fixing-academia",
    },
    {
      id: 3,
      title: "What to Expect From SKA",
      excerpt:
        "The Square Kilometre Array (SKA) is poised to become the world’s largest radio telescope, opening new windows into the cosmos. From mapping hydrogen across the universe to studying cosmic magnetism and searching for extraterrestrial life, SKA promises unprecedented discoveries. Scientists and engineers are collaborating across continents to build this technological marvel, offering exciting opportunities for both research and education.",
      link: "/blog/what-to-expect-ska",
    },
  ]);

  return (
    <>
      <Title size="text-6xl">Blog</Title>
      <div className="w-[75%] mt-5 space-y-3 flex flex-col items-center">
        {blogposts.map((blogpost) => (
          <Blogpost
            key={blogpost.id}
            title={blogpost.title}
            content={blogpost.excerpt}
          />
        ))}
      </div>
    </>
  );
}
