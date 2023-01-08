import React from "react";
import { BsBookmark } from "react-icons/bs";
import { VscSourceControl, VscFiles } from "react-icons/vsc";

const IconSidebar = () => {
  return (
    <div className="h-full flex flex-col p-4 border border-x-border border-y-0">
      <VscFiles className="text-[24px] text-white hover:cursor-pointer" />
      <VscSourceControl className="text-[24px] my-8 text-bodyText hover:cursor-pointer hover:text-white" />
      <BsBookmark className="text-[24px] text-bodyText hover:cursor-pointer hover:text-white" />
    </div>
  );
};

export default IconSidebar;
