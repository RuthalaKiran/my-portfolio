import React from "react";

const About = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-700 px-5 rounded-md py-5 flex flex-col justify-center gap-6">
      <p className="text-xl">
        Hi, I'm <span className="text-red-600 font-semibold">Kiran !</span>
      </p>
      <p className="text-sm text-gray-800 dark:text-gray-200 sm:text-lg md:text-sm lg:text-lg">
        Final-year B.Tech student in Computer Science & Engineering with
        familiarity in front-end technologies (HTML, CSS, JavaScript, Bootstrap,
        Tailwind CSS, React.js) and foundational backend development skills,
        including Python.
      </p>
      <p className="text-sm text-gray-800 dark:text-gray-200 sm:text-lg md:text-sm lg:text-lg">
        I'm eager to learn and grow as a developer, and I'm always looking for
        opportunities to challenge myself and contribute to creative projects.
      </p>
    </div>
  );
};

export default About;
