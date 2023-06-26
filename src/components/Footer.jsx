import React from "react";
import resume from "../assets/resume.png";
import { ContactLists } from "./Contact/ContactList";

function Footer() {
  return (
    <div className="fixed bottom-0 left-0 z-10 w-full border-t-slate-300 bg-gray-200 py-1">
      <div className="flex items-center justify-between">
        <h3 className=" font-signature text-sm">2023 Desong Li</h3>
        <ul className="flex w-[40%] items-center justify-evenly sm:w-[25%] md:hidden">
          <li key="Resume">
            <a
              target="_blank"
              rel="noreferrer"
              download={true}
              href="/Resume.pdf"
            >
              <img className="h-[1.5rem] w-[1.5rem]" src={resume} />
            </a>
          </li>
          {ContactLists.map(({ id, src, href }) => (
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
