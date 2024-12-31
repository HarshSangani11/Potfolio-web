import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-6 md:p-8 relative"
    >
      {/* Left Section: Terms and Policy */}
      <div className="text-sm md:text-md">
        Terms & Conditions | Privacy Policy
      </div>

      {/* Center Section: Social Media Icons */}
      <div className="flex gap-4">
        {/* GitHub Icon */}
        <a
          href="https://github.com/HarshSangani11"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition duration-300"
        >
          <FaGithub size={20} />
        </a>
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/your-linkedin-username"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition duration-300"
        >
          <CiLinkedin size={20} />
        </a>
      </div>

      {/* Right Section: Copyright */}
      <div className="text-sm md:text-md">
        © 2024 Harsh Sangani. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
