import React from "react";
import "./banner.css";
import Nav from "./navbar/nav";
import { Bannerdata } from "../../../Appdata";
const Banner = () => {
  return (
    <>
      <div className="banner" id="home">
        <Nav />
        <div className="banner-heading">
          <h1>
            {Bannerdata[0].h1} <span> {Bannerdata[0].span}</span>
          </h1>
          <div className="para">
            <p>{Bannerdata[0].para}</p>
          </div>
          <button className="primary-btn discover">Discover</button>
        </div>
      </div>
    </>
  );
};
export default Banner;
