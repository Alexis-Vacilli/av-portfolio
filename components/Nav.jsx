import Link from "next/link";
import {motion} from "framer-motion"

// next hooks
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "home", sectionId: "" },
  { path: "/services", name: "services", sectionId: "services" },
  { path: "/skills", name: "skills", sectionId: "skills" },
  { path: "/resume", name: "resume", sectionId: "resume" },
  { path: "/work", name: "work", sectionId: "work" },
  { path: "/blog", name: "blog", sectionId: "blog" },
  { path: "/contact", name: "contact", sectionId: "contact" }
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={`#${link.sectionId}`}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
