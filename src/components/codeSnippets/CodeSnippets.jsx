import React, { useContext } from "react";
import { ContentContext } from "../../Context";
import CodeSnippet from "./CodeSnippet";

const CodeSnippets = () => {
  const [content, setContent] = useContext(ContentContext);

  return (
    <div className="h-[72vh]">
      <h2 className="text-bodyText">//Code Snippets Showcase</h2>

      {content?.codeSnippets?.map((item, index) => (
        <div key={index}>
          <CodeSnippet item={item} />
        </div>
      ))}
    </div>
    // test commit
  );
};

export default CodeSnippets;
