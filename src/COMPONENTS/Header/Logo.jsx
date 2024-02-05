import React from "react";
import { NavLink, Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Link className="" to="/">
        <img
          className="-skew-x-[30deg] rotate-[-30deg] rounded-full h-10 w-10"
          src="./logo.jpg"
          alt="logo"
        />
      </Link>
    </>
  );
};

export default Logo;
