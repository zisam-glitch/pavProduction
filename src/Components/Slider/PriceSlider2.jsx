import React, { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading2";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import Price from "../Price/Price";

const PriceSlider = ({ data }) => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={`slick-arrow-left slick-arrow ${
        currentSlide === 0 ? "slick-disabled" : ""
      }`}
      aria-hidden="true"
      aria-disabled={currentSlide === 0}
    >
      <Icon icon="fa-solid:angle-left" />
    </div>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={`slick-arrow-right slick-arrow ${
        currentSlide === slideCount - 1 ? "slick-disabled" : ""
      }`}
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1}
    >
      <Icon icon="fa-solid:angle-right" />
    </div>
  );

  // UI state for price and deposit
  const [price, setPrice] = useState(2000);
  const [deposit, setDeposit] = useState(0);
  const [isEditingPrice, setIsEditingPrice] = useState(false);
  const [isEditingDeposit, setIsEditingDeposit] = useState(false);
  const [priceInput, setPriceInput] = useState("2000");
  const [depositInput, setDepositInput] = useState("0");

  const loan = Math.max(price - deposit, 0);

  const fmt = (v) => `£${Number(v).toFixed(2)}`;

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPriceInput(value);
    const numValue = Number(value);
    if (!isNaN(numValue) && numValue >= 0) {
      setPrice(numValue);
      if (deposit > numValue) {
        setDeposit(numValue);
        setDepositInput(numValue.toString());
      }
    }
  };

  const handleDepositChange = (e) => {
    const value = e.target.value;
    setDepositInput(value);
    const numValue = Number(value);
    if (!isNaN(numValue) && numValue >= 0 && numValue <= price) {
      setDeposit(numValue);
    }
  };

  const handlePriceBlur = () => {
    setIsEditingPrice(false);
    setPriceInput(price.toString());
  };

  const handleDepositBlur = () => {
    setIsEditingDeposit(false);
    setDepositInput(deposit.toString());
  };

  const calcPayment = (P, n, annualRate) => {
    if (n <= 0) return 0;
    if (!annualRate || annualRate <= 0) return P / n;
    const r = annualRate / 12; // monthly rate
    return (P * r) / (1 - Math.pow(1 + r, -n));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section id="pricing">
      <div className="st-height-b120 st-height-lg-b80" id="home"></div>
      <h2 className="blue text-center" >How Much Will It Cost?</h2>
      {/* Price and Deposit Controls */}
      <div className="container">
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Price Slider */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Treatment Price</label>
              <div className="slider-container">
                <input
                  type="range"
                  min={0}
                  max={10000}
                  step={50}
                  value={price}
                  onChange={(e) => {
                    const next = Number(e.target.value);
                    setPrice(next);
                    setPriceInput(next.toString());
                    if (deposit > next) {
                      setDeposit(next);
                      setDepositInput(next.toString());
                    }
                  }}
                  className="custom-slider"
                  style={{
                    '--fill-percent': `${(price / 10000) * 100}%`
                  }}
                />
                <div className="slider-labels">
                  <span>£0</span>
                  <span>£10,000</span>
                </div>
              </div>
              {isEditingPrice ? (
                <div className="input-with-icon">
                  <span className="currency-symbol">£</span>
                  <input
                    type="number"
                    min="0"
                    max="10000"
                    step="50"
                    value={priceInput}
                    onChange={handlePriceChange}
                    onBlur={handlePriceBlur}
                    onKeyDown={(e) => e.key === 'Enter' && handlePriceBlur()}
                    className="price-input"
                    autoFocus
                  />
                </div>
              ) : (
                <div 
                  onClick={() => setIsEditingPrice(true)}
                  className="price-display"
                >
                  <Icon icon="mdi:pencil" className="edit-icon" />
                  <span>{fmt(price)}</span>
                </div>
              )}
            </div>
            {/* Deposit Slider */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Deposit</label>
              <div className="slider-container">
                <input
                  type="range"
                  min={0}
                  max={price}
                  step={50}
                  value={deposit}
                  onChange={(e) => {
                    const next = Math.min(Number(e.target.value), price);
                    setDeposit(next);
                    setDepositInput(next.toString());
                  }}
                  className="custom-slider"
                  style={{
                    '--fill-percent': `${(deposit / price) * 100}%`
                  }}
                />
                <div className="slider-labels">
                  <span>£0</span>
                  <span>{fmt(price)}</span>
                </div>
              </div>
              {isEditingDeposit ? (
                <div className="input-with-icon">
                  <span className="currency-symbol">£</span>
                  <input
                    type="number"
                    min="0"
                    max={price}
                    step="50"
                    value={depositInput}
                    onChange={handleDepositChange}
                    onBlur={handleDepositBlur}
                    onKeyDown={(e) => e.key === 'Enter' && handleDepositBlur()}
                    className="price-input"
                    autoFocus
                  />
                </div>
              ) : (
                <div 
                  onClick={() => setIsEditingDeposit(true)}
                  className="price-display"
                >
                  <Icon icon="mdi:pencil" className="edit-icon" />
                  <span>{fmt(deposit)}</span>
                </div>
              )}
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">Loan amount: <span className="text-primary font-semibold">{fmt(loan)}</span></div>
        </div>
      </div>
      <div className="st-height-b60 st-height-lg-b40" />
      <div className="container">
        <Slider {...settings} className="st-slider-style2 st-pricing-wrap">
          <div className="bg-white border-2 border-gray-200 rounded-lg text-center ">
            <div className="uppercase rounded-t-lg text-center px-6 py-6 bg-primary text-white font-semibold  text-sm ">
              Interest Free Finance (10 Months)
            </div>

            <ul className=" text-center list-none text-sm text-gray-600 ">
              <li className="p-3 border-gray-300 border-b-2 text-sm ">
                <span className="text-primary font-semibold text-lg">{fmt(loan)}</span>{" "}
                <br /> Loan amount
              </li>
              <li className="p-3 border-gray-300 border-b-2 text-sm bg-gray-200">
                <span className="text-primary font-semibold text-lg">{fmt(calcPayment(loan, 10, 0))}</span>{" "}
                <br /> Monthly payment
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 ">
                <span className="text-primary font-semibold text-lg">10</span>{" "}
                <br />
                Number of payments
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 bg-gray-200">
                <span className="text-primary font-semibold text-lg">
                  0.00%
                </span>{" "}
                <br />
                Representative APR
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 ">
                <span className="text-primary font-semibold text-lg">
                  0.00% Fixed
                </span>{" "}
                <br />
                Annual Rate of interest
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Total repayable: {fmt(loan)}
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Total interest: {fmt(0)}
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Arrangement fee: £0.00
              </li>
              <li className="p-3 border-gray-300 border-b-2  bg-gray-200">
                Settlement fee: £0.00
              </li>
              <li className="p-3 rounded-b-lg bg-gray-200">
                First payment in 1 morith
              </li>
            </ul>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg text-center ">
            <div className="uppercase rounded-t-lg text-center px-6 py-6 bg-primary text-white font-semibold  text-sm ">
              Classic Credit 18 months 9.9%
            </div>

            <ul className=" text-center list-none text-sm text-gray-600 ">
              <li className="p-3 border-gray-300 border-b-2 text-sm ">
                <span className="text-primary font-semibold text-lg">{fmt(loan)}</span>{" "}
                <br /> Loan amount
              </li>
              <li className="p-3 border-gray-300 border-b-2 text-sm bg-gray-200">
                <span className="text-primary font-semibold text-lg">{fmt(calcPayment(loan, 18, 0.099))}</span>{" "}
                <br /> Monthly payment
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 ">
                <span className="text-primary font-semibold text-lg">18</span>{" "}
                <br />
                Number of payments
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 bg-gray-200">
                <span className="text-primary font-semibold text-lg">
                  9.90%
                </span>{" "}
                <br />
                Representative APR
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 ">
                <span className="text-primary font-semibold text-lg">
                  5.11% Fixed
                </span>{" "}
                <br />
                Annual Rate of interest
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Total repayable: {fmt(calcPayment(loan, 18, 0.099) * 18)}
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Total interest: {fmt(calcPayment(loan, 18, 0.099) * 18 - loan)}
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Arrangement fee: £0.00
              </li>
              <li className="p-3 border-gray-300 border-b-2  bg-gray-200">
                Settlement fee: £0.00
              </li>
              <li className="p-3 rounded-b-lg bg-gray-200">
                First payment in 1 morith
              </li>
            </ul>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg text-center ">
            <div className="uppercase rounded-t-lg text-center px-6 py-6 bg-primary text-white font-semibold  text-sm ">
              Classic Credit 24 Months 9.9%
            </div>

            <ul className=" text-center list-none text-sm text-gray-600 ">
              <li className="p-3 border-gray-300 border-b-2 text-sm ">
                <span className="text-primary font-semibold text-lg">{fmt(loan)}</span>{" "}
                <br /> Loan amount
              </li>
              <li className="p-3 border-gray-300 border-b-2 text-sm bg-gray-200">
                <span className="text-primary font-semibold text-lg">{fmt(calcPayment(loan, 24, 0.099))}</span>{" "}
                <br /> Monthly payment
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 ">
                <span className="text-primary font-semibold text-lg">24</span>{" "}
                <br />
                Number of payments
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 bg-gray-200">
                <span className="text-primary font-semibold text-lg">
                  9.89%
                </span>{" "}
                <br />
                Representative APR
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 ">
                <span className="text-primary font-semibold text-lg">
                  5.08% Fixed
                </span>{" "}
                <br />
                Annual Rate of interest
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Total repayable: {fmt(calcPayment(loan, 24, 0.099) * 24)}
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Total interest: {fmt(calcPayment(loan, 24, 0.099) * 24 - loan)}
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Arrangement fee: £0.00
              </li>
              <li className="p-3 border-gray-300 border-b-2  bg-gray-200">
                Settlement fee: £0.00
              </li>
              <li className="p-3 rounded-b-lg bg-gray-200">
                First payment in 1 morith
              </li>
            </ul>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg text-center ">
            <div className="uppercase rounded-t-lg text-center px-6 py-6 bg-primary text-white font-semibold  text-sm ">
              Classic Credit 36 Moriths 9.9%
            </div>

            <ul className=" text-center list-none text-sm text-gray-600 ">
              <li className="p-3 border-gray-300 border-b-2 text-sm ">
                <span className="text-primary font-semibold text-lg">{fmt(loan)}</span>{" "}
                <br /> Loan amount
              </li>
              <li className="p-3 border-gray-300 border-b-2 text-sm bg-gray-200">
                <span className="text-primary font-semibold text-lg">{fmt(calcPayment(loan, 36, 0.099))}</span>{" "}
                <br /> Monthly payment
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 ">
                <span className="text-primary font-semibold text-lg">36</span>{" "}
                <br />
                Number of payments
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 bg-gray-200">
                <span className="text-primary font-semibold text-lg">
                  9.89%
                </span>{" "}
                <br />
                Representative APR
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 ">
                <span className="text-primary font-semibold text-lg">
                  5.09% Fixed
                </span>{" "}
                <br />
                Annual Rate of interest
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Total repayable: {fmt(calcPayment(loan, 36, 0.099) * 36)}
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Total interest: {fmt(calcPayment(loan, 36, 0.099) * 36 - loan)}
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Arrangement fee: £0.00
              </li>
              <li className="p-3 border-gray-300 border-b-2  bg-gray-200">
                Settlement fee: £0.00
              </li>
              <li className="p-3 rounded-b-lg bg-gray-200">
                First payment in 1 morith
              </li>
            </ul>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg text-center ">
            <div className="uppercase rounded-t-lg text-center px-6 py-6 bg-primary text-white font-semibold  text-sm ">
              Classic Credit 48 Months 9.9%
            </div>

            <ul className=" text-center list-none text-sm text-gray-600 ">
              <li className="p-3 border-gray-300 border-b-2 text-sm ">
                <span className="text-primary font-semibold text-lg">{fmt(loan)}</span>{" "}
                <br /> Loan amount
              </li>
              <li className="p-3 border-gray-300 border-b-2 text-sm bg-gray-200">
                <span className="text-primary font-semibold text-lg">{fmt(calcPayment(loan, 48, 0.099))}</span>{" "}
                <br /> Monthly payment
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 ">
                <span className="text-primary font-semibold text-lg">48</span>{" "}
                <br />
                Number of payments
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 bg-gray-200">
                <span className="text-primary font-semibold text-lg">
                  9.89%
                </span>{" "}
                <br />
                Representative APR
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 ">
                <span className="text-primary font-semibold text-lg">
                  5.13% Fixed
                </span>{" "}
                <br />
                Annual Rate of interest
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Total repayable: {fmt(calcPayment(loan, 48, 0.099) * 48)}
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Total interest: {fmt(calcPayment(loan, 48, 0.099) * 48 - loan)}
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Arrangement fee: £0.00
              </li>
              <li className="p-3 border-gray-300 border-b-2  bg-gray-200">
                Settlement fee: £0.00
              </li>
              <li className="p-3 rounded-b-lg bg-gray-200">
                First payment in 1 morith
              </li>
            </ul>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg text-center ">
            <div className="uppercase rounded-t-lg text-center px-6 py-6 bg-primary text-white font-semibold  text-sm ">
              Classic Credit 60 months 9.9%
            </div>

            <ul className=" text-center list-none text-sm text-gray-600 ">
              <li className="p-3 border-gray-300 border-b-2 text-sm ">
                <span className="text-primary font-semibold text-lg">{fmt(loan)}</span>{" "}
                <br /> Loan amount
              </li>
              <li className="p-3 border-gray-300 border-b-2 text-sm bg-gray-200">
                <span className="text-primary font-semibold text-lg">{fmt(calcPayment(loan, 60, 0.099))}</span>{" "}
                <br /> Monthly payment
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 ">
                <span className="text-primary font-semibold text-lg">60</span>{" "}
                <br />
                Number of payments
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 bg-gray-200">
                <span className="text-primary font-semibold text-lg">
                  9.90%
                </span>{" "}
                <br />
                Representative APR
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 ">
                <span className="text-primary font-semibold text-lg">
                  5.19% Fixed
                </span>{" "}
                <br />
                Annual Rate of interest
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Total repayable: {fmt(calcPayment(loan, 60, 0.099) * 60)}
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Total interest: {fmt(calcPayment(loan, 60, 0.099) * 60 - loan)}
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Arrangement fee: £0.00
              </li>
              <li className="p-3 border-gray-300 border-b-2  bg-gray-200">
                Settlement fee: £0.00
              </li>
              <li className="p-3 rounded-b-lg bg-gray-200">
                First payment in 1 morith
              </li>
            </ul>
          </div>
        </Slider>
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
      <style jsx>{`
        .slider-container {
          width: 100%;
          margin: 10px 0 15px;
        }
        .custom-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 4px;
          border-radius: 2px;
          background: linear-gradient(to right, rgb(146, 90, 39) 0%, rgb(146, 90, 39) var(--fill-percent), #e5e7eb var(--fill-percent), #e5e7eb 100%);
          outline: none;
          margin: 8px 0;
        }
        .custom-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px;
          height: 16px;
          background: white;
          border: 2px solid rgb(146, 90, 39);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .custom-slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }
        .custom-slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          background: white;
          border: 2px solid #3b82f6;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .slider-labels {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #6b7280;
          margin-top: 4px;
        }
        .price-display {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 8px;
          border: 1px solid #e5e7eb;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s;
          width: 120px;
          justify-content: space-between;
        }
        .price-display:hover {
          background-color: #f9fafb;
        }
        .edit-icon {
          color: #9ca3af;
          font-size: 16px;
        }
        .input-with-icon {
          position: relative;
          display: flex;
          align-items: center;
          width: 120px;
        }
        .currency-symbol {
          position: absolute;
          left: 8px;
          color: #6b7280;
          pointer-events: none;
        }
        .price-input {
          width: 100%;
          padding: 4px 8px 4px 20px;
          border: 1px solid #e5e7eb;
          border-radius: 4px;
          font-size: 14px;
          outline: none;
        }
        .price-input:focus {
          border-color: #3b82f6;
        }
      `}</style>
    </section>
  );
};

export default PriceSlider;
