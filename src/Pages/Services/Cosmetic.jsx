import React from "react";
import ServiceSlider from "../../Components/Slider/ServiceSlider";
import VideoSlider from "../../Components/Slider/VideoSlider";
import Accordion from "../../Components/Accordion/Accordion2";
import Hero10 from "../../Components/Hero/Hero20";
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
      img: "",
    },
  ],
  title: [""],
};

const serviceData = {
  sectionHeadingData: {
    title: `Popular Cosmetic Dentistry Procedures    `,
  },
  services: [
    {
      title: "Teeth Whitening",
      text: "One of the most common and cost-effective cosmetic dentistry treatments, teeth whitening can brighten your smile in just one session."
    },
    {
      title: "Porcelain Veneers",
      text: "These are thin shells of porcelain that are custom-fitted to cover the front surface of a tooth, often used to correct uneven teeth, worn enamel, or discoloration."
    },
    {
      title: "Dental Implants",
      text: "Used to replace missing teeth, dental implants offer a long-lasting solution that looks and feels natural."
    },
    {
      title: "Dental Bonding",
      text: "This involves applying a tooth-colored resin to a tooth and hardening it with a special light. It’s a cost-effective way to repair chipped or cracked teeth."
    },
    {
      title: "Tooth Contouring",
      text: "This procedure involves reshaping the tooth by removing some of its enamel to alter its length, shape, or surface."
    }
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
  img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1763030110/Picture3_nkam3m.jpg",
};
const aboutData2 = {
  title: "Costs and Financing  ",
  subTitle: `
  The cost of cosmetic dentistry varies widely depending on the type of procedure, the expertise of the dentist, and geographic location. While many cosmetic procedures are not covered by dental insurance, financing options are often available.

  <br/><br/>
  <h4 className="blue">How to Choose a General Dentist </h4>
  
  Experience and Qualifications: Look for a dentist with specialized training and a portfolio of before-and-after cases.

<br/> Technology: Opt for a clinic that uses the latest technology for more precise and effective treatments.

<br/> Reviews and Testimonials: Customer reviews can provide valuable insights into patient satisfaction and quality of service.

<br/> Consultation: A thorough initial consultation is a good sign of a dentist’s professionalism and concern for your needs.
  <br/><br/> `,
  img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1763030129/Picture4_ncpss1.jpg",
};

const serviceData2 = {
  sectionHeadingData: {
    title: `  Our Tooth Extraction Prices    `,
  },
  services: [
    {
      title: "Simple Extraction (£140)",
      text: "This category typically includes the removal of teeth that are visible in the mouth and do not require surgical procedures. These are straightforward extractions, often involving teeth that are fully erupted and have simple root structures.",
    },
    {
      title: "Intermediate Extraction (£195)",
      text: "This involves more complex procedures than simple extractions, including removing teeth broken at the gum line or partially erupted wisdom teeth. It may require tooth sectioning or removing some overlying bone.",
    },
    {
      title: "Complex Extraction (£245)",
      text: "Complex extractions involve surgical procedures, such as removing impacted teeth or those with complicated root structures. They typically require incisions, bone removal, and sometimes sectioning the tooth into multiple parts for easier removal.",
    },
  ],
};

const serviceData3 = {
  sectionHeadingData: {
    title: ` Services Offered in General Dentistry    `,
  },
  services: [
    {
      title: "Regular Check-ups",
      text: "Routine dental check-ups are essential for maintaining good oral health. These appointments typically include a dental cleaning, X-rays, and an examination by the dentist.",
    },
    {
      title: "Dental Fillings",
      text: "Dental fillings are used to restore teeth damaged by decay back to their normal function and shape.",
    },
    {
      title: "Tooth Extractions",
      text: "Sometimes a tooth may need to be removed due to decay, disease, or crowding. General dentists can perform simple extractions.",
    },
    {
      title: "Preventative Care",
      text: "General dentistry aims to prevent oral health problems before they become severe. This includes advice on proper brushing techniques, flossing, and diet.",
    },
    {
      title: "Gum Disease Treatment",
      text: "Treatment for gum diseases like gingivitis and periodontitis is another crucial aspect of general dentistry.",
    },
    {
      title: "Dental Crowns and Bridges",
      text: "These are used to restore and replace damaged or missing teeth, improving the function and appearance of your smile.",
    },
  ],
};

const heroData1 = {
  subTitle: "",
  title: "What is Cosmetic Dentistry?  ",
  text: "<br/> Cosmetic Dentistry refers to dental work that improves the appearance of teeth, gums, and/or bite. It primarily focuses on improvement in dental aesthetics such as color, position, shape, size, and overall smile appearance.  ",
  imgSrc:
    "",
  videoSrc: "https://www.youtube.com/embed/_oIlv59bTL4",
};


const VideoData = {
  sectionHeadingData: {
    title: `Procedures   `,
  },
  services: [
    {
      title: "Tooth Cleaning with Pav Dental",
      videoSrc: "https://res.cloudinary.com/db1i46uiv/video/upload/v1717825180/y2mate.com_-_Revitalize_Your_Smile_The_Ultimate_Guide_to_Tooth_Cleaning_with_Pav_Dental_v720P_xjtfzc.mp4",
    },
    {
      title: " Tooth Crowns with Pav Dental",
      videoSrc: "https://res.cloudinary.com/db1i46uiv/video/upload/v1717825919/Crowning_Glory__Your_Complete_Guide_to_Tooth_Crowns_with_Pav_Dental_htve00.mp4",
    },
    {
      title: " Bridges Procedure with Pav Dental",
      videoSrc: "https://res.cloudinary.com/db1i46uiv/video/upload/v1717826056/Bridging_Gaps__Understanding_3_Unit_Dental_Bridges_Procedure_with_Pav_Dental_gmwsvq.mp4",
    },
    {
      title: " Teeth Veneers | Pav Dental",
      videoSrc: "https://res.cloudinary.com/db1i46uiv/video/upload/v1717826104/utomp3.com_-_Transform_Your_Smile_Everything_You_Need_to_Know_About_Teeth_Veneers_Pav_Dental_360p_ebhj0b.mp4",
    },
    {
      title: "  Pain-Free Dental Care | Pav Dental",
      videoSrc: "https://res.cloudinary.com/db1i46uiv/video/upload/v1717826175/utomp3.com_-_Mastering_Root_Canal_Your_Complete_Guide_to_PainFree_Dental_Care_Pav_Dental_360p_f2rugb.mp4",
    },
    {
      title: "Painless Dental Care | Pav Dental",
      videoSrc: "https://res.cloudinary.com/db1i46uiv/video/upload/v1717826205/utomp3.com_-_Mastering_Tooth_Extraction_Your_Ultimate_Guide_to_Painless_Dental_Care_Pav_Dental_360p_spk4qm.mp4",
    },
   
  ],
};

const faqData = {
  title: 'Frequently Asked Question  ',
  faqItems: [
    {
      title: "What is cosmetic dentistry?",
      content: "Cosmetic dentistry includes procedures that enhance the appearance of your teeth and smile. It can include teeth whitening, veneers, bonding, crowns, orthodontics, and more."
    },
    {
      title: "What are common cosmetic dental procedures?",
      content: "Common procedures include teeth whitening, dental veneers, dental bonding, dental crowns, inlays and onlays, dental implants, and orthodontic treatments."
    },
    {
      title: "How do I know if I need cosmetic dentistry?",
      content: "If you are unhappy with aspects of your smile, such as color, alignment, spacing, size, or shape of your teeth, cosmetic dentistry might be an option."
    },
    {
      title: "Is cosmetic dentistry safe?",
      content: "Yes, when performed by a qualified dentist, cosmetic dentistry is safe. However, as with any medical procedure, there are risks and benefits that should be discussed with your dentist."
    },
    {
      title: "Does cosmetic dentistry hurt?",
      content: "Many cosmetic dental procedures are painless or involve minimal discomfort. For more extensive procedures, dentists use local anesthesia to minimize pain."
    },
    {
      title: "How long do cosmetic dental procedures take?",
      content: "The duration varies depending on the procedure. Some treatments like teeth whitening can be done in one visit, while others like veneers or implants may require multiple visits."
    },
    {
      title: "How much does cosmetic dentistry cost?",
      content: "Costs vary widely based on the procedure, dentist's experience, and location. Some cosmetic procedures can be expensive, and many are not covered by dental insurance."
    },
    {
      title: "Will my insurance cover cosmetic dentistry?",
      content: "Most insurance plans do not cover cosmetic procedures if they are purely for aesthetic reasons. However, some procedures that also have restorative benefits might be partially covered."
    },
    {
      title: "How do I choose a cosmetic dentist?",
      content: "Look for a dentist with experience in cosmetic dentistry. Check their qualifications, before-and-after photos of previous patients, and reviews or testimonials."
    },
    {
      title: "How long do the results of cosmetic dentistry last?",
      content: "The longevity of results varies. For example, teeth whitening may last for several months, while veneers or implants can last for many years with proper care."
    },
    {
      title: "What are the risks associated with cosmetic dentistry?",
      content: "Risks can include sensitivity, damage to underlying teeth, and mismatched colors. It's important to discuss potential risks and complications with your dentist."
    },
    {
      title: "Can cosmetic dentistry improve oral health?",
      content: "While the primary focus is on appearance, some procedures can improve oral health. For instance, correcting misaligned teeth can make them easier to clean and reduce the risk of decay."
    }
  ],
};

const Home10 = () => {
  return (
    <>
    <Helmet>
        <title>Cosmetic Dentistry in Bradford | Book Your Consultation</title>
        <meta
          name="description"
          content="Looking for cosmetic dentistry in Bradford? Get whitening, veneers, bonding and more. Book your consultation today for a perfect smile."
        />
      </Helmet>
      <Hero10 data={heroData} />
      <Hero15 data={heroData1} />
      <ServiceSlider data={serviceData} varient="st-type1" />
      <About data={aboutData} />
      <AboutD data={aboutData2} />
      <VideoSlider data={VideoData} varient="st-type1" />
      <Accordion data={faqData} />
      <Contact />
      <BookButton/>


    </>
  );
};

export default Home10;
