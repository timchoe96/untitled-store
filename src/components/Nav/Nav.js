import React, { useEffect } from "react";
import "./styles/style.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mobileMenu } from "../../actions/index.js";
import { auth } from "../../firebase.js";
import { cartStyles } from "../../actions/index.js";

function Nav() {
  const cart = useSelector((state) => state.itemList);
  const userCart = useSelector((state) => state.itemListUser);
  const user = useSelector((state) => state.activeUser);

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

  const signOut = () => {
    auth.signOut();
  };

  const cartOpen = () => {
    dispatch(
      cartStyles({
        position: "0",
        background: "rgba(0,0,0,0.5)",
        pointer: "auto",
      })
    );
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
        {user ? (
          <li onClick={signOut}>LOGOUT</li>
        ) : (
          <Link to="/Login" style={{ textDecoration: "none", color: "black" }}>
            <li>LOGIN</li>
          </Link>
        )}
        <li id="cart" onClick={cartOpen}>
          <div>CART</div>
          <div>{user ? `( ${userCart.length} )` : `( ${cart.length} )`}</div>
        </li>
      </ul>
      <div className="mobileCart" onClick={cartOpen}>
        <i
          id="cartMobile"
          style={{ cursor: "pointer" }}
          className="fa fa-shopping-cart icon"
          aria-hidden="true"
        ></i>
        <div className="cartCountMobile">
          {user ? `( ${userCart.length} )` : `( ${cart.length} )`}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
