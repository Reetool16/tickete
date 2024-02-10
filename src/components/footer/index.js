import React from "react";
import FooterLogo from "../../asset/footerlogo.svg";

import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="custom_container">
        <div className="logo-container">
          <img src={FooterLogo} alt="footer Logo" className="logo" />
        </div>
      </div>
      <hr className="footer_hr" />
      <div className="custom_container" style={{ paddingTop: 0 }}>
        <ul class="links " style={{ paddingTop: 0 }}>
          <li>Made with ❤️</li>
          <li>Privacy policy</li>
          <li>Terms of usage</li>
          <li>Cancellation policy</li>
          <li>Sitemap</li>
        </ul>
        <span className="mbl_footer_text">Made with ❤️</span>
      </div>
    </footer>
  );
};

export default Footer;
