import React from "react";
import Hero3 from "../../Components/Hero/Hero3";
import About from "../../Components/About/AboutB";
import Funfact from "../../Components/Funfact/Funfact3";
import Accordion from "../../Components/Accordion/Accordion";
import AboutCta from "../../Components/Blocks/About";
import TestimonialSlider from "../../Components/Slider/TestimonialSliderEmergency";
import AboutCta2 from "../../Components/Blocks/Emergency";
import Contact from "../../Components/Contact/Contact6";
import BookButton from "../../Components/BookButton/BookButton";
import { Helmet } from 'react-helmet-async';


const heroData = [
  {
    display: "none",
    flex: "flex",
    WhiteSubTitle:
      "<h2>Emergency Dentist</h2> <h3> Covering Bradford 24 Hours 7 days of the week  including National and Bank Holidays </h3> £45 consultation <br /> £90* out-of-hours consultation ",
    buttonTop: "ACCESSIBLE SMILES",
    buttonBottom: "Call us Now <br /> 0800 1938 786",
    sideBottom: "Book Online",
    bgImg:
      "https://res.cloudinary.com/db1i46uiv/image/upload/v1762975643/IMG_8723_nxayos.jpg",
  },
];
const aboutData2 = {
  title: "How much does it cost?    ",
  subTitle: `Consultation (include exam, X-rays and diagnosis) appointment fee:<ul><li>£45 Monday to Friday between 9am – 5pm </li><li>£90 Out of Hours – Weekends 9am – 8pm and Weekdays 5pm – 8pm</li> <li>Contact us for prices and appointments after 8pm</li>  </ul> All patients receive an individual treatment plan with clearly illustrated costs prior to undergoing emergency dental treatment. <ul><li>Tooth Extraction – from £95 </li> <li>Filling – from £95</li> <li>Antibiotics – £25 </li><li>Irrigation/cleaning of gums &/or wisdom tooth – £75 </li><li>Dry socket – £60</li><li>Accessing & dressing a tooth – from £170</li><li>Surgical drainage of abscess – £160</li><li>Recement bridge/crown/veneer – from £60 </li> <li>Re-fixing a tooth loosened by trauma – £195</li> </ul> Anyone can book an appointment online with a dentist 24 hours a day, 7 days a week. `   ,
  img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1762975823/IMG_9444_x51ikj.jpg",
};

