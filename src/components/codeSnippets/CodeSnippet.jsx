import React from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";

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
            <a
              href={item?.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-coral"
            >
              <h3 className="text-label text-blue font-bold">
                {item?.userName}
              </h3>
            </a>
            <p className="text-bodyText text-code">
              Created at {item?.creationTime}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mx-2">
          <a href={item?.detailsLink} target="_blank" rel="noopener noreferrer">
            <div className="flex justify-between items-center mr-3">
              <BiMessageRoundedDetail />
              <p className="ml-2">Details</p>
            </div>
          </a>
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
