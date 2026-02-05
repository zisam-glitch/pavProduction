import React from "react";
import { Link } from "react-scroll";

export default function Cta() {
  return (
    <div className="bg-bule">
      <div className="container AestheticsCta">
      <div>
          <h2>Age Limit</h2>
          <p>
            For the well-being and safety of our <br /> 
            patients, all individuals seeking <br />
            treatment with us MUST  be <br />
            at least 18 years of age.
          </p>
        </div>
        <div>
          <h2>Things to Know</h2>
          <p>
            Before you embark on your journey, <br />
            it's essential to be aware of some <br />
            key details.
          </p>
        </div>
      
      </div>
    </div>
  );
}
