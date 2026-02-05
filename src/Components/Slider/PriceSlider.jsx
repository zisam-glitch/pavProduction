import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import Price from "../Price/Price";

const PriceSlider = ({ data }) => {
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
    speed: 500,
    slidesToShow: 3, // Default to 4 slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200, // Large screens
        settings: {
          slidesToShow: 3, // Show 4 slides
          dots: true,
        },
      },
      {
        breakpoint: 1100, // Large screens
        settings: {
          slidesToShow: 3, // Show 4 slides
          dots: true,
        },
      },
      {
        breakpoint: 991, // Medium screens
        settings: {
          slidesToShow: 2, // Show 3 slides
          dots: true,
        },
      },
      {
        breakpoint: 767, // Small screens
        settings: {
          slidesToShow: 1, // Show 1 slide
          dots: true,
        },
      },
    ],
  };
  
  
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   loop: true,
  //   speed: 3000,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay:true,
  //   prevArrow: <SlickArrowLeft />,
  //   nextArrow: <SlickArrowRight />,
  //   responsive: [
  //     {
  //       breakpoint: 991,
  //       settings: {
  //         slidesToShow: 2,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 1,
  //         dots: true,
  //       },
  //     },
  //   ],
  // };
  return (
    <section id="pricing">
      <SectionHeading title="Pav Dental Plans" />
      <div className="st-height-b40 st-height-lg-b0" />

      <div className="container">
        <Slider {...settings} className="st-slider-style2 st-pricing-wrap">
          {data.map((elements, index) => (
            <Price {...elements} key={index} />
          ))}
        </Slider>
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
    </section>
  );
};

export default PriceSlider;
