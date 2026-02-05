import React from "react";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import { Helmet } from "react-helmet-async";

const GDPR = () => {
  return (
    <>
      <Helmet>
        <title>
         Your Data, Your Rights — Understanding Our GDPR Protection Policy
        </title>
        <meta
          name="description"
          content="Your data matters. Learn how our GDPR protection policy keeps your personal information secure, confidential, and handled with full transparency."
        />
      </Helmet>
      <div className="st-height-b125 st-height-lg-b80" id="home"></div>
      <div className="st-height-b120 st-height-lg-b80" />
      <SectionHeading title="GDPR" />
      <div className="container mb-5">
        <p>
          From May 2018 Europe’s data protection rules will undergo their
          biggest changes in two decades. Since they were created in the 1990s,
          the amount of digital information we create, capture, and store has
          vastly increased. Simply put, the old regime was no longer fit for
          purpose.
          <br />
          <br />
          The solution is the mutually agreed European General Data Protection
          Regulation (GDPR), which will come into force on May 25th, 2018 and
          become part of Law. It will change how businesses and public-sector
          organisations can handle the information of customers.
          <br />
          <br />
          GDPR means that we at Parish Dental will be more accountable for
          handling of people’s personal information and as such we have updated
          our data protection policies.
          <br />
          <br />
        </p>
        <h4>Data Protection Code of Practice</h4>
        <br />
        <br />
        <p>
          Our data protection code of practice lays out our procedures that
          ensure Parish Dental and our employees comply with The Data Protection
          Law, 2001 and The General Data Protection Regulation (GDPR)
          (Regulation (EU) 2016/679)
        </p>
        <br />
        <br />
        <h4>What personal data do we hold?</h4>
        <br />
        <br />
        <p>
          To provide patients with a high standard of dental care and attention,
          we need to hold their personal information. This personal data can
          include:
        </p>
        <ul>
          <li>
            <p>
              Past and current medical and dental condition; personal details
              such as age, address, telephone number and general medical
              practitioner
            </p>
          </li>
          <li>
            <p>Radiographs, clinical photographs and study models</p>
          </li>
          <li>
            <p>
              Information about their treatment that we have provided or propose
              and its cost
            </p>
          </li>
          <li>
            <p>
              Notes of conversations or incidents that might occur for which a
              record needs to be kept
            </p>
          </li>
          <li>
            <p>Records of consent to treatment</p>
          </li>
          <li>
            <p>
              Any correspondence relating to them and other health care
              professionals, for example in the hospital or Medical Specialist
              Group.
            </p>
          </li>
        </ul>
        <br />
        <br />
        <h4>Why do we hold information about you?</h4>
        <br />
        <br />
        <p>
          We need to keep comprehensive and accurate personal data about
          patients to provide you with safe and appropriate dental care. We will
          ask you yearly to update your medical history and contact details.
        </p>
        <br />
        <br />
        <h4>Retaining information</h4>
        <br />
        <br />
        <p>
          We will retain your dental records while you are a practice patient
          and after you cease to be a patient, for at least eleven years, or for
          children until age 25, whichever is the longer.
        </p>
        <br />
        <br />
        <h4>Security of information</h4>
        <br />
        <br />
        <p>
          Personal data about you is held in the practice’s computer system
          and/or in a locked manual filing system. The information is only
          accessible to authorized team members. Our computer system has secure
          audit trails and we back up information routinely.
        </p>
        <br />
        <br />
        <h4>Disclosure of information</h4>
        <br />
        <br />
        <p>
          To provide proper and safe dental care we may need to disclose
          personal information about you to:
        </p>
        <br />
        <br />
        <ul>
          <li>
            <p>Your general medical practitioner</p>
          </li>
          <li>
            <p>Hospitals</p>
          </li>
          <li>
            <p>Scanning and X-ray facility units</p>
          </li>
          <li>
            <p>Other health professionals caring for you</p>
          </li>
          <li>
            <p>Social Security Authority</p>
          </li>
          <li>
            <p>Private dental schemes of which you are a member</p>
          </li>
          <li>
            <p>Medical Specialist Group</p>
          </li>
          <li>
            <p>Agents and Third parties as required by legal and law</p>
          </li>
        </ul>
        <br />
        <br />
        <p>
          Disclosure will take place on a ‘need-to-know’ basis. Only those
          individuals/organisations who need to know to provide care for you and
          for the proper administration of Government (whose personnel are
          covered by strict confidentiality rules) will be given the
          information. In very limited circumstances or when required by law or
          a court order, personal data may have to be disclosed to a third party
          not connected with your health care. In all other situations,
          disclosure that is not covered by this Code of Practice will only
          occur when we have your specific consent. Where possible you will be
          informed of these requests for disclosure.
        </p>
        <br />
        <br />
        <h4>Access to your records</h4>
        <br />
        <br />
        <p>
          You have the right of access to the data that we hold about you and to
          receive a copy. Parents may access their child’s records if this is in
          the child’s best interests and not contrary to a competent child’s
          wishes. Formal applications for access must be in writing to The
          Practice Manager.
        </p>
        <br />
        <br />
        <h4>If you do not agree</h4>
        <br />
        <br />
        <p>
          If you do not wish personal data that we hold about you to be
          disclosed or used in the way that is described in this Code of
          Practice, please discuss the matter with your dentist. You have the
          right to object. You have a right to withdraw your consent at any
          time, however this will not be retrospective.
        </p>
      </div>
    </>
  );
};

export default GDPR;
