import React from "react";
import { CodeSnippets } from "../../components";

const Experience = () => {
  return (
    <div className="flex ">
      <div className="basis-[62%] border border-y-0 border-l-0 border-r-border mr-7 break-words p-4">
        <div className="text-white break-words">
          ** <span className="text-green">Frontend developer</span> at{" "}
          <span className="text-coral">XYZ Company (2 years)</span>: Worked on
          developing, designing,and implementing user-friendly interfaces, also
          was responsible for maintaining and improving the existing
          application.
        </div>
        <br></br>
        <div className="text-white break-words">
          ** <span className="text-green">Senior Frontend Developer</span> at{" "}
          <span className="text-coral">ABC Agency (3 years)</span>: Led a team
          of developers to deliver client projects, also worked with the project
          manager and design team to ensure that all projects were delivered on
          time and on budget.
        </div>
        <br></br>
        <div className="text-white break-words">
          **{" "}
          <span className="text-green">
            Freelance Frontend Developer (2 years):
          </span>{" "}
          Managed multiple clients and deliver the project with success, which
          helps me to enhance my skills to work under pressure and to meet
          deadlines.
        </div>
        <br></br>
        <div className="text-white break-words">
          ** <span className="text-green">Material Developer</span> at{" "}
          <span className="text-coral">BRAC (1 year)</span>: Led a team of
          developers to deliver client projects, also worked with the project
          manager and design team to ensure that all projects were delivered on
          time and on budget.
        </div>
        <br></br>
        <div className="text-white break-words">
          Proven ability to work effectively in a fast-paced, deadline-driven
          environment. Strong{" "}
          <span className="text-coral">problem-solving skills</span> and a
          <span className="text-green"> team player</span> mentality. Passionate
          about staying up-to-date with the latest frontend technologies and
          trends to constantly improve my skills and deliver exceptional results
          for clients.
        </div>
      </div>
      <div className="basis-[38%] border border-y-0 border-x-border p-3 overflow-y-scroll">
        <CodeSnippets />
      </div>
    </div>
  );
};

export default Experience;
