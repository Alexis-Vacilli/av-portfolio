"use client";
import React, { useState, useEffect } from "react";
import ThemeToggler from "./ThemeToggler";
// components
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaCaretDown } from "react-icons/fa";

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
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2 px-1 border border-input dark:border-border rounded bg-background">
                <span>🇫🇷</span>
                <span>FR</span>
                <FaCaretDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="flex space-x-4 items-center">
                  <span>🇫🇷</span>
                  <span>Français</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex space-x-4 items-center">
                  <span>🇺🇸</span>
                  <span>English</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
