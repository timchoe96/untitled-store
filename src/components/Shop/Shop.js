import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./styles/style.css";

function Shop() {
  const items = useSelector((state) => state.items);
  console.log(items.items);

  return (
    <div className="shop">
      <div className="routerHistory">
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <div className="backHome">HOME</div>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/Shop">
          <div> / SHOP</div>
        </Link>
      </div>
      <div className="shopContainer">
        {(items.isPending === false) & (items.error.length === 0) &&
          items.items.map((item, i) => (
            <Link
              key={i}
              to={`item/${item.productName}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="imageContainer">
                <img alt="" src={`http:${item.image[0].fields.file.url}`}></img>
                <div className="imageLabel">
                  {item.productName.toUpperCase()}
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Shop;
