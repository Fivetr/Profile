import React from "react";
import linkedin from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";
import github2 from "../assets/github2.png";
import resume from "../assets/resume.png";

function Footer() {
  const Lists = [
    {
      id: "Resume",
      src: resume,
      href: "/Resume.pdf",
    },
    {
      id: "Linkedin",
      src: linkedin,
      href: "https://www.linkedin.com/in/desong-li-628b61277",
    },
    {
      id: "Github",
      src: github2,
      href: "https://github.com/Fivetr?tab=repositories",
    },
    {
      id: "Gmail",
      src: gmail,
      href: "mailto:soslidesong@gmail.com",
    },
  ];
  return (
    <div className="fixed bottom-0 left-0 z-10 w-full border-t-slate-300 bg-gray-200 py-1">
      <div className="flex items-center justify-between">
        <h3 className=" font-signature text-sm">2023 Desong Li</h3>
        <ul className="flex w-[40%] items-center justify-evenly sm:w-[25%] md:hidden">
          {Lists.map(({ id, src, href }) => (
            <li key={id}>
              <a target="_blank" rel="noreferrer" download={true} href={href}>
                <img className="h-[1.5rem] w-[1.5rem]" src={src} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
