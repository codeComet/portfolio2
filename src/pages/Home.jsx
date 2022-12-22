import React from "react";
import { VerticalSlider } from "../components";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="w-full h-auto px-64 flex items-center justify-center flex-wrap z-10">
      <div className="w-1/2 mx-auto ">
        <p className="text-bodyFont text-white">Hey there! I'm</p>
        <h1 className="text-heading text-white">Bishal</h1>
        {/* <h2 className="text-subheading text-blue">&gt; Frontend Developer</h2> */}
        <Typewriter
          options={{
            strings: [
              "> _Fullstack Developer",
              "> _Designer",
              "> _Problem Solver",
            ],
            autoStart: true,
            loop: true,
          }}
          skipAddStyles
        />
        <div className="mt-4">
          <p className="text-bodyText">// Fancy for a little game?</p>
          <p className="text-bodyText">// Follow the URL</p>
          <div className="flex items-center">
            <p className="text-blue mr-2">const</p>
            <p className="text-green mr-2">gameURL = </p>
            <a
              href="https://codecomet.github.io"
              target="_blank"
              className="text-coral underline underline-offset-2"
              rel="noopener noreferrer"
            >
              "codecomet.github.io"
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/2  bg-hero-bg bg-contain bg-center">
        <VerticalSlider />
      </div>
    </div>
  );
};

export default Home;
