// Specialists.js
import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Specialists = ({ data }) => { // Destructured props to access data object
  const { img, name, designation, authorLink } = data; // Destructured data object
  return (
    <>
      <div className="st-member st-style1">
        <div className="st-member-img">
          <img src={img} alt={name} className="st-zoom-in" /> {/* Changed alt value to name */}
          <Link className="st-doctor-link" to={authorLink}>
            <i><Icon icon="fa6-solid:link" /></i>
          </Link>
          <div className="st-member-social-wrap">
            <img
              src="/shape/member-shape.svg"
              alt="shape"
              className="st-member-social-bg"
            />
           
          </div>
        </div>
        <div className="st-member-meta">
          <div className="st-member-meta-in">
            <h3 className="st-member-name blue">{name}</h3>
            <div className="st-member-designation">{designation}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialists;
