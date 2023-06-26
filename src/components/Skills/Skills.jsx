import React from "react";
import { frontendSkills, backendSkills, Others } from "./SkillsList";

function Skills() {
  return (
    <div className="container mt-10 flex h-full flex-col items-center overflow-auto px-3 sm:px-10">
      <h3 className=" w-[80%]  text-center text-xl font-bold text-gray-700 md:text-left lg:w-[70%]">
        Front-End:
      </h3>
      <div className="grid w-[80%] grid-cols-1 gap-8 px-12 py-4 text-center font-bold text-gray-700 sm:grid-cols-3 sm:px-0 md:text-left lg:w-[70%] lg:grid-cols-4">
        {frontendSkills.map(({ title, src, style }) => (
          <div
            key={title}
            className={
              "rounded-lg pt-2 shadow-md duration-500 hover:scale-105" +
              " " +
              style
            }
          >
            <a
              target="_blank"
              rel="noreferrer"
              className="flex cursor-pointer flex-col items-center justify-center gap-2"
            >
              <img className="h-[5rem] w-[5rem]" src={src} />
              <p className="text-cap  text-center text-xl font-bold text-gray-700">
                {title}
              </p>
            </a>
          </div>
        ))}
      </div>
      <h3 className=" mt-6 w-[80%] text-center text-xl font-bold text-gray-700 md:text-left lg:w-[70%]">
        Back-End:
      </h3>
      <div className="grid w-[80%] grid-cols-1 gap-8 px-12 py-4 text-center font-bold text-gray-700 sm:grid-cols-3 sm:px-0 md:text-left lg:w-[70%] lg:grid-cols-4">
        {backendSkills.map(({ title, src, style }) => (
          <div
            key={title}
            className={
              "rounded-lg pt-2 shadow-md duration-500 hover:scale-105" +
              " " +
              style
            }
          >
            <a
              target="_blank"
              rel="noreferrer"
              className="flex cursor-pointer flex-col items-center justify-center gap-2"
            >
              <img className="h-[5rem] w-[5rem]" src={src} />
              <p className="text-cap text-center text-xl font-bold text-gray-700">
                {title}
              </p>
            </a>
          </div>
        ))}
      </div>
      <h3 className=" mt-6 w-[80%] text-center text-xl font-bold text-gray-700 md:text-left lg:w-[70%]">
        Others:
      </h3>
      <div className="grid w-[80%] grid-cols-1 gap-8 px-12 py-4 text-center font-bold text-gray-700 sm:grid-cols-3 sm:px-0 md:text-left lg:w-[70%] lg:grid-cols-4">
        {Others.map(({ title, src, style }) => (
          <div
            key={title}
            className={
              "rounded-lg pt-2 shadow-md duration-500 hover:scale-105" +
              " " +
              style
            }
          >
            <a
              target="_blank"
              rel="noreferrer"
              className="flex cursor-pointer flex-col items-center justify-center gap-2"
            >
              <img className="h-[5rem] w-[5rem]" src={src} />
              <p className="text-cap text-center text-xl font-bold text-gray-700">
                {title}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
