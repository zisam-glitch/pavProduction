import React from "react";
import Slider from "react-slick";
import SectionHeading2 from "../SectionHeading/SectionHeading2";
import { Icon } from "@iconify/react";

const ServiceSlider = ({ data, varient }) => {
  const { sectionHeadingData, services } = data;

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-arrow-left slick-arrow" +
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
        "slick-arrow-right slick-arrow" +
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
    loop: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section
      id="service"
      className={`${varient === "st-type1" ? "" : "st-bluis-bg"}`}
    >
      <div className="st-height-b120 st-height-lg-b80" />
      <SectionHeading2 data={sectionHeadingData} />
      <div className="container">
        <Slider {...settings} className="st-slider-style3">
          {services.map((elements, index) => (
            <div key={index} className="">
              <video controls className="videocontrol" poster={elements.poster}>
                <source src={elements.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="st-height-b10 st-height-lg-b10" />
              <h6 className="">{elements.title}</h6>
              <p className="text-gray-700">{elements.description}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
    </section>
  );
};

export default ServiceSlider;
