import React, { useState, createContext } from "react";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState({
    bio: `/*
* hello world 
* new line
* new line again
*/`,
  });

  return (
    <ContentContext.Provider value={[content, setContent]}>
      {children}
    </ContentContext.Provider>
  );
};
