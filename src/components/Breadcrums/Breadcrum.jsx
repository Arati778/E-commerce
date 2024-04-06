import React from "react";
import "./Breadcrum.css";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      Home {product.category}
      {product.name}
    </div>
  );
};

// this component is not using eight now i alrady written this code in product.jsx componet
export default Breadcrum;
