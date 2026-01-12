import Title from "../../components/Title";
import Navbar from "@/app/components/navbar";
import { blogposts } from '@/app/data/blogposts'; 
import { notFound } from 'next/navigation';

export default async function BlogPostHome({ params }) {

   const { slug } = await params;

  const post = blogposts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  console.log("Slug from params:", slug);
  console.log("Available slugs:", blogposts.map(p => p.slug));

  return (
    
    <div className="relative flex flex-col items-center w-full h-screen">
      <Navbar/>
      <img
        className="absolute w-full h-full object-cover z-0"
        src="/image/Space.jpg"
      ></img>

      <div className="flex mt-20 justify-center items-center min-h-[20%] w-full 
          bg-linear-to-t from-[#111111e0] to-transparent z-10">

        <div className="flex justify-center w-[80%] border-2 border-neutral-700 rounded-xl
         pl-4 pr-4 p-2 shadow-2xl shadow-black bg-[#11111142]">
          <Title size="text-4xl lg:text-9xl">{post.title}</Title>
        </div>

      </div>

      <div className="flex flex-col items-center h-screen w-[full] bg-[#111111e0] z-10">
          
        <div className="flex justify-center w-[90%] border-2 border-neutral-700 rounded-4xl 
        p-8 shadow-2xl shadow-black">
          <p>{post.excerpt}</p>
        </div>

      </div>
    </div>
  );
}
