import React from "react";
import "./blogs.css";
import DateImg from "../../assets/Blog1.png";
import { Blogdata } from "../../Appdata";
import PubImg from "../../assets/Blog2.png";

const Blogs = () => {
  return (
    <>
      <div className="blog-container" id="blog">
        <div className="blog-head">
          <div className="blog-head-left">
            <div className="box">
              <div className="bar"></div>
              <span>{Blogdata[0].span}</span>
            </div>
            <h2>
              {Blogdata[0].Heading} <span>{Blogdata[0].HeadingSpan}</span>
            </h2>
          </div>
          <div className="blog-head-right">
            <button className="primary-btn discover">{Blogdata[0].Btn}</button>
          </div>
        </div>
        <div className="blog-card-container">
          <BlogCard
            BlogImg={Blogdata[0].BlogImg}
            BlogTopic={Blogdata[0].BlogTopic}
            DateImg={DateImg}
            date={Blogdata[0].UploadDate}
            BlogHeading={Blogdata[0].BlogHeading}
            PubImg={PubImg}
            PubName={Blogdata[0].Author}
            BlogLink={Blogdata[0].BlogLink}
          />
          <BlogCard
            BlogImg={Blogdata[1].BlogImg}
            BlogTopic={Blogdata[1].BlogTopic}
            DateImg={DateImg}
            date={Blogdata[1].UploadDate}
            BlogHeading={Blogdata[1].BlogHeading}
            PubImg={PubImg}
            PubName={Blogdata[1].Author}
            BlogLink={Blogdata[1].BlogLink}
          />
          <BlogCard
            BlogImg={Blogdata[2].BlogImg}
            BlogTopic={Blogdata[2].BlogTopic}
            DateImg={DateImg}
            date={Blogdata[2].UploadDate}
            BlogHeading={Blogdata[2].BlogHeading}
            PubImg={PubImg}
            PubName={Blogdata[2].Author}
            BlogLink={Blogdata[2].BlogLink}
          />
        </div>
      </div>
    </>
  );
};
export default Blogs;

function BlogCard(props) {
  return (
    <>
      <div className="blog-card">
        <img src={props.BlogImg} alt="" />
        <div className="blog-topic">{props.BlogTopic}</div>
        <div className="date">
          <img src={props.DateImg} alt="" />
          <span>{props.date}</span>
        </div>
        <div className="blog-heading">
          <h3>{props.BlogHeading}</h3>
        </div>
        <div className="blog-card-footer">
          <div className="publisher">
            <img src={props.PubImg} alt="" />
            <span>{props.PubName}</span>
          </div>
          <div className="read-more">
            <a href={props.BlogLink} target="blank">
              Read More <span>+</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
