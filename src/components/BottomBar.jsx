import React from "react";
import { FaSearch, FaListAlt, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="bottom-bar">
      <NavLink
        // active  style
        style={({ isActive }) => ({
          transform: isActive && "scale(1.2)",
          color: !isActive && "#e60023d2",
        })}
        to={"/categories"}
      >
        <FaListAlt size={24} />
      </NavLink>
      <NavLink
        // active  style
        style={({ isActive }) => ({
          transform: isActive && "scale(1.2)",
          color: !isActive && "#e60023d2",
        })}
        to={"/"}
      >
        <FaHome size={30} />
      </NavLink>
      <NavLink
        // active  style
        style={({ isActive }) => ({
          transform: isActive && "scale(1.2)",
          color: !isActive && "#e60023d2",
          color: !isActive && "#e60023d2",
        })}
        to={"/search"}
      >
        <FaSearch size={24} />
      </NavLink>
    </div>
  );
};

export default Header;
