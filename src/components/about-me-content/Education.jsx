import React from "react";
import EduAchievements from "./EduAchievements";
import { FaGraduationCap, FaAnchor } from "react-icons/fa";

const Education = () => {
  return (
    <div className="flex h-full">
      <div className="basis-[62%] border border-y-0 border-l-0 border-r-border mr-7 break-words p-4 text-white">
        {/* University */}
        <div>
          <div className="flex items-center">
            <FaGraduationCap className="text-white text-subheading mr-3" />
            <span className="text-coral">
              Bachelor of Science in Computer Science{" "}
            </span>
            <span className="text-blue">
              &nbsp;- XYZ University (20XX-20XX)
            </span>
          </div>
          <div className="text-bodyText ml-12">
            <p>
              <span className="text-green">Relevant coursework: </span>Data
              Structures, Algorithms, Computer Architecture, Database Designing,
              System Analysis, Data Communication, Electronics etc.
            </p>{" "}
          </div>
        </div>

        {/* Marine Engineering */}
        <div className="my-6">
          <div className="flex items-center">
            <FaAnchor className="text-white text-subheading mr-3" />
            <span className="text-coral">Marine Engineering </span>
            <span className="text-blue">
              &nbsp;- Shah Marine & Business Institute (20XX-20XX)
            </span>
          </div>
          <div className="text-bodyText ml-12">
            <p>
              <span className="text-green">Relevant coursework: </span>Data
              Structures, Algorithms, Computer Architecture, Database Designing,
              System Analysis, Data Communication, Electronics etc.
            </p>{" "}
          </div>
        </div>

        {/* College */}
        <div className="mb-6">
          <div className="flex items-center">
            <FaGraduationCap className="text-white text-subheading mr-3" />
            <span className="text-coral">
              Higher Secondary School Certificate{" "}
            </span>
            <span className="text-blue">
              &nbsp;- Dhanmondi Ideal College (20XX-20XX)
            </span>
          </div>
          <div className="text-bodyText ml-11">
            <p>
              Passed with <span className="text-green">GPA 4.40</span>
            </p>
          </div>
        </div>
      </div>

      <div className=" basis-[38%] border border-y-0 border-x-border p-3 overflow-y-scroll">
        <EduAchievements />
      </div>
    </div>
  );
};

export default Education;
