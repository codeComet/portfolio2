import React from "react";
import { MdContentCopy } from "react-icons/md";
import {
  Sidebar,
  SubNavbar,
  IconSidebar,
  Content,
  CodeSnippets,
} from "../components";

const About = () => {
  return (
    <div className="h-full flex z-10">
      <div className="basis-[3%]">
        <IconSidebar />
      </div>
      <div className="basis-[15%]">
        <Sidebar />
      </div>
      <div className="flex basis-[82%] flex-col h-full">
        <SubNavbar />
        <div className="flex h-full">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default About;
