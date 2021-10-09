import React from "react";
import FooterAbout from "../Components/Footer/FooterAbout";
import FooterMenu from "../Components/Footer/FooterMenu";
import FooterBottom from "../Components/Footer/FooterBottom";

const Footer = () => {
  return (
    <div>
      <div className="crop">
        <div className="footer-middle">
          <div className="container">
            <div className="row justify-content-center footerMiddle">
              <FooterAbout />
              <FooterMenu />
              {/* /.row */}
            </div>
          </div>
          {/* /.container */}
        </div>
        <FooterBottom />
        {/* /.footer-middle */}
      </div>
    </div>
  );
};
export default Footer;
