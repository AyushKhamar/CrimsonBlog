import { LogInIcon, MenuIcon, XIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "./Image.jsx";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const { getToken } = useAuth();
  useEffect(() => {
    getToken().then((token) => {
      console.log(token);
    });
  }, []);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* logo */}
      <Link to={"/"} className="flex items-center text-2xl font-bold gap-4">
        <Image src={"/logo.png"} className={"w-8 h-8"} />
        <span>Habibi Blog</span>
      </Link>
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
          <Link to="">Home</Link>
          <Link to="">Trending</Link>
          <Link to="">Most Popular</Link>
          <Link to="">About</Link>
          <Link to="">
            <button className="py-2 px-4 rounded-3xl">
              <LogInIcon />
            </button>
          </Link>
        </div>
      </div>
      {/* desktop view */}
      <div className="hidden md:flex gap-8 xl:gap-12 font-medium">
        <Link to="">Home</Link>
        <Link to="">Trending</Link>
        <Link to="">Most Popular</Link>
        <Link to="">About</Link>
        <SignedOut>
          <Link to={"/login"}>
            <button className=" px-4 rounded-3xl">
              <LogInIcon />
            </button>
          </Link>
        </SignedOut>
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
