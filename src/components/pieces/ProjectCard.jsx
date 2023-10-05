import React from "react";

export const ProjectCard = ({ title, image, description, link }) => {
  return (
    <div
      onClick={() => window.open(link)}
      className="my-4 md:my-0 border border-gray-500 hover:scale-110 transition-all ease-in-out text-black flex flex-col justify-center sm:w-auto lg:w-[70%] items-center p-4 rounded-xl shadow-xl shadow-gray-600 bg-white"
    >
      <img src={image} className="h-50 w-auto" />
      <div className="flex justify-center flex-col items-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};
