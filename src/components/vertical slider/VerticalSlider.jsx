import React from "react";
import "./slider.css";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";
import img8 from "../../assets/8.png";
import img9 from "../../assets/9.png";

const VerticalSlider = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="carousel">
          <div className="carousel__item">
            <img src={img1} alt="img1" />
          </div>
          <div className="carousel__item">
            <img src={img2} alt="img1" />
          </div>
          <div className="carousel__item">
            <img src={img3} alt="img1" />
          </div>
          <div className="carousel__item">
            <img src={img4} alt="img1" />
          </div>
          <div className="carousel__item">
            <img src={img5} alt="img1" />
          </div>
          <div className="carousel__item">
            <img src={img6} alt="img1" />
          </div>
          <div className="carousel__item">
            <img src={img7} alt="img1" />
          </div>
          <div className="carousel__item">
            <img src={img8} alt="img1" />
          </div>
          <div className="carousel__item">
            <img src={img9} alt="img1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalSlider;
