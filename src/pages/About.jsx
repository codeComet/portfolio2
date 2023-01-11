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
    <div className="h-full flex">
      <div className="">
        <IconSidebar />
      </div>
      <div className="">
        <Sidebar />
      </div>
      <div className="flex flex-auto flex-col h-full">
        <SubNavbar />
        <div className="flex h-full ">
          <div className="w-1/2 border border-y-0 border-l-0 border-r-border mr-7">
            <Content />
          </div>
          <div className="w-1/2 border border-y-0 border-x-border mr-7 p-3 overflow-y-scroll ">
            <CodeSnippets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
