import React from "react";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import { Helmet } from "react-helmet-async";

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>
          Cookie Usage & Privacy Policy – Keeping Your Data Safe
        </title>
        <meta
          name="description"
          content="Our cookie and privacy policy explains how we collect, use, and protect your data to ensure a safe, transparent, and secure browsing experience."
        />
      </Helmet>
      <div className="st-height-b125 st-height-lg-b80" id="home"></div>
      <div className="st-height-b120 st-height-lg-b80" />
      <SectionHeading title="Cookie Policy" />
      <div className="container mb-5">
        <p>
          This site uses cookies – small text files that are placed on your
          machine to help the site provide a better user experience. In general,
          cookies are used to retain user preferences, store information for
          things like shopping baskets, and provide anonymised tracking data to
          third party applications like Google Analytics. As a rule, cookies
          will make your browsing experience better.
          <br />
          <br />
          However, you may prefer to disable cookies on this site and on others.
          The most effective way to do this is to disable cookies in your
          browser. We suggest consulting the Help section of your browser or
          taking a look at the About Cookies website which offers guidance for
          all modern browsers
        </p>
      </div>
    </>
  );
};

export default CookiePolicy;
