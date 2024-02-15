"use client";
import { Button } from "./button";

import {
  RiTwitterXFill,
  RiGithubFill,
  RiDribbbleFill,
} from "react-icons/ri";
import { MdOutlineArticle } from "react-icons/md";
import { PiFigmaLogoLight } from "react-icons/pi";
import Link from "next/link";

// Icon links

const icons = [
  {
    path: "/",
    name: <RiTwitterXFill />,
  },
  {
    path: "/",
    name: <RiGithubFill />,
  },
  {
    path: "/",
    name: <PiFigmaLogoLight />,
  },
  {
    path: "/",
    name: <MdOutlineArticle />,
  }
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
