import React from "react";
import Box from "../box";

import CloseButton from "../../asset/closebutton.svg";
import InputAddOn from "../../asset/inputaddon.svg";
import Radio from "../../asset/radio.svg";
import PiggyBank from "../../asset/piggybank.svg";
import Lock from "../../asset/lock.svg";
import RightSection from "../rightSection";
import Visa from "../../asset/visa.svg";
import MasterCard from "../../asset/mastercard.svg";
import DinersClub from "../../asset/dinersclub.svg";
import ApplePay from "../../asset/applepay.svg";
import GooglePay from "../../asset/googlepay.svg";
import BoxRadio from "../../asset/boxradio.svg";
import PayableInfo from "../../asset/payableinfo.svg";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="custom_container">
      <div className="hero_container">
        <div className="left">
          <h1 className="left_heading">Confirm & Pay</h1>

          <Box
            className={"cancel_container"}
            background={{ background: "#FCFCFD" }}
          >
            <div className="cancel_text_container">
              <p className="cancel_text_container_head">Free cancellation</p>
              <p className="cancel_text_container_text">
                Tickets can be cancelled by 13th December, 2022.
              </p>
            </div>
            <div className="image-container">
              <img src={CloseButton} alt="" />
            </div>
          </Box>

          <div className="user_details">
            <div>
              <p className="user_details_head">Enter your details</p>
              <p className="user_details_text">
                We'll be sending your tickets to the details below. Booking for
                a friend? Add their details.
              </p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Full Name *"
                className="code_input full_width"
                required
              />
              <div className="inline-inputs">
                <select
                  className="code_input"
                  placeholder="Country Code *"
                  required
                >
                  <option value="" disabled selected>
                    Country Code
                  </option>
                </select>
                <input
                  type="text"
                  placeholder="Phone Number *"
                  className="code_input"
                  required
                />
              </div>
              <div className="inline-inputs">
                <input
                  type="email"
                  placeholder="Email *"
                  className="code_input"
                  required
                />
                <input
                  type="email"
                  placeholder="Confirm Email *"
                  className="code_input"
                  required
                />
              </div>
            </div>
          </div>
          <hr style={{ marginBottom: "0" }} />
          <div className="additional_details">
            <div>
              <p className="user_details_head">Additional information</p>
              <p className="user_details_text">
                We need a few more details to complete your reservation.
              </p>
            </div>
            <div>
              <div className="inline-inputs">
                <input
                  type="text"
                  placeholder="Input Label *"
                  className="code_input"
                  required
                />
                <select className="code_input" placeholder="Select *" required>
                  <option value="" disabled selected>
                    Country Code
                  </option>
                </select>
              </div>
              <select
                placeholder="Multiselect *"
                className="code_input full_width"
                required
              >
                <option value="" disabled selected>
                  Country Code
                </option>
              </select>
            </div>
          </div>
          <hr style={{ marginBottom: "0", marginTop: "40px" }} />
          <div className="payments_details">
            <div>
              <p className="user_details_head">Select your mode of payment</p>
              <p className="user_details_text">
                Payments with Tickete are secure and encrypted.
              </p>
            </div>
            <div className="payment-form">
              <div className="payment_header">
                <div className="payment_left_header">
                  <img src={InputAddOn} alt="" />
                  <h2 className="payment_head">Credit & Debit Card</h2>
                </div>
                <div>
                  <img src={Radio} alt="" />
                </div>
              </div>
              <div className="payment_method">
                <span>
                  <img src={Visa} alt=" 1" />
                </span>
                <span style={{ margin: "0 8px" }}>
                  <img src={MasterCard} alt=" 2" />
                </span>
                <span>
                  <img src={DinersClub} alt=" 3" />
                </span>
              </div>
              <form>
                <div className="input_groups">
                  <input
                    type="text"
                    placeholder="Name on card *"
                    required
                    className="payments_inputs"
                  />
                  <input
                    type="text"
                    placeholder="Card number *"
                    required
                    className="payments_inputs"
                  />
                </div>

                <div className="input_groups">
                  <input
                    type="text"
                    placeholder="Expiry date *"
                    required
                    className="payments_inputs"
                  />
                  <input
                    type="text"
                    placeholder="CVV/CVC *"
                    required
                    className="payments_inputs"
                  />
                </div>

                <div className="total_payable">
                  <div className="total_payable_head">
                    <div className="total_payable_head_right">
                      <p>Total payable: $XXX</p>
                      <p>You will be charged in AED</p>
                    </div>
                    <div>
                      <button className="saving_btn">
                        <img src={PiggyBank} alt="" />
                        You save {`<price>`}
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="condition_head">
                      By clicking “confirm & pay”, you agree to
                      <a
                        href="https://www.google.com"
                        style={{ color: "#3A5CCC" }}
                      >
                        Tickete’s general terms and conditions
                      </a>
                      and
                      <a
                        href="https://www.google.com"
                        style={{ color: "#3A5CCC" }}
                      >
                        cancellation policy
                      </a>
                      .
                    </p>
                    <button type="submit" className="cnfrm_btn">
                      <img src={Lock} alt="" /> Confirm & pay
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <Box
              className={"pay_container"}
              background={{ background: "#F9F9FB" }}
            >
              <div>
                <p className="pay_text_container_head">
                  <img src={ApplePay} alt="" style={{ marginRight: "8px" }} />{" "}
                  Coming soon
                </p>
              </div>
              <div className="image-container">
                <img src={BoxRadio} alt="" />
              </div>
            </Box>

            <Box
              className={"pay_container"}
              background={{ background: "#F9F9FB" }}
            >
              <div>
                <p className="pay_text_container_head">
                  <img src={GooglePay} alt="" style={{ marginRight: "8px" }} />
                  Coming soon
                </p>
              </div>
              <div className="image-container">
                <img src={BoxRadio} alt="" />
              </div>
            </Box>
          </div>

          <div>
            <p className="left_total_payable">Total Payable: $XXX </p>
            <Box
              className={"totalpayable_container"}
              background={{ background: "transparent" }}
            >
              <div className="image-container">
                <img src={PayableInfo} alt="" />
              </div>
              <div className="cancel_text_container">
                <p className="cancel_text_container_head">
                  You will be charged in AED
                </p>
                <p className="cancel_text_container_text">
                  The price shown here is in US Dollar (USD) as per the current
                  conversion rate. You will be charged in United Arab Emirates
                  Dirham (AED).
                </p>
              </div>
            </Box>
          </div>
        </div>
        <RightSection />
      </div>
      <hr style={{ border: "1px solid #DDDDE3", marginTop: "32px" }} />
    </div>
  );
};

export default Hero;
