import React from "react";
import { multilanguage } from "redux-multilanguage";
import NavMenu from "../Components/Header/NavMenu";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Header = ({ strings, icons, texts }) => {
  return (
    <div>
      <NavMenu strings={strings} icons={icons} texts={texts} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    icons: state.iconsData.icons,
    texts: state.textsData.texts,
  };
};

export default multilanguage(connect(mapStateToProps)(Header));
