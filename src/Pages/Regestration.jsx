import React, { useState, useRef } from "react";
import SectionHeading from "../Components/SectionHeading/SectionHeading";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Section 1
    registering: "",
    name: "",
    relationship: "",
    phone: "",
    // Section 2
    title: "",
    firstName: "",
    lastName: "",
    middleName: "",
    previousLastName: "",
    dob: "",
    sex: "",
    nhsNumber: "",
    birthPlace: "",
    birthCountry: "",
    address: "",
    postcode: "",
    gpName: "",
    gpAddress: "",
    livedUK: "",
    lastAddress: "",
    homePhone: "",
    mobilePhone: "",
    email: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    emergencyContactRelationship: "",
    nextOfKinName: "",
    nextOfKinPhone: "",
    nextOfKinRelationship: "",
    // Section 3
    childBirthPlace: "",
    motherLivingPlace: "",
    attending: "",
    childAddress: "",
    involvedCare: "",
    vaccinations: "",
    ukVaccinations: "",
    // Section 4
    childBirthPlace: [],
    motherLivingPlace: "",
    motherLivingPostcode: "",
    attendance: [],
    childAddress: "",
    childPostcode: "",
    careInvolved: [],
    routineVaccinations: "",
    vaccinationsInUK: "",
    ethnicGroup: {
      white: [],
      mixed: [],
      asian: [],
      black: [],
      other: [],
      otherDetails: "",
    },
    healthConditions: [],
    smokingStatus: "",
    cigarettesPerDay: "",
    stopSmokingDate: {
      day: "",
      month: "",
      year: "",
    },
    allergies: "",
    alcoholFrequency: "",
    alcoholUnits: "",
    alcoholBingeFrequency: "",
    weight: "",
    height: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    console.log('Form Data:', formData);
    
    console.log("Form submitted", form.current);
    
    emailjs
      .sendForm(
        "service_mncez13",
        "template_shf4rzt",
        form.current,
        "KlVbAp_hAAc57QkS5"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          // Reset the form and formData state after successful submission
          setFormData({
            registering: "",
            name: "",
            relationship: "",
            phone: "",
            title: "",
            firstName: "",
            lastName: "",
            middleName: "",
            previousLastName: "",
            dob: "",
            nhsNumber: "",
            birthPlace: "",
            birthCountry: "",
            address: "",
            postcode: "",
            gpName: "",
            gpAddress: "",
            livedUK: "",
            lastAddress: "",
            homePhone: "",
            mobilePhone: "",
            email: "",
            emergencyContactName: "",
            emergencyContactPhone: "",
            emergencyContactRelationship: "",
            nextOfKinName: "",
            nextOfKinPhone: "",
            nextOfKinRelationship: "",
            childBirthPlace: "",
            motherLivingPlace: "",
            attending: "",
            childAddress: "",
            involvedCare: "",
            vaccinations: "",
            ukVaccinations: "",
            childBirthPlace: [],
            motherLivingPlace: "",
            motherLivingPostcode: "",
            attendance: [],
            childAddress: "",
            childPostcode: "",
            careInvolved: [],
            routineVaccinations: "",
            vaccinationsInUK: "",
            ethnicGroup: {
              white: [],
              mixed: [],
              asian: [],
              black: [],
              other: [],
              otherDetails: "",
            },
            healthConditions: [],
            smokingStatus: "",
            cigarettesPerDay: "",
            stopSmokingDate: {
              day: "",
              month: "",
              year: "",
            },
            allergies: "",
            alcoholFrequency: "",
            alcoholUnits: "",
            alcoholBingeFrequency: "",
            weight: {
              kg: "",
              stone: "",
              pounds: "",
            },
            height: {
              cm: "",
              foot: "",
              inches: "",
            },
          });
          setLoading(false);
        },
        (error) => {
          console.log("Email sending failed:", error.text);
          setLoading(false);
        }
      );
  };
