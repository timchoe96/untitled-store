import React, { useEffect } from "react";
import "./styles/style.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { mobileMenu } from "../../actions/index.js";

function Nav() {
  const dispatch = useDispatch();
  useEffect(() => {
    const name = ["U", "N", "T", "I", "T", "L", "E", "D"];
    const logo = document.querySelector(".logo");
    setTimeout(() => {
      const type = (letter) => {
        setTimeout(() => {
          let textnode = document.createTextNode(name[letter]);
          logo.appendChild(textnode);
        }, 200 * letter);
      };
      for (let i = 0; i < name.length; i++) {
        type(i);
      }
    }, 1000);
    setTimeout(() => {
      logo.style.animation = "none";
    }, 5000);
  }, []);

  const clickOpen = () => {
    dispatch(mobileMenu({ left: "0", overflow: "hidden" }));
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
  };

  return (
    <nav>
      <i
        style={{ cursor: "pointer" }}
        onClick={() => clickOpen()}
        className="fa fa-bars icon"
        aria-hidden="true"
      ></i>
      <ul>
        <li className="shopList">
          <Link style={{ textDecoration: "none", color: "black" }} to="/Shop">
            {" "}
            SHOP
          </Link>
          <div className="dropDown">
            <Link to="/Tops" style={{ textDecoration: "none", color: "black" }}>
              <ul>Tops</ul>
            </Link>
            <Link
              to="/Bottoms"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ul>Bottoms</ul>
            </Link>
            <Link
              to="/Accessories"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ul>Accessories</ul>
            </Link>
            <Link
              to="/Homegoods"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ul>Home Goods</ul>
            </Link>
          </div>
        </li>
        <li>ABOUT</li>
      </ul>
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <div className="logo"></div>
      </Link>
      <ul>
        <li>LOGIN</li>
        <li>CART</li>
      </ul>
      <i
        style={{ cursor: "pointer" }}
        className="fa fa-shopping-cart icon"
        aria-hidden="true"
      ></i>
    </nav>
  );
}

export default Nav;
