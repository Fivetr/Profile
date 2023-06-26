import React from "react";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import LightMode from "./LightMode";

function Header() {
  const [nav, setNav] = useState(false);

  const navs = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Skills",
      path: "/stacks",
    },
    {
      name: "Projects",
      path: "/",
    },
  ];

  return (
    <div className="sticky top-0 flex h-20 w-full items-center justify-between border-b border-b-slate-300 bg-white px-4  dark:bg-black dark:text-white ">
      <div className="flex h-20 w-96 items-center">
        <a href="/" className="duration-[250ms] hover:scale-105">
          <h1 className="font-signature text-3xl lg:text-4xl ">
            DESONG &nbsp; Li
          </h1>
        </a>
        <li className="ml-3 flex items-center justify-center px-1 pt-2">
          <LightMode />
        </li>
      </div>

      <ul className="hidden md:flex">
        {navs.map(({ name, path }) => (
          <li
            key={name}
            className="cursor-pointer px-6 text-2xl font-medium text-gray-700 duration-[250ms] hover:scale-105 dark:text-gray-300"
          >
            <a href={path}>{name}</a>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className=" z-10 cursor-pointer  pl-3 pr-2 md:hidden"
      >
        {nav ? <FaBars size={25} color="gray" /> : <FaBars size={25} />}
      </div>
      {nav && (
        <ul className="absolute right-0 top-[5rem] z-10 flex w-[30%] flex-col items-center justify-center border border-white bg-gradient-to-b from-slate-50 via-slate-200 to-slate-400 dark:from-black  dark:via-black sm:w-[25%]">
          {navs.map(({ idx, name, path }) => (
            <li
              key={idx}
              className="w-full cursor-pointer border-x-slate-300 border-b-slate-300 px-3 py-2 text-center text-xl font-medium text-gray-700 duration-[400ms] hover:scale-105 hover:bg-gray-400 dark:text-gray-300 dark:hover:bg-transparent"
            >
              <a href={path}>{name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Header;
