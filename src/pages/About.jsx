import React from "react";
import { Sidebar, SubNavbar, IconSidebar } from "../components";

const About = () => {
  return (
    <div className="h-full flex">
      <div className="flex-auto w-[3.5%]">
        <IconSidebar />
      </div>
      <div className="flex-auto w-[15.5%]">
        <Sidebar />
      </div>
      <div className="flex-auto w-[81%]">
        <SubNavbar />
      </div>
    </div>
  );
};

export default About;
