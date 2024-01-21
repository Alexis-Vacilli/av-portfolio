"use client";
import Link from "next/link";
import { button } from "./ui/button";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Swiper modules
import { Pagination } from "swiper/modules";

// Components
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: "",
    category: "Nextjs & UI/UX Design",
    name: "LudoFLE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    image: "",
    category: "Javascript",
    name: "LudoFLE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    image: "",
    category: "React Js",
    name: "LudoFLE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    image: "",
    category: "UI/UX Design",
    name: "LudoFLE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },

];

const Work = () => {
  return (
    <section className="py-12 xl:py-24 mb-12 xl:mb-36">
      <div className="container mx-auto">
        <div className="mb-12 xl:mb-24">
          <h2 className="section-title text-center mx-auto">Portfolio</h2>
          <p className="section-subtitle text-center secondary-font mx-auto">
            <span className="text-primary">My</span> Work
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
