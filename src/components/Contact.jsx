import React from "react";
import linkedin from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";
import github from "../assets/github2.png";
import resume from "../assets/resume.png";
import download from "../assets/download.png";
import { useState } from "react";

function Contact() {
  const [over, setOver] = useState(false);

  const Lists = [
    {
      id: 1,
      text: "Linkedin",
      src: linkedin,
      href: "https://www.linkedin.com/in/desong-li-628b61277",
      style: " bg-gradient-to-l from-cyan-200 via-sky-500 to-blue-500",
    },
    {
      id: 2,
      text: "Github",
      src: github,
      href: "https://github.com/Fivetr?tab=repositories",
      style: "bg-gradient-to-l from-gray-200 via-slate-500 to-neutral-500",
    },
    {
      id: 3,
      text: "Gmail",
      src: gmail,
      href: "mailto:soslidesong@gmail.com",
      style:
        "rounded-br-md bg-gradient-to-l from-rose-100 via-rose-500 to-red-500",
    },
  ];

  return (
    <div className="fixed left-0 top-[5rem] hidden flex-col md:flex">
      <ul>
        <li
          onMouseOver={() => setOver(true)}
          onMouseOut={() => setOver(false)}
          className="group z-10 ml-[-6.65rem] flex h-[4rem] w-[11.5rem] gap-4 rounded-tr-md bg-gradient-to-l from-stone-200 via-neutral-500 to-stone-500 px-4 duration-500 hover:ml-[-.1rem] hover:rounded-r-md"
        >
          <a
            href="/Resume.pdf"
            className="flex w-full items-center justify-between "
            target="_blank"
            rel="noreferrer"
            download={true}
          >
            <h3 className="mr-6 pl-2 text-lg font-bold text-black">Resume</h3>
            <img
              className=" h-[3rem] w-[3rem] group-hover:h-[2.2rem] group-hover:w-[2.2rem] group-hover:animate-bounce"
              alt="Resume Icon"
              src={over ? download : resume}
            />
          </a>
        </li>
        {Lists.map(({ id, text, src, href, style }) => (
          <li
            key={id}
            className={
              "z-10 ml-[-6.65rem] flex h-[4rem] w-[11.5rem] gap-4 px-4 duration-500 hover:ml-[-.1rem] hover:rounded-r-md" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex w-full items-center justify-between "
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="mr-6 pl-2 text-lg font-bold text-black">{text}</h3>
              <img className=" h-[3rem] w-[3rem]" alt="Github icon" src={src} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
