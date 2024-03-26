import React from "react";
import html from "../../assets/html-5.png";
import css from "../../assets/css-3.png";
import js from "../../assets/js.png";
import bootstrap from "../../assets/bootstrap.png";
import react from "../../assets/react.png";
import tailwind from "../../assets/tailwind.svg";
import scss from "../../assets/sass.png";
import Title from "../Title/Title";

const Skills = () => {
  const skills = [
    {
      id: 1,
      img: html,
      name: "HTML5",
    },
    {
      id: 2,
      img: css,
      name: "CSS3",
    },
    {
      id: 3,
      img: js,
      name: "JavaScript",
    },
    {
      id: 4,
      img: react,
      name: "React.js",
    },
    {
      id: 5,
      img: bootstrap,
      name: "Bootstrap",
    },
    {
      id: 6,
      img: tailwind,
      name: "Tailwind CSS",
    },
    {
      id: 7,
      img: scss,
      name: "SCSS",
    },
  ];
  return (
    <div className="py-5 sm:py-10 md:py-20">
       <Title text="Skills" />

      <div className="mt-10 grid sm:grid-cols-4 grid-cols-3 mx-5 gap-y-10 gap-x-10 sm:gap-x-5 place-items-center ">
        {skills.map((item) => (
          <div
            key={item.id}
            className="rounded-md hover:scale-105 duration-200 cursor-pointer w-[90px] h-20  sm:w-28 sm:h-28 flex flex-col items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700"
          >
            <img src={item.img} alt="" className={`${item.id === 6 ? "pt-1" : ""} w-10 sm:w-14 h-auto`} />
            <p className={`${item.id === 6 ? "pt-2" : ""} text-gray-800 text-xs sm:text-md dark:text-gray-200 px-1 flex justify-center items-center sm:whitespace-nowrap`}>
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
