import React from "react";

import Carousel from "react-bootstrap/Carousel";
import ScrollImage from "../../asset/scrollimage.svg";
import RatingStar from "../../asset/ratingstar.svg";
import Variant from "../../asset/variant.svg";
import Calendar from "../../asset/calendar.svg";
import Time from "../../asset/time.svg";
import Guest from "../../asset/guest.svg";
import Plus from "../../asset/plus.svg";
import PiggyBank from "../../asset/rightpiggy.svg";
import Lock from "../../asset/lock.svg";
import Trophy from "../../asset/trophy.svg";

import "./RightSection.css";

const RightSection = () => {
  const carouselData = [
    {
      id: 1,
      title: "First slide label",
      image: ScrollImage,
    },
    {
      id: 2,
      title: "Second slide label",
      image: ScrollImage,
    },
    {
      id: 3,
      title: "Third slide label",
      image: ScrollImage,
    },
  ];
  return (
    <div>
      <p className="right_heading">Confirm & Pay</p>
      <div className="right">
        <div className="right_padding" style={{ paddingBottom: 0 }}>
          <div className="scroll-box">
            <Carousel slide={false} interval={null}>
              {carouselData.map((item) => (
                <Carousel.Item key={item.id}>
                  <div className="image-container">
                    <img src={item.image} alt="" />
                    <button className="button-top-left">
                      <img src={Trophy} alt="" /> BestSellar
                    </button>
                  </div>

                  <Carousel.Caption>
                    <h3>{item.title}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="details">
            <div className="rating">
              <span>
                <img src={RatingStar} alt="" />
              </span>
              <span className="average">4.9</span>
              <span className="review">(4.5k)</span>
              <span>&#8226; &lt;category&gt;</span>
            </div>
            <h3 className="details_head">
              Amsterdam open boat canal cruise - Live Guiye - from Anne Frank
              Housef
            </h3>
            <p className="details_text">
              <span>
                <img src={Variant} alt="" />
              </span>
              &lt;ticket type - variant&gt;
            </p>
            <p className="details_text">
              <span>
                <img src={Calendar} alt="" />
              </span>
              &lt;day&gt;, &lt;month&gt; &lt;date&gt;
            </p>
            <p className="details_sm_text">Duration: &lt;duration&gt;</p>
            <p className="details_text">
              <span>
                <img src={Time} alt="" />
              </span>
              &lt;time&gt;
            </p>
            <p>Operating hours: &lt;time&gt; to &lt;time&gt;</p>
            <p className="details_text">
              <span>
                <img src={Guest} alt="" />
              </span>
              5 guests
            </p>
          </div>
          <div className="payment-summary">
            <p>View payment summary</p>
            <div>
              <img src={Plus} alt="" width={16} height={16} />
            </div>
          </div>
        </div>
        <hr />

        <div className="payable right_padding">
          <div className="payable-info">
            <div>
              <p className="payable_info_head">Total payable</p>
              <button className="saved_price_btn">
                <img src={PiggyBank} alt="" />
                You saved &lt;price&gt;
              </button>
            </div>
            <div>
              <p className="payable_info_payment">$XXX</p>
            </div>
          </div>
          <p className="payable_sm">You will be charged in AED</p>
          <p className="condition_head">
            By clicking “confirm & pay”, you agree to
            <a href="https://www.google.com/" style={{ color: "#3A5CCC" }}>
              Tickete’s general terms and conditions
            </a>{" "}
            and{" "}
            <a href="https://www.google.com/" style={{ color: "#3A5CCC" }}>
              cancellation policy
            </a>
            .
          </p>
          <button className="confirm_pay_btn">
            <img src={Lock} alt="" />
            Confirm & pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
