import React from "react";
import { MdClose } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";

const SubNavbar = () => {
  const navigate = useNavigate();
  const { child } = useParams();
  console.log(child);
  return (
    <div className="w-full border border-t-0 border-l-0 border-border">
      <div className="w-[18%] flex justify-between items-center p-3 border border-y-0 border-l-0 border-r-border">
        <p className="text-bodyText">
          {child == undefined ? `personal-info` : `${child}.js`}
        </p>
        <MdClose
          className="text-bodyText hover:cursor-pointer"
          onClick={() => navigate({ pathname: "/" })}
        />
      </div>
    </div>
  );
};

export default SubNavbar;
