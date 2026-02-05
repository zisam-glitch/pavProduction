import React from "react";
import parse from "html-react-parser";
import SectionHeading from "../SectionHeading/SectionHeading";

const About2 = ({ data }) => {
  const { title, subTitle, avater, img } = data;

  return (
    <section className="st-about-wrap" id="about">
      <div className="st-shape-bg">
        <video src=""></video>
      </div>
      <div className="st-height-b120 st-height-lg-b50" />

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="st-vertical-middle">
              <div className="st-vertical-middle-in">
                <div className="st-text-block st-style1">
                  <h2 className="st-text-block-title">{title}</h2>
                  <div className="st-height-b20 st-height-lg-b20" />
                  <div className="st-text-block-text">
                    <p>{parse(subTitle)}</p>
                  </div>
                  <div className="st-height-b25 st-height-lg-b25" />
                  <div className="st-text-block-avatar mb-row">
                    <div className="st-avatar-img2">
                      <img src={`${avater.img}`} alt={`${avater.img}`} />
                    </div>
                    <div className="st-avatar-info">
                      <h4 className="st-avatar-name">{avater.name}</h4>
                      <div className="st-avatar-designation">
                        {avater.designation}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="st-height-b0 st-height-lg-b30" />
          </div>
          {/* .col */}
          <div
            className="col-lg-6 wow fadeInRight"
            data-wow-duration="0.8s"
            data-wow-delay="0.2s"
          >
            <div className="st-about-video">
              {/* <div
                className=""
                style={{ backgroundImage: `url(${img})` }}
              ></div> */}
              <video
                className=""
                controls
                loop
                muted
                src="https://res.cloudinary.com/dv5noi9zl/video/upload/v1764825824/Media1_aqqzkr.mp4"
              ></video>
            </div>
          </div>

          {/* .col */}
        </div>
      </div>
    </section>
  );
};

export default About2;
