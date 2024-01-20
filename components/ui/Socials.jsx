"use client";
import { Button } from "./button";

import {
  RiTwitterXFill,
  RiGithubFill,
  RiDribbbleFill,
  RiLinkedinFill,
} from "react-icons/ri";
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
    name: <RiDribbbleFill />,
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