const faqData = {
  title: 'Frequently Asked Question  ',
  faqItems: [
    {
      title: "Who are 24hr Emergency Dentist?",
      content: "We are a professional and experienced dental team that provides Emergency Dental Service covering Bradford area.",
    },
    {
      title: "What can you expect?",
      content: `Accidents and sudden issues can be dental nightmares. Patients ill be seen on the same day and as soon as possible by a Qualified Dentist & Dental nurse. 
      <br />
      <br />
      An initial diagnosis will be carried out to determine your dental emergency & we will provide you with treatment options. 
      <br />
      <br />
      <b>Whether it is a chipped tooth, a loose filling, or bad toothache, we will help so you can quickly get back to your normal self again</b>`,
    },
    {
      title: "Where is it?",
      content: "The practice is in Bradford , West Yorkshire. We are situated about 10 minutes from central Bradford, which has access routes to Leeds and surrounding cities. Leeds Road, Bradford. Or we come to you",
    },
    {
      title: "How does it work?",
      content: "Once you’ve called us or booked via our online booking system, we will get a member of our dental team to call you back within the hour. We will then arrange an emergency dental appointment with one of our Dentists.",
    },

    {
      title: "What will happen during this emergency dental appointment?",
      content: "During this dental appointment, the Dentist will do their best to treat the dental issue in one appointment. However, if this isn’t possible you may be advised to have a follow-up appointment. We will advise you on what you should do to ease the pain until you can see your dentist.",
    },
    {
      title: "I have a toothache and I’m in pain?",
      content: "If you’re experiencing pain in your teeth or mouth, please contact us at 24hr Emergency Dentist Leeds today. We offer a same-day, out-of-hours emergency dental appointments, so you should be able to see someone relatively quickly.",
    },
    {
      title: "Nervous or Anxious about seeing the dentist?",
      content: "Dental phobia exists, this can result in anxiety, panic attacks, difficulty breathing, nausea, and fainting. Our dental team have over 20 years of experience dealing with patients concerns. As we understand that avoiding or delaying treatment will have an overall impact on your oral health. Please contact us today to help with your dental emergency.",
    },
    {
      title: "Are you registering new patients?",
      content: `We only really see dental emergencies, and we always send patients back to their own registered dentist. Most dentists would be upset if we were to register the patients we have seen out of hours. 
      <br />
      <br />
      If you don’t have a dentist and want to be seen the dentist will still be able to treat any further issues however we don’t operate as normal dental practices and request you are seen every 6 months. Any time you want to book an appointment to see one of the dentists you can do so any time. Book online or Call us. The responsibility lies with you as when you want to be seen.`,
    },
    {
      title: "Some home methods to treat tooth if you cant access a dentist",
      content: `Try over the counter painkillers like paracetamol or ibuprofen. Only take the medications if you are normally ok taking them. Occasionally it will reduce the pain slightly until you can get to the dentist. This is only a temporary measure but sometimes it helps if you have no other alternative.
      <br />
      <br />
      Hot salt water mouth washes are very useful if you have a swelling or some sort of infection. Salt water is a natural anti septic and can reduce pain.`,
    },
    {
      title: "Why is tooth ache worse at night time?",
      content: `Many people suffer with dental pain at night time. A lot of the time the pain makes it unbearable to sleep. A lot of pain at night time is due to the position of you lying down, blood rushing to the head and the pain or swelling inside the tooth increase. 
      <br />
      <br />
      Before getting to this level of pain we always advise a visit to the dentist so to avoid such dilemmas. The dentist will take x rays and check which tooth is causing the pain. So many times the pain spreads top and bottom unable to locate the pain. Thus the x ray is one of the best tests to elicit where the pain is coming from.`,
    },
    {
      title: "If I go to A and E with tooth ache will they treat me?",
      content: `Unfortunately, toothache is not classed as an emergency or an accident and as it is not life-threatening, they will not be able to treat you.
        <br />
        <br />
      If you have facial swelling that is affecting your ability to breathe then we advise you to go to A and E.`,
    },
    {
      title: "How to get emergency dental treatment on the NHS?",
      content: `If you are registered with an NHS dentist you may be able to get a dentist appointment at your own dentist, however it may not be on the same day. Dental practices generally close at 5 pm so to get an NHS emergency dentist appointment may be difficult.
        <br />
        <br />
      Out of hours NHS do provide emergency appointments but have very strict criteria such as persistent bleeding and unable to breathe or swallow due to swelling.
      <br />
      <br />
      If this is the case your NHS dentist should have an alternate local number for you to call in the case of emergency.
      <br />
      <br />
      Emergency247Dentist provides private treatment and promises to see you on the same day. You can contact one of the reception staff members or book online and get an appointment immediately.`,
    },
    {
      title: "I am not registered does that matter?",
      content: `No, you don’t have to be registered with anyone to see us.`,
    },
    {
      title: "Will the dentist hurt me?",
      content: `No, the dentist and the team aim to make your experience as peaceful and enjoyable as possible. We like to take our time and make sure you are comfortable. Read our reviews no one has once complained of pain!`,
    },
    {
      title: "I’m really nervous? What can you do?",
      content: `We are an emergency dental service. So most of the time we see nervous patients. No one likes coming to the dentist. Once you speak to us on the phone we will reassure you and guarantee you won’t have to be nervous about anything. We work very relaxed and all of our patients (well most) really enjoy their time with us.`,
    },
  ],
};

const testimonialData = [
  {
    img: "images/avatar2.png",
    name: "Best Dentist I've Ever Been to",
    designation: "Executive",
    subTitle:
      "Best dentist I've ever been too, very welcoming and friendly staff, I've always had a fear of dentists but these guys were absolute brilliant made me feel very comfortable and explained what they were going to do before so I had no worries",
  },
  {
    img: "images/avatar3.png",
    name: "Excellent Practice & Great Staff",
    designation: "Biographer",
    subTitle:
      "This was my first visit at this practice, the reception staff were friendly and polite. The dentist I saw was patient with me and gave excellent aftercare advice. This made me feel reassured and relaxed. Excellent practice and great staff.",
  },
  {
    img: "images/avatar4.png",
    name: "Explained Everything Before Any Work Started.",
    designation: "UX Designer",
    subTitle:
      "I would rate this as the best dentist I have ever been to. Sonia, my dentist, made me feel really relaxed through my procedures and explained everything before any work started, so thank you.",
  },
  {
    img: "images/avatar2.png",
    name: "Professional & Compassionate",
    designation: "Executive",
    subTitle:
      "Had a lot done in one session today took nearly an hour was a male dentist don't know his name but was the best dentist I ever had.",
  }
];

const EmergencyDental = () => {
  return (
    <>
      <Helmet>
        <title>24/7 Emergency Dentist in Bradford | Book Now</title>
        <meta name="description" content="24/7 emergency dentist in Bradford offering fast pain relief and same-day care. Book your urgent appointment now for immediate dental treatment." />
      </Helmet>
      <div className="st-height-b125 st-height-lg-b80" id="home"></div>
      <Hero3 data={heroData} />
      <About data={aboutData2} />
      <Funfact />
      <Accordion data={faqData} />
      <AboutCta />
      <TestimonialSlider data={testimonialData} />
      <AboutCta2 />
      <Contact />
      <BookButton/>

    </>
  );
};

export default EmergencyDental;
