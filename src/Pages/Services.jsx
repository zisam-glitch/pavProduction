import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { Helmet } from "react-helmet-async";

export default function Services() {
  const services = [
    {
      link: "/services/emergency-dental",
      icon: EmergencyDental,
      title: "Emergency Dental",
      description:
        " We offer same day emergency dental care 24-hours a day, seven days a week.",
    },
    {
      link: "/services/tooth-extraction",
      icon: ToothExtraction,
      title: "Tooth Extraction",
      description: "Pain free tooth removal at pav dental care",
    },
    {
      link: "/services/root-canal",
      icon: RootCanal,
      title: "Root Canal",
      description: "Root canal treatment at pav dental care",
    },
    {
      link: "/services/oral-hygiene",
      icon: OralHygiene,
      title: "Oral hygiene",
      description: "Oral hygiene treatment at pav dental care",
    },
    {
      link: "/services/general-dentistry",
      icon: GeneralDentistry,
      title: "General Dentistry",
      description:
        "We offer a large range of treatment options and procedures which are fundam...",
    },
    {
      link: "/services/dentures",
      icon: Dentures,
      title: "Dentures",
      description: "Dentures at pav dental care",
    },
    {
      link: "/services/whitening",
      icon: Whitening,
      title: "Whitening",
      description:
        "Try our simple, safe and effective teeth whitening and see a significant impro...",
    },
    {
      link: "/services/cosmetic",
      icon: Cosmetic,
      title: "Cosmetic",
      description: "Top Cosmetic Dentistry Clinic in Leeds Pav Dental",
    },
    {
      link: "/services/aesthetics",
      icon: Aesthetics,
      title: "Aesthetics",
      description:
        "Enhance your natural beauty with our personalised facial aesthetic treatments.",
    },
    {
      link: "/services/custom-grillz",
      icon: CustomGrillz,
      title: "Custom Grillz",
      description:
        "At Pav Dental, we believe in a personalized approach to dental aesthetics. Our cu...",
    },
    {
      link: "/services/mouthguards",
      icon: Mouthguards,
      title: "Mouthguards",
      description: "Designed for comfort, accuracy and full protection",
    },
    {
      link: "/services/mobile-dentistry",
      icon: MobileDentistry,
      title: "<span>Coming Soon</span> <br/><br/>Mobile Dentistry",
      description:
        "Enabling our patients to access treatment in the comfort of their own home.",
    },
    {
      link: "/services/virtual-dentistry",
      icon: VirtualDentistry,
      title: "<span>Coming Soon</span> <br/><br/>Virtual Dentistry ",
      description:
        "Virtual dental consultations from the comfort of your home.",
    },

    {
      link: "/services/finance",
      icon: Finance,
      title: "Finance",
      description: "0% Finance Available On Private Treatments...",
    },

    {
      link: "/services/regestration",
      icon: Regestration,
      title: "Registration",
      description:
        "Register with Pav Dental to access our full range of services",
    },
  ];

  return (
    <section>
      <Helmet>
        <title>
          Emergency Private Dental Clinic in Bradford | Book Your Appointment
          Now
        </title>
        <meta
          name="description"
          content="Need fast dental treatment in Leeds? Our Emergency Private Clinic offers same-day care. Book your appointment now."
        />
      </Helmet>
      <div className="st-height-b125 st-height-lg-b40" id="home"></div>
      <div id="advertisers" className="advertisers-service-sec pt-5 pb-40">
        <div className="container">
          <div className="st-height-b40 st-height-lg-b40" id="home"></div>
          <div className="row">
            <div className="section-header text-center">
              <h1 className="st-section-heading-title blue">Our Services</h1>
            </div>
          </div>
          <div className="st-height-b40 st-height-lg-b0" id="home"></div>
          <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
            {services.map((service, index) => (
              <div className="col" key={index}>
                <Link to={service.link}>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <service.icon />
                    </div>
                    <h3>{parse(service.title)}</h3>
                    <p>{service.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const EmergencyDental = ({ isActive }) => (
  <img
    className="w-60"
    src={
      isActive
        ? ""
        : "https://res.cloudinary.com/db1i46uiv/image/upload/v1724269989/icons8-tooth-stethoscope-64_wb0w03.png"
    }
    alt="Emergency Dental"
  />
);
const MobileDentistry = ({ isActive }) => (
  <img
    className="w-60"
    src="https://res.cloudinary.com/dyc90cwdt/image/upload/v1770292930/icons8-van-50_r2m6zv.png"
    alt="Mobile Dentistry"
  />
);
const VirtualDentistry = ({ isActive }) => (
  <img
    className="w-60"
    src="https://res.cloudinary.com/dyc90cwdt/image/upload/v1770292929/icons8-video-conference-50_tqry66.png"
    alt="Mobile Dentistry"
  />
);
const Aesthetics = ({ isActive }) => (
  <img
    className="w-60"
    src={
      isActive
        ? "https://res.cloudinary.com/db1i46uiv/image/upload/v1716967878/icons8-dental-91_1_dndxqn.png"
        : "https://res.cloudinary.com/db1i46uiv/image/upload/v1724270695/icons8-dental-crown-90_u0fovo.png"
    }
    alt="Aesthetics"
  />
);
const GeneralDentistry = ({ isActive }) => (
  <img
    className="w-60"
    src={
      isActive
        ? "https://res.cloudinary.com/db1i46uiv/image/upload/v1716968025/icons8-set-of-teeth-50_dnmmya.png"
        : "https://res.cloudinary.com/db1i46uiv/image/upload/v1724270786/icons8-teeth-100_gx6pnk.png"
    }
    alt="General Dentistry"
  />
);
const ToothExtraction = ({ isActive }) => (
  <img
    className="w-60"
    src={
      isActive
        ? "https://res.cloudinary.com/db1i46uiv/image/upload/v1716968245/icons8-tooth-extraction-64_1_pykqs8.png"
        : "https://res.cloudinary.com/db1i46uiv/image/upload/v1724270862/icons8-tooth-extraction-64_zasnor.png"
    }
    alt="Tooth Extraction"
  />
);
const Whitening = ({ isActive }) => (
  <img
    className="w-60"
    src={
      isActive
        ? "https://res.cloudinary.com/db1i46uiv/image/upload/v1716968488/icons8-tooth-whitening-96_1_y3zqoo.png"
        : "https://res.cloudinary.com/db1i46uiv/image/upload/v1724271203/icons8-tooth-whitening-64_1_hraots.png"
    }
    alt="Whitening"
  />
);
const Cosmetic = () => (
  <img
    className="w-60"
    src="https://res.cloudinary.com/db1i46uiv/image/upload/v1724274725/icons8-dental-floss-100_vmnthl.png"
    alt="Cosmetic"
  />
);
const CustomGrillz = () => (
  <img
    className="w-60"
    src="https://res.cloudinary.com/db1i46uiv/image/upload/v1724274725/icons8-demon-mouth-96_luonud.png"
    alt="Cosmetic"
  />
);
const Mouthguards = () => (
  <img
    className="w-60"
    src="https://res.cloudinary.com/dyc90cwdt/image/upload/v1770293449/icons8-mouthguard-50_mugkcc.png"
    alt="Cosmetic"
  />
);
const Finance = () => (
  <img
    className="w-60"
    src="https://res.cloudinary.com/db1i46uiv/image/upload/v1724274725/icons8-invoice-100_rscmof.png"
    alt="Cosmetic"
  />
);
const Shop = () => (
  <img
    className="w-60"
    src="https://res.cloudinary.com/db1i46uiv/image/upload/v1724274725/icons8-invoice-100_rscmof.png"
    alt="Cosmetic"
  />
);
const Regestration = () => (
  <img
    className="w-60"
    src="https://res.cloudinary.com/db1i46uiv/image/upload/v1759049287/icons8-registration-50_o6rmge.png"
    alt="Cosmetic"
  />
);
const RootCanal = () => (
  <img
    className="w-60"
    src="https://res.cloudinary.com/dyc90cwdt/image/upload/v1770292581/icons8-root-canal-64_cywk2t.png"
    alt="Cosmetic"
  />
);
const OralHygiene = () => (
  <img
    className="w-60"
    src="https://res.cloudinary.com/dyc90cwdt/image/upload/v1770292825/icons8-dental-care-64_dsv0tu.png"
    alt="Cosmetic"
  />
);
const Dentures = () => (
  <img
    className="w-60"
    src="https://res.cloudinary.com/dyc90cwdt/image/upload/v1770293146/icons8-dentures-64_mtklub.png"
    alt="Cosmetic"
  />
);
