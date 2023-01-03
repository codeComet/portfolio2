import React, { useContext } from "react";
import { ContentContext } from "../../Context";
import { useParams } from "react-router-dom";

const Content = () => {
  const { child } = useParams();
  const [content, setContent] = useContext(ContentContext);
  //   console.log(content[0]);
  return (
    <div className="text-white p-4">
      {child == "bio" ? <p>this is from bio</p> : "default text"}
    </div>
  );
};

export default Content;
