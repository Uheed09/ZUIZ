import React from "react";
import "./footer.css";
import { FooterData } from "../../Appdata";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <FooterAboutus
            FooterHeading={FooterData[0].Heading}
            footerPara={FooterData[0].para}
            i1href={FooterData[0].LiHref}
            i1={FooterData[0].icon}
            i2href={FooterData[1].LiHref}
            i2={FooterData[1].icon}
            i3href={FooterData[2].LiHref}
            i3={FooterData[2].icon}
          />
          <CompanyServises
            class={"footersec"}
            FooterHeading={FooterData[1].Heading}
            Id1={FooterData[0].Id}
            li1={FooterData[0].Page}
            Id2={FooterData[1].Id}
            li2={FooterData[1].Page}
            Id3={FooterData[2].Id}
            li3={FooterData[2].Page}
            Id4={FooterData[3].Id}
            li4={FooterData[3].Page}
            Id5={FooterData[4].Id}
            li5={FooterData[4].Page}
          />
          <CompanyServises
            class={"footersec finance"}
            FooterHeading={FooterData[2].Heading}
            li1={FooterData[0].Serviceli}
            li2={FooterData[1].Serviceli}
            li3={FooterData[2].Serviceli}
            li4={FooterData[3].Serviceli}
            li5={FooterData[4].Serviceli}
          />
          <Newsletter
            class={"footersec"}
            FooterHeading={FooterData[3].Heading}
            NewsSub={FooterData[0].NewsSub}
            playlink={FooterData[0].Storelink}
            playstore={FooterData[0].StoreImg}
            applink={FooterData[1].Storelink}
            appstore={FooterData[1].StoreImg}
          />
        </div>
        <div className="footer-bottom">
          <img src={FooterData[0].FooterImg} alt="" />
          <span>{FooterData[0].Copyright}</span>
        </div>
      </footer>
    </>
  );
};
export default Footer;

function FooterAboutus(props) {
  return (
    <>
      <div className="footersec finance">
        <h3>{props.FooterHeading}</h3>
        <div className="bar-red"></div>
        <div className="footer-para">
          <p>{props.footerPara}</p>
        </div>
        <div className="footer-icon-container">
          <div className="footer-icon">
            <a href={props.i1href} target="blank">
              <i class={props.i1}></i>
            </a>
          </div>
          <div className="footer-icon">
            <a href={props.i2href} target="blank">
              <i class={props.i2}></i>
            </a>
          </div>
          <div className="footer-icon">
            <a href={props.i3href} target="blank">
              <i class={props.i3}></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
function CompanyServises(props) {
  return (
    <>
      <div className={props.class}>
        <h3>{props.FooterHeading}</h3>
        <div className="bar-red"></div>
        <ul>
          <a href={props.Id1}>
            <li>{props.li1}</li>
          </a>
          <a href={props.Id2}>
            <li>{props.li2}</li>
          </a>
          <a href={props.Id3}>
            <li>{props.li3}</li>
          </a>
          <a href={props.Id4}>
            <li>{props.li4}</li>
          </a>
          <a href={props.Id5}>
            <li>{props.li5}</li>
          </a>
        </ul>
      </div>
    </>
  );
}
function Newsletter(props) {
  return (
    <>
      <div className={props.class}>
        <h3>{props.FooterHeading}</h3>
        <div className="bar-red"></div>
        <h4>{props.NewsSub}</h4>
        <div className="news-input">
          <form>
            <input type="email" name="" id="" placeholder="Enter E-Mail" />
            <button type="submit">
              <i class="fa-solid fa-location-arrow"></i>
            </button>
          </form>
        </div>
        <div className="stores">
          <a href={props.playlink} target="blank">
            <img src={props.playstore} alt="" />
          </a>
          <a href={props.applink} target="blank">
            <img src={props.appstore} alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
