import React from "react";
import { MdClose } from "react-icons/md";

const SubNavbar = () => {
  return (
    <div className="w-full border border-t-0 border-l-0 border-border">
      <div className="w-[13%] flex justify-between items-center p-3 border border-y-0 border-l-0 border-r-border">
        <p className="text-bodyText">personal-info</p>
        <MdClose className="text-bodyText hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default SubNavbar;
