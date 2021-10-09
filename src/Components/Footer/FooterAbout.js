import React from "react";
import { connect } from "react-redux";
import { multilanguage } from "redux-multilanguage";

const FooterAbout = ({ icons }) => {
  console.log(icons.logo);
  return (
    <div className="col-lg-3 col-md-6">
      <div className="footer-col">
        <a href="#">
          <img src={icons.logo} alt="Logo" />
        </a>
        <p className="f1 fw-6 text-white">
          We pride ourselves on giving you the best quality Service and Repairs.
          After 30 years experience in the caravan industry.
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    icons: state.iconsData.icons,
  };
};

export default multilanguage(connect(mapStateToProps)(FooterAbout));
