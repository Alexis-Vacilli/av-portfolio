import Image from "next/image";
import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import image from "../../../../public/assets/Blog/blog.jpeg";
import profile from "../../../../public/assets/Hero/Profile3.jpg";
import Menu from "@/components/Blog/Menu";

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
      <div className="flex items-center gap-5">
        <div className="flex-1">
          <h1 className='text-5xl font-semibold mb-5'>Lorem ipsum dolor sit amet consectetur.</h1>
          <div className="flex items-center gap-2">
            <div className="h-[50px] w-[50px] relative">
              <Image src={profile} alt="" fill className="object-cover rounded-full border-2" />
            </div>
            <div className="flex flex-col text-gray-600 dark:text-foreground/70">
              <div className="text-lg font-semibold">Alexis Vacilli</div>
              <div className="text-xs">Dec 12 2023</div>
            </div>
          </div>
        </div>
        <div className="flex-1 h-[350px] relative">
          <Image src={image} alt="" fill className="object-cover rounded-xl" />
        </div>
      </div>
      <div className="flex gap-x-10">
        <div className="w-10/12 mt-6">
          <div className="description">
            <p className='text-base font-light mb-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem ratione hic asperiores corrupti sunt, quod perferendis impedit consequuntur, dolor explicabo repellendus veniam aliquid atque amet consectetur, cum fugiat ab odit dolorum esse molestiae error nam quos officia. Ratione soluta impedit eum sit reiciendis, nesciunt sequi, magni quas repudiandae deleniti neque dolores deserunt itaque at facere! Vero molestiae facere dolorem aspernatur quaerat laboriosam unde numquam asperiores esse doloribus rem delectus illo totam perspiciatis labore, sint molestias ipsum. Sunt dolorum soluta reiciendis et! Asperiores quisquam tempora voluptatem natus cum odio rerum omnis veritatis? Veritatis culpa animi, eos natus enim fugiat quidem alias recusandae temporibus, voluptate ullam tenetur cum velit sed explicabo suscipit minima ipsa perferendis vero inventore eius! Beatae, dolor perspiciatis doloribus ipsa ad excepturi voluptatum voluptate alias in ab, tenetur distinctio dolorem rem accusantium vel! Provident, nobis! Asperiores mollitia dolor odit at nihil eligendi libero. Consectetur, ullam id corporis corrupti quidem neque odit a, ea voluptatibus nobis tempora, explicabo iusto tempore perferendis dolorem illum. Cum, repudiandae? Beatae laborum, nihil assumenda consequuntur cumque magnam fugiat maxime! Qui, culpa magnam. Eum porro assumenda earum, doloribus numquam sed quidem perspiciatis iste, architecto ipsa ea commodi aperiam blanditiis culpa excepturi! Consequuntur ipsa quam architecto et.</p>
            <p className='text-base font-light mb-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem ratione hic asperiores corrupti sunt, quod perferendis impedit consequuntur, dolor explicabo repellendus veniam aliquid atque amet consectetur, cum fugiat ab odit dolorum esse molestiae error nam quos officia. Ratione soluta impedit eum sit reiciendis, nesciunt sequi, magni quas repudiandae deleniti neque dolores deserunt itaque at facere! Vero molestiae facere dolorem aspernatur quaerat laboriosam unde numquam asperiores esse doloribus rem delectus illo totam perspiciatis labore, sint molestias ipsum. Sunt dolorum soluta reiciendis et! Asperiores quisquam tempora voluptatem natus cum odio rerum omnis veritatis? Veritatis culpa animi, eos natus enim fugiat quidem alias recusandae temporibus, voluptate ullam tenetur cum velit sed explicabo suscipit minima ipsa perferendis vero inventore eius! Beatae, dolor perspiciatis doloribus ipsa ad excepturi voluptatum voluptate alias in ab, tenetur distinctio dolorem rem accusantium vel! Provident, nobis! Asperiores mollitia dolor odit at nihil eligendi libero. Consectetur, ullam id corporis corrupti quidem neque odit a, ea voluptatibus nobis tempora, explicabo iusto tempore perferendis dolorem illum. Cum, repudiandae? Beatae laborum, nihil assumenda consequuntur cumque magnam fugiat maxime! Qui, culpa magnam. Eum porro assumenda earum, doloribus numquam sed quidem perspiciatis iste, architecto ipsa ea commodi aperiam blanditiis culpa excepturi! Consequuntur ipsa quam architecto et.</p>
            <p className='text-base font-light mb-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem ratione hic asperiores corrupti sunt, quod perferendis impedit consequuntur, dolor explicabo repellendus veniam aliquid atque amet consectetur, cum fugiat ab odit dolorum esse molestiae error nam quos officia. Ratione soluta impedit eum sit reiciendis, nesciunt sequi, magni quas repudiandae deleniti neque dolores deserunt itaque at facere! Vero molestiae facere dolorem aspernatur quaerat laboriosam unde numquam asperiores esse doloribus rem delectus illo totam perspiciatis labore, sint molestias ipsum. Sunt dolorum soluta reiciendis et! Asperiores quisquam tempora voluptatem natus cum odio rerum omnis veritatis? Veritatis culpa animi, eos natus enim fugiat quidem alias recusandae temporibus, voluptate ullam tenetur cum velit sed explicabo suscipit minima ipsa perferendis vero inventore eius! Beatae, dolor perspiciatis doloribus ipsa ad excepturi voluptatum voluptate alias in ab, tenetur distinctio dolorem rem accusantium vel! Provident, nobis! Asperiores mollitia dolor odit at nihil eligendi libero. Consectetur, ullam id corporis corrupti quidem neque odit a, ea voluptatibus nobis tempora, explicabo iusto tempore perferendis dolorem illum. Cum, repudiandae? Beatae laborum, nihil assumenda consequuntur cumque magnam fugiat maxime! Qui, culpa magnam. Eum porro assumenda earum, doloribus numquam sed quidem perspiciatis iste, architecto ipsa ea commodi aperiam blanditiis culpa excepturi! Consequuntur ipsa quam architecto et.</p>
          </div>
        </div>
        <Menu />
      </div>
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
