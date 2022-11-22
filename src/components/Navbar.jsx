import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineCode } from "react-icons/hi";

const Navbar = () => {
  return (
    <div>
      <nav class="bg-primary border border-border px-3 sm:px-4 rounded text-bodyText">
        <div className="flex items-center justify-between px-3 md:px-0  ">
          {/* Logo section */}
          <di className="flex-none xl:w-[10%] lg:w-[12%]  text-left p-3 pl-0 border-border">
            <Link to="/">
              <p className="text-label font-medium md:text-code">_bishal</p>
            </Link>
          </di>
          {/* Menu section */}
          <div className="items-center flex-auto justify-start xl:w-[80%] lg:w-[73%]  border border-border border-y-0 border-r-0 hidden lg:flex">
            <Link to="/" className="pr-[60px]  p-3 no-underline">
              <p className="hover:text-white ease-in-out duration-300 text-label font-medium md:text-code">
                _hello
              </p>
            </Link>
            <Link
              to="/"
              className="pr-[60px] border-y-0 border border-border p-3 no-underline"
            >
              <p className="hover:text-white ease-in-out duration-300 text-label font-medium md:text-code">
                _about-me
              </p>
            </Link>
            <Link
              to="/"
              className="pr-[60px] border-y-0 border border-border p-3 no-underline"
            >
              <p className="hover:text-white ease-in-out duration-300 text-label font-medium md:text-code">
                _projects
              </p>
            </Link>
          </div>
          {/* Mobile menu */}
          <button
            data-collapse-toggle="navbar-control"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-control"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <HiOutlineCode className="text-white font-label font-medium" />
          </button>
          {/* <div className="hidden md:block hover:cursor-pointer"></div> */}
          {/* Contact */}
          <div className="flex-none items-center justify-end whitespace-nowrap text-right xl:w-[10%] lg:w-[15%]  p-3 hidden lg:flex border border-border border-y-0 border-r-0">
            <Link to="/">
              <p className="hover:text-white ease-in-out duration-300 text-label font-medium md:text-code ">
                _contact-me
              </p>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
