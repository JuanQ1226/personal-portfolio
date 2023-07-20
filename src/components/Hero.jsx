import React from "react";
import "./css/Hero.css";
import { Fade } from "react-awesome-reveal";
export const Hero = () => {
  return (
    <main className="z-0 w-[100vw] h-[100vh] border-b-slate-500 border-b-2  flex  justify-center items-center">
      <div className="h-full w-full backdrop-brightness-50 flex justify-center items-center">
        <Fade>
          <div
            id="card"
            className="flex flex-col justify-center items-center h-min p-10 duration-300 transition-all shadow ease-in-out rounded-xl border-gray-500 border-2 bg-neutral-950 w-min "
          >
            <h2 className="text-lg md:text-xl text-white font-thin self-start">
              Welcome, I'm
            </h2>
            <h1 className="text-4xl md:text-5xl text-white font-bold whitespace-nowrap">
              Juan Quintana
            </h1>
            <h2 className="text-center text-lg md:text-xl underline underline-offset-8 text-white font-thin self-start mt-1">
              Computer Science Undergrad & CTO
            </h2>
          </div>
        </Fade>
      </div>
    </main>
  );
};
