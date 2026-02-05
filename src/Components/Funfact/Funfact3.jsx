import React from "react";

const Funfact = () => {
  const funfacts = [
    {
      icon: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717577659/download_abggud.svg",
      title: "Toothache",
    },
    {
      icon: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717577657/download_1_patvwz.svg",
      title: "Sensitivity",
    },
    {
      icon: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717577657/download_2_y12ahf.svg",
      title: "Broken Filling Tooth      ",
    },
    {
      icon: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717577657/download_3_emohik.svg",
      title: "Swelling/Abscess",
    },
    {
      icon: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717577656/download_4_t8hak7.svg",
      title: "Denture Ajdustment",
    },
    {
      icon: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717577655/download_5_zded5x.svg",
      title: "Re-cement Crowns",
    },
    {
      icon: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717577656/download_6_um0xlg.svg",
      title: "Dental Trauma",
    },
    {
      icon: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717577655/download_7_kfsfld.svg",
      title: "Painful Gums",
    },
    
  ];

  return (
    <section className="st-gray-bg st-shape-wrap">
      <div className="st-shape4">
        <img src="/shape/section_shape.png" alt="shape1" />
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
      <div className="container">
        <h2 className="center">Our Emergency Dentist Can Help With The Following</h2>
        <div className="st-height-b60 st-height-lg-b40" />
        <div className="row">
          <div className="col-xl-12">
            <div className="row">
              {funfacts.map((fact, index) => (
                <div className="col-lg-3" key={index}>
                  <div className="st-funfact st-style1 st-visable-element">
                    <div className="st-funfact-icon st-blue-box">
                      <img src={fact.icon} alt={fact.title} />
                    </div>
                    <div className="st-funfact-title">{fact.title}</div>
                  </div>
                  <div className="st-height-b30 st-height-lg-b30" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
    </section>
  );
};

export default Funfact;
