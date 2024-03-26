import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
const Darkmode = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light" );

  const ele = document.documentElement;

  useEffect(()=>{
    localStorage.setItem("theme",theme)
    if(theme === "dark"){
        ele.classList.add("dark")
    }
    else{
        ele.classList.remove("dark")
    }
  },[theme])

  return (
    <div
      className="relative cursor-pointer dark:text-gray-200"
      onClick={()=>settheme((prev) => (prev === "dark" ? "light" : "dark"))}
    >
      <MdOutlineLightMode
        className={`absolute text-2xl ${
          theme === "light" ? "opacity-0" : "opacity-100"
        } `}
      />
      <MdLightMode
        className={`text-2xl ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default Darkmode;
