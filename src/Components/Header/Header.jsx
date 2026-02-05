import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import BookingButton from "../BookButton/BookButton2";
import Whatsapp from "../BookButton/Whatapp";

const Header = ({ data }) => {
  const { logo } = data;

  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [active, setActive] = useState(false);

  const handleMobileToggle = () => {
    setMobileToggle(!mobileToggle);
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowTop = window.scrollY || document.documentElement.scrollTop;
      const headerHeight =
        document.querySelector(".st-sticky-header").offsetHeight + 100;

      if (windowTop >= headerHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`st-site-header st-style1 st-sticky-header ${
          isSticky ? "st-sticky-active" : ""
        }`}
      >
        <div className="st-top-header">
          <div className="container">
            <div className="st-top-header-in">
              <ul className="st-top-header-list">
                <li>
                  <svg
                    enableBackground="new 0 0 479.058 479.058"
                    viewBox="0 0 479.058 479.058"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m434.146 59.882h-389.234c-24.766 0-44.912 20.146-44.912 44.912v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159l-200.355 173.649-200.356-173.649c1.769-.736 3.704-1.159 5.738-1.159zm0 299.411h-389.234c-8.26 0-14.971-6.71-14.971-14.971v-251.648l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                  </svg>
                  <a href="hello:private@pavdental.com">
                    {" "}
                    hello@pavdental.com{" "}
                  </a>
                </li>
                <li>
                  <svg
                    enableBackground="new 0 0 512.021 512.021"
                    viewBox="0 0 512.021 512.021"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="m367.988 512.021c-16.528 0-32.916-2.922-48.941-8.744-70.598-25.646-136.128-67.416-189.508-120.795s-95.15-118.91-120.795-189.508c-8.241-22.688-10.673-46.108-7.226-69.612 3.229-22.016 11.757-43.389 24.663-61.809 12.963-18.501 30.245-33.889 49.977-44.5 21.042-11.315 44.009-17.053 68.265-17.053 7.544 0 14.064 5.271 15.645 12.647l25.114 117.199c1.137 5.307-.494 10.829-4.331 14.667l-42.913 42.912c40.482 80.486 106.17 146.174 186.656 186.656l42.912-42.913c3.837-3.837 9.36-5.466 14.667-4.331l117.199 25.114c7.377 1.581 12.647 8.101 12.647 15.645 0 24.256-5.738 47.224-17.054 68.266-10.611 19.732-25.999 37.014-44.5 49.977-18.419 12.906-39.792 21.434-61.809 24.663-6.899 1.013-13.797 1.518-20.668 1.519zm-236.349-479.321c-31.995 3.532-60.393 20.302-79.251 47.217-21.206 30.265-26.151 67.49-13.567 102.132 49.304 135.726 155.425 241.847 291.151 291.151 34.641 12.584 71.867 7.64 102.132-13.567 26.915-18.858 43.685-47.256 47.217-79.251l-95.341-20.43-44.816 44.816c-4.769 4.769-12.015 6.036-18.117 3.168-95.19-44.72-172.242-121.772-216.962-216.962-2.867-6.103-1.601-13.349 3.168-18.117l44.816-44.816z" />
                      <path d="m496.02 272c-8.836 0-16-7.164-16-16 0-123.514-100.486-224-224-224-8.836 0-16-7.164-16-16s7.164-16 16-16c68.381 0 132.668 26.628 181.02 74.98s74.98 112.639 74.98 181.02c0 8.836-7.163 16-16 16z" />
                      <path d="m432.02 272c-8.836 0-16-7.164-16-16 0-88.224-71.776-160-160-160-8.836 0-16-7.164-16-16s7.164-16 16-16c105.869 0 192 86.131 192 192 0 8.836-7.163 16-16 16z" />
                      <path d="m368.02 272c-8.836 0-16-7.164-16-16 0-52.935-43.065-96-96-96-8.836 0-16-7.164-16-16s7.164-16 16-16c70.58 0 128 57.42 128 128 0 8.836-7.163 16-16 16z" />
                    </g>
                  </svg>
                  <a href="tel:0800 1938 786" to="contact">
                    {" "}
                    0800 1938 786
                  </a>
                </li>
                <li>
                  <svg
                    fill="#000000"
                    width="30px"
                    height="30px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>whatsapp</title>
                    <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path>
                  </svg>
                  <a
                    href="https://wa.me/447311871456"
                    target="_blank"
                    rel="noopener noreferrer"
                    to="contact"
                  >
                    {" "}
                    44 7311 871456
                  </a>
                </li>
              </ul>
              <div className="location">
                <FiMapPin />
                <a
                  href="https://www.google.com/maps/place/Dr+Pav+Aesthetic+Dentist/@51.746283,-0.48786,16z/data=!4m6!3m5!1s0x48764355a891337f:0x30d36970f9ded11b!8m2!3d51.7462825!4d-0.4878604!16s%2Fg%2F11m_lcrktb?hl=en&entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  786 Leeds Road, Bradford, BD3 9TY
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="st-main-header">
          <div className="container">
            <div className="st-main-header-in">
              <div className="st-main-header-left">
                <Link to="/" className="st-site-branding">
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
              <div className="st-main-header-right">
                <div className="st-nav">
                  <ul
                    className={`st-nav-list st-onepage-nav ${
                      mobileToggle ? "d-block" : "d-none"
                    }`}
                  >
                    <li>
                      <NavLink to="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        onClick={() => setMobileToggle(false)}
                      >
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services"
                        onClick={() => setMobileToggle(false)}
                      >
                        <div className="servicesPlus">
                          <div> Services </div>
                          <div
                            className="plus"
                            onClick={() => setActive(!active)}
                          >
                            +
                          </div>
                        </div>
                      </NavLink>
                      <ul className={active ? "dis-block" : "dis-none"}>
                        <li>
                          <NavLink to="/services/emergency-dental">
                            Emergency Dental
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/services/tooth-extraction">
                            Tooth Extraction
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/services/root-canal">
                            Root Canal
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/services/oral-hygiene">
                            Oral Hygiene
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/services/general-dentistry">
                            General Dentistry
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/services/dentures">Dentures </NavLink>
                        </li>
                        <li>
                          <NavLink to="/services/whitening">Whitening</NavLink>
                        </li>
                        <li>
                          <NavLink to="/services/cosmetic">Cosmetic</NavLink>
                        </li>
                         <li>
                          <NavLink to="/services/aesthetics">
                            Aesthetics
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/services/custom-grillz">
                            Custom Grillz
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/services/mouthguards">
                            Mouthguards
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/services/mobile-dentistry">
                            Mobile Dentistry
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/services/virtual-dentistry">
                            Virtual Dentistry
                          </NavLink>
                        </li>
                  
                        <li>
                          <NavLink to="/services/finance">Finance</NavLink>
                        </li>
                        <li>
                          <NavLink to="/services/regestration">
                            Registration
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink
                        to="/pricing"
                        onClick={() => setMobileToggle(false)}
                      >
                        Pricing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contact-us"
                        onClick={() => setMobileToggle(false)}
                      >
                        Contact
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/team"
                        onClick={() => setMobileToggle(false)}
                      >
                        Team
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/shop"
                        onClick={() => setMobileToggle(false)}
                      >
                        Shop
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/petition"
                        onClick={() => setMobileToggle(false)}
                      >
                        Petition
                      </NavLink>
                    </li>

                    <li className="menu-item-has-children">
                      <NavLink
                        to="/vacancies"
                        onClick={() => setMobileToggle(false)}
                      >
                        Vacancies
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog"
                        onClick={() => setMobileToggle(false)}
                      >
                        Blogs
                      </NavLink>
                    </li>
                  </ul>
                  <div
                    className={`st-munu-toggle ${
                      mobileToggle ? "st-toggle-active" : ""
                    } `}
                    onClick={handleMobileToggle}
                  >
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </header>
      <div className="ficed">
        <BookingButton />
      </div>
      <div className="ficed2">
        <Whatsapp />
      </div>
    </>
  );
};

export default Header;
