import React from "react";
import "./styles/style.css";
// import clouds from "./images/clouds.png";
import clouds from "./videos/clouds.mp4";

function Home() {
  return (
    <div className="home">
      {/* <img alt="" src={clouds}></img> */}
      <div className="video">
        <video autoPlay loop muted>
          <source src={clouds} type="video/mp4"></source>
        </video>
        <div className="description">
          <ul>
            <li>UNTITLED</li>
            <li>ROAD TO SOMEWHERE</li>
            <li>FALL 2021</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
