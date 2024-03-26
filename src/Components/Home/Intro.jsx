import React from "react";
import me from "../../assets/me3.jpg";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import myresume from "../../assets/kiran'sresume.pdf";

const Intro = () => {
  return (
    <div className=" md:py-10 lg:py-20 grid grid-col-1 md:grid-cols-2 gap-2 ">
      <div className=" flex flex-col justify-start md:justify-center mt-14 md:mt-0 gap-1 p-4 order-1 md:order-none">
        <p className="text-gray-800 text-2xl dark:text-gray-200">Hello,</p>
        <p className=" text-gray-800 text-3xl dark:text-gray-300">
          I'm <span className="text-red-500 font-bold">Kiran</span> .
        </p>
        <p className="text-orange-700 ">
          <ReactTyped
            className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-center"
            strings={[
              "Frontend developer",
              "Fullstack developer",
              "Web Designer",
            ]}
            typeSpeed={100}
            loop
            backSpeed={50}
            backDelay={1000}
          ></ReactTyped>
        </p>
        <p className="text-gray-800 dark:text-gray-400">
          I'm a passionate frontend web developer currently working towards
          becoming a full stack developer (MERN).
        </p>
        <div className="flex mt-3 gap-5">
          <a
            href="https://www.linkedin.com/in/kiran-ruthala-b2b734275/"
            target="_blank"
          >
            <FaLinkedin className="text-2xl dark:text-gray-50 cursor-pointer hover:scale-110" />
          </a>
          <a href="https://github.com/RuthalaKiran" target="_blank">
            <FaGithub className="text-2xl dark:text-gray-50 cursor-pointer hover:scale-110" />
          </a>
          <a
            href="https://www.instagram.com/mr__kiran143/?hl=en"
            target="_blank"
          >
            <FaInstagram className="text-2xl dark:text-gray-50 cursor-pointer hover:scale-110" />
          </a>
        </div>
        <div className="flex mt-5 gap-5">
          <Link
            to={"mailto:kiranruthalakiran@gmail.com"}
            className="bg-blue-600 text-gray-100 hover:bg-blue-700 text-md sm:text-lg px-2 py-1 rounded-md"
          >
            <button>Hire Me</button>
          </Link>
          <a
            href={myresume}
            target="_blank"
            download="kiran's resume"
            className="flex items-center justify-center border border-gray-500 bg-transparent relative z-10 before:z-[-1]  before:absolute before:bg-gray-300 dark:before:bg-gray-600 before:w-0 before:rounded-md before:hover:w-full before:h-full before:transition-all before:duration-500 before:left-0 before:ease-out text-gray-800 dark:text-gray-100 px-2 py-1 text-md sm:text-lg p-1 rounded-md"
          >
            <p>Download Resume</p>
          </a>
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center">
        <img
          src={me}
          className="borderradiusprofile brightness-[1] shadow-[rgba(6,_24,_44,_.4)_0px_0px_0px_3px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] dark:shadow-[rgba(250,_0,_200)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] lg:w-[350px] lg:h-[350px] md:w-[300px] md:h-[300px]   object-cover"
          alt="profileimg"
        />
      </div>
    </div>
  );
};

export default Intro;
