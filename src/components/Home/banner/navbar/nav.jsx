import React, { useState } from "react";
import "./nav.css";
import { Navdata } from "../../../../Appdata";
const Nav = () => {
  const [Nav, setNav] = useState(false);
  return (
    <>
      <div className="nav-main" id="navmain">
        <img src={Navdata[0].Navimg} alt="" />
        <div className="list" id="list">
          <ul>
            <a href="top">
              <li>{Navdata[1].li1}</li>
            </a>
            <a href="#about">
              <li>{Navdata[1].li2}</li>
            </a>
            <a href="#services">
              <li>{Navdata[1].li3}</li>
            </a>
            <a href="#blog">
              <li>{Navdata[1].li4}</li>
            </a>
            <a href="#footer">
              <li>{Navdata[1].li5}</li>
            </a>
          </ul>
        </div>
        <button className="primary-btn" id="quote">
          {Navdata[1].QuoteBtn}
        </button>

        {/* hamburger */}
        <div className="hamburger">
          <input type="checkbox" id="checkbox" onClick={() => setNav(!Nav)} />
          <label for="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
        </div>
      </div>
      <div className={Nav ? "nav-manu" : "nav-hide"}>
        <ul>
          <a href="top">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About⇂</li>
          </a>
          <a href="#services">
            <li>Services⇂</li>
          </a>
          <a href="#blog">
            <li>Blog⇂</li>
          </a>
          <a href="#footer">
            <li>Contact ⇂</li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Nav;
