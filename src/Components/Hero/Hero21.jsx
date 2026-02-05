import React from "react";
import parser from "html-react-parser";
import { Link } from "react-router-dom";
import VideoBlock3 from "../VideoBlock/VideoBlock3";

const Hero15 = ({ data }) => {
  const { subTitle, title, text, imgSrc, videoSrc } = data;
  return (
    <div className="st-hero st-style1 st-type2">
      <div className="container">
        <div className="st-height-b120 st-height-lg-b80" id="home"></div>
        <div className="st-hero-in">
          <div className="st-hero-text  pb-0">
            <h4 className="st-hero-mini-title st-pink"> {parser(subTitle)}</h4>
            <h2 className="blue l13">{parser(title)}</h2>
            <div className="st-hero-subtitle">{parser(text)}</div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero15;
