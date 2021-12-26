import React from "react";
import userData from "../constants/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {

  const projects = userData.projects;
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 py-20 pb-40">
        {
           projects.map((project, index) => (
            <ProjectCard
              img={project.imgUrl}
              title={project.title}
              desc={project.description}
              stack={project.stack}
              platform={project.platform}
              status={project.status}
              link={project.link}
            />
           ))
         }
        </div>
      </div>
    </section>
  );
}

