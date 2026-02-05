import React from "react";
import Hero3 from "../../Components/Hero/Hero3";
import Pricing from "../../Components/Slider/PriceSlider2";
import AboutC from "../../Components/About/AboutC";
import AboutA from "../../Components/About/AboutA";
import parse from "html-react-parser";
import BookButton from "../../Components/BookButton/BookButton";
import Contact from "../../Components/Contact/Contact";
import Accordion from "../../Components/Accordion/Accordion2";
import { Helmet } from "react-helmet-async";

const heroData = [
  {
    title: "0% Finance Available On <br/> Private Treatments",
    mobileTitle: "0% Finance Available <br/>  On Private Treatments",
    flex: "none",
    buttonBottom: "Book appointment",
    buttonBottomLnk: "https://pavdental.setmore.com/",
    bgGradient: "",
    subTitle: `Don’t let the cost of treatment get in the way of your smile.<br/> 
    Spread the cost of your dental treatment`,
    bgImg:
      "https://res.cloudinary.com/db1i46uiv/image/upload/v1762671199/Untitled_design_1_eoh2bh.png",
  },
];


const aboutData = {
  title:
    "Why use patient finance?",
  subTitle: `Everyone deserves to feel confident about their smile. But the cost of treatment can sometimes get in the way of improving the appearance and health of your teeth. That’s why we’re introducing Tabeo Personal Finance who can arrange patient finance as a helpful way of spreading the cost of your treatment.
  <br/><br/>
  You can choose a payment plan that fits your budget, making it easier to start your treatment without delay. With simple monthly installments and a quick, hassle-free application process, you get the flexibility you need while keeping your smile journey stress free. Our goal is to make quality dental care accessible, so you can focus on feeling good about your smile instead of worrying about the cost.`,
  img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1762677014/19448_sftnrt.jpg",
};

const vacancies = [
  {
    title: "Allows you to spread the cost ",
    text: "you can opt to have the treatment you want, when you want it, on a repayment plan to suit your circumstances",
  },
  {
    title: "Wider choice of treatments ",
    text: "you can access a fuller range of treatments and choose the perfect option for you.",
  },
  {
    title: "Payment terms to suit you ",
    text: "with a range of credit and payment options available, you can choose the one best suited to your circumstances.",
  },
  {
    title: "No up-front deposit option",
    text: "with no initial financial outlay, you can avoid dipping into your savings or having to find a lump sum to start your treatment.",
  },
];

const WhyPav = [
  {
    title: "Patient Finance",
    text: "Patient finance makes your treatment accessible by spreading the cost.",
  },
  {
    title: "Equal Monthly Payments",
    text: "You pay the same amount each month for a set period of time, so you don’t have to pay for your treatment in one go.",
  },
  {
    title: "Finance Calculator",
    text: "Check out our quick and easy to use finance calculator to get an estimate of what your repayment options might be.",
  },
];

