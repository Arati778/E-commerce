import React, { useContext } from "react";
import "./productDisplay.css";
import { ShopContext } from "../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>

        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="product-rating">
          <p>Rating - 4.7</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdispaly-old-price">${product.old_price}</div>
          <div className="productdisplay-new-price">${product.new_price}</div>
        </div>

        <div className="productdisplay-right-description">
          This Message and its contents are intended solely for the addressee
          and is proprietary. Information in this mail is for Star Health and
          Allied Insurance Business Usage only. Any Use to other than the
          addressee is misuse.
        </div>
        <div className="productdisplay-size">
          <h1>Select Size</h1>
          <div className="productdisplay-choose-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <button
            onClick={() => {
              addToCart(product.id);
            }}
          >
            ADD TO CART
          </button>
          <p className="productdisplay-category">
            <span>Category :</span>Women t-shirt crop top
          </p>
          <p className="productdisplay-category">
            <span>Tags :</span>Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
