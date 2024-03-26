import React, { useState } from "react";
import Darkmode from "./Darkmode";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";
import Devlogo from "./Devlogo";

const Navbar = () => {
  const [menu, setmenu] = useState(false);
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
    <div className="dark:bg-gray-900 bg-gray-50 px-2 sm:px-5 md:px-12 py-2 sticky top-0 shadow-md z-50 ">
      <div className=" flex items-center justify-between relative z-auto ">
        <Devlogo />

        <div
          className={`${
            menu
              ? "top-12 bg-gray-100 dark:bg-gray-800 rounded-md"
              : "-top-[300px]"
          } sm:dark:bg-transparent sm:rounded-none w-full sm:w-auto sm:z-auto z-[-1]  absolute sm:static duration-300 transition-all ease-out`}
        >
          <ul className=" flex-col sm:flex-row flex gap-5 sm:gap-10 px-5 py-3 ">
            {navele.map((item, index) => (
             <div className="text-gray-600 dark:text-gray-400 cursor-pointer">
               <Link
              key={index}
                activeClass="text-gray-950 dark:text-gray-100 font-semibold"
                spy={true}
                smooth={true}
                offset={-70}
                duration={0}
                to={item.link}
                className={` sm:text-md md:text-lg  hover:text-gray-950  dark:hover:text-gray-100`}
              >
                {item.name}
              </Link>
             </div>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-7 ">
          <Darkmode />
          <div
            onClick={() => setmenu(!menu)}
            className="sm:hidden cursor-pointer relative"
          >
            <AiOutlineMenu
              className={` ${
                menu ? "opacity-0" : "opacity-100"
              } absolute text-2xl dark:text-gray-200`}
            />
            <RxCross2
              className={`${
                menu ? "opacity-100" : "opacity-0"
              } text-2xl dark:text-gray-200`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
