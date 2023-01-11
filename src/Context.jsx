import React, { useState, createContext } from "react";
import userImg from "/assets/git-user.png";
import codeImg1 from "/assets/3.png";
import codeImg2 from "/assets/4.png";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState({
    personalInfo: `/*    
* Welcome! My name is Bishal.
* I am a front-end developer with a passion for creating visually appealing
* and user-friendly websites and web applications.
* I am well-versed in HTML, CSS, and JavaScript and have experience with 
* modern frameworks and libraries like React, Next and Vue. I am also familiar 
* with front-end performance optimization, responsive design, 
* and web accessibility guidelines.

* I strive to create visually stunning and interactive websites that provide 
* an enjoyable user experience. I believe in clean and maintainable code and 
* keeping up to date with the latest advancements in the field.
* I am ready to help you bring your next web project to life, whether it be a 
* small landing page or a complex web application. Let me know how I can help.
*/`,

    bio: `/*
* A creative and detail-oriented Frontend Developer with 3+ years of
* experience building responsive,
* user-friendly websites and web applications.
* Proficient in HTML, CSS, JavaScript, and popular frontend frameworks
* such as React, Next and Vue.js.
* Strong ability to collaborate with cross-functional teams,
* including designers, developers, and project managers, to deliver
* high-quality, visually stunning digital experiences.
* Passionate about staying up-to-date with the latest frontend technologies
* and trends to constantly push the boundaries of what's possible.
* Committed to creating accessible and inclusive websites
* for users of all abilities.
*/`,

    experience: `
** Frontend developer at XYZ Company (2 years): Worked on developing,
  designing,and implementing user-friendly interfaces, also was responsible
  for maintaining and improving the existing application

** Senior Frontend Developer at ABC Agency (3 years): Led a team of
  developers to deliver client projects, also worked with the project manager
  and design team to ensure that all projects were delivered on time and on budget.

** Freelance Frontend Developer (1 year): Managed multiple clients and deliver
  the project with success, which helps me to enhance my skills to work under
  pressure and to meet deadlines.

  Proven ability to work effectively in a fast-paced, deadline-driven environment.
  Strong problem-solving skills and a team player mentality.Passionate about staying 
  up-to-date with the latest frontend technologies and trends to constantly improve
  my skills and deliver exceptional results for clients.
    `,

    codeSnippets: [
      {
        userImg: userImg,
        userName: "@codeComet",
        profileUrl: "https://github.com/codeComet",
        creationTime: "Jun, 2021",
        detailsLink: "https://github.com/codeComet/place-rating-app",
        codeImg: codeImg1,
        description: "Built with love",
      },
      {
        userImg: userImg,
        userName: "@codeComet",
        profileUrl: "https://github.com/codeComet",
        creationTime: "Apr, 2022",
        detailsLink: "https://github.com/codeComet/flight-booking",
        codeImg: codeImg2,
        description: "Built with love",
      },
      {
        userImg: userImg,
        userName: "@codeComet",
        profileUrl: "https://github.com/codeComet",
        creationTime: "Apr, 2022",
        detailsLink: "https://github.com/codeComet/flight-booking",
        codeImg: codeImg2,
        description: "Built with love",
      },
    ],
  });

  return (
    <ContentContext.Provider value={[content, setContent]}>
      {children}
    </ContentContext.Provider>
  );
};
