import React from "react";
import "./offers.css";
import ofrimg from "../assets/background.avif";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Ckeck Now</button>
      </div>
      <div className="offer-right">
        <img src={ofrimg} alt="" />
      </div>
    </div>
  );
};

export default Offers;
