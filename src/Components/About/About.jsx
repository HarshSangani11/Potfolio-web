import React from "react";
import AboutImg from "../../assets/abo.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="relative text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black bg-opacity-90 rounded-lg p-12 shadow-lg"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="bg-gradient-to-r from-blue-900 via-black to-purple-900 opacity-50 w-full h-full animate-gradientMove"></div>
      </div>

      <div className="relative z-10 animate-fadeIn">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center md:gap-8">
          <img
            className="md:h-80 md:mb-0 mb-6 rounded-lg shadow-md animate-slideIn"
            src={AboutImg}
            alt="About img"
          />
          <ul>
            <div className="flex gap-3 py-4 animate-fadeUp">
              <IoArrowForward size={30} className="mt-1 text-blue-400" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight text-gray-400">
                  I am a Frontend Developer focused on building responsive, interactive, and visually appealing websites. With expertise in HTML, CSS, JavaScript, and modern frontend frameworks like React.
                </p>

              </span>
            </div>
            <div className="flex gap-3 py-4 animate-fadeUp">
              <IoArrowForward size={30} className="mt-1 text-blue-400" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database Developer
                </h1>
                <p className="text-sm md:text-md leading-tight text-gray-400">
                  As a Database Developer, I specialize in designing, implementing, and maintaining robust database systems using MySQL and Oracle.
                </p>

              </span>
            </div>
            <div className="flex gap-3 py-4 animate-fadeUp">
              <IoArrowForward size={30} className="mt-1 text-blue-400" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight text-gray-400">
                  As a Backend Developer, I focus on building scalable, secure, and efficient server-side applications. With expertise in server-side languages like  Python, and Java, I design APIs, manage databases, and ensure smooth data flow between users and services.
                </p>

              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

/* CSS Animations */

