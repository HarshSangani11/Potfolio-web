// import React, { useEffect, useState } from "react";
// import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaGoogle, FaAmazon } from "react-icons/fa";
// import { SiRedis, SiMongodb } from "react-icons/si";
// import { RiNetflixFill } from "react-icons/ri";

// const Experience = () => {
//   // Scroll Animation State
//   const [inView, setInView] = useState(false);

//   const handleScroll = () => {
//     const section = document.getElementById("Experience");
//     const rect = section.getBoundingClientRect();
//     if (rect.top <= window.innerHeight && rect.bottom >= 0) {
//       setInView(true);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div id="Experience" className="p-10 md:p-24 bg-black bg-opacity-50 rounded-lg">
//       <h1 className="text-2xl md:text-4xl text-white font-bold text-center mb-12 animate-fadeIn">
//         Experience
//       </h1>
//       <div className="flex flex-wrap items-center justify-center md:gap-12">
//         {/* Skills Icons */}
//         <div className="flex flex-wrap justify-center gap-8 md:w-3/5 animate-slideIn">
//           {[
//             { icon: <FaHtml5 color="#E34F26" size={50} />, id: "html" },
//             { icon: <FaCss3 color="#1572B6" size={50} />, id: "css" },
//             { icon: <FaReact color="#61DAFB" size={50} />, id: "react" },
//             { icon: <FaJs color="#F7DF1E" size={50} />, id: "js" },
//             { icon: <FaFigma color="#F24E1E" size={50} />, id: "figma" },
//             { icon: <SiMongodb color="#47A248" size={50} />, id: "mongodb" },
//             { icon: <SiRedis color="#FF4438" size={50} />, id: "redis" },
//           ].map(({ icon, id }) => (
//             <div
//               key={id}
//               className="p-4 bg-zinc-950 rounded-2xl transition-all transform hover:scale-110 hover:bg-opacity-90 hover:text-white cursor-pointer"
//             >
//               {icon}
//             </div>
//           ))}
//         </div>

//         {/* Experience Details */}
//         <div className="w-full md:w-2/5 mt-12 md:mt-0">
//           {/* Experience Card */}
//           {[
//             {
//               icon: <FaGoogle color="#4285F4" size={50} />,
//               company: "Google",
//               role: "Software Engineer",
//               period: "Sept 2023 - Present",
//               responsibilities: ["Work as a software developer", "Senior SDE Developer"],
//             },
//             {
//               icon: <RiNetflixFill color="#E50914" size={50} />,
//               company: "Netflix",
//               role: "Software Engineer",
//               period: "Jan 2022 - Aug 2023",
//               responsibilities: ["Developed scalable applications", "Collaborated with teams to deliver features"],
//             },
//             {
//               icon: <FaAmazon color="#FF9900" size={50} />,
//               company: "Amazon",
//               role: "Software Engineer",
//               period: "Jun 2021 - Dec 2021",
//               responsibilities: ["Developed cloud-based solutions", "Optimized applications with teams"],
//             },
//           ].map(({ icon, company, role, period, responsibilities }, index) => (
//             <div
//               key={index}
//               className={`flex gap-8 bg-slate-950 bg-opacity-70 rounded-lg p-6 mb-6 animate-fadeInUp transform ${
//                 inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//               } transition-all`}
//             >
//               {icon}
//               <span className="text-white">
//                 <h2 className="text-xl font-semibold">{role}, {company}</h2>
//                 <p className="text-sm font-light">{period}</p>
//                 <ul className="text-sm p-2">
//                   {responsibilities.map((item, i) => (
//                     <li key={i}>- {item}</li>
//                   ))}
//                 </ul>
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;
// import React, { useEffect, useState } from "react";
// import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaGoogle, FaAmazon } from "react-icons/fa";
// import { SiRedis, SiMongodb } from "react-icons/si";
// import { RiNetflixFill } from "react-icons/ri";

// const Experience = () => {
//   // Scroll Animation State
//   const [inView, setInView] = useState(false);

//   const handleScroll = () => {
//     const section = document.getElementById("Experience");
//     const rect = section.getBoundingClientRect();
//     if (rect.top <= window.innerHeight && rect.bottom >= 0) {
//       setInView(true);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       id="Experience"
//       className="relative p-10 md:p-24 bg-gradient-to-b from-gray-900 to-black rounded-lg overflow-hidden"
//     >
//       {/* Animated Background */}
//       <div className="absolute inset-0 z-0">
//         <div className="bg-gradient-to-r from-blue-800 via-black to-purple-900 opacity-40 w-full h-full animate-gradientMove"></div>
//       </div>

//       <h1 className="text-2xl md:text-4xl text-white font-bold text-center mb-12 animate-fadeIn relative z-10">
//         Skills
//       </h1>

