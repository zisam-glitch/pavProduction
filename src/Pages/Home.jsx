import React from "react";
import Hero3 from "../Components/Hero/Hero3";
import Hero15 from "../Components/Hero/Hero23";
import Contact from "../Components/Contact/Contact";
import Department from "../Components/Department/Department";
import About from "../Components/About/About";
import About2 from "../Components/About/AboutH";
import PostWrapper from "../Components/Post/PostWrapper";
import TestimonialSlider from "../Components/Slider/TestimonialSlider";
import Funfact from "../Components/Funfact/Funfact";
import HomeCta from "../Components/Blocks/Cta";
import BeforeAfter from "../Components/BeforeAfter/BeforeAfter";
import { Helmet } from "react-helmet-async";

const heroData = [
  {
    mobileTitle:
      "<span> Complete Dental Check-Up </span>  <br /> <span> £35 Only £7.60 more than  the </span>  <br /> <span> NHS fee   (£27.40), with faster </span>  <br /> <span> access and   premium service </span> ",
    title:
      "<span> Complete Dental Check-Up — £35  </span>  <br /> <span> Only £7.60 more than the NHS fee (£27.40)</span>  <br /><span>  with faster access and premium service </span> ",
    flex: "none",
    buttonTop: "ACCESSIBLE SMILES",
    buttonBottomLnk:
      "https://pavdental.setmore.com/",
    buttonBottom: "Book - £35",
    bgImg:
      "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764826517/IMG-20251109-WA0026_n3cbcr.jpg",
    bgRevert: "",
  },

  {
    display: "none",
    flex: "flex",
    WhiteSubTitle:
      "<h2>Emergency Dentist</h2> <h3> Covering Bradford 24 Hours 7 days of the week  including National and Bank Holidays </h3> £45 consultation <br /> £90* out-of-hours consultation ",
    buttonTop: "ACCESSIBLE SMILES",
    buttonBottom: "Call us Now <br /> 0800 1938 786",
    buttonBottomLnk: "tel:0800 1938 786",
    sideBottom: "Book Online",
    sideBottomLnk:
      "https://pavdental.setmore.com/",
    bgImg:
      "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764826619/Picture1_ngtpvq.jpg",
    bgRevert: "bg-revert",
  },
  {
    mobileTitle:
      "<span> Rediscover Your Youthful  </span> <br /> <span>  Radiance  with Our Premier  </span> <br /> <span>  Aesthetic Treatments </span>",
    title:
      "<span> Rediscover Your Youthful  </span> <br /> <span>  Radiance  with Our Premier  </span> <br /> <span>  Aesthetic Treatments </span>",
    buttonTop: "FACIAL AESTHETICS",
    buttonBottom: "Learn more",
    buttonBottomLnkottomLnk: "/services/aesthetics",
    flex: "none",
    bgImg:
      "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764826517/WhatsApp_Image_2025-12-02_at_16.53.21_3d115a57_zwj8n6.jpg",
    bgRevert: "bg-revert",
  },
];

const aboutData = {
  title:
    "Comprehensive Dental Services: Book Online, Specialized Care, and Insurance Support",
  subTitle:
    " Providing expert oral surgery, comprehensive dental hygiene assessments, cosmetic dentistry, special care services, and public health insurance assistance, our clinic ensures top-notch care for all your dental needs. Enjoy the convenience of free online appointment booking to easily schedule your visits.",

  avater: {
    img: "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764827228/gdc_logo-9b5f8d0667d0a597708b14cf69457ceb_muydhh_1_1_jdhkkt_mo1hyi.jpg",
    name: "David Ambrose",
    designation:
      "<span>+</span>  Oral hygiene advisory & assessment <br/>   <span>+</span> Dental public health insurance <br/> <span>+</span> Free online appointment booking <br/> <span>+</span> Various cosmetic dentistry services <br/> <span>+</span> Special care dentistry services<br/> <span>+</span>  Oral surgery ",
  },
  timeTable: [
    {
      day: "Monday",
      startTime: "00:00",
      endTime: "24:00",
    },
    {
      day: "Tuesday",
      startTime: "00:00",
      endTime: "24:00",
    },
    {
      day: "Wednesday",
      startTime: "00:00",
      endTime: "24:00",
    },
    {
      day: "Thursday",
      startTime: "00:00",
      endTime: "24:00",
    },
    {
      day: "Friday",
      startTime: "00:00",
      endTime: "24:00",
    },
    {
      day: "Saturday",
      startTime: "00:00",
      endTime: "24:00",
    },
    {
      day: "Sunday",
      startTime: "00:00",
      endTime: "24:00",
    },
  ],
  contact: "0800 1938 786",
};

