import React, { useState } from 'react'
import SectionHeading from "../SectionHeading/SectionHeading";


const Price2 = ({ data, varient }) => {
  const { sectionHeadingData, pricePlan } = data;

  const [isActive, setIsActive] = useState(0);
  return (
    <section id="pricing" className={`${varient === "st-color2" ? "" : "st-bluis-bg"}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="st-tabs st-fade-tabs st-style1">
             
              <div className="tab-content">
                {pricePlan.map((elements, index) => (
                  <div className={`st-tab ${isActive === index ? "active" : ""}`} key={index}>
                    <div className={`st-pricing-table st-style2 ${varient === "st-color2" ? "st-color2 st-type1" : varient}`}>
                      
                      <div className="st-pricing-right">
                        <div className="st-pricing-list-head">
                          <span className='w-60'>{elements.mainTitle}</span>
                          <span>{elements.mainPrice}</span>
                        </div>
                        <ul className="st-pricing-list">
                          {
                            elements.featureList.map((elements, index) => (
                              <li key={index}>
                                <span className='w-60'>{elements.title}</span>
                                <span>{elements.price}</span>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="st-height-b20 st-height-lg-b20" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Price2
