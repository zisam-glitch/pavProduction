import React from "react";
import About from "../../Components/About/AboutAH";
import AboutD from "../../Components/About/AboutD";
import Hero15 from "../../Components/Hero/Hero15";
import Contact from "../../Components/Contact/Contact";
import Hero24 from "../../Components/Hero/Hero24";
import ServiceSlider from "../../Components/Slider/ServiceSlider";
import Accordion from "../../Components/Accordion/Accordion2";
import BookButton from "../../Components/BookButton/BookButton";
import { Helmet } from "react-helmet-async";
const heroData = {
  subTitle: "",
  title: "Pav Dental: Your Trusted Partner in Oral Health  ",
  text: "<br/>At Pav Dental, our experienced oral surgeons are dedicated to providing you with the highest standard of care. Utilizing the latest techniques and technologies, we ensure a comfortable and effective treatment experience.<br/> <br/>  ",
  imgSrc:
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1718455041/Screenshot_2024-06-15_183629_o18ipx.png",
  videoSrc: "https://www.youtube.com/embed/AQ3HzPnwFmY",
};


const aboutData = {
  title: "Guaranteed Tooth Extraction  Same Day Treatment",
  subTitle:
    `We understand that tooth pain can be unbearable and waiting is not an option. That’s why we guarantee same-day tooth extraction services to provide you with immediate relief. Our highly skilled dental professionals are dedicated to ensuring that your experience is as comfortable and stress-free as possible. Using the latest techniques and state-of-the-art equipment, we can quickly and safely remove the affected tooth, alleviating your pain and preventing further complications. <br/><br/>In addition to our same-day extraction services, we offer comprehensive aftercare support to help you recover swiftly and return to your daily routine with minimal disruption. Our team is always available to answer any questions and provide guidance on how to care for your mouth post-extraction. `,
  img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717238472/jonathan-borba-hl6uG9cHW5A-unsplash_hce6yq.jpg",
  avater: {
    img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717238315/New_Project_11_w7d3ls.png",
    name: "Dr. Hassan Bhojani",
    designation: "Founder & Principal Dentist",
  },
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
    title: `  Post Operative Instructions    `,
  },
  services: [
    {
      title: "Pain Management:",
      text: "- Use over-the-counter pain relievers like ibuprofen or acetaminophen as directed. \n- If prescribed pain medication, take as instructed.",
    },
    {
      title: "Swelling and Bruising:",
      text: "- Apply an ice pack to the cheek near the extraction site for 10 minutes on, then 10 minutes off, during the first 24 hours.",
    },
    {
      title: "Rest:",
      text: "- Relax for at least 24 hours after the extraction. \n- Avoid strenuous activities for 2-3 days to reduce bleeding and help the healing process.",
    },
    {
      title: "Oral Hygiene:",
      text: "- Do not rinse your mouth for the first 24 hours. \n- After 24 hours, gently rinse with warm salt water (1/2 teaspoon of salt in a cup of water) after meals and before bed.",
    },
    {
      title: "Bleeding Management:",
      text: "- Bite on a gauze pad firmly for 30-60 minutes after the extraction. \n- If bleeding continues, replace the gauze and bite down for another 30 minutes.",
    },
    {
      title: "Eating and Drinking:",
      text: "- Start with soft foods and liquids. \n- Avoid using a straw for the first few days to prevent dislodging the blood clot. \n- Avoid hot liquids and alcoholic beverages in the first 24 hours.",
    },
    {
      title: "Smoking:",
      text: "- Avoid smoking for as long as possible after the extraction, ideally for at least 48 hours.",
    },
    {
      title: "Protect the Clot:",
      text: "- Avoid spitting or rinsing forcefully. \n- Chew on the opposite side of your mouth.",
    },
    {
      title: "Medications:",
      text: "- Take any prescribed antibiotics as directed to prevent infection.",
    },
    {
      title: "Follow-Up:",
      text: "- Keep any follow-up appointments with your dentist or oral surgeon.",
    },
    {
      title: "Watch for Complications:",
      text: "- Look out for signs of infection like fever, severe pain, or swelling that worsens after a few days. Also, be aware of dry socket, a condition where the blood clot fails to develop or is dislodged, leading to delayed healing.",
    },
    {
      title: "Reminder:",
      text: "Remember, these are general guidelines. Always adhere to the specific instructions given by your healthcare provider, as they may have additional or different recommendations based on your individual case and health history.",
    },
  ],
};
const aboutData2 = {
  title: "Book Your Appointment Today",
  subTitle: `
  Don’t let tooth pain hold you back. Contact PavDental now for a consultation and experience swift, professional care that puts your needs first
  <br/><br/>
    <h4 className="blue">Why Choose PavDental? </h4>
    Experienced and Compassionate Team
   <br/>
    State-of-the-Art Facilities
    <br/>
    Patient-Centric Approach
    <br/>
    Affordable and Transparent Pricing 
    <br/><br/> `,
  img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1762977045/Gemini_Generated_Image_4xpslo4xpslo4xps_c0xg3l.png",
};

