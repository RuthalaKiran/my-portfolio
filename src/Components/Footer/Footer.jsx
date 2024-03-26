import React from "react";
import { Link } from "react-scroll";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
  const navele = [
    {
      id: 1,
      name: "Home",
      link: "introsection",
    },
    {
      id: 2,
      name: "About",
      link: "aboutsection",
    },
    {
      id: 3,
      name: "Skills",
      link: "skillsection",
    },
    {
      id: 4,
      name: "Projects",
      link: "projectsection",
    },
    {
      id: 5,
      name: "Contact Me",
      link: "contactsection",
    },
  ];
  return (
    <div className="bg-gray-100 px-1 dark:bg-gray-700/20 dark:text-gray-300 flex flex-col gap-7 items-center justify-center py-5">
      <ul className="flex gap-7 flex-wrap items-center justify-center">
        {navele.map((item) => (
          <Link key={item.id} to={item.link} className="cursor-pointer">
            {item.name}
          </Link>
        ))}
      </ul>
      <div className="flex gap-8 text-2xl">
        <a href="https://github.com/RuthalaKiran" target="_blank">
          {" "}
          <FaGithub className="cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/mr__kiran143/?hl=en" target="_blank">
          {" "}
          <FaInstagramSquare className="cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/kiran-ruthala-b2b734275/" target="_blank">
          {" "}
          <FaLinkedin className="cursor-pointer" />
        </a>
      </div>
      <p></p>
    </div>
  );
};

export default Footer;
