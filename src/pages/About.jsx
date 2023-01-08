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
      <div className="flex-auto w-[3.5%]">
        <IconSidebar />
      </div>
      <div className="flex-auto w-[15.5%]">
        <Sidebar />
      </div>
      <div className="flex-auto w-[81%]">
        <SubNavbar />
        <div className="flex justify-start">
          <div className="basis-2/4 border border-y-0 border-l-0 border-r-border mr-7">
            <Content />
          </div>
          <div className="basis-2/4 border border-y-0 border-x-border mr-7 p-3">
            <CodeSnippets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