const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
    }));
};
  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <section className="st-shape-wrap" id="contact">
      <Helmet>
        <title>Register Today & Enjoy More Dental Care Benefits</title>
        <meta
          name="description"
          content="Register today to unlock extra dental care benefits, priority services, and personalised treatment options."
        />
      </Helmet>
      <div className="st-height-b120 st-height-lg-b100 mt-3" />
      <div className="st-height-b80 st-height-lg-b40 mt-3" />

      <SectionHeading title="Registration" />
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div id="st-alert" />
            <form
              ref={form} // Attach the ref here
              onSubmit={onSubmit}
              className="row st-contact-form st-type1"
              method="post"
              id="contact-form"
            >
              <input type="hidden" name="from_name" value="pav dental" />
              <input type="hidden" name="replyto" value="custom@gmail.com" />

              {currentStep === 1 && (
                <>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>Are you registering</label>
                      <select
                        name="registering"
                        required
                        onChange={handleInputChange}
                        value={formData.registering}
                      >
                        <option value="">Select</option>
                        <option value="Yourself">Yourself</option>
                        <option value="Someone else">Someone else</option>
                      </select>
                    </div>
                  </div>
                  {formData.registering === "Someone else" && (
                    <>
                      <div className="col-lg-6">
                        <div className="st-form-field st-style1">
                          <label>Your Name</label>
                          <input
                            type="text"
                            name="name"
                            required
                            onChange={handleInputChange}
                            value={formData.name}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="st-form-field st-style1">
                          <label>
                            Your relationship to the person you are registering
                          </label>
                          <input
                            type="text"
                            name="relationship"
                            required
                            onChange={handleInputChange}
                            value={formData.relationship}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="st-form-field st-style1">
                          <label>Your contact phone number</label>
                          <input
                            type="text"
                            name="phone"
                            required
                            onChange={handleInputChange}
                            value={formData.phone}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}

              {currentStep === 2 && (
                <>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>Title</label>
                      <input
                        type="text"
                        name="title"
                        required
                        onChange={handleInputChange}
                        value={formData.title}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        onChange={handleInputChange}
                        value={formData.firstName}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        onChange={handleInputChange}
                        value={formData.lastName}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>Middle Name (if you have one)</label>
                      <input
                        type="text"
                        name="middleName"
                        onChange={handleInputChange}
                        value={formData.middleName}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>Previous Last Name</label>
                      <input
                        type="text"
                        name="previousLastName"
                        onChange={handleInputChange}
                        value={formData.previousLastName}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>Date of Birth (DD MM YYYY)</label>
                      <input
                        type="text"
                        name="dob"
                        required
                        onChange={handleInputChange}
                        value={formData.dob}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>
                        What is your sex as recorded on your NHS record?
                      </label>
                      <select
                        name="sex"
                        required
                        onChange={handleInputChange}
                        value={formData.sex}
                      >
                        <option value="">Select</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Intersex">Intersex</option>
                        <option value="Not specified or known">
                          Not specified or known
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>NHS Number (if you have it)</label>
                      <input
                        type="text"
                        name="nhsNumber"
                        onChange={handleInputChange}
                        value={formData.nhsNumber}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>Village, town or city of birth</label>
                      <input
                        type="text"
                        name="birthPlace"
                        required
                        onChange={handleInputChange}
                        value={formData.birthPlace}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>Country of birth</label>
                      <input
                        type="text"
                        name="birthCountry"
                        required
                        onChange={handleInputChange}
                        value={formData.birthCountry}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>Current Address</label>
                      <input
                        type="text"
                        name="address"
                        required
                        onChange={handleInputChange}
                        value={formData.address}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>Postcode</label>
                      <input
                        type="text"
                        name="postcode"
                        required
                        onChange={handleInputChange}
                        value={formData.postcode}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="checkbox-c">
                      <input
                        type="checkbox"
                        name="noFixedAddress"
                        onChange={handleInputChange}
                        value={formData.noFixedAddress}
                      />{" "}
                      No fixed address
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>
                        What postcode did you use in last GP surgery you
                        registered with?
                      </label>
                      <input
                        type="text"
                        name="previousPostcode"
                        onChange={handleInputChange}
                        value={formData.previousPostcode}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>
                        Name and address of UK GP surgery you registered with
                      </label>
                      <input
                        type="text"
                        name="gpName"
                        onChange={handleInputChange}
                        value={formData.gpName}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1 ">
                      <label>
                        Have you ever lived somewhere else in the UK?
                      </label>
                      <input
                        type="text"
                        placeholder="Yes / No"
                        name="gpName"
                        onChange={handleInputChange}
                        value={formData.gpName}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>Last address in the UK</label>
                      <input
                        type="text"
                        name="lastAddress"
                        onChange={handleInputChange}
                        value={formData.lastAddress}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>Home phone number</label>
                      <input
                        type="text"
                        name="homePhone"
                        onChange={handleInputChange}
                        value={formData.homePhone}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>Mobile phone number</label>
                      <input
                        type="text"
                        name="mobilePhone"
                        onChange={handleInputChange}
                        value={formData.mobilePhone}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>Email address</label>
                      <input
                        type="email"
                        name="email"
                        onChange={handleInputChange}
                        value={formData.email}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>Name of emergency contact</label>
                      <input
                        type="text"
                        name="emergencyContactName"
                        onChange={handleInputChange}
                        value={formData.emergencyContactName}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>Phone number of emergency contact</label>
                      <input
                        type="text"
                        name="emergencyContactPhone"
                        onChange={handleInputChange}
                        value={formData.emergencyContactPhone}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>Their relationship to you</label>
                      <input
                        type="text"
                        name="emergencyContactRelationship"
                        onChange={handleInputChange}
                        value={formData.emergencyContactRelationship}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>Name of next of kin</label>
                      <input
                        type="text"
                        name="nextOfKinName"
                        onChange={handleInputChange}
                        value={formData.nextOfKinName}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>Phone number of next of kin</label>
                      <input
                        type="text"
                        name="nextOfKinPhone"
                        onChange={handleInputChange}
                        value={formData.nextOfKinPhone}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>Their relationship to you</label>
                      <input
                        type="text"
                        name="nextOfKinRelationship"
                        onChange={handleInputChange}
                        value={formData.nextOfKinRelationship}
                      />
                    </div>
                  </div>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <div className="col-lg-12">
                    <h4>For children under 12 months only</h4>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>
                        Where was the mother living when the baby was born?
                      </label>
                      <input
                        type="text"
                        name="motherLivingPlace"
                        required
                        onChange={handleInputChange}
                        value={formData.motherLivingPlace}
                      />
                      <label>PostCode</label>
                      <input
                        type="text"
                        name="motherLivingPostcode"
                        placeholder="Postcode"
                        required
                        onChange={handleInputChange}
                        value={formData.motherLivingPostcode}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="col-lg-6">
                    <div className="">
                      <label>Where were they born?</label>
                      <div className="flex pt-10">
                        <label className="col-lg-4">
                          <input
                            type="checkbox"
                            name="childBirthPlace"
                            value="England"
                            onChange={handleInputChange}
                            checked={formData.childBirthPlace.includes(
                              "England"
                            )}
                          />{" "}
                          England
                        </label>
                        <label className="col-lg-4">
                          <input
                            type="checkbox"
                            name="childBirthPlace"
                            value="Northern Ireland"
                            onChange={handleInputChange}
                            checked={formData.childBirthPlace.includes(
                              "Northern Ireland"
                            )}
                          />{" "}
                          Northern Ireland
                        </label>
                        <label className="col-lg-4">
                          <input
                            type="checkbox"
                            name="childBirthPlace"
                            value="Wales"
                            onChange={handleInputChange}
                            checked={formData.childBirthPlace.includes("Wales")}
                          />{" "}
                          Wales
                        </label>
                      </div>
                      <div className="flex pt-10">
                        <label className="col-lg-4">
                          <input
                            type="checkbox"
                            name="childBirthPlace"
                            value="Isle of Man"
                            onChange={handleInputChange}
                            checked={formData.childBirthPlace.includes(
                              "Isle of Man"
                            )}
                          />{" "}
                          Isle of Man
                        </label>
                        <label className="col-lg-4">
                          <input
                            type="checkbox"
                            name="childBirthPlace"
                            value="Scotland"
                            onChange={handleInputChange}
                            checked={formData.childBirthPlace.includes(
                              "Scotland"
                            )}
                          />{" "}
                          Scotland
                        </label>
                        <label className="col-lg-4">
                          <input
                            type="checkbox"
                            name="childBirthPlace"
                            value="Outside the UK"
                            onChange={handleInputChange}
                            checked={formData.childBirthPlace.includes(
                              "Outside the UK"
                            )}
                          />{" "}
                          Outside the UK
                        </label>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="col-lg-12 my-3">
                    <h4 className="primary">For patients under 18 years</h4>
                  </div>
                  <div className="col-lg-6">
                    <div className="">
                      <label>Do you attend any of the following?</label>
                      <div className="flex pt-10">
                        <label className="col-lg-4">
                          <input
                            type="checkbox"
                            name="attendance"
                            value="School"
                            onChange={handleInputChange}
                            checked={formData.attendance.includes("School")}
                          />{" "}
                          School
                        </label>
                        <label className="col-lg-4">
                          <input
                            type="checkbox"
                            name="attendance"
                            value="Nursery"
                            onChange={handleInputChange}
                            checked={formData.attendance.includes("Nursery")}
                          />{" "}
                          Nursery
                        </label>
                        <label className="col-lg-4">
                          <input
                            type="checkbox"
                            name="attendance"
                            value="Home school"
                            onChange={handleInputChange}
                            checked={formData.attendance.includes(
                              "Home school"
                            )}
                          />{" "}
                          Home school
                        </label>
                      </div>
                      <div className="flex pt-10">
                        <label className="col-lg-4">
                          <input
                            type="checkbox"
                            name="attendance"
                            value="None of these"
                            onChange={handleInputChange}
                            checked={formData.attendance.includes(
                              "None of these"
                            )}
                          />{" "}
                          None of these
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="st-form-field st-style1">
                      <label>Address</label>
                      <input
                        type="text"
                        name="childAddress"
                        required
                        onChange={handleInputChange}
                        value={formData.childAddress}
                      />
                      <label>PstCode</label>
                      <input
                        type="text"
                        name="childPostcode"
                        placeholder="Postcode"
                        required
                        onChange={handleInputChange}
                        value={formData.childPostcode}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="">
                      <label>Are any of these involved in your care?</label>
                      <div className="flex pt-10">
                        <label className="col-lg-4">
                          <input
                            type="checkbox"
                            name="careInvolved"
                            value="Hospital specialist"
                            onChange={handleInputChange}
                            checked={formData.careInvolved.includes(
                              "Hospital specialist"
                            )}
                          />{" "}
                          Hospital specialist
                        </label>
                        <label className="col-lg-4">
                          <input
                            type="checkbox"
                            name="careInvolved"
                            value="Health worker"
                            onChange={handleInputChange}
                            checked={formData.careInvolved.includes(
                              "Health worker"
                            )}
                          />{" "}
                          Health worker
                        </label>
                        <label className="col-lg-4">
                          <input
                            type="checkbox"
                            name="careInvolved"
                            value="Social worker"
                            onChange={handleInputChange}
                            checked={formData.careInvolved.includes(
                              "Social worker"
                            )}
                          />{" "}
                          Social worker
                        </label>
                      </div>
                      <div className="flex pt-10">
                        <label className="col-lg-4">
                          <input
                            type="checkbox"
                            name="careInvolved"
                            value="None of these"
                            onChange={handleInputChange}
                            checked={formData.careInvolved.includes(
                              "None of these"
                            )}
                          />{" "}
                          None of these
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="">
                      <label>Have you had all your routine vaccinations?</label>
                      <div className="flex pt-10">
                        <label className="col-lg-4">
                          <input
                            type="radio"
                            name="routineVaccinations"
                            value="Yes"
                            onChange={handleInputChange}
                            checked={formData.routineVaccinations === "Yes"}
                          />{" "}
                          Yes
                        </label>
                        <label className="col-lg-4">
                          <input
                            type="radio"
                            name="routineVaccinations"
                            value="No"
                            onChange={handleInputChange}
                            checked={formData.routineVaccinations === "No"}
                          />{" "}
                          No
                        </label>
                        <label className="col-lg-4">
                          <input
                            type="radio"
                            name="routineVaccinations"
                            value="Don't know"
                            onChange={handleInputChange}
                            checked={
                              formData.routineVaccinations === "Don't know"
                            }
                          />{" "}
                          Don't know
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="pt-10 pb-20">
                      <label>
                        Did you get your routine vaccinations in the UK?
                      </label>
                      <div className="flex pt-10">
                        <label className="col-lg-4">
                          <input
                            type="radio"
                            name="vaccinationsInUK"
                            value="Yes"
                            onChange={handleInputChange}
                            checked={formData.vaccinationsInUK === "Yes"}
                          />{" "}
                          Yes
                        </label>
                        <label className="col-lg-4">
                          <input
                            type="radio"
                            name="vaccinationsInUK"
                            value="No"
                            onChange={handleInputChange}
                            checked={formData.vaccinationsInUK === "No"}
                          />{" "}
                          No
                        </label>
                        <label className="col-lg-4">
                          <input
                            type="radio"
                            name="vaccinationsInUK"
                            value="Don't know"
                            onChange={handleInputChange}
                            checked={formData.vaccinationsInUK === "Don't know"}
                          />{" "}
                          Don't know
                        </label>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {currentStep === 4 && (
                <>
                  <div className="col-lg-12">
                    <h3>Additional information</h3>
                  </div>
                  <div className="col-lg-12">
                    <div className="st-form-field st-style1">
                      <label>What is your ethnic group?</label>
                      <p>
                        Choose one section from A to E, then tick one box to
                        best describe your ethnic group or background.
                      </p>
                      <div className="row">
                        <div className="col-lg-6 mb-4">
                          <h4>(A) White</h4>

                          <label className="d-flex">
                            <input
                              type="checkbox"
                              className="checkbox_input"
                              name="ethnicGroup.white"
                              value="English, Welsh, Scottish, Northern Irish or British"
                              onChange={() => (
                                "white",
                                "English, Welsh, Scottish, Northern Irish or British"
                              )}
                              checked={formData.ethnicGroup.white.includes(
                                "English, Welsh, Scottish, Northern Irish or British"
                              )}
                            />{" "}
                            English, Welsh, Scottish, Northern Irish or British
                          </label>

                          <label className="d-flex">
                            <input
                              type="checkbox"
                              className="checkbox_input"
                              name="ethnicGroup.white"
                              value="Irish"
                              onChange={() => ("white", "Irish")}
                              checked={formData.ethnicGroup.white.includes(
                                "Irish"
                              )}
                            />{" "}
                            Irish
                          </label>

                          <label className="d-flex">
                            <input
                              type="checkbox"
                              className="checkbox_input"
                              name="ethnicGroup.white"
                              value="Gypsy or Irish Traveller"
                              onChange={() => (
                                "white", "Gypsy or Irish Traveller"
                              )}
                              checked={formData.ethnicGroup.white.includes(
                                "Gypsy or Irish Traveller"
                              )}
                            />{" "}
                            Gypsy or Irish Traveller
                          </label>

                          <input
                            type="text"
                            placeholder="Any other White background"
                            onChange={(e) => ("white", e.target.value)}
                            value={
                              formData.ethnicGroup.white.includes(
                                "Any other White background"
                              )
                                ? formData.ethnicGroup.white.find(
                                    (item) =>
                                      item !==
                                        "English, Welsh, Scottish, Northern Irish or British" &&
                                      item !== "Irish" &&
                                      item !== "Gypsy or Irish Traveller"
                                  )
                                : ""
                            }
                          />
                        </div>
                        <div className="col-lg-6 mb-4">
                          <h4>(B) Mixed or multiple ethnic groups</h4>
                          <label className="d-flex">
                            <input
                              type="checkbox"
                              className="checkbox_input"
                              name="ethnicGroup.mixed"
                              value="White and Black Caribbean"
                              onChange={() => (
                                "mixed", "White and Black Caribbean"
                              )}
                              checked={formData.ethnicGroup.mixed.includes(
                                "White and Black Caribbean"
                              )}
                            />{" "}
                            White and Black Caribbean
                          </label>
                          <label className="d-flex">
                            <input
                              type="checkbox"
                              className="checkbox_input"
                              name="ethnicGroup.mixed"
                              value="White and Black African"
                              onChange={() => (
                                "mixed", "White and Black African"
                              )}
                              checked={formData.ethnicGroup.mixed.includes(
                                "White and Black African"
                              )}
                            />{" "}
                            White and Black African
                          </label>
                          <label className="d-flex">
                            <input
                              type="checkbox"
                              className="checkbox_input"
                              name="ethnicGroup.mixed"
                              value="White and Asian"
                              onChange={() => ("mixed", "White and Asian")}
                              checked={formData.ethnicGroup.mixed.includes(
                                "White and Asian"
                              )}
                            />{" "}
                            White and Asian
                          </label>
                          <input
                            type="text"
                            placeholder="Any other Mixed or Multiple ethnic background"
                            onChange={(e) => ("mixed", e.target.value)}
                            value={
                              formData.ethnicGroup.mixed.includes(
                                "Any other Mixed or Multiple ethnic background"
                              )
                                ? formData.ethnicGroup.mixed.find(
                                    (item) =>
                                      item !== "White and Black Caribbean" &&
                                      item !== "White and Black African" &&
                                      item !== "White and Asian"
                                  )
                                : ""
                            }
                          />
                        </div>
                        <div className="col-lg-6 mb-4">
                          <h4>(C) Asian or Asian British</h4>
                          <label className="d-flex">
                            <input
                              type="checkbox"
                              className="checkbox_input"
                              name="ethnicGroup.asian"
                              value="Indian"
                              onChange={() => ("asian", "Indian")}
                              checked={formData.ethnicGroup.asian.includes(
                                "Indian"
                              )}
                            />{" "}
                            Indian
                          </label>
                          <label className="d-flex">
                            <input
                              type="checkbox"
                              className="checkbox_input"
                              name="ethnicGroup.asian"
                              value="Pakistani"
                              onChange={() => ("asian", "Pakistani")}
                              checked={formData.ethnicGroup.asian.includes(
                                "Pakistani"
                              )}
                            />{" "}
                            Pakistani
                          </label>
                          <label className="d-flex">
                            <input
                              type="checkbox"
                              className="checkbox_input"
                              name="ethnicGroup.asian"
                              value="Bangladeshi"
                              onChange={() => ("asian", "Bangladeshi")}
                              checked={formData.ethnicGroup.asian.includes(
                                "Bangladeshi"
                              )}
                            />{" "}
                            Bangladeshi
                          </label>
                          <label className="d-flex">
                            <input
                              type="checkbox"
                              className="checkbox_input"
                              name="ethnicGroup.asian"
                              value="Chinese"
                              onChange={() => ("asian", "Chinese")}
                              checked={formData.ethnicGroup.asian.includes(
                                "Chinese"
                              )}
                            />{" "}
                            Chinese
                          </label>
                          <input
                            type="text"
                            placeholder="Any other Asian background"
                            onChange={(e) => ("asian", e.target.value)}
                            value={
                              formData.ethnicGroup.asian.includes(
                                "Any other Asian background"
                              )
                                ? formData.ethnicGroup.asian.find(
                                    (item) =>
                                      item !== "Indian" &&
                                      item !== "Pakistani" &&
                                      item !== "Bangladeshi" &&
                                      item !== "Chinese"
                                  )
                                : ""
                            }
                          />
                        </div>
                        <div className="col-lg-6 mb-4">
                          <h4>(D) Black/African/Caribbean/British</h4>
                          <label className="d-flex">
                            <input
                              type="checkbox"
                              className="checkbox_input"
                              name="ethnicGroup.black"
                              value="African"
                              onChange={() => ("black", "African")}
                              checked={formData.ethnicGroup.black.includes(
                                "African"
                              )}
                            />{" "}
                            African
                          </label>
                          <label className="d-flex">
                            <input
                              type="checkbox"
                              className="checkbox_input"
                              name="ethnicGroup.black"
                              value="Caribbean"
                              onChange={() => ("black", "Caribbean")}
                              checked={formData.ethnicGroup.black.includes(
                                "Caribbean"
                              )}
                            />{" "}
                            Caribbean
                          </label>
                          <input
                            type="text"
                            placeholder="Any other Black, African or Caribbean background"
                            onChange={(e) => ("black", e.target.value)}
                            value={
                              formData.ethnicGroup.black.includes(
                                "Any other Black, African or Caribbean background"
                              )
                                ? formData.ethnicGroup.black.find(
                                    (item) =>
                                      item !== "African" && item !== "Caribbean"
                                  )
                                : ""
                            }
                          />
                        </div>
                        <div className="col-lg-6 mb-4">
                          <h4>(E) Other ethnic group</h4>
                          <label className="d-flex">
                            <input
                              type="checkbox"
                              className="checkbox_input"
                              name="ethnicGroup.other"
                              value="Arab"
                              onChange={() => ("other", "Arab")}
                              checked={formData.ethnicGroup.other.includes(
                                "Arab"
                              )}
                            />{" "}
                            Arab
                          </label>
                          <input
                            type="text"
                            placeholder="Any other ethnic group"
                            onChange={(e) => ("other", e.target.value)}
                            value={
                              formData.ethnicGroup.other.includes(
                                "Any other ethnic group"
                              )
                                ? formData.ethnicGroup.other.find(
                                    (item) => item !== "Arab"
                                  )
                                : ""
                            }
                          />
                          <label className="d-flex">
                            <input
                              type="checkbox"
                              className="checkbox_input"
                              name="ethnicGroup.other"
                              value="Prefer not to say"
                              onChange={() => ("other", "Prefer not to say")}
                              checked={formData.ethnicGroup.other.includes(
                                "Prefer not to say"
                              )}
                            />{" "}
                            Prefer not to say
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {currentStep === 5 && (
                <>
                  <div className="col-lg-12">
                    <h3>Patient Health</h3>
                  </div>
                  <div className="col-lg-12">
                    <div className="st-form-field st-style1">
                      <div className="mb-3">
                        <label>
                          Have you ever had any of these conditions?
                        </label>
                        {[
                          "Alzheimer's disease or dementia",
                          "Asthma",
                          "Cancer",
                          "Diabetes",
                          "Epilepsy",
                          "Heart disease",
                          "High blood pressure (hypertension)",
                          "Stroke",
                          "Thyroid disease",
                        ].map((condition) => (
                          <label key={condition} className="d-flex">
                            <input
                              type="checkbox"
                              className="checkbox_input"
                              name="healthConditions"
                              value={condition}
                              onChange={handleInputChange}
                              checked={formData.healthConditions.includes(
                                condition
                              )}
                            />{" "}
                            {condition}
                          </label>
                        ))}
                      </div>
                      <div className="mb-3">
                        <label>What best describes you?</label>
                        {[
                          "I smoke",
                          "I used to smoke",
                          "I have never smoked",
                          "Prefer not to say",
                        ].map((status) => (
                          <label key={status} className="d-flex">
                            <input
                              type="radio"
                              className="checkbox_input"
                              name="smokingStatus"
                              value={status}
                              onChange={handleInputChange}
                              checked={formData.smokingStatus === status}
                            />{" "}
                            {status}
                          </label>
                        ))}
                        {formData.smokingStatus === "I smoke" && (
                          <>
                            <label>
                              On average, how many cigarettes do you smoke a
                              day?
                            </label>
                            <input
                              type="number"
                              name="cigarettesPerDay"
                              value={formData.cigarettesPerDay}
                              onChange={handleInputChange}
                            />
                          </>
                        )}
                        {formData.smokingStatus === "I used to smoke" && (
                          <>
                            <label>What date did you stop smoking?</label>
                            <input
                              type="number"
                              name="stopSmokingDate.day"
                              placeholder="DD"
                              value={formData.stopSmokingDate.day}
                              onChange={handleInputChange}
                            />
                            <input
                              type="number"
                              name="stopSmokingDate.month"
                              placeholder="MM"
                              value={formData.stopSmokingDate.month}
                              onChange={handleInputChange}
                            />
                            <input
                              type="number"
                              name="stopSmokingDate.year"
                              placeholder="YYYY"
                              value={formData.stopSmokingDate.year}
                              onChange={handleInputChange}
                            />
                          </>
                        )}
                        <label>Allergies</label>
                        <input
                          type="text"
                          name="allergies"
                          value={formData.allergies}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label>How often do you drink alcohol?</label>
                        {[
                          "Never",
                          "Monthly or less",
                          "2 to 4 times a month",
                          "2 to 3 times a week",
                          "4 or more times a week",
                          "Prefer not to say",
                        ].map((frequency) => (
                          <label key={frequency} className="d-flex">
                            <input
                              type="radio"
                              className="checkbox_input"
                              name="alcoholFrequency"
                              value={frequency}
                              onChange={handleInputChange}
                              checked={formData.alcoholFrequency === frequency}
                            />{" "}
                            {frequency}
                          </label>
                        ))}
                        {formData.alcoholFrequency !== "Never" &&
                          formData.alcoholFrequency !== "Prefer not to say" && (
                            <>
                              <label>
                                How many units of alcohol do you drink on a
                                typical day when you are drinking?
                              </label>
                              <input
                                type="number"
                                name="alcoholUnits"
                                value={formData.alcoholUnits}
                                onChange={handleInputChange}
                              />
                              <label>
                                How often have you had six or more units of
                                alcohol on a single occasion in the last year?
                              </label>
                              {[
                                "Never",
                                "Less than monthly",
                                "Monthly",
                                "Weekly",
                                "Daily or almost daily",
                                "Prefer not to say",
                              ].map((bingeFrequency) => (
                                <label key={bingeFrequency} className="d-flex">
                                  <input
                                    type="radio"
                                    className="checkbox_input"
                                    name="alcoholBingeFrequency"
                                    value={bingeFrequency}
                                    onChange={handleInputChange}
                                    checked={
                                      formData.alcoholBingeFrequency ===
                                      bingeFrequency
                                    }
                                  />{" "}
                                  {bingeFrequency}
                                </label>
                              ))}
                            </>
                          )}
                      </div>
                      <div className="mb-3">
                        <label>What is your weight?</label>
                        <input
                          type="text"
                          name="weight.kg"
                          placeholder="65.5kg"
                          value={formData.weight}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label>What is your height?</label>
                        <input
                          type="number"
                          name="height.cm"
                          placeholder="173cm"
                          value={formData.height}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="col-lg-12">
                <div className="st-height-b10 st-height-lg-b10" />

                <div className="text-center flex jbetween">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={handlePreviousStep}
                      className="st-btn st-style1 st-color1 st-size-medium my-2
        "
                    >
                      Previous
                    </button>
                  )}
                  {currentStep < 5 && (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="st-btn st-style1 st-color1 st-size-medium my-2"
                    >
                      Next
                    </button>
                  )}
                  {currentStep === 5 && (
                    <button
                      className="st-btn st-style1 st-color1 st-size-medium"
                      type="submit"
                      id="submit"
                      name="submit"
                    >
                      {loading ? "Sending..." : "Send message"}
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
    </section>
  );
};

export default Contact;

// import React, { useState, useRef } from "react";
// import SectionHeading from "../Components/SectionHeading/SectionHeading";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   const form = useRef();

//   const [loading, setLoading] = useState(false);
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({
//     // Section 1
//     registering: "",
//     name: "",
//     relationship: "",
//     phone: "",
//     // Section 2
//     title: "",
//     firstName: "",
//     lastName: "",
//     middleName: "",
//     previousLastName: "",
//     dob: "",
//     sex: "",
//     nhsNumber: "",
//     birthPlace: "",
//     birthCountry: "",
//     address: "",
//     postcode: "",
//     gpName: "",
//     gpAddress: "",
//     livedUK: "",
//     lastAddress: "",
//     homePhone: "",
//     mobilePhone: "",
//     email: "",
//     emergencyContactName: "",
//     emergencyContactPhone: "",
//     emergencyContactRelationship: "",
//     nextOfKinName: "",
//     nextOfKinPhone: "",
//     nextOfKinRelationship: "",
//     // Section 3
//     childBirthPlace: "",
//     motherLivingPlace: "",
//     attending: "",
//     childAddress: "",
//     involvedCare: "",
//     vaccinations: "",
//     ukVaccinations: "",
//     // Section 4
//     childBirthPlace: [],
//     motherLivingPlace: "",
//     motherLivingPostcode: "",
//     attendance: [],
//     childAddress: "",
//     childPostcode: "",
//     careInvolved: [],
//     routineVaccinations: "",
//     vaccinationsInUK: "",
//     ethnicGroup: {
//       white: [],
//       mixed: [],
//       asian: [],
//       black: [],
//       other: [],
//       otherDetails: "",
//     },
//     healthConditions: [],
//     smokingStatus: "",
//     cigarettesPerDay: "",
//     stopSmokingDate: {
//       day: "",
//       month: "",
//       year: "",
//     },
//     allergies: "",
//     alcoholFrequency: "",
//     alcoholUnits: "",
//     alcoholBingeFrequency: "",
//     weight: {
//       kg: "",
//       stone: "",
//       pounds: "",
//     },
//     height: {
//       cm: "",
//       foot: "",
//       inches: "",
//     },
//   });

//   const onSubmit = (event) => {
//     event.preventDefault();
//     setLoading(true);

//     emailjs
//       .sendForm(
//         "service_mncez13", // Replace with your EmailJS service ID
//         "template_shf4rzt", // Replace with your EmailJS template ID
//         form.current,
//         "KlVbAp_hAAc57QkS5" // Replace with your EmailJS user ID (or public key)
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           // Reset the form and formData state after successful submission
//           setFormData({
//             registering: "",
//             name: "",
//             relationship: "",
//             phone: "",
//             title: "",
//             firstName: "",
//             lastName: "",
//             middleName: "",
//             previousLastName: "",
//             dob: "",
//             sex: "",
//             nhsNumber: "",
//             birthPlace: "",
//             birthCountry: "",
//             address: "",
//             postcode: "",
//             gpName: "",
//             gpAddress: "",
//             livedUK: "",
//             lastAddress: "",
//             homePhone: "",
//             mobilePhone: "",
//             email: "",
//             emergencyContactName: "",
//             emergencyContactPhone: "",
//             emergencyContactRelationship: "",
//             nextOfKinName: "",
//             nextOfKinPhone: "",
//             nextOfKinRelationship: "",
//             childBirthPlace: "",
//             motherLivingPlace: "",
//             attending: "",
//             childAddress: "",
//             involvedCare: "",
//             vaccinations: "",
//             ukVaccinations: "",
//             childBirthPlace: [],
//             motherLivingPlace: "",
//             motherLivingPostcode: "",
//             attendance: [],
//             childAddress: "",
//             childPostcode: "",
//             careInvolved: [],
//             routineVaccinations: "",
//             vaccinationsInUK: "",
//             ethnicGroup: {
//               white: [],
//               mixed: [],
//               asian: [],
//               black: [],
//               other: [],
//               otherDetails: "",
//             },
//             healthConditions: [],
//             smokingStatus: "",
//             cigarettesPerDay: "",
//             stopSmokingDate: {
//               day: "",
//               month: "",
//               year: "",
//             },
//             allergies: "",
//             alcoholFrequency: "",
//             alcoholUnits: "",
//             alcoholBingeFrequency: "",
//             weight: {
//               kg: "",
//               stone: "",
//               pounds: "",
//             },
//             height: {
//               cm: "",
//               foot: "",
//               inches: "",
//             },
//           });
//           setCurrentStep(1);
//           setLoading(false);
//         },
//         (error) => {
//           console.log(error.text);
//           setLoading(false);
//         }
//       );
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleCheckboxChange = (event) => {
//     const { name, value, checked } = event.target;
//     setFormData((prevFormData) => {
//       const [section, key] = name.split(".");
//       const newValues = checked
//         ? [...prevFormData[section][key], value]
//         : prevFormData[section][key].filter((item) => item !== value);

//       return {
//         ...prevFormData,
//         [section]: {
//           ...prevFormData[section],
//           [key]: newValues,
//         },
//       };
//     });
//   };

//   const handleNextStep = () => {
//     setCurrentStep((prevStep) => prevStep + 1);
//   };

//   const handlePreviousStep = () => {
//     setCurrentStep((prevStep) => prevStep - 1);
//   };

//   return (
//     <section className="st-shape-wrap" id="contact">
//       <div className="st-height-b120 st-height-lg-b100 mt-3" />
//       <div className="st-height-b80 st-height-lg-b40 mt-3" />

//       <SectionHeading title="Registration" />
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-10 offset-lg-1">
//             <div id="st-alert" />
//             <form
//               onSubmit={onSubmit}
//               className="row st-contact-form st-type1"
//               method="post"
//               id="contact-form"
//               ref={form}
//             >
//               <input type="hidden" name="from_name" value="pav dental" />
//               <input type="hidden" name="replyto" value="custom@gmail.com" />

//               {currentStep === 1 && (
//                 <>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Are you registering</label>
//                       <select
//                         name="registering"
//                         required
//                         onChange={handleInputChange}
//                         value={formData.registering}
//                       >
//                         <option value="">Select</option>
//                         <option value="Yourself">Yourself</option>
//                         <option value="Someone else">Someone else</option>
//                       </select>
//                     </div>
//                   </div>
//                   {formData.registering === "Someone else" && (
//                     <>
//                       <div className="col-lg-6">
//                         <div className="st-form-field st-style1">
//                           <label>Your Name</label>
//                           <input
//                             type="text"
//                             name="name"
//                             required
//                             onChange={handleInputChange}
//                             value={formData.name}
//                           />
//                         </div>
//                       </div>
//                       <div className="col-lg-6">
//                         <div className="st-form-field st-style1">
//                           <label>
//                             Your relationship to the person you are registering
//                           </label>
//                           <input
//                             type="text"
//                             name="relationship"
//                             required
//                             onChange={handleInputChange}
//                             value={formData.relationship}
//                           />
//                         </div>
//                       </div>
//                       <div className="col-lg-6">
//                         <div className="st-form-field st-style1">
//                           <label>Your contact phone number</label>
//                           <input
//                             type="text"
//                             name="phone"
//                             required
//                             onChange={handleInputChange}
//                             value={formData.phone}
//                           />
//                         </div>
//                       </div>
//                     </>
//                   )}
//                 </>
//               )}

//               {currentStep === 2 && (
//                 <>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Title</label>
//                       <input
//                         type="text"
//                         name="title"
//                         required
//                         onChange={handleInputChange}
//                         value={formData.title}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>First Name</label>
//                       <input
//                         type="text"
//                         name="firstName"
//                         required
//                         onChange={handleInputChange}
//                         value={formData.firstName}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Last Name</label>
//                       <input
//                         type="text"
//                         name="lastName"
//                         required
//                         onChange={handleInputChange}
//                         value={formData.lastName}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Middle Name (if you have one)</label>
//                       <input
//                         type="text"
//                         name="middleName"
//                         onChange={handleInputChange}
//                         value={formData.middleName}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Previous Last Name</label>
//                       <input
//                         type="text"
//                         name="previousLastName"
//                         onChange={handleInputChange}
//                         value={formData.previousLastName}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Date of Birth (DD MM YYYY)</label>
//                       <input
//                         type="text"
//                         name="dob"
//                         required
//                         onChange={handleInputChange}
//                         value={formData.dob}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>
//                         What is your sex as recorded on your NHS record?
//                       </label>
//                       <select
//                         name="sex"
//                         required
//                         onChange={handleInputChange}
//                         value={formData.sex}
//                       >
//                         <option value="">Select</option>
//                         <option value="Female">Female</option>
//                         <option value="Male">Male</option>
//                         <option value="Intersex">Intersex</option>
//                         <option value="Not specified or known">
//                           Not specified or known
//                         </option>
//                       </select>
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>NHS Number (if you have it)</label>
//                       <input
//                         type="text"
//                         name="nhsNumber"
//                         onChange={handleInputChange}
//                         value={formData.nhsNumber}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Village, town or city of birth</label>
//                       <input
//                         type="text"
//                         name="birthPlace"
//                         required
//                         onChange={handleInputChange}
//                         value={formData.birthPlace}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Country of birth</label>
//                       <input
//                         type="text"
//                         name="birthCountry"
//                         required
//                         onChange={handleInputChange}
//                         value={formData.birthCountry}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Current Address</label>
//                       <input
//                         type="text"
//                         name="address"
//                         required
//                         onChange={handleInputChange}
//                         value={formData.address}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Postcode</label>
//                       <input
//                         type="text"
//                         name="postcode"
//                         required
//                         onChange={handleInputChange}
//                         value={formData.postcode}
//                       />
//                     </div>
//                   </div>
//                 </>
//               )}

//               {currentStep === 3 && (
//                 <>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Village, town or city of birth</label>
//                       <input
//                         type="text"
//                         name="childBirthPlace"
//                         required
//                         onChange={handleInputChange}
//                         value={formData.childBirthPlace}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Where does your mother live?</label>
//                       <input
//                         type="text"
//                         name="motherLivingPlace"
//                         required
//                         onChange={handleInputChange}
//                         value={formData.motherLivingPlace}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Are you attending any regular appointments?</label>
//                       <input
//                         type="text"
//                         name="attending"
//                         onChange={handleInputChange}
//                         value={formData.attending}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Child’s Address</label>
//                       <input
//                         type="text"
//                         name="childAddress"
//                         onChange={handleInputChange}
//                         value={formData.childAddress}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Involved in care</label>
//                       <input
//                         type="text"
//                         name="involvedCare"
//                         onChange={handleInputChange}
//                         value={formData.involvedCare}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Vaccinations received</label>
//                       <input
//                         type="text"
//                         name="vaccinations"
//                         onChange={handleInputChange}
//                         value={formData.vaccinations}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Vaccinations received in the UK</label>
//                       <input
//                         type="text"
//                         name="ukVaccinations"
//                         onChange={handleInputChange}
//                         value={formData.ukVaccinations}
//                       />
//                     </div>
//                   </div>
//                 </>
//               )}

//               {currentStep === 4 && (
//                 <>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Village, town or city of birth</label>
//                       <input
//                         type="text"
//                         name="childBirthPlace"
//                         required
//                         onChange={handleInputChange}
//                         value={formData.childBirthPlace}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Where does your mother live?</label>
//                       <input
//                         type="text"
//                         name="motherLivingPlace"
//                         required
//                         onChange={handleInputChange}
//                         value={formData.motherLivingPlace}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Mother’s living postcode</label>
//                       <input
//                         type="text"
//                         name="motherLivingPostcode"
//                         onChange={handleInputChange}
//                         value={formData.motherLivingPostcode}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Attendance</label>
//                       <input
//                         type="text"
//                         name="attendance"
//                         onChange={handleInputChange}
//                         value={formData.attendance}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Child’s Address</label>
//                       <input
//                         type="text"
//                         name="childAddress"
//                         onChange={handleInputChange}
//                         value={formData.childAddress}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Child’s postcode</label>
//                       <input
//                         type="text"
//                         name="childPostcode"
//                         onChange={handleInputChange}
//                         value={formData.childPostcode}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Care involved</label>
//                       <input
//                         type="text"
//                         name="careInvolved"
//                         onChange={handleInputChange}
//                         value={formData.careInvolved}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Routine Vaccinations</label>
//                       <input
//                         type="text"
//                         name="routineVaccinations"
//                         onChange={handleInputChange}
//                         value={formData.routineVaccinations}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Vaccinations in UK</label>
//                       <input
//                         type="text"
//                         name="vaccinationsInUK"
//                         onChange={handleInputChange}
//                         value={formData.vaccinationsInUK}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Ethnic Group</label>
//                       <input
//                         type="text"
//                         name="ethnicGroup"
//                         onChange={handleInputChange}
//                         value={formData.ethnicGroup}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Health Conditions</label>
//                       <input
//                         type="text"
//                         name="healthConditions"
//                         onChange={handleInputChange}
//                         value={formData.healthConditions}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Smoking Status</label>
//                       <select
//                         name="smokingStatus"
//                         onChange={handleInputChange}
//                         value={formData.smokingStatus}
//                       >
//                         <option value="">Select</option>
//                         <option value="Current smoker">Current smoker</option>
//                         <option value="Ex-smoker">Ex-smoker</option>
//                         <option value="Non-smoker">Non-smoker</option>
//                         <option value="Not recorded">Not recorded</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Cigarettes per Day</label>
//                       <input
//                         type="text"
//                         name="cigarettesPerDay"
//                         onChange={handleInputChange}
//                         value={formData.cigarettesPerDay}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Stop Smoking Date (if applicable)</label>
//                       <input
//                         type="text"
//                         name="stopSmokingDate"
//                         onChange={handleInputChange}
//                         value={formData.stopSmokingDate}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Allergies</label>
//                       <input
//                         type="text"
//                         name="allergies"
//                         onChange={handleInputChange}
//                         value={formData.allergies}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Alcohol Frequency</label>
//                       <input
//                         type="text"
//                         name="alcoholFrequency"
//                         onChange={handleInputChange}
//                         value={formData.alcoholFrequency}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Alcohol Units per Week</label>
//                       <input
//                         type="text"
//                         name="alcoholUnits"
//                         onChange={handleInputChange}
//                         value={formData.alcoholUnits}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Alcohol Binge Frequency</label>
//                       <input
//                         type="text"
//                         name="alcoholBingeFrequency"
//                         onChange={handleInputChange}
//                         value={formData.alcoholBingeFrequency}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Weight (kg, stone, pounds)</label>
//                       <input
//                         type="text"
//                         name="weight"
//                         onChange={handleInputChange}
//                         value={formData.weight}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="st-form-field st-style1">
//                       <label>Height (cm, foot, inches)</label>
//                       <input
//                         type="text"
//                         name="height"
//                         onChange={handleInputChange}
//                         value={formData.height}
//                       />
//                     </div>
//                   </div>
//                 </>
//               )}

//               <div className="col-lg-12">
//                 <div className="st-height-b10 st-height-lg-b10" />

//                 <div className="text-center flex jbetween">
//                   {currentStep > 1 && (
//                     <button
//                       type="button"
//                       onClick={handlePreviousStep}
//                       className="st-btn st-style1 st-color1 st-size-medium my-2
//                       "
//                     >
//                       Previous
//                     </button>
//                   )}
//                   {currentStep < 5 && (
//                     <button
//                       type="button"
//                       onClick={handleNextStep}
//                       className="st-btn st-style1 st-color1 st-size-medium my-2"
//                     >
//                       Next
//                     </button>
//                   )}
//                   {currentStep === 5 && (
//                     <button
//                       className="st-btn st-style1 st-color1 st-size-medium"
//                       type="submit"
//                       id="submit"
//                       name="submit"
//                     >
//                       {loading ? "Sending..." : "Send message"}
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;