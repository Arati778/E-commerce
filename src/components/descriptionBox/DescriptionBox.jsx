import React from "react";
import "./descriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-des">Descripton</div>
        <div className="descriptionbox-des fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce Our platform, "SkillForge Hub," is a professional
          development and job placement website designed to cater to individuals
          at every career stage. Whether you're a job seeker or a CEO, our
          platform is tailored to help you level up your skills and connect with
          relevant employment opportunities.
        </p>
        <p>
          E-commerce The logo should exude a sense of professionalism,
          innovation, and trustworthiness. It should be approachable to job
          seekers while also appealing to businesses and employers.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