const faqData = {
  title: "Frequently Asked Question  ",
  faqItems: [
    {
      title: "Who can benefit?",
      content:
        "Just about anyone over the age of 18, subject to status. You don’t have to belong to a private plan or be a regular visitor at this practice."
    },
    {
      title: "What can I use it for?",
      content:
        "You can use a payment plan to pay for most treatments, especially cosmetic, aesthetic, orthodontic, or dental implant work. Ask our reception team if you'd like to check your treatment eligibility."
    },
    {
      title: "How much can I borrow?",
      content:
        "Depending on the type of credit, you can borrow from £99, subject to status. Most patients receive a decision within a day, allowing treatment plans to be agreed quickly."
    },
    {
      title: "How do I make the repayments?",
      content:
        "Repayments are made monthly over an agreed term, similar to any other loan. Payments are collected via direct debit."
    },
    {
      title: "How much will I pay?",
      content:
        "We provide clear repayment schemes with a quotation showing your monthly payment and total interest payable. No hidden costs, and an upfront deposit is not always required."
    },
    {
      title: "What are the repayment terms?",
      content:
        "Designated members of our practice team will go through the available terms and help you choose the most suitable repayment period."
    },
    {
      title: "How do I apply?",
      content:
        "After agreeing on your treatment and cost with your clinician, we take a few basic details and email you the application. Once approved and processed, you’ll receive written confirmation from the credit provider."
    },
    {
      title: "Who is the credit provider?",
      content:
        "Credit is provided by Tabeo Finance."
    },
    {
      title: "What happens if my treatment costs more than expected?",
      content:
        "We will notify you immediately, and you may choose to apply for an additional facility to cover the extra costs."
    },
    {
      title: "What happens if my treatment costs less than expected?",
      content:
        "The remaining balance of your loan will be reviewed by the lender, and they will discuss options for reducing your loan."
    },
    {
      title: "How often can I use the facility?",
      content:
        "You can apply for a payment plan for each course of treatment, subject to status."
    },
    {
      title: "How do I complain about my financial product?",
      content:
        "If you wish to raise a complaint, please contact our Patient Support Team. If your agreement is FCA regulated and you remain dissatisfied, you may refer your complaint to the Financial Ombudsman Service free of charge within six months of our final response. Visit www.financial-ombudsman.org.uk for more information."
    }
  ]
};

const depositOptions = [
  {
    title: "Deposit Requirement",
    text: "It’s entirely up to you - a deposit isn’t required upfront. But you can choose to pay one if it suits you.",
  },
  {
    title: "Reduced Monthly Repayments",
    text: "Paying an upfront deposit could reduce the cost of your monthly repayments. This is something you can decide at the application stage.",
  },
];

const financeOptions = [
  {
    title: "0% APR Finance",
    text: "You can apply for finance at 0% APR*, also called interest-free finance, to pay for treatments that cost between £500 and £50,000, provided you select a repayment term of 12, 18, 24, 36 or 40 months.",
  },
  {
    title: "7.9% APR Finance",
    text: "If you prefer a longer repayment term of 48 or 60 months, you can apply for finance at 7.9% APR representative*.",
  },
];
const repaymentExamples = [
  {
    title: "Personalized Examples",
    text: "Once you know the cost of your treatment plan, simply speak to the friendly practice team and they can provide you with an example of what your repayments might be based on your choice of repayment term.",
  },
  {
    title: "Representative Examples",
    text: "Here are some representative examples to show you how it all works.",
  },
];
const repaymentExamples2 = [
  {
    title:
      "Interest-free example- 0% APR* finance: repayment term of 18 months    ",
    text: `When you select a repayment term of 40 months or less, there is no interest to pay, so you don't pay back any more than the cost of treatment.
    <br/> Cost of treatment £2,000
    <br/>Loan value - £2,000
    <br/>Repayment term -18 months
    <br/>Annualised rate of interest (APR representative) - 0%*
    <br/>Monthly repayments - 18 x £111.11
    <br/>Total interest - £0.00
    <br/>Total amount repayable £1,999.98`,
  },
  {
    title:
      "Interest-bearing example- 7.9% APR representative* finance repayment term of 48 months    ",
    text: `If you choose a longer repayment term of 48 or 60 months, you can still spread the cost of treatment with fixed- monthly repayments, but you pay interest at 7.9% APR representative*.
    <br/>Cost of treatment - £2,000
    <br/>Loan value - £2,000
    <br/>Repayment term - 48 months
    <br/>Annualised rate of interest (APR representative) - 7.9%*
    <br/>Monthly repayments - 48 x £48.49
    <br/>Total interest - £327.52
    <br/>Total amount repayable £2,327.52`,
  },
];

