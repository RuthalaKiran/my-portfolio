import React, { useRef, useState } from "react";
import { FaArrowTurnDown } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import Title from "../Title/Title";
import loader from "../../assets/loading.svg"

const Contactme = () => {
  const formref = useRef();
  const [loading, setlading] = useState(false);

  const sendemail = (e) => {
    e.preventDefault();
    setlading(true);
    emailjs
      .sendForm(
        "service_qv29gp7",
        "template_bapv6uc",
        formref.current,
        "rQpG87W-hry91hM2f"
      )
      .then((res) => {
        console.log(res.text);
        console.log("email sent");
        setlading(false);
        toast.success("email sent succesfull");
      })
      .catch((err) => {
        console.log(err.text);
        console.log("email not sent");
        setlading(false);
        toast.error("Oops something went wrong!");
      });
  };

  return (
    <div className="py-10">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 2000,
          style: {
            background: "#8e4d4d",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 2000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
     <Title text="Contact Me" />
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-x-5">
        <div className="flex  items-center justify-center py-5">
          <div className=" w-[90%] h-[100%] py-20 sm:py-24 md:py-5 px-5 roun rounded-md    shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:shadow-[0_3px_10px_rgb(225,225,225,0.1)]   flex flex-col justify-center gap-4 items-center">
            <p className="flex group items-center gap-2 cursor-pointer text-xl font-semibold text-gray-700 dark:text-gray-200">
              Find Me{" "}
              <FaArrowTurnDown className="text-sm group-hover:translate-y-2 duration-200 " />{" "}
            </p>
            <p className="flex items-center gap-2 text-sm sm:text-md text-gray-700 dark:text-gray-300">
              {" "}
              <CiMail /> kiranruthalakiran@gmail.com
            </p>
            <p className="flex items-center gap-2 text-sm sm:text-md text-gray-700 dark:text-gray-300">
              {" "}
              <FiPhoneCall /> Phone : +91 7893532622{" "}
            </p>
          </div>
        </div>
        <div className="flex  items-center justify-center py-5">
          <div className=" py-5 px-2 xl:w-[80%] lg:w-[90%] md:w-[100%] sm:w-[90%] w-[90%] h-auto">
            <form
              action=""
              ref={formref}
              onSubmit={sendemail}
              className="flex flex-col justify-center gap-10"
            >
              <div>
                <input
                  type="text"
                  name="your_name"
                  required
                  placeholder="Name"
                  className="w-[100%] text-gray-700 dark:text-gray-200 bg-transparent border-2 border-gray-500 dark:focus:border-gray-200 focus:border-black outline-none  text-xl px-2 py-1 rounded-[5px]"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="your_email"
                  required
                  placeholder="Email"
                  className="w-[100%] text-gray-700 dark:text-gray-200 bg-transparent border-2 border-gray-500 dark:focus:border-gray-200 focus:border-black outline-none  text-xl px-2 py-1 rounded-[5px]"
                />
              </div>
              <textarea
                className="w-[100%] text-gray-700 dark:text-gray-200 bg-transparent border-2 border-gray-500 dark:focus:border-gray-200 outline-none focus:border-black text-xl px-2 py-1 rounded-[5px]"
                placeholder="message"
                required
                name="message"
                id=""
                cols="10"
                rows="5"
              ></textarea>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className={` ${
                    loading ? "cursor-not-allowed " : ""
                  } flex items-center bg-blue-500 dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-600 text-gray-50 text-xl px-3 py-1 rounded-sm gap-1`}
                >
                  {loading ? <img className="mix-blend-darken w-7 rounded-lg" src={loader} alt="" /> : <p>Send</p> } <IoIosSend />{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
