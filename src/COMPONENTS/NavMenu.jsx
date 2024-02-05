import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/aboutUs">About us</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </>
  );
};

export default NavMenu;
