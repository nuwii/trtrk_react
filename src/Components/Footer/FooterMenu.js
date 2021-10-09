import React, { Fragment } from "react";

const FooterMenu = () => {
  return (
    <Fragment>
      {" "}
      {/* /.col-xl-3 */}
      <div className="col-lg-3 col-md-6 d-flex justify-content-xl-center">
        <div className="footer-col">
          <h2>company</h2>
          <ul>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="contact.html">Book Online</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
        {/* /.footer-col */}
      </div>
      {/* /.col-xl-3 */}
      <div className="col-lg-3 col-md-6">
        <div className="footer-col">
          <h2>services</h2>
          <ul>
            <li>
              <a href="single-service.html">General repairs</a>
            </li>
            <li>
              <a href="single-service.html">Insurance repairs</a>
            </li>
            <li>
              <a href="single-service.html">Warranty repairs</a>
            </li>
            <li>
              <a href="single-service.html">Installation &amp; Modifications</a>
            </li>
            <li>
              <a href="single-service.html">Servicing &amp; Maintenance</a>
            </li>
          </ul>
        </div>
        {/* /.footer-col */}
      </div>
      {/* /.col-xl-3 */}
      <div className="col-lg-3 col-md-6">
        <div className="footer-col">
          <h2>contact</h2>
          <h4>
            855 Road Broklyn Street, 600
            <br />
            New York, USA
          </h4>
          <ul>
            <li>
              <span>
                <i className="fa fa-envelope c1" />
                needhelp@Carivon.com
              </span>
            </li>
            <li>
              <span>
                <i className="fa fa-phone-square c1" />
                666 888 0000
              </span>
            </li>
          </ul>
        </div>
        {/* /.footer-col */}
      </div>
      {/* /.col-xl-3 */}
    </Fragment>
  );
};
export default FooterMenu;
