import BlogCard from "./BlogCard";
import { client } from "@/lib/sanity";

// Fetching data

async function getData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
    title,
    titleImage,
    content,
    smallDescription,
      "currentSlug": slug.current
  }`;

  const data = await client.fetch(query);

  return data;
}

const blogData = [
  {
    date: "January 31, 2024",
    title: "The Main Thing For The Designer",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, fugiat distinctio at nemo obcaecati sapiente! Commodi consequuntur voluptatibus fugiat! Aspernatur ratione totam necessitatibus in temporibus amet sed odio, sunt veniam.",
    image: "/assets/Blog/blog.jpeg",
  },
  {
    date: "December 31, 2023",
    title: "Follow Your Own Design Process",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, fugiat distinctio at nemo obcaecati sapiente! Commodi consequuntur voluptatibus fugiat! Aspernatur ratione totam necessitatibus in temporibus amet sed odio, sunt veniam.",
    image: "/assets/Blog/blog-2.jpeg",
  },
  {
    date: "January 31, 2024",
    title: "Usability Secrets to Create",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, fugiat distinctio at nemo obcaecati sapiente! Commodi consequuntur voluptatibus fugiat! Aspernatur ratione totam necessitatibus in.",
    image: "/assets/Blog/blog.jpeg",
  },
];

const Articles = async () => {
  const data = await getData();
  console.log(data.title);
  return (
    <div className="rounded-md flex flex-col gap-y-10 px-5">
      {/* {data.map((card, index) => {
        return (
          <BlogCard
            title={card.title}
            description={card.smallDescription}
            
            key={index}
          />
        );
      })} */}
    </div>
  );
};

export default Articles;
