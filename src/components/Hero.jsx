import React from "react";
import HeroImage from "../assets/hero_image.jpg";

function Hero() {
  return (
    <div className=" border-b border-gray-300 bg-gray-100 dark:bg-gradient-to-b dark:from-black dark:via-black dark:to-gray-800 ">
      <div className="container mx-auto flex h-[100%] flex-col items-center justify-start gap-5 pt-5 lg:flex-row-reverse lg:justify-center lg:gap-0">
        <div className=" sm:mr-5">
          <img
            className="h-[8rem] w-[8rem] rounded-full object-cover shadow-lg shadow-gray-600 ring-4 ring-gray-300 dark:ring-gray-700 sm:h-[10rem] sm:w-[10rem] md:mb-8 md:h-[17rem] md:w-[17rem] 2xl:h-[25rem] 2xl:w-[25rem]"
            alt="Hero Image"
            src={HeroImage}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-8 2xl:w-[55rem]">
          <h3 className="text-[2rem]  text-gray-500 dark:text-white">
            Hello I'm{" "}
          </h3>
          <h2 className="text-[3rem] font-bold text-gray-700 dark:text-white">
            Desong Li
          </h2>
          <div className=" mb-4 w-3/4 text-center">
            <p className="text-[1.75rem] text-gray-500">
              I'm Currently Looking for a{" "}
              <span className="font-bold text-gray-700">
                Software Engineering
              </span>{" "}
              Posittion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
