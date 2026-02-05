import React from "react";
import About from "../../Components/About/AboutAH";
import AboutD from "../../Components/About/AboutD";
import Hero15 from "../../Components/Hero/Hero15";
import Contact from "../../Components/Contact/Contact";
import Hero24 from "../../Components/Hero/Hero24";
import ServiceSlider from "../../Components/Slider/ServiceSlider";
import Accordion from "../../Components/Accordion/Accordion2";
import BookButton from "../../Components/BookButton/BookButton";

const heroData = {
  subTitle: "",
  title: "Pav Dental Advanced Root Canal Care",
  text: "<br/>Explore our transparent root canal pricing for basic, intermediate, and advanced treatments, along with essential information to help you make an informed decision about your dental care.<br/> <br/>  ",
  imgSrc:
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1718455041/Screenshot_2024-06-15_183629_o18ipx.png",
  videoSrc: "https://www.youtube.com/embed/AQ3HzPnwFmY",
};



const serviceData2 = {
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




const heroData3 = {
  text: "Informed Consent for Root Canal Treatment",
  imgSrc:
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1724354058/istockphoto-1336830204-640x640_grta45.jpg",
  videoSrc: "https://www.youtube.com/embed/Bqczi3V3D3U?si=65sEV9Y9W0-ripsM",
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
  title: "Frequently Asked Questions",
  faqItems: [
    {
      title: "What is a root canal treatment?",
      content:
        "A root canal is a dental procedure that removes infected or damaged pulp from inside the tooth, cleans the canals, and seals them to prevent further infection.",
    },
    {
      title: "Why do I need a root canal?",
      content:
        "You may need a root canal if the tooth pulp is infected or inflamed due to deep decay, cracks, repeated dental procedures, or trauma. Symptoms often include severe pain, sensitivity, or swelling.",
    },
    {
      title: "Is a root canal painful?",
      content:
        "Modern root canal treatments are generally not painful. Local anesthesia ensures comfort during the procedure. Mild soreness afterward is normal and temporary.",
    },
    {
      title: "What happens during the root canal procedure?",
      content:
        "The dentist numbs the area, removes the infected pulp, cleans and shapes the canals, and fills them with a biocompatible material. A crown may be recommended afterward for protection.",
    },
    {
      title: "How long does a root canal take?",
      content:
        "Most root canals take 45–90 minutes depending on the complexity and number of canals. Some cases require multiple visits.",
    },
    {
      title: "What should I expect after the procedure?",
      content:
        "Mild discomfort, sensitivity, or swelling is normal for a few days. Pain relief medication is usually effective, and most patients return to normal activities quickly.",
    },
    {
      title: "How should I care for my tooth after a root canal?",
      content:
        "Avoid chewing on the treated side until a crown is placed. Maintain good oral hygiene and follow your dentist’s instructions for pain management and care.",
    },
    {
      title: "What are the risks or complications?",
      content:
        "Possible complications include persistent infection, missed canals, or fractures. In rare cases, retreatment or additional procedures may be needed.",
    },
    {
      title: "Is a crown necessary after a root canal?",
      content:
        "For back teeth or teeth with significant damage, a crown is highly recommended to restore strength and prevent fractures.",
    },
    {
      title: "How long does a root canal last?",
      content:
        "With proper care and restoration, a root canal-treated tooth can last for many years, often for a lifetime.",
    },
  ],
};

const Home15 = () => {
  return (
    <div>
      <div className="st-height-b125 st-height-lg-b0" id="home"></div>
      <Hero15 data={heroData} />
      <ServiceSlider data={serviceData2} varient="st-type1" />
      <Hero24 data={heroData3} />
      <AboutD data={aboutData2} />
      <div className="st-height-b120 st-height-lg-b80" id="home"></div>
      <Accordion data={faqData} />
      <Contact />
      <BookButton/>

    </div>
  );
};

export default Home15;
