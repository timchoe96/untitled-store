import React from "react";
import "./styles/style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Homegoods() {
  const items = useSelector((state) => state.items);
  return (
    <div className="homeGoods">
      <div className="routerHistory">
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <div className="backHome">HOME</div>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/homeGoods"
        >
          <div> / HOME GOODS</div>
        </Link>
      </div>
      <div className="homeGoodsContainer">
        {(items.isPending === false) & (items.error.length === 0) &&
          items.items
            .filter((item) =>
              item.productType.toLowerCase().includes("home good")
            )
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

export default Homegoods;
