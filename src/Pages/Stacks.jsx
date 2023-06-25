import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Skills from "../components/Skills";

function Stacks() {
  return (
    <>
      <Header />
      <Contact />
      <div className="container mt-10 flex flex-col items-center overflow-auto px-3 sm:px-10">
        <h2 className="w-[80%] text-center text-3xl font-bold text-gray-700 md:text-left lg:w-[70%]">
          Tech Stacks
        </h2>
      </div>
      <Skills />
      <div className="h-10"></div>
      <Footer />
    </>
  );
}

export default Stacks;
