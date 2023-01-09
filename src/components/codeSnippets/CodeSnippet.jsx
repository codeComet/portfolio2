import React, { useEffect } from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const CodeSnippet = ({ item }) => {
  console.log(item);
  return (
    <div className="text-white my-12">
      {/* User details section */}
      <div className="flex justify-between items-center my-4">
        <div className="flex justify-start items-center">
          <img
            src={item?.userImg}
            alt="user img"
            className="w-9 h-9 rounded-full mr-4"
          />
          <div>
            <Link to={item?.profileUrl}>
              <h3 className="text-label text-blue font-bold">
                {item?.userName}
              </h3>
            </Link>
            <p className="text-bodyText text-code">
              Created at {item?.creationDate}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mx-2">
          <Link to={item?.detailsLink}>
            <div className="flex justify-between items-center mr-3">
              <BiMessageRoundedDetail />
              <p className="ml-2">Details</p>
            </div>
          </Link>
          <div className="flex justify-between items-center">
            <AiFillHeart className="heart" />
            <p className="text-bodyText font-bold ml-1">5</p>
          </div>
        </div>
      </div>
      {/* Code image */}
      <div>
        <img src={item?.codeImg} alt="codes" className="max-w-[75%] mx-auto" />
      </div>
      {/* Description */}
      <div className="py-4 border border-x-0 border-t-0 border-b-border w-[90%] mx-auto">
        <p className="text-bodyText">{item?.description}</p>
      </div>
    </div>
  );
};

export default CodeSnippet;
