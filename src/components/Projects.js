import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font" >
      <div className="container px-5 py-10 mx-auto text-center "style={{maxWidth:"1200px"}}>
        <div className="flex flex-col w-full mb-20 ">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Check out some of my work right here
          </p>
        </div>
        <div className="max-sm:hidden flex flex-wrap  md:flex-row  -m-4 items-center">
          {projects.map((project) => (
            <a target={"_blank"}
            rel="noreferrer"
              href={project.link}
              key={project.image}
              className="sm:w-[600px] my-4 sm:h-[310px] lg:w-1/2 p-4 mx-auto"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div> 
       <div
            name="portfolio"
            className="bg-gradient-to-b max-sm:block hidden from-gray-900 to-gray-800 w-full h-full text-white  "
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {projects.map(({codeLink, link, description, image}) => (
                        <div key={description} className="shadow-md shadow-gray-600  overflow-hidden rounded-lg">
                            <img
                                src={image}
                                alt=""
                                className="rounded-md duration-200   hover:scale-105"
                            />
                            {/* <p className=" text-1xl text-gray-400  mt-3 text-center">{about}</p> */}
                            <div className="flex  text-blue-300 items-center justify-center">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200  hover:scale-105">
                                    <a href={link}
                                        target="_blank"
                                        rel="noreferrer">Demo</a>
                                </button>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    <a href={codeLink}
                                        target="_blank"
                                        rel="noreferrer">Code</a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Projects;
