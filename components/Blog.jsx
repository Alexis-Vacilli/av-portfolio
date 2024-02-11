"use client"
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
import Link from "next/link";
import Image from "next/image";

import {motion} from 'framer-motion'


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
    title: "Usability Secrets to Create Better Interfaces",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, fugiat distinctio at nemo obcaecati sapiente! Commodi consequuntur voluptatibus fugiat! Aspernatur ratione totam necessitatibus in.",
      image: '/assets/Blog/blog-2.jpeg'
  },
];

const Blog = () => {
  return (
    <motion.section id="blog" className="py-12 xl:py-24" whileInView={{ y: [50, 0], opacity: [0, 1] }}
    transition={{ duration: 1 }}>
      <div className="container mx-auto">
        {/* Title */}
        <div className="mb-12 xl:mb-24">
          <h2 className="section-title text-center mx-auto">Latest Blog</h2>
          <p className="section-subtitle text-center secondary-font mx-auto">
            <span className="text-primary">My</span> Articles
          </p>
        </div>
        {/* Section content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogData.map((item, index) => {
            return (
              <Card
                key={index}
                className="flex flex-col md:flex-row group overflow-hidden bg-background"
              >
                <div className="flex flex-col justify-between md:w-1/2">
                  <CardHeader>
                    <p>{item.date}</p>
                    <CardTitle className="pt-2">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      {item.description.length > 100
                        ? item.description.slice(0, 100) + "..."
                        : item.description}
                    </CardDescription>
                    <div className="flex gap-x-2 items-center py-2">
                      <Link href="/" className="font-semibold text-lg">
                        {" "}
                        Read more{" "}
                      </Link>
                      <ArrowRight className="text-primary w-4 font-extrabold cursor-pointer animate-arrow" />
                    </div>
                  </CardContent>
                </div>
                <div className="flex-shrink-0 md:w-1/2">
                  <Image
                    src={item.image}
                    width={150}
                    height={80}
                    alt="blog-image"
                    className="w-full p-6 rounded-[40px]"
                  />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Blog;
