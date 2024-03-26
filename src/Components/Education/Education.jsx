import React from "react";

const Education = () => {
  return (
    <div className="bg-gray-400 dark:bg-gray-600 rounded-md">
      <h1 className="text-center text-xl pt-5 ">Education</h1>
      <div className=" my-10 flex items-center justify-center overflow-hidden px-3">
        <div className=" relative before:absolute before:w-1 before:h-[100vh] sm:before:h-[70vh] before:my-auto before:bg-gray-800  before:-left-7 before:rounded-full  ml-32 flex flex-col justify-center gap-20 ">
          <div className="cursor-pointer before:duration-200 relative before:absolute before:w-3 before:h-3 before:bg-white before:hover:scale-150 before:hover:bg-orange-400 before:cursor-pointer dark:before:bg-blue-400 before:rounded-full before:-left-[32px] before:top-2">
            <p className="absolute -left-[120px] text-sm top-1">2021-2025</p>
            <p className="dark:text-gray-200 text-gray-800 text-sm lg:text-lg md:text-sm">
              Bachelor of Technology (B.Tech) in Computer Science & Engineering
            </p>
            <p className="dark:text-gray-200 text-gray-700 lg:text-md md:text-sm my-1">
              {" "}
              GIET Engineering College
            </p>
            <p className="dark:text-gray-200 text-gray-800 text-xs lg:text-md md:text-sm">
              currently pursuing (3<sup>rd</sup> year){" "}
            </p>
          </div>
          <div className="relative cursor-pointer before:duration-200 before:hover:scale-150 before:hover:bg-orange-400 before:cursor-pointer before:absolute before:w-3 before:h-3 before:bg-white dark:before:bg-blue-400 before:rounded-full before:-left-[32px] before:top-2">
            <p className="absolute -left-[120px] text-sm top-1">2019-2021</p>
            <p className="dark:text-gray-200 text-gray-800 text-sm lg:text-lg md:text-sm">
              Intermediate (MPC)
            </p>
            <p className="dark:text-gray-200 text-gray-700 lg:text-md md:text-sm my-1">
              Sri Chaitanya Junior College
            </p>
            <p className="dark:text-gray-200 text-gray-800 lg:text-md md:text-sm text-xs">
              Percentage: 93.4%
            </p>
          </div>
          <div className="relative before:duration-200 cursor-pointer before:hover:scale-150 before:hover:bg-orange-400 before:cursor-pointer before:absolute before:w-3 before:h-3 before:bg-white dark:before:bg-blue-400 before:rounded-full before:-left-[32px] before:bottom-2">
            <p className="absolute dark:text-gray-200 -left-[100px] text-sm top-5">
              2019
            </p>
            <p className="dark:text-gray-200 text-gray-800 text-sm lg:text-lg md:text-sm">
              SSC
            </p>
            <p className="dark:text-gray-200 text-gray-700 lg:text-md md:text-sm my-1">
            JMJ English Medium School{" "}
            </p>
            <p className="dark:text-gray-200 text-gray-800 lg:text-md md:text-sm text-xs">
              Percentage: 97.0%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
