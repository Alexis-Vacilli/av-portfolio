import About from "@/components/Blog/About";
import Post from "@/components/Blog/Post";
import { client } from "@/lib/sanity";

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
  console.log(posts);
  return (
    <section className="py-12 xl:py-16 ">
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-x-7 gap-y-10 md:flex-row justify-between">
          <div className='w-full flex flex-col gap-y-4'>
            {posts.length > 0 && posts.map((post) => <Post post={post} key={post._id}/>)}
          </div>
          <div className='max-w-[407px]'>
            <About />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
