import React from "react";
import { LuMapPin, LuPhone } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";

const contactInfo = [
  {
    icon: <LuMapPin />,
    title: "Address",
    details: "HUB – 786 Leeds Road, Bradford, BD3 8TY"
  },
  {
    icon: <LuPhone />,
    title: "Phone",
    details: "0800 1938 786"
  },
  {
    icon: <HiOutlineMail />,
    title: "Email",
    details: "hello@pavdental.com"
  }
];

export default function Cta() {
  return (
    <div className="bg-red">
      <div className="container Emergency-cta">
        {contactInfo.map((info, index) => (
          <div className="pin" key={index}>
            <div className="pi">
              {info.icon}
            </div>
            <div className="pe">
              <h6>{info.title}</h6>
              <p>{info.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
