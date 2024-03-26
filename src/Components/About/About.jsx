import React from "react";

const About = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-700 px-5 rounded-md py-5 flex flex-col justify-center gap-6">
      <p className="text-xl">Hi, I'm <span className="text-red-600 font-semibold">Kiran !</span></p>
      <p className=" text-sm text-gray-800 dark:text-gray-200 sm:text-lg md:text-sm lg:text-[17px]  ">
        I'm a passionate frontend web developer currently in the 3rd year of my
        CSE studies at GIET Engineering College.
      </p>
      <p className="text-sm text-gray-800 dark:text-gray-200 sm:text-lg md:text-sm lg:text-lg">
        I have a solid grasp of HTML, CSS, and JavaScript. Also familiar with
        frameworks like React.js to understand efficient UI development
        practices and I'm also comfortable using tools like Tailwind CSS and
        Bootstrap, which has helped me learn about rapid UI development. And also i have problem-solving and
        communication abilities.I'm currently delving into SCSS to enhance my
        styling skills and for better code organization.
      </p>
      <p className="text-sm text-gray-800 dark:text-gray-200 sm:text-lg md:text-sm lg:text-lg">
        I'm eager to learn and grow as a developer, and I'm always looking for
        opportunities to challenge myself and contribute to creative projects.
      </p>
    </div>
  );
};  

export default About;
