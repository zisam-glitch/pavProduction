import React from "react";
import SectionHeading from "../Components/SectionHeading/SectionHeading";
import { Helmet } from 'react-helmet-async';

export default function Vacancies() {
  const vacancies = [
    {
      title: "Apprentice Nurse",
      description:
        "An apprentice nurse works under the supervision of registered nurses and other healthcare professionals to provide basic patient care and support services. This role is designed to provide hands-on experience and training for individuals pursuing a career in nursing.",
    },
    {
      title: "Registered Nurse",
      description:
        "Registered Nurse (RN) is a highly skilled healthcare professional responsible for providing and coordinating patient care in various healthcare settings. Registered Nurses assess patient health needs, develop and implement nursing care plans, and maintain medical records.      ",
    },
    {
      title: "Associate Dentist",
      description:
        "Associate Dentist is a licensed dental professional who provides comprehensive dental care to patients. They diagnose and treat dental issues, educate patients about oral health, and promote preventive dental care.",
    },
    {
      title: "Dental Therapist",
      description:
        "Dental Therapist is a licensed dental professional who works under the supervision of dentists to provide preventive and restorative dental care to patients. Dental Therapists focus on routine dental procedures, such as cleanings, fillings, and preventive treatments.",
    },
    {
      title: "Dental Hygienist",
      description:
        "Dental Hygienist is a licensed dental professional who specializes in preventive oral care. They work closely with dentists to provide dental cleanings, examine patients for signs of oral diseases, and educate patients about proper oral hygiene techniques.",
    },
    {
      title: "Vocational Training Dentist",
      description:
        "Vocational Training Dentist, also known as a Dental Resident or Dental Intern, is a licensed dental professional undergoing advanced training and education in various dental specialties.",
    },
    {
      title: "Foreign Visa and Sponsorship",
      description:
        "A Pav Dental is seeking qualified dentists from abroad and offering foreign visa sponsorship to support their relocation and employment. This position is designed to provide skilled dental professionals with an opportunity to work in a new environment, expand their expertise, and contribute to the oral health of the community.",
    },
  ];

  return (
    <>
      <Helmet>
      <title>Your Next Career Starts Here – Explore Our Open Vacancies</title>
      <meta name="description" content="Join PAV Dental and discover rewarding career opportunities. Check our open vacancies and become part of a skilled, supportive dental team." />
    </Helmet>
      <div className="st-height-b125 st-height-lg-b80" id="home"></div>
      <div className="st-height-b120 st-height-lg-b80" />
      <SectionHeading title="Vacancies" />
      <div className="st-height-b80 st-height-lg-b80" />

      <div className="grid-class container">
        {vacancies.map((vacancy, index) => (
          <div className="vacancy" key={index}>
            <h4>{vacancy.title}</h4>
            <p>{vacancy.description}</p>
            <a href="/contact-us">Apply Now</a>
          </div>
        ))}
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
    </>
  );
}
