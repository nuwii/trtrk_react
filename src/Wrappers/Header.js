import React from "react";
import { multilanguage } from "redux-multilanguage";
import NavMenu from "../Components/Header/NavMenu";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { changeLanguage } from "redux-multilanguage";
const Header = ({ strings, icons, texts, dispatch }) => {
  dispatch(changeLanguage("en"));

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
Header.propTypes = {
  dispatch: PropTypes.func,
};
export default multilanguage(connect(mapStateToProps)(Header));
