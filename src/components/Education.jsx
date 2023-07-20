import React from "react";
import "./css/Education.css";
import { Fade } from "react-awesome-reveal";
const myEducation = [
  {
    school: "University of Puerto Rico - Mayaguez",
    degree: "B.S. Computer Science and Engineering",
    years: "2021 - 2026(Exp.)",
    gpa: "3.77",
    courses:
      "Data Structures, Advanced Programming(OOP), Computing Fundamentals",
  },
];

export const Education = () => {
  return (
    <section className="EdContainer w-full border-t border-t-neutral-700 flex flex-col justify-center">
      <h1 className="text-white text-2xl font-bold text-center m-4">
        Education
      </h1>
      {myEducation.map((education) => {
        return (
          <Fade className="self-center" direction="up">
            <div className="text-black flex flex-col justify-center items-center bg-neutral-100 border border-neutral-600 rounded-xl md:w-96 p-4 sm:mx-2 md:mx-0 mt-4 mb-8">
              <div>
                <h2 className=" text-xl font-bold md:whitespace-nowrap">
                  {education.degree}
                </h2>
                <h4 className="font-thin italic">{education.years}</h4>
              </div>
              <div>
                <h3 className="text-start">{education.school}</h3>
                <h4 className="text-center">GPA: {education.gpa}</h4>
              </div>
              <h4 className=" text-left">
                <span className="underline font-semibold">
                  Relevant Courses:
                </span>{" "}
                {education.courses}
              </h4>
            </div>
          </Fade>
        );
      })}
    </section>
  );
};
