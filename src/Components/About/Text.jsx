import React from "react";
import { Link } from "react-router-dom";
import LogoImage2 from '../../assets/imges/logos1.png'

export default function Text() {
  return (
    <section id="department">
      <div className="st-height-b120 st-height-lg-b80" />

      <div className="container">
        <div className="st-tabs st-fade-tabs st-style1">
          <div className="st-height-b25 st-height-lg-b25" />
          <div className="tab-content">
            <div>
              <div className="st-imagebox st-style2">
                <div className="row">
                  <div
                    className="col-lg-6 wow fadeInRight pr-40"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.2s"
                  >
                    <div className="st-about-img">
                      <div
                        className="st-about-img-in st-dynamic-bg st-bg"
                        style={{ backgroundImage: `url(${LogoImage2})` }}
                        // style={{ backgroundImage: `url(https://res.cloudinary.com/db1i46uiv/image/upload/v1717431942/woman-patient-dentist_1_yrlhzh.jpg)` }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-vertical-middle">
                      <div className="st-vertical-middle-in">
                        <div className="st-imagebox-info pt-25">
                          <h2 className="st-imagebox-title blue">
                            A Legacy Fulfilled
                          </h2>
                          <h4 className="st-imagebox-subtitle"></h4>
                          <div className="st-imagebox-text span ">
                            Tragically, Dr. Pav passed away before witnessing
                            the clinic's realization. Their shared vision now
                            rests with Dr. Hassan as a profound responsibility.
                            Fueled by a deep respect for their collaboration, Dr
                            Hassan vowed to complete the final step: <br />{" "}
                            <br /> <span className="blue"> Executing : </span>
                            Bringing this dental clinic to life, serving our
                            community with the same care and innovation Dr. Pav
                            championed.
                            <br /> <br />
                            <span className="blue">
                              Inspiration and Growth :{" "}
                            </span>
                            "We can achieve all our dreams if we are brave
                            enough to pursue them." This philosophy, shared by
                            Dr. Pav and Dr. Hassan, will forever guide our
                            practice.
                            <br /><br />
                            While we must forgive past failings and present
                            obstacles, the future of this clinic demands
                            unwavering standards. We will never compromise on
                            the quality, compassion, or dedication to access
                            that Dr. Pav envisioned.
                            <br />  <br />
                            <span className="blue">
                            We invite you to join us on this journey, as we
                            honor a remarkable legacy and build a future where
                            dental care is truly accessible to all.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
