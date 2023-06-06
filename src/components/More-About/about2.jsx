import React from "react";
import "./about2.css";
import { About2data } from "../../Appdata";

const About2 = () => {
  return (
    <>
      <div className="about2">
        <div className="about2-content">
          <div className="box">
            <div className="bar"></div>
            <span>{About2data[0].span}</span>
          </div>
          <div className="box column-box">
            <h2>{About2data[0].heading1}</h2>
            <h2 className="red">{About2data[0].heading2}</h2>
          </div>
          <div className="box">
            <p>{About2data[0].para}</p>
          </div>
          <div className="column">
            <div className="arrow">
              <div className="left"></div>
              <div className="right">
                <p>{About2data[0].bullet1}</p>
              </div>
            </div>
            <div className="arrow">
              <div className="left"></div>
              <div className="right">
                <p>{About2data[0].bullet2}</p>
              </div>
            </div>
            <div className="arrow">
              <div className="left"></div>
              <div className="right">
                <p>{About2data[0].bullet3}</p>
              </div>
            </div>
            <div className="arrow">
              <div className="left"></div>
              <div className="right">
                <p>{About2data[0].bullet4}</p>
              </div>
            </div>
          </div>
          <div className="box box-btn">
            <button className="primary-btn discover">MORE ABOUT</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default About2;
