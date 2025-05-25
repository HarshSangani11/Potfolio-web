import { FaReact, FaHtml5, FaCss3, FaBootstrap, FaJs, FaPython } from "react-icons/fa";
import { SiJquery, SiC, SiCplusplus, SiDatabricks, SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiAdobexd, SiCoreldraw } from "react-icons/si";

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
            { icon: <SiFigma color="#F24E1E" size={50} />, id: "figma", name: "Figma" },
            { icon: <SiAdobephotoshop color="#31A8FF" size={50} />, id: "photoshop", name: "Photoshop" },
            { icon: <SiAdobeillustrator color="#FF9A00" size={50} />, id: "illustrator", name: "Illustrator" },
            { icon: <SiCoreldraw color="#FF61F6" size={50} />, id: "cd", name: "Corel" }
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
