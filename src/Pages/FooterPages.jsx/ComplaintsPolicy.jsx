import React from "react";    
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import { Helmet } from "react-helmet-async";

const ComplaintsPolicy = () => {
  return (
    <>
      <Helmet>  
        <title>
          Your Feedback Helps Us Improve – Understanding Our Complaints Policy
        </title>
        <meta
          name="description"
          content="We value your feedback. Our complaints policy ensures every concern is handled fairly, professionally, and with quick resolution."
        />
      </Helmet>
      <div className="st-height-b125 st-height-lg-b80" id="home"></div>
      <div className="st-height-b120 st-height-lg-b80" />
      <SectionHeading title="Complaints Procedure" />
      <div className="st-height-b80 st-height-lg-b80" />
      <div className="container">
        <h4>Complaints Procedure</h4>
        <p>
          We try to ensure that all of our patients are pleased with their
          experience of our services. We welcome feedback from patients and take
          any complaints seriously. We aim to deal with any complaints
          courteously and efficiently so that they can be resolved as quickly as
          possible.
        </p>
        <p>
          Our complaints procedure outlines how we will deal with any
          complaints.
        </p>
        <p>
          The person responsible for dealing with any complaints in the practice
          is the Complaint Lead.
        </p>
        <h5>Complaints Made Verbally</h5>
        <p>
          If you wish to make a complaint over the phone or in person, we will
          listen to your complaint and offer to refer you to the complaints
          lead. If they are unavailable, the staff member will take your details
          and a brief explanation of the complaint to pass on. Your complaint
          will be acknowledged within 3 working days.
        </p>
        <h5>Complaints Made via Email or Letter</h5>
        <p>
          Any letters or emails regarding a complaint will be immediately passed
          to the complaints lead. Your complaint will be acknowledged within 3
          working days.
        </p>
        <p>Email: hello@pavdental.com</p>
        <h5>Investigation</h5>
        <p>
          We will contact you to discuss your complaint unless it can be
          resolved easily. Any complaints involving clinical care will be
          referred to the treating dentist unless you request this not to
          happen.
        </p>
        <p>
          We will then investigate your complaint and will aim to have a
          response for you within 10 working days. If it is not possible to
          resolve this within that timeframe, we will inform you and let you
          know when it is likely to be resolved.
        </p>
        <p>
          Once we have made a decision regarding your complaint we will inform
          you by your preferred contact method.
        </p>
        <p>
          It is possible that if a complaint regards clinical care or is
          complex, we may need to seek advice from our insurers, indemnifiers or
          legal advisors and, therefore, may need to share some of your
          information for this purpose.
        </p>
        <h5>Complaining on behalf of someone else</h5>
        <p>
          Please note that we strictly adhere to the rules of clinical
          confidentiality. If you are complaining on behalf of someone else, we
          must know that you have their permission to do so. A note signed by
          the person concerned will be needed unless they are incapable (because
          of physical and mental illness) of providing this.
        </p>
        <h5>Time Limits for Opening Complaints</h5>
        <p>
          Complaints should be made within 12 Months of the incident or when the
          complainant first discovered the problem
        </p>
        <h5>Complaints to External Bodies</h5>
        <p>
          We hope that, if you have a problem, you will make use of our practice
          complaints procedure. We believe this will provide the best chance of
          putting right whatever has gone wrong and an opportunity to improve
          our practice. However, this does not affect your right to complain to
          an independent body, if you feel you cannot raise your complaint with
          us or you are dissatisfied with the result of our investigation.
        </p>
        <p>
          The CQC: The CQC don't get directly involved with complaints made to
          the practice. They do, however, encourage giving feedback to service
          providers.
        </p>
        <p>
          To send feedback to the CQC please go to:
          https://www.cqc.org.uk/give-feedback-on-care
        </p>
        <p>
          Telephone: 03000 616161 (Mon to Fri, 8.30am - 5.30pm Excluding Bank
          Holidays)
        </p>
        <p>
          NHS: If you would rather not go directly to your practice, you can
          contact your local ICB, which is responsible for NHS dental services.
          &lt;Please follow THIS LINK to find your local ICB contact details and
          enter the data here&gt;
        </p>
        <p>The Parliamentary and Health Service Ombudsman</p>
        <p>Telephone: 0345 015 4033</p>
        <a href="https://www.ombudsman.org.uk">Website </a>

        <p>
          Private Patients: The Dental Complaints Service handles complaints
          made by private patients.
        </p>
        <p>Telephone: 0208 253 0800 (Mon-Fri, 9am-5pm)</p>
        <p>
          {" "}
          <a href="https://dcs.gdc-uk.org/">Website</a>{" "}
        </p>

        <p>GDC</p>
        <p>Telephone: 0854 222 4141 or 0207 887 3800</p>
        <p>
          {" "}
          <a href="https://contactus.gdc-uk.org/Complaint/Process/13">
            Website
          </a>{" "}
        </p>
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
    </>
  );
};

export default ComplaintsPolicy;
