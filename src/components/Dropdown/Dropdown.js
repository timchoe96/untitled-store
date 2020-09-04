import React from "react";
import { mobileMenu } from "../../actions/index.js";
import { shopMenu } from "../../actions/index.js";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./styles/style.css";
import Cart from "../Cart/Cart.js";

function Dropdown() {
  const dispatch = useDispatch();
  const height = useSelector((state) => state.setHeight);
  const position = useSelector((state) => state.position);

  const clickClose = () => {
    dispatch(mobileMenu({ left: "-2000px", overflow: "auto" }));
    document.getElementsByTagName("html")[0].style.overflow = "scroll";
  };

  return (
    <div className="positionHolder">
      <div className="mobileMenu" style={{ left: position.left }}>
        <h3 style={{ cursor: "pointer" }} onClick={() => clickClose()}>
          CLOSE
        </h3>
        <ul>
          <li>
            <Link to="/Shop" style={{ textDecoration: "none", color: "white" }}>
              <div onClick={() => clickClose()}> SHOP</div>
            </Link>
            {height === "0" ? (
              <i
                style={{ cursor: "pointer" }}
                className="fa fa-plus"
                aria-hidden="true"
                onClick={() => dispatch(shopMenu("200px"))}
              ></i>
            ) : (
              <i
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(shopMenu("0"))}
                className="fa fa-minus"
                aria-hidden="true"
              ></i>
            )}
          </li>
          <ul className="shopDropdown" style={{ height: height }}>
            <Link to="/Tops" style={{ textDecoration: "none", color: "white" }}>
              <li onClick={() => clickClose()}>Tops</li>
            </Link>
            <Link
              to="/Bottoms"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li onClick={() => clickClose()}>Bottoms</li>
            </Link>
            <Link
              to="/Accessories"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li onClick={() => clickClose()}>Accessories</li>
            </Link>
            <Link
              to="/Homegoods"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li onClick={() => clickClose()}>Home goods</li>
            </Link>
          </ul>
          <Link to="/About" style={{ textDecoration: "none", color: "white" }}>
            <li onClick={() => clickClose()}>ABOUT</li>
          </Link>
          <Link to="/Login" style={{ textDecoration: "none", color: "white" }}>
            <li onClick={() => clickClose()}>LOGIN</li>
          </Link>
        </ul>
      </div>
      <Cart />
    </div>
  );
}

export default Dropdown;
