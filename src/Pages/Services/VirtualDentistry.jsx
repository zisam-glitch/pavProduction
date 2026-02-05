import React from "react";
import Hero3 from "../../Components/Hero/Hero3";
import Funfact from "../../Components/Funfact/Funfact4";
import Accordion from "../../Components/Accordion/Accordion1";
import About from "../../Components/About/AboutC";
import BookButton from "../../Components/BookButton/BookButton";
import { Helmet } from "react-helmet-async";

const heroData = [
  {
    title: "No Appointment Or <br/> Insurance Required    ",
    flex: "none",
    buttonBottom: "Book appointment",
    bgGradient: "",
    buttonBottomLnk: "https://pavdental.setmore.com/",
    subTitle: `Affordable Healthcare Services: £35 Consultation Fee and £25 <br/>
     Prescription Cost. Quality medical advice and prescriptions <br/> at budget-friendly prices to ensure your health <br/> needs are met without breaking the bank.`,
    bgImg:
      "https://res.cloudinary.com/db1i46uiv/image/upload/v1717662518/New_Project_12_bvxjhn.png",
  },
];

const vacancies = [
  {
    title: "Step 1: Booking Your Virtual Dental Consultation",
    description:
      "Initiate your dental care journey by scheduling a video consultation via the Pav Dental app or website. Select a convenient date and time for your appointment, and await confirmation from one of our dentists. This step ensures a seamless integration of dental care into your schedule.",
  },
  {
    title: "Step 2: Establishing the Connection",
    description:
      "Upon appointment confirmation, you'll receive a link to access your video consultation. At the designated time, simply use your computer, smartphone, or tablet to click the link and start the video call. This direct line to your dentist facilitates a personal and effective consultation environment.",
  },
  {
    title: "Step 3: Engaging in the Consultation",
    description:
      "The consultation is your opportunity to voice dental concerns and undergo a virtual examination of your teeth and gums. The dentist will collaborate with you to formulate a comprehensive treatment plan. This interactive session allows for real-time questions and personalized advice, ensuring you're fully informed about your dental health options.",
  },
  {
    title: "Step 4: Post-Consultation Outcomes",
    description:
      "Following your consultation, a range of outcomes will be tailored to your specific needs, including: Professional Advice: Receive expert guidance on managing your dental health. Online Prescription: If needed, obtain prescriptions sent directly to your pharmacy. Home Visit Coordination: For cases requiring in-person care, arrange a home visit by a dental professional. Clinic Treatment Planning: Schedule an in-clinic appointment",
  },
];

const WhyPav = [
  {
    title: "Speed and Convenience",
    description:
      "With virtual dental consultations, you can access dental care from the comfort of your own home.      ",
  },
  {
    title: "Time Saving",
    description:
      "You don't have to take time off work or school to visit a dentist in person. Our Platform provides the quickest and simplest method obtaining your dental e-prescription, saving you time and effort",
  },
  {
    title: "Streamlined Prescription Management",
    description:
      "Keep all your prescriptions organized and easily accessible in one place, enabling efficient tracking and monitoring",
  },
  {
    title: "Enhanced Accuracy",
    description:
      "E-prescriptions significantly reduce the likelihood of errors, ensuring that you receive the precise medication, proper dosage, and accurate instructiosns",
  },
  {
    title: "Eco-friendly",
    description:
      "Embracing paperless e-prescriptions contributed to a greener planet by minimizing paper wast and promoting eco-concious practices.",
  },
];

