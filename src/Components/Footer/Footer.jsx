import React, { useEffect, useState } from "react";
import Social from "../Social/Social";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import LocationInMap from "../Map/LocationInMap";
import BookingButton from "../BookButton/BookButton2";

const Footer = ({ data, varient }) => {
  const { logo, subTitle, bgImg, links } = data;
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const mapLocationURL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.852550192457!2d-1.73358082304603!3d53.792111841276494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487be16b07cdaf07%3A0x16f9946a36f8146d!2s786%20Leeds%20Rd%2C%20Bradford%20BD3%209TY%2C%20UK!5e0!3m2!1sen!2sbd!4v1725429253294!5m2!1sen!2sbd";

  return (
    <footer
      className={`st-site-footer st-sticky-footer st-dynamic-bg ${
        varient ? varient : ""
      }`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="st-main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="st-footer-widget">
                <div className="st-text-field">
                  <img src={logo} alt={logo} className="st-footer-logo" />
                  <div className="st-height-b25 st-height-lg-b25" />
                  <div className="st-footer-text">{subTitle}</div>
                  <div className="st-height-b25 st-height-lg-b25" />
                  <Social />
                  <div className="st-height-b25 st-height-lg-b25" />
                  <img src="https://res.cloudinary.com/dv5noi9zl/image/upload/v1764827716/Group_11_pbxpix_gzrrfg.png" alt="" className="st-footer-logo" />
                </div>
              </div>
            </div>
            {/* .col */}
            <div className="col-lg-3 p-r">
              <div className="st-footer-widget">
                <h2 className="st-footer-widget-title">Quick Links </h2>
                <ul className="st-footer-widget-nav st-mp0">
                  <div>
                    <li>
                      <Link to="/">
                        <Icon icon="fa:angle-right" />
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">
                        <Icon icon="fa:angle-right" />
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/services">
                        <Icon icon="fa:angle-right" />
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/pricing">
                        <Icon icon="fa:angle-right" />
                        Pricing
                      </Link>
                    </li>
                  </div>
                  <div>
                    <li>
                      <Link to="/contact-us">
                        <Icon icon="fa:angle-right" />
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link to="/team">
                        <Icon icon="fa:angle-right" />
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link to="/vacancies">
                        <Icon icon="fa:angle-right" />
                        Vacancies
                      </Link>
                    </li>
                    <li>
                      <Link to="blog">
                        <Icon icon="fa:angle-right" />
                        Blogs
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            {/* .col */}

            {/* .col */}
            <div className="col-lg-3">
              <div className="st-footer-widget">
                <h2 className="st-footer-widget-title">Contacts</h2>
                <ul className="st-footer-contact-list st-mp0">
                  <li>
                    786 Leeds Road, Bradford,
                    <br /> BD3 9TY
                  </li>

                  <li>
                    <a href="mailto:hello@pavdental.com">hello@pavdental.com</a>
                  </li>
                 

                  <li>
                    {" "}
                    <a href="tel:0800 1938 786">0800 1938 786 </a>
                  </li>
                  <li>
                    {" "}
                    <a href="https://wa.me/447311871456" target="_blank">44 7311 871456</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <LocationInMap data={mapLocationURL} />
            </div>
            {/* .col */}
          </div>
        </div>
      </div>
      <div className="st-copyright-wrap z-99999">
        <div className="container">
          <div className="st-copyright-in">
            <div className="st-left-copyright">
              <div className="st-copyright-text">
                Copyright {currentYear}. Design by{" "}
                <a target="_blank" href="https://growriva.com/">
                  <img
                    className="w-4"
                    src="https://res.cloudinary.com/db1i46uiv/image/upload/v1760541102/Group_fzixh2.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="st-right-copyright">
              <div>
                <ul className="copyright-right">
                  <div>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/terms-and-condition">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link to="/cookie-policy">Cookie Policy</Link>
                    </li>
                    <li>
                      <Link to="/cctv-policy">CCTV Policy</Link>
                    </li>
                    <li>
                      <Link to="/gdpr">GDPR</Link>
                    </li>
                  </div>
                  <div>
                    <li>
                      <a href="/sitemap.xml">Sitemap</a>
                    </li>
                    <li>
                      <Link to="/practice-policy"> Practice Policy</Link>
                    </li>
                    <li>
                      <Link to="/complaints-policy">Complaints Policy 
                      </Link>
                    </li>
                  </div>
                  <ul>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/terms-and-condition">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link to="/cookie-policy">Cookie Policy</Link>
                    </li>
                    <li>
                      <Link to="/cctv-policy">CCTV Policy</Link>
                    </li>
                    <li>
                      <Link to="/gdpr">GDPR</Link>
                    </li>
                    <li>
                      <a href="/sitemap.xml">Sitemap</a>
                    </li>
                    <li>
                      <Link to="/practice-policy"> Practice Policy</Link>
                    </li>
                    <li>
                      <Link to="/complaints-policy">Complaints Policy 
                      </Link>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
