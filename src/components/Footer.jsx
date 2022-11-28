import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="text-white text-subheading bg-primary border border-border rounded-b-8 z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start w-10/12  ">
          <div className="w-24 flex items-center  border border-border border-y-0 border-l-0 p-3">
            <p className="text-bodyText text-code">Find me: </p>
          </div>
          <div className="w-12 flex items-center justify-center border border-border border-y-0 border-l-0 p-3">
            <BsFacebook className="text-bodyText text-[18px] hover:text-white hover:cursor-pointer ease-in-out duration-300" />
          </div>
          <div className="w-12 flex items-center justify-center border border-border border-y-0 border-l-0 p-3">
            <BsLinkedin className="text-bodyText text-[18px] hover:text-white hover:cursor-pointer ease-in-out duration-300" />
          </div>
        </div>
        <div className=" w-2/12 ">
          <div className="flex text-right justify-end items-center pr-3 border-0 lg:border border-border lg:border-y-0 lg:border-r-0">
            <BsGithub className="mr-2 text-[18px] text-white" />
            <p className="text-bodyText text-code hover:text-white hover:cursor-pointer ease-in-out duration-300 hidden lg:block">
              @codeComet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
