import React from "react";
import { ProjectCard } from "./pieces/ProjectCard";
import Sweb from "../assets/sweb.png";
import audioViz from "../assets/AudioViz2.gif";
import maze from "../assets/maze.png";
import { Fade } from "react-awesome-reveal";
const ProjectsData = [
  {
    key: 0,
    name: "Projectile Simulator",
    description: "A basic C++ gravity physics simulator",
    image:
      "https://user-images.githubusercontent.com/93397918/195179007-969acf09-95f6-4c04-906b-338ad3661a91.gif",
    link: "https://github.com/JuanQ1226/projectileSim",
  },
  {
    key: 1,
    name: "MyBILAccess",
    description:
      "A platform made to help small community leaders access grants and funds, granted by the Bipartisian Infrastructure Law. The platform uses Web3 technologies such as DeFi, DAO for maximum transparency and safety.",
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/316/549/datas/gallery.jpg",
    link: "https://devpost.com/software/mybilaccess",
  },
  {
    key: 2,
    name: "Stackz LLC Website",
    description: "Oficial Stackz Webstite.",
    image: Sweb,
    link: "https://stackzpr.com",
  },
  {
    key: 3,
    name: "C++ Sound Visualizer",
    description:
      "An application that allows you to vizualize an audio file in diferent ways.",
    image: audioViz,
    link: "https://github.com/JuanQ1226/AudioVisualizer.git",
  },
  {
    key: 4,
    name: "Maze Generator and Solver",
    description: "A maze generator and solver using BFS.",
    image: maze,
    link: "https://maze-generator-and-solver.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <section id="Projects" className=" text-white w-full h-auto border-t">
      <div className="flex w-full justify-center items-center py-4 border-t-2 border-b-2">
        <h1 className="font-bold text-3xl">My Projects.</h1>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="md:grid grid-rows-2 grid-cols-3 m-10  md:gap-10 justify-center">
          <Fade
            triggerOnce
            cascade
            damping={0.1}
            className="flex justify-center items-center"
          >
            {ProjectsData.map((project) => {
              return (
                <ProjectCard
                  key={project.key}
                  title={project.name}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                />
              );
            })}
          </Fade>
        </div>
      </div>
    </section>
  );
};
