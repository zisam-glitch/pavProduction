import React from "react";
import Contacts from "../Components/Contact/Contact5";
import Social from "../Components/Social/Social3";
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <>
    <Helmet>
      <title>Book Your Consultation – Contact Dental Experts in Bradford</title>
      <meta name="description" content="your data matters. Learn how our GDPR protection policy keeps your personal information secure, confidential, and handled with full transparency." />
    </Helmet>
      <div className="st-height-b125 st-height-lg-b80 " id="home"></div>
      <div className="flex">
        <div className="col-lg-8">
          <Contacts />
        </div>
        <div className="col-lg-4 p-10-5">
        <div class="st-height-b120 st-height-lg-b0"></div>
          <div>
            <h4 className="blue">Our Address</h4>
            <p>786 Leeds Road, Bradford, BD3 9TY</p>
            <p> <a href="mailto:hello@pavdental.com">hello@pavdental.com</a></p>
            <p><a href="tel:0800 1938 786">0800 1938 786</a></p>
            <p>Whatsapp: <a target="_blank" rel="noreferrer" href="https://wa.me/447311871456"> +44 7311 871456</a></p>
          </div>
          <div class="st-height-b20 st-height-lg-b20"></div>
          <div>
            <h4 className="blue">Our Social</h4>
            <div class="st-height-b10 st-height-lg-b10"></div>
            <Social />
          </div>
          <div class="st-height-b30 st-height-lg-b30"></div>
         
          <div class="st-height-b20 st-height-lg-b20"></div>
          <div>
            <h4 className="blue">Practice Manager</h4>
            <p><a href="mailto:hello@pavdental.com">hello@pavdental.com</a></p>
          </div>
        </div>
        <div class="st-height-b0 st-height-lg-b80"></div>
      </div>
    </>
  );
}

