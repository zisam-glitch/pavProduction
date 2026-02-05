import React from "react";
import About from "../../Components/About/AboutA";
import Hero15 from "../../Components/Hero/Hero15";
import Contact from "../../Components/Contact/Contact";
import Accordion from "../../Components/Accordion/Accordion1";
import AboutD from "../../Components/About/AboutD";
import BookButton from "../../Components/BookButton/BookButton";
import { Helmet } from "react-helmet-async";
const heroData = {
  subTitle: "",
  title: "Dentures at Pav Dental ",
  text: "<br/><span>Customized Dentures for a Confident Smile</span> :<br/> <br/> At Pav Dental, we specialize in crafting high-quality dentures that not only look natural but also provide superior comfort. Our experienced team works closely with you to ensure your dentures are tailored to your needs, giving you a perfect fit and renewed confidence in your smile.<br/> <br/>",
  imgSrc:
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1717605310/pexels-tima-miroshnichenko-5355830_lrento.jpg",
  videoSrc: "https://www.youtube.com/embed/_oIlv59bTL4",
};

const aboutData = {
  title: "We offer a variety of denture solutions, including:  ",
  subTitle: `
  We Are The Dentists That Come To You. 
  <ul>
  <li>Full Dentures
  </li>
  <li>Partial Dentures
  </li>
  <li>Implant-Supported Dentures
  </li>
  <li>Flexible Dentures
  </li>
  </ul> `,
  img: "https://img.freepik.com/free-photo/smiling-dentist-showing-artificial-dentures_329181-20717.jpg?t=st=1733671894~exp=1733675494~hmac=56bfd36a7c6d1e4603c9d0b4f5359716ff4d6a7e3808b2813ff9911e6f02bb29&w=740",
  // img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1718453188/mobile-monkey-sterlization-van-500x500-500x500_urz7bx.webp",
};
const aboutData2 = {
  title: "Affordable Denture Options   ",
  subTitle: `
  Our team of skilled professionals uses the latest technology to scan, design, and fit dentures that look and feel natural. We prioritize both comfort and aesthetics in every set we create.
<br/><br/>
  <h4 className="blue">Our Denture Prices: </h4>
  
  Qualifications: Make sure the dentist is board-certified and has good reviews.
  <br/>
   •	Acrylic Denture – £495


  <br/>
•	Flexible (Valplast) Denture – £795
 <br/>
•	Cobalt Chromium Denture – £1195   <br/><br/>
<i>Book your free consultation today with one of our GDC-registered dentists to start your journey towards a confident, healthy smile.</i> `,
  img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717793397/dentist-her-clean-orthodontist-office_23-2149195927_h0i2vo.jpg",
};


const faqData = {
  title: "Frequently Asked Questions",
  faqItems: [
    {
      title: "What’s the difference between standard dentures and implant-retained dentures?",
      content: "Standard dentures rely on gravity, while implant-retained dentures are secured with implants, offering a more stable and secure fit."
    },
    {
      title: "Can I eat normally with dentures?",
      content: "With well-fitting dentures, you’ll enjoy a wider variety of foods, making dining a more enjoyable experience."
    },
    {
      title: "How much do dentures cost?",
      content: "Denture prices vary depending on the type. For example:\n\n* Standard dentures are £495.\n* Flexible dentures are £795.\n* Cobalt chromium dentures are £1095."
    },
    {
      title: "How do implant-retained dentures differ from regular implants?",
      content: "Implant-retained dentures are removable and click onto implants, while standard implants are permanently fixed in place."
    },
    {
      title: "How do I clean my dentures?",
      content: "Use an antibacterial and antifungal cleaner, which you can find at most retailers like Boots or Tesco. Follow the manufacturer’s instructions for best results."
    },
    {
      title: "Can I sleep with my dentures in?",
      content: "While it’s possible, we recommend removing them to allow your gums to breathe and avoid irritation. You can do this discreetly while showering or bathing."
    },
    {
      title: "What should I do if my dentures feel loose?",
      content: "If your dentures feel loose, visit us for an assessment. In some cases, adjustments or relining may be required. Denture adhesives can also help for temporary fixes."
    },
    {
      title: "Do I need to replace my dentures over time?",
      content: "Yes, your gums can change over time, which may affect the fit of your dentures. Regular checkups will help ensure they remain comfortable."
    },
    {
      title: "Are there alternatives to dentures?",
      content: "Yes, implants and bridges are alternatives to traditional dentures, providing different benefits based on your oral health needs."
    },
    {
      title: "Can dentures help improve my speech?",
      content: "Yes, well-made dentures can enhance your speech by providing proper support for your mouth and jaw."
    }
  ]
};

const Home15 = () => {
  return (
    <div>
      <Helmet>
        <title>Advanced Denture Solutions in Bradford | Book Your Consultation</title>
        <meta
          name="description"
          content="Get advanced denture solutions in Bradford with natural, comfortable results. Custom-fit dentures designed for your perfect smile. Book now."
        />
      </Helmet>
      <div className="st-height-b125 st-height-lg-b0" id="home"></div>
      <Hero15 data={heroData} />
      <About data={aboutData} />
      <AboutD data={aboutData2} />
      <div className="st-height-b120 st-height-lg-b80" id="home"></div>
      {/* <div className="grid-class container">
        {vacancies.map((vacancy, index) => (
          <div className="vacancy" key={index}>
            <h4>{vacancy.title}</h4>
            <p>{vacancy.description}</p>
          </div>
        ))}
      </div> */}
      <Accordion data={faqData} />
      <Contact />
      <BookButton />

    </div>
  );
};

export default Home15;
