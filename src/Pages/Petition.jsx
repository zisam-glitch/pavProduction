import React, { useState, useEffect } from "react";
import About from "../Components/About/AboutET";
import Hero15 from "../Components/Hero/Hero15";
import Contact from "../Components/Contact/Contact";
import BookButton from "../Components/BookButton/BookButton";
import Hero23 from "../Components/Hero/Hero23F";
import parser from "html-react-parser";
import { Helmet } from 'react-helmet-async';
import emailjs from "@emailjs/browser";

import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase";

const Petition = () => {
  const [signatures, setSignatures] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    postcode: "",
    isUKResident: false,
    location: "United Kingdom",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [cachedCount, setCachedCount] = useState(() => {
    const v = localStorage.getItem("petition_signatures_count");
    return v ? parseInt(v, 10) : 0;
  });
  const [loadError, setLoadError] = useState("");

  // Load signatures from Firestore on component mount (live updates)
  useEffect(() => {
    const q = query(
      collection(db, "petition_signatures"),
      orderBy("createdAt", "desc")
    );
    const unsub = onSnapshot(
      q,
      (snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSignatures(items);
        setCachedCount(items.length);
        localStorage.setItem("petition_signatures_count", String(items.length));
        setLoading(false);
        setLoadError("");
      },
      (error) => {
        console.error("Firestore onSnapshot error:", error);
        setLoadError("Unable to load signatures. Please try again later.");
        setLoading(false);
      }
    );
    return () => unsub();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Validate form
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.postcode.trim()
    ) {
      setSubmitMessage("Please fill in all fields.");
      setIsSubmitting(false);
      return;
    }

    // Eligibility validation: Only British citizens or UK residents
    if (!formData.isUKResident) {
      setSubmitMessage(
        "Only British citizens or UK residents are eligible to sign."
      );
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitMessage("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    try {
      await addDoc(collection(db, "petition_signatures"), {
        name: formData.name.trim(),
        email: formData.email.trim(), // stored but not displayed publicly
        postcode: formData.postcode.trim(),
        isUKResident: !!formData.isUKResident,
        location: formData.location || "United Kingdom",
        createdAt: serverTimestamp(),
      });

      const templateParams = {
        to_email: "hello@pavdental.com",
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        postcode: formData.postcode.trim(),
        isUKResident: formData.isUKResident ? "Yes" : "No",
        location: formData.location || "United Kingdom",
        subject: "New Petition Signature",
        message:
          `New petition signature:\n` +
          `Name: ${formData.name.trim()}\n` +
          `Email: ${formData.email.trim()}\n` +
          `Postcode: ${formData.postcode.trim()}\n` +
          `UK Resident: ${formData.isUKResident ? "Yes" : "No"}\n` +
          `Location: ${formData.location || "United Kingdom"}`,
      };

      emailjs
        .send(
          "service_6dhiejm",
          "template_zywwsnx",
          templateParams,
          "U4KgC_qKXa4GzViK6"
        )
        .catch((err) => {
          console.error("Email notification failed:", err);
        });

      const replyParams = {
        to_email: formData.email.trim(),
        user_email: formData.email.trim(),
        reply_to: formData.email.trim(),
        to_name: formData.name.trim(),
        name: formData.name.trim(),
        user_name: formData.name.trim(),
        subject: "Thank you for signing the Pav Dental petition",
        message:
          `Hi ${formData.name.trim()},\n\n` +
          `Thank you for supporting better NHS dental access in Bradford. Your signature has been recorded.\n\n` +
          `— Pav Dental`,
      };

      emailjs
        .send(
          "service_6dhiejm",
          "template_lvjz2wl",
          replyParams,
          "U4KgC_qKXa4GzViK6"
        )
        .catch((err) => {
          console.error("Auto-reply email failed:", err);
        });

      // Reset form
      setFormData({
        name: "",
        email: "",
        postcode: "",
        isUKResident: false,
        location: "United Kingdom",
      });
      setSubmitMessage("Thank you for signing the petition!");
    } catch (err) {
      console.error("Error adding signature:", err);
      setSubmitMessage("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Hero data for the petition page
  const heroData = {
    subTitle: "Community Action",
    title: "NHS Dental Funding Petition",
    text: "<br/><span>Help Us Bring NHS Dental Care Back to Bradford</span> :<br/><br/>Bradford urgently needs better NHS dental access. Pav Dental is fully equipped to treat NHS patients, but current national rules only allow funding through buying an existing practice. We are asking the UK Government to change these rules so new practices can receive NHS contracts and help underserved communities.<br/><br/>Together, we can improve access to urgent dental care.<br/><br/>",
    imgSrc:
      "https://res.cloudinary.com/db1i46uiv/image/upload/v1762883524/unnamed_2_aqgyl9.jpg",
    videoSrc: "https://www.youtube.com/embed/fISWYcAMjEw",
  };

  // About data for the petition
  const aboutData = {
    title: "Support Our Mission for Better Dental Access",
    subTitle: `
    <h4>Why This Petition Matters</h4>
    <p>Bradford residents deserve access to quality NHS dental care. Current regulations prevent new, well-equipped practices like Pav Dental from receiving NHS contracts, limiting options for patients who need affordable dental services.</p>
    <br/>
    <h4>How You Can Help</h4>
    <p>By signing this petition, you're supporting better dental access for everyone in Bradford. Your signature shows the government that our community needs and deserves improved NHS dental services.</p>
    `,
    img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1762883524/unnamed_2_aqgyl9.jpg",
  };

  // Petition features
  const petitionFeatures = [
    {
      title: "Sign the Petition",
      description:
        "Add your name to support better NHS dental access in Bradford. Every signature makes a difference.",
    },
    {
      title: "Share with Others",
      description:
        "Help spread the word about our campaign. The more people who sign, the stronger our message.",
    },
  ];

  // Video data for the YouTube video
  const videoData = {
    subTitle: "",
    title: "Petition for NHS Dental Funding in Bradford <br/>",
    text: "",
    videoSrc: "https://www.youtube.com/embed/fISWYcAMjEw",
    imgSrc: "https://img.youtube.com/vi/fISWYcAMjEw/maxresdefault.jpg",
  };

  return (
    <>
    <Helmet>
      <title>Demand Better Dental Care – Support the NHS Funding Petition</title>
      <meta name="description" content="Join the NHS dental funding petition and push for better, affordable dental care across the UK. Every signature brings real change closer." />
    </Helmet>
      <div className="st-height-b125 st-height-lg-b0" id="home"></div>
      <Hero15 data={heroData} />

      {/* Petition Features Grid */}
      <div className="tf-container mb-60">
        <div className="grid-class container">
          {petitionFeatures.map((feature, index) => (
            <div className="vacancy" key={index}>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Petition Form Section */}
      <div className="tf-container mb-60">
        <div className="row">
          <div className="col-lg-12">
            <div className="tf-appointment-wrap tf-style1 ">
              <div className="tf-appointment-content container">
                <div className="tf-heading tf-style1 white-color">
                  <h3 className="heading">Sign the Petition</h3>
                  <p className="sub-heading">
                    Only British citizens or UK residents are eligible to sign.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="tf-appointment-form">
                  <div className="row">
                    <div className="Petition-form">
                      <div className="">
                        <div className="form-group">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Full Name *"
                          />
                        </div>
                      </div>
                      <div className="">
                        <div className="form-group">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Email Address *"
                          />
                        </div>
                      </div>
                      <div className="">
                        <div className="form-group">
                          <input
                            type="text"
                            id="postcode"
                            name="postcode"
                            value={formData.postcode}
                            onChange={handleInputChange}
                            required
                            placeholder="Postcode *"
                          />
                        </div>
                      </div>
                      <div className="">
                        <div className="">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="petition-btn"
                          >
                            {isSubmitting ? "Submitting..." : "Sign Petition"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div
                      className="p-m-20"
                      style={{
                        padding: "",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <input
                        type="checkbox"
                        id="isUKResident"
                        name="isUKResident"
                        checked={formData.isUKResident}
                        onChange={handleInputChange}
                        required
                      />
                      <label
                        htmlFor="isUKResident"
                        style={{ color: "#fff", margin: 0 }}
                      >
                        I am a British citizen or UK resident
                      </label>
                    </div>
                  </div>

                  {submitMessage && (
                    <div
                      className={`alert ${
                        submitMessage.includes("Thank you")
                          ? "alert-success"
                          : "alert-danger"
                      }`}
                    >
                      {submitMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Hero23 data={videoData} />

      {/* Signatures Section */}
      <div className="tf-container mb-60">
        <div className="container">
          <div className="">
            <div className="tf-heading tf-style1 mb-30">
              <h3 className="heading-style">
                Petition Signatures (
                {loading ? cachedCount || "..." : signatures.length})
              </h3>
            </div>
            {loadError && (
              <div className="alert alert-danger" role="alert">
                {loadError}
              </div>
            )}
            {signatures.length > 0 ? (
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 p-0">
                    <div className="st-tabs st-fade-tabs st-style1">
                      <div className="st-height-b30 st-height-lg-b30" />
                      <div className="tab-content">
                        <div className={`st-tab active`}>
                          <div
                            className={`st-pricing-table st-style2 st-type1`}
                          >
                            <div className="st-pricing-right p-0">
                              <div className="st-pricing-list-head">
                                <span className="w-60">Signatures</span>
                                <span>Date</span>
                              </div>
                              <ul className="st-pricing-list">
                                {signatures.map((signature) => (
                                  <li key={signature.id}>
                                    <span className="w-60">
                                      {signature.name}
                                    </span>
                                    <span>
                                      {signature.createdAt?.toDate
                                        ? signature.createdAt
                                            .toDate()
                                            .toLocaleDateString("en-GB", {
                                              day: "numeric",
                                              month: "long",
                                              year: "numeric",
                                            })
                                        : ""}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="tf-empty-state">
                <p>Be the first to sign this petition!</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Contact />
      <BookButton />
      <style jsx>{`
        .mb-60 {
          margin-bottom: 60px;
        }
          .p-m-20{
            padding: 0px;
          }

        .tf-appointment-wrap {
          background: linear-gradient(
            90deg,
            rgb(146, 90, 39) 0%,
            rgb(207, 148, 72) 57%
          );
          padding: 50px;
        }
          .heading-style{
          color: rgb(146, 90, 39);
          text-align: center;
          }
        .white-color h3,
        .white-color p {
          color: white !important;
        }

        .tf-appointment-form .form-group input {
          width: 100%;
          padding: 15px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          background: rgba(255, 255, 255, 0.9);
        }

        .form-btn {
          text-align: center;
          margin-top: 30px;
        }

        .alert {
          padding: 15px;
          border-radius: 8px;
          margin-top: 20px;
          font-weight: 600;
        }

        .alert-success {
          background: rgba(212, 237, 218, 0.9);
          color: #155724;
          border: 1px solid #c3e6cb;
        }

        .alert-danger {
          background: rgba(248, 215, 218, 0.9);
          color: #721c24;
          border: 1px solid #f5c6cb;
        }

        .tf-testimonial-wrap {
          display: flex;
          flex-direction: column;
          gap: 20px;
          overflow-x: auto;
          overflow-y: hidden;
          padding-bottom: 10px;
          scroll-snap-type: x mandatory;
        }

        .tf-testimonial-item {
          background: white;
          padding: 25px;
          border: 1px solid #e1e5e9;
          flex: 0 0 auto;
          min-width: 300px;
          scroll-snap-align: start;
        }

        .tf-testimonial-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .tf-testimonial-author {
          display: flex;
          flex-direction: column;
        }

        .tf-testimonial-author .name {
          font-size: 1.1rem;
          font-weight: 600;
          color: #333;
          margin: 0;
        }

        .tf-testimonial-author .designation {
          font-size: 0.9rem;
          color: #666;
        }

        .tf-testimonial-date {
          font-size: 0.85rem;
          color: #999;
          text-align: right;
        }

        .tf-empty-state {
          text-align: center;
          padding: 60px;
          background: #f8f9fa;
          border-radius: 10px;
          color: #666;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .tf-appointment-wrap {
            padding: 30px 0;
          }
            .p-m-20{
              padding: 20px 0px;
            }

          .tf-testimonial-wrap {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default Petition;
