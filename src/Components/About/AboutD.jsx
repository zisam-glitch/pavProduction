import React from "react";
import parse from "html-react-parser";
import SectionHeading from "../SectionHeading/SectionHeading";

const About2 = ({ data }) => {
  const { title, subTitle, avater, img } = data;

  return (
    <section className="st-about-wrap" id="about">
      <div className="st-shape-bg " >
        <img src="./shape/about-bg-shape.svg" alt="shape" />
      </div>
      <div className="st-height-b120 st-height-lg-b50" />

      <div className="container">
        <div className="row">
        <div
            className="col-lg-6 wow fadeInRight"
            data-wow-duration="0.8s"
            data-wow-delay="0.2s"
          >
            <div className="st-about-img ">
              <div
                className="st-about-img-in st-dynamic-bg st-bg m-r-30 l-0"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b25 st-height-lg-b25" />
            <div className="st-vertical-middle padding">
              <div className="st-vertical-middle-in">
                <div className="st-text-block st-style1">
                  <h2 className="st-text-block-title blue">{parse(title)}</h2>
                  <div className="st-height-b20 st-height-lg-b20" />
                  <div className="st-text-block-text span">
                    <p>{parse(subTitle)}</p>
                  </div>
                  <div className="st-height-b50 st-height-lg-b25" />
                  {/*  */}
                </div>
              </div>
            </div>
            <div className="st-height-b0 st-height-lg-b30" />
          </div>
          {/* .col */}
      
          {/* .col */}
        </div>
      </div>
    </section>
  );
};

export default About2;
