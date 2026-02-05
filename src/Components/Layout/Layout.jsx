import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";

const headerData = {
  logo: "https://res.cloudinary.com/db1i46uiv/image/upload/v1723411040/PAV_LOGO_2-01_r2ecmh.png",
};

const footerData = {
  logo: "https://res.cloudinary.com/db1i46uiv/image/upload/v1725565405/PAV_LOGO_2-01_r2ecmh_2_kko0yz.png",
  bgImg: "",
  subTitle:
    " Leading cosmetic and dental care includes teeth whitening, veneers, implants, routine check-ups, and advanced technologies like digital imaging and laser dentistry.",
};
const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.type = "text/javascript";
  //   script.src =
  //     "https://www.cqc.org.uk/sites/all/modules/custom/cqc_widget/widget.js?data-id=1-19573535882&data-host=https://www.cqc.org.uk&type=provider";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     // Cleanup — remove the script when the component unmounts
  //     document.body.removeChild(script);
  //   };
  // }, []);


  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header data={headerData} />
          <Outlet />
          <Footer data={footerData} />
        </>
      )}
    </>
  );
};

export default Layout;
