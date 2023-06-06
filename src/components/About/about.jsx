import React from "react";
import "./about.css";
import { Aboutdata } from "../../Appdata";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="about-top">
          <p>{Aboutdata[0].Top_para}</p>
          <button className="contact-btn">{Aboutdata[0].ContactBtn}</button>
        </div>
        <div className="about-bottom">
          <div className="bott-box">
            <div className="box">
              <div className="bar"></div>
              <span>{Aboutdata[1].CardHead}</span>
            </div>
            <div className="box">
              <h1>{Aboutdata[1].CardHeading}</h1>
            </div>
            <div className="box">
              <p>{Aboutdata[1].CardPara}</p>
            </div>
            <div className="column">
              <div className="arrow">
                <div className="left"></div>
                <div className="right">
                  <p>{Aboutdata[1].bullet1}</p>
                </div>
              </div>
              <div className="arrow">
                <div className="left"></div>
                <div className="right">
                  <p>{Aboutdata[1].bullet2}</p>
                </div>
              </div>
            </div>
            <div className="box progress">
              <div class="contain">
                <div class="circular-progress" id="circular-progress1">
                  <span class="progress-value" id="progress-value1">
                    0%
                  </span>
                </div>
              </div>
              <p>{Aboutdata[1].progressheading1}</p>
              <div class="contain">
                <div class="circular-progress" id="circular-progress2">
                  <span class="progress-value" id="progress-value2">
                    0%
                  </span>
                </div>
              </div>
              <p>{Aboutdata[1].progressheading2}</p>
            </div>
            <div className="box box-btn">
              <button className="primary-btn discover">
                {Aboutdata[1].AboutBtn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;

// let circularProgress = document.querySelector("#circular-progress1"),
//   progressValue = document.querySelector("#progress-value1");

// let progressStartValue = 0,
//   progressEndValue = 50,
//   speed = 5;

// let progress = setInterval(() => {
//   progressStartValue++;

//   progressValue.textContent = `${progressStartValue}%`;
//   circularProgress.style.background = `conic-gradient(var(--red) ${
//     progressStartValue * 3.6
//   }deg, #ededed 0deg)`;

//   if ((progressStartValue = progressEndValue)) {
//     clearInterval(progress);
//   }
// }, speed);

// ====================================================================

// let circularProgress2 = document.querySelector("#circular-progress2"),
//   progressValue2 = document.querySelector("#progress-value2");

// let progressStartValue2 = 0,
//   progressEndValue2 = 100,
//   speed2 = 5;

// let progress2 = setInterval(() => {
//   progressStartValue2++;

//   progressValue2.textContent = `${progressStartValue2}K`;
//   circularProgress2.style.background = `conic-gradient(var(--red) ${
//     progressStartValue * 3.6
//   }deg, #ededed 0deg)`;

//   if ((progressStartValue2 = progressEndValue2)) {
//     clearInterval(progress2);
//   }
// }, speed2);
