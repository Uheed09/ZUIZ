import React from "react";
import "./testimonial.css";
import arrow3 from "../../assets/Arrow1.png";
import { Testimonialdata } from "../../Appdata";
const Testimonial = () => {
  return (
    <>
      <div className="testimonial" id="testimonials">
        <div className="test-top">
          <div className="test-left">
            <div className="box test-box">
              <div className="bar"></div>
              <span>{Testimonialdata[0].span}</span>
            </div>
            <h2>
              {Testimonialdata[0].Heading}
              <span> {Testimonialdata[0].HeadingSpan}</span>
            </h2>
          </div>
          <div className="test-right">
            <div className="right-content">
              <h3>
                {Testimonialdata[1].value}
                <span>{Testimonialdata[1].sign}</span>
              </h3>
              <p>{Testimonialdata[1].DownHeading}</p>
            </div>
            <div className="border"></div>
            <div className="right-content">
              <h3>
                {Testimonialdata[2].value}
                <span>{Testimonialdata[2].sign}</span>
              </h3>
              <p>{Testimonialdata[2].DownHeading}</p>
            </div>
          </div>
        </div>
        <div className="slider-container">
          <TestCard
            profile={Testimonialdata[3].CardImg}
            name={Testimonialdata[3].Cardname}
            designation={Testimonialdata[3].Designation}
            para={Testimonialdata[3].CardPara}
            Star1={Testimonialdata[3].Star1}
            Star2={Testimonialdata[3].Star2}
            Star3={Testimonialdata[3].Star3}
            Star4={Testimonialdata[3].Star4}
            Star5={Testimonialdata[3].Star5}
          />
          <TestCard
            profile={Testimonialdata[4].CardImg}
            name={Testimonialdata[4].Cardname}
            designation={Testimonialdata[4].Designation}
            para={Testimonialdata[4].CardPara}
            Star1={Testimonialdata[4].Star1}
            Star2={Testimonialdata[4].Star2}
            Star3={Testimonialdata[4].Star3}
            Star4={Testimonialdata[4].Star4}
            Star5={Testimonialdata[4].Star5}
          />
          <TestCard
            profile={Testimonialdata[5].CardImg}
            name={Testimonialdata[5].Cardname}
            designation={Testimonialdata[5].Designation}
            para={Testimonialdata[5].CardPara}
            Star1={Testimonialdata[5].Star1}
            Star2={Testimonialdata[5].Star2}
            Star3={Testimonialdata[5].Star3}
            Star4={Testimonialdata[5].Star4}
            Star5={Testimonialdata[5].Star5}
          />
        </div>
        <div className="slider-handle">
          <div className=" slider-btn-dash"></div>
          <div className="slider-btn"></div>
          <div className=" slider-btn-dash"></div>
        </div>
        <img className="arrow3" src={arrow3} alt="" />
      </div>
    </>
  );
};
export default Testimonial;

function TestCard(props) {
  return (
    <>
      <div className="slider-card">
        <div className="test-card-top">
          <div className="test-imgs">
            <div className="test-card-img">
              <img src={props.profile} alt="" />
            </div>
            <div className="test-comma"></div>
          </div>
          <div className="top-content">
            <h4>{props.name}</h4>
            <p>{props.designation}</p>
          </div>
        </div>
        {props.para}
        <div className="test-last">
          <div className="star-container">
            <i class={props.Star1}></i>
            <i class={props.Star2}></i>
            <i class={props.Star3}></i>
            <i class={props.Star4}></i>
            <i class={props.Star5}></i>
          </div>
          <div className="comma-img"></div>
        </div>
      </div>
    </>
  );
}
