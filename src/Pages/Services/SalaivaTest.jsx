import React from "react";
import Hero10 from "../../Components/Hero/Hero10";
import Hero3 from "../../Components/Hero/Hero3";
import Accordion from "../../Components/Accordion/Accordion2";
import Image from "../../assets/imges/salaiveTest.jpg";
import BookButton from "../../Components/BookButton/BookButton";

const heroData = [
  {
    title: "Salaiva Testing Service    ",
    flex: "none",
    buttonBottom: "Learn More",
    buttonBottomLnk: "#container",
    subTitle: `Discover the ease and accuracy of our saliva testing kits.<br/> With quick delivery from our registered UK lab, collecting your<br/> sample at home is simple and convenient. Once returned,<br/> receive secure results and personalized recommendations <br/> from your Pav Dental provider`,
    bgImg:
      "https://res.cloudinary.com/db1i46uiv/image/upload/v1724313884/Home_2_p9dmm9.png",
  },
];

const SalaivaTestWorks = [
  {
    title: "Salaiva Testing Kits",
    text: "Pav Dental will prescribe your Salaiva testing kits from the registered lab in Uk which will arrive directly to you home",
  },
  {
    title: "Saliva Test Results",
    text: "Once the salaiva sample is collected and returned to the labboth you and your Pav Dental provider will receive the result securely on patient portal.",
  },
  {
    title: "Get Custom Recommendations",
    text: "You may opt to review your results and recieve customized recommendations based on your finding.",
  },
];

const faqData = {
  title: "Frequently Asked Question  ",
  faqItems: [
    {
      title: "Who provides saivary testing for the oral biome?",
      content:
        "Pav Dental mobile has  partnered with labs , the world leader  in salivary diagnostic to provide salivary testing  across the Uk from the comfort of your home",
    },
    {
      title: "What type of pathogens can pav dental salivary testing  detect ?",
      content:
        "Pav Dental provides some of Oral DNA's most popular tests that helps identify oral pathigens that threaten your oral and systemetic health.Common  pathogens include those that contribute gum disease cavities And ,those that increase the risk of dementia, cardiovascular disease, diabetes,strok and even birth complications. we also offer specific tests for fungle infection such as  condida.",
    },
  ],
};

const SalaivaTest = () => {
  return (
    <>
      <div className="st-height-b120 st-height-lg-b80" id="home"></div>
      <Hero3 data={heroData} />

      <div id="container" className="st-height-b120 st-height-lg-b80" />

      <div  className="container">
        <h2 className="blue center">How does salaiva testing work?</h2>
        <div  className="row jcenter ">
          {SalaivaTestWorks.map((SalaivaTestWorks, index) => (
            <div className="col-lg-4 margin-g">
              <div className="vc " key={index}>
                <h4>{SalaivaTestWorks.title}</h4>
                <p>{SalaivaTestWorks.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="st-height-b120 st-height-lg-b80" /> */}

      <div className="my-5">
        <Accordion data={faqData} />
      </div>

      <BookButton />
    </>
  );
};

export default SalaivaTest;