//       <div className="flex flex-wrap items-center justify-center md:gap-12 relative z-10">
//         {/* Skills Icons */}
//         <div className="flex flex-wrap justify-center gap-8 md:w-3/5">
//           {[
//             { icon: <FaHtml5 color="#E34F26" size={50} />, id: "html" },
//             { icon: <FaCss3 color="#1572B6" size={50} />, id: "css" },
//             { icon: <FaReact color="#61DAFB" size={50} />, id: "react" },
//             { icon: <FaJs color="#F7DF1E" size={50} />, id: "js" },
//             { icon: <FaFigma color="#F24E1E" size={50} />, id: "figma" },
//             { icon: <SiMongodb color="#47A248" size={50} />, id: "mongodb" },
//             { icon: <SiRedis color="#FF4438" size={50} />, id: "redis" },
//           ].map(({ icon, id }) => (
//             <div
//               key={id}
//               className="p-4 bg-zinc-950 rounded-2xl transition-all transform hover:scale-125 hover:bg-opacity-90 hover:shadow-xl cursor-pointer animate-slideIn"
//             >
//               {icon}
//             </div>
//           ))}
//         </div>

//         {/* Experience Details */}
//         <div className="w-full md:w-2/5 mt-12 md:mt-0">
//           {[
//             {
//               icon: <FaGoogle color="#4285F4" size={50} />,
//               company: "Google",
//               role: "Software Engineer",
//               period: "Sept 2023 - Present",
//               responsibilities: ["Work as a software developer", "Senior SDE Developer"],
//             },
//             {
//               icon: <RiNetflixFill color="#E50914" size={50} />,
//               company: "Netflix",
//               role: "Software Engineer",
//               period: "Jan 2022 - Aug 2023",
//               responsibilities: ["Developed scalable applications", "Collaborated with teams to deliver features"],
//             },
//             {
//               icon: <FaAmazon color="#FF9900" size={50} />,
//               company: "Amazon",
//               role: "Software Engineer",
//               period: "Jun 2021 - Dec 2021",
//               responsibilities: ["Developed cloud-based solutions", "Optimized applications with teams"],
//             },
//           ].map(({ icon, company, role, period, responsibilities }, index) => (
//             <div
//               key={index}
//               className={`flex gap-8 bg-slate-950 bg-opacity-70 rounded-lg p-6 mb-6 transition-all transform hover:scale-105 hover:shadow-lg ${
//                 inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//               } animate-fadeInUp`}
//             >
//               {icon}
//               <span className="text-white">
//                 <h2 className="text-xl font-semibold">{role}, {company}</h2>
//                 <p className="text-sm font-light">{period}</p>
//                 <ul className="text-sm p-2">
//                   {responsibilities.map((item, i) => (
//                     <li key={i}>- {item}</li>
//                   ))}
//                 </ul>
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;
import { FaReact, FaHtml5, FaCss3, FaBootstrap, FaJs, FaPython } from "react-icons/fa";
import { SiJquery, SiC, SiCplusplus, SiDatabricks } from "react-icons/si";

const Experience = () => {
  return (
    <div
      id="Skills"
      className="relative p-10 md:p-24 bg-gradient-to-b from-gray-900 to-black rounded-lg overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="bg-gradient-to-r from-blue-800 via-black to-purple-900 opacity-40 w-full h-full animate-gradientMove"></div>
      </div>

      <h1 className="text-2xl md:text-4xl text-white font-bold text-center mb-12 relative z-10 animate-fadeIn">
        Skills
      </h1>

      <div className="flex flex-wrap items-center justify-center md:gap-12 relative z-10">
        {/* Skills Icons */}
        <div className="flex flex-wrap justify-center gap-8 md:w-3/5">
          {[
            { icon: <FaReact color="#61DAFB" size={50} />, id: "react", name: "React" },
            { icon: <FaHtml5 color="#E34F26" size={50} />, id: "html", name: "HTML" },
            { icon: <FaCss3 color="#1572B6" size={50} />, id: "css", name: "CSS" },
            { icon: <FaBootstrap color="#7952B3" size={50} />, id: "bootstrap", name: "Bootstrap" },
            { icon: <FaJs color="#F7DF1E" size={50} />, id: "js", name: "JavaScript" },
            { icon: <FaPython color="#306998" size={50} />, id: "python", name: "Python" },
            { icon: <SiJquery color="#0769AD" size={50} />, id: "jquery", name: "jQuery" },
            { icon: <SiC color="#A8B9CC" size={50} />, id: "c", name: "C Language" },
            { icon: <SiCplusplus color="#00599C" size={50} />, id: "cplusplus", name: "C++ Language" },
            { icon: <SiDatabricks color="#FFFFFF" size={50} />, id: "dsa", name: "DSA" },
          ].map(({ icon, id, name }) => (
            <div
              key={id}
              className="p-4 bg-zinc-950 rounded-2xl transition-all transform hover:scale-110 hover:bg-opacity-90 hover:shadow-2xl cursor-pointer flex flex-col items-center animate-scaleIn"
            >
              <div className="transition-transform duration-300">
                {icon}
              </div>
              <span className="text-white text-sm mt-2">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
