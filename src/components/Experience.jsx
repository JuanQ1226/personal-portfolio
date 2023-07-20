import React from "react";
import "./css/About.css";
import { experiences } from "../data/experiences";
import { Fade, AttentionSeeker } from "react-awesome-reveal";
export const Experience = () => {
  return (
    <section className="text-white w-full bg-black overflow-hidden">
      <h1
        id="About"
        className="w-full flex justify-center items-center p-6 font-sans font-bold text-3xl"
      >
        About Myself.
      </h1>
      <hr className="w-full border-[1px] border-white" />
      <div className="flex flex-col justify-center w-full items-center p-8">
        <div className="flex-col justify-center place-items-center flex gap-10 m-4 w-full">
          <h2 className="text-2xl font-sans font-bold w-full text-center">
            Experience:
          </h2>
          {experiences.map((experience) => {
            let classEven = "lg:col-start-1";
            let direction = "left";
            if (experience.id % 2 === 0) {
              classEven = "lg:col-start-2";
              direction = "right";
            }
            return (
              <Fade
                key={experience.id}
                direction={direction}
                className={`  shadow-md shadow-neutral-700 bg-black border border-neutral-700 p-4 rounded-xl lg:w-[800px] ${classEven} `}
              >
                <div className="col-span-2 md:grid md:grid-cols-2">
                  <div className="col-start-1 md:border-r-neutral-700 md:border-r">
                    <h3 className=" font-sans font-bold w-full text-start">
                      <a
                        className="hover:underline text-xl hover:text-blue-400"
                        href={experience.link}
                        target="_blank"
                      >
                        {experience.title}
                      </a>
                    </h3>
                    <h4 className="italic font-thin text-sm">
                      {experience.company}
                    </h4>
                    <p className="italic font-thin text-sm">
                      {experience.period}
                    </p>
                    <p className="py-3 mr-6 mb-6  md:mb-0">
                      {experience.description}
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      className="w-72 rounded-xl"
                      src={experience.img}
                      alt={experience.title}
                    />
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
};
