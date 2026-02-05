import React from "react";
import ServiceSlider from "../../Components/Slider/ServiceSlider";
import VideoSlider from "../../Components/Slider/VideoSlider";
import Accordion from "../../Components/Accordion/Accordion2";
import Hero10 from "../../Components/Hero/Hero5C";
import Hero15 from "../../Components/Hero/Hero23";
import Hero19 from "../../Components/Hero/Hero24";
import Hero24 from "../../Components/Hero/Hero24";
import About from "../../Components/About/AboutA";
import AboutD from "../../Components/About/AboutD";
import Contact from "../../Components/Contact/Contact";
import BookButton from "../../Components/BookButton/BookButton";
import { Helmet } from "react-helmet-async";

const heroData = {
  bgImg: "images/hero-bg.jpg",
  bgShape: "shape/hero-shape.png",
  heroImage: "https://res.cloudinary.com/db1i46uiv/image/upload/v1763028429/Picture1_ice7kw.jpg",
  
  title: [""],
};

const serviceData = {
  sectionHeadingData: {
    title: `Our White Filling Prices    `,
  },
  services: [
    {
      title: "Basic Composite (£95)",
      text: " This pricing is generally for small composite fillings, typically used for minor tooth decay or small cavities. These fillings are ideal for restoring teeth with minimal structural damage. The procedure usually involves a straightforward treatment, often completed in one visit, and covers essential restoration needs.",
    },
    {
      title: "Intermediate Composite (£145)",
      text: " Fillings are for moderate tooth decay or larger cavities, requiring detailed work. They involve extensive tooth preparation and careful shaping of the composite material. This tier includes fillings for areas with high biting force, needing durable and precise restorations for effective and long-lasting results.",
    },
    {
      title: " Advanced Composite (£195)",
      text: "  Advanced Composite Fillings are priced higher due to their complexity and materials. They treat significant decay or damage, covering multiple tooth surfaces or complex anatomy. These fillings require extensive shaping for proper bite and aesthetics, often needing time-consuming procedures or multiple visits.",
    },
  ],
};

