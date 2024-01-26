"use client";
import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "./ui/tabs";

// Components
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: "/assets/Work/ludofle.png",
    category: "Nextjs",
    name: "Ludofle",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    image: "/assets/Work/ludofle.png",
    category: "Javascript",
    name: "Gooir",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    image: "/assets/Work/ludofle.png",
    category: "React Js",
    name: "Khonam",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    image: "/assets/Work/ludofle.png",
    category: "UI/UX Design",
    name: "E-Matt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
];

const uniqueCategories = [
  "All",
  ...new Set(projectData.map((item) => item.category)),
];

const Work = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("All");

  const filteredProjects = projectData.filter((project) => {
      return category === 'All' ? project : project.category === category;
  })

  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        {/* Title */}
        <div className="mb-12 xl:mb-24">
          <h2 className="section-title text-center mx-auto">Latest Projects</h2>
          <p className="section-subtitle text-center secondary-font mx-auto">
            <span className="text-primary">My</span> Work
          </p>
        </div>
        {/* Tabs */}
        <Tabs defaultValue={category}>
          <TabsList className='w-full h-full mb-12 mx-auto'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger key={index} value={category} onClick={() => setCategory(category)}>
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className='grid xl:grid-cols-3 justify-center xl:gap-8'>
              {filteredProjects.map((project, ndex) => {
                  return <TabsContent value={category} key={ndex}>
                      <ProjectCard project={project} />
                  </TabsContent>
              })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Work;
