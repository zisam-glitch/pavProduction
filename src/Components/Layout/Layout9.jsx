import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header3";
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

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {/* <Header data={headerData} /> */}
          <Outlet />
        </>
      )}
    </>
  );
};

export default Layout;
