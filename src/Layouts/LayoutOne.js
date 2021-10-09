import React from "react";
import PropTypes from "prop-types";
import Header from "../Wrappers/Header";
import Footer from "../Wrappers/Footer";
import { Fragment } from "react";

const LayoutOne = ({ children }) => {
  return (
    <Fragment>
      <div className="page-wrapper">
        <Header />
        {children}
        <Footer />
      </div>
    </Fragment>
  );
};

LayoutOne.propTypes = {
  children: PropTypes.any,
};

export default LayoutOne;
