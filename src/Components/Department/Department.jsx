import React, { useState } from "react";
import { Link } from "react-router-dom";
import parser from "html-react-parser";

const Department = () => {
  const [isActive, setIsActive] = useState(0);

  const tabs = [
    {
      id: 0,
      url: "/services/emergency-dental",
      title: "Emergency Dental",
      icon: EmergencyDental,
      mainTitle: "24/7 <span>Emergency Dental </span> Services in Bradford",
      subTitle:
        "We offer same day emergency dental care 24-hours a day, seven days a week.",
      desc: "We understand that dental emergencies can occur at any time, which is why we offer same day emergency dental care 24-hours a day, seven days a week, including National and Bank Holidays. Our dedicated team is always on hand to provide immediate and effective dental treatment, ensuring that you receive the care you need when you need it most.",
      imgUrl:
        "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764673280/Group_7_2_ypzw6c.png",
    },
    {
      id: 1,
      url: "/services/mobile-dentistry",
      title: "Mobile Dentistry",
      mainTitle: "<span> Mobile Dentistry </span> at Your Doorstep",
      icon: MobileDentistry,
      subTitle:
        "Enabling our patients to access treatment in the comfort of their own home.",
      desc: "Pav Dental Mobile offers comprehensive dental services delivered right to your home. With extensive experience in both traditional and mobile dentistry, we ensure top-notch care using the latest technology and equipment. Ideal for care homes, we help make your home oral-health CQC-compliant and work with NHS partners. Our modern, well-equipped mobile surgery serves patients across the UK, bringing convenience and expert dental care directly to your doorstep. Contact us at hello@pavdental.com to schedule your appointment today.",
      imgUrl:
        "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764672598/Group_7_cypyfl.png",
    },
    {
      id: 2,
      url: "/services/aesthetics",
      title: "Aesthetics",
      icon: Aesthetics,
      mainTitle: "Pav Dental <span> Aesthetics </span> Award-Winning Clinic",
      desc: "At Pav Dental Aesthetics, we offer a range of top-quality aesthetic treatments designed to enhance your natural beauty and boost your confidence. Our services include Botox, dermal fillers, chemical peels, lip enhancement, and microneedling, all performed using premium-grade products for exceptional results. Our dedicated team provides expert guidance, ensuring personalized care and a commitment to quality. Contact us at 0800 099 6375 to learn more about our offers and packages, and experience the finest aesthetic treatments available.",
      subTitle:
        "Discover Botox, dermal fillers, and chemical peels. Our expert team ensures exceptional results with premium-grade products.",
      imgUrl:
        "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764673599/Group_7_4_h2htxw.png",
    },
    {
      id: 3,
      url: "/services/general-dentistry",
      title: "General Dentistry",
      icon: GeneralDentistry,
      subTitle:
        "Comprehensive Care from Regular Check-Ups to Advanced Treatments",
      desc: "Welcome to your guide to General Dentistry, the foundation of oral health and wellness. From routine check-ups and dental fillings to complex root canals and extractions, general dentistry services are designed to maintain and enhance your dental health. Discover the importance of early diagnosis, preventative care, and the wide range of treatments available to ensure a lifetime of healthy smiles.",
      imgUrl:
        "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764673123/Group_7_1_ykfuqu.png",
      mainTitle:
        "<span> General Dentistry</span> Gateway to Lifelong Oral Health",
    },
    {
      id: 4,
      url: "/services/tooth-extraction",
      title: "Tooth Extraction",
      icon: ToothExtraction,
      subTitle:
        "Experience Immediate Relief with Our Same-Day Tooth Extraction Services",
      desc: "At Pav Dental, our experienced oral surgeons use the latest techniques and technologies to ensure a comfortable and effective treatment experience. We offer guaranteed same-day tooth extractions for immediate pain relief. With transparent pricing for simple, intermediate, and complex extractions, you can trust us for professional care that prioritizes your needs. Follow our post-operative instructions for a smooth recovery, and book your appointment today to receive compassionate, state-of-the-art dental care.",
      imgUrl:
        "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764673443/Group_7_3_ea86zd.png",
      mainTitle:
        "Swift <span> Tooth Extraction </span> Your Trusted Partner in Oral Health",
    },
    {
      id: 5,
      url: "/services/whitening",
      title: "Whitening",
      icon: Whitening,
      subTitle:
        "Designed by Dentists, Developed for You: Explore Our Premium Whitening Ranges",
      desc: "Discover a carefully curated selection of whitening ranges at Pav Dental, meticulously crafted to effectively remove stains and discoloration, giving you the confidence to flash your pearly whites. From professional whitening strips to in-office treatments, our range offers convenience, effectiveness, and professional-grade results. Book your appointment today and experience the difference of our award-winning whitening treatments.",
      imgUrl:
        "https://res.cloudinary.com/db1i46uiv/image/upload/v1716970547/Untitled_design_9_1_fsjsxm.png",
      mainTitle:
        "Brighten Your Smile with Advanced <span> Whitening </span> Solutions",
    },
  ];

  const renderTabs = () => {
    return tabs.map((tab) => (
      <li
        key={tab.id}
        className={`st-tab-title ${isActive === tab.id ? "active" : ""}`}
        onClick={() => setIsActive(tab.id)}
      >
        <span className="st-blue-box">
          <tab.icon isActive={isActive === tab.id} />
          <span>{tab.title}</span>
        </span>
      </li>
    ));
  };

  return (
    <section id="department">
      <div className="st-height-b120 st-height-lg-b80" />

      <div className="container">
        <div className="st-tabs st-fade-tabs st-style1">
          <ul className="st-tab-links st-style1 st-mp0">{renderTabs()}</ul>
          <div className="st-height-b25 st-height-lg-b25" />
          <div className="tab-content">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                id={tab.title.replace(" ", "")}
                className={`st-tab ${isActive === tab.id ? "active" : ""}`}
              >
                <div className="st-imagebox st-style2">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="st-imagebox-img">
                        <img src={tab.imgUrl} alt="service" />
                      </div>
                      <div className="st-height-b0 st-height-lg-b30" />
                    </div>
                    <div className="col-lg-6">
                      <div className="st-vertical-middle">
                        <div className="st-vertical-middle-in">
                          <div className="st-imagebox-info">
                            <h2 className="st-imagebox-title">
                              {parser(tab.mainTitle || "")}
                            </h2>
                            <h4 className="st-imagebox-subtitle">
                              {parser(tab.subTitle || "")}
                            </h4>
                            <div className="st-imagebox-text">
                              {parser(tab.desc || "")}
                            </div>
                          </div>
                          <div className="st-imagebox-btn">
                            <Link
                              to={tab.url}
                              className="st-btn st-style1 st-size-medium st-color1"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const EmergencyDental = ({ isActive }) => (
  <img
    src={
      isActive
        ? "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764670984/icons8-tooth-stethoscope-64_1_xzz0r5.png"
        : "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764670983/icons8-tooth-stethoscope-64_urdlkj.png"
    }
    alt="Emergency Dental"
  />
);
const MobileDentistry = ({ isActive }) => (
  <img
    src={
      isActive
        ? "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764670983/icons8-dentist-location-64_1_mw5ytm.png"
        : "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764670983/icons8-dentist-location-64_el0x5n.png"
    }
    alt="Mobile Dentistry"
  />
);
const Aesthetics = ({ isActive }) => (
  <img
    src={
      isActive
        ? "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764670983/icons8-dental-crown-50_2_w3wzdc.png"
        : "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764670984/icons8-dental-crown-50_1_qtdn48.png"
    }
    alt="Aesthetics"
  />
);
const GeneralDentistry = ({ isActive }) => (
  <img
    src={
      isActive
        ? "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764671183/icons8-set-of-teeth-50_1_lwsmkk.png"
        : "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764671183/icons8-set-of-teeth-50_lpe9j4.png"
    }
    alt="General Dentistry"
  />
);
const ToothExtraction = ({ isActive }) => (
  <img
    src={
      isActive
        ? "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764670692/icons8-tooth-extraction-64_xbwcbm.png"
        : "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764670692/icons8-tooth-extraction-64_1_aa75bm.png"
    }
    alt="Tooth Extraction"
  />
);
const Whitening = ({ isActive }) => (
  <img
    src={
      isActive
        ? "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764670692/icons8-tooth-whitening-64_1_zndn1f.png" 
        : "https://res.cloudinary.com/dv5noi9zl/image/upload/v1764670692/icons8-tooth-whitening-64_pltlqg.png"
    }
    alt="Whitening"
  />
);

export default Department;