const aboutData = {
  title: "Why General Dentistry is Important?    ",
  subTitle: `
  1. Early Diagnosis: Regular dental visits help in early detection of oral health problems like cavities and gum disease. <br/><br/>

  2. Prevention: General dentistry focuses on preventative care, which can save you from more extensive and expensive treatments down the line.<br/><br/>
  
  3. Education: Dentists not only treat but also educate patients on the best practices for oral care.<br/><br/>
  
  4. Family Care: General dentistry caters to the dental needs of the entire family, from children to seniors.<br/><br/>
  
    `,
  img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1762973762/ac55d081-8e08-44b8-85d6-a1fe35e83000_dudx9v.jpg",
};
const aboutData2 = {
  title: "Cost and Insurance    ",
  subTitle: `
  The cost of general dentistry services varies depending on the treatment and location. Many dental insurance plans cover the cost of preventative care treatments like regular check-ups and cleanings.
<br/><br/>
  <h4 className="blue">How to Choose a General Dentist </h4>
  
  Qualifications: Make sure the dentist is board-certified and has good reviews.
  <br/>
   Location: A conveniently located clinic will make regular visits easier.
  <br/>
  Services Offered: Ensure that the dental office offers the range of services you and your family may need.
  <br/>
  Insurance: Check if the dental practice accepts your insurance.
  <br/><br/> `,
  img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1762976219/Picture1_hhquoq.jpg",
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
const serviceData4 = {
  sectionHeadingData: {
    title: ` Our Root Canal Prices
 `,
  },
  services: [
    {
      title: "Basic Root Canal (£195)",
      text: "This category typically includes root canal treatments on teeth with a single root, such as front teeth (incisors and canines). These teeth usually have a straightforward root canal system, which makes the treatment less complicated and time-consuming.",
    },
    {
      title: "Intermediate Root Canal (£295)",
      text: "This pricing tier is generally for root canal treatments on premolars or teeth with two roots. The procedure in this category may be more complex than a standard root canal due to the presence of multiple roots and potentially more intricate root canal systems.",
    },
    {
      title: "Advanced Root Canal (£395)",
      text: "This is for the most complex root canal treatments, typically involving molars, which have multiple roots and a more complex root canal system. These procedures are often more time-consuming and require advanced techniques and equipment, justifying the higher price.",
    },
  ],
};

const heroData1 = {
  subTitle: "",
  title: "How Do Dental Cavities Form? <br/>",
  text: "",
  videoSrc:
    "https://www.youtube.com/embed/SiV4IhqWM3Q?si=dz9Kh7A0R3Lxnr4Z",
  imgSrc:
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1741885974/vlcsnap-2025-03-13-23h11m22s013_tfjkw1.png",
};
const heroData2 = {
  text: "Informed Consent for Root Canal Treatment",
  imgSrc:
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1724354058/istockphoto-1336830204-640x640_grta45.jpg",
  videoSrc: "https://www.youtube.com/embed/Bqczi3V3D3U?si=65sEV9Y9W0-ripsM",
};
const heroData3 = {
  text: "Informed Consent for Tooth Extraction",
  imgSrc:
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1724354135/10_hfaljq.webp",
  videoSrc: "https://www.youtube.com/embed/-HR0hgWCNmU?si=bbRTLEVdcX9f7QuQ",
};

const VideoData = {
  sectionHeadingData: {
    title: `Procedures  `,
  },
  services: [
    {
      title:
        "Tooth Cleaning with Pav Dental",
      videoSrc:
        "https://res.cloudinary.com/db1i46uiv/video/upload/v1717825180/y2mate.com_-_Revitalize_Your_Smile_The_Ultimate_Guide_to_Tooth_Cleaning_with_Pav_Dental_v720P_xjtfzc.mp4",
    },
    {
      title:
        "Tooth Crowns with Pav Dental",
      videoSrc:
        "https://res.cloudinary.com/db1i46uiv/video/upload/v1717825919/Crowning_Glory__Your_Complete_Guide_to_Tooth_Crowns_with_Pav_Dental_htve00.mp4",
    },
    {
      title:
        "Dental Bridges Procedure with Pav Dental",
      videoSrc:
        "https://res.cloudinary.com/db1i46uiv/video/upload/v1717826056/Bridging_Gaps__Understanding_3_Unit_Dental_Bridges_Procedure_with_Pav_Dental_gmwsvq.mp4",
    },
    {
      title:
        " Teeth Veneers | Pav Dental",
      videoSrc:
        "https://res.cloudinary.com/db1i46uiv/video/upload/v1717826104/utomp3.com_-_Transform_Your_Smile_Everything_You_Need_to_Know_About_Teeth_Veneers_Pav_Dental_360p_ebhj0b.mp4",
    },
    {
      title:
        " Root Canal Treatment | Pav Dental",
      videoSrc:
        "https://res.cloudinary.com/db1i46uiv/video/upload/v1717826175/utomp3.com_-_Mastering_Root_Canal_Your_Complete_Guide_to_PainFree_Dental_Care_Pav_Dental_360p_f2rugb.mp4",
    },
    {
      title:
        " Tooth Extraction  | Pav Dental",
      videoSrc:
        "https://res.cloudinary.com/db1i46uiv/video/upload/v1717826205/utomp3.com_-_Mastering_Tooth_Extraction_Your_Ultimate_Guide_to_Painless_Dental_Care_Pav_Dental_360p_spk4qm.mp4",
    },
  ],
};

const faqData = {
  title: "Frequently Asked Question  ",
  faqItems: [
    {
      id: 1,
      title: "What is general dentistry?",
      content:
        "General dentistry focuses on preventive care and treatments to maintain healthy teeth and gums. It includes regular check-ups, cleanings, fillings, root canals, extractions, and patient education on oral hygiene.",
    },
    {
      id: 2,
      title: "What services do general dentists offer?",
      content:
        "General dentists provide services like dental exams, cleanings, x-rays, fillings, crowns, bridges, root canal treatments, gum care, and sometimes orthodontic treatments like braces.",
    },
    {
      id: 3,
      title: "How often should I visit a general dentist?",
      content:
        "It's recommended to visit a dentist for check-ups and cleanings every six months. However, your dentist may suggest a different schedule based on your specific oral health needs.",
    },
    {
      id: 4,
      title:
        "What's the difference between general dentistry and specialized dentistry?",
      content:
        "General dentists provide a broad range of dental care and are your primary dental care providers. Specialists, like orthodontists or periodontists, focus on specific areas of dental health.",
    },
    {
      id: 5,
      title: "Can general dentists perform cosmetic procedures?",
      content:
        "Yes, many general dentists can perform cosmetic procedures such as teeth whitening, veneers, and bonding. However, complex cosmetic work may require a specialist.",
    },
    {
      id: 6,
      title: "What should I expect during a dental check-up?",
      content:
        "A dental check-up typically includes an examination of your teeth, gums, and mouth, dental cleanings to remove plaque and tartar, and possibly X-rays to detect underlying issues.",
    },
    {
      id: 7,
      title: "How can I maintain good oral health at home?",
      content:
        "Good oral hygiene includes brushing twice a day, flossing daily, using mouthwash, eating a balanced diet, and avoiding tobacco products. Regular dental visits are also crucial.",
    },
    {
      id: 8,
      title: "Are dental X-rays safe?",
      content:
        "Dental X-rays are safe and expose you to very low levels of radiation. However, inform your dentist if you're pregnant or have specific health concerns.",
    },
    {
      id: 9,
      title: "What is a dental emergency, and how is it handled?",
      content:
        "Dental emergencies include severe toothache, broken or knocked-out teeth, and acute gum or jaw pain. In such cases, it's important to see a dentist immediately for urgent care.",
    },
    {
      id: 10,
      title: "How are cavities treated?",
      content:
        "Cavities are treated by removing the decayed part of the tooth and filling it with materials like composite resin or amalgam.",
    },
    {
      id: 11,
      title: "What are the signs of gum disease?",
      content:
        "Signs of gum disease include red, swollen, or bleeding gums, bad breath, loose teeth, and receding gums. Early detection and treatment are crucial.",
    },
    {
      id: 12,
      title: "Can general dentists treat children?",
      content:
        "Many general dentists can treat children, and some even specialize in pediatric dentistry. It's important to find a dentist who is comfortable and experienced in treating young patients.",
    },
  ],
};

const Home10 = () => {
  return (
    <>
    <Helmet>
        <title>General Dentistry in Bradford | Trusted, Gentle & Affordable Care</title>
        <meta
          name="description"
          content="Need trusted dental care in Bradford? Our general dentistry team provides gentle, affordable treatments for every age. Book now."
        />
      </Helmet>
      <Hero10 data={heroData} />
      <Hero15 data={heroData1} />
      <ServiceSlider data={serviceData4} varient="st-type1" />
      <Hero19 data={heroData2} />

      <ServiceSlider data={serviceData} varient="st-type1" />
      <ServiceSlider data={serviceData2} varient="st-type1" />
      <Hero24 data={heroData3} />

      <ServiceSlider data={serviceData3} varient="st-type1" />
      <About data={aboutData} />
      <AboutD data={aboutData2} />
      <VideoSlider data={VideoData} varient="st-type1" />
      <Accordion data={faqData} />
      <Contact />
      <BookButton />

    </>
  );
};

export default Home10;
