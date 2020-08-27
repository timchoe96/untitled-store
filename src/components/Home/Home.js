import React from "react";
import "./styles/style.css";
import clouds from "./videos/clouds.mp4";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const items = useSelector((state) => state.items);

  console.log(items);

  return (
    <div className="home">
      {/* video */}
      <div className="video">
        <video autoPlay loop muted>
          <source src={clouds} type="video/mp4"></source>
        </video>
        <div className="description">
          <ul>
            <li>UNTITLED</li>
            <li>COMING SOON</li>
            <li>FALL 2021</li>
          </ul>
        </div>
      </div>
      {/* new arrivals */}
      <main className="newArrivals">
        <div>NEW ARRIVALS</div>
        <div className="arrivalGrid">
          {(items.isPending === false) & (items.error.length === 0) &&
            items.items.slice(0, 6).map((item, i) => (
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
      </main>
    </div>
  );
}

export default Home;
