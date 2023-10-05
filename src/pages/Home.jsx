import React from "react";
import { Hero } from "../components/Hero";
import { Experience } from "../components/Experience";
import { Education } from "../components/Education";
import { Projects } from "../components/Projects";

export const Home = () => {
  return (
    <>
      <Hero />
      <Experience />
      <Education />
      <Projects />
    </>
  );
};
