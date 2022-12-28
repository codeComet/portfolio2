import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineCode } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleToggle = () => {
    setShowNav((prev) => !prev);
  };
  return (
    <div className="z-10">
      <nav className="bg-primary border border-border px-3 sm:px-4 rounded-t-8 text-bodyText ">
        <div className="flex items-center justify-between px-3 md:px-0  ">
          {/* Logo section */}
          <div className="flex-none xl:w-[10%] lg:w-[12%]  text-left p-3 pl-0 border-border">
            <NavLink to="/">
              <p className="text-label font-medium md:text-code">_bishal</p>
            </NavLink>
          </div>
          {/* Menu section */}
          <div className="items-center flex-auto justify-start xl:w-[80%] lg:w-[73%]  border border-border border-y-0 border-r-0 hidden lg:flex">
            <NavLink
              to="/"
              className="pr-[60px]  p-3 no-underline"
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid #FEA55F" : "none",
                color: isActive ? "white" : "#607B96",
              })}
            >
              <p className="hover:text-white ease-in-out duration-300 text-label font-medium md:text-code">
                _hello
              </p>
            </NavLink>
            <NavLink
              to="/about"
              className="pr-[60px] border-y-0 border border-border p-3 no-underline"
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid #FEA55F" : "none",
                color: isActive ? "white" : "#607B96",
              })}
            >
              <p className="hover:text-white ease-in-out duration-300 text-label font-medium md:text-code">
                _about-me
              </p>
            </NavLink>
            <NavLink
              to="/projects"
              className="pr-[60px] border-y-0 border border-border p-3 no-underline"
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid #FEA55F" : "none",
                color: isActive ? "white" : "#607B96",
              })}
            >
              <p className="hover:text-white ease-in-out duration-300 text-label font-medium md:text-code">
                _projects
              </p>
            </NavLink>
          </div>

          {/* Mobile menu */}
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={handleToggle}
          >
            <span className="sr-only">Open main menu</span>
            <HiOutlineCode className="text-white font-label font-medium" />
          </button>
          <div
            className={`flex flex-col items-center justify-between w-full absolute top-0 left-0 bg-body lg:hidden z-20  ${
              showNav ? "block" : "hidden"
            }`}
          >
            <div className="w-full pt-4 px-4 text-right">
              <button
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={() => setShowNav(false)}
              >
                <span className="sr-only">Close main menu</span>
                <MdClose className="text-white font-label font-medium" />
              </button>
            </div>

            <div className="w-full text-center">
              <NavLink
                to="/"
                className="mb-4 p-3 no-underline"
                onClick={() => showNav(false)}
              >
                <p className=" ease-in-out duration-300 text-[24px] font-medium text-white">
                  _hello
                </p>
              </NavLink>
              <NavLink
                to="/about"
                className="mb-4 p-3 no-underline"
                onClick={() => showNav(false)}
              >
                <p className=" ease-in-out duration-300 text-[24px] font-medium text-white">
                  _about-me
                </p>
              </NavLink>
              <NavLink
                to="/projects"
                className="mb-4 p-3 no-underline"
                onClick={() => showNav(false)}
              >
                <p className=" ease-in-out duration-300 text-[24px] font-medium text-white">
                  _projects
                </p>
              </NavLink>
            </div>
          </div>
          {/* Contact */}
          <div className="flex-none items-center justify-end whitespace-nowrap text-right xl:w-[10%] lg:w-[15%]  p-3 hidden lg:flex border border-border border-y-0 border-r-0">
            <NavLink to="/">
              <p className="hover:text-white ease-in-out duration-300 text-label font-medium md:text-code ">
                _contact-me
              </p>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
