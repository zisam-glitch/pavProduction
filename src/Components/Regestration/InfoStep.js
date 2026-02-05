import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { info } from "./features/user";

const InfoStep = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(info({ ...user, [name]: value }));
  };

  return (
    <div className="info">
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and other information.</p>
      <div className="form" autoComplete="on">
        <div className="fields">
          <div className="dflex">
            <label htmlFor="title">Title</label>
          </div>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="e.g. Mrs"
            value={user.title || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="fields">
          <div className="dflex">
            <label htmlFor="fullName">Full Name</label>
          </div>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="e.g. Stephen King"
            value={user.fullName || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="fields">
          <div className="dflex">
            <label htmlFor="dateOfBirth">Date of Birth (DD MM YYYY)</label>
          </div>
          <input
            id="dateOfBirth"
            name="dateOfBirth"
            type="text"
            placeholder="e.g. 01 01 1990"
            value={user.dateOfBirth || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="fields">
          <div className="dflex">
            <label htmlFor="sex">What is your sex as recorded on your NHS record?</label>
          </div>
          <select
            id="sex"
            name="sex"
            value={user.sex || ''}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Intersex">Intersex</option>
            <option value="Not specified or known">Not specified or known</option>
          </select>
        </div>

        <div className="fields">
          <div className="dflex">
            <label htmlFor="nhsNumber">NHS Number (if you have it)</label>
          </div>
          <input
            id="nhsNumber"
            name="nhsNumber"
            type="text"
            placeholder="e.g. 123 456 7890"
            inputMode="tel"
            value={user.nhsNumber || ''}
            onChange={handleChange}
          />
        </div>

        <div className="fields">
          <div className="dflex">
            <label htmlFor="gpSurgery">Name of UK GP surgery you registered with</label>
          </div>
          <input
            id="gpSurgery"
            name="gpSurgery"
            type="text"
            placeholder="e.g. The Medics PCN"
            value={user.gpSurgery || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="fields">
          <div className="dflex">
            <label htmlFor="homePhone">Home phone number</label>
          </div>
          <input
            id="homePhone"
            name="homePhone"
            type="tel"
            placeholder="e.g. 01234 567890"
            value={user.homePhone || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="fields">
          <div className="dflex">
            <label htmlFor="mobilePhone">Mobile phone number</label>
          </div>
          <input
            id="mobilePhone"
            name="mobilePhone"
            type="tel"
            placeholder="e.g. +44 234 567 890"
            value={user.mobilePhone || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="fields">
          <div className="dflex">
            <label htmlFor="emailAddress">Email Address</label>
          </div>
          <input
            id="emailAddress"
            name="emailAddress"
            type="email"
            inputMode="email"
            placeholder="e.g. pav@pavdental.com"
            value={user.emailAddress || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="fields">
          <div className="dflex">
            <label htmlFor="emergencyContactName">Name of emergency contact</label>
          </div>
          <input
            id="emergencyContactName"
            name="emergencyContactName"
            type="text"
            placeholder="e.g. David Markos"
            value={user.emergencyContactName || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="fields">
          <div className="dflex">
            <label htmlFor="emergencyContactPhone">Phone number of emergency contact</label>
          </div>
          <input
            id="emergencyContactPhone"
            name="emergencyContactPhone"
            type="tel"
            placeholder="e.g. 123 0145 452"
            value={user.emergencyContactPhone || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="fields">
          <div className="dflex">
            <label htmlFor="emergencyContactRelationship">Their relationship to you</label>
          </div>
          <input
            id="emergencyContactRelationship"
            name="emergencyContactRelationship"
            type="text"
            placeholder="e.g. Dad"
            value={user.emergencyContactRelationship || ''}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default InfoStep;
