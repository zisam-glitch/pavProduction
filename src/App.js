import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import Layout2 from "./Components/Layout/Layout9";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";
import Team from "./Pages/Team";
import Vacancies from "./Pages/Vacancies";
import Blog from "./Pages/Blog";
import Petition from "./Pages/Petition";
import PostDetails from "./Pages/PostDetails";
import EmergencyDental from "./Pages/Services/EmergencyDental";
import MobileDentistry from "./Pages/Services/MobileDentistry";
import Dentures from "./Pages/Services/Dentures";
import VirtualDentistry from "./Pages/Services/VirtualDentistry";
import GeneralDentistry from "./Pages/Services/GeneralDentistry";
import ToothExtraction from "./Pages/Services/ToothExtraction";
import Whitening from "./Pages/Services/Whitening";
import Cosmetic from "./Pages/Services/Cosmetic";
import Aesthetics from "./Pages/Services/Aesthetics";
import CustomGrillz from "./Pages/Services/CustomGrillz";
import RootCanal from "./Pages/Services/RootCanal";
import Finance from "./Pages/Services/Finance";
import Regestration from "./Pages/Regestration";
import RegestrationFrom from "./Pages/RegestrationFrom";
import Shop from "./Pages/Services/Shop";
import OralHygiene from './Pages/Services/OralHygiene'
import PageNotFound from "./Components/404/PageNotFound";
import Mouthguards from "./Pages/Services/Mouthguards";
import PrivacyPolicy from "./Pages/FooterPages.jsx/PrivacyPolicy";
import TermsAndCondition from "./Pages/FooterPages.jsx/TermsAndCondition";
import CookiePolicy from "./Pages/FooterPages.jsx/CookiePolicy";
import CCTVPolicy from "./Pages/FooterPages.jsx/CCTVPolicy";
import GDPR from "./Pages/FooterPages.jsx/GDPR";
import PracticePolicy from "./Pages/FooterPages.jsx/PracticePolicy";
import Faq from "./Pages/FooterPages.jsx/Faq";
import ComplaintsPolicy from "./Pages/FooterPages.jsx/ComplaintsPolicy";
const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="vacancies" element={<Vacancies />} />
        <Route path="team" element={<Team />} />
        <Route path="petition" element={<Petition />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<PostDetails />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path="services/emergency-dental" element={<EmergencyDental />} />
        <Route
          path="/services/mobile-dentistry"
          element={<MobileDentistry />}
        />
        <Route path="/services/dentures" element={<Dentures />} />
        <Route
          path="/services/virtual-dentistry"
          element={<VirtualDentistry />}
        />
        <Route path="/services/aesthetics" element={<Aesthetics />} />
        <Route
          path="/services/general-dentistry"
          element={<GeneralDentistry />}
        />
        <Route
          path="/services/tooth-extraction"
          element={<ToothExtraction />}
        />
        <Route path="/services/whitening" element={<Whitening />} />
        <Route path="/services/cosmetic" element={<Cosmetic />} />
        <Route path="/services/custom-grillz" element={<CustomGrillz />} />
        <Route path="/services/finance" element={<Finance />} />
        <Route path="/services/root-canal" element={<RootCanal />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/services/mouthguards" element={<Mouthguards />} />
        <Route path="/services/oral-hygiene" element={<OralHygiene />} />

        {/* <Route path="/services/regestration" element={<Regestration />} /> */}

        {/* footer links */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-condition" element={<TermsAndCondition />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/cctv-policy" element={<CCTVPolicy />} />
        <Route path="/gdpr" element={<GDPR />} />
        <Route path="/practice-policy" element={<PracticePolicy />} />
        <Route path="/complaints-policy" element={<ComplaintsPolicy />} />
        <Route path="/faq" element={<Faq />} />
      </Route>
      <Route path="/" element={<Layout2 />}>
        <Route path="/services/regestration" element={<RegestrationFrom />} />
      </Route>
    </Routes>
  );
};

export default App;
