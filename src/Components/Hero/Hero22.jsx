import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

const Hero2 = ({ data }) => {
  const titles = data.title;
  const newArray = titles.flatMap((element) => [element, 3000]);

  return (
    <>
      <div className="st-height-b125 st-height-lg-b80" id="home"></div>
      <div
        id="home"
        className="st-hero-wrap st-color1 st-gray-bg overflow-hidden st-shape-wrap"
      >
        <div className="st-wave-animation" />
        <div className="st-wave-animation st-wave-animation-2" />
        <div className="st-hero st-style1 legecy text-center">
          <div className="container">
            <div className="st-hero-text">
              <h2 className="st-hero-title cd-headline clip">
                Custom Grillz and Tooth Gems <br /> Crafted for Stardom
              </h2>
              <div className="st-hero-subtitle">
                pavDental crafts unique custom grillz for entertainment clients,
                emphasizing quality, style,  <br /> and individuality. Each piece 
                reflects our clients' tastes and creativity.
              </div>

              <div className="st-height-b10 st-height-lg-b10" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
