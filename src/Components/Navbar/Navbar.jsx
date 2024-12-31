import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex flex-wrap justify-between items-center text-white px-10 py-4 bg-gradient-to-r from-gray-900 via-gray-800 to-black bg-opacity-90 shadow-lg">
      {/* Logo */}
      <span className="text-2xl font-bold tracking-wide hover:text-gray-300 transition duration-300">
        Portfolio
      </span>

      {/* Menu Items */}
      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-4 py-4 md:py-0 font-semibold bg-black bg-opacity-80 md:bg-transparent px-4 md:px-0 rounded-xl md:rounded-none text-center md:static md:flex gap-6 transition-all duration-500 transform ${
          menu ? "scale-100 opacity-100" : "scale-95 opacity-0"
        } md:transform-none md:opacity-100`}
      >
        {["About", "Skills", "Projects", "Contact"].map((item, index) => (
          <a
            key={index}
            href={`#${item}`}
            className="text-md relative group transition-all duration-300 p-2 md:p-0"
          >
            <li className="hover:text-gray-300">
              {item}
              <span className="block w-0 group-hover:w-full h-[2px] bg-green-300 transition-all duration-300"></span>
            </li>
          </a>
        ))}
      </ul>
      

      {/* Mobile Menu Toggle Icon */}
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-4 transition-transform duration-500 transform hover:scale-110 hover:rotate-90"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-4 transition-transform duration-500 transform hover:scale-110 hover:rotate-90"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
