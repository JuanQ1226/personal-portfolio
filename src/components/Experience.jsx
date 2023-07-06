import React from "react";
import "./css/About.css";
import { experiences } from "../data/experiences";
export const Experience = () => {
  return (
    <section className="text-white w-full bg-black">
      <h1
        id="About"
        className="w-full flex justify-center items-center p-6 font-sans font-bold text-3xl"
      >
        About Myself.
      </h1>
      <hr className="w-full border-[1px] border-white" />
      <div className="flex flex-col justify-center w-full items-center p-8">
        <div className="grid grid-cols-2 gap-10 m-4 w-full px-20">
          <h2 className="text-2xl font-sans font-bold w-full text-start">
            Expirience:
          </h2>
          {experiences.map((experience) => {
            let classEven = "md:col-start-1";
            if (experience.id % 2 === 0) {
              classEven = "md:col-start-2";
            }
            return (
              <div
                key={experience.id}
                className={` col-span-2 md:grid md:grid-cols-2 shadow-md shadow-neutral-700 bg-black border border-neutral-700 p-4 rounded-xl lg:w-[800px] ${classEven} `}
              >
                <div className="col-start-1 md:border-r-neutral-700 md:border-r">
                  <h3 className=" font-sans font-bold w-full text-start">
                    <a
                      className="hover:underline text-xl hover:text-blue-400"
                      href={experience.link}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
