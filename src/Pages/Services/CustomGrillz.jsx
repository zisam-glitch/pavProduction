import React from "react";
import ServiceSlider from "../../Components/Slider/ServiceSlider";
import VideoSlider from "../../Components/Slider/VideoSlider";
import Accordion from "../../Components/Accordion/Accordion2";
import Hero10 from "../../Components/Hero/Hero22";
import Hero15 from "../../Components/Hero/Hero21";
import About from "../../Components/About/AboutA";
import AboutD from "../../Components/About/AboutD";
import Contact from "../../Components/Contact/Contact";
import BookButton from "../../Components/BookButton/BookButton";
import { Helmet } from "react-helmet-async";

const heroData = {
  bgImg: "images/hero-bg.jpg",
  bgShape: "shape/hero-shape.png",
  sliderImages: [
    {
      img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717836792/Untitled_design_13_wixltt.png",
    },
  ],
  title: [""],
};

const serviceData = {
  sectionHeadingData: {
    title: `Custom Grillz Procedures    `,
  },
  services: [
    {
      title: "Gold Grillz: Timeless Luxury",
      text: "Our gold grillz exude classic elegance. Whether you prefer yellow, white, or rose gold, we offer a variety of karat options to match your taste. Gold grillz are perfect for adding a touch of timeless sophistication to your smile.",
    },
    {
      title: "Silver Grillz: Sleek and Modern",
      text: "Opt for the sleek appeal of silver grillz. Known for their modern and versatile look, silver grillz are a popular choice for those seeking a chic, understated style that complements any outfit or occasion.",
    },
    {
      title: "Diamond Grillz: Dazzling Brilliance",
      text: "Elevate your smile with the ultimate statement of luxury - diamond grillz. Our diamonds are meticulously set to maximize sparkle and impact, ensuring your smile catches every light and eye in the room.",
    },
    {
      title: "Perfect Fit, Guaranteed",
      text: "Comfort is key. Our grillz are custom-made to fit your teeth flawlessly, ensuring maximum comfort without compromising on style",
    },
    {
      title: "Shine in Your Unique Way",
      text: "Ready to create your signature grillz? Contact Pav Dental today for a consultation. Our experts are excited to help you design a piece that's as unique as you are.",
    },
    {
      title: "Customization at Its Finest",
      text: "Mix and match metals and gems for a truly unique creation. From fully iced-out designs to subtle accents, we tailor each piece to your specifications. Our expert team is dedicated to bringing your vision to life with precision and flair.",
    },
  ],
};

const aboutData = {
  title: "Benefits of Cosmetic Dentistry  ",
  subTitle: `
  1. Enhanced Appearance: The most obvious benefit is a more attractive smile. <br/><br/>

  2. Boosted Confidence: A better smile often leads to increased self-esteem and confidence.<br/><br/>
  
  3. Improved Oral Health: Some procedures can help improve your oral health by making cleaning easier.<br/><br/>
  
  4. Long-Lasting Results: Many cosmetic dentistry procedures offer long-term or permanent solutions.<br/><br/>
  
  5. Wider Range of Options: There are treatments available for almost every aesthetic issue you might have with your teeth.<br/><br/>
  
    `,
  img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717837906/female-patient-having-procedure-done-dentist_vnbq13.jpg",
};
const aboutData2 = {
  title: "One Year Guarantee  ",
  subTitle: `
  We stand by our craftsmanship. All our grillz come with a 1-year guarantee, ensuring your satisfaction and peace of mind.
  <br/><br/>
  <h4 className="blue">Why Choose Pav Dental Grillz?  </h4>
  
  Worldwide Reach:No matter your location, our grillz are just a scan away.
  <br/> Expert Craftsmanship:With attention to detail and quality, we create pieces that are as unique as you.
  <br/> Personalized Experience:From design to delivery, your preferences are our priority.
  <br/> Peace of Mind:Our 1-year guarantee means your investment is protected.
  <br/><br/> `,
  img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717839526/yellow-gold-grillz-los-angeles_1400x_bofp0n.webp",
};

const heroData1 = {
  subTitle: "",
  title: "Tailored Elegance: Gold, Silver, and Diamond Grillz  ",
  text: "<br/> At Pav Dental, we believe in a personalized approach to dental aesthetics. Our custom grillz are more than just accessories; they are a reflection of your individual style and flair. Choose from gold, silver, and diamond options to create a look that's uniquely yours.  ",
  imgSrc: "",
  videoSrc: "https://www.youtube.com/embed/_oIlv59bTL4",
};

const heroData2 = {
  subTitle: "",
  title: "A Dazzling Smile, Just a Click Away!    ",
  text: "<br/> At Pav Dental, we believe in making luxury accessible. That's why we're thrilled to offer our exclusive grillz with worldwide delivery. No matter where you are, you can have custom-crafted, dazzling grillz delivered right to your doorstep. ",
  imgSrc: "",
  videoSrc: "https://www.youtube.com/embed/_oIlv59bTL4",
};

