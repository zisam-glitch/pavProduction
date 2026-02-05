import React from "react";
import Hero10 from "../../Components/Hero/Hero10";
import About from "../../Components/About/AboutE";
import AboutF from "../../Components/About/AboutF";
import VideoSlider from "../../Components/Slider/VideoSlider";
import Accordion from "../../Components/Accordion/Accordion2";
import Contact from "../../Components/Contact/Contact";
import BookButton from "../../Components/BookButton/BookButton";
import Hero24 from "../../Components/Hero/Hero24";
import { Helmet } from "react-helmet-async";

const heroData = {
  sliderImages: [
    {
      img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717829785/New_Project_13_yy0b1j.png",
    },
  ],
  heading: "Designed by Dentists <br /> Developed for You",
  subHeading:
    "We offer a carefully curated selection of whitening ranges <br/> designed to effectively remove stains and discoloration,<br/> giving you the confidence to flash your pearly whites.",
};



const aboutData = {
  title: "Whitening Strips - £65  ",
  subTitle: ` Introducing mint-flavored dissolving whitening strips with an advanced enamel-safe formula. These strips are perfect for on-the-go touch-ups and ongoing smile maintenance. With a short application time and no strips to remove, they offer convenience and effectiveness. The non-slip technology and premium strength formula ensure a more powerful and long-lasting whitening result. Each pack contains 14 applications (28 strips), providing ample supply for maintaining a white and confident smile.
<br/><br/>
  <h5 className="blue">Professional Whitening Strips</h5>
  <h5 className="blue">Dissolving Whitening Strips</h5>
  `,
  img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717831205/Untitled_514_x_411_px_1_ucy225.png",
};
const aboutData2 = {
  title: "Home & In Office Whitening - £495 ",
  subTitle: ` Experience the remarkable results of our professional in-office teeth whitening gel, proudly crafted with our unique hybrid dual-action whitening gel formula. Our optimized 6% Hydrogen Peroxide + PAP formula is complemented by a pre-whitening varnish, skillfully applied to prime the teeth for an outstanding in-office whitening session. To maintain and enhance your dazzling smile, we suggest continuing your whitening journey with the BEAM Professional Whitening Kit for at-home treatment.
<br/><br/>
  <h5 className="blue">BEAM In-Office Whitening Gel  </h5>
  `,
  img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717833359/Untitled_514_x_411_px_2_xfvrvz.png",
};
const aboutData3 = {
  title: "Home Teeth Whitening - £295    ",
  subTitle: ` Our premium UK-made teeth whitening gel is meticulously crafted by dentists for optimum results. With a stable formula infused with potassium nitrate, calcium, and fluoride, it effectively minimizes sensitivity. You have the choice between hydrogen peroxide or carbamide peroxide options. Each package includes 4 x 3ml syringes and a 30ml pre-polishing paste.
<br/><br/>
  <h5 className="blue">Day Whitening Kits  </h5>
  <h5 className="blue">Night Whitening Kits  </h5>
  `,
  img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717833609/Untitled_514_x_411_px_2000_x_1600_px_1_likgak.png",
};
const aboutData4 = {
  title: "Award Winning Whitening    ",
  subTitle: `Experience our award-winning whitening treatments for a brilliantly radiant smile. Discover the difference of our acclaimed whitening services today.
  `,
  img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717834200/Untitled_514_x_411_px_2000_x_1600_px_514_x_300_px_1_f4fcoe.png",
};

const VideoData = {
  sectionHeadingData: {
    title: `Educational Videos    `,
  },
  services: [
    {
      title: " Illuminate Your Smile: The Ultimate Guide to Teeth Whitening | Pav Dental",
      videoSrc: "https://res.cloudinary.com/db1i46uiv/video/upload/v1717834837/utomp3.com_-_Illuminate_Your_Smile_The_Ultimate_Guide_to_Teeth_Whitening_Pav_Dental_360p_ppvs4y.mp4",
    },
    {
      title: "Empower Your Smile: Understanding Teeth Whitening Consent with Pav Dental",
      videoSrc: "https://res.cloudinary.com/db1i46uiv/video/upload/v1717835037/utomp3.com_-_Empower_Your_Smile_Understanding_Teeth_Whitening_Consent_with_Pav_Dental_360p_kqhd0w.mp4",
    },
  
  
   
  ],
};

