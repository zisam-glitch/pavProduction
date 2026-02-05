import React from "react";

const Funfact = () => {
  const funfacts = [
    {
      icon: "https://res.cloudinary.com/db1i46uiv/image/upload/v1724312568/icons8-touch-100_ejfp3j.png",
      title: "Book Appointment",
    },
    {
      icon: "https://res.cloudinary.com/db1i46uiv/image/upload/v1724312568/icons8-dentist-64_fs8vjl.png",
      title: "Speak With Dentist",
    },
    {
      icon: "https://res.cloudinary.com/db1i46uiv/image/upload/v1724312568/icons8-document-80_vlhq0j.png",
      title: "Generate Prescription",
    },
    {
      icon: "https://res.cloudinary.com/db1i46uiv/image/upload/v1724312568/icons8-down-button-100_yputxr.png",
      title: "Get Your Prescription Filled At Your Pharmacy",
    },
    
  ];

  return (
    <section className="st-gray-bg st-shape-wrap">
      <div className="st-shape4">
        <img src="/shape/section_shape.png" alt="shape1" />
      </div>

      <div className="container">
      
        <div className="row">
          <div className="col-xl-12">
            <div className="row acenter">
              {funfacts.map((fact, index) => (
                <div className="col-lg-3" key={index}>
                  <div className="text-center st-visable-element">
                    <div className="st-funfact-icon ">
                      <img className="w-50px"  src={fact.icon} alt={fact.title} />
                    </div>
                    <div className="st-funfact-title-4">{fact.title}</div>
                  </div>
                  <div className="st-height-b30 st-height-lg-b30" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funfact;
