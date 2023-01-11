import React from "react";
import EduAchievements from "./EduAchievements";

const Education = () => {
  return (
    <div className="flex">
      <div className="basis-[62%] border border-y-0 border-l-0 border-r-border mr-7 break-words p-4">
        Bachelor of Science in Computer Science - XYZ University (20XX-20XX)
        Relevant coursework: Data Structures, Algorithms, Computer Organization,
        Software Engineering Final project: Developed a web-based scheduling
        application using Angular and Firebase.
        <div></div>
        Master of Science in Computer Science - XYZ University (20XX-20XX)
        Relevant coursework: Machine Learning, Advanced Database Systems,
        Computer Networking, Artificial Intelligence Final project: Designed and
        implemented a system for personalized movie recommendations using
        machine learning techniques Continuing Education: Advanced JavaScript
        Frameworks - XYZ Coding Bootcamp (20XX) Web Design and User Experience -
        XYZ Professional Development (20XX) Cloud Computing Fundamentals - XYZ
        e-learning Platform (20XX)
      </div>
      <div className=" basis-[38%] border border-y-0 border-x-border p-3 overflow-y-scroll">
        <EduAchievements />
      </div>
    </div>
  );
};

export default Education;
