"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const currentDate = new Date();

const options = { month: "long", day: "numeric", year: "numeric" };

const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
  currentDate
);

const UserProfileDropdown = ({ onClose, userName, userEmail }) => {
  return (
    <div className="absolute right-0 mt-52 w-48 bg-white  border border-gray-300 dark:border-slate-850 rounded-lg shadow-lg z-10">
      <div className="p-5 flex flex-col items-center space-y-5">
        <div className="flex justify-center items-center  w-8 h-8 relative">
          <Image
            src="/userImage.jpeg"
            alt="User Profile Picture"
            fill={true}
            className=" object-cover rounded-full relative"
          />
          <div className="absolute bottom-0 left-[1.7rem] bg-green-800 rounded-full w-2 h-2"></div>
        </div>
        <div className="text-sm">
          <p className="flex justify-center">Kelechukwu</p>
          <p>obiefuna@gmail.com</p>
        </div>
      </div>
      <div className="border-t border-gray-300 dark:border-slate-850">
        <button
          onClick={onClose}
          className="w-full text-left p-2 text-sm text-gray-600 hover:bg-gray-100 flex justify-center"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const NavBar = () => {
  const [width, setWidth] = useState(0);
  const [userDropdownVisible, setUserDropdownVisible] = useState(false);

  const handleUserDropdown = () => {
    setUserDropdownVisible(!userDropdownVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <header className="flex items-center h-16 border-b-2 border-gray-300">
      <nav className="w-[88%] md:w-[92%] lg:w-[95%] mx-auto flex items-center justify-between gap-x-5">
        <Link href="/" className="text-xl font-bold ">
          Logo
        </Link>
        <div className="flex items-center relative">
          <Image
            src="/userImage.jpeg"
            alt="User Picture"
            className="rounded-full mr-2 object-cover w-10 h-10 relative"
            width={30}
            height={30}
          />
          <div className="absolute bottom-0 left-[1.7rem] bg-green-800 rounded-full w-3 h-3"></div>
          <span
            className="md:hidden cursor-pointer"
            onClick={handleUserDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{
                fill: "rgba(0, 0, 0, 1)",
                transform: "none",
                msFilter: "none",
              }}
            >
              <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
            </svg>
          </span>
          <div className="text-sm hidden md:block">
            <p className="font-semibold">Aitanum Daniel</p>
            <p>daniel.aitanum@gmail.com</p>
          </div>
        </div>
        {userDropdownVisible && (
          <UserProfileDropdown
            onClose={() => setUserDropdownVisible(false)}
            userName="Justin Bergson"
            userEmail="justin@gmail.com"
          />
        )}
      </nav>
    </header>
  );
};

export default NavBar;
