import React from "react";
import ServiceSlider from "../../Components/Slider/ServiceSlider";
import Hero10 from "../../Components/Hero/Hero10";
import About from "../../Components/About/AboutA";
import AboutB from "../../Components/About/AboutT";
import Price5 from "../../Components/Price/Price5";
import TestimonialSlider from "../../Components/Slider/TestimonialSlider";
import HomeCta from "../../Components/Blocks/AestheticsCta";
import BookButton from "../../Components/BookButton/BookButton";
import { Helmet } from "react-helmet-async";
const heroData = {
  sliderImages: [
    {
      img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1762973762/IMG_9161_ym0sgw.jpg",
    },
  ],
  heading: "Pav Dental Aesthetics <br /> Seeking Perfection?",
  subHeading:
    "The Award-Winning Bradford Dental and Aesthetic Clinic: <br/>Excellence in Dental and Aesthetic Care.",
};

const serviceData = {
  sectionHeadingData: {
    title: `Aesthetics Treatments`,
  },
  services: [
    {
      title: "Botox",
      text: "Botox is a non-surgical treatment that smooths out wrinkles and fine lines, giving you a more youthful appearance.        ",
    },
    {
      title: "Dermal fillers",
      text: "Dermal fillers are used to add volume and fullness to areas of the face that have lost volume due to aging or other factors.",
    },
    {
      title: "Chemical peels",
      text: "Chemical peels are an effective way to rejuvenate the skin by removing dead skin cells and promoting the growth of new, healthy skin.",
    },
    {
      title: "Lip enhancement",
      text: "Our lip enhancement treatments are designed to add volume and definition to your lips, giving you a fuller and more youthful appearance.",
    },
    {
      title: "Skin Rejuvenation",
      text: "Our skin rejuvenation treatments are designed to reduce the appearance of fine lines, wrinkles, and other signs of aging.        ",
    },
    {
      title: "Microneedling",
      text: "We offer microneedling as a safe and effective treatment to help improve the overall health and appearance of your skin.",
    },
  ],
};

const aboutData = {
  title:
    "We exclusively utilise premium-grade products of exceptional quality  ",
  subTitle: `Experience excellence with our Aesthetics services, where we use only the finest products to ensure exceptional results each time.
<br/><br/>
  Indulge in the finest aesthetic treatments you'll ever experience. Through meticulous research, we have curated a selection of top-notch products, ensuring utmost quality and satisfaction for our esteemed clients. Prepare to be impressed.`,
  img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1762878425/New_Project_muqouf.png",
};
const aboutData2 = {
  title: "How We are Keeping  <br/> You Safe    ",
  subTitle: `At Pav Dental, your safety is paramount. We prioritise your well-being and have implemented stringent measures to create a safe and healthy environment. As a regulated clinic under the Care Quality Commission (CQC), we adhere to rigorous guidelines for cleanliness, sterilisation, and staff training. Our team is equipped with the latest safety procedures and personal protective equipment. We maintain social distancing and limit patient numbers to ensure minimal risk of exposure. By choosing Pav Dental, you can trust that we meet the highest standards of quality and safety. Your health and peace of mind are our utmost priority.`,
  img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1762878425/New_Project_muqouf.png",
};

const serviceData2 = {
  sectionHeadingData: {
    title: `Our Values    `,
  },
  services: [
    {
      title: "Expert Guidance",
      text: "We take immense pride in delivering expert advice and guidance to our valued clients.",
    },
    {
      title: "Quality Assurance",
      text: "Our unwavering commitment lies in using the utmost quality products, with no room for compromise.",
    },
    {
      title: "Wholehearted Commitment",
      text: "Our motivation stems from a genuine desire to provide the best care, rather than being driven by sales incentives.",
    },
  ],
};

