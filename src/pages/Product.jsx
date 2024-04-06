import React, { useContext } from "react";
import "./css/pproduct.css";
import { ShopContext } from "../components/context/ShopContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/descriptionBox/DescriptionBox";
import RelatedProduct from "../components/relatedProduct/RelatedProduct";

const Product = () => {
  const { all_product } = useContext(ShopContext);

  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <>
      <div className="breadcrum">
        home-- Shop- {product.category} {product.name}
      </div>
      <div>
        <ProductDisplay product={product} />
        <DescriptionBox />
        <RelatedProduct />
      </div>
    </>
  );
};

export default Product;
