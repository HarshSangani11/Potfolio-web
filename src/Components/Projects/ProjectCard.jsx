// import React from "react";
// import bannerImg from "../../assets/photo-C8q0KQHG.webp";

// const ProjectCard = ({ title, main, demoUrl,gitUrl,imgUrl }) => {
//   return (
//     <div className="relative p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-lg rounded-2xl transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-[#1a1c2b] animate-fadeInUp">
//       {/* Image */}
//       <img
//         className="p-4  rounded-xl transition-transform duration-300 hover:scale-110"
//         src={imgUrl}
//         alt={title}
//       />

//       {/* Title */}
//       <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal text-yellow-400 mt-4">
//         {title}
//       </h3>

//       {/* Description */}
//       <p className="px-4 text-sm md:text-md leading-tight py-2 text-gray-300">
//         {main}
//       </p>

//       {/* Buttons */}
//       <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4 justify-center">
//         <button
//           onClick={() => window.open(demoUrl, "_blank")}
//           className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-90 transition-transform duration-300 hover:scale-110 font-semibold rounded-3xl bg-blue-600"
//         >
//           Demo
//         </button>
//         <button
//                   onClick={() => window.open(gitUrl, "_blank")}

//           className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-90 transition-transform duration-300 hover:scale-110 font-semibold rounded-3xl bg-blue-600"
//         >
//           Source Code
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
import React from "react";

const ProjectCard = ({ title, main, demoUrl, gitUrl, imgUrl }) => {
  return (
    <div className="relative p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-lg rounded-2xl transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-[#1a1c2b] animate-fadeInUp">
      {/* Image */}
      <img
        className="p-4 rounded-xl transition-transform duration-300 hover:scale-110"
        src={imgUrl}
        alt={title}
      />

      {/* Title */}
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal text-yellow-400 mt-4">
        {title}
      </h3>

      {/* Description */}
      <p className="px-4 text-sm md:text-md leading-tight py-2 text-gray-300">
        {main}
      </p>

      {/* Buttons */}
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4 justify-center">
        <button
          onClick={() => window.open(demoUrl, "_blank")}
          className="relative text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 transition-all duration-300 hover:scale-110 font-semibold rounded-3xl bg-gradient-to-r from-green-400 to-blue-600 hover:from-green-600 hover:to-blue-800 shadow-lg group"
        >
          <span className="absolute inset-0 transform scale-0 bg-white opacity-10 rounded-3xl group-hover:scale-100 transition-transform duration-300"></span>
          <span className="relative z-10">Demo</span>
        </button>
        <button
          onClick={() => window.open(gitUrl, "_blank")}
          className="relative text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 transition-all duration-300 hover:scale-110 font-semibold rounded-3xl bg-gradient-to-r from-pink-400 to-purple-600 hover:from-pink-600 hover:to-purple-800 shadow-lg group"
        >
          <span className="absolute inset-0 transform scale-0 bg-white opacity-10 rounded-3xl group-hover:scale-100 transition-transform duration-300"></span>
          <span className="relative z-10">Source Code</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
