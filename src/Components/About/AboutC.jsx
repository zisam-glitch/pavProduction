import React from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
const About2 = ({ data }) => {
  const { title, subTitle, avater, img } = data;

  return (
    <section className="st-about-wrap" id="about">
      <div className="st-shape-bg">
        <img src="./shape/about-bg-shape.svg" alt="shape" />
      </div>

      <div className="container">
        <div className="row acenter">
          <div className="col-lg-6">
            <div className="st-height-b25 st-height-lg-b25" />
            <div className="st-vertical-middle padding">
              <div className="st-vertical-middle-in">
                <div className="st-text-block st-style1">
                  <h2 className="st-text-block-title blue">{title}</h2>
                  <div className="st-height-b20 st-height-lg-b20" />
                  <div className="st-text-block-text span">
                    <p className="justify">{parse(subTitle)}</p>
                  </div>
                  <div className="st-height-b25 st-height-lg-b25" />
                  {/*  */}
                </div>
              </div>
            </div>
            <div className="st-height-b0 st-height-lg-b30" />
          </div>
          {/* .col */}
          <div className="col-lg-6">
            <div>
              <h2 className="text-center blue">Register</h2>
              <p className="text-center">Choose Type of Services</p>
            </div>
            <a target="_blank" href="https://booking.setmore.com/scheduleappointment/932f19c8-6989-4716-93c5-c73ac31d511b">
              <div className="flex iconbox1 ">
                <img
                  src="https://res.cloudinary.com/db1i46uiv/image/upload/v1724312783/icons8-hospital-wagon-without-a-siren-100_1_lpjex0_1_k9xdb9.png"
                  alt=""
                />
                <div className="flex flex-col">
                  <h6>24 x 7 Emergency Dentists</h6>
                  <p>Round the clock we help people to connect with Dentists</p>
                </div>
              </div>
            </a>
          </div>
          {/* .col */}
        </div>
      </div>
      <div className="st-height-b120 st-height-lg-b50" />
    </section>
  );
};

export default About2;
