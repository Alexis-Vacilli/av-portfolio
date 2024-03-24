import About from "@/components/Blog/About";
import Post from "@/components/Blog/Blog";
import { client } from "@/lib/sanity";
import blogImage from "../../../public/assets/Blog/blog.jpeg";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Categories from "@/components/Blog/Categories";
import Cardlist from '@/components/Blog/Cardlist'
import Menu from "@/components/Blog/Menu";

async function getPosts() {
  const query = `*[_type == 'blog'] {
    title,
    slug,
    publishedAt,
    excertp,
    _id,
    body,
    tags []->
  }`;

  const data = await client.fetch(query);
  return data;
}

const page = async () => {
  const posts = await getPosts();
  return (
    <section className="py-8 xl:py-16 ">
      <div className="container mx-auto">
        {/* <div className="w-full flex flex-col gap-x-7 gap-y-10 md:flex-row justify-between">
          <div className='w-full flex flex-col gap-y-4'>
            {posts.length > 0 && posts.map((post) => <Post post={post} key={post._id}/>)}
          </div>
          <div className='max-w-[407px]'>
            <About />
          </div>
        </div> */}
        <h1 className="text-3xl xl:text-5xl xl:leading-[80px] xl:tracking-[-4px]">
          <b className='font-semibold'>Hey, Alexis Vacilli here</b> Discover my stories and creative ideas
        </h1>
        <div className="flex mt-10 items-center gap-10">
          <div className="flex-1 h-[500px] relative hidden lg:block">
            <Image src={blogImage} fill className="object-cover rounded-xl" />
          </div>
          <div className="flex-1 flex flex-col gap-y-2">
            <h1 className="xl:text-4xl text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              nulla!
            </h1>
            <p className="text-lg font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto rem delectus dicta corporis dolores assumenda ducimus
              aliquid quo minima autem.
            </p>
            <div className="flex gap-x-2 items-center py-2">
              <Link href="/" className="font-semibold text-lg">
                {" "}
                Read more{" "}
              </Link>
              <ArrowRight className="text-primary w-4 font-extrabold cursor-pointer animate-arrow" />
            </div>
          </div>
        </div>
      </div>
      <Categories />
      <div className="container flex gap-x-20">
        <Cardlist />
        <Menu />
      </div>
    </section>
  );
};

export default page;
