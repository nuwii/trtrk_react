import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { multilanguage } from "redux-multilanguage";
import Contact from "../../Pages/Contact";

const NavMenu = ({ strings, icons, texts }) => {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <div className="site-header header-one">
        <div className="top-header">
          <div className="container clearfix">
            <div className="logo-box float-left">
              <Link to="/">
                <img style={{ maxWidth: "10em" }} src={icons.logo} alt />
              </Link>
            </div>
            {/* /.logo-box */}
            <div className="float-right right-contact-block phoneVisible">
              <div className="single-right-contact">
                <div className="icon-block">
                  <i className={icons["mapIcon"]} />
                  {/* /.Carivon-icon-placeholder */}
                </div>
                {/* /.icon-block */}
                <div className="text-block">
                  <p>
                    <span>{texts["address"]}</span>
                  </p>
                </div>
                {/* /.text-block */}
              </div>
              {/* /.single-right-contact */}
              <div className="single-right-contact">
                <div className="icon-block">
                  <i className={icons["phoneIcon"]} />
                  {/* /.Carivon-icon-placeholder */}
                </div>
                {/* /.icon-block */}
                <div className="text-block">
                  <p>
                    <span>{texts["phoneNumber"]}</span>
                  </p>
                </div>
                {/* /.text-block */}
              </div>
              {/* /.single-right-contact */}

              {/* /.single-right-contact */}
              <div
                style={{ backgroundColor: "red" }}
                className="single-right-contact"
              >
                <a href="/teklifAl" className="header-btn">
                  TEKL??F AL
                </a>
                {/* /.header-btn */}
              </div>
              {/* /.single-right-contact */}
            </div>
            {/* /.float-right */}
          </div>
          {/* /.container */}
        </div>
        {/* /.top-header */}
        <div className="navbar navbar-expand-lg navbar-light header-navigation stricky header-style-one">
          <div className="container clearfix">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="logo-box clearfix">
              <button
                className="menu-toggler"
                data-target={"#main-nav-bar"}
                onClick={() => setShow(!show)}
              >
                <span className="fa fa-bars" />
              </button>
            </div>
            {/* /.logo-box */}
            {/* Collect the nav links, forms, and other content for toggling */}
            <div
              className="main-navigation"
              style={show ? { display: "block" } : { display: "none" }}
              id="main-nav-bar"
            >
              <ul className="navigation-box">
                <li className="current">
                  <Link style={{ textDecoration: "none" }} to="/">
                    {strings["home"]}
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/hakkimizda">
                    {strings["about"]}
                  </Link>
                </li>
                {/* //////////////////////////////////    de??i??ecek    /////////////////////////////////// */}
                <li>
                  <Link style={{ textDecoration: "none" }} to="/hizmetlerimiz">
                    Hizmetlerimiz
                  </Link>

                  <ul className="sub-menu">
                    <li>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/turizm-tasimacilik"
                      >
                        Turizm Ta????mac??l??k
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/kongre-toplanti-organizasyon"
                      >
                        Kongre-Toplant??-Organizasyon
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/filo-kiralama"
                      >
                        Filo Kiralama
                      </Link>
                    </li>
                    <li>
                      <Link style={{ textDecoration: "none" }} to="/vip">
                        V.I.P.
                      </Link>
                    </li>
                    {/* <li>
                      <a href="#">Header Styles</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="index.html">Header Style 01</a>
                        </li>
                        <li>
                          <a href="index-2.html">Header Style 02</a>
                        </li>
                      </ul>
                    </li> */}
                  </ul>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/teklifAl">
                    {" "}
                    {strings["getQoute"]}{" "}
                  </Link>
                </li>

                <li>
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://turturk.com.tr/iletisim"
                  >
                    {strings["contact"]}
                  </a>
                </li>
              </ul>
            </div>
            {/* /.navbar-collapse */}
            <div className="right-side-box">
              <div className="social">
                <a target="_blank" href={texts["facebook"]}>
                  <i className={icons["facebookIcon"]} />
                </a>
                {/*
                 */}
                <a target="_blank" href={texts["instagram"]}>
                  <i className={icons["instagramIcon"]} />
                </a>
                {/*
                 */}
                <a target="_blank" href={texts["twitter"]}>
                  <i className={icons["twitterIcon"]} />
                </a>
                {/*
                 */}
                <a target="_blank" href={texts["linkedin"]}>
                  <i className={icons["linkedinIcon"]} />
                </a>
              </div>
              {/* /.social */}
            </div>
            {/* /.right-side-box */}
          </div>
          {/* /.container */}
        </div>
      </div>
    </Fragment>
  );
};

export default NavMenu;
