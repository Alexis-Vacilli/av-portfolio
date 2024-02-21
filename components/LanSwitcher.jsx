import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { IoLanguage } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";

const LanSwitcher = () => {
  const [language, setLanguage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleChangeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };
  return (
    <div className="relative inline-block">
      <Button
        variant="outline"
        className="bg-background px-3 py-1 rounded-sm font-semibold text-md flex items-center"
        size="small"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoLanguage />
        {language ? (
          <span className="ml-1">{language}</span>
        ) : (
          <FaAngleDown className="ml-1" />
        )}
      </Button>
      {isOpen && (
        <ul
          className="absolute top-full right-0 mt-1 bg-background border border-input rounded shadow-lg w-full"
          ref={dropdownRef}
        >
          <li
            className="px-4 py-2 hover:bg-accent font-semibold cursor-pointer"
            onClick={() => handleChangeLanguage("en")}
          >
            en
          </li>
          <li
            className="px-4 py-2 hover:bg-accent font-semibold cursor-pointer"
            onClick={() => handleChangeLanguage("fr`")}
          >
            fr
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanSwitcher;
