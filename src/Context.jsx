import React, { useState, createContext } from "react";
import userImg from "/assets/git-user.png";
import codeImg1 from "/assets/3.png";
import codeImg2 from "/assets/4.png";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState({
    bio: `/*
* hello world 
* new line
* new line again
*/`,
    codeSnippets: [
      {
        userImg: userImg,
        userName: "@codeComet",
        creationDate: "Jun, 2021",
        detailsLink: "https://github.com/codeComet/place-rating-app",
        codeImg: codeImg1,
        description: "Built with love",
      },
      {
        userImg: userImg,
        userName: "@codeComet",
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
