import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <h1>CREZYSHOP</h1>
        </div>
        <ul className="nav-menu">
          <li onClick={() => setMenu("shop")}>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              {" "}
              Shop
            </Link>

            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("mens")}>
            {" "}
            <Link style={{ textDecoration: "none", color: "white" }} to="/mens">
              Men
            </Link>{" "}
            {menu === "mens" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("womens")}>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/womens"
            >
              Women
            </Link>{" "}
            {menu == "womens" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("kids")}>
            <Link style={{ textDecoration: "none", color: "white" }} to="/kids">
              Kids{" "}
            </Link>
            {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/cart">
            <i
              class="fa-solid fa-cart-shopping"
              style={{ fontSize: "27px", color: "white" }}
            ></i>
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
