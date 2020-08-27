import React from "react";
import "./styles/style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Bottoms() {
  const items = useSelector((state) => state.items);
  return (
    <div className="Bottom">
      <div className="routerHistory">
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <div className="backHome">HOME</div>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/Bottoms">
          <div> / BOTTOMS</div>
        </Link>
      </div>
      <div className="bottomContainer">
        {(items.isPending === false) & (items.error.length === 0) &&
          items.items
            .filter((item) => item.productType.toLowerCase().includes("bottom"))
            .map((item, i) => (
              <Link
                key={i}
                to={`item/${item.productName}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="imageContainer">
                  <img
                    alt=""
                    src={`http:${item.image[0].fields.file.url}`}
                  ></img>
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

export default Bottoms;
