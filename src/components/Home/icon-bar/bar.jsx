import React from "react";
import "./bar.css";
import { HeaderData } from "../../../Appdata";

function Icon(props) {
  return (
    <>
      <div className="icon">
        <a href={props.link} target="blank">
          <i class={props.faClass}></i>
        </a>
      </div>
    </>
  );
}

const Header = () => {
  return (
    <>
      <div className="wrapper">
        <span>{HeaderData[0].SpanHeading}</span>
        <div className="icon-container">
          <div className="bar"></div>
          <a href={HeaderData[0].SocLink}>Follow Us</a>
          <div className="icons">
            <Icon
              link={HeaderData[1].SocLink}
              faClass={HeaderData[1].faClass}
            />
            <Icon
              link={HeaderData[2].SocLink}
              faClass={HeaderData[2].faClass}
            />
            <Icon
              link={HeaderData[3].SocLink}
              faClass={HeaderData[3].faClass}
            />
            <Icon
              link={HeaderData[4].SocLink}
              faClass={HeaderData[4].faClass}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
