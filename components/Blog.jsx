import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

// Next
import Link from 'next/link';
import Image from 'next/image';


import blogImage from '../public/assets/blog.jpeg';


const blogData = [
  {
    date: "January 31, 2024",
    title: "The Main Thing For The Designer",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, fugiat distinctio at nemo obcaecati sapiente! Commodi consequuntur voluptatibus fugiat! Aspernatur ratione totam necessitatibus in temporibus amet sed odio, sunt veniam.",
  },
  {
    date: "December 31, 2023",
    title: "Follow Your Own Design Process",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, fugiat distinctio at nemo obcaecati sapiente! Commodi consequuntur voluptatibus fugiat! Aspernatur ratione totam necessitatibus in temporibus amet sed odio, sunt veniam.",
  },
  {
    date: "January 31, 2024",
    title: "Usability Secrets to Create Better Interfaces",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, fugiat distinctio at nemo obcaecati sapiente! Commodi consequuntur voluptatibus fugiat! Aspernatur ratione totam necessitatibus in.",
  },
];

const Blog = () => {
  return (
    <section className="py-12 xl:py-24 mb-12 xl:mb-36">
      <div className="container mx-auto">
        {/* Title */}
        <div className="mb-12 xl:mb-24">
          <h2 className="section-title text-center mx-auto">Latest Blog</h2>
          <p className="section-subtitle text-center secondary-font mx-auto">
            <span className="text-primary">My</span> Articles
          </p>
        </div>
        {/* Section content */}
        <div className="flex flex-col md:flex-row space-x-10">
          {blogData.map((item, index) => {
            return (
              <Card key={index} className='w-[33%]'>
                <CardHeader>
                  <p>{item.date}</p>
                  <CardTitle className="py-3">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                  <div className='flex gap-x-2 items-center py-2'>
                    <Link href="/" className="font-semibold text-lg">
                      {" "}
                      Read more{" "}
                    </Link>
                    <ArrowRight className="text-primary w-4 font-extrabold animate-in cursor-pointer" />
                  </div>
                </CardContent>
                <div>
                    <Image src={blogImage} width={150} height={80}   alt='blog-image' className='w-full p-6 rounded-[40px]' />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
