import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <p>CREZYSHOP</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-icon">
        {/* <div className="icon-container">
          <i class="fa-solid fa-instagram"></i>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
