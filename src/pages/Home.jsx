import React from "react";
import { VerticalSlider, Blob } from "../components";
import useMousePosition from "../hooks/useMousePosition";
import CustomCursor from "../components/CustomCursor";
import Typewriter from "typewriter-effect";

const Home = () => {
  // console.log(mousePosition);

  return (
    <div className="w-full h-auto p-64 flex items-center justify-center flex-wrap">
      <div className="w-1/2 mx-auto ">
        <CustomCursor />
        <p className="text-bodyFont text-white">Hey there! I'm</p>
        <h1 className="text-heading text-white">John</h1>
        {/* <h2 className="text-subheading text-blue">&gt; Frontend Developer</h2> */}
        <Typewriter
          options={{
            strings: ["Hello", "World"],
            autoStart: true,
            loop: true,
          }}
          skipAddStyles
        />
      </div>
      <div className="w-1/2  bg-hero-bg bg-contain bg-center">
        {/* <VerticalSlider /> */}
      </div>
    </div>
  );
};

export default Home;
