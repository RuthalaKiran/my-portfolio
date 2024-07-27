import React from "react";
import project1img from "../../assets/project/project1tabletview.png";
import project2img from "../../assets/project/project2.1.png";
import project3img from "../../assets/project/project3tabletview.png";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Title from "../Title/Title";

const Projects = () => {
  return (
    <div className="pt-5">
       <Title text="Projects" />
      <div className="py-10 flex flex-col gap-5">
        {/* project 1 image search */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 my-5">
          <div className=" flex justify-center md:justify-end">
            <div className="   image  items-center flex justify-center ">
              <div className="max-w-[500px]  relative group rounded-md cursor-pointer">
                <img
                  src={project1img}
                  className=" group-hover:blur-[2px] w-full h-full object-cover hover:blur-sm rounded-md"
                  alt="image search"
                />
                <div className=" hidden w-full h-full top-0  group-hover:flex gap-5 absolute justify-center items-center">
                  <a
                    href="https://github.com/RuthalaKiran/image-search"
                    target="_blank"
                    className="flex items-center gap-1 hover:scale-105 duration-200 bg-gray-200 text-lg px-3 py-1 text-gray-700 rounded-full"
                  >
                    Code <FaGithub />{" "}
                  </a>
                  <a
                    href="https://explore-images.netlify.app/"
                    target="_blank"
                    className="flex items-center gap-1 hover:scale-105 duration-200 bg-gray-700 text-gray-200 text-lg px-3 py-1 rounded-full"
                  >
                    Live <FaExternalLinkAlt />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="matter flex flex-col items-center md:items-start justify-center gap-5 ">
            <div className="flex flex-col md:max-w-[500px] items-center justify-center gap-3 md:gap-4 lg:gap-5 ">
              <h1 className=" font-semibold text-md lg:text-xl text-gray-800 dark:text-gray-300">
                Image Search Web Application
              </h1>
              <p className="text-gray-700 md:px-0 sm:px-10 px-3 md:text-[14px] lg:text-lg dark:text-gray-400">
                This is fully functional and mobile-friendly web application,
                using pixel API. Simply input keywords to find relevant images,
                download with a single click, and explore further with the "Load
                More" button. Each image is accompanied by the photographer's
                name.
              </p>
              <div className="flex  dark:text-gray-300 gap-5 text-xs md:text-sm lg:text-md font-semibold">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
              </div>
              <div className="flex items-center gap-10 text-md lg:mt-3">
                <a
                  href="https://github.com/RuthalaKiran/image-search"
                  target="_blank"
                  className="flex items-center  gap-1 hover:scale-110 duration-200"
                >
                  Code <FaGithub />{" "}
                </a>
                <a
                  href="https://explore-images.netlify.app/"
                  target="_blank"
                  className="flex items-center gap-1 hover:scale-110 duration-200"
                >
                  Live <FaExternalLinkAlt />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className=" md:hidden w-full h-[1px] bg-gray-300 dark:bg-gray-600 border-none"/>
        {/* project 2 shoppy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 my-5">
          <div className="matter flex flex-col items-center md:items-end justify-center gap-5 ">
            <div className="flex flex-col md:max-w-[500px] items-center justify-center gap-3 md:gap-4 lg:gap-5 ">
              <h1 className=" font-semibold text-md lg:text-xl text-gray-800 dark:text-gray-300">
                Shoppy
              </h1>
              <p className="text-gray-700 md:px-0 sm:px-10 px-3 md:text-[14px] lg:text-lg dark:text-gray-400">
                A fully responsive e-commerce frontend built with React.js and
                Tailwind CSS. Featuring captivating hero sections, user-friendly
                product listings, and optional news blog integration. Smooth
                animations and light/dark mode themes enhance engagement and
                accessibility.
              </p>
              <div className="flex dark:text-gray-300 gap-5 text-xs md:text-sm lg:text-md font-semibold">
                <p>React js</p>
                <p>Tailwind Css</p>
                <p>AOS library</p>
              </div>
              <div className="flex items-center gap-10 text-md lg:mt-3">
                <a
                  href="https://github.com/RuthalaKiran/Shopy_Ecommerce_Project"
                  target="_blank"
                  className="flex items-center gap-1 hover:scale-110 duration-200"
                >
                  Code <FaGithub />{" "}
                </a>
                <a
                  href="https://shopping-cart-project456.netlify.app/"
                  target="_blank"
                  className="flex items-center gap-1 hover:scale-110 duration-200"
                >
                  Live <FaExternalLinkAlt />{" "}
                </a>
              </div>
            </div>
          </div>
          <div className=" flex justify-center md:justify-start">
            <div className="   image  items-center flex justify-center ">
              <div className="max-w-[500px]  relative group rounded-md cursor-pointer">
                <img
                  src={project2img}
                  className=" group-hover:blur-[2px] w-full h-full object-cover hover:blur-sm rounded-md"
                  alt="image search"
                />
                <div className=" hidden w-full h-full top-0  group-hover:flex gap-5 absolute justify-center items-center">
                  <a
                    href="https://github.com/RuthalaKiran/Shopy_Ecommerce_Project"
                    target="_blank"
                    className="flex items-center gap-1 hover:scale-105 duration-200 bg-gray-200 text-lg px-3 py-1 text-gray-700 rounded-full"
                  >
                    Code <FaGithub />{" "}
                  </a>
                  <a
                    href="https://shopping-cart-project456.netlify.app/"
                    target="_blank"
                    className="flex items-center gap-1 hover:scale-105 duration-200 bg-gray-700 text-gray-200 text-lg px-3 py-1 rounded-full"
                  >
                    Live <FaExternalLinkAlt />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className=" md:hidden w-full h-[1px] bg-gray-300 dark:bg-gray-600 border-none"/>
        {/* project 3 youtube clone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 my-5">
          <div className=" flex justify-center md:justify-end">
            <div className="   image  items-center flex justify-center ">
              <div className="max-w-[500px]  relative group rounded-md cursor-pointer">
                <img
                  src={project3img}
                  className=" group-hover:blur-[2px] w-full h-full object-cover hover:blur-sm rounded-md"
                  alt="image search"
                />
                <div className=" hidden w-full h-full top-0  group-hover:flex gap-5 absolute justify-center items-center">
                  <a
                    href="https://github.com/RuthalaKiran/YouTube-clone"
                    target="_blank"
                    className="flex items-center gap-1 hover:scale-105 duration-200 bg-gray-200 text-lg px-3 py-1 text-gray-700 rounded-full"
                  >
                    Code <FaGithub />{" "}
                  </a>
                  <a
                    href="https://vidtube-react-app.netlify.app/"
                    target="_blank"
                    className="flex items-center gap-1 hover:scale-105 duration-200 bg-gray-700 text-gray-200 text-lg px-3 py-1 rounded-full"
                  >
                    Live <FaExternalLinkAlt />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="matter flex flex-col items-center md:items-start justify-center gap-5 ">
            <div className="flex flex-col md:max-w-[500px] items-center justify-center gap-3 md:gap-4 lg:gap-5 ">
              <h1 className=" font-semibold text-md lg:text-xl text-gray-800 dark:text-gray-300">
                YouTube Clone
              </h1>
              <p className="text-gray-700 md:px-0 sm:px-10 px-3 md:text-[14px] lg:text-lg dark:text-gray-400">
                Introducing YouTube Clone project, built with React.js and
                Tailwind CSS, utilizing the Rapid API YouTube v3 API for
                seamless functionality. Experience advanced search, channel
                pages, smooth video playback, comments section, suggested
                videos, and light/dark themes. Explore categories effortlessly.
              </p>
              <div className="flex dark:text-gray-300 flex-wrap items-center justify-center gap-5 text-xs md:text-sm lg:text-md font-semibold">
                <p>React Js</p>
                <p>Tailwind Css</p>
                <p>Rapid API</p>
                <p>react-Player</p>
                <p>react-icons</p>
                <p>react-router-rom</p>
                <p>moment Js</p>
              </div>
              <div className="flex items-center gap-10 text-md lg:mt-3">
                <a
                  href="https://github.com/RuthalaKiran/YouTube-clone"
                  target="_blank"
                  className="flex items-center gap-1 hover:scale-110 duration-200"
                >
                  Code <FaGithub />{" "}
                </a>
                <a
                  href="https://youtube-clone-react11753.netlify.app/"
                  target="_blank"
                  className="flex items-center gap-1 hover:scale-110 duration-200"
                >
                  Live <FaExternalLinkAlt />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
