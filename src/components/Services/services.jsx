import React from "react";
import "./services.css";
import { Servicesdata } from "../../Appdata";

function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.img} alt="" />
        <h4>{props.heading}</h4>
        <div className="barz">
          <div className="bar-left"></div>
          <div className="bar-right"></div>
        </div>
        <p>{props.para}</p>
        <button className="card-btn" href={props.CardLink}>
          Read More ➤
        </button>
      </div>
    </>
  );
}

const Services = () => {
  return (
    <>
      <div className="services" id="services">
        <div className="serv-top">
          <div>
            <div className="bar"></div>
            <span>{Servicesdata[0].Span}</span>
          </div>
          <h2>{Servicesdata[0].Servicesheading}</h2>
          <p>{Servicesdata[0].Servicespara}</p>
        </div>
        <div className="card-container">
          <Card
            CardLink={Servicesdata[1].CardLink}
            img={Servicesdata[1].img}
            heading={Servicesdata[1].heading}
            para={Servicesdata[1].CardPara}
          />
          <Card
            CardLink={Servicesdata[2].CardLink}
            img={Servicesdata[2].img}
            heading={Servicesdata[2].heading}
            para={Servicesdata[2].CardPara}
          />
          <Card
            CardLink={Servicesdata[3].CardLink}
            img={Servicesdata[3].img}
            heading={Servicesdata[3].heading}
            para={Servicesdata[3].CardPara}
          />
          <Card
            CardLink={Servicesdata[4].CardLink}
            img={Servicesdata[4].img}
            heading={Servicesdata[4].heading}
            para={Servicesdata[4].CardPara}
          />
          <Card
            CardLink={Servicesdata[5].CardLink}
            img={Servicesdata[5].img}
            heading={Servicesdata[5].heading}
            para={Servicesdata[5].CardPara}
          />
        </div>
        <div className="serv-end">
          <p>{Servicesdata[0].lastpara}</p>
          <button className="primary-btn discover">Find services</button>
        </div>
      </div>
      <img src={Servicesdata[0].Arrow} alt="" className="arrow2" />
    </>
  );
};
export default Services;
