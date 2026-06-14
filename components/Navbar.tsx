"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Portfolio", url: "/portfolio" },
    { name: "Experience", url: "/experience" },
  ];

  return (
    <nav
      className="sticky top-2 font-[Stack_Sans_Notch] mx-auto mt-2 flex items-center justify-between 
lg:w-max md:justify-center
border shadow-primary border-slate-700 px-10 py-4 text-white
bg-secondary/10 backdrop-blur-md rounded-full
text-sm
hover:shadow-[0px_0px_22px_2px] shadow-[0px_0px_15px_1px]
transition-all duration-500"
    >
      {/* Logo */}
      <Link href="/" className="cursor-pointer">
        <img src="/favicon.svg" alt="Logo" className=" w-11" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex font-[Stack_Sans_Notch] items-center gap-8 mt-2 ml-7 text-white">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.url}
            className="relative overflow-hidden h-5 group"
          >
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
              {item.name}
            </span>

            <span className="block absolute  left-0 transition-transform duration-300 group-hover:-translate-y-full">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
      <div className="hidden ml-14 md:flex items-center gap-4">
        <Link href="/contact">
          <button className="border border-secondary hover:bg-secondary/50 px-4 py-2 rounded-full text-sm font-medium transition duration-500 cursor-pointer">
            Contact
          </button>
        </Link>

        <button className="bg-primary hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-primary/50  text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-secondary-100 transition duration-300 cursor-pointer">
          Hire Me
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-gray-400"
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        aria-expanded={isOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-black w-full flex flex-col items-center gap-4 py-6 md:hidden rounded-2xl z-999">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href="#"
              className="hover:text-indigo-600"
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact">
            <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
              Contact
            </button>
          </Link>

          <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
