import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../src/assets/logo.jpg";

function Navbar() {
  return (
    <nav className="bg-customColor flex flex-wrap justify-between items-center h-20 px-4 py-2">
      <div className="flex items-center flex-shrink-0">
        <img
          src={logo}
          alt="Logo"
          className="w-16 h-16 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>
      <div className="flex space-x-4 mt-4 sm:mt-0">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-current text-customColorText text-lg"
              : "hover:border-b-2 hover:border-current text-lg text-customColorText"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-current text-customColorText text-lg"
              : "hover:border-b-2 hover:border-current text-lg text-customColorText"
          }
        >
          Menu
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-current text-customColorText text-lg"
              : "hover:border-b-2 hover:border-current text-lg text-customColorText"
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
