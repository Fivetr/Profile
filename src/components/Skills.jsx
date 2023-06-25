import React from "react";
import css from "../assets/css.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import html from "../assets/html.png";
import material_ui from "../assets/material_ui.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import cpluplus from "../assets/cpluplus.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import sql from "../assets/sql.png";
import flask from "../assets/flask.png";
import c from "../assets/c.png";
import git from "../assets/git.png";
import skLearn from "../assets/skLearn.png";
import r from "../assets/r.png";
import numpy from "../assets/numpy.png";
import pandas from "../assets/pandas.png";
import dialogflow from "../assets/dialogflow.png";
import bash from "../assets/bash.png";

function Skills() {
  const frontendSkills = [
    {
      title: "HTML",
      src: html,
      style: "shadow-orange-500",
      href: "https://www.w3schools.com/html/default.asp",
    },
    {
      title: "CSS",
      src: css,
      style: "shadow-blue-500",
      href: "https://www.w3schools.com/css/default.asp",
    },
    {
      title: "JavaScript",
      src: javascript,
      style: "shadow-yellow-500",
      href: "https://www.w3schools.com/js/default.asp",
    },
    {
      title: "React",
      src: react,
      style: "shadow-cyan-500",
      href: "https://react.dev/",
    },
    {
      title: "Tailwind CSS",
      src: tailwind,
      style: "shadow-teal-700",
      href: "https://tailwindui.com/",
    },
    // {
    //   title: "Redux",
    //   src: redux,
    //   style: "shadow-purple-500",
    //   href: "https://redux.js.org/",
    // },
    {
      title: "Material UI",
      src: material_ui,
      style: "shadow-blue-300",
      href: "https://mui.com/",
    },
  ];

  const backendSkills = [
    {
      title: "Python",
      src: python,
      style: "shadow-blue-500",
      href: "https://www.w3schools.com/python/default.asp",
    },
    {
      title: "Java",
      src: java,
      style: "shadow-orange-600",
      href: "https://www.w3schools.com/java/default.asp",
    },
    {
      title: "C++",
      src: cpluplus,
      style: "shadow-blue-500",
      href: "https://www.w3schools.com/cpp/default.asp",
    },
    {
      title: "C",
      src: c,
      style: "shadow-indigo-700",
      href: "https://www.w3schools.com/c/index.php",
    },
    {
      title: "MySQL",
      src: sql,
      style: "shadow-sky-900",
      href: "https://www.mysql.com/",
    },
    {
      title: "Flask",
      src: flask,
      style: "shadow-black",
      href: "https://flask.palletsprojects.com/en/2.3.x/",
    },
  ];

  const Others = [
    {
      title: "Git",
      src: git,
      style: "shadow-red-500",
      href: "https://git-scm.com/",
    },
    {
      title: "Bash",
      src: bash,
      style: "shadow-black",
      href: "https://git-scm.com/",
    },
    {
      title: "Scikit-Learn",
      src: skLearn,
      style: "shadow-orange-700",
      href: "https://git-scm.com/",
    },
    {
      title: "R",
      src: r,
      style: "shadow-gray-500",
      href: "https://git-scm.com/",
    },
    {
      title: "Pandas",
      src: pandas,
      style: "shadow-blue-900",
      href: "https://git-scm.com/",
    },
    {
      title: "numpy",
      src: numpy,
      style: "shadow-cyan-700",
      href: "https://git-scm.com/",
    },
    {
      title: "Dialogflow",
      src: dialogflow,
      style: "shadow-orange-500",
      href: "https://git-scm.com/",
    },
  ];

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
