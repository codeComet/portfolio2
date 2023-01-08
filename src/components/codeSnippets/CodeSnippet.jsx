import React, { useEffect } from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const CodeSnippet = ({ item }) => {
  console.log(item);
  return (
    <div className="text-white">
      {/* User details section */}
      <div>
        <div>
          <div>
            <img src={item?.userImg} alt="user img" />
            <h3>{item?.userName}</h3>
            <p>Created at {item?.creationDate}</p>
          </div>
        </div>
        <div>
          <div>
            <Link to={item?.detailsLink}>
              <p>
                <BiMessageRoundedDetail />
                Details
              </p>
            </Link>
          </div>
          <div>
            <AiFillHeart />
          </div>
        </div>
      </div>
      {/* Code image */}
      <div>
        <img src={item?.codeImg} alt="codes" />
      </div>
      {/* Description */}
      <div>
        <p>{item?.description}</p>
      </div>
    </div>
  );
};

export default CodeSnippet;
