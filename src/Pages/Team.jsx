// Team.js
import React, { useState, useEffect } from "react";
import SectionHeading from "../Components/SectionHeading/SectionHeading";
import parser from "html-react-parser";
import { Helmet } from 'react-helmet-async';

const team = [
  {
    img: "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764609933/1000025958_6_sysl72.jpg",
    name: "Aboo Bhojani",
    designation: "Director & Dental Engineer",
    bio: "Aboo Bhojani serves as Director and Dental Engineer at Pav Dental, bringing together technical expertise and financial governance. With a professional background as a former Tax Inspector and advanced Avensys certification in dental engineering, Aboo plays a vital role in ensuring Pav Dental operates with precision, transparency, and full compliance — both clinically and financially.",
    education:
      "Aboo’s experience spans the public and healthcare sectors. His time as a Tax Inspector with HMRC provided him with a deep understanding of taxation law, financial accountability, and auditing processes. This experience directly informs his role at Pav Dental, where he oversees the clinic’s compliance with HMRC regulations, including payroll systems, VAT submissions, expense management, and corporation tax filings. Complementing his financial expertise, Aboo also completed the Avensys Dental Engineering course, equipping him with practical skills in maintaining, testing, and certifying dental equipment under HTM and CQC guidelines.",
    specializations: [
      "Overseeing HMRC compliance, tax returns, and payroll accuracy",
      "Managing financial governance and business reporting for Mars Purifier Ltd",
      "Supervising dental equipment maintenance and certification (autoclaves, compressors, suction systems)",
      "Ensuring full adherence to CQC, HTM 01-05, and infection control standards",
      "Supporting the Registered Manager in audits, risk assessments, and quality assurance",
    ],
    specializationstitle: "Responsibilities",
    philosophy:
      "Integrity and compliance are the backbone of sustainable healthcare. My goal is to ensure Pav Dental operates to the highest standard — clinically, technically, and financially — with full accountability to our patients and regulators.",
    qualifications: [
      "Avensys Biomedical & Dental Engineering Course (Completed)",
      "Former HMRC Tax Inspector",
      "Certified in Health & Safety, Infection Control, and Equipment Maintenance.",
    ],
    qualificationstitle: "Qualifications and training",
  },
  {
    img: "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764609933/1000025959_5_du0uls.jpg",
    name: "Dr Hassan Bhojani",
    designation: "Principal Dentist & Registered Manager",
    bio: "GDC: 262970<br />  Hassan leads Pav Dental’s clinical standards and safety systems. With a strong background in urgent dental care and complex extractions, he focuses on swift pain relief and long-term oral health planning. Hassan is meticulous about infection control, radiographic safety, and patient consent, ensuring every patient understands their options.",
    place:
      "Pav Dental, 786 Leeds Road, Bradford, BD3 9TY Special interests: Urgent dental care, oral surgery (simple & complex extractions), restorative dentistry, dento-alveolar trauma, anxious patient care",
    qualifications: [
      "MDDr, Charles University in Prague – First Faculty of Medicine (2016)",
      "Postgraduate Diploma in Restorative and Aesthetic Dentistry, Dominic Hassall Training Institute (Completed 2019)",
      "Enrolled in MSc Oral Surgery, University of Central Lancashire (UCLan), starting September 2026",
      "GDC-registered dentist (No. 262970)",
    ],
    qualificationstitle: "Qualifications and membership",
    clinicalscope:
      "Emergency & routine dentistry, extractions (simple/complex), I&D of abscesses, restorative, crowns/bridges, whitening, urgent endodontic care (stabilisation)",
    date: "Mon–Sun (urgent care rota), routine by appointment",
    language: "English (fluent) ",
    contact: "Book with Dr Hassan — 0800 1938 786",
  },
  {
    img: "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764609934/1000025960_4_lhingy.jpg",
    name: "Dr Cosimo Meucci",
    designation: "Implant Dentist",
    bio: "Dr Cosimo Meucci is Pav Dental’s visiting implantologist, providing patients with advanced dental implant care and surgical expertise. With extensive experience in implant placement, bone grafting, and full-mouth rehabilitation, Dr Meucci combines surgical precision with a patient-focused approach to achieve long-lasting, natural results.",
    education: "Dr Meucci qualified as a dentist in Italy and later advanced his training in oral implantology and restorative dentistry through postgraduate education in the UK. His calm, methodical approach and deep understanding of bone and soft-tissue management make him an invaluable part of Pav Dental’s multidisciplinary team.",
    specializationstitle: "Special interests",
    specializations: [
      "Dental implant placement and restoration",
      "Bone grafting and sinus lift procedures",
      "Full-arch and All-on-X implant rehabilitation",
      "Digital implant planning and guided surgery",
      "Management of failing or missing teeth",
    ],
    philosophy:
    "Every patient deserves a confident smile that feels and functions naturally. I focus on precision, comfort, and clear communication at every stage of implant treatment.",
    qualifications: [
      "DDS, University of Valencia, Spain",
      "MSc in Implantology, Spain",
      "GDC-registered dentist",
    ],
    qualificationstitle: "Qualifications and membership",
    date: "Fridays and select Saturdays (by referral and appointment)",
    language: "English, Italian",
    contact: "Book an implant consultation — 0800 1938 786 or hello@pavdental.com",
  },

  {
    img: "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764609934/IMG_20251017_002435_vldvlr.jpg",
    name: "Raheela Shafiq",
    designation: "Compliance Manager",
    bio: "Raheela Shafiq leads compliance and governance at Pav Dental. With a strong focus on regulatory standards, risk management, and patient safety, she ensures that every process—from clinical care to data management—meets legal, ethical, and industry benchmarks.",
    education:
      "Raheela has experience in compliance, audit, or healthcare quality assurance.",
    specializations: [
      "Overseeing CQC, HTM, and dental regulatory compliance",
      "Managing GDPR, data protection, and patient confidentiality protocols",
      "Liaising with auditors, external regulators, and ensuring statutory adherence",
      "Conducting internal audits, risk assessments, and corrective action tracking",
      "Delivering staff training in compliance, safeguarding, infection control, health & safety",
      "Handling incident investigations, complaints review, and policy updates",
      "Keeping protocols and SOPs up to date with regulatory changes",
    ],
    specializationstitle: "Key Responsibilities",
    values: "Compliance is more than rules — it’s a promise to our patients that we operate with integrity, accountability, and excellence every day.",
    qualifications: [
      "Diploma in Business management",
      "Certification in Compliance, Risk Management, or Regulatory Affairs",
      "GDPR / Data Protection certification",
      "Training in safeguarding, health & safety, and quality systems",
    ],
    qualificationstitle: "Qualifications and training",
    date: "Monday – Friday",
    language: "English, Urdu",
    contact: "hello@pavdental.com",
  },


  {
    img: "https://res.cloudinary.com/dyc90cwdt/image/upload/v1770291105/WhatsApp_Image_2025-12-10_at_01.17.00_0d39e521_t4h6a4_uzgsjg.jpg",
    name: "Waleed Javed",
    designation: "Practice Manager",
    bio: "Waleed Javed brings a strong blend of technical expertise, healthcare knowledge and leadership experience to his role at Pav Dental. His professional qualifications include a First Class Degree in Software Engineering, CCNA qualification, Level 3 Diploma in Health and Social Care, Level 5 Diploma in Leadership and Management for Adult Care, Level 3 Award in Emergency First Aid at Work, Level 3 Safeguarding Adults, GDPR and Data Protection Certification, and Infection Prevention and Control Certification.",
    specializationstitle: "Key Areas of Focus",
    specializations: [
      "Providing exceptional patient care and communication",
      "Leading and supporting the clinical, administrative and reception teams",
      "Implementing digital systems to improve efficiency and patient experience",
      "Overseeing compliance and maintaining CQC standards",
      "Managing practice operations, workflow and quality assurance",
      "Driving continuous improvement across all areas of the practice",
    ],
    qualificationstitle: "Professional Qualifications",
    qualifications: [
      "First Class Degree in Software Engineering",
      "CCNA qualification",
      "Level 3 Diploma in Health and Social Care",
      "Level 5 Diploma in Leadership and Management for Adult Care",
      "Level 3 Award in Emergency First Aid at Work",
      "Level 3 Safeguarding Adults",
      "GDPR and Data Protection Certification",
      "Infection Prevention and Control Certification",
    ],
    date: "Monday–Friday",
    language: "English, Urdu",
    contact: "hello@pavdental.com",
    philosophy: "At Pav Dental, the mission is simple: to deliver exceptional dental care that is accessible, comfortable and supported by innovation. The Practice Manager is proud to lead a team that puts patients at the heart of everything they do.",
  },

  {
    img: "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764609933/1000025961_2_bau1qy.jpg",
    name: "Uwais Ullah",
    designation: "Trainee Dental Nurse",
    bio: "Uwais is currently training as a dental nurse and is an integral part of the Pav Dental team. His calm and focused approach helps ensure every procedure runs smoothly and safely. Under the supervision of Dr. Hassan Bhojani, Uwais assists in clinical procedures, maintains infection control standards, and supports patients throughout their treatment journey.",
    specializationstitle: "What Uwais helps with",
    specializations: [
      "Chairside assistance during dental treatments and surgeries",
      "Preparing and sterilising instruments in compliance with HTM 01-05",
      "Maintaining surgery cleanliness and patient comfort",
      "Recording treatment notes and supporting digital workflows",
      "Assisting with stock management and clinical setup",
    ],
    values: "Uwais is passionate about learning and providing the highest standard of patient care. He brings enthusiasm, reliability, and a strong commitment to developing his clinical skills within Pav Dental’s patient-centred environment.",
    date: "Monday – Saturday",
    language: "English, Urdu",
    contact: "Support queries — hello@pavdental.com",
  },

  {
    img: "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764609934/1000025962_3_oyk1dp.jpg",
    name: "Haris Bhojani",
    designation: "Dental Assistant & Clinical Support",
    bio: "Haris plays a key role in supporting the smooth daily operation of Pav Dental’s clinical services. He assists with patient preparation, treatment coordination, and maintains the highest standards of cleanliness and efficiency in every procedure. Haris is known for his friendly manner, professionalism, and commitment to patient comfort.",
    specializationstitle: "What Haris helps with",
    specializations: [
      "Assisting the dentist during treatments and consultations",
      "Preparing instruments, materials, and equipment before each procedure",
      "Ensuring surgeries meet strict infection control and HTM 01-05 standards",
      "Supporting patient flow, appointment readiness, and digital note entry",
      "Helping new patients feel at ease before treatment",
    ],
    qualificationstitle: "Training & development",
    qualifications: [
      "Ongoing in-practice dental assisting training",
      "Regular CPD in infection prevention, medical emergencies, and radiography safety",
    ],
    values: "Haris believes in creating a calm, reassuring environment for patients and takes pride in helping the team deliver seamless, high-quality care.",
    date: "Monday – Saturday",
    language: "English, Urdu",
    contact: "Support or clinical assistance — hello@pavdental.com",
    
  },
  {
    img: "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764609934/1000025964_c1r8dl.jpg",
    name: "Sayed Shohag Rahman",
    designation: "Marketing Manager",
    bio: "Sayed oversees Pav Dental’s communications, website, seo and community outreach. He makes booking simple, keeps patients informed about offers and late-opening slots, and ensures our messages are clear and accessible",
    specializationstitle: "What Sayed handles",
    specializations: [
      "Website, social media, seo and patient information materials",
      "Promotions, membership plan comms, referral campaigns",
      "Brand consistency, photography/graphics coordination",
      "Patient feedback surveys and service improvement loops",
    ],
    date: "Mon–Fri (with campaign monitoring out of hours)",
    language: "English, Bangla",
    contact: "hello@pavdental.com (or preferred alias)",
  },
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (isDrawerOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      // Prevent scrolling
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        // Re-enable scrolling and restore scroll position when drawer closes
        const scrollY = document.body.style.top;
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      };
    }
  }, [isDrawerOpen]);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setIsDrawerOpen(true);
  };

  const closeDrawer = (e) => {
    e.stopPropagation();
    setIsDrawerOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (
      e.target.classList.contains("drawer-overlay") ||
      e.target.classList.contains("team-drawer")
    ) {
      closeDrawer(e);
    }
  };

  return (
    <>
    <Helmet>
      <title>Meet Our Expert Dental Team – Your Smile Specialists</title>
      <meta name="description" content="Meet our skilled dental team—trusted smile specialists offering expert, caring, and professional dental treatment in Bradford." />
    </Helmet>
      <div className="st-height-b125 st-height-lg-b80" id="home"></div>
      <div className="st-height-b60 st-height-lg-b60" />

      <SectionHeading
        title="Dentists & Staff"
        subTitle="We have a dedicated team consisting of highly skilled dentists and staff who works <br/> relentlessly to preserve your happy smile."
      />
      <div className="st-height-b60 st-height-lg-b60" />

      <div className="grid-class-4 container">
        {team.map((member, index) => (
          <div
            className="team-member"
            key={index}
            onClick={() => handleMemberClick(member)}
            style={{ cursor: "pointer" }}
          >
            <img src={member.img} className="image-fluid" alt={member.name} />
            <h4>{member.name}</h4>
            <p>{parser(member.designation)}</p>
          </div>
        ))}
      </div>

      {/* Drawer Component */}
      <div
        className={`team-drawer ${isDrawerOpen ? "open" : ""}`}
        onClick={handleOverlayClick}
      >
        <div className="drawer-overlay"></div>
        <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={closeDrawer}>
            ×
          </button>
          {selectedMember && (
            <div className="member-details">
              <div className="member-detail-grid">
                <img
                  src={selectedMember.img}
                  alt={selectedMember.name}
                  className="member-detail-image"
                />
                <div>
                  <h2>{selectedMember.name}</h2>
                  <div className="designation">
                    {parser(selectedMember.designation)}
                  </div>
                  <div className="">
                    <p>{parser(selectedMember.bio)}</p>
                  </div>
                </div>
              </div>
              {selectedMember.place && (
                <div className="education">
                  <h3>Place:</h3>
                  <p>{selectedMember.place}</p>
                </div>
              )}
              {selectedMember.education && (
                <div className="education">
                  <h3>Professional background:</h3>
                  <p>{selectedMember.education}</p>
                </div>
              )}
              {selectedMember.specializations && (
                <div className="specializations">
                  <h3>{selectedMember.specializationstitle}</h3>
                  <ul>
                    {selectedMember.specializations.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedMember.philosophy && (
                <div className="philosophy">
                  <h3>Philosophy</h3>
                  <p>{selectedMember.philosophy}</p>
                </div>
              )}
              {selectedMember.qualifications && (
                <div className="specializations">
                  <h3>{selectedMember.qualificationstitle}</h3>
                  <ul>
                    {selectedMember.qualifications.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedMember.clinicalscope && (
                <div className="philosophy">
                  <h3>Clinical scope</h3>
                  <p>{selectedMember.clinicalscope}</p>
                </div>
              )}
              {selectedMember.values && (
                <div className="philosophy">
                  <h3>Professional values</h3>
                  <p>{selectedMember.values}</p>
                </div>
              )}
              {selectedMember.date && (
                <div className="philosophy">
                  <h3>Days available</h3>
                  <p>{selectedMember.date}</p>
                </div>
              )}
              {selectedMember.language && (
                <div className="philosophy">
                  <h3>Languages</h3>
                  <p>{selectedMember.language}</p>
                </div>
              )}
              {selectedMember.contact && (
                <div className="philosophy">
                  <h3>Contact/CTA</h3>
                  <p>{selectedMember.contact}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="st-height-b120 st-height-lg-b80" />
      <style jsx>{`
        .team-member {
          text-align: center;
        }
        .team-member img {
          width: 100%;
          border-radius: 5px;
          object-fit: cover;
          margin-bottom: 15px;
        }
        .team-member h4 {
          margin: 5px 0;
          color: #333;
          font-size: 18px;
        }
        .team-member p {
          color: #666;
          font-size: 14px;
          margin: 0;
        }
        .team-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
          opacity: 0;
          visibility: hidden;
        }
        .team-drawer.open {
          right: 0;
          opacity: 1;
          visibility: visible;
        }
        .drawer-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          z-index: 1001;
          transition: opacity 0.3s ease;
        }
        .drawer-content {
          position: fixed;
          top: 0;
          right: -800px;
          width: 100%;
          max-width: 800px;
          height: 100%;
          background: white;
          z-index: 1002;
          padding: 40px 25px;
          overflow-y: auto;
          transition: right 0.3s ease;
          box-shadow: -2px 0 20px rgba(0, 0, 0, 0.1);
        }
        .team-drawer.open .drawer-content {
          right: 0;
        }
        .close-button {
          position: absolute;
          top: 15px;
          right: 20px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #666;
          z-index: 1003;
        }
        .close-button:hover {
          color: #000;
        }
        .member-details {
          margin-top: 20px;
        }
        .member-detail-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 20px;
          margin: 0 auto 25px;
          align-items: center;
        }
          @media screen and (max-width: 768px) {
            .member-detail-grid {
              grid-template-columns: 1fr;
            }
          }
        .member-detail-image {
          width: 100%;
          object-fit: cover;
          border-radius: 8px;
          display: block;
        }
        .member-details h2 {
          font-size: 24px;
          margin-bottom: 10px;
          color: #2c3e50;
        }
        .designation {
          color: #7f8c8d;
          margin-bottom: 12px;
          font-size: 16px;
        }
        .member-bio,
        .education,
        .specializations,
        .qualifications,
        .philosophy {
          margin-bottom: 25px;
        }
        .member-details h3 {
          font-size: 18px;
          color: #2c3e50;
          margin-bottom: 10px;
          border-bottom: 1px solid #eee;
          padding-bottom: 8px;
        }
        .member-details p {
          color: #555;
          line-height: 1.6;
          margin: 0;
        }
        .specializations ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .specializations li {
          padding: 5px 0;
          padding-left: 20px;
          position: relative;
          color: #555;
        }
        .specializations li:before {
          content: "•";
          color: rgb(207, 148, 72);
          position: absolute;
          left: 0;
          font-size: 20px;
          line-height: 1;
        }
        @media (max-width: 768px) {
          .drawer-content {
            max-width: 100%;
            right: -100%;
          }
          .team-member {
            margin-bottom: 20px;
          }
          .member-detail-image {
            height: 250px;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </>
  );
}
