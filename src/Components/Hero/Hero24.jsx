import React from "react";
import parser from "html-react-parser";
import { Link } from "react-router-dom";
import VideoBlock3 from "../VideoBlock/VideoBlock3";

const Hero15 = ({ data }) => {
  const { subTitle, title, text, imgSrc, videoSrc } = data;
  return (
    <div className="st-hero st-style1 st-type2">
      <div className='st-height-b120 st-height-lg-b80'></div>
      <div className="container">
        <h2 className="blue center pb-10 pt-11">{text}</h2>
        <div className="st-hero-in">
          <VideoBlock3 imgSrc={imgSrc} videoSrc={videoSrc} />
        </div>
      </div>
      <div className='st-height-b120 st-height-lg-b80'></div>
    </div>
  );
};

export default Hero15;