const heroData3 = {
  text: "Informed Consent for Tooth Whitening",
  imgSrc:
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1725566420/pngegg_qqprat.png",
  videoSrc: "https://www.youtube.com/embed/k0VqOxTlDvA?si=-kv6-K41QTPH0sIf",
};

const faqData = {
  title: "Frequently Asked Question  ",
  faqItems: [
    {
      title: "How do whitening strips differ from trays (kits)?",
      content: "As well as being more cost-effective than trays, WhiteWash Professional Whitening Strips are more comfortable, less bulky, and allow you to whiten on the go. Whats more, each strip already contains the optimum amount of whitening gel so its less hassle for you and helps to ensure you achieve an even white smile."
    },
    {
      title: "Will I get even results?",
      content: "Each strip contains the exact amount of whitening gel to effectively whiten your teeth. Each strip should be positioned across the teeth and gently pressed into place, aiming to get maximum contact with all of your visible teeth. This will ensure even spread of the whitening gel."
    },
    {
      title: "If white spots appear will they go or are they permanent?",
      content: "No. These white spots are temporary; they are not harmful and will disappear within 24 hours."
    },
    {
      title: "What If I experience tooth sensitivity or gum irritation?",
      content: "It is not uncommon to experience tooth sensitivity and / or gum irritation whilst whitening your teeth. This is temporary and NOT harmful. To alleviate symptoms it may be sensible to whiten your teeth on alternate days, until you have used all of the strips. If the problem persists, discontinue use and consult your dentist."
    },
    {
      title: "Why can't I buy teeth whitening gel online?",
      content: "Each strip contains the exact amount of whitening gel to effectively whiten your teeth. Each strip should be positioned across the teeth and gently pressed into place, aiming to get maximum contact with all of your visible teeth. This will ensure even spread of the whitening gel."
    },
    {
      title: "Can I swallow saliva when using the whitening strips?",
      content: "Yes, you can. It is perfectly safe to swallow saliva when using the whitening strips. You may also notice a foaming reaction as the hydrogen peroxide gets to work, this is normal."
    },
    {
      title: "Are whitening strips suitable for everyone?",
      content: "Though the whitening strips are non-harmful to the human body, it is advised that children under the age of 16 (18 in the European Union due to this being a legal requirement), pregnant women, and those sensitive to hydrogen peroxide should not use them. Patients with teeth sensitive to cold, heat or acid, or those who suffer from oral ulceration should discuss this with their prescribing dentist before undergoing a course of whitening treatment."
    },
    {
      title: "Can the whitening strips be in contact with my gums?",
      content: "Yes, but such contact should be minimised to avoid gum irritation."
    },
    {
      title: "Can I use a whitening toothpaste everyday?",
      content: "Yes, you can use WhiteWash Whitening toothpastes like you would use your normal toothpaste. However this is not always the case with all whitening toothpastes as some can be extremely abrasive, so it is best to check with the specific toothpaste manufacturer."
    },
    {
      title: "What if white spots appear?",
      content: "These white spots are temporary; they are not harmful and will disappear within 24 hours."
    },
    {
      title: "Can I swallow saliva when using the whitening strips?",
      content: "Yes, you can. It is perfectly safe to swallow saliva when using the whitening strips. You may also notice a foaming reaction as the hydrogen peroxide gets to work, this is normal."
    },
    {
      title: "How do whitening strips differ from trays (kits)?",
      content: "As well as being more cost-effective than trays, WhiteWash Professional Whitening Strips are more comfortable, less bulky, and allow you to whiten on the go. Whats more, each strip already contains the optimum amount of whitening gel so its less hassle for you and helps to ensure you achieve an even white smile."
    },
    {
      title: "Will I get even results?",
      content: "Each strip contains the exact amount of whitening gel to effectively whiten your teeth. Each strip should be positioned across the teeth and gently pressed into place, aiming to get maximum contact with all of your visible teeth. This will ensure even spread of the whitening gel."
    },
    {
      title: "Are whitening strips suitable for everyone?",
      content: "Though the whitening strips are non-harmful to the human body, it is advised that children under the age of 16 (18 in the European Union due to this being a legal requirement), pregnant women, and those sensitive to hydrogen peroxide should not use them. Patients with teeth sensitive to cold, heat or acid, or those who suffer from oral ulceration should discuss this with their prescribing dentist before undergoing a course of whitening treatment."
    },
    {
      title: "If white spots appear will they go or are they permanent?",
      content: "No. These white spots are temporary; they are not harmful and will disappear within 24 hours."
    },
    {
      title: "What If I experience tooth sensitivity or gum irritation?",
      content: "It is not uncommon to experience tooth sensitivity and / or gum irritation whilst whitening your teeth. This is temporary and NOT harmful. To alleviate symptoms it may be sensible to whiten your teeth on alternate days, until you have used all of the strips. If the problem persists, discontinue use and consult your dentist."
    },
    {
      title: "Can the whitening strips be in contact with my gums?",
      content: "Yes, but such contact should be minimised to avoid gum irritation."
    },
    {
      title: "How do whitening strips differ from trays (kits)?",
      content: "As well as being more cost-effective than trays, WhiteWash Professional Whitening Strips are more comfortable, less bulky, and allow you to whiten on the go. Whats more, each strip already contains the optimum amount of whitening gel so its less hassle for you and helps to ensure you achieve an even white smile."
    },
    {
      title: "Will I get even results?",
      content: "Each strip contains the exact amount of whitening gel to effectively whiten your teeth. Each strip should be positioned across the teeth and gently pressed into place, aiming to get maximum contact with all of your visible teeth. This will ensure even spread of the whitening gel."
    },
    {
      title: "Are whitening strips suitable for everyone?",
      content: "Though the whitening strips are non-harmful to the human body, it is advised that children under the age of 16 (18 in the European Union due to this being a legal requirement), pregnant women, and those sensitive to hydrogen peroxide should not use them. Patients with teeth sensitive to cold, heat or acid, or those who suffer from oral ulceration should discuss this with their prescribing dentist before undergoing a course of whitening treatment."
    },
    {
      title: "Can I swallow saliva when using the whitening strips?",
      content: "Yes, you can. It is perfectly safe to swallow saliva when using the whitening strips. You may also notice a foaming reaction as the hydrogen peroxide gets to work, this is normal."
    },
    {
      title: "If white spots appear will they go or are they permanent?",
      content: "No. These white spots are temporary; they are not harmful and will disappear within 24 hours."
    },
    {
      title: "What If I experience tooth sensitivity or gum irritation?",
      content: "It is not uncommon to experience tooth sensitivity and / or gum irritation whilst whitening your teeth. This is temporary and NOT harmful. To alleviate symptoms it may be sensible to whiten your teeth on alternate days, until you have used all of the strips. If the problem persists, discontinue use and consult your dentist."
    },
    {
      title: "Can the whitening strips be in contact with my gums?",
      content: "Yes, but such contact should be minimised to avoid gum irritation."
    }
  ],
};


const Home10 = () => {
  return (
    <>
    <Helmet>
        <title>Professional Teeth Whitening in Bradford, UK | Contact us now!</title>
        <meta
          name="description"
          content="Get professional teeth whitening in Bradford, UK for a brighter, whiter smile. Safe, fast and expert treatment—book your appointment today."
        />
      </Helmet>
      <Hero10 data={heroData} />
      <div className="st-height-b120 st-height-lg-b50" />
      <AboutF data={aboutData} />
      <About data={aboutData3} />
      <AboutF data={aboutData2} />
      <About data={aboutData4} />
      <div className="st-height-b80 st-height-lg-b50" />
      <div className="container text-center">
        <img className="col-lg-10 "
          src="https://res.cloudinary.com/db1i46uiv/image/upload/v1717834277/whitening-products_awlk1t.webp"
          alt=""
        />
      </div>
      <div className="st-height-b80 st-height-lg-b50" />
      <Hero24 data={heroData3}  />
      <div className="st-height-b120 st-height-lg-b50" />

      <Accordion data={faqData} />
      <Contact />
      <BookButton/>


      <div className="st-height-b120 st-height-lg-b30" />
    </>
  );
};

export default Home10;
