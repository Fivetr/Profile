import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container mt-10 flex flex-col items-center overflow-auto px-3 sm:px-10">
        <h2 className="w-[80%] text-center text-3xl font-bold text-gray-700 md:text-left lg:w-[70%]">
          About Me
        </h2>
        <div className=" mt-3 w-[80%] lg:w-[70%]">
          <p className="text-xl">
            An 'About Me' page should convey who you are, what your values and
            principles are, how you got to where you are, and why your product
            or service is important to you. If writing an 'About Me' page seems
            daunting, you can use an about us template to help you out.
          </p>
        </div>
      </div>
      <Contact />
      <div className="h-10"></div>
      <Footer />
    </>
  );
}

export default Home;
