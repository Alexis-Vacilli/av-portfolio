"use client";
import React, { useState, useEffect } from "react";
import ThemeToggler from "./ThemeToggler";
// components
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

import LanSwitcher from "./LanSwitcher";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
    return () => window.removeEventListener("scroll", scrollYPos);
  });
  return (
    <header
      className={`${
        header ? "bg-transparent  dark:bg-transparent" : "dark:bg-transparent"
      } sticky top-0 transition-all z-50`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <LanSwitcher />
            <ThemeToggler />
            {/* Mobile Nav */}
            <div>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
