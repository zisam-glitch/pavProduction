import React from "react";
import About from "../../Components/About/AboutA";
import Hero15 from "../../Components/Hero/Hero15";
import Contact from "../../Components/Contact/Contact";
import image from "../../assets/imges/mobilePagePicture.jpg";
import BookButton from "../../Components/BookButton/BookButton";
import SectionHeading2 from "../../Components/SectionHeading/SectionHeading2";
import parser from "html-react-parser";
import ServiceSlider from "../../Components/Slider/ServiceSlider";

const heroData = {
  subTitle: "Custom Sports Mouthguards",
  title: "Designed for comfort, accuracy and full protection",
  text: "<br/><span>At Pav Dental, you can order a high quality custom mouthguard in the way that suits you best. Every mouthguard is created using precise digital or physical impressions with full control over colour, style and custom features.<br/> <br/>",
  imgSrc:
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1717605310/pexels-tima-miroshnichenko-5355830_lrento.jpg",
  videoSrc: "https://www.youtube.com/embed/_oIlv59bTL4",
};

const aboutData = {
  title: "Why Choose Pav Dental Mouthguards?",
  subTitle: ` 
  <ul>
  <li> Strong protection for sports

  </li>
  <li>Comfortable fit that stays secure

  </li>
  <li>Digital or mould kit options

  <li>NHS partners
  </li>
  <li>High quality materials

  </li>
  </li>
  <li>Fast turnaround
  </li>
  <li>Trusted Bradford based clinic
  </li>
  </ul> `,
  img: "https://www.caledoniacrosstowndental.ca/wp-content/uploads/2023/09/do-mouthguards-help-straighten-teeth.jpeg",
  // img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1718453188/mobile-monkey-sterlization-van-500x500-500x500_urz7bx.webp",
};


const serviceData = {
  sectionHeadingData: {
    title: `Who Can Use Our Mouthguards`,
  },
  services: [
    {
      title: "Adults",
      text: "For everyday protection against grinding, clenching, or accidental impact.",
    },
    {
      title: "Children",
      text: "Keeps growing teeth safe during play, sports, and daily activities.",
    },
    {
      title: "Athletes",
      text: "Provides strong impact protection during training and competitive sports.",
    },
    {
      title: "Boxers",
      text: "Minimizes jaw impact and prevents oral injuries during intense boxing sessions.",
    },
    {
      title: "Rugby players",
      text: "Shields teeth and gums during high-contact tackles and scrums.",
    },
    {
      title: "Hockey players",
      text: "Protects against sticks, pucks, and high-speed on-ice collisions.",
    },
    {
      title: "Anyone needing extra protection",
      text: "Ideal for anyone who grinds teeth, plays sports, or needs added oral safety.",
    },
  ],
};

const vacancies = [
  {
    title: "Choose Your Colour",
    description: "You can choose from a variety of colour options, including single colour, two colour combinations, mixed colours, or glitter and special finishes for a more unique look.",
  },
  {
    title: "Add Personalisation",
    description: "Personalise your mouthguard with your name, initials, team name, number, or even a custom logo if required.",
  },
];


const sectionHeadingData = {
  title: "How to Order Your Mouthguard",
};

const Home15 = () => {
  return (
    <div>
      <div className="st-height-b125 st-height-lg-b0" id="home"></div>
      <Hero15 data={heroData} />
      <div className="st-height-b80 st-height-lg-b80" id="home"></div>

      <SectionHeading2 data={sectionHeadingData} />
      <div className="grid-class container">
        <div className="vacancy v-red">
          <h4 className="text-white">Visit Our Clinic</h4>
          <p className="text-white">
            Accurate digital scan with quick delivery
          </p>
          <div className="workflow text-white">
            <div className="step-wrap">
              <div className="flow-step">
                <span className="step-index">1</span>
                <p>Book an appointment at Pav Dental</p>
              </div>
              <div className="flow-arrow-down" aria-hidden="true">
                ↓
              </div>
            </div>
            <div className="step-wrap">
              <div className="flow-step">
                <span className="step-index">2</span>
                <p>We take a precise digital scan of your teeth</p>
              </div>
              <div className="flow-arrow-down" aria-hidden="true">
                ↓
              </div>
            </div>
            <div className="step-wrap">
              <div className="flow-step">
                <span className="step-index">3</span>
                <p>Your custom mouthguard is manufactured</p>
              </div>
              <div className="flow-arrow-down" aria-hidden="true">
                ↓
              </div>
            </div>
            <div className="step-wrap">
              <div className="flow-step">
                <span className="step-index">4</span>
                <p>Delivered straight to your address</p>
              </div>
              <div className="flow-arrow-down" aria-hidden="true">
                ↓
              </div>
            </div>
          </div>
          <p className="text-white">
            Digital scans give the highest accuracy and a perfect fit.
          </p>
        </div>

        <div className="vacancy">
          <h4>Order From Home</h4>
          <p>Easy mould kit sent to your door</p>
          <div className="workflow">
            <div className="step-wrap">
              <div className="flow-step">
                <span className="step-index">1</span>
                <p>We send you a mould kit</p>
              </div>
              <div className="flow-arrow-down" aria-hidden="true">
                ↓
              </div>
            </div>
            <div className="step-wrap">
              <div className="flow-step">
                <span className="step-index">2</span>
                <p>You take the impression at home</p>
              </div>
              <div className="flow-arrow-down" aria-hidden="true">
                ↓
              </div>
            </div>
            <div className="step-wrap">
              <div className="flow-step">
                <span className="step-index">3</span>
                <p>Use the prepaid label to return it</p>
              </div>
              <div className="flow-arrow-down" aria-hidden="true">
                ↓
              </div>
            </div>
            <div className="step-wrap">
              <div className="flow-step">
                <span className="step-index">4</span>
                <p>We create it and send it back to you</p>
              </div>
              <div className="flow-arrow-down" aria-hidden="true">
                ↓
              </div>
            </div>
          </div>
          <p>
            This option is ideal if you live far away or need a convenient home
            solution.
          </p>
        </div>
      </div>
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
      <ServiceSlider data={serviceData} varient="st-type1" />

      <Contact />
      <BookButton />
    </div>
  );
};

export default Home15;
