import React from "react";
import About from "../../Components/About/AboutA";
import AboutD from "../../Components/About/AboutD";
import Hero15 from "../../Components/Hero/Hero15";
import Contact from "../../Components/Contact/Contact";
import Hero24 from "../../Components/Hero/Hero24";
import ServiceSlider from "../../Components/Slider/ServiceSlider2";
import Accordion from "../../Components/Accordion/Accordion2";
import BookButton from "../../Components/BookButton/BookButton";
import VideoSlider from "../../Components/Slider/VideoSlider";
import { Helmet } from "react-helmet-async";

const heroData = {
  subTitle: "",
  title: "Pav Dental Oral Hygiene Care",
  text: "<br/>Healthy gums and a clean mouth are essential for a confident smile, fresh breath, and long lasting teeth. At Pav Dental, our professional hygiene care focuses on preventing gum disease, stopping bleeding gums, reducing bad breath, and maintaining strong oral health for life. <br/> <br/> We combine gentle hygiene treatment with education and tailored advice, so every patient understands how to look after their teeth at home.<br/> <br/>  ",
  imgSrc:
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1718455041/Screenshot_2024-06-15_183629_o18ipx.png",
  videoSrc: "https://www.youtube.com/embed/AQ3HzPnwFmY",
};

const aboutData = {
  title: "Why Your Oral Hygiene Matters",
  subTitle: `
  <b>
  Good hygiene care helps to:</b> <br/>
  <ul>
 <li>Prevent gum disease</li>
 <li>Stop bleeding and swollen gums</li>
<li>Reduce bad breath</li>
<li>Remove plaque and hard tartar</li>
<li>Improve overall health</li>
<li>Protect dental work like crowns and implants</li>
</ul>

Poor gum health has been linked to heart disease, diabetes complications, pregnancy risks, and infections. Regular dental hygiene visits keep your smile and your health protected.
  `,
  img: "https://res.cloudinary.com/dyc90cwdt/image/upload/v1770294349/pexels-cedric-fauntleroy-4269681_gdox0a.jpg",
};

const VideoData = {
  sectionHeadingData: {
    title: `Oral Hygiene and Gum Care Advice  `,
  },
  services: [
    {
      title: "Informed Consent - Gum Disease Part 1",
      poster:
        "https://res.cloudinary.com/dyc90cwdt/image/upload/v1770294122/ujXVYyKLyGw-HD_1_atpl3s.jpg",
      videoSrc:
        "https://res.cloudinary.com/dv5noi9zl/video/upload/v1767880381/Informed_Consent_-_Gum_Disease_Part_1_3_-_Pav_Dental_720p_h264_rw2zwd.mp4",
    },
    {
      title: "Informed Consent - Gum Disease Part 2",
      poster:
        "https://res.cloudinary.com/dyc90cwdt/image/upload/v1770294121/BVRuNVCqgA8-HD_wkaths.jpg",
      videoSrc:
        "https://res.cloudinary.com/dv5noi9zl/video/upload/v1767880506/Informed_Consent_-_Oral_Hygiene_Instruction_-_Gum_Treatment_Part_2_3_-_Pav_Dental_720p_h264_1_qaeghb.mp4",
    },
    {
      title: "Informed Consent - Gum Disease Part 3",
      poster:
        "https://res.cloudinary.com/dyc90cwdt/image/upload/v1770294122/Do5i4-geA_Q-HD_y8gymz.jpg",
      videoSrc:
        "https://res.cloudinary.com/dv5noi9zl/video/upload/v1767880479/Informed_Consent_-_Gum_Treatment_Part_3_3_-_Pav_Dental_720p_h264_a34iav.mp4",
    },
  ],
};

const serviceData2 = {
  sectionHeadingData: {
    title: `  Our Tooth Extraction Prices    `,
  },
  services: [
    {
      title: "Simple Extraction (£95)",
      text: "This category typically includes the removal of teeth that are visible in the mouth and do not require surgical procedures. These are straightforward extractions, often involving teeth that are fully erupted and have simple root structures.",
    },
    {
      title: "Intermediate Extraction (£145)",
      text: "This involves more complex procedures than simple extractions, including removing teeth broken at the gum line or partially erupted wisdom teeth. It may require tooth sectioning or removing some overlying bone.",
    },
    {
      title: "Complex Extraction (£195)",
      text: "Complex extractions involve surgical procedures, such as removing impacted teeth or those with complicated root structures. They typically require incisions, bone removal, and sometimes sectioning the tooth into multiple parts for easier removal.",
    },
  ],
};

