import React from 'react';
import parse from 'html-react-parser';

const SectionHeading = ({ title, subTitle }) => {
  return (
    <div className="container">
      <div className="st-section-heading st-style1">
        {
          title ? <h2 className="st-section-heading-title">{parse(title)}</h2> : ""
        }
        {
          subTitle ? <div className="st-seperator">
          
          </div> : ""
        }
        {
          subTitle ? <div className="st-section-heading-subtitle">{parse(subTitle)}</div> : ""
        }
      </div>
      <div className="st-height-b40 st-height-lg-b20" />
    </div>
  )
}

export default SectionHeading
