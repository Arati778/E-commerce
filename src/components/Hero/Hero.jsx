import React from "react";
import "./Hero.css";
import heroimg from "../assets/background.avif";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY!</h2>

        <div>
          <div className="hero-paragraph">
            <p>New</p>
          </div>
          <p>Collection</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <h3>Latest Collection</h3>
        </div>
      </div>
      <div className="hero-right">
        <img src={heroimg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