const faqData = {
  title: "Frequently Asked Question  ",
  faqItems: [
    {
      title: "Why is tooth extraction necessary?",
      content:
        "Tooth extraction is necessary when a tooth is too damaged or decayed to be repaired, when there's severe gum disease (periodontitis), for orthodontic reasons (like overcrowding), or impacted wisdom teeth.",
    },
    {
      title: "How should I prepare for a tooth extraction?",
      content:
        "Inform your dentist about any medical conditions and medications you're taking. Avoid smoking before the procedure, and arrange for someone to drive you home if you'll be sedated.",
    },
    {
      title: "What is the procedure for tooth extraction?",
      content:
        "The procedure varies depending on the tooth. Generally, the area is numbed with local anesthesia. If the tooth is impacted, an incision may be made in the gum. The tooth is then rocked back and forth to loosen it before removal.",
    },
    {
      title: "Is tooth extraction painful?",
      content:
        "You shouldn't feel pain during the extraction due to anesthesia, but you may feel pressure. Post-extraction, some discomfort and swelling are normal.",
    },
    {
      title: "What should I expect after the extraction?",
      content:
        "After the extraction, it's common to experience some bleeding, swelling, and discomfort. Your dentist will provide instructions on managing these symptoms.",
    },
    {
      title: "How should I care for my mouth after extraction?",
      content:
        "Avoid rinsing, spitting, or sucking actions for the first 24 hours. Use pain relief as advised, and apply an ice pack to reduce swelling. Eat soft foods and gradually reintroduce other foods as healing progresses.",
    },
    {
      title: "What are the potential complications of tooth extraction?",
      content:
        "Potential complications include dry socket, infection, prolonged bleeding, or damage to adjacent teeth or jawbone. Contact your dentist if you have severe pain, fever, or uncontrolled bleeding.",
    },
    {
      title: "How long does recovery take?",
      content:
        "Recovery typically takes a few days. However, it's important to avoid strenuous activity for at least 24 hours to minimize bleeding and aid the healing process.",
    },
    {
      title: "When should I follow up with my dentist?",
      content:
        "Follow up if you experience severe pain, swelling, signs of infection, or if you have any concerns. Otherwise, adhere to your dentist's recommended schedule for check-ups.",
    },
    {
      title: "Can I replace the extracted tooth?",
      content:
        "Yes, options like dental implants, bridges, or dentures can be considered to replace an extracted tooth. Discuss these options with your dentist.",
    },
  ],
};

const Home15 = () => {
  return (
    <div>
      <Helmet>
        <title>Advanced Tooth Extraction Services in Bradford | Visit now!</title>
        <meta
          name="description"
          content="Looking for expert tooth extraction in Bradford ? Our local specialists offer safe, modern and comfortable dental care."
        />
      </Helmet>
      <div className="st-height-b125 st-height-lg-b0" id="home"></div>
      <Hero15 data={heroData} />
      <About data={aboutData} />
      <ServiceSlider data={serviceData2} varient="st-type1" />
      <Hero24 data={heroData3} />

      <ServiceSlider data={serviceData} varient="st-type1" />
      <AboutD data={aboutData2} />
      <div className="st-height-b120 st-height-lg-b80" id="home"></div>
      <Accordion data={faqData} />
      <Contact />
      <BookButton/>

    </div>
  );
};

export default Home15;
