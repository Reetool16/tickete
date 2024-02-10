import React from "react";

import Logo from "../../asset/logo.svg";
import HeaderLock from "../../asset/headerlock.svg";
import HeaderQuestion from "../../asset/headerques.svg";
import LeftArrow from "../../asset/leftarrow.svg";

import "./Header.css"; // Import CSS file for styling

const Header = () => {
  return (
    <>
      <div className="header_light">
        <div className="header_content">
          <div>
            <img src={Logo} alt="" className="header_logo" />
            <img src={LeftArrow} alt="" className="mbl_logo" />
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <img src={HeaderLock} alt="" />
            <p className="checkout">Checkout</p>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <img src={HeaderQuestion} alt="" />
            <p className="help">Help</p>
          </div>
        </div>
      </div>
      <div className="header_dark">
        <p className="content">Holding your tickets for 30:00</p>
      </div>
    </>
  );
};

export default Header;
