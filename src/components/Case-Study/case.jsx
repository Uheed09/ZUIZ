import React from "react";
import "./case.css";
import { Casedata } from "../../Appdata";

const Case = () => {
  return (
    <>
      <div className="case">
        <div className="case-top">
          <div className="bar"></div>
          <span>{Casedata[0].span}</span>
          <div className="bar"></div>
        </div>
        <div className="case-heading">
          <h2>
            {Casedata[0].CaseHeading}
            <span>{Casedata[0].HeadingSpan}</span>
          </h2>
        </div>
        <div className="case-category">
          <Cate btn={Casedata[0].Catebtn} />
          <Cate btn={Casedata[1].Catebtn} />
          <Cate btn={Casedata[2].Catebtn} />
          <Cate btn={Casedata[3].Catebtn} />
        </div>
        <div className="case-card-continer">
          <CateCard
            CateImg={Casedata[0].CardImg}
            topic={Casedata[0].CardTopic}
            heading={Casedata[0].CardData}
          />
          <CateCard
            CateImg={Casedata[1].CardImg}
            topic={Casedata[1].CardTopic}
            heading={Casedata[1].CardData}
          />
          <CateCard
            CateImg={Casedata[2].CardImg}
            topic={Casedata[2].CardTopic}
            heading={Casedata[2].CardData}
          />
          <CateCard
            CateImg={Casedata[3].CardImg}
            topic={Casedata[3].CardTopic}
            heading={Casedata[3].CardData}
          />
          <CateCard
            CateImg={Casedata[4].CardImg}
            topic={Casedata[4].CardTopic}
            heading={Casedata[4].CardData}
          />
          <CateCard
            CateImg={Casedata[5].CardImg}
            topic={Casedata[5].CardTopic}
            heading={Casedata[5].CardData}
          />
        </div>
      </div>
    </>
  );
};
export default Case;

function Cate(props) {
  return (
    <>
      <button className="primary-btn discover category">{props.btn}</button>
    </>
  );
}

function CateCard(props) {
  return (
    <>
      <div className="cate-card">
        <img src={props.CateImg} alt="" />
        <div className="case-study-box">
          <div className="box-text">
            <span>{props.topic}</span>
            <h5>{props.heading}</h5>
          </div>
        </div>
      </div>
    </>
  );
}
