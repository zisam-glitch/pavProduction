import { Icon } from "@iconify/react";
import React from "react";
import Slider from "react-slick";
import parser from "html-react-parser";
import { Link as ScrollLink } from "react-scroll";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { Link } from "react-router-dom";

const Hero3 = ({ data }) => {
  console.log("daataaaa", data);
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-arrow-left mb-none slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="fa-solid:angle-left" />
    </div>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-arrow-right mb-none slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="fa-solid:angle-right" />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <>
      <Slider {...settings} className="st-slider-style1 st-slider-animation1">
        {data.map((elements, index) => (
          <div className="st-hero st-style1 st-size1" key={index} id="home">
            {console.log("elemnt", elements)}
            <div
              className="st-hero-bg st-dynamic-bg st-bg"
              style={{ backgroundImage: `${elements.bgGradient}` }}
            >
              {" "}
            </div>
            <div
              className={`st-hero-bg st-dynamic-bg ${elements.bgRevert} st-bg`}
              style={{ backgroundImage: `url(${elements.bgImg})` }}
            />
            <div className="container">
              <div className="st-hero-text">
                {typeof elements.buttonTop === "string" && (
                  <ScrollLink
                    to="about"
                    className="st-btn st-style1 st-size-medium st-color3 st-smooth-move"
                    style={{ display: `${elements.display}` }}
                  >
                    {parser(elements.buttonTop)}
                  </ScrollLink>
                )}
                {typeof elements.title === "string" && (
                  <h2 className="st-hero-title blue mobile-visible">
                    {parser(elements.title)}
                  </h2>
                )}
                {typeof elements.mobileTitle === "string" && (
                  <h2 className="st-hero-title blue mobile-hidden">
                    {parser(elements.mobileTitle)}
                  </h2>
                )}
                {typeof elements.subTitle === "string" && (
                  <div className="st-hero-subtitle">
                    {parser(elements.subTitle)}
                  </div>
                )}
                <div
                  className="emergency-white"
                  style={{ display: `${elements.flex}` }}
                >
                  {typeof elements.WhiteSubTitle === "string" && (
                    <div className="st-hero-subtitle-white">
                      {parser(elements.WhiteSubTitle)}
                    </div>
                  )}
                  <div className="emergency-white-btn">
                    <a
                      href="tel:0800 1938 786"
                      className="st-btn st-style1 st-size-medium st-colorRed st-smooth-move"
                    >
                      <IoIosCall style={{ fontSize: "20px" }} />
                      {parser(elements.buttonBottom)}
                    </a>
                    {typeof elements.sideBottom === "string" && (
                      <a
                        href="https://pavdental.setmore.com/"
                        className="st-btn st-style1 st-size-medium st-colorRed st-smooth-move"
                      >
                        <BsFillCalendar2CheckFill />
                        {parser(elements.sideBottom)}
                      </a>
                    )}
                  </div>
                </div>
                <div
                  className="st-hero-btn-group"
                  style={{ display: `${elements.display}` }}
                >
                  {typeof elements.buttonBottom === "string" && (
                    <a
                      target="_blank"
                      href={elements.buttonBottomLnk}
                      // to= "https://pavdental.setmore.com/"
                      className="st-btn st-style1 st-size-medium st-color1 st-smooth-move"
                    >
                      <BsFillCalendar2CheckFill />
                      {parser(elements.buttonBottom)}
                    </a>
                  )}
                </div>

                <div className="st-height-b15 st-height-lg-b15" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Hero3;