const VideoData = {
  sectionHeadingData: {
    title: `Educational Videos    `,
  },
  services: [
    {
      title:
        "Revitalize Your Smile: The Ultimate Guide to Tooth Cleaning with Pav Dental",
      videoSrc:
        "https://res.cloudinary.com/db1i46uiv/video/upload/v1717825180/y2mate.com_-_Revitalize_Your_Smile_The_Ultimate_Guide_to_Tooth_Cleaning_with_Pav_Dental_v720P_xjtfzc.mp4",
    },
    {
      title:
        "Crowning Glory: Your Complete Guide to Tooth Crowns with Pav Dental",
      videoSrc:
        "https://res.cloudinary.com/db1i46uiv/video/upload/v1717825919/Crowning_Glory__Your_Complete_Guide_to_Tooth_Crowns_with_Pav_Dental_htve00.mp4",
    },
    {
      title:
        "Bridging Gaps: Understanding 3 Unit Dental Bridges Procedure with Pav Dental",
      videoSrc:
        "https://res.cloudinary.com/db1i46uiv/video/upload/v1717826056/Bridging_Gaps__Understanding_3_Unit_Dental_Bridges_Procedure_with_Pav_Dental_gmwsvq.mp4",
    },
    {
      title:
        "Transform Your Smile: Everything You Need to Know About Teeth Veneers | Pav Dental",
      videoSrc:
        "https://res.cloudinary.com/db1i46uiv/video/upload/v1717826104/utomp3.com_-_Transform_Your_Smile_Everything_You_Need_to_Know_About_Teeth_Veneers_Pav_Dental_360p_ebhj0b.mp4",
    },
    {
      title:
        " Mastering Root Canal: Your Complete Guide to Pain-Free Dental Care | Pav Dental",
      videoSrc:
        "https://res.cloudinary.com/db1i46uiv/video/upload/v1717826175/utomp3.com_-_Mastering_Root_Canal_Your_Complete_Guide_to_PainFree_Dental_Care_Pav_Dental_360p_f2rugb.mp4",
    },
    {
      title:
        "Mastering Tooth Extraction: Your Ultimate Guide to Painless Dental Care | Pav Dental",
      videoSrc:
        "https://res.cloudinary.com/db1i46uiv/video/upload/v1717826205/utomp3.com_-_Mastering_Tooth_Extraction_Your_Ultimate_Guide_to_Painless_Dental_Care_Pav_Dental_360p_spk4qm.mp4",
    },
  ],
};

const faqData = {
  title: "Frequently Asked Question  ",
  faqItems: [
    {
      title: "What is cosmetic dentistry?",
      content:
        "Cosmetic dentistry includes procedures that enhance the appearance of your teeth and smile. It can include teeth whitening, veneers, bonding, crowns, orthodontics, and more.",
    },
    {
      title: "What are common cosmetic dental procedures?",
      content:
        "Common procedures include teeth whitening, dental veneers, dental bonding, dental crowns, inlays and onlays, dental implants, and orthodontic treatments.",
    },
    {
      title: "How do I know if I need cosmetic dentistry?",
      content:
        "If you are unhappy with aspects of your smile, such as color, alignment, spacing, size, or shape of your teeth, cosmetic dentistry might be an option.",
    },
    {
      title: "Is cosmetic dentistry safe?",
      content:
        "Yes, when performed by a qualified dentist, cosmetic dentistry is safe. However, as with any medical procedure, there are risks and benefits that should be discussed with your dentist.",
    },
    {
      title: "Does cosmetic dentistry hurt?",
      content:
        "Many cosmetic dental procedures are painless or involve minimal discomfort. For more extensive procedures, dentists use local anesthesia to minimize pain.",
    },
    {
      title: "How long do cosmetic dental procedures take?",
      content:
        "The duration varies depending on the procedure. Some treatments like teeth whitening can be done in one visit, while others like veneers or implants may require multiple visits.",
    },
    {
      title: "How much does cosmetic dentistry cost?",
      content:
        "Costs vary widely based on the procedure, dentist's experience, and location. Some cosmetic procedures can be expensive, and many are not covered by dental insurance.",
    },
    {
      title: "Will my insurance cover cosmetic dentistry?",
      content:
        "Most insurance plans do not cover cosmetic procedures if they are purely for aesthetic reasons. However, some procedures that also have restorative benefits might be partially covered.",
    },
    {
      title: "How do I choose a cosmetic dentist?",
      content:
        "Look for a dentist with experience in cosmetic dentistry. Check their qualifications, before-and-after photos of previous patients, and reviews or testimonials.",
    },
    {
      title: "How long do the results of cosmetic dentistry last?",
      content:
        "The longevity of results varies. For example, teeth whitening may last for several months, while veneers or implants can last for many years with proper care.",
    },
    {
      title: "What are the risks associated with cosmetic dentistry?",
      content:
        "Risks can include sensitivity, damage to underlying teeth, and mismatched colors. It's important to discuss potential risks and complications with your dentist.",
    },
    {
      title: "Can cosmetic dentistry improve oral health?",
      content:
        "While the primary focus is on appearance, some procedures can improve oral health. For instance, correcting misaligned teeth can make them easier to clean and reduce the risk of decay.",
    },
  ],
};

const Home10 = () => {
  return (
    <>
    <Helmet>
        <title>Custom Grillz Dentist in Bradford | Book  us now!</title>
        <meta
          name="description"
          content="Get custom gold and diamond grillz designed by expert dentists in Bradford . Premium quality, perfect fit—book your unique grillz design today."
        />
      </Helmet>
      <Hero10 data={heroData} />
      <Hero15 data={heroData1} />
      <ServiceSlider data={serviceData} varient="st-type1" />
      <AboutD data={aboutData2} />
      <Hero15 data={heroData2} />
      <Contact />
      <BookButton/>

    </>
  );
};

export default Home10;