const faqData = {
  title: "Frequently Asked Question  ",
  faqItems: [
    {
      title: "How do I schedule a virtual consultation with Pav Dental?",
      content:
        "To schedule a virtual consultation with Pav Dental, simply log into your account on the Pav Dental website or mobile app and select the virtual consultation option. From there, you will be able to choose a convenient time and date for your appointment",
    },
    {
      title:
        "Do I need to have any specific technology to use the virtual consultation service?",
      content:
        "You can acess the service from any device with an internet connection and a camera, such as a smartphone, tablet, or computer          .",
    },
    {
      title: "How does the virtual consultation work?",
      content:
        "The virtual consultation works by connecting you with a licensed dentist through video conferencing. The dentist will be able to see and hear you, and you will be able to see and hear the dentist. During the consultation, the dentist will assess your dental needs and discuss your treatment options.",
    },
    {
      title: "What happens after the virtual consultation?",
      content:
        "Following the virtual consultation, if deemed necessary prior to an in-person visit or primary care, the dentist will issue an electronic prescription for any required treatments or medications. This prescription will be transmitted to your preferred pharmacy, allowing you to conveniently retrieve it.",
    },
    {
      title:
        "How long does it take to receive a prescription after the virtual consultation?",
      content:
        "After your virtual consultation with the dentist, they will promptly e-file your prescription with your preferred pharmacy. Its availability to retrieve from your preferred pharmacy may depend on their stock and business hours.",
    },
    {
      title: "How much does a prescription cost?",
      content: "Flat rate £25.",
    },
    {
      title: "What is a virtual video consultation?",
      content:
        "A virtual video dental consultation is a way for you to connect with a dentist via video call. During the consultation, you can discuss your oral health concerns and treatment plan, and get any questions answered.",
    },
    {
      title: "How do I book a virtual video consultation?",
      content:
        "You can book a virtual video dental consultation through Pav Dental's platform, either as a subscriber or on a pay-as-you-go basis. Simply select the type of appointment you need, choose a date and time, and you will be connected with a qualified dentist.",
    },
    {
      title:
        "What type of servies can I receive during a virtual video dental consultation?",
      content:
        "During a virtual video dental consultation, you can receive a wide range of services, including preventive care, smile correction, night guards, remineralization trays, sleep apnea devices, electronic prescriptions, free specialist referrals, and more.",
    },
    {
      title:
        "What equipment do I need for a virtual video dental consultation?",
      content:
        "All you need for a virtual video dental consultation is a device with a camera, such as a smartphone, tablet, or computer, and a reliable internet connection.",
    },
    {
      title:
        "Can I receive a diagnosis and treatment plan during a virtual video dental consultation?",
      content:
        "Yes, you can receive a diagnosis and treatment plan during a virtual video dental consultation. Your dentist will assess your oral health, answer any questions you have, and provide you with a personalized treatment plan.",
    },
    {
      title:
        "How long does a virtual video dental consultation typically last?",
      content:
        "Virtual video dental consultations typically last 30 minutes. You will have ample time to discuss your oral health concerns and receive a diagnosis and treatment plan from your dentist.",
    },
  ],
};
const aboutData = {
  title: "Registration Process.    ",
  subTitle: `The process of signing up for Pav Dental video consultation service is  quick, short, and easy.
    Signing up for Pav Dental virtual video consultation service is quick, short, and easy.
    The process involves providing basic information such as name, email, phone number, gender, address, health history, and dental history.
    This information is used to evaluate the patient before connecting them with a provider for the consultation.
    The entire process is designed to be user-friendly and convenient, making it easy for patients to access the service and get the dental care they need`,
  img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717608180/pexels-tima-miroshnichenko-5355895_bpmccr.jpg",
};
const VirtualDentistry = () => {
  return (
    <>
    <Helmet>
        <title>Virtual Dental Consultation in Bradford – Book Your Dentist Now</title>
        <meta
          name="description"
          content="Pav Dental offers virtual dental consultations in Bradford. Speak to expert dentists online for quick advice, treatment guidance, and stress-free care."
        />
      </Helmet>
      <div className="st-height-b125 st-height-lg-b80" id="home"></div>
      <Hero3 data={heroData} />

      <div className="st-height-b120 st-height-lg-b80" />
      <h2 className="blue center">How Online Presription Service Works?</h2>
      <div className="st-height-b80 st-height-lg-b40" />
      <Funfact />

      <div className="st-height-b120 st-height-lg-b80" />
      <h2 className="blue center">How it works?</h2>
      <div className="st-height-b80 st-height-lg-b40" />
      <div className="grid-class container">
        {vacancies.map((vacancy, index) => (
          <div className="vacancy" key={index}>
            <h4>{vacancy.title}</h4>
            <p>{vacancy.description}</p>
          </div>
        ))}
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
      <h2 className="blue center">
        Why you should choose PavDental Virtual Dentist?
      </h2>
      <div className="st-height-b60 st-height-lg-b80" />
      <div className="container">
        <div className="row jcenter ">
          {WhyPav.map((WhyPav, index) => (
            <div className="col-lg-4 margin-g">
              <div className="vc " key={index}>
                <h4>{WhyPav.title}</h4>
                <p>{WhyPav.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="st-height-b120 st-height-lg-b80" />

      <Accordion data={faqData} />
      <About data={aboutData} />
      <BookButton />
    </>
  );
};

export default VirtualDentistry;
