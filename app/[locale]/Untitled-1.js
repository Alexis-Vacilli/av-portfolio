import Image from "next/image";
import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import profile from "../../../../public/assets/Blog/blog-1.jpeg";

async function getData(slug) {
  const query = `
    *[_type == 'blog' && slug.current == '${slug}']{
        "currentSlug": slug.current,
          title,
          body,
          
      }[0]`;

  const data = await client.fetch(query);
  return data;
}

const BlogArticle = async ({ params }) => {
  const data = await getData(params.slug);
  console.log(`${data} ========`);
  return (
    <section className="py-12 xl:py-16 ">
      {/* Title */}
      <div className="mb-12 xl:mb-24">
        <h2 className="section-title text-center mx-auto">{data.title}</h2>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/3">
            <Image
              src={profile}
              width={150}
              height={80}
              alt="blog-image"
              className="float-left mr-4 mb-4 md:mb-0 md:mr-8 max-w-full max-h-full"
            />
          </div>
          <div className="w-full md:w-1/3">
            <p>lorem200</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArticle;

{
  /* <PortableText value={data.body} /> */
}

{
  /* <Image
              src={profile}
              width={150}
              height={80}
              alt="blog-image"
              className="w-full p-6 rounded-[40px]"
            /> */
}
