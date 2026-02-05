import React from "react";
import parse from "html-react-parser";

const About = () => {
  

  return (
    <section className="st-about-wrap" id="about">
      <div className="st-shape-bg">
        <img src="/shape/about-bg-shape.svg" alt="/shape/about-bg-shape.svg" />
      </div>
      <div className="st-height-b120 st-height-lg-b50" />
      
      <div className="container">
        <div className="row acenter">
          <div className="col-lg-7">
            <div className="st-vertical-">
              <div className="st-vertical-middle-in">
                <div className="st-text-block st-style1">
                <div className="st-height-b20 st-height-lg-b20" />
                  <h2 className="st-text-block-title">Treatment FAQ</h2>
                  <div className="st-height-b20 st-height-lg-b20" />
                  <div className="st-text-block-text">
                    <p>Please note the probability of experiencing severe side affects is extremely low. It is important that all patient's carefully follow the aftercare instructions advised by their Aesthetic nurse. <br/><br/>
   <div className="flex jbetween">
  <div>
    <h4 className="blue">Info</h4>
    <ul>
      <li>Fast Recovery</li>
      <li>Non Surgical</li>
      <li>Lasts 3-6 months</li>
      <li>Affordable pricing</li>
    </ul>
  </div>
  <div>
  <h4 className="blue">Risks</h5>
    <ul>
      <li>Infection</li>
      <li>Swelling, bleeding, bruising and pain</li>
      <li>Headaches</li>
      <li>Migration</li>
    </ul>
  </div>
</div></p>
                  </div>
                  <div className="st-height-b10 st-height-lg-b10" />
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="st-height-b0 st-height-lg-b30" />
          </div>
          {/* .col */}
         
          {/* .col */}
        </div>
      </div>
    </section>
  );
};

export default About;