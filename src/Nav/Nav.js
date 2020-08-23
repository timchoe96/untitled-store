import React, { useEffect } from "react";
import "./styles/style.css";

function Nav() {
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
    }, 2000);
    setTimeout(() => {
      logo.style.animation = "none";
    }, 5000);
  }, []);

  return (
    <nav>
      <i className="fa fa-bars icon" aria-hidden="true"></i>
      <ul>
        <li>SHOP</li>
        <li>ABOUT</li>
      </ul>
      <div className="logo"></div>
      <ul>
        <li>LOGIN</li>
        <li>CART</li>
      </ul>
      <i className="fa fa-shopping-cart icon" aria-hidden="true"></i>
    </nav>
  );
}

export default Nav;
