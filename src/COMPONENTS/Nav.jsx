import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import NavMenu from "./NavMenu";
import { IoClose } from "react-icons/io5";

function Nav() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav>
        <div className="hidden md:flex gap-8 text-white font-semibold tracking-wider">
          <NavMenu />
        </div>
        <div className="flex md:hidden text-2xl text-white">
          <button onClick={() => setToggle(!toggle)}>
            {toggle ? <IoClose /> : <HiMenu />}
          </button>
        </div>
      </nav>
      {toggle && (
        <div className="flex basis-full flex-col items-center gap-4 text-pink-500 text-xl font-semibold tracking-wider">
          <NavMenu />
        </div>
      )}
    </>
  );
}

export default Nav;
