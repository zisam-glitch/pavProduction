import React, { useState, useEffect } from "react";
import VideoSlider from "../../Components/Slider/VideoSlider";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";

const PracticePolicy = () => {
  const [documents, setDocuments] = useState([
    {
      "id": 1,
      "title": "CCTV Policy",
      "url": "/policies/CCTV Policy.pdf",
      "filename": "cctv-policy.pdf"
    },
    {
      "id": 2,
      "title": "Complaints Policy",
      "url": "/policies/Complaints Policy.pdf",
      "filename": "complaints-policy.pdf"
    },
    {
      "id": 3,
      "title": "CQC Statement of Purpose Policy",
      "url": "/policies/CQC Statement of Purpose Policy.pdf",
      "filename": "cqc-statement-of-purpose-policy.pdf"
    },
    {
      "id": 4,
      "title": "Herpes Simplex Guidance",
      "url": "/policies/Herpes Simplex Guidance.pdf",
      "filename": "herpes-simplex-guidance.pdf"
    },
    {
      "id": 5,
      "title": "Privacy Notice for Patients including Children",
      "url": "/policies/Privacy Notice for Patients including children.pdf",
      "filename": "privacy-notice-for-patients-including-children.pdf"
    },
    {
      "id": 6,
      "title": "Quality Assurance Statement",
      "url": "/policies/Quality Assurance Statement.pdf",
      "filename": "quality-assurance-statement.pdf"
    },
    {
      "id": 7,
      "title": "Was Not Brought Implementation Guide",
      "url": "/policies/Was Not Brought Implementation Guide.pdf",
      "filename": "was-not-brought-implementation-guide.pdf"
    },
    {
      "id": 8,
      "title": "Zero Tolerance Policy",
      "url": "/policies/Zero Tolerance Policy.pdf",
      "filename": "zero-tolerance-policy.pdf"
    }
  ]
  );

  const consentForms =  [
    {
      "id": 1,
      "title": "Consent Form - Bridges",
      "url": "/forms/Consent form - Bridges.docx",
      "filename": "consent-form-bridges.docx"
    },
    {
      "id": 2,
      "title": "Consent Form - Composite Bonding",
      "url": "/forms/Consent form - Composite Bonding.docx",
      "filename": "consent-form-composite-bonding.docx"
    },
    {
      "id": 3,
      "title": "Consent Form - Crowns",
      "url": "/forms/Consent form - Crowns.docx",
      "filename": "consent-form-crowns.docx"
    },
    {
      "id": 4,
      "title": "Consent Form - Denture",
      "url": "/forms/Consent form - Denture.docx",
      "filename": "consent-form-denture.docx"
    },
    {
      "id": 5,
      "title": "Consent Form - Direct Access",
      "url": "/forms/Consent form - Direct access.docx",
      "filename": "consent-form-direct-access.docx"
    },
    {
      "id": 6,
      "title": "Consent Form - Extraction",
      "url": "/forms/Consent form - Extraction.docx",
      "filename": "consent-form-extraction.docx"
    },
    {
      "id": 7,
      "title": "Consent Form - Filling Restoration",
      "url": "/forms/Consent form - Filling Restoration.docx",
      "filename": "consent-form-filling-restoration.docx"
    },
    {
      "id": 8,
      "title": "Consent Form - Implant",
      "url": "/forms/Consent form - Implant.docx",
      "filename": "consent-form-implant.docx"
    },
    {
      "id": 9,
      "title": "Consent Form - IV Sedation",
      "url": "/forms/Consent form - IV Sedation.docx",
      "filename": "consent-form-iv-sedation.docx"
    },
    {
      "id": 10,
      "title": "Consent Form - Nightguards",
      "url": "/forms/Consent form - Nightguards.docx",
      "filename": "consent-form-nightguards.docx"
    },
    {
      "id": 11,
      "title": "Consent Form - Periodontal Treatment",
      "url": "/forms/Consent form - Periodontal Treatment.docx",
      "filename": "consent-form-periodontal-treatment.docx"
    },
    {
      "id": 12,
      "title": "Consent Form - Permission to Book Appointment",
      "url": "/forms/Consent form - Permission to book appointment.docx",
      "filename": "consent-form-permission-to-book-appointment.docx"
    },
    {
      "id": 13,
      "title": "Consent Form - Photograph Usage for Teaching",
      "url": "/forms/Consent form - Photograph usage for teaching.docx",
      "filename": "consent-form-photograph-usage-for-teaching.docx"
    },
    {
      "id": 14,
      "title": "Consent Form - Photography",
      "url": "/forms/Consent form - Photography.docx",
      "filename": "consent-form-photography.docx"
    },
    {
      "id": 15,
      "title": "Consent Form - Rad Exposure on Pregnancy",
      "url": "/forms/Consent form - Rad exposure on Pregnancy.docx",
      "filename": "consent-form-rad-exposure-on-pregnancy.docx"
    },
    {
      "id": 16,
      "title": "Consent Form - Refusal of Consent",
      "url": "/forms/Consent form - Refusal of Consent form.docx",
      "filename": "consent-form-refusal-of-consent.docx"
    },
    {
      "id": 17,
      "title": "Consent Form - Root Canal Treatment",
      "url": "/forms/Consent form - Root Canal Treatment.docx",
      "filename": "consent-form-root-canal-treatment.docx"
    },
    {
      "id": 18,
      "title": "Consent Form - Sharing Records to Secondary Care",
      "url": "/forms/Consent form - Sharing Records to Secondary Care.docx",
      "filename": "consent-form-sharing-records-to-secondary-care.docx"
    },
    {
      "id": 19,
      "title": "Consent Form - Third Party Request",
      "url": "/forms/Consent form - Third Party Request.docx",
      "filename": "consent-form-third-party-request.docx"
    },
    {
      "id": 20,
      "title": "Consent Form - Whitening",
      "url": "/forms/Consent form - Whitening.docx",
      "filename": "consent-form-whitening.docx"
    }
  ];

  const poster = [
    {
      "id": 1,
      "title": "COSHH Chemicals Poster",
      "url": "/posters/COSHH Chemicals Poster.pdf",
      "filename": "coshh-chemicals-poster.pdf",
      "img": "https://res.cloudinary.com/db1i46uiv/image/upload/v1733687666/document_16509217_dvrvoh.png"
    },
    {
      "id": 2,
      "title": "Domestic Abuse",
      "url": "/posters/Domestic Abuse.pdf",
      "filename": "domestic-abuse.pdf",
      "img": "https://res.cloudinary.com/db1i46uiv/image/upload/v1733687666/document_16509217_dvrvoh.png"
    },
    {
      "id": 3,
      "title": "Domestic Violence",
      "url": "/posters/Domestic Violence.pdf",
      "filename": "domestic-violence.pdf",
      "img": "https://res.cloudinary.com/db1i46uiv/image/upload/v1733687666/document_16509217_dvrvoh.png"
    },
    {
      "id": 4,
      "title": "Free Dental Treatment Poster A3",
      "url": "/posters/Free dental treatment poster A3.pdf",
      "filename": "free-dental-treatment-poster-a3.pdf",
      "img": "https://res.cloudinary.com/db1i46uiv/image/upload/v1733687666/document_16509217_dvrvoh.png"
    },
    {
      "id": 5,
      "title": "GDC Standards",
      "url": "/posters/GDC Standards.pdf",
      "filename": "gdc-standards.pdf",
      "img": "https://res.cloudinary.com/db1i46uiv/image/upload/v1733687666/document_16509217_dvrvoh.png"
    },
    {
      "id": 6,
      "title": "Hand Hygiene",
      "url": "/posters/Hand Hygiene.png",
      "filename": "hand-hygiene.png",
      "img": "https://res.cloudinary.com/db1i46uiv/image/upload/v1733690891/jpg_9497384_yhwvwz.png"
    },
    {
      "id": 7,
      "title": "Safeguarding Flow Chart",
      "url": "/posters/Safeguarding flow chart.docx",
      "filename": "safeguarding-flow-chart.docx",
      "img": "https://res.cloudinary.com/db1i46uiv/image/upload/v1733690107/file_14969669_etuilb.png"
    },
    {
      "id": 8,
      "title": "Sepsis Trust Dentist Campaign Poster",
      "url": "/posters/Sepsis Trust Dentist Campaign Poster.jpg",
      "filename": "sepsis-trust-dentist-campaign-poster.jpg",
      "img": "https://res.cloudinary.com/db1i46uiv/image/upload/v1733690807/png_9497371_mgwu7r.png"
    }
  ]
  



  return (
    <>
      <div className="st-height-b125 st-height-lg-b80" id="home"></div>
      <div className="st-height-b120 st-height-lg-b80" />
      <SectionHeading subTitle="Comprehensive Policies and Guidelines for Excellence in Dental Practice" title="Pav Dental Documents" />

      <div className="container headingdownload">
        <div className="downloadfilename">
          <div className="filename"><p>Policies</p></div>
          <div className="filedownload"><p>Download</p></div>
        </div>
      </div>
      <div className="container mb-5">
        {documents.map((document) => (
          <div className="downloadfile">
            <div className="downfirst">
              <div className="pdfimg">
                <img src="https://res.cloudinary.com/db1i46uiv/image/upload/v1733687666/document_16509217_dvrvoh.png" alt="pdf" />
              </div>
              <div className="filedownload"><p>{document.title}</p></div>
            </div>
            <a
              key={document.id}
              href={document.url}
              download={document.filename}
              className="d-block"
            >
              <p className="downloadable">Download</p>
            </a>
          </div>

        ))}
         
      </div>
      <div className="container headingdownload">
        <div className="downloadfilename">
          <div className="filename"><p>Consent Forms</p></div>
          <div className="filedownload"><p>Download</p></div>
        </div>
      </div>
      <div className="container mb-5">
        
          {consentForms.map((consentForms) => (
            <div className="downloadfile">
              <div className="downfirst">
                <div className="pdfimg">
                  <img src="https://res.cloudinary.com/db1i46uiv/image/upload/v1733690107/file_14969669_etuilb.png" alt="pdf" />
                </div>
                <div className="filedownload"><p>{consentForms.title}</p></div>
              </div>
              <a
                key={consentForms.id}
                href={consentForms.url}
                download={consentForms.filename}
                className="d-block"
              >
                <p className="downloadable">Download</p>
              </a>
            </div>

          ))}
         
      </div>
      <div className="container headingdownload mt-10">
        <div className="downloadfilename">
          <div className="filename"><p>Posters</p></div>
          <div className="filedownload"><p>Download</p></div>
        </div>
      </div>
      <div className="container mb-5">
          {poster.map((poster) => (
            <div className="downloadfile">
              <div className="downfirst">
                <div className="pdfimg">
                  <img src={poster.img} alt="pdf" />
                </div>
                <div className="filedownload"><p>{poster.title}</p></div>
              </div>
              <a
                key={poster.id}
                href={poster.url}
                download={poster.filename}
                className="d-block"
              >
                <p className="downloadable">Download</p>
              </a>
            </div>

          ))}
      </div>

    </>
  );
};

export default PracticePolicy;