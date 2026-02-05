import React from "react";
import { Link } from "react-router-dom";

export default function Cta() {
  return (
    <div className="bg-bule">
      <div className="container homeCta">
        <h2>Require emergency dental care and want same day treatment?</h2>
        <Link
          to="/services/emergency-dental"
          className="st-btn st-style1 st-size-medium st-color3 st-smooth-move"
        >
          Visit
        </Link>
      </div>
    </div>
  );
}
