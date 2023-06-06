import React from "react";
import "./form.css";
import { Formdata } from "../../Appdata";

const FormSection = () => {
  return (
    <>
      <div className="form-container" id="contact">
        <div className="faq">
          <div className="box">
            <div className="bar"></div>
            <span>{Formdata[0].span}</span>
          </div>
          <h2>{Formdata[0].Heading}</h2>
          <Expandtoggle
            function={click1}
            btnText={Formdata[0].BtnText}
            paraID={"para1"}
            togglePara={Formdata[0].TogglePara}
          />
          <Expandtoggle
            function={click2}
            btnText={Formdata[1].BtnText}
            paraID={"para2"}
            togglePara={Formdata[1].TogglePara}
          />
          <Expandtoggle
            function={click3}
            btnText={Formdata[2].BtnText}
            paraID={"para3"}
            togglePara={Formdata[2].TogglePara}
          />
          <Expandtoggle
            function={click4}
            btnText={Formdata[3].BtnText}
            paraID={"para4"}
            togglePara={Formdata[3].TogglePara}
          />
        </div>
        <div className="form">
          <div className="form-head">
            <h3>{Formdata[4].FormHeading}</h3>
            <p>{Formdata[4].FromPara}</p>
          </div>
          <div className="form-entries">
            <form action="">
              <Input type={"text"} placeholder={"YOUR NAME*"} />
              <Input type={"email"} placeholder={"YOUR E-MAIL*"} />
              <Input type={"tel"} placeholder={"YOUR NUMBER*"} />
              <textarea
                className="text-area"
                placeholder="WRITE MESSAGE*"
              ></textarea>
              <Input type={"submit"} value={"FREE CONSULTANT"} />
            </form>
          </div>
        </div>
      </div>
      <div className="arrow4"></div>
    </>
  );
};
export default FormSection;

function Expandtoggle(props) {
  return (
    <>
      <div className="toggle-container">
        <button className="toggle-expand" onClick={props.function}>
          <div className="toggle-img"></div>
          <span>{props.btnText}</span>
          <div className="plus-minus">
            <i class="fa-solid fa-plus"></i>
          </div>
        </button>
        <p id={props.paraID}>{props.togglePara}</p>
      </div>
    </>
  );
}
function click1() {
  var div = document.getElementById("para1");
  if (div.style.display === "block") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
}
function click2() {
  var div = document.getElementById("para2");
  if (div.style.display === "block") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
}
function click3() {
  var div = document.getElementById("para3");
  if (div.style.display === "block") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
}
function click4() {
  var div = document.getElementById("para4");
  if (div.style.display === "block") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
}
function Input(props) {
  return (
    <>
      <input
        className="form-inp"
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
      />
    </>
  );
}
