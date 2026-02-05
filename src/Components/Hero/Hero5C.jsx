import { React, useEffect, useState } from "react";
import HeroSlider from "../Slider/HeroSlider";
import { Link as ScrollLink } from "react-router-dom";
import TextTransition, { presets } from "react-text-transition";

const Hero5 = ({ data }) => {
  const { sliderImages, title } = data;

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <div className="st-height-b125 st-height-lg-b80" id="home"></div>
      <div id="home" className="st-hero-wrap st-color1 overflow-hidden">
        <div className="st-wave-animation" />
        <div className="st-hero st-style1">
          <div className="container hero-grid">
            <div className="st-hero-text">
              <h2 className="st-hero-title cd-headline slide">
                General Dentistry: Your <br /> of Gateway to Lifelong <br />{" "}
                Oral Health
              </h2>
              <div className="st-hero-subtitle">
              Welcome to your guide to General Dentistry, covering check-ups <br />
                to fillings. Discover how it maintains and improves your <br /> dental
                health for lifelong healthy smiles.
              </div>
              <div className="st-hero-btn">
                <ScrollLink
                  to="https://pavdental.setmore.com/"
                  className="st-btn st-style1 st-size-medium st-color1 st-smooth-move"
                >
                  Appointment
                </ScrollLink>
              </div>
            </div>
            <div className="hero-img">
              <img src="https://res.cloudinary.com/db1i46uiv/image/upload/v1763028429/Picture1_ice7kw.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero5;
