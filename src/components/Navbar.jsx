import { IKImage } from "imagekitio-react";
import {
  Cross,
  CrossIcon,
  LogIn,
  LogInIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import React, { useState } from "react";
import Image from "./Image.jsx";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* logo */}
      <div className="flex items-center text-2xl font-bold gap-4">
        <Image src={"/logo.png"} className={"w-8 h-8"} />
        <span>Habibi Blog</span>
      </div>
      {/*mobile view */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => {
            setOpen((open) => {
              return !open;
            });
          }}
        >
          {open ? <MenuIcon /> : <XIcon />}
        </div>
        {/* This is why we */}
        <div
          className={` w-full h-screen flex flex-col items-center justify-center absolute top-16 gap-8 font-medium text-lg bg-red-400 transition-all ease-in-out ${
            open ? "-right-[100vw]" : "-right-0"
          } `}
        >
          <a href="">Home</a>
          <a href="">Trending</a>
          <a href="">Most Popular</a>
          <a href="">About</a>
          <a href="">
            <button className="py-2 px-4 rounded-3xl">
              <LogInIcon />
            </button>
          </a>
        </div>
      </div>
      {/* desktop view */}
      <div className="hidden md:flex gap-8 xl:gap-12 font-medium">
        <a href="">Home</a>
        <a href="">Trending</a>
        <a href="">Most Popular</a>
        <a href="">About</a>
        <a href="">
          <button className=" px-4 rounded-3xl">
            <LogInIcon />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