const aboutData2 = {
  title: "Exceptional Dentistry That You Can Rely On",
  subTitle:
    "At Pav Dental we hold a strong ethos in delivering the best dental care possible for all of our patients. We believe a healthy and happy smile is true to one’s nature in expression of themselves and we are committed to making sure all of our patients can be confident and satisfied with the care they receive from the moment they walk through our doors. We uphold community values and believe we have an important responsibility in serving our community to the best our ability. <br/><br/> We appreciate no two patients are the same and are committed to delivering care and treatment tailored to fulfil the dental care you deserve. Dentistry is a fundamental aspect of any individual well being and we are determined to ensure excellence no matter what your needs may be.",
  img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717238472/jonathan-borba-hl6uG9cHW5A-unsplash_hce6yq.jpg",
  avater: {
    img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717238315/New_Project_11_w7d3ls.png",
    name: "Dr. Hassan Bhojani",
    designation: "Founder & Principal Dentist",
  },
};

const beforeAfterData = {
  bgImg: "",
  beforeImg:
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1717238863/before_fynlhn.jpg",
  afterImg:
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1717238861/after_euabj2.jpg",
};

const testimonialData = [
  {
    img: "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764826858/WhatsApp_Image_2025-12-01_at_23.35.44_80dcf1dc_t8cv7n.jpg",
    name: "Best Dentist I've Ever Been to",
    designation: "Executive",
    subTitle:
      "Best dentist I've ever been too, very welcoming and friendly staff, I've always had a fear of dentists but these guys were absolute brilliant made me feel very comfortable and explained what they were going to do before so I had no worries",
  },
  {
    img: "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764826857/WhatsApp_Image_2025-12-01_at_23.35.44_01ba890d_ld1rul.jpg",
    name: "Excellent Practice & Great Staff",
    designation: "Biographer",
    subTitle:
      "This was my first visit at this practice, the reception staff were friendly and polite. The dentist I saw was patient with me and gave excellent aftercare advice. This made me feel reassured and relaxed. Excellent practice and great staff.",
  },
  {
    img: "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764826859/WhatsApp_Image_2025-12-01_at_23.35.45_d4f14ad9_np21je.jpg",
    name: "Explained Everything Before Any Work Started.",
    designation: "UX Designer",
    subTitle:
      "I would rate this as the best dentist I have ever been to. Hassan, my dentist, made me feel really relaxed through my procedures and explained everything before any work started, so thank you.",
  },
  {
    img: "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764826861/WhatsApp_Image_2025-12-01_at_23.35.45_f789614a_jmseoc.jpg",
    name: "Professional & Compassionate",
    designation: "Executive",
    subTitle:
      "Had a lot done in one session today took nearly an hour was a male dentist don't know his name but was the best dentist I ever had.",
  },
];

const postData = [
  {
    img: "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764827361/Picture4_vrc4tp.jpg",
    title:
      "Creating a Safe and Healthy Environment: The Benefits of Installing an Air Purifier in Dental Clinics",
    date: "April 26, 2023",
    author: "Dr Bhojani",
    authorLink: "",
    subTitle:
      "Installing an air purifier like Mars Purifier in a dental clinic improves air quality, enhances staf...",
    postLink: "/post/post_details",
  },
  
];
const heroData1 = {
  subTitle: "",
  title: "What causes cavities? <br/>",
  text: "",
  videoSrc:
    "https://www.youtube.com/embed/zHXljj727OE?si=Uz7mq8eE5tSAvpgy",
  imgSrc:
    "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764826682/Gemini_Generated_Image_6exf956exf956exf_umaqo2.png",
};

const Home = () => {
  return (
    <>
     <Helmet>
      <title>24-Hour Private Dental Clinic in Bradford | Emergency Dental Care</title>
      <meta name="description" content="Looking for a 24-hour private dentist in Bradford? Our clinic provides emergency, cosmetic, and general dental treatments with expert care." />
    </Helmet>
      <div className="st-height-b125 st-height-lg-b80" id="home"></div>
      <Hero3 data={heroData} />
      <HomeCta />
      <Hero15 data={heroData1} />
      <About data={aboutData} />
      <Department />
      <About2 data={aboutData2} />
      <Funfact />
      <TestimonialSlider data={testimonialData} />
      <BeforeAfter data={beforeAfterData} />
      <Contact />
    </>
  );
};

export default Home;
