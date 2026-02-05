import React from "react";
import About from "../../Components/About/AboutA";
import Hero15 from "../../Components/Hero/Hero15";
import Contact from "../../Components/Contact/Contact";
import image from '../../assets/imges/mobilePagePicture.jpg'
import BookButton from "../../Components/BookButton/BookButton";
import { Helmet } from "react-helmet-async";

const heroData = {
  subTitle: "Coming Soon",
  title: "Mobile dental care at Doorstep  ",
  text: "<br/><span>Experience Convenient Mobile Dental Care with Comprehensive Dentistry Delivered to Your Doorstep</span> :<br/> <br/> Pav Dental Mobile is a unique dental service that enables our patients to access a full range of dental services from the comfort of their own home. With many combined years of dental experience in both traditional and mobile dentistry along with the latest technology and equipment we guarantee our patients the upmost satisfactory service.<br/> <br/>",
  imgSrc:
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1717605310/pexels-tima-miroshnichenko-5355830_lrento.jpg",
  videoSrc: "https://www.youtube.com/embed/_oIlv59bTL4",
};

const aboutData = {
  title: "Concerned about your residents' dental needs?   ",
  subTitle: `
  We Are The Dentists That Come To You. 
  <ul>
  <li>Unique mobile dental service
  </li>
  <li>Working with care homes
  </li>
  <li>Make your home oral-health CQC-compliant
  </li>
  <li>NHS partners
  </li>
  <li>The very latest mobile dental equipment
  </li>
  <li>Hundreds of satisfied patients
  </li>
  <li>Attract more residents
  </li>
  <li>Engage carers and improve staff retention
  </li>
  </ul> `,
  img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1724354976/mobilePagePicture.2341466a9ea8abfb297d_n65kba.jpg",
  // img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1718453188/mobile-monkey-sterlization-van-500x500-500x500_urz7bx.webp",
};

const vacancies = [
  {
    title: "We Come to You",
    description: " We have a modern, well-equipped mobile surgery  that allows us to visit you in the comfort of your own home.",
  },
  {
    title: "Location",
    description: "Pav Dental Mobile visits patients across the UK. Your Smile with Convenient Dental Care Right at Your Doorstep. ",
  },
];

const Home15 = () => {
  return (
    <div>
      <Helmet>
        <title>Mobile Dental Care in Bradford – Professional At-Home Services</title>
        <meta
          name="description"
          content="Pav Dental's mobile dental care brings professional treatment to your doorstep. Easy booking, gentle care, and trusted at-home service."
        />
      </Helmet>
      <div className="st-height-b125 st-height-lg-b0" id="home"></div>
      <Hero15 data={heroData} />
      <About data={aboutData} />
      <div className="st-height-b120 st-height-lg-b80" id="home"></div>
      <div className="grid-class container">
        {vacancies.map((vacancy, index) => (
          <div className="vacancy" key={index}>
            <h4>{vacancy.title}</h4>
            <p>{vacancy.description}</p>
          </div>
        ))}
      </div>
      <Contact />
      <BookButton/>

    </div>
  );
};

export default Home15;