const repaymentExamples3 = [
  {
    title: "Patient Finance Application",
    text: "Once you have agreed your treatment plan and cost with your clinician, you’ll have the option to apply for patient finance. If you’re interested, a member of the reception team will ask for your email address and send you a link to a simple application form to complete. If you’re eligible for patient finance, you can use it to help pay for your treatment. A decision is made very quickly, and you could be booking in your treatment in no time.",
  },
  {
    title: "Finance Provider Information",
    text: "Pav Dental (registered office: 1 Rose Hill Avenue, Blackburn BB1 1YF. Company No. 244415) is a trading name of Mars Purifierp. Credit is provided by Secure Trust Bank PLC trading as V12 Retail Finance with whom we have a commercial relationship (and so we are unable to provide independent advice) and is subject to age and status. Minimum spend applies.",
  },
];

const VirtualDentistry = () => {
  return (
    <>

    <Helmet>
        <title>0% Finance on Private Dental Treatments | Contact us now!</title>
        <meta
          name="description"
          content="Get 0% finance on private dental treatments in Bradford. Transform your smile today with easy monthly payments and stress-free dental care."
        />
      </Helmet>
      <div className="st-height-b125 st-height-lg-b80" id="home"></div>
      <Hero3 data={heroData} />
      <AboutA data={aboutData} />
      <div className="st-height-b120 st-height-lg-b80" />
      <h2 className="blue center">The advantages at a glance</h2>
      <div className="st-height-b80 st-height-lg-b80" />
      <div className="grid-class container">
        {vacancies.map((vacancy, index) => (
          <div className="vacancy" key={index}>
            <h4>{vacancy.title}</h4>
            <p>{vacancy.text}</p>
          </div>
        ))}
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
      <h2 className="blue center">How does patient finance work?</h2>
      <div className="st-height-b60 st-height-lg-b80" />
      <div className="container">
        <div className="row jcenter ">
          {WhyPav.map((WhyPav, index) => (
            <div className="col-lg-4 margin-g">
              <div className="vc " key={index}>
                <h4>{WhyPav.title}</h4>
                <p>{WhyPav.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
      <h2 className="blue center">Do I have to pay a deposit?</h2>
      <div className="st-height-b80 st-height-lg-b80" />
      <div className="grid-class container">
        {depositOptions.map((vacancy, index) => (
          <div className="vacancy" key={index}>
            <h4>{vacancy.title}</h4>
            <p>{vacancy.text}</p>
          </div>
        ))}
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
      <h2 className="blue center">Can I get 0% APR finance?</h2>
      <div className="st-height-b80 st-height-lg-b80" />
      <div className="grid-class container">
        {financeOptions.map((vacancy, index) => (
          <div className="vacancy" key={index}>
            <h4>{vacancy.title}</h4>
            <p>{vacancy.text}</p>
          </div>
        ))}
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
      <h2 className="blue center">
        How much will I pay each month and for how long?
      </h2>
      <div className="st-height-b80 st-height-lg-b80" />
      <div className="grid-class container">
        {repaymentExamples.map((vacancy, index) => (
          <div className="vacancy" key={index}>
            <h4>{vacancy.title}</h4>
            <p>{vacancy.text}</p>
          </div>
        ))}
      </div>
      <Pricing />
      <h2 className="blue center">
        how much will I pay each month and for how long?
      </h2>
      <div className="st-height-b80 st-height-lg-b80" />
      <div className="grid-class container">
        {repaymentExamples2.map((vacancy, index) => (
          <div className="vacancy" key={index}>
            <h4>{parse(vacancy.title)}</h4>
            <p>{parse(vacancy.text)}</p>
          </div>
        ))}
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
      <h2 className="blue center">How do I sign up for patient finance?</h2>
      <div className="st-height-b80 st-height-lg-b80" />
      <div className="grid-class container">
        {repaymentExamples3.map((vacancy, index) => (
          <div className="vacancy" key={index}>
            <h4>{parse(vacancy.title)}</h4>
            <p>{parse(vacancy.text)}</p>
          </div>
        ))}
      </div>
      <div className="st-height-b120 st-height-lg-b80" />

      <Accordion data={faqData} />
      <Contact />

      <BookButton />
    </>
  );
};

export default VirtualDentistry;
