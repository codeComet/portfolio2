import React, { useContext } from "react";
import { ContentContext } from "../../Context";
import { useParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const Content = () => {
  const { child } = useParams();
  const [content, setContent] = useContext(ContentContext);
  //   console.log(content[0]);
  return (
    <div className="text-white p-4 pt-0">
      {child == "bio" ? (
        <SyntaxHighlighter
          language="javascript"
          showLineNumbers={true}
          style={dracula}
        >
          {content.bio}
        </SyntaxHighlighter>
      ) : (
        "default text"
      )}
    </div>
  );
};

export default Content;
