import React, { useContext } from "react";
import { ContentContext } from "../Context";
import { useParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Experience, Education } from "../components";

const Content = () => {
  const { child } = useParams();
  const [content, setContent] = useContext(ContentContext);
  //   console.log(content[0]);
  return (
    <div className="p-4 pt-0 pl-2 pb-0 break-words">
      {child == "bio" ? (
        <SyntaxHighlighter
          language="javascript"
          showLineNumbers={true}
          style={dracula}
        >
          {content.bio}
        </SyntaxHighlighter>
      ) : child == "experience" ? (
        <Experience />
      ) : child == "education" ? (
        <Education />
      ) : child == "interest" ? (
        <p className="text-white">interests</p>
      ) : (
        <SyntaxHighlighter
          language="javascript"
          showLineNumbers={true}
          style={dracula}
        >
          {content.personalInfo}
        </SyntaxHighlighter>
      )}
    </div>
  );
};

export default Content;
