import React from "react";
import Intro from "./Intro";
import About from "../About/About";
import Contactme from "../Contactme/Contactme";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Education from "../Education/Education";
import Title from "../Title/Title";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <section id="introsection" className="bg-gray-50 pb-10 lg:pt-5 px-2 sm:px-5 md:px-12 dark:bg-gray-800">
        <Intro/>
      </section>
      <section id="aboutsection" className=" bg-gray-50 px-2 lg:py-5 sm:px-5 md:px-12 dark:bg-gray-800">
      <Title text="About Me" />
      <div className="grid grid-cols-1 py-10 gap-y-4  md:grid-cols-2 gap-2">
      <About/>
      <Education/>
      </div>
      </section>
      <section id="skillsection" className="bg-gray-50 px-1 pb-5 sm:px-5 md:px-12 dark:bg-gray-800">
      <Skills/>
      </section>
      <section id="projectsection" className="bg-gray-100 px-2 sm:px-5 md:px-12 dark:bg-gray-800">
      <Projects/>
      </section>
      <section id="contactsection" className="bg-gray-50 px-2 sm:px-5 md:px-12 dark:bg-gray-800">
      <Contactme/>
      </section>
    </div>
  );
};

export default Home;