const testimonialData = [
  {
    name: "Artistry and Expertise",
    subTitle:
      "I am forever grateful to Pav Dental for their incredible artistry and expertise in Aesthetics. Their talented team possesses an eye for detail and an exceptional understanding of Aesthetics. Through their skilled hands, I witnessed the transformation of my features into a harmonious and natural-looking appearance. I highly recommend Pav Dental for their unparalleled craftsmanship and dedication to delivering outstanding results.",
  },
  {
    name: "Best Decision Ever",
    subTitle:
      "Pav Dental has given me a new lease on life with their exceptional Aesthetics services. From the moment I stepped into their clinic, I felt welcomed and supported. The team's professionalism and attention to detail in understanding my unique needs truly boosted my confidence.I can now confidently face the world with a renewed sense of self- assurance, thanks to Pav Dental",
  },
  {
    name: "Boosted Confidence",
    subTitle:
      "Choosing Pav Dental for my Aesthetics treatment was undeniably the best decision I've made for myself. The moment I entered their clinic, I was greeted by a warm and welcoming atmosphere that instantly put me at ease. The team's professionalism, personalised approach, and commitment to excellence were evident throughout my entire journey. Pav Dental truly exceeded my expectations, leaving me with a refreshed and youthful appearance that has positively impacted my life.",
  },
];

const priceData1 = {
  pricePlan: [
    {
      mainTitle: " Dermal Fillers",
      mainPrice: "Price",
      featureList: [
        {
          title: "0.5ML",
          price: "100",
        },
        {
          title: "0.7ML",
          price: "150",
        },
        {
          title: "1ML",
          price: "250",
        },

        {
          title: "2ML",
          price: "350",
        },
        {
          title: "3ML",
          price: "400",
        },
        {
          title: "4ML",
          price: "450",
        },
      ],
    },
  ],
};
const priceData2 = {
  pricePlan: [
    {
      mainTitle: " Botox",
      mainPrice: "Price",
      featureList: [
        {
          title: "1 AREA",
          price: "180",
        },
        {
          title: "2 AREAS",
          price: "240",
        },
        {
          title: "3 AREAS",
          price: "300",
        },
        {
          title: "4 AREAS",
          price: "400",
        },
      ],
    },
  ],
};

const priceData3 = {
  pricePlan: [
    {
      mainTitle: "Others",
      mainPrice: "Price",
      featureList: [
        {
          title: "PROFHILO FIRST DOSE",
          price: "249",
        },
        {
          title: "SOSUM BOOSTER",
          price: "160",
        },
      ],
    },
  ],
};


const Home10 = () => {
  return (
    <>
    <Helmet>
        <title>Advanced Aesthetic Treatments in Bradford | Book Today</title>
        <meta
          name="description"
          content="Enhance your look with advanced aesthetic treatments in Bradford . Safe, professional and tailored to you. Book your treatment today."
        />
      </Helmet>
      <Hero10 data={heroData} />
      <ServiceSlider data={serviceData} varient="st-type1" />
      <About data={aboutData} />
      <ServiceSlider data={serviceData2} varient="st-type1" />
      <div className="st-height-b60 st-height-lg-b80" id="home"></div>
      <h2 className="blue text-center">Aesthetics Price List</h2>
      <div className="st-height-b70 st-height-lg-b80" id="home"></div>
      <div className="container grid-class ">
        <Price5 data={priceData1} varient="st-color2" />
        <Price5 data={priceData2} varient="st-color2" />
      </div>
      <div className="st-height-b70 st-height-lg-b80" id="home"></div>
      <div className="flex jcenter">
        <div className="col-lg-6">
          <Price5 data={priceData3} varient="st-color2" />
        </div>
      </div>
      <div className="st-height-b70 st-height-lg-b80" id="home"></div>
      <p className="text-center">
        Offers and packages now availabe. Please enquire with our team today on
        0800 099 6375 to find out more
      </p>
      <TestimonialSlider data={testimonialData} />
      <HomeCta />
      <About data={aboutData2} />
      <BookButton/>

      <div className="st-height-b120 st-height-lg-b80" />
    </>
  );
};

export default Home10;
