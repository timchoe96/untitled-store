import React from "react";
import { mobileMenu } from "../../actions/index.js";
import { shopMenu } from "../../actions/index.js";
import { useSelector, useDispatch } from "react-redux";
import "./styles/style.css";

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
            <div> SHOP</div>
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
            <li>Tops</li>
            <li>Bottom</li>
            <li>Accessories</li>
            <li>Home goods</li>
          </ul>
          <li>ABOUT</li>
          <li>LOGIN</li>
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
