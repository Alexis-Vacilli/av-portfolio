import BlogCard from "./BlogCard";


const blogData = [
    {
      date: "January 31, 2024",
      title: "The Main Thing For The Designer",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, fugiat distinctio at nemo obcaecati sapiente! Commodi consequuntur voluptatibus fugiat! Aspernatur ratione totam necessitatibus in temporibus amet sed odio, sunt veniam.",
        image: '/assets/Blog/blog.jpeg'
    },
    {
      date: "December 31, 2023",
      title: "Follow Your Own Design Process",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, fugiat distinctio at nemo obcaecati sapiente! Commodi consequuntur voluptatibus fugiat! Aspernatur ratione totam necessitatibus in temporibus amet sed odio, sunt veniam.",
        image: '/assets/Blog/blog-2.jpeg'
    },
    {
      date: "January 31, 2024",
      title: "Usability Secrets to Create",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, fugiat distinctio at nemo obcaecati sapiente! Commodi consequuntur voluptatibus fugiat! Aspernatur ratione totam necessitatibus in.",
        image: '/assets/Blog/blog.jpeg'
    },
  ];

const Articles = () => {
  return <div className='rounded-md flex flex-col gap-y-10 px-5'>
      {blogData.map((card, index) => {
          return <BlogCard date={card.date} title={card.title} description={card.description} image={card.image}  key={index} />
      })}
  </div>;
};

export default Articles;