const heroData3 = {
  text: "Informed Consent for Tooth Extraction",
  imgSrc:
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1724354135/10_hfaljq.webp",
  videoSrc: "https://www.youtube.com/embed/-HR0hgWCNmU?si=bbRTLEVdcX9f7QuQ",
};

const serviceData = {
  sectionHeadingData: {
    title: `Our Hygiene Services`,
  },
  services: [
    {
      title: "Simple Scaling (£45)",
      text: "Removes plaque and tartar only <br><br> .",
    },
    {
      title: "Routine Scale and Polish  (£55)",
      text: "Removes plaque, tartar, and surface stains to leave teeth smooth and fresh. <br> .",
    },
    {
      title: "Deep Cleaning (£65)",
      text: "For patients with gum pockets or gum disease. Cleans below the gum line to control infection and stabilise gum health.",
    },
    {
      title: "Stain Removal and Polishing (£75)",
      text: "Helps restore natural tooth brightness and improves confidence. <br> .",
    },
  ],
};
const aboutData2 = {
  title: "Who Needs Hygiene Treatment?",
  subTitle: `
    You may need to see our hygienist if you have:
    <ul>
    <li> Bleeding gums</li>
<li>Bad breath</li>
<li> Gum swelling or tenderness</li>
<li> Stains on teeth</li>
<li>Loose teeth</li>
<li> Sensitive gums</li>
<li> Diabetes or medical conditions that affect healing</li></ul>
  Regular hygiene appointments are also essential if you wear braces, dentures, crowns, veneers, bridges, or implants.
`,
  img: "https://res.cloudinary.com/dyc90cwdt/image/upload/v1770294689/57666_1_yy4twz.jpg",
};

const faqData = {
  title: "Frequently Asked Question  ",
faqItems: [
  {
    title: "How Often Should I See the Hygienist?",
    content:
      "Most patients benefit from hygiene care every 3 to 6 months. Patients with gum disease or a higher risk of dental problems may need more frequent visits. Our dentist or hygienist will recommend the right interval for you.",
  },
  {
    title: "Does Hygiene Treatment Hurt?",
    content:
      "Hygiene treatment is usually very comfortable. If your gums are sensitive, we can apply a numbing gel to make the treatment easier and more relaxing.",
  },
  {
    title: "Is Hygiene the Same as Teeth Whitening?",
    content:
      "No. Hygiene treatment removes tartar, plaque, and surface stains, while teeth whitening is designed to lighten the natural colour of your teeth.",
  },
  {
    title: "Can Hygiene Stop Bleeding Gums?",
    content:
      "Yes. In most cases, professional cleaning combined with correct home care significantly improves bleeding gums.",
  },
  {
    title: "Is Hygiene Safe During Pregnancy?",
    content:
      "Yes. Hygiene treatment is completely safe during pregnancy and is highly recommended to maintain healthy gums and teeth.",
  },
  {
    title: "Will My Breath Improve After Hygiene Treatment?",
    content:
      "Yes. Removing bacteria and tartar from your teeth and gums significantly reduces bad breath and helps keep your mouth fresh.",
  },
],

};

const Home15 = () => {
  return (
    <div>
      <Helmet>
        <title>Oral Hygiene Services in Bradford – Pav Dental</title>
        <meta
          name="description"
          content="Boost your oral health with professional oral hygiene care at Pav Dental in Bradford. Book preventive cleaning, gum health support, and expert dental guidance."
        />
      </Helmet>
      <div className="st-height-b125 st-height-lg-b0" id="home"></div>
      <Hero15 data={heroData} />
      <About data={aboutData} />

      <VideoSlider data={VideoData} varient="st-type1" />

      {/* <ServiceSlider data={serviceData2} varient="st-type1" />
      <Hero24 data={heroData3} /> */}

      <ServiceSlider data={serviceData} varient="st-type1" />
      <AboutD data={aboutData2} />
      <div className="st-height-b120 st-height-lg-b80" id="home"></div>
      <Accordion data={faqData} />
      <Contact />
      <BookButton />
    </div>
  );
};

export default Home15;
