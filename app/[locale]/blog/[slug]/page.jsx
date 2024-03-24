import Image from "next/image";
import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import image from "../../../../public/assets/Blog/blog-1.jpeg";
import profile from "../../../../public/assets/Hero/Profile4.jpg";

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
    <div className="container mx-auto">
      
    </div>
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
