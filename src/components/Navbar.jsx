import React from "react";
import { ComLogo, menuClosed, menuOpen } from "../utils";
import gsap from "gsap";
import { useState } from "react";
import { navlists } from "../constants";
import { Link } from "@tanstack/react-router";

const Navbar = () => {
  const [clicked, setclicked] = useState(menuClosed);
  const [display, setdisplay] = useState("hidden");

  const handleClick = () => {
    clicked === menuClosed ? setclicked(menuOpen) : setclicked(menuClosed);
    if (clicked === menuClosed) {
      setdisplay("block");
      gsap.fromTo(
        ".menuSec",
        {
          x: "150px",
          opacity: 0,
        },
        {
          x: "0",
          opacity: 1,
        }
      );
    } else {
      gsap.fromTo(
        ".menuSec",
        {
          x: "0",
          opacity: 1,
        },
        {
          x: "150px",
          opacity: 0,
        }
      );
      //   setdisplay("hidden");
    }
  };
  return (
    <nav className="w-screen h-[10vh] Headline text-white flex justify-center items-center  ">
      <div className="h-full w-5/6 flex items-center justify-between  ">
        <div id="logo" className="h-full flex   items-center">
          <img src={ComLogo} className="" />
        </div>
        <div className="hidden  md:flex">
          <ul className="flex gap-5">
            {navlists.map((itemO, index) => (
              <a key={index} href={itemO.link}>
                <li className="hover:border-b-2 cursor-pointer hover:scale-105  transition-all duration-75">
                  {itemO.item}
                </li>
              </a>
            ))}
          </ul>
        </div>
        <div id="menu" className="h-full flex  items-center">
          <img
            src={clicked}
            onClick={handleClick}
            className="hover:scale-105 z-40 md:hidden cursor-pointer h-1/2 transition-all duration-300"
          />
        </div>
      </div>
      <div
        className={` fixed menuSec top-16 right-0   ${display} bg-white bg-opacity-60 backdrop-blur-md  border z-10 w-1/3 m-2 rounded-2xl h-52 sm:hidden  `}
      >
        <ul className="text-black Headline p-5 flex flex-col gap-4 text-lg">
          {navlists.map((itemO, index) => (
            <a key={index} href={itemO.link}>
              <li className="hover:border-b-2 cursor-pointer border-[#4733C9] hover:text-[#4733C9] transition-all duration-75 ">
                {itemO.item}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
