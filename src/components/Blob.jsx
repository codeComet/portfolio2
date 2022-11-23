import React from "react";
import useMousePosition from "../hooks/useMousePosition";

const Blob = () => {
  const mouse = useMousePosition();
  const style = {
    transform: "translate(-50%, -50%)",
    width: "400px",
    height: "400px",
    borderRadius: "50% 22% 40% 80%",
    filter: " blur(100px)",
    background: "rgb(255, 67, 75)",
    background: "linear-gradient(#43d9ad, #4d5bce)",
    opacity: 0.4,
    top: mouse.y,
    left: mouse.x,
  };
  return (
    <div className={`absolute top-16 left-16 rounded-ful`} style={style}></div>
  );
};

export default Blob;
