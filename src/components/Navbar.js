"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  function toggle() {
    setMenu(!menu);
    console.log("hello");
  }
  return (
    <div className="bg-white backdrop-blur-md shadow-md">
      <nav className="flex justify-between lg:justify-around items-center p-5 ">
        <img src="./logo.svg" alt="Eatofy" className="w-44" />
        <RxHamburgerMenu
          className="block md:hidden"
          onClick={toggle}
          size={25}
        />
        <ul
          className={`${
            menu ? "flex" : "hidden"
          } absolute  top-[4.5rem] w-full left-0 p-5 gap-5  bg-red-400 text-white font-semibold  text-center  text-lg flex-col md:flex-row md:w-auto md:items-center md:font-normal md:text-black md:bg-transparent md:flex md:static`}
        >
          <a href="/">Home</a>
          <a href="/About">About Us</a>
          <a href="/Serce">Service</a>
          <a href="/Contact">Conatct</a>
          <div className=" md:hidden ">
            <button className="active:bg-red-400 w-40  py-2 cursor-pointer text-lg rounded-full font-bold text-white bg-[#ef4444]">
              Get Started
            </button>
          </div>
        </ul>

        <div className="hidden md:block px-5 py-2 cursor-pointer text-lg rounded-full font-bold text-white bg-[#ef4444]">
          Get Started
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
