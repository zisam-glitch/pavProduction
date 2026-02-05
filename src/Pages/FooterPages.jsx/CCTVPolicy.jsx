import React from "react";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import { Helmet } from "react-helmet-async";

const CCTVPolicy = () => {
  return (
    <>
      <Helmet>
        <title>
          CCTV Policy – Ensuring Safety, Security & Trust for Every Patient
        </title>
        <meta
          name="description"
          content="Our CCTV policy ensures 24/7 safety, security, and transparency for every patient and staff member across all clinic areas."
        />
      </Helmet>
      <div className="st-height-b125 st-height-lg-b80" id="home"></div>
      <div className="st-height-b120 st-height-lg-b80" />
      <SectionHeading title="CCTV Policy" />
      <div className="container mb-5">
        <p>
          We take our patient and our staff safety very seriously, therefore, we
          use CCTV at our clinics. Please read the points about our CCTV policy
          below.
          <br />
          <br />
          CCTV is in place in the reception areas and corridors.
          <br />
          <br />
          CCTV has been installed for the safety and security of our patients
          and staff.
          <br />
          <br />
          Images are recorded 24 hours a day, seven days a week and stored on
          the hard drives of the recording devices. The recording devices are
          situated in the reception area under password and only the manager and
          owners of the practice have access to the recordings. The manager
          regularly checks that the CCTV devices are working as intended.
          <br />
          <br />
          The CCTV only records images and does not record audio.
          <br />
          <br />
          Visitors to the practice have the right to request to see images of
          themselves on CCTV as part of a Data Protection request. Like all Data
          Protection requests, this request must be made in writing and the same
          exceptions apply. We charge an administration fee of £10 for this. We
          will also require information that will allow us to identify the
          visitor and the date/time of the visit.
          <br />
          <br />
          Signs informing visitors that CCTV is in place can be found at our
          clinics.
          <br />
          <br />
          The recording devices have the capability of transferring data to an
          external drive for cooperation with the relevant authorities. We only
          ever do this where there is cause to believe the safety and security
          of patients/staff has been compromised. We do not ever share images
          with other third parties.
          <br />
          <br />
          All CCTV recordings are stored on our recording devices’ hard-drives
          for 30 days before being wiped.
          <br />
          <br />
          We have followed the CCTV guidelines produced by the Information
          Commissioners’ Office – ICO.
        </p>
      </div>
    </>
  );
};

export default CCTVPolicy;
